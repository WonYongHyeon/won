import { Dispatch, SetStateAction } from "react";

export interface IPaginationUIProps {
  start: number;
  lastPage: number;
  nowPage: number;
  onClickPageMove: (event: any) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  isActivePrev: boolean;
  isActiveNext: boolean;
}

export interface IPaginationProps {
  refetch: any;
  number: any;
  nowPage: number;
  setNowPage: Dispatch<SetStateAction<number>>;
}
