import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import Swal from "sweetalert2";
import { AccessToken } from "../../store";
import "animate.css";
import { keyframes } from "@emotion/react";

const fadeInDown = keyframes`
  0% {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
  }
  to {
      opacity: 1;
      transform: translateZ(0);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;

  :hover .dropdown {
    display: flex;
  }

  .dropdown {
    display: none;
  }
`;

const HeaderEnableArea = styled.div`
  position: fixed;
  top: 0;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoText = styled.div`
  height: 100%;
  font-size: 30px;
  color: white;
  text-align: center;
  line-height: 100px;
  z-index: 100;

  cursor: pointer;
`;

const MenuWrapper = styled.div`
  /* width: 600px; */
  display: flex;
  justify-content: end;
`;

const MenuHeaderText = styled.div`
  width: 150px;
  line-height: 100px;
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0 20px; */
  cursor: pointer;
`;

const MenuText = styled.div`
  width: 150px;
  font-size: 16px;
  height: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
`;

const MenuNav = styled.div`
  display: flex;
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  background-color: black;
  animation: ${fadeInDown} 1s;
  color: white;
  justify-content: center;
  align-items: center;
`;

const MenuColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: end;
`;

const MenuNavWrapper = styled.div`
  width: 80%;
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
    }
  }
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutHeader() {
  const router = useRouter();
  const setAccessToken = useSetRecoilState(AccessToken);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation(LOGOUT_USER);

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickSignup = () => {
    router.push("/signup");
  };

  const onClickMypage = () => {
    router.push("/mypage");
  };

  const onClickLogout = async () => {
    try {
      await logoutUser();
      setAccessToken("");
      router.push("/");
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        text: error.message,
      });
    }
  };

  const onClickReview = () => {
    router.push("/review");
  };

  const onClickMarkets = () => {
    router.push("/markets");
  };

  return (
    <Wrapper>
      <HeaderEnableArea>
        <LogoText onClick={onClickLogo}>기프티마켓</LogoText>
        <MenuWrapper>
          <MenuHeaderText>게시판</MenuHeaderText>
          {data ? (
            <MenuHeaderText>
              {data.fetchUserLoggedIn.name + " 님"}
            </MenuHeaderText>
          ) : (
            <></>
          )}
          {data ? (
            <></>
          ) : (
            <MenuHeaderText onClick={onClickLogin}>로그인</MenuHeaderText>
          )}
        </MenuWrapper>
      </HeaderEnableArea>
      <MenuNav className="dropdown">
        <MenuNavWrapper>
          <MenuWrapper>
            <MenuColumn>
              <MenuText onClick={onClickReview}>리뷰게시판</MenuText>
              <MenuText onClick={onClickMarkets}>기프티콘마켓</MenuText>
            </MenuColumn>
            <MenuColumn>
              {data ? (
                <>
                  <MenuText onClick={onClickMypage}>마이페이지</MenuText>
                  <MenuText onClick={onClickLogout}>로그아웃</MenuText>
                </>
              ) : (
                <>
                  <MenuText onClick={onClickSignup}>회원가입</MenuText>
                  <MenuText></MenuText>
                </>
              )}
            </MenuColumn>
          </MenuWrapper>
        </MenuNavWrapper>
      </MenuNav>
    </Wrapper>
  );
}
