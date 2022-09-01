import { useQuery } from "@apollo/client";
import { useState } from "react";
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
  const [nowPage, setNowPage] = useState(1);

  const { data: buyData, refetch: refetchBuyData } = useQuery(
    FETCH_USEDITEMS_I_BOUGHT,
    {
      variables: {
        search: "",
        page: 1,
      },
    }
  );
  const { data: buyCount } = useQuery(FETCH_USEDITEMS_COUNT_I_BOUGHT);

  const { data: soldData, refetch: refetchSoldData } = useQuery(
    FETCH_USEDITEMS_I_SOLD,
    {
      variables: {
        search: "",
        page: 1,
      },
    }
  );
  const { data: soldCount } = useQuery(FETCH_USEDITEMS_COUNT_I_SOLD);

  const { data: pickedData, refetch: refetchPickedData } = useQuery(
    FETCH_USEDITEMS_I_PICKED,
    {
      variables: {
        search: "",
        page: 1,
      },
    }
  );
  const { data: pickedCount } = useQuery(FETCH_USEDITEMS_COUNT_I_PICKED);

  const onChangeOnePage = () => {
    setNowPage(1);
  };
  return (
    <MypageMarketUI
      buyData={buyData}
      buyCount={buyCount}
      soldData={soldData}
      soldCount={soldCount}
      pickedData={pickedData}
      pickedCount={pickedCount}
      nowPage={nowPage}
      setNowPage={setNowPage}
      refetchBuyData={refetchBuyData}
      refetchSoldData={refetchSoldData}
      refetchPickedData={refetchPickedData}
      onChangeOnePage={onChangeOnePage}
    ></MypageMarketUI>
  );
}
