import ProductNewUI from "./ItemNew.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./ItemNew.queries";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { IForm, IProductNewProps } from "./ItemNew.types";

const schema = yup.object({
  name: yup.string().required("필수 입력 사항입니다."),
  remarks: yup.string().required("필수 입력 사항입니다."),
  contents: yup.string().required("필수 입력 사항입니다."),
  price: yup.number().required().min(0).max(1000000000),
  images: yup.array(),
});

export default function ItemNew(props: IProductNewProps) {
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState<string[]>([]);
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);
  const { register, handleSubmit, formState, setValue, trigger, getValues } =
    useForm<IForm>({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickSubmit = async (data: IForm) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
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

  const onClickEdit = async (data: IForm) => {
    if (props.fetchData) {
      if (
        props.fetchData.fetchUseditem.name === data.name &&
        props.fetchData.fetchUseditem.remarks === data.remarks &&
        props.fetchData.fetchUseditem.price === data.price &&
        props.fetchData.fetchUseditem.contents === data.contents &&
        props.fetchData.fetchUseditem.images === fileUrls
      ) {
        Modal.error({
          content: "변경 사항이 없습니다.",
        });
        return;
      }
    }

    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
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

  const onChangeGifticon = (index: number, url: string) => {
    setValue("remarks", url);
    trigger("remarks");
  };

  useEffect(() => {
    if (props.fetchData?.fetchUseditem?.images?.length !== undefined) {
      setFileUrls([...props.fetchData?.fetchUseditem?.images]);
    }
    onChangeContents(props.fetchData?.fetchUseditem?.contents || "");
    onChangeGifticon(1, props.fetchData?.fetchUseditem?.remarks || "");
  }, []);

  return (
    <ProductNewUI
      fetchData={props.fetchData}
      isEdit={props.isEdit}
      register={register}
      handleSubmit={handleSubmit}
      getValues={getValues}
      isActive={formState.isValid}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      fileUrls={fileUrls}
      onChangeFiles={onChangeFiles}
      onChangeGifticon={onChangeGifticon}
      onChangeContents={onChangeContents}
    ></ProductNewUI>
  );
}
