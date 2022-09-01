import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IFormData {
  password: string;
  passwordEdit: string;
  passwordConfirm: string;
}

export interface IMypagePasswordProps {
  email: string;
}

export interface IMypagePasswordUIProps {
  onClickEditPassword: (data: IFormData) => Promise<void>;
  register: UseFormRegister<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData>;
}
