import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MouseEvent } from "react";

interface IData {
  fetchUseditem: {
    _id: string;
    name: string;
    remarks: string;
    contents: string;
    price: number;
    pickedCount: number;
    seller: {
      _id: string;
      name: string;
    };
    createdAt: Date;
    images: Array<string>;
    useditemAddress: {
      lat: string;
      lng: string;
    };
  };
}

export interface IItemDetailUIProps {
  mainImg: string;
  loginUserId: {
    fetchUserLoggedIn: {
      _id: string;
    };
  };
  data: IData;
  onClickMoveEditPage: () => void;
  onClickMoveItemListPage: () => void;
  onClickPick: () => void;
  onClickDeleteItem: () => void;
  onClickBuyItem: () => void;
  onClickSubImage: (event: MouseEvent<HTMLImageElement>) => void;
}

export interface IItemDetailProps {
  data: IData;
  useditemRefetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<IData>>;
}
