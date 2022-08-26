import { ChangeEvent } from "react";

export interface IItemListUIProps {
  // register: any;
  // handleSubmit: any;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  today: any;
  data: any;
  loadFunc: () => void;
  onClickSearch: () => void;
  onClickWriteButton: () => void;
  onClickItem: (el: any) => () => void;
  onClickSellingSoldout: (el: boolean) => () => void;
}
