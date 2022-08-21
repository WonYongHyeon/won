import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IFormData {
  email: string;
  password: string;
  name: string;
}

export interface ISignupUIProps {
  register: UseFormRegister<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData>;
  onClickSignup: (data: IFormData) => void;
}
