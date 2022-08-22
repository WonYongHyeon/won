import * as S from "./Signup.styles";
import { ISignupUIProps } from "./Signup.types";

export default function SignupUI(props: ISignupUIProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSignup)}>
      <S.Wrapper>
        <S.Title>Sign Up</S.Title>
        <S.InputWrapper>
          <S.InputTitle>이메일</S.InputTitle>
          <S.InputDiv
            onChange={props.onChangeEmail}
            placeholder="이메일을 입력해주세요"
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputTitle>비밀번호</S.InputTitle>
          <S.InputDiv
            onChange={props.onChangePassword}
            placeholder="비밀번호를 입력해주세요 (6자 이상)"
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputTitle>이름</S.InputTitle>
          <S.InputDiv
            onChange={props.onChangeName}
            placeholder="이름을 입력해주세요"
          />
        </S.InputWrapper>
        <S.CustomButton>
          <S.ButtonText>회원가입</S.ButtonText>
        </S.CustomButton>
        <S.CustomButton type="button" onClick={props.onClickCancel}>
          <S.ButtonText>뒤로가기</S.ButtonText>
        </S.CustomButton>
      </S.Wrapper>
    </form>
  );
}
