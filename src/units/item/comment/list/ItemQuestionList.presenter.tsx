import * as S from "./ItemQuestionList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import ItemQuestionAnswersList from "../answer/list/ItemQuestionAnswerList.container";
import ItemQuestionAnswerWrite from "../answer/write/ItemQuestionAnswerWrite.container";
import ItemQuestionWrite from "../write/ItemQuestionWrite.container";
import { getDate } from "../../../../commons/lib/utils";
import { IData, IItemQuestionListUIProps } from "./ItemQuestionList.types";

export default function ItemQuestionListUI(props: IItemQuestionListUIProps) {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={props.loadFunc}
      hasMore={true}
      style={{ width: "100%" }}
    >
      {props.data?.fetchUseditemQuestions.map((item: IData) => {
        return (
          <S.QuestionListWrapper key={uuidv4()}>
            {props.editId === item._id ? (
              <ItemQuestionWrite
                refetch={props.refetch}
                defaultContents={item.contents}
                editId={props.editId}
                setEditId={props.setEditId}
              ></ItemQuestionWrite>
            ) : (
              <>
                <S.QuestionListHeadWrapper>
                  <S.QuestionListProfileNameContentsWrapper>
                    <S.QuestionListProfileImage src="/img/profile.png"></S.QuestionListProfileImage>
                    <S.QuestionListNameContentsWrapper>
                      <S.QuestionListName>{item.user?.name}</S.QuestionListName>
                      <S.QuestionListContents>
                        {item.contents}
                      </S.QuestionListContents>
                    </S.QuestionListNameContentsWrapper>
                  </S.QuestionListProfileNameContentsWrapper>
                  <>
                    {(props.sellerId === props.userId ||
                      item.user._id === props.userId) && (
                      <S.QuestionAnswerButton
                        id={item._id}
                        onClick={props.onClickAnswerButton}
                      ></S.QuestionAnswerButton>
                    )}
                    {item.user._id === props.userId && (
                      <>
                        <S.QuestionListEditImg
                          id={item._id}
                          onClick={props.onClickQuestionEditButton}
                          src="/img/comment_edit.png"
                        ></S.QuestionListEditImg>
                        <S.QuestionListDeleteImg
                          id={item._id}
                          onClick={props.onClickQuestionDeleteButton}
                          src="/img/comment_delete.png"
                        ></S.QuestionListDeleteImg>
                      </>
                    )}
                  </>
                </S.QuestionListHeadWrapper>

                <S.QuestionListDate>
                  {getDate(item?.createdAt)}
                </S.QuestionListDate>
              </>
            )}

            <S.DivideLine></S.DivideLine>
            <ItemQuestionAnswersList
              useditemQuestionId={item._id}
            ></ItemQuestionAnswersList>
            {props.itemId === item._id && (
              <ItemQuestionAnswerWrite
                setItemId={props.setItemId}
                useditemQuestionId={item._id}
              ></ItemQuestionAnswerWrite>
            )}
          </S.QuestionListWrapper>
        );
      })}
    </InfiniteScroll>
  );
}
