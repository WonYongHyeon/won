import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IData {
  contents: string;
}

export interface IItemQuestionWriteProps {
  refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<
    ApolloQueryResult<{
      fetchUseditemQuestions: Array<{
        _id: string;
        contents: string;
        user: {
          _id: string;
          name: string;
        };
        createdAt: Date;
      }>;
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
