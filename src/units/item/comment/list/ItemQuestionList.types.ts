import { ApolloQueryResult } from "@apollo/client";
import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface IData {
  _id: string;
  contents: string;
  user: {
    _id: string;
    name: string;
  };
  createdAt: Date;
}

export interface IItemQuestionListProps {
  useditemId?: string | string[];
  sellerId: string;
  fetchQuestion: {
    fetchUseditemQuestions: Array<IData>;
  };
}

export interface IItemQuestionListUIProps {
  refetch: (variables?: Partial<{ useditemId: string }> | undefined) => Promise<
    ApolloQueryResult<{
      fetchUsedItemQuestions: Array<IData>;
    }>
  >;
  editId: string;
  setEditId: Dispatch<SetStateAction<string>>;
  itemId: string;
  setItemId: Dispatch<SetStateAction<string>>;
  sellerId: string;
  userId: string;
  data: {
    fetchUseditemQuestions: Array<IData>;
  };
  loadFunc: () => void;
  onClickAnswerButton: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickQuestionEditButton: (event: MouseEvent<HTMLImageElement>) => void;
  onClickQuestionDeleteButton: (event: MouseEvent<HTMLImageElement>) => void;
}
