import { useQuery } from "@apollo/client";
import { useState } from "react";
import MypagePointUI from "./Point.presenter";
import {
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_OF_BUYING_COUNT,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_LOADING_COUNT,
  FETCH_POINT_TRANSACTIONS_OF_SELLING,
  FETCH_POINT_TRANSACTIONS_OF_SELLING_COUNT,
} from "./Point.query";

export default function MypagePoint() {
  const [nowPage, setNowPage] = useState(1);

  const { data: buyData, refetch: buyRefetch } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_BUYING
  );
  const { data: loadData, refetch: loadRefetch } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_LOADING
  );
  const { data: sellData, refetch: sellRefetch } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_SELLING
  );

  const { data: buyingCount } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_BUYING_COUNT
  );
  const { data: loadingCount } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_LOADING_COUNT
  );
  const { data: sellingCount } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_SELLING_COUNT
  );

  const onChangeOnePage = (key: string) => {
    setNowPage(1);
    if (key === "1") {
      buyRefetch({
        page: 1,
      });
    } else if (key === "2") {
      loadRefetch({
        page: 1,
      });
    } else {
      sellRefetch({
        page: 1,
      });
    }
  };

  return (
    <MypagePointUI
      nowPage={nowPage}
      setNowPage={setNowPage}
      onChangeOnePage={onChangeOnePage}
      buyData={buyData}
      buyRefetch={buyRefetch}
      loadData={loadData}
      loadRefetch={loadRefetch}
      sellData={sellData}
      sellRefetch={sellRefetch}
      buyingCount={buyingCount}
      loadingCount={loadingCount}
      sellingCount={sellingCount}
    ></MypagePointUI>
  );
}
