import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
  UPDATE_USEDITEM_QUESTION,
} from "./ItemQuestionWrite.queries";
import { IItemQuestionWriteProps } from "./ItemQuestionWrite.types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import ItemQuestionWriteUI from "./ItemQuestionWrite.presenter";
import { useRouter } from "next/router";
import { ChangeEvent, useCallback, useState } from "react";

const schema = yup.object({
  contents: yup.string().required("필수 입력 사항입니다."),
});

export default function ItemQuestionWrite(props: any) {
  const router = useRouter();
  const [contents, setContents] = useState("");

  const { register, handleSubmit, formState, watch, setValue, trigger } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);

  const onClickSubmitButton = async (data: any) => {
    await createUseditemQuestion({
      variables: {
        createUseditemQuestionInput: {
          contents: data.contents,
        },
        useditemId: props.useditemId,
      },
    });

    setValue("contents", "");
    trigger("contents");
    props.refetch();
  };

  const onClickSubmitEditButton = async (data: any) => {
    await updateUseditemQuestion({
      variables: {
        updateUseditemQuestionInput: {
          contents: data.contents,
        },
        useditemQuestionId: props.editId,
      },
    });
    props.setEditId("");
    props.refetch();
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  return (
    <>
      <ItemQuestionWriteUI
        editId={props.editId}
        defaultContents={props.defaultContents}
        fetchQuestion={props.fetchQuestion}
        useditemId={props.useditemId}
        register={register}
        handleSubmit={handleSubmit}
        onClickSubmitButton={onClickSubmitButton}
        onClickSubmitEditButton={onClickSubmitEditButton}
        onChangeContents={onChangeContents}
        // data={data}
        // loadFunc={loadFunc}
      />
    </>
  );
}
