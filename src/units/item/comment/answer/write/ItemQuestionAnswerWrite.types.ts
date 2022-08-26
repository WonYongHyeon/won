export interface IItemQuestionWriteProps {
  useditemQuestionId: string;
}

export interface IItemQuestionWriteUIProps {
  useditemQuestionId: string;
  useditemId: string | string[] | undefined;
  register: any;
  handleSubmit: any;
  onClickSubmitButton: (data: any) => void;
  // loadFunc: () > void;
}
