import { ChangeEvent } from "react";
import {
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IReviewData {
  writer?: string;
  title?: string;
  password?: string;
  contents?: string;
}

export interface IFetchData {
  fetchBoard: {
    writer: string;
    title: string;
    contents: string;
    images: string[];
  };
}

export interface IReviewNewProps {
  isEdit: boolean;
  data?: any;
}

export interface IMyVariables {
  number?: number;
  writer?: string;
  title?: string;
  contents?: string;
  boardAddress?: {
    zipcode?: number;
    address?: string;
    addressDetail?: string;
  };
}

export interface IReviewWriteUIProps {
  isEdit: boolean;
  isOk: boolean;
  data: IFetchData;
  fileUrls: string[];
  register: UseFormRegister<IReviewData>;
  handleSubmit: UseFormHandleSubmit<IReviewData>;
  getValues: UseFormGetValues<IReviewData>;

  onChangeContents: (value: string) => void;
  onClickRegistrationButton: (data: any) => Promise<void>;
  onClickEdit: (data: any) => Promise<void>;
  onChangeFiles: (index: number, url: string) => void;
}
