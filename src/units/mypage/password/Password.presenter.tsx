import * as S from "./Password.styles";
import { IMypagePasswordUIProps } from "./Password.types";

export default function MypagePasswordUI(props: IMypagePasswordUIProps) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickEditPassword)}>
      <S.InputWrapper>
        <S.Text>현재 비밀번호</S.Text>
        <S.TextInput {...props.register("password")}></S.TextInput>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Text>비밀번호 변경</S.Text>
        <S.TextInput {...props.register("passwordEdit")}></S.TextInput>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Text>비밀번호 확인</S.Text>
        <S.TextInput {...props.register("passwordConfirm")}></S.TextInput>
      </S.InputWrapper>
      <S.SubmitButton>비밀번호 변경</S.SubmitButton>
    </S.Wrapper>
  );
}
