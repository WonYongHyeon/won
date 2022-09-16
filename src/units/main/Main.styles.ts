import styled from "@emotion/styled";

import { keyframes } from "@emotion/react";

interface IProps {
  active: boolean;
}

const fadeInLeft = keyframes`
  0% {
      opacity: 0;
      transform: translateX(-100%);
  }
  to {
      opacity: 1;
      transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  0% {
      opacity: 0;
      transform: translateX(100%);
  }
  to {
      opacity: 1;
      transform: translateX(0);
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const LeftWrapper = styled.div`
  width: 100%;
  display: ${(props: IProps) => (props.active ? "flex" : "none")};
  flex-direction: column;
  animation: ${fadeInLeft} 1s;
`;

export const RightWrapper = styled.div`
  width: 100%;
  display: ${(props: IProps) => (props.active ? "flex" : "none")};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  animation: ${fadeInRight} 1s;
`;

export const Title = styled.h2`
  font-size: 50px;
  height: 100px;
`;

export const Image = styled.img`
  max-width: 800px;
  padding-bottom: 200px;
`;
