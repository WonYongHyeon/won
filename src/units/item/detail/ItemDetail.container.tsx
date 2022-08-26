import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swal from "sweetalert2";
import ItemDetailUI from "./ItemDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USEDITEM,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USEDITEM_PICK,
} from "./ItemDetail.queries";
import { IItemDetailProps } from "./ItemDetail.types";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ItemDetail(props: IItemDetailProps) {
  const router = useRouter();

  const { data: loginUserId } = useQuery(FETCH_USER_LOGGED_IN);

  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const [deleteUseditem] = useMutation(DELETE_USEDITEM);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  const onClickPick = async () => {
    await toggleUseditemPick({
      variables: {
        useditemId: props.data.fetchUseditem._id,
      },
    });
    props.useditemRefetch();
  };

  const onClickMoveEditPage = () => {
    router.push(`/markets/${router.query.id}/edit`);
  };

  const onClickMoveItemListPage = () => {
    router.push("/markets");
  };

  const onClickDeleteItem = async () => {
    await deleteUseditem({
      variables: {
        useditemId: props.data.fetchUseditem._id,
      },
    });
    router.push("/markets");
  };

  const onClickBuyItem = async () => {
    Swal.fire({
      icon: "info",
      text: `해당 물품의 가격은 ${props.data.fetchUseditem.price}원 입니다.
      정말 구입하시겠습니까?`,
      showCancelButton: true,
    }).then((response) => {
      if (response.isConfirmed) {
        createPointTransactionOfBuyingAndSelling({
          variables: {
            useritemId: props.data.fetchUseditem._id,
          },
        });
        Swal.fire({
          icon: "success",
          text: "결제가 완료되었습니다.",
        }).then(() => {
          router.push("/markets");
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "결제가 취소되었습니다.",
        });
      }
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=e9296fe33b397dd0a03600f2bea162bf&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("mapDetail"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            props.data?.fetchUseditem.useditemAddress.lat,
            props.data?.fetchUseditem.useditemAddress.lng
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          props.data?.fetchUseditem.useditemAddress.lat,
          props.data?.fetchUseditem.useditemAddress.lng
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
  }, []);

  return (
    <ItemDetailUI
      loginUserId={loginUserId}
      data={props.data}
      onClickPick={onClickPick}
      onClickMoveEditPage={onClickMoveEditPage}
      onClickMoveItemListPage={onClickMoveItemListPage}
      onClickDeleteItem={onClickDeleteItem}
      onClickBuyItem={onClickBuyItem}
    ></ItemDetailUI>
  );
}
