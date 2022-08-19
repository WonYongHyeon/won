import styled from "@emotion/styled";
import { Input } from "antd";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 0 10%;
  }
`;

export const Title = styled.div`
  font-size: 40px;
  padding: 80px 0;
  text-align: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 60%;
  max-width: 700px;
  height: 100px;
  margin-bottom: 20px;

  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: flex-start;
    min-width: 500px;
  }

  @media (max-width: 600px) {
    width: 100%;
    min-width: 0;
  }
`;

export const InputTitle = styled.div`
  font-size: 24px;
  padding: 10px 0px;
`;

export const InputDiv = styled(Input)`
  width: 500px;
  height: 50px;

  @media (max-width: 1050px) {
    width: 100%;
  }
`;

export const CustomButton = styled.button`
  width: 60%;
  max-width: 700px;
  height: 50px;
  border: 0px solid;
  font-size: 20px;
  margin: 10px 0px;

  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: flex-start;
    min-width: 500px;
  }

  @media (max-width: 600px) {
    width: 100%;
    min-width: 0;
  }

  cursor: pointer;
`;
