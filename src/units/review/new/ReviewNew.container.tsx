import { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";

import { CREATE_BOARD, UPDATE_BOARD, FETCH_BOARD } from "./ReviewNew.queries";
import ReviewNewUI from "./ReviewNew.presenter";
import { IReviewNewProps } from "./ReviewNew.types";
import { Modal } from "antd";
import Swal from "sweetalert2";

export default function ReviewNew(props: IReviewNewProps) {
  let isOk: boolean = false;

  const router: NextRouter = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [fileUrls, setFileUrls] = useState<string[]>([]);

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const onChangeWriter = (event: any) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
  };
  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };
  const onChangeTitle = (event: any) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
  };
  const onChangeContents = (event: any) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
  };

  const isDisabled: boolean = !(writer && password && title && contents);

  const isEditDisabled: boolean = !title && !contents;

  const onClickRegistrationButton = async () => {
    isOk = true;
    // 문자열은 무언가 들어있지 않다면 false를 반환.
    // if(!writer) {}
    if (writer === "") {
      setWriterError("작성자가 빈칸입니다.");
      isOk = false;
    }
    if (password === "") {
      setPasswordError("비밀번호가 빈칸입니다.");
      isOk = false;
    }
    if (title === "") {
      setTitleError("제목이 빈칸입니다.");
      isOk = false;
    }
    if (contents === "") {
      setContentsError("내용이 빈칸입니다.");
      isOk = false;
    }

    // 무언가 들어있으면 문자열은 true값을 반환
    // if( writer && password && title && contents) {
    if (isOk) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
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
  const onClickEdit = async () => {
    isOk = true;

    if (!title && !contents) {
      Modal.error({
        content: "수정한 내용이 없습니다.",
      });
      return;
    }

    if (!password) {
      Modal.error({
        content: "비밀번호가 필요합니다.",
      });
      return;
    }

    // 입력 되어 있는 값을 가지고 updateBoardInput 객체를 만든다.
    // 변화가 없는 경우에는 값을 넣지않고, 값을 넣지 않는 경우에는
    // 변화를 주지 않고, 즉 원래 가지고 있던 값으로 해당 ID에 해당하는
    // board를 update 한다.

    const myUpdateBoardInput: any = { boardAddress: {} };
    if (title) myUpdateBoardInput.title = title;
    if (contents) myUpdateBoardInput.contents = contents;
    if (fileUrls) myUpdateBoardInput.images = fileUrls;

    // edit에서는 입력하지 않아도 동일 내용으로 저장하는 경우를 고려하기 위해서 공백 확인을 기본적으로 하지 않는다.
    // 단, 비밀번호가 없는 경우에는 update 자체가 불가능하기 때문에 비밀번호 하나만 공백 확인을 한다.

    // 무언가 들어있으면 문자열은 true값을 반환
    // if( writer && password && title && contents) {
    try {
      if (isOk) {
        const result = await updateBoard({
          variables: {
            updateBoardInput: myUpdateBoardInput,
            password,
            boardId: router.query.id,
          },
        });
        Swal.fire({
          icon: "success",
          text: "리뷰가 등록되었습니다.",
        }).then((rsp) => {
          if (rsp.isConfirmed === true) {
            router.push(`/review/${result.data?.updateBoard._id}`);
          }
        });
      }
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
    setFileUrls(props.data.fetchBoard.images);
  }, [props.data]);

  return (
    <ReviewNewUI
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickRegistrationButton={onClickRegistrationButton}
      isDisabled={isDisabled}
      isEditDisabled={isEditDisabled}
      onClickEdit={onClickEdit}
      isEdit={props.isEdit}
      isOk={isOk}
      data={props.data}
      onChangeFiles={onChangeFiles}
      fileUrls={fileUrls}
    />
  );
}
