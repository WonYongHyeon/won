import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ReviewNew from "../../../../src/units/review/new/ReviewNew.container";
import { FETCH_BOARD } from "../../../../src/units/review/new/ReviewNew.queries";

export default function ReviewEditPage() {
  const router = useRouter();

  const { data, loading } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });

  return loading ? <></> : <ReviewNew isEdit={true} data={data}></ReviewNew>;
}
