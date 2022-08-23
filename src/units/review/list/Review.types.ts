import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

export interface IReviewListUIProps {
  review: any;
  number: any;
  search: string;
  nowPage: number;
  setNowPage: Dispatch<SetStateAction<number>>;
  onClickReview: (event: MouseEvent<HTMLDivElement>) => void;
  onClickWriteButton: () => void;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
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
