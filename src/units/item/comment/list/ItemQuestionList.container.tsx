import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import ItemQuestionListUI from "./ItemQuestionList.presenter";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
  FETCH_USER_LOGGED_IN,
} from "./ItemQuestionList.queries";
import { IItemQuestionListProps } from "./ItemQuestionList.types";

export default function ItemQuestionList(props: any) {
  const [itemId, setItemId] = useState("");
  const [editId, setEditId] = useState("");

  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);

  const { data: userId } = useQuery(FETCH_USER_LOGGED_IN);
  const { data, fetchMore, loading, refetch } = useQuery(
    FETCH_USEDITEM_QUESTIONS,
    {
      variables: {
        useditemId: props.useditemId,
        page: 1,
      },
    }
  );

  const onClickQuestionEditButton = (event: any) => {
    console.log("edit 클릭");
    setEditId(event.target.id);
  };

  const onClickQuestionDeleteButton = (event: any) => {
    Modal.warning({
      content: "정말로 삭제하시겠습니까?",
      async onOk() {
        await deleteUseditemQuestion({
          variables: {
            useditemQuestionId: event.target.id,
          },
        });
        refetch();
      },
    });
  };

  const onClickAnswerButton = (event: any) => {
    setItemId(event.target.id);
  };

  const loadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        console.log(fetchMoreResult);
        if (!fetchMoreResult.fetchUseditemQuestions) {
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };
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
