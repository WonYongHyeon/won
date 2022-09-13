import {
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IData {
  writer?: string;
  title?: string;
  password?: string;
  contents?: string;
}

export interface IFetchData {
  fetchBoard: {
    _id: string;
    title: string;
    writer: string;
    contents: string;
    createdAt: Date;
    likeCount: number;
    dislikeCount: number;
    images: Array<string>;
  };
}

export interface IReviewNewProps {
  isEdit: boolean;
  data?: IFetchData;
}

export interface IReviewWriteUIProps {
  isEdit: boolean;
  data?: IFetchData;
  fileUrls: string[];
  register: UseFormRegister<IData>;
  handleSubmit: UseFormHandleSubmit<IData>;
  getValues: UseFormGetValues<IData>;

  onChangeContents: (value: string) => void;
  onClickRegistrationButton: (data: IData) => Promise<void>;
  onClickEdit: (data: IData) => Promise<void>;
  onChangeFiles: (index: number, url: string) => void;
}
