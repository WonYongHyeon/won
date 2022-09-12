import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

export interface IReview {
  _id: string;
  writer: string;
  title: string;
  createdAt: Date;
  contents: string;
}

export interface IReviewListUIProps {
  review: {
    fetchBoards: Array<IReview>;
  };
  number: {
    fetchBoardsCount: number;
  };
  search: string;
  nowPage: number;
  setNowPage: Dispatch<SetStateAction<number>>;
  onClickReview: (event: MouseEvent<HTMLDivElement>) => void;
  onClickWriteButton: () => void;
  refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<
    ApolloQueryResult<{
      fetchBoards: Array<IReview>;
    }>
  >;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSearch: (event: MouseEvent<HTMLButtonElement>) => void;
  setStartDate: Dispatch<SetStateAction<Date | null>>;
  setEndDate: Dispatch<SetStateAction<Date | null>>;
}

export interface IMyVariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}

export interface props {
  isMatched: boolean;
}
