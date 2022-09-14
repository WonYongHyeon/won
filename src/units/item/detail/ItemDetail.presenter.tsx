import * as S from "./ItemDetail.styles";
import DOMPurify from "dompurify";
import { v4 as uuidv4 } from "uuid";
import { IItemDetailUIProps } from "./ItemDetail.types";
import { getDate } from "../../../commons/lib/utils";

export default function ItemDetailUI(props: IItemDetailUIProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    auto: false,
  };

  return (
    <S.Wrapper>
      <S.InfoWrapper>
        <S.ImageWrapper>
          <S.MainImage
            src={`https://storage.googleapis.com/${props.mainImg}`}
          />
          <S.SubImageWrapper>
            <S.StyledSlider {...settings}>
              {props.data?.fetchUseditem.images.map((el) => {
                return (
                  <S.SubImage
                    onClick={props.onClickSubImage}
                    key={uuidv4()}
                    id={el}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                );
              })}
              {props.data?.fetchUseditem.images.length < 5 &&
                new Array(5 - props.data?.fetchUseditem.images.length)
                  .fill(1)
                  .map((_) => {
                    return <div key={uuidv4()}></div>;
                  })}
            </S.StyledSlider>
          </S.SubImageWrapper>
        </S.ImageWrapper>
        <S.InfoRightWrapper>
          <S.Title>{props.data?.fetchUseditem.name}</S.Title>
          <S.Price>
            {props.data?.fetchUseditem.price.toLocaleString()} 원
          </S.Price>
          <S.ButtonWrapper>
            <S.Button onClick={props.onClickMoveItemListPage}>
              상품목록
            </S.Button>
            {props.loginUserId?.fetchUserLoggedIn._id ===
            props.data?.fetchUseditem.seller._id ? (
              <>
                <S.Button onClick={props.onClickMoveEditPage}>
                  수정하기
                </S.Button>
                <S.Button onClick={props.onClickDeleteItem}>삭제하기</S.Button>
              </>
            ) : (
              <>
                <S.Button onClick={props.onClickBuyItem}>구매하기</S.Button>
              </>
            )}
          </S.ButtonWrapper>
        </S.InfoRightWrapper>
      </S.InfoWrapper>
      {typeof window !== "undefined" ? (
        <S.Contents
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
          }}
        ></S.Contents>
      ) : (
        <S.Contents />
      )}
    </S.Wrapper>
  );
}
