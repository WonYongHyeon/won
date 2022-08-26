import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USEDITEM_QUESTION,
  CREATE_USEDITEM_QUESTION_ANSWER,
  UPDATE_USEDITEM_QUESTION_ANSWER,
} from "./ItemQuestionAnswerWrite.queries";
import { IItemQuestionWriteProps } from "./ItemQuestionAnswerWrite.types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import ItemQuestionWriteUI from "./ItemQuestionAnswerWrite.presenter";
import { useRouter } from "next/router";

const schema = yup.object({
  contents: yup.string().required("필수 입력 사항입니다."),
});

export default function ItemQuestionAnswerWrite(props: any) {
  const router = useRouter();

  const { register, handleSubmit, formState, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USEDITEM_QUESTION_ANSWER
  );

  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USEDITEM_QUESTION_ANSWER
  );

  const onClickSubmitButton = async (data: any) => {
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

  const onClickSubmitEditButton = async (data: any) => {
    await updateUseditemQuestionAnswer({
      variables: {
        updateUseditemQuestionAnswerInput: {
          contents: data.contents,
        },
        useditemQuestionAnswerId: props.useditemQuestionAnswerId,
      },
    });
    props.setEditAnswerId("");
  };

  // const { data, fetchMore } = useQuery(CREATE_USEDITEM_QUESTION, {
  //   variables: {
  //     useditemId: props.useditemId,
  //   },
  // });

  // const onToggleModal = () => {
  //   setIsModalVisible((prev) => !prev);
  // };

  // const loadFunc = () => {
  //   if (!data) return;

  //   fetchMore({
  //     variables: {
  //       page: Math.ceil(data.fetchBoardComments.length / 10) + 1,
  //       boardId: props?.boardId,
  //     },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (!fetchMoreResult.fetchBoardComments) {
  //         return {
  //           fetchBoardComments: [...prev.fetchBoardComments],
  //         };
  //       }
  //       return {
  //         fetchBoardComments: [
  //           ...prev.fetchBoardComments,
  //           ...fetchMoreResult.fetchBoardComments,
  //         ],
  //       };
  //     },
  //   });
  // };

  return (
    <>
      <ItemQuestionWriteUI
        defaultContents={props.defaultContents}
        register={register}
        handleSubmit={handleSubmit}
        onClickSubmitButton={onClickSubmitButton}
        onClickSubmitEditButton={onClickSubmitEditButton}
        // data={data}
        // loadFunc={loadFunc}
      />
    </>
  );
}
