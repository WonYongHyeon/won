import { ApolloQueryResult } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";

export interface IMypageMarketUIProps {
  buyData: {
    fetchUseditemsIBought: Array<{
      name: string;
      price: number;
      soldAt: Date;
      _id: string;
      remarks: string;
    }>;
  };
  buyCount: {
    fetchUseditemsCountIBought: number;
  };

  soldData: {
    fetchUseditemsISold: Array<{
      name: string;
      price: number;
      soldAt: Date;
      _id: string;
      remarks: string;
    }>;
  };
  soldCount: {
    fetchUseditemsCountISold: number;
  };

  pickedData: {
    fetchUseditemsIPicked: Array<{
      name: string;
      price: number;
      _id: string;
    }>;
  };
  pickedCount: {
    fetchUseditemsCountIPicked: number;
  };

  nowPage: number;
  setNowPage: Dispatch<SetStateAction<number>>;

  refetchBuyData: (
    variables?: Partial<{ page: number }> | undefined
  ) => Promise<
    ApolloQueryResult<{
      fetchUseditemsIBought: Array<{
        soldAt: Date;
        name: string;
        price: number;
        _id: string;
      }>;
    }>
  >;
  refetchSoldData: (
    variables?: Partial<{ page: number }> | undefined
  ) => Promise<
    ApolloQueryResult<{
      fetchUseditemsISold: Array<{
        name: string;
        price: number;
        _id: string;
      }>;
    }>
  >;
  refetchPickedData: (
    variables?: Partial<{ page: number }> | undefined
  ) => Promise<
    ApolloQueryResult<{
      fetchUseditemsIPicked: Array<{
        name: string;
        price: number;
        _id: string;
      }>;
    }>
  >;

  onChangeOnePage: () => void;
  onClickBuyList: (id: string, imgUrl: string) => () => void;
  gifticonImg: string;
  modalVisible: boolean;
  onClickModalCancel: () => void;
  onClickShare: () => void;
}
