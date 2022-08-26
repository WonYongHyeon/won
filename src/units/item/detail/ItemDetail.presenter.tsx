import * as S from "./ItemDetail.styles";
import DOMPurify from "dompurify";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import { IItemDetailUIProps } from "./ItemDetail.types";
import { getDate } from "../../../commons/lib/utils";

export default function ItemDetailUI(props: IItemDetailUIProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <S.Body>
      <S.Wrapper>
        <S.HeaderWrapper>
          <S.HeaderLeft>
            <S.ProfileIcon src="/img/profile.png"></S.ProfileIcon>
            <S.NameWrapper>
              <S.Name>{props.data?.fetchUseditem.seller.name}</S.Name>
              <S.CreateDate>
                DATE : {getDate(props.data?.fetchUseditem.createdAt)}
              </S.CreateDate>
            </S.NameWrapper>
          </S.HeaderLeft>
          <S.HeaderIconWrapper>
            <S.LikeActiveIcon
              src="/img/picked.svg"
              onClick={props.onClickPick}
            ></S.LikeActiveIcon>
            <S.LikePeople>{props.data?.fetchUseditem.pickedCount}</S.LikePeople>
          </S.HeaderIconWrapper>
        </S.HeaderWrapper>
        <S.DivideLine></S.DivideLine>
        <S.BodyWrapper>
          <S.Title>{props.data?.fetchUseditem.name}</S.Title>
          <S.Price>{props.data?.fetchUseditem.price}원</S.Price>
          <S.CarouselWrapper>
            <S.Carousel>
              <Slider {...settings}>
                {props.data?.fetchUseditem.images.map((el: string) => {
                  return (
                    <S.CarouselImage
                      key={uuidv4()}
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  );
                })}
              </Slider>
            </S.Carousel>
          </S.CarouselWrapper>
        </S.BodyWrapper>

        {typeof window !== "undefined" ? (
          <S.Contents
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
            }}
          ></S.Contents>
        ) : (
          <S.Contents />
        )}
        <S.Map id="mapDetail"></S.Map>
        <S.ButtonWrapper>
          <S.Button onClick={props.onClickMoveItemListPage}>상품목록</S.Button>
          {props.loginUserId?.fetchUserLoggedIn._id ===
          props.data?.fetchUseditem.seller._id ? (
            <>
              <S.Button onClick={props.onClickMoveEditPage}>수정하기</S.Button>
              <S.Button onClick={props.onClickDeleteItem}>삭제하기</S.Button>
            </>
          ) : (
            <>
              <S.Button onClick={props.onClickBuyItem}>구매하기</S.Button>
            </>
          )}
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Body>
  );
}
