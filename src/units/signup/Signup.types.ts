import { ChangeEvent } from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IFormData {
  email: string;
  password: string;
  name: string;
}

export interface ISignupUIProps {
  register: UseFormRegister<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData>;
  onClickSignup: (data: IFormData) => Promise<void>;
  onClickCancel: () => void;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
}
