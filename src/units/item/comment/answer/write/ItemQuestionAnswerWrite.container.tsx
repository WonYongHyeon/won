import { useMutation } from "@apollo/client";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  UPDATE_USEDITEM_QUESTION_ANSWER,
} from "./ItemQuestionAnswerWrite.queries";
import {
  IForm,
  IItemQuestionWriteProps,
} from "./ItemQuestionAnswerWrite.types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import ItemQuestionWriteUI from "./ItemQuestionAnswerWrite.presenter";

const schema = yup.object({
  contents: yup.string().required("필수 입력 사항입니다."),
});

export default function ItemQuestionAnswerWrite(
  props: IItemQuestionWriteProps
) {
  const { register, handleSubmit } = useForm<IForm>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USEDITEM_QUESTION_ANSWER
  );

  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USEDITEM_QUESTION_ANSWER
  );

  const onClickSubmitButton = async (data: IForm) => {
    await createUseditemQuestionAnswer({
      variables: {
        createUseditemQuestionAnswerInput: {
          contents: data.contents,
        },
        useditemQuestionId: props.useditemQuestionId,
      },
    });
    props.setItemId("");
  };

  const onClickSubmitEditButton = async (data: IForm) => {
    await updateUseditemQuestionAnswer({
      variables: {
        updateUseditemQuestionAnswerInput: {
          contents: data.contents,
        },
        useditemQuestionAnswerId: props.useditemQuestionAnswerId,
      },
    });
    if (props.setEditAnswerId) props.setEditAnswerId("");
  };

  return (
    <>
      <ItemQuestionWriteUI
        defaultContents={props.defaultContents || ""}
        register={register}
        handleSubmit={handleSubmit}
        onClickSubmitButton={onClickSubmitButton}
        onClickSubmitEditButton={onClickSubmitEditButton}
      />
    </>
  );
}
