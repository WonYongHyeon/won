import styled from "@emotion/styled";

export const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 100px;
`;

export const Text = styled.div`
  width: 30%;
  font-size: 24px;
`;

export const TextInput = styled.input`
  width: 70%;
  height: 50px;
  padding: 15px;
  font-size: 24px;
`;

export const SubmitButton = styled.button`
  width: 300px;
  height: 50px;
  background-color: yellow;
  border: 0px solid;
  border-radius: 5px;
`;
