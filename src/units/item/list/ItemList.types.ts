import { ChangeEvent } from "react";

export interface IData {
  _id: string;
  name: string;
  remarks: string;
  price: number;
  images: Array<string>;
  pickedCount: number;
  seller: {
    name: string;
  };
}

export interface IItemListUIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  today: Array<string>;
  data: {
    fetchUseditems: Array<IData>;
  };
  loadFunc: () => void;
  onClickSearch: () => void;
  onClickWriteButton: () => void;
  onClickItem: (el: any) => () => void;
  onClickSellingSoldout: (el: boolean) => () => void;
}
