import "../styles/globals.css";
import "antd/dist/antd.css";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import Layout from "../src/commons/layout";
import ApolloSetting from "../src/commons/apolloSetting";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>기프티마켓</title>
      </Head>
      <RecoilRoot>
        <ApolloSetting>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
