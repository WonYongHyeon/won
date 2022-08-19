import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";

const Body = styled.div`
  width: 100%;
  margin: 0px auto;
`;

interface ILayoutProps {
  children: ReactNode;
}
const HIDDEN_BANNERS = ["/login", "/signup"];
const HIDDEN_FOOTERS = ["/login", "/signup"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTERS.includes(router.asPath);

  return (
    <>
      <LayoutHeader />
      {!isHiddenBanner && <LayoutHeader />}
      <Body>{props.children}</Body>
      {!isHiddenFooter && <LayoutFooter />}
    </>
  );
}
