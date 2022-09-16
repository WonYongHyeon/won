import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { onError } from "@apollo/client/link/error";
import { useEffect } from "react";
import { getAccessToken } from "../lib/getAccessToken";
import { AccessToken } from "../store";

interface IApolloSettingProps {
  children: any;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(AccessToken);

  const uploadLink = createUploadLink({
    uri: "https://backend07.codebootcamp.co.kr/graphql22",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
    credentials: "include",
  });

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      // 1-2. 에러가 토큰만료 에러인지 캐치
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2-1. refreshToken으로 accessToken 재발급 받기
          getAccessToken().then((newAccessToken: string) => {
            // 2-2 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            operation.setContext({
              headers: {
                // 기존의 헤더는 남겨주고 accessToken만 바꿔주기
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });

            // 3-2. 변경된 operation 재요청하기
            return forward(operation);
          });
        }
      }
    }
  });

  useEffect(() => {
    getAccessToken().then((newAccessToken: string) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const client = new ApolloClient({
    // 포트폴리오에서는 uri가 backend07로 변경
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
