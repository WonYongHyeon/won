import styled from "@emotion/styled";

const Textarea = styled.textarea`
  width: 100%;
  height: 104px;
  border: 0px solid;
  padding: 20px;
  font-size: 16px;
  border-radius: 10px;
`;

interface IProps {
  holder: string;
  register: any;
  defaultValue: string;
  maxLength: number;
}

export default function Textarea01(props: IProps) {
  return (
    <Textarea
      maxLength={props.maxLength}
      placeholder={props.holder}
      defaultValue={props.defaultValue}
      {...props.register}
    ></Textarea>
  );
}
