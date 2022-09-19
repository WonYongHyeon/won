import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface IPaginationUIProps {
  start: number;
  lastPage: number;
  nowPage: number;
  onClickPageMove: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  isActivePrev: boolean;
  isActiveNext: boolean;
}

export interface IPaginationProps {
  refetch: (
    variables?: Partial<{ page: number; search: string }> | undefined
  ) => Promise<
    ApolloQueryResult<{
      fetchUseditemsIBought?: {
        soldAt: Date;
        name: string;
        price: number;
        _id: string;
      }[];
      fetchUseditemsISold?: {
        name: string;
        price: number;
        _id: string;
      }[];
      fetchUseditemsIPicked?: {
        name: string;
        price: number;
        _id: string;
      }[];
      fetchPointTransactionsOfBuying?: Array<{
        amount: number;
        status: string;
        useditem: {
          _id: string;
          name: string;
          price: number;
        };
        createdAt: Date;
      }>;
      fetchPointTransactionsOfLoading?: Array<{
        amount: number;
        status: string;
        useditem: {
          _id: string;
          name: string;
          price: number;
        };
        createdAt: Date;
      }>;
      fetchPointTransactionsOfSelling?: Array<{
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
  number: number;
  nowPage: number;
  setNowPage: Dispatch<SetStateAction<number>>;
}
