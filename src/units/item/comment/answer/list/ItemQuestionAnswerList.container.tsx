import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { MouseEvent, useEffect, useState } from "react";
import ItemQuestionListUI from "./ItemQuestionAnswerList.presenter";
import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
  FETCH_USER_LOGGED_IN,
} from "./ItemQuestionAnswerList.queries";
import { IItemQuestionAnswersListProps } from "./ItemQuestionAnswerList.types";

export default function ItemQuestionAnswersList(
  props: IItemQuestionAnswersListProps
) {
  const [editAnswerId, setEditAnswerId] = useState("");

  const { data, fetchMore, loading, refetch } = useQuery(
    FETCH_USEDITEM_QUESTION_ANSWERS,
    {
      variables: {
        useditemQuestionId: props.useditemQuestionId,
      },
    }
  );

  const { data: userId } = useQuery(FETCH_USER_LOGGED_IN);

  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USEDITEM_QUESTION_ANSWER
  );

  const loadFunc = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditemQuestionAnswers.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemQuestionAnswers) {
          return {
            fetchUseditemQuestionAnswers: [
              ...prev.fetchUseditemQuestionAnswers,
            ],
          };
        }
        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult?.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  };

  const onClickEditButton = (event: MouseEvent<HTMLImageElement>) => {
    setEditAnswerId(event.currentTarget.id);
  };

  const onClickDeleteButton = (event: MouseEvent<HTMLImageElement>) => {
    Modal.warning({
      content: "정말로 삭제하시겠습니까?",
      async onOk() {
        await deleteUseditemQuestionAnswer({
          variables: {
            useditemQuestionAnswerId: event.currentTarget.id,
          },
        });
        refetch();
      },
    });
  };

  useEffect(() => {
    refetch();
  });

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <ItemQuestionListUI
          editAnswerId={editAnswerId}
          setEditAnswerId={setEditAnswerId}
          userId={userId}
          data={data}
          loadFunc={loadFunc}
          onClickEditButton={onClickEditButton}
          onClickDeleteButton={onClickDeleteButton}
        ></ItemQuestionListUI>
      )}
    </>
  );
}
