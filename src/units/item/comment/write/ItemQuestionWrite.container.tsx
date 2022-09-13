import { useMutation } from "@apollo/client";
import {
  CREATE_USEDITEM_QUESTION,
  UPDATE_USEDITEM_QUESTION,
} from "./ItemQuestionWrite.queries";
import { IData, IItemQuestionWriteProps } from "./ItemQuestionWrite.types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import ItemQuestionWriteUI from "./ItemQuestionWrite.presenter";
import { ChangeEvent, useState } from "react";

const schema = yup.object({
  contents: yup.string().required("필수 입력 사항입니다."),
});

export default function ItemQuestionWrite(props: IItemQuestionWriteProps) {
  const [contents, setContents] = useState("");

  const { register, handleSubmit, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);

  const onClickSubmitButton = async (data: IData) => {
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

  const onClickSubmitEditButton = async (data: IData) => {
    await updateUseditemQuestion({
      variables: {
        updateUseditemQuestionInput: {
          contents: data.contents,
        },
        useditemQuestionId: props.editId,
      },
    });

    if (props.setEditId !== undefined) props.setEditId("");
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
        useditemId={props.useditemId}
        register={register}
        handleSubmit={handleSubmit}
        onClickSubmitButton={onClickSubmitButton}
        onClickSubmitEditButton={onClickSubmitEditButton}
        onChangeContents={onChangeContents}
      />
    </>
  );
}
