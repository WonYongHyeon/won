import { ChangeEvent } from "react";
import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IFormData {
  email: string;
  password: string;
}

export interface ILoginUIProps {
  onClickLogin: (data: IFormData) => void;
  onClickCancel: () => void;
  handleSubmit: UseFormHandleSubmit<IFormData>;
  register: UseFormRegister<IFormData>;
  formState: FormState<IFormData>;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
}
