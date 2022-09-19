import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IData {
  contents: string;
}

export interface IRefetchData {
  _id: string;
  contents: string;
  user: {
    _id: string;
    name: string;
  };
  createdAt: Date;
}

export interface IItemQuestionWriteProps {
  refetch: (variables?: Partial<{ useditemId: string }> | undefined) => Promise<
    ApolloQueryResult<{
      fetchUsedItemQuestions: Array<IRefetchData>;
    }>
  >;
  editId?: string;
  setEditId?: Dispatch<SetStateAction<string>>;
  defaultContents?: string;
  useditemId?: string | string[];
  forceUpdate?: () => void;
}

export interface IItemQuestionWriteUIProps {
  editId?: string;
  defaultContents?: string;
  useditemId?: string | string[];
  register: UseFormRegister<IData>;
  handleSubmit: UseFormHandleSubmit<IData>;
  onClickSubmitButton: (data: IData) => Promise<void>;
  onClickSubmitEditButton: (data: IData) => Promise<void>;
}
