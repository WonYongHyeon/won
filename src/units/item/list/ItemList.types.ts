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
  day?: string;
  __typename?: string;
}

export interface IItemListUIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  today: Array<IData>;
  data: {
    fetchUseditems: Array<IData>;
  };
  loadFunc: () => void;
  onClickSearch: () => void;
  onClickWriteButton: () => void;
  onClickItem: (el: IData) => () => void;
  onClickSellingSoldout: (el: boolean) => () => void;
}
