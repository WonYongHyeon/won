import ProductNewUI from "./ItemNew.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./ItemNew.queries";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { IProductNewProps } from "./ItemNew.types";
import axios from "axios";

const schema = yup.object({
  name: yup.string().required("필수 입력 사항입니다."),
  remarks: yup.string().required("필수 입력 사항입니다."),
  contents: yup.string().required("필수 입력 사항입니다."),
  price: yup.number().required().min(0).max(100000000),
  images: yup.array(),
  lat: yup.number().required(),
  lng: yup.number().required(),
  address: yup.string(),
  addressDetail: yup.string(),
});

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ItemNew(props: IProductNewProps) {
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState<string[]>([]);
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);
  const { register, handleSubmit, formState, setValue, trigger, watch } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onChangeMap = (latlat: number, lnglng: number, address: string) => {
    setValue("lat", latlat);
    trigger("lat");
    setValue("lng", lnglng);
    trigger("lng");
    setValue("address", address);
    trigger("address");
  };

  const onClickSubmit = async (data: any) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            useditemAddress: {
              lat: data.lat,
              lng: data.lng,
              address: data.address,
              addressDetail: data.addressDetail,
            },
            images: fileUrls,
          },
        },
      });
      Modal.success({
        content: "상품 등록에 성공했습니다.",
        onOk() {
          router.push(`/markets/${result.data.createUseditem._id}`);
        },
      });
    } catch (e) {
      alert(e);
    }
  };

  const onClickEdit = async (data: any) => {
    if (
      props.fetchData.fetchUseditem.name === data.name &&
      props.fetchData.fetchUseditem.remarks === data.remarks &&
      props.fetchData.fetchUseditem.price === data.price &&
      props.fetchData.fetchUseditem.contents === data.contents &&
      props.fetchData.fetchUseditem.useditemAddress.lng === data.lng &&
      props.fetchData?.fetchUseditem.useditemAddress.addressDetail ===
        data.addressDetail &&
      props.fetchData.fetchUseditem.images === fileUrls
    ) {
      Modal.error({
        content: "변경 사항이 없습니다.",
      });
      return;
    }

    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            useditemAddress: {
              lat: data.lat,
              lng: data.lng,
              address: data.address,
              addressDetail: data.addressDetail,
            },
            images: fileUrls,
          },
          useditemId: router.query.id,
        },
      });

      Modal.success({
        content: "수정에 성공했습니다.",
        onOk() {
          router.push(`/markets/${result.data.updateUseditem._id}`);
        },
      });
    } catch (error) {
      Modal.error({
        content: "error",
      });
    }
  };

  function onChangeFiles(index: number, url: string) {
    // 기존 state들을 담아줍니다.
    const newFileUrls = [...fileUrls];
    // 세개의 버튼 중 이미 사진이 들어있는 곳을 클릭했다면 덮어씌워줍니다.
    if (newFileUrls[index]) {
      newFileUrls[index] = url;
    } else {
      // 빈 곳이라면 맨 뒤에 추가해줍니다.
      newFileUrls.push(url);
    }
    // 변경된 배열을 state에 저장해줍니다.
    setFileUrls([...newFileUrls]);
  }

  useEffect(() => {
    if (props.fetchData?.fetchUseditem?.images?.length !== undefined) {
      setFileUrls([...props.fetchData?.fetchUseditem?.images]);
    }
    onChangeContents(props.fetchData?.fetchUseditem?.contents);
  }, []);

  function getLocation() {
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        function (position) {
          alert(position.coords.latitude + " " + position.coords.longitude);
        },
        function (error: any) {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    } else {
      alert("GPS를 지원하지 않습니다");
    }
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=e9296fe33b397dd0a03600f2bea162bf&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스

        const lat =
          props.fetchData?.fetchUseditem.useditemAddress.lat || 37.5740381;
        const lng =
          props.fetchData?.fetchUseditem.useditemAddress.lng || 126.9745863;

        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(lat, lng), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(lat, lng);

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          async function (mouseEvent: any) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            const latlat = latlng.getLat();
            const lnglng = latlng.getLng();

            await axios
              .get(
                `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lnglng}&y=${latlat}`,
                {
                  headers: {
                    Authorization: "KakaoAK 0ca862a21595c12242631d905d393971",
                  },
                }
              )
              .then((res) => {
                onChangeMap(
                  latlat,
                  lnglng,
                  res.data.documents[0].address.address_name
                );
              });
          }
        );
      });
    };
  }, []);

  return (
    <ProductNewUI
      fetchData={props.fetchData}
      isEdit={props.isEdit}
      register={register}
      handleSubmit={handleSubmit}
      isActive={formState.isValid}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      fileUrls={fileUrls}
      onChangeFiles={onChangeFiles}
      onChangeContents={onChangeContents}
    ></ProductNewUI>
  );
}
