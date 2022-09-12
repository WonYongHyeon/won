import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

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
  editId: string;
  setEditId: Dispatch<SetStateAction<string>>;
  defaultContents: string;
  useditemId: string;
}

export interface IItemQuestionWriteUIProps {
  editId: string;
  defaultContents: string;
  useditemId: string;
  register: any;
  handleSubmit: any;
  onClickSubmitButton: (data: IData) => void;
  onClickSubmitEditButton: (data: IData) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
