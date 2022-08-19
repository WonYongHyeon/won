import * as S from "./Login.styles";
import { ILoginUIProps } from "./Login.types";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <S.Wrapper>
        <S.Title>Login</S.Title>
        <S.InputWrapper>
          <S.InputTitle>아이디</S.InputTitle>
          <S.InputDiv onChange={props.onChangeEmail} />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputTitle>비밀번호</S.InputTitle>
          <S.InputDiv onChange={props.onChangePassword} />
        </S.InputWrapper>
        <S.CustomButton>
          <S.ButtonText>로그인</S.ButtonText>
        </S.CustomButton>
        <S.CustomButton type="button" onClick={props.onClickCancel}>
          <S.ButtonText>뒤로가기</S.ButtonText>
        </S.CustomButton>
      </S.Wrapper>
    </form>
  );
}
