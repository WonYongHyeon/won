import { useQuery } from "@apollo/client";
import MypageMarketUI from "./Market.presenter";
import {
  FETCH_USEDITEMS_COUNT_I_BOUGHT,
  FETCH_USEDITEMS_COUNT_I_PICKED,
  FETCH_USEDITEMS_COUNT_I_SOLD,
  FETCH_USEDITEMS_I_BOUGHT,
  FETCH_USEDITEMS_I_PICKED,
  FETCH_USEDITEMS_I_SOLD,
} from "./Market.query";

export default function MypageMarket() {
  const { data: buyData } = useQuery(FETCH_USEDITEMS_I_BOUGHT);
  const { data: buyCount } = useQuery(FETCH_USEDITEMS_COUNT_I_BOUGHT);

  const { data: soldData } = useQuery(FETCH_USEDITEMS_I_SOLD);
  const { data: soldCount } = useQuery(FETCH_USEDITEMS_COUNT_I_SOLD);

  const { data: pickedData } = useQuery(FETCH_USEDITEMS_I_PICKED);
  const { data: pickedCount } = useQuery(FETCH_USEDITEMS_COUNT_I_PICKED);

  return (
    <MypageMarketUI
      buyData={buyData}
      buyCount={buyCount}
      soldData={soldData}
      soldCount={soldCount}
      pickedData={pickedData}
      pickedCount={pickedCount}
    ></MypageMarketUI>
  );
}
