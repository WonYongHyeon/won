import { Dispatch, SetStateAction } from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IForm {
  contents: string;
}

export interface IItemQuestionWriteProps {
  useditemQuestionId: string;
  useditemQuestionAnswerId?: string;
  setItemId: Dispatch<SetStateAction<string>>;
  setEditAnswerId?: Dispatch<SetStateAction<string>>;
  defaultContents?: string;
}

export interface IItemQuestionWriteUIProps {
  register: UseFormRegister<IForm>;
  handleSubmit: UseFormHandleSubmit<IForm>;
  onClickSubmitButton: (data: IForm) => Promise<void>;
  onClickSubmitEditButton: (data: IForm) => Promise<void>;
  defaultContents: string;
}
