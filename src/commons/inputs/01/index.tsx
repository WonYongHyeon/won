import styled from "@emotion/styled";
import { UseFormRegister } from "react-hook-form";

const Input = styled.input`
  width: 100%;
  height: 60px;
  border: 1px solid #111111;
  padding: 10px 15px;
  font-size: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

interface IProps {
  holder: string;
  type: string;
  register: any;
}

export default function Input01(props: IProps) {
  return (
    <Input
      type={props.type}
      placeholder={props.holder}
      {...props.register}
    ></Input>
  );
}
