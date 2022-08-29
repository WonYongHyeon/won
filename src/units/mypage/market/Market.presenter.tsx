import * as S from "./Market.styles";
import { Tabs } from "antd";
import { IMypageMarketUIProps } from "./Market.types";
const { TabPane } = Tabs;

export default function MypageMarketUI(props: IMypageMarketUIProps) {
  return (
    <S.Wrapper>
      <Tabs defaultActiveKey="1" size="large">
        <TabPane tab="Tab 1" key="1">
          <S.Wrapper>
            <S.TableHeaderWrapper>
              <S.TableHeaderNumber>번호</S.TableHeaderNumber>
              <S.TableHeaderTitle>물품명</S.TableHeaderTitle>
              <S.TableHeaderPrice>가격</S.TableHeaderPrice>
              <S.TableHeaderDate>등록날짜</S.TableHeaderDate>
            </S.TableHeaderWrapper>
            {/* {props.buyData.map((el, index) => {

            })} */}
            <S.TableWrapper></S.TableWrapper>
          </S.Wrapper>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </S.Wrapper>
  );
}
