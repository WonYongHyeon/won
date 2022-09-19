import {
  HeaderWrapper,
  Wrapper,
  Body,
  ProfileIcon,
  NameWrapper,
  CreateDate,
  Name,
  HeaderLeft,
  LinkIcon,
  LocationIcon,
  HeaderIconWrapper,
  DivideLine,
  BodyWrapper,
  Title,
  Image,
  Contents,
  ImageWrapper,
  FooterWrapper,
  EvaluationBox,
  EvaluationLikeImage,
  EvaluationLikeNumber,
  EvaluationDislikeImage,
  EvaluationDislikeNumber,
  BoardSettingButtonWrapper,
  GoListPageButton,
  GoFixPageButton,
  DeletePageButton,
} from "./ReviewDetail.styles";

import { IBoardDetailUIProps } from "./ReviewDetail.types";
import { Tooltip } from "antd";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../commons/lib/utils";
import DOMPurify from "dompurify";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <Body>
      <Wrapper>
        <HeaderWrapper>
          <HeaderLeft>
            <ProfileIcon src="/img/profile.png"></ProfileIcon>
            <NameWrapper>
              <Name>{props.data?.fetchBoard.writer}</Name>
              <CreateDate>
                DATE : {getDate(props.data?.fetchBoard.createdAt)}
              </CreateDate>
            </NameWrapper>
          </HeaderLeft>
        </HeaderWrapper>
        <DivideLine></DivideLine>
        <BodyWrapper>
          <Title>{props.data?.fetchBoard.title}</Title>
          <ImageWrapper>
            {props.data?.fetchBoard.images.map((el: string) => {
              return el ? (
                <Image
                  key={uuidv4()}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ) : (
                <></>
              );
            })}
          </ImageWrapper>
          <Contents
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.data?.fetchBoard.contents),
            }}
          ></Contents>
        </BodyWrapper>
        <FooterWrapper>
          <EvaluationBox>
            <EvaluationLikeImage
              onClick={props.onClickLikeImage}
              src="/img/like.png"
            ></EvaluationLikeImage>
            <EvaluationLikeNumber>
              {props.data?.fetchBoard.likeCount}
            </EvaluationLikeNumber>
          </EvaluationBox>
          <EvaluationBox>
            <EvaluationDislikeImage
              onClick={props.onClickDislikeImage}
              src="/img/dislike.png"
            ></EvaluationDislikeImage>
            <EvaluationDislikeNumber>
              {props.data?.fetchBoard.dislikeCount}
            </EvaluationDislikeNumber>
          </EvaluationBox>
        </FooterWrapper>
        <BoardSettingButtonWrapper>
          <GoListPageButton onClick={props.onClickListButton}>
            목록으로
          </GoListPageButton>
          <GoFixPageButton onClick={props.onClickEditButton}>
            수정하기
          </GoFixPageButton>
          <DeletePageButton onClick={props.onClickDeleteButton}>
            삭제하기
          </DeletePageButton>
        </BoardSettingButtonWrapper>
      </Wrapper>
    </Body>
  );
}
