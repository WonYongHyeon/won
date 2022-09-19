import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

const Input = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #111111;
  padding: 14px 16px;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

interface IProps {
  holder: string;
  type: string;
  register: UseFormRegisterReturn;
  defaultValue: string | number;
  readonly: boolean;
}

export default function Input02(props: IProps) {
  return (
    <Input
      type={props.type}
      placeholder={props.holder}
      defaultValue={props.defaultValue}
      {...props.register}
      readOnly={props.readonly}
    ></Input>
  );
}
