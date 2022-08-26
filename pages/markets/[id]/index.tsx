import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import ItemQuestionList from "../../../src/units/item/comment/list/ItemQuestionList.container";
import ItemQuestionWrite from "../../../src/units/item/comment/write/ItemQuestionWrite.container";
import ItemDetail from "../../../src/units/item/detail/ItemDetail.container";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      pickedCount
      seller {
        _id
        name
      }
      createdAt
      images
      useditemAddress {
        lat
        lng
        address
        addressDetail
      }
    }
  }
`;

export const FETCH_USEDITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!, $page: Int) {
    fetchUseditemQuestions(useditemId: $useditemId, page: $page) {
      _id
      contents
      user {
        _id
        name
      }
      createdAt
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default function MarketItemDetailPage() {
  const router = useRouter();

  const [, updateState] = useState(false);
  const forceUpdate = useCallback(() => updateState((prev) => !prev), []);

  const {
    data,
    loading,
    refetch: useditemRefetch,
  } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.id,
    },
  });

  const {
    data: fetchQuestion,
    fetchMore,
    refetch,
  } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: {
      useditemId: router.query.id,
      page: 1,
    },
  });

  return loading ? (
    <></>
  ) : (
    <Wrapper>
      <ItemDetail data={data} useditemRefetch={useditemRefetch}></ItemDetail>
      <ItemQuestionWrite
        forceUpdate={forceUpdate}
        useditemId={router.query.id}
        refetch={refetch}
      ></ItemQuestionWrite>
      <ItemQuestionList
        sellerId={data?.fetchUseditem?.seller._id}
        useditemId={router.query.id}
        fetchQuestion={fetchQuestion}
      ></ItemQuestionList>
    </Wrapper>
  );
}
