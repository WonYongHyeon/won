import { ApolloQueryResult } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";

export interface IMypageMarketUIProps {
  buyData: {
    fetchUseditemsIBought: Array<{
      name: string;
      price: number;
      soldAt: Date;
      _id: string;
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
  data: {
    fetchPointTransactions: Array<{
      _id: string;
      status: string;
      statusDetail: string;
      createdAt: Date;
      useditem: {
        name: string;
        price: string;
        createdAt: string;
      };
    }>;
  };

  refetch: (
    variables?: Partial<{ search: string; page: number }> | undefined
  ) => Promise<
    ApolloQueryResult<{
      fetchPointTransactions: Array<{
        _id: string;
        status: string;
        statusDetail: string;
        createdAt: Date;
        useditem: {
          name: string;
          price: string;
          createdAt: string;
        };
      }>;
    }>
  >;

  onChangeOnePage: () => void;
}
