import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

export interface IBoardListUIProps {
  review: any;
  number: any;
  search: string;
  nowPage: number;
  setNowPage: Dispatch<SetStateAction<number>>;
  onClickReview: (event: MouseEvent<HTMLDivElement>) => void;
  onClickWriteButton: () => void;
  refetch: any;
  onChangeStartDate: any;
  onChangeEndDate: any;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSearch: (search: any) => void;
}

export interface IBoardWriteProps {
  isEdit: boolean;
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
