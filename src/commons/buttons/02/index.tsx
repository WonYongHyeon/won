import styled from "@emotion/styled";

const Button = styled.button`
  background-color: #ffd600;
  border: 0px solid;
  width: 179px;
  height: 52px;
  cursor: pointer;
  border-radius: 10px;

  :disabled {
    background-color: #dddddd;
  }

  /* 이렇게 사용이 가능하다 */
`;

interface IProps {
  isActive: boolean;
  title: string;
}

export default function Button02(props: IProps) {
  return <Button disabled={!props.isActive}>{props.title}</Button>;
}
