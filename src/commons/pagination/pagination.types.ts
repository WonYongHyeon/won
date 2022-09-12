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
  refetch: any;
  number: number;
  nowPage: number;
  setNowPage: Dispatch<SetStateAction<number>>;
}
