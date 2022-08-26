import * as S from "./ItemQuestionWrite.styles";
import { IItemQuestionWriteUIProps } from "./ItemQuestionWrite.types";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import Textarea01 from "../../../../commons/textarea/01";

export default function ItemQuestionWriteUI(props: any) {
  console.log(props.editId);
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
          {/* <S.QuestionContents
            onChange={props.onChangeContents}
          ></S.QuestionContents> */}
          <S.QuestionWriteFooterWrapper>
            <S.QuestionTextLimitLengthWrapper>
              <S.QuestionTextNowLength>
                {/* {props.length}/100 */}
              </S.QuestionTextNowLength>
            </S.QuestionTextLimitLengthWrapper>
            <S.QuestionRegistrationButton>
              {props.editId === undefined ? "등록하기" : "수정하기"}
            </S.QuestionRegistrationButton>
          </S.QuestionWriteFooterWrapper>
        </S.QuestionWriteWrapper>

        {/* 댓글 보여주는 부분
        <InfiniteScroll
          pageStart={0}
          loadMore={props.loadFunc}
          hasMore={true}
          style={{ width: "100%" }}
        >
          {props.data?.fetchBoardComments.map((item: any) =>
            props.isEditId === item._id ? (
              <CommentEdit
                key={uuidv4()}
                onClickEditButton={props.onClickEditButton}
                onClickEditCancelButton={props.onClickEditCancelButton}
                item={item}
                isEditId={props.isEditId}
                id={item._id}
                contents={item.contents}
                isModalVisible={props.isModalVisible}
                setModalVisible={props.setIsModalVisible}
              ></CommentEdit>
            ) : (
              <CommentList
                key={uuidv4()}
                item={item}
                id={item._id}
                onClickDeleteButton={props.onClickDeleteImg}
                onClickEditButton={props.onClickEditButton}
                isEditId={props.isEditId}
              ></CommentList>
            )
          ) || ""}
        </InfiniteScroll> */}
      </S.Wrapper>
    </S.Body>
  );
}
