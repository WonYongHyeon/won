export interface IItemQuestionWriteProps {
  useditemId: string;
}

export interface IItemQuestionWriteUIProps {
  useditemId: string;
  register: any;
  handleSubmit: any;
  onClickSubmitButton: (data: any) => void;
  // loadFunc: () > void;
}
