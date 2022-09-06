import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      useditemAddress {
        lat
        lng
        addressDetail
        address
      }
    }
  }
`;

export default function ImagePage() {
  const router = useRouter();
  const { data, loading } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: router.query.image,
    },
  });

  return (
    loading || (
      <Wrapper>
        <img
          src={`https://storage.googleapis.com/${data.fetchUseditem.remarks}`}
        />
      </Wrapper>
    )
  );
}
