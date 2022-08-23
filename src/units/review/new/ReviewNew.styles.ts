import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 101px 0px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 60px 103px 100px 101px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  background-color: #f7f6ee;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: bold;
  line-height: 53px;
  padding-bottom: 80px;
`;

export const Error = styled.div`
  color: red;
  font-size: 14px;
  height: 20px;
`;

export const EditWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 16px;
`;

export const WriterPasswordWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WriterInput = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 5px;
`;

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PasswordInput = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 5px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  font-size: 16px;
  line-height: 24px;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;

export const ContentsInput = styled.textarea`
  width: 100%;
  height: 480px;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 5px;
`;

export const AddressWrapper = styled.div`
  padding-bottom: 40px;
`;

export const ZipCodeSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;
`;

export const ZipCodeInput = styled.input`
  width: 77px;
  height: 52px;
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  line-height: 24px;
  margin-right: 16px;
  border-radius: 5px;
`;

export const ZipCodeSearchButton = styled.button`
  width: 124px;
  height: 52px;
  padding: 14px 16px;
  font-weight: 500;
  background-color: black;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

// 여기에 마진값 말고 패딩으로 고치는 것도 가능한데 굳이 해야할까라는 의문
export const AddressInput = styled.input`
  width: 100%;
  height: 52px;
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 16px;
  border-radius: 5px;
`;

export const AddressDetailInput = styled.input`
  width: 100%;
  height: 52px;
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 5px;
`;

export const YoutubeWrapper = styled.div`
  width: 100%;
  padding-bottom: 40px;
`;

export const YoutubeInput = styled.input`
  width: 100%;
  height: 52px;
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 5px;
`;

export const ImageWrapper = styled.div`
  padding-bottom: 40px;
`;

export const ImageButtonWrapper = styled.div`
  width: 272px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageButton = styled.button`
  width: 100px;
  height: 100px;
  background-color: #bdbdbd;
  border: 0px solid;
  border-radius: 5px;
  cursor: pointer;
`;

export const MainSettingWrapper = styled.div`
  padding-bottom: 80px;
`;

export const RadioWrapper = styled.div`
  width: 160px;
  padding-right: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RadioButton = styled.input`
  // 색상 노란색으로 변경.
  // 기본 세팅을 깨고 다시 넣어줘야한다는데...?-
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const RegistrationButton = styled.button`
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
