import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ItemNew from "../../../../src/units/item/new/ItemNew.container";
import { FETCH_USEDITEM } from "../../../../src/units/item/new/ItemNew.queries";

export default function ItemEditPage() {
  const router = useRouter();

  const { data, loading } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: router.query.id,
    },
  });

  return loading ? <></> : <ItemNew isEdit={true} fetchData={data}></ItemNew>;
}
