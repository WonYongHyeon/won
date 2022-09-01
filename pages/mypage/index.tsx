import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Select } from "antd";
import { useState } from "react";
import MypageMarket from "../../src/units/mypage/market/Market.container";
import MypagePassword from "../../src/units/mypage/password/Password.container";

const { Option } = Select;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  padding-top: 50px;
  font-size: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const MenuWrapper = styled.div`
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Point = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const PointChargeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const PointChoice = styled(Select)`
  width: 150px;
`;

const PointChargeButton = styled.button``;

const Menu = styled.p`
  font-size: 20px;
  cursor: pointer;
`;

const DivideLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #bdbdbd;
  margin: 40px 0;
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        amount
      }
    }
  }
`;

export default function MypagePage() {
  const { data, loading } = useQuery(FETCH_USER_LOGGED_IN);
  const [check, setCheck] = useState(1);

  const onClickMenu = (check: number) => () => {
    setCheck(check);
  };

  return loading ? (
    <></>
  ) : (
    <Body>
      <Title>My Page</Title>
      <Wrapper>
        <MenuWrapper>
          <Name>{data?.fetchUserLoggedIn.name} 님</Name>
          <Point>포인트 : {data?.fetchUserLoggedIn.userPoint.amount} 원</Point>
          <PointChargeWrapper>
            <PointChoice defaultValue="1000">
              <Option value="1000">1000</Option>
              <Option value="5000">5000</Option>
              <Option value="10000">10000</Option>
              <Option value="50000">50000</Option>
              <Option value="100000">100000</Option>
            </PointChoice>
            <PointChargeButton>충전하기</PointChargeButton>
          </PointChargeWrapper>
          <DivideLine />
          <Menu onClick={onClickMenu(1)}>중고마켓 내역</Menu>
          <Menu onClick={onClickMenu(2)}>포인트 내역</Menu>
          <Menu onClick={onClickMenu(3)}>비밀번호 변경</Menu>
        </MenuWrapper>
        {check === 1 && <MypageMarket></MypageMarket>}
        {check === 3 && (
          <MypagePassword email={data.fetchUserLoggedIn.email}></MypagePassword>
        )}
      </Wrapper>
    </Body>
  );
}
