import * as S from "./Main.styles";
import { IMainUIProps } from "./Main.types";

export default function MainUI(props: IMainUIProps) {
  return (
    <S.Wrapper>
      <S.LeftWrapper ref={props.one} active={props.scrollOne}>
        <S.Title>원하는 기프티콘 구매하기</S.Title>
        <S.Image src="/img/main/main_1.png" />
      </S.LeftWrapper>
      <S.RightWrapper ref={props.two} active={props.scrollTwo}>
        <S.Title>마이페이지에서 구매한 내역 클릭</S.Title>
        <S.Image src="/img/main/main_2.png" />
      </S.RightWrapper>
      <S.LeftWrapper ref={props.three} active={props.scrollThree}>
        <S.Title>카카오로 공유하기 선택</S.Title>
        <S.Image src="/img/main/main_3.png" />
      </S.LeftWrapper>
      <S.RightWrapper ref={props.four} active={props.scrollFour}>
        <S.Title>보내고 싶은 사람에게 공유하기(혹은 나에게 공유하기)</S.Title>
        <S.Image src="/img/main/main_4.png" />
      </S.RightWrapper>
      <S.LeftWrapper ref={props.five} active={props.scrollFive}>
        <S.Title>카카오톡으로 이동하여 자세히 보기 선택!</S.Title>
        <S.Image src="/img/main/main_5.png" />
      </S.LeftWrapper>
      <S.RightWrapper ref={props.six} active={props.scrollSix}>
        <S.Title>모바일로 기프티콘 즐기기!</S.Title>
        <S.Image src="/img/main/main_6.png" />
      </S.RightWrapper>
    </S.Wrapper>
  );
}
