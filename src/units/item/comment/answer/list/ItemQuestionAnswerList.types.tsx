import { Dispatch, MouseEvent, SetStateAction } from "react";

interface useditemQuestionAnswer {
  _id: string;
  contents: string;
  user: {
    _id: string;
    name: string;
  };
  createdAt: Date;
  useditemQuestion: {
    _id: string;
  };
}

export interface IItemQuestionAnswersListProps {
  useditemQuestionId: string;
}

export interface IItemQuestionAnswersListUIProps {
  editAnswerId: string;
  setEditAnswerId: Dispatch<SetStateAction<string>>;
  userId: {
    fetchUserLoggedIn: {
      _id: string;
    };
  };
  data: {
    fetchUseditemQuestionAnswers: Array<useditemQuestionAnswer>;
  };
  loadFunc: () => void;
  onClickEditButton: (event: MouseEvent<HTMLImageElement>) => void;
  onClickDeleteButton: (event: MouseEvent<HTMLImageElement>) => void;
}
