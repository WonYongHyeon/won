import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";

export interface IMypagePointUIProps {
  nowPage: number;
  setNowPage: Dispatch<SetStateAction<number>>;
  onChangeOnePage: (key: string) => void;
  buyData: {
    fetchPointTransactionsOfBuying: Array<{
      amount: number;
      status: string;
      useditem: {
        _id: string;
        name: string;
        price: number;
      };
      createdAt: Date;
    }>;
  };
  buyRefetch: (variables?: Partial<OperationVariables> | undefined) => Promise<
    ApolloQueryResult<{
      fetchPointTransactionsOfBuying: Array<{
        amount: number;
        status: string;
        useditem: {
          _id: string;
          name: string;
          price: number;
        };
        createdAt: Date;
      }>;
    }>
  >;
  loadData: {
    fetchPointTransactionsOfLoading: Array<{
      amount: number;
      status: string;
      useditem: {
        _id: string;
        name: string;
        price: number;
      };
      createdAt: Date;
    }>;
  };
  loadRefetch: (variables?: Partial<OperationVariables> | undefined) => Promise<
    ApolloQueryResult<{
      fetchPointTransactionsOfLoading: Array<{
        amount: number;
        status: string;
        useditem: {
          _id: string;
          name: string;
          price: number;
        };
        createdAt: Date;
      }>;
    }>
  >;
  sellData: {
    fetchPointTransactionsOfSelling: Array<{
      amount: number;
      status: string;
      useditem: {
        _id: string;
        name: string;
        price: number;
      };
      createdAt: Date;
    }>;
  };
  sellRefetch: (variables?: Partial<OperationVariables> | undefined) => Promise<
    ApolloQueryResult<{
      fetchPointTransactionsOfSelling: Array<{
        amount: number;
        status: string;
        useditem: {
          _id: string;
          name: string;
          price: number;
        };
        createdAt: Date;
      }>;
    }>
  >;
  buyingCount: {
    fetchPointTransactionsCountOfBuying: number;
  };
  loadingCount: {
    fetchPointTransactionsCountOfLoading: number;
  };
  sellingCount: {
    fetchPointTransactionsCountOfSelling: number;
  };
}
