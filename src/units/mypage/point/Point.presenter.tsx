import * as S from "./Point.styles";
import { v4 as uuidv4 } from "uuid";
import { Tabs } from "antd";
import Pagination from "../../../commons/pagination/pagination.container";
import { IMypagePointUIProps } from "./Point.types";
import { getDate } from "../../../commons/lib/utils";
const { TabPane } = Tabs;

export default function MypagePointUI(props: IMypagePointUIProps) {
  return (
    <>
      <S.Wrapper>
        <Tabs
          defaultActiveKey="1"
          size="large"
          onChange={props.onChangeOnePage}
        >
          <TabPane tab="지출내역" key="1">
            <S.TableHeaderWrapper>
              <S.TableHeaderNumber>번호</S.TableHeaderNumber>
              <S.TableHeaderTitle>물품명</S.TableHeaderTitle>
              <S.TableHeaderPrice>포인트</S.TableHeaderPrice>
              <S.TableHeaderDate>지출날짜</S.TableHeaderDate>
            </S.TableHeaderWrapper>
            {props.buyData?.fetchPointTransactionsOfBuying.map(
              (el, index: number) => {
                return (
                  <S.TableWrapper key={uuidv4()}>
                    <S.TableNumber>
                      {props.buyingCount?.fetchPointTransactionsCountOfBuying -
                        10 * (props.nowPage - 1) -
                        index}
                    </S.TableNumber>
                    <S.TableTitle>{el.useditem.name}</S.TableTitle>
                    <S.TablePrice>{el.amount.toLocaleString()} P</S.TablePrice>
                    <S.TableDate>{getDate(el.createdAt)}</S.TableDate>
                  </S.TableWrapper>
                );
              }
            )}
            <Pagination
              refetch={props.buyRefetch}
              number={props.buyingCount?.fetchPointTransactionsCountOfBuying}
              nowPage={props.nowPage}
              setNowPage={props.setNowPage}
            ></Pagination>
          </TabPane>

          <TabPane tab="수입내역" key="2">
            <S.TableHeaderWrapper>
              <S.TableHeaderNumber>번호</S.TableHeaderNumber>
              <S.TableHeaderTitle>물품명</S.TableHeaderTitle>
              <S.TableHeaderPrice>포인트</S.TableHeaderPrice>
              <S.TableHeaderDate>수입날짜</S.TableHeaderDate>
            </S.TableHeaderWrapper>
            {props.sellData?.fetchPointTransactionsOfSelling.map(
              (el, index: number) => {
                return (
                  <S.TableWrapper key={uuidv4()}>
                    <S.TableNumber>
                      {props.sellingCount
                        ?.fetchPointTransactionsCountOfSelling -
                        10 * (props.nowPage - 1) -
                        index}
                    </S.TableNumber>
                    <S.TableTitle>{el.useditem.name}</S.TableTitle>
                    <S.TablePrice>{el.amount.toLocaleString()} P</S.TablePrice>
                    <S.TableDate>{getDate(el.createdAt)}</S.TableDate>
                  </S.TableWrapper>
                );
              }
            )}
            <Pagination
              refetch={props.sellRefetch}
              number={props.sellingCount?.fetchPointTransactionsCountOfSelling}
              nowPage={props.nowPage}
              setNowPage={props.setNowPage}
            ></Pagination>
          </TabPane>

          <TabPane tab="충전내역" key="3">
            <S.TableHeaderWrapper>
              <S.TableHeaderNumber>번호</S.TableHeaderNumber>
              {/* <S.TableHeaderTitle>충전금액</S.TableHeaderTitle> */}
              <S.TableHeaderPrice style={{ width: "50%" }}>
                충전금액
              </S.TableHeaderPrice>
              <S.TableHeaderDate style={{ width: "35%" }}>
                충전날짜
              </S.TableHeaderDate>
            </S.TableHeaderWrapper>
            {props.loadData?.fetchPointTransactionsOfLoading.map(
              (el, index: number) => {
                return (
                  <S.TableWrapper key={uuidv4()}>
                    <S.TableNumber>
                      {props.loadingCount
                        ?.fetchPointTransactionsCountOfLoading -
                        10 * (props.nowPage - 1) -
                        index}
                    </S.TableNumber>
                    <S.TablePrice style={{ width: "50%" }}>
                      {el.amount.toLocaleString()} P
                    </S.TablePrice>
                    <S.TableDate style={{ width: "35%" }}>
                      {getDate(el.createdAt)}
                    </S.TableDate>
                  </S.TableWrapper>
                );
              }
            )}
            <Pagination
              refetch={props.loadRefetch}
              number={props.loadingCount?.fetchPointTransactionsCountOfLoading}
              nowPage={props.nowPage}
              setNowPage={props.setNowPage}
            ></Pagination>
          </TabPane>
        </Tabs>
      </S.Wrapper>
    </>
  );
}
