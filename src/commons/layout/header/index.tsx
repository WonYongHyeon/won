import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import Swal from "sweetalert2";
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

  return (
    <>
      <Wrapper>
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
      </Wrapper>
    </>
  );
}
