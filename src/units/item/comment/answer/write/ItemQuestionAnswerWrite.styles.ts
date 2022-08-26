import styled from "@emotion/styled";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;
export const Wrapper = styled.div`
  padding: 80px 0px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 30px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  background-color: #f7f6ee;
`;

export const QuestionWriteWrapper = styled.form`
  border: 1px solid #bdbdbd;
  width: 100%;
  height: 161px;
  background-color: white;
  margin-bottom: 30px;
  border-radius: 10px;
`;

export const QuestionWriterPasswordWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #828282;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 20px;
`;

export const QuestionWriterInput = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-right: 24px;
  padding: 16px 12px;
  border-radius: 5px;
`;

export const QuestionPasswordInput = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-right: 24px;
  padding: 16px 12px;
  border-radius: 5px;
`;

export const QuestionTextArea = styled.textarea`
  padding: 20px;
  width: 100%;
  height: 104px;
  border: 0px solid;
  border-radius: 10px;
`;

export const QuestionWriteFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  border-top: 1px solid #f2f2f2;
`;

export const QuestionTextLimitLengthWrapper = styled.div`
  color: #bdbdbd;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: row;
  height: 24px;
`;
export const QuestionTextNowLength = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  height: 24px;
  padding: 0px 20px;
`;

export const QuestionRegistrationButton = styled.button`
  background-color: white;
  color: black;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  width: 108px;
  height: 30px;
  border: 0px solid;
  cursor: pointer;

  :hover {
    color: blue;
    font-weight: bold;
  }
`;

export const QuestionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 3px;
`;

export const QuestionHeadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const QuestionProfileNameContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const QuestionProfileImage = styled.img`
  width: 40px;
  height: 40px;
`;
export const QuestionNameContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 24px;
  padding-left: 15px;
`;
export const QuestionName = styled.div`
  font-weight: 500;
  padding-bottom: 4px;
`;
export const QuestionContents = styled.div`
  font-weight: 400;
  color: #4f4f4f;
`;
export const QuestionDeleteButton = styled.button`
  width: 30px;
  height: 30px;
  text-align: right;
  cursor: pointer;
`;
export const QuestionDate = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #bdbdbd;
  padding-left: 55px;
  padding-top: 7px;
`;
export const QuestionDivideLine = styled.div`
  height: 1px;
  border-bottom: 1px solid #bdbdbd;
  width: 100%;
  padding-top: 20px;
`;
