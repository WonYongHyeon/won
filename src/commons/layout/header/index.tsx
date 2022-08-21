import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { AccessToken } from "../../store";

const Wrapper = styled.div`
  height: 100px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderEnableArea = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoText = styled.div`
  width: 100px;
  height: 100%;
  font-size: 30px;
  color: white;
  text-align: center;
  line-height: 100px;

  cursor: pointer;
`;

const MenuWrapper = styled.div`
  width: 600px;
  display: flex;
  justify-content: end;
`;

const MenuText = styled.div`
  line-height: 100px;
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
    }
  }
`;

export default function LayoutHeader() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const onClickLogo = () => {
    router.push("/");
  };
  const onClickLogin = () => {
    router.push("/login");
  };

  return (
    <>
      <Wrapper>
        <HeaderEnableArea>
          <LogoText onClick={onClickLogo}>공구</LogoText>
          <MenuWrapper>
            <MenuText onClick={onClickLogin}>
              {data ? data.fetchUserLoggedIn.name + " 님" : "로그인"}
            </MenuText>
            <MenuText>회원가입</MenuText>
          </MenuWrapper>
        </HeaderEnableArea>
      </Wrapper>
    </>
  );
}
