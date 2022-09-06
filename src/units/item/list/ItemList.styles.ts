import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 80px 0px;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

export const CheckSoldWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CheckSold = styled.div`
  width: 120px;
  font-size: 16px;
  text-align: center;
  color: #999999;
  padding-right: 20px;
  cursor: pointer;
  :hover {
    color: blue;
  }
`;

export const TitleSearchInput = styled.input`
  border: 1px solid #bdbdbd;
  width: 400px;
  height: 40px;
  padding: 14px 10px;
  border-radius: 5px;
  margin-left: 130px;
`;

export const SearchButton = styled.button`
  height: 40px;
  width: 70px;
  border-radius: 5px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const WriteButton = styled.button`
  height: 40px;
  width: 70px;
  border-radius: 5px;
  background-color: black;
  margin-left: 10px;
  color: white;
  cursor: pointer;
`;

export const ItemWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border-radius: 30px;
  margin-bottom: 30px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  background-color: #f7f6ee;
  :hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`;

export const ItemImage = styled.img`
  min-width: 160px;
  min-height: 160px;
  width: 160px;
  height: 160px;
`;

export const MainContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  padding-left: 50px;
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
`;

export const Remarks = styled.div`
  font-size: 18px;
  line-height: 30px;
  padding-bottom: 10px;
`;

export const SellerPickedWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProfileImage = styled.img`
  width: 20px;
  height: 20px;
`;

export const SellerName = styled.div`
  font-size: 16px;
  line-height: 24px;
  padding-left: 10px;
  padding-right: 20px;
`;
export const PickedImage = styled.img`
  margin-right: 10px;
`;

export const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const BodyDivide = styled.div`
  display: flex;
  flex-direction: row;
`;
export const RightLeftWrapper = styled.div`
  width: 250px;
`;

export const TodayItemListWrapper = styled.div`
  width: 200px;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 0px 10px;
  margin-top: 100px;
  margin-left: 50px;
  display: inline-block;
  position: sticky;
  top: 200px;
`;

export const TodayItemWrapper = styled.div`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 20px;
  margin: 20px 0px;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

export const TodayItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TodayItemImage = styled.img`
  min-width: 60px;
  min-height: 60px;
  width: 60px;
  height: 60px;
  border-radius: 20px;
`;

export const TodayItemName = styled.div`
  font-size: 15px;
  width: 100px;
  padding-top: 10px;
  padding-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;

export const TodayItemPrice = styled.div`
  font-size: 12px;
  width: 100px;
  padding: 10px;
  color: #727272;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;
