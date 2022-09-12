import * as S from "./ItemQuestionWrite.styles";
import { IItemQuestionWriteUIProps } from "./ItemQuestionWrite.types";
import Textarea01 from "../../../../commons/textarea/01";

export default function ItemQuestionWriteUI(props: IItemQuestionWriteUIProps) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.QuestionWriteWrapper
          onSubmit={
            props.editId === undefined
              ? props.handleSubmit(props.onClickSubmitButton)
              : props.handleSubmit(props.onClickSubmitEditButton)
          }
        >
          <Textarea01
            maxLength={100}
            register={props.register("contents")}
            holder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            defaultValue={props.defaultContents}
          ></Textarea01>
          <S.QuestionWriteFooterWrapper>
            <S.QuestionTextLimitLengthWrapper></S.QuestionTextLimitLengthWrapper>
            <S.QuestionRegistrationButton>
              {props.editId === undefined ? "등록하기" : "수정하기"}
            </S.QuestionRegistrationButton>
          </S.QuestionWriteFooterWrapper>
        </S.QuestionWriteWrapper>
      </S.Wrapper>
    </S.Body>
  );
}
