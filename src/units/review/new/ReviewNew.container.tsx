import { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./ReviewNew.queries";
import ReviewNewUI from "./ReviewNew.presenter";
import { IData, IReviewNewProps } from "./ReviewNew.types";
import { Modal } from "antd";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  writer: yup.string().required(),
  password: yup.string().required(),
  title: yup.string().required(),
  contents: yup.string().required(),
});

export default function ReviewNew(props: IReviewNewProps) {
  const router: NextRouter = useRouter();

  const { register, handleSubmit, formState, setValue, trigger, getValues } =
    useForm<IData>({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [fileUrls, setFileUrls] = useState<string[]>([]);

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickRegistrationButton = async (data: IData) => {
    if (formState.isValid) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            images: fileUrls,
          },
        },
      });
      Swal.fire({
        icon: "success",
        text: "리뷰가 등록되었습니다.",
      }).then((rsp) => {
        if (rsp.isConfirmed === true) {
          router.push(`/review/${result.data?.createBoard._id}`);
        }
      });
    }
  };

  // 수정하기 버튼
  const onClickEdit = async (data: IData) => {
    if (!data.password) {
      Modal.error({
        content: "비밀번호가 필요합니다.",
      });
      return;
    }

    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput: {
            title: data.title,
            contents: data.contents,
            images: fileUrls,
          },
          password: data.password,
          boardId: router.query.id,
        },
      });
      Swal.fire({
        icon: "success",
        text: "리뷰가 수정되었습니다.",
      }).then((rsp) => {
        if (rsp.isConfirmed === true) {
          router.push(`/review/${result.data?.updateBoard._id}`);
        }
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        text: "리뷰 수정에 실패했습니다.",
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
    setFileUrls(props.data?.fetchBoard.images || []);
  }, [props.data]);

  return (
    <ReviewNewUI
      handleSubmit={handleSubmit}
      onChangeContents={onChangeContents}
      onClickRegistrationButton={onClickRegistrationButton}
      onClickEdit={onClickEdit}
      isEdit={props.isEdit}
      data={props.data}
      onChangeFiles={onChangeFiles}
      fileUrls={fileUrls}
      register={register}
      getValues={getValues}
    />
  );
}
