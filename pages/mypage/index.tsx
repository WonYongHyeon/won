import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Select } from "antd";
import Head from "next/head";
import { useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../../src/commons/hooks/useAuth";
import MypageMarket from "../../src/units/mypage/market/Market.container";
import MypagePassword from "../../src/units/mypage/password/Password.container";
import MypagePoint from "../../src/units/mypage/point/Point.container";

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

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;

declare const window: typeof globalThis & {
  IMP: any;
};

export default function MypagePage() {
  useAuth();
  const { data, loading } = useQuery(FETCH_USER_LOGGED_IN);

  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const [check, setCheck] = useState(1);
  const [charge, setCharge] = useState(1000);

  const onClickMenu = (check: number) => () => {
    setCheck(check);
  };
  const onChangeCharge = (value: unknown) => {
    setCharge(Number(value));
  };

  const onClickCharge = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "포인트 충전",
        amount: charge,
      },
      async (rsp: any) => {
        if (rsp.success) {
          try {
            await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
              refetchQueries: [
                {
                  query: FETCH_USER_LOGGED_IN,
                },
              ],
            });
            Swal.fire({
              icon: "error",
              text: "결제가 완료되었습니다.",
            });
          } catch (error: any) {
            Swal.fire({
              icon: "error",
              text: "결제를 실패했습니다.",
            });
          }
        } else {
          Swal.fire({
            icon: "error",
            text: "결제를 실패했습니다.",
          });
        }
      }
    );
  };

  return loading ? (
    <></>
  ) : (
    <Body>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <Title>My Page</Title>
      <Wrapper>
        <MenuWrapper>
          <Name>{data?.fetchUserLoggedIn.name} 님</Name>
          <Point>포인트 : {data?.fetchUserLoggedIn.userPoint.amount} 원</Point>
          <PointChargeWrapper>
            <PointChoice defaultValue="1000" onChange={onChangeCharge}>
              <Option value="1000">1000</Option>
              <Option value="5000">5000</Option>
              <Option value="10000">10000</Option>
              <Option value="50000">50000</Option>
              <Option value="100000">100000</Option>
            </PointChoice>
            <PointChargeButton onClick={onClickCharge}>
              충전하기
            </PointChargeButton>
          </PointChargeWrapper>
          <DivideLine />
          <Menu onClick={onClickMenu(1)}>중고마켓 내역</Menu>
          <Menu onClick={onClickMenu(2)}>포인트 내역</Menu>
          <Menu onClick={onClickMenu(3)}>비밀번호 변경</Menu>
        </MenuWrapper>
        {check === 1 && <MypageMarket></MypageMarket>}
        {check === 2 && <MypagePoint></MypagePoint>}
        {check === 3 && (
          <MypagePassword email={data.fetchUserLoggedIn.email}></MypagePassword>
        )}
      </Wrapper>
    </Body>
  );
}
