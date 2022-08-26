import styled from "@emotion/styled";

const Button = styled.button`
  width: 100%;
  height: 70px;
  font-size: 20px;
  background-color: #5f5f5f;
  color: white;
  border: 0px solid;
  border-radius: 20px;
`;

interface IProps {
  isActive: boolean;
  title: string;
}

export default function Button01(props: IProps) {
  return (
    <Button
      style={
        props.isActive
          ? {
              backgroundColor: "yellow",
              color: "black",
            }
          : {}
      }
    >
      {props.title}
    </Button>
  );
}
