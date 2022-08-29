import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import Swal from "sweetalert2";
import { AccessToken } from "../../store";
import "animate.css";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderEnableArea = styled.div`
  position: fixed;
  top: 0;
  width: 80%;
  /* height: 100%; */
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
  const [isMenu, setIsMenu] = useState(false);

  const [count, setCount] = useState(0);

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickSignup = () => {
    router.push("/signup");
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

  // const onHoverOver = () => {
  //   // if (count === 0) {
  //   // setCount(1);
  //   setIsMenu(true);
  //   // }
  //   console.log("1");
  // };
  // const onHoverOut = () => {
  //   // setCount(0);
  //   setIsMenu(false);
  // };

  return (
    <Wrapper
    // onMouseOver={onHoverOver} onMouseOut={onHoverOut}
    >
      <HeaderEnableArea>
        <LogoText onClick={onClickLogo}>공구</LogoText>
        <MenuWrapper>
          <MenuText onClick={data ? undefined : onClickLogin}>
            {data ? data.fetchUserLoggedIn.name + " 님" : "로그인"}
          </MenuText>
          <MenuText onClick={data ? onClickLogout : onClickSignup}>
            {data ? "로그아웃" : "회원가입"}
          </MenuText>
        </MenuWrapper>
      </HeaderEnableArea>
      {/* {isMenu && (
        // <div style={{ height: "100px", marginTop: "100px" }}>
        <div
          style={{ color: "red", height: "100px", marginTop: "100px" }}
          className="animate__animated animate__fadeInDown"
        >
          ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ
        </div>
        // </div>
      )} */}
    </Wrapper>
  );
}
