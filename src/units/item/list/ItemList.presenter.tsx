import { IItemListUIProps } from "./ItemList.types";
import * as S from "./ItemList.styles";
import { v4 as uuidv4 } from "uuid";
import InfiniteScroll from "react-infinite-scroller";

export default function ItemListUI(props: IItemListUIProps) {
  return (
    <S.BodyDivide>
      <S.RightLeftWrapper></S.RightLeftWrapper>
      <S.Wrapper>
        <S.SearchWrapper>
          <S.CheckSold onClick={props.onClickSellingSoldout(false)}>
            판매중상품
          </S.CheckSold>
          <S.CheckSold onClick={props.onClickSellingSoldout(true)}>
            판매된상품
          </S.CheckSold>
          <S.TitleSearchInput
            type="text"
            placeholder="검색할 상품을 입력해주세요."
            onChange={props.onChangeSearch}
          ></S.TitleSearchInput>
          <S.WriteButton onClick={props.onClickWriteButton}>
            글작성
          </S.WriteButton>
        </S.SearchWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.loadFunc}
          hasMore={true}
          style={{ width: "100%" }}
          useWindow={true}
        >
          {props.data?.fetchUseditems.map((el: any) => {
            return (
              <S.ItemWrapper
                id={el._id}
                key={uuidv4()}
                onClick={props.onClickItem(el)}
              >
                {el.images.length === 0 || el.images[0] === "" ? (
                  <S.ItemImage src="/img/no_image_160.webp" />
                ) : (
                  <S.ItemImage
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  />
                )}

                <S.MainContentsWrapper>
                  <S.Name>{el.name}</S.Name>
                  <S.Remarks>{el.remarks}</S.Remarks>
                  <S.SellerPickedWrapper>
                    <S.ProfileImage src="/img/profile.png" />
                    <S.SellerName>{el.seller.name}</S.SellerName>
                    <S.PickedImage src="/img/picked.svg" /> {el.pickedCount}
                  </S.SellerPickedWrapper>
                </S.MainContentsWrapper>
                <S.Price>{el.price}원</S.Price>
              </S.ItemWrapper>
            );
          })}
        </InfiniteScroll>
      </S.Wrapper>
      <S.RightLeftWrapper>
        <S.TodayItemListWrapper>
          {props.today.map((el: any) => {
            return (
              <S.TodayItemWrapper key={uuidv4()}>
                {el.images.length === 0 || el.images[0] === "" ? (
                  <S.TodayItemImage src="/img/no_image_160.webp" />
                ) : (
                  <S.TodayItemImage
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  />
                )}
                <S.TodayItemTextWrapper>
                  <S.TodayItemName>{el.name}</S.TodayItemName>
                  <S.TodayItemRemarks>{el.remarks}</S.TodayItemRemarks>
                </S.TodayItemTextWrapper>
              </S.TodayItemWrapper>
            );
          })}
        </S.TodayItemListWrapper>
      </S.RightLeftWrapper>
    </S.BodyDivide>
  );
}
