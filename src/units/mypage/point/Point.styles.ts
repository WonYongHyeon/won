import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

export const TableHeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 20px;
  line-height: 45px;
`;

export const TableHeaderNumber = styled.p`
  width: 15%;
  height: 100%;
  border: 1px solid white;
  background-color: black;
  color: white;
`;

export const TableHeaderTitle = styled.p`
  width: 35%;
  height: 100%;
  border: 1px solid white;
  background-color: black;
  color: white;
`;

export const TableHeaderPrice = styled.p`
  width: 25%;
  height: 100%;
  border: 1px solid white;
  background-color: black;
  color: white;
`;

export const TableHeaderDate = styled.p`
  width: 25%;
  height: 100%;
  border: 1px solid white;
  background-color: black;
  color: white;
`;

export const TableWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 16px;
  line-height: 35px;
  cursor: pointer;

  :hover {
    background-color: #bdbdbd;
  }
`;

export const TableNumber = styled.div`
  width: 15%;
  height: 100%;
  border: 0px solid;
`;

export const TableTitle = styled.div`
  width: 35%;
  height: 100%;
  border: 0px solid;
`;

export const TablePrice = styled.div`
  width: 25%;
  height: 100%;
  border: 0px solid;
`;

export const TableDate = styled.div`
  width: 25%;
  height: 100%;
  border: 0px solid;
`;
