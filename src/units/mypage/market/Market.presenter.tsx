import * as S from "./Market.styles";
import { v4 as uuidv4 } from "uuid";
import { Tabs } from "antd";
import { IMypageMarketUIProps } from "./Market.types";
import { getDate } from "../../../commons/lib/utils";
import Pagination from "../../../commons/pagination/pagination.container";
const { TabPane } = Tabs;

export default function MypageMarketUI(props: IMypageMarketUIProps) {
  return (
    <S.Wrapper>
      <Tabs defaultActiveKey="1" size="large" onChange={props.onChangeOnePage}>
        <TabPane tab="전체목록" key="1">
          <S.TableHeaderWrapper>
            <S.TableHeaderNumber>번호</S.TableHeaderNumber>
            <S.TableHeaderTitle>물품명</S.TableHeaderTitle>
            <S.TableHeaderPrice>가격</S.TableHeaderPrice>
            <S.TableHeaderDate>구분</S.TableHeaderDate>
          </S.TableHeaderWrapper>
          {props.data?.fetchPointTransactions.map((el, index: number) => {
            return (
              <S.TableWrapper key={uuidv4()}>
                <S.TableNumber>
                  {props.buyCount?.fetchUseditemsCountIBought +
                    props.soldCount?.fetchUseditemsCountISold -
                    10 * (props.nowPage - 1) -
                    index}
                </S.TableNumber>
                <S.TableTitle>{el.useditem.name}</S.TableTitle>
                <S.TablePrice>
                  {el.useditem.price.toLocaleString()}원
                </S.TablePrice>
                <S.TableDate>{el.status}</S.TableDate>
              </S.TableWrapper>
            );
          })}
          <Pagination
            refetch={props.refetch}
            number={
              props.buyCount?.fetchUseditemsCountIBought +
              props.soldCount?.fetchUseditemsCountISold
            }
            nowPage={props.nowPage}
            setNowPage={props.setNowPage}
          ></Pagination>
        </TabPane>
        <TabPane tab="구매목록" key="2">
          <S.TableHeaderWrapper>
            <S.TableHeaderNumber>번호</S.TableHeaderNumber>
            <S.TableHeaderTitle>물품명</S.TableHeaderTitle>
            <S.TableHeaderPrice>가격</S.TableHeaderPrice>
            <S.TableHeaderDate>구매날짜</S.TableHeaderDate>
          </S.TableHeaderWrapper>
          {props.buyData?.fetchUseditemsIBought.map((el, index: number) => {
            return (
              <S.TableWrapper key={uuidv4()}>
                <S.TableNumber>
                  {props.buyCount?.fetchUseditemsCountIBought -
                    10 * (props.nowPage - 1) -
                    index}
                </S.TableNumber>
                <S.TableTitle>{el.name}</S.TableTitle>
                <S.TablePrice>{el.price.toLocaleString()}원</S.TablePrice>
                <S.TableDate>{getDate(el.soldAt)}</S.TableDate>
              </S.TableWrapper>
            );
          })}
          <Pagination
            refetch={props.refetchBuyData}
            number={props.buyCount?.fetchUseditemsCountIBought}
            nowPage={props.nowPage}
            setNowPage={props.setNowPage}
          ></Pagination>
        </TabPane>
        <TabPane tab="판매목록" key="3">
          <S.TableHeaderWrapper>
            <S.TableHeaderNumber>번호</S.TableHeaderNumber>
            <S.TableHeaderTitle style={{ width: "50%" }}>
              물품명
            </S.TableHeaderTitle>
            <S.TableHeaderPrice style={{ width: "35%" }}>
              가격
            </S.TableHeaderPrice>
          </S.TableHeaderWrapper>
          {props.soldData?.fetchUseditemsISold.map((el, index: number) => {
            return (
              <S.TableWrapper key={uuidv4()}>
                <S.TableNumber>
                  {props.soldCount?.fetchUseditemsCountISold - index}
                </S.TableNumber>
                <S.TableTitle style={{ width: "50%" }}>{el.name}</S.TableTitle>
                <S.TablePrice style={{ width: "35%" }}>
                  {el.price.toLocaleString()}원
                </S.TablePrice>
              </S.TableWrapper>
            );
          })}
          <Pagination
            refetch={props.refetchSoldData}
            number={props.soldCount?.fetchUseditemsCountISold}
            nowPage={props.nowPage}
            setNowPage={props.setNowPage}
          ></Pagination>
        </TabPane>
        <TabPane tab="찜목록" key="4">
          <S.TableHeaderWrapper>
            <S.TableHeaderNumber>번호</S.TableHeaderNumber>
            <S.TableHeaderTitle style={{ width: "50%" }}>
              물품명
            </S.TableHeaderTitle>
            <S.TableHeaderPrice style={{ width: "35%" }}>
              가격
            </S.TableHeaderPrice>
          </S.TableHeaderWrapper>
          {props.pickedData?.fetchUseditemsIPicked.map((el, index: number) => {
            return (
              <S.TableWrapper key={uuidv4()}>
                <S.TableNumber>
                  {props.pickedCount?.fetchUseditemsCountIPicked - index}
                </S.TableNumber>
                <S.TableTitle style={{ width: "50%" }}>{el.name}</S.TableTitle>
                <S.TablePrice style={{ width: "35%" }}>
                  {el.price.toLocaleString()}원
                </S.TablePrice>
              </S.TableWrapper>
            );
          })}
          <Pagination
            refetch={props.refetchPickedData}
            number={props.pickedCount?.fetchUseditemsCountIPicked}
            nowPage={props.nowPage}
            setNowPage={props.setNowPage}
          ></Pagination>
        </TabPane>
      </Tabs>
    </S.Wrapper>
  );
}
