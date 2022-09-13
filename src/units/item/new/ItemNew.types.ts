import {
  FieldValues,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IForm {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  images: Array<string>;
}

export interface IProductNewProps {
  isEdit: boolean;
  fetchData?: {
    fetchUseditem: IForm;
  };
}

export interface IProductNewUIProps {
  fetchData?: {
    fetchUseditem: IForm;
  };
  isEdit: boolean;
  register: UseFormRegister<IForm>;
  handleSubmit: UseFormHandleSubmit<IForm>;
  getValues: UseFormGetValues<IForm>;
  isActive: boolean;
  onClickSubmit: (data: IForm) => void;
  onClickEdit: (data: IForm) => void;
  fileUrls: string[];
  onChangeFiles: (index: number, url: string) => void;
  onChangeContents: (value: string) => void;
  onChangeGifticon: (index: number, url: string) => void;
}
