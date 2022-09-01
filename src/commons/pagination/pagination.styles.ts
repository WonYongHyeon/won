import styled from "@emotion/styled";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  width: 400px;
`;

export const PrevButton = styled.button`
  cursor: pointer;
  padding: 10px;
  border: 0px solid;
  background-color: white;
  :disabled {
    background-color: gray;
    visibility: hidden;
  }
`;

export const NextButton = styled.button`
  cursor: pointer;
  padding: 10px;
  border: 0px solid;
  background-color: white;
  :disabled {
    background-color: gray;
    visibility: hidden;
  }
`;

export const Page = styled.button`
  width: 50px;
  cursor: pointer;
  background-color: white;
  border: 0px solid;
`;
