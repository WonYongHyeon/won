import styled from "@emotion/styled";
import { Space } from "antd";
import { props } from "./Review.types";

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 80px;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

export const TitleSearchInput = styled.input`
  border: 1px solid #bdbdbd;
  width: 700px;
  height: 40px;
  padding: 14px 10px;
  border-radius: 5px;
`;

export const DateSearchWrapper = styled.div`
  width: 320px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  margin: 0px 30px;
`;
export const DateSpace = styled(Space)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchButton = styled.button`
  height: 40px;
  width: 70px;
  border-radius: 5px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const ListWrapper = styled.div`
  width: 100%;
  border-radius: 15px 15px 0px 0px;
`;

export const ListTitleRow = styled.div`
  width: 100%;
  color: black;
  font-size: 30px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
  padding: 5px 0px;
  background-color: rgba(153, 153, 255, 0.25);
  border-radius: 20px 20px 0px 0px;
`;

export const ListTitleNumber = styled.div`
  width: 15%;
  text-align: center;
`;

export const ListTitleTitle = styled.div`
  width: 40%;
`;

export const ListTitleWriter = styled.div`
  width: 15%;
  text-align: center;
`;

export const ListTitleDate = styled.div`
  width: 20%;
  text-align: center;
`;

export const ListRow = styled.div`
  width: 100%;
  color: black;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
  padding: 5px 0px;
  cursor: pointer;
  :hover {
    font-weight: 700;
    color: blueviolet;
    background-color: #dedede;
  }
  :hover span {
    color: blueviolet;
  }
`;

export const ListNumberColumn = styled.div`
  width: 15%;
  text-align: center;
`;

export const ListTitleColumn = styled.div`
  width: 40%;
`;

export const ListWriterColumn = styled.div`
  width: 20%;
  text-align: center;
`;

export const ListDateColumn = styled.div`
  width: 20%;
  text-align: center;
`;

export const FooterWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ReviewWritePageButton = styled.button`
  width: 130px;
  height: 30px;
  border-radius: 7px;
  background-color: white;
  cursor: pointer;
  :hover {
    background-color: yellow;
  }
`;

export const Word = styled.span`
  color: ${(props: props) => (props.isMatched ? "red" : "")};
`;
