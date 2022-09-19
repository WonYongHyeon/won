import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import * as S from "./ItemQuestionAnswerList.styles";
import ItemQuestionAnswerWrite from "../write/ItemQuestionAnswerWrite.container";
import { getDate } from "../../../../../commons/lib/utils";
import {
  IItemQuestionAnswersListUIProps,
  IUseditemQuestionAnswer,
} from "./ItemQuestionAnswerList.types";

export default function ItemQuestionAnswersListUI(
  props: IItemQuestionAnswersListUIProps
) {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={props.loadFunc}
      hasMore={true}
      style={{ width: "100%" }}
    >
      {props.data?.fetchUseditemQuestionAnswers.map(
        (item: IUseditemQuestionAnswer) => {
          return (
            <div key={uuidv4()}>
              {props.editAnswerId === item._id ? (
                <ItemQuestionAnswerWrite
                  setEditAnswerId={props.setEditAnswerId}
                  defaultContents={item.contents}
                  useditemQuestionAnswerId={item._id}
                ></ItemQuestionAnswerWrite>
              ) : (
                <S.QuestionListWrapper key={uuidv4()}>
                  <S.QuestionListHeadWrapper>
                    <S.QuestionListProfileNameContentsWrapper>
                      <S.QuestionListProfileImage src="/img/profile.png"></S.QuestionListProfileImage>
                      <S.QuestionListNameContentsWrapper>
                        <S.QuestionListName>
                          {item.user?.name}
                        </S.QuestionListName>
                        <S.QuestionListContents>
                          {item.contents}
                        </S.QuestionListContents>
                      </S.QuestionListNameContentsWrapper>
                    </S.QuestionListProfileNameContentsWrapper>

                    {item.user._id === props.userId?.fetchUserLoggedIn._id ? (
                      <>
                        <S.QuestionListEditImg
                          id={item._id}
                          onClick={props.onClickEditButton}
                          src="/img/comment_edit.png"
                        ></S.QuestionListEditImg>
                        <S.QuestionListDeleteImg
                          id={item._id}
                          onClick={props?.onClickDeleteButton}
                          src="/img/comment_delete.png"
                        ></S.QuestionListDeleteImg>
                      </>
                    ) : item.useditemQuestion.user?._id ===
                      props.userId?.fetchUserLoggedIn?._id ? (
                      props.userId?.fetchUserLoggedIn?._id === "" || (
                        <S.QuestionAnswerButton
                          id={item.useditemQuestion._id}
                        ></S.QuestionAnswerButton>
                      )
                    ) : (
                      <></>
                    )}
                  </S.QuestionListHeadWrapper>
                  <S.QuestionListDate>
                    {getDate(item?.createdAt)}
                  </S.QuestionListDate>
                </S.QuestionListWrapper>
              )}
            </div>
          );
        }
      )}
    </InfiniteScroll>
  );
}
