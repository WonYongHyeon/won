import { useQuery } from "@apollo/client";
import { NextRouter, useRouter } from "next/router";
import ReviewDetail from "../../../src/units/review/detail/ReviewDetail.container";
import { FETCH_BOARD } from "../../../src/units/review/detail/ReviewDetail.query";

export default function ReviewDetailPage() {
  const router: NextRouter = useRouter();

  const { data, loading } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query?.id,
    },
  });
  return loading || <ReviewDetail data={data}></ReviewDetail>;
}
