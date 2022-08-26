export interface IItemQuestionListUIProps {
  loadFunc: () => void;
  data: any;
  sellerId: string;
  userId: string;
  onClickAnswerButton: () => void;
}

export interface IItemQuestionListProps {
  useditemId: string;
  sellerId: string;
}
