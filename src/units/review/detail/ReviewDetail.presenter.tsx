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

import { IBoardDetailProps } from "./ReviewDetail.types";
import { Tooltip } from "antd";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../commons/lib/utils";
import Dompurify from "dompurify";

export default function BoardDetailUI(props: IBoardDetailProps) {
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
          <HeaderIconWrapper>
            <LinkIcon src="/img/link.png"></LinkIcon>
            <Tooltip
              title={
                props.data?.fetchBoard.boardAddress?.address +
                props.data?.fetchBoard.boardAddress?.addressDetail
              }
            >
              <LocationIcon src="/img/location.png"></LocationIcon>
            </Tooltip>
          </HeaderIconWrapper>
        </HeaderWrapper>
        <DivideLine></DivideLine>
        <BodyWrapper>
          <Title>{props.data?.fetchBoard.title}</Title>
          <ImageWrapper>
            {props.data?.fetchBoard.images.map((item: any) => {
              return item ? (
                <Image
                  key={uuidv4()}
                  src={`https://storage.googleapis.com/${item}`}
                />
              ) : (
                <></>
              );
            })}
          </ImageWrapper>
          <Contents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(props.data?.fetchBoard.contents),
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
