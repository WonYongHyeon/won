import "../styles/globals.css";
import "antd/dist/antd.css";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import Layout from "../src/commons/layout";
import ApolloSetting from "../src/commons/apolloSetting";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>공구</title>
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
