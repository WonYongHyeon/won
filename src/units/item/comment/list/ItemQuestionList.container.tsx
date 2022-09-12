import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { MouseEvent, useState } from "react";
import ItemQuestionListUI from "./ItemQuestionList.presenter";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
  FETCH_USER_LOGGED_IN,
} from "./ItemQuestionList.queries";
import { IItemQuestionListProps } from "./ItemQuestionList.types";

export default function ItemQuestionList(props: IItemQuestionListProps) {
  const [itemId, setItemId] = useState("");
  const [editId, setEditId] = useState("");

  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);

  const { data: userId } = useQuery(FETCH_USER_LOGGED_IN);
  const { data, fetchMore, loading, refetch } = useQuery(
    FETCH_USEDITEM_QUESTIONS,
    {
      variables: {
        useditemId: props.useditemId,
      },
    }
  );

  const onClickQuestionEditButton = (event: MouseEvent<HTMLImageElement>) => {
    setEditId(event.currentTarget.id);
  };

  const onClickQuestionDeleteButton = (event: MouseEvent<HTMLImageElement>) => {
    Modal.warning({
      content: "정말로 삭제하시겠습니까?",
      async onOk() {
        await deleteUseditemQuestion({
          variables: {
            useditemQuestionId: event.currentTarget.id,
          },
        });
        refetch();
      },
    });
  };

  const onClickAnswerButton = (event: MouseEvent<HTMLButtonElement>) => {
    setItemId(event.currentTarget.id);
  };

  const loadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditemQuestions.length / 10) + 1,
        useditemId: props.useditemId,
      },

      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult?.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <ItemQuestionListUI
          refetch={refetch}
          itemId={itemId}
          editId={editId}
          setEditId={setEditId}
          sellerId={props.sellerId}
          data={data}
          userId={userId?.fetchUserLoggedIn._id}
          loadFunc={loadFunc}
          onClickAnswerButton={onClickAnswerButton}
          setItemId={setItemId}
          onClickQuestionEditButton={onClickQuestionEditButton}
          onClickQuestionDeleteButton={onClickQuestionDeleteButton}
        ></ItemQuestionListUI>
      )}
    </>
  );
}
