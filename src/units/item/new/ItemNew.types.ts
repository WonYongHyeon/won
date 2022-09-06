import { FieldValues, UseFormGetValues } from "react-hook-form";

export interface IProductNewUIProps {
  fetchData: any;
  isEdit: boolean;
  register: any;
  handleSubmit: any;
  getValues: UseFormGetValues<FieldValues>;
  isActive: boolean;
  onClickSubmit: (data: any) => void;
  onClickEdit: (data: any) => void;
  fileUrls: string[];
  onChangeFiles: (index: number, url: string) => void;
  onChangeContents: (value: string) => void;
}

export interface IProductNewProps {
  isEdit: boolean;
  fetchData?: any;
}
