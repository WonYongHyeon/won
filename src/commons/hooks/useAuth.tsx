import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Swal from "sweetalert2";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
    }
  }
`;

export const useAuth = () => {
  const router = useRouter();
  const { data, loading } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (!loading && !data?.fetchUserLoggedIn) {
      Swal.fire({
        icon: "warning",
        text: "로그인 후에 이용 가능합니다.",
      }).then((rsp) => {
        if (rsp.isConfirmed) {
          router.push("/login");
        }
      });
    }
  }, [loading]);
};
