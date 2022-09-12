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
  refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<
    ApolloQueryResult<{
      fetchBoards: Array<{
        _id: string;
        writer: string;
        title: string;
        contents: string;
      }>;
    }>
  >;
  number: {
    fetchBoardsCount: number;
  };
  search: string;
  nowPage: number;
  setNowPage: Dispatch<SetStateAction<number>>;
}
