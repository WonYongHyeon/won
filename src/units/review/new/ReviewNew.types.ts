import { ChangeEvent } from "react";

export interface IBoardData {
  writer?: string;
  title?: string;
  contents?: string;
  images?: string[];
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

export interface IBoardWriteUIProps {
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  zipcode: string;
  address: string;
  isDisabled: boolean;
  isEditDisabled: boolean;
  isEdit: boolean;
  isOk: boolean;
  data: any;
  isModalVisible: boolean;
  fileUrls: string[];

  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickRegistrationButton: () => void;
  onClickEdit: () => void;
  onToggleModal: () => void;
  handleComplete: (data: any) => void;
  onChangeFiles: (file: File, index: number, url: string) => void;
}
