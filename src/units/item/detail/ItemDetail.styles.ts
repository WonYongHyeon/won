import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 55px;
  padding-bottom: 55px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  padding: 80px 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  background-color: #f7f6ee;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProfileIcon = styled.img`
  width: 46.67px;
  height: 46.67px;
`;

export const NameWrapper = styled.div`
  padding-left: 16.67px;
`;

export const Name = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;

export const CreateDate = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #828282;
`;

export const HeaderIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LikeActiveIcon = styled.img`
  padding-right: 29.33px;
`;

export const DislikeActiveIcon = styled.img`
  padding-right: 29.33px;
`;

export const LikePeople = styled.div`
  padding-right: 29.33px;
`;

export const LinkIcon = styled.img`
  padding-right: 29.33px;
`;

export const LocationIcon = styled.img`
  padding-right: 10px;
`;

export const DivideLine = styled.div`
  width: 100%;
  background-color: #bdbdbd;
  border-bottom: 1px solid;
  margin: 30px 0px;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

export const Title = styled.div`
  width: 100%;
  word-break: break-all;
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 20px;
`;

export const Price = styled.div`
  font-size: 44px;
  font-weight: 700;
  padding-bottom: 30px;
`;

export const Contents = styled.div`
  width: 100%;
  font-size: 16px;
  word-wrap: break-word;
  padding-bottom: 30px;

  img {
    max-width: 100%;
    display: flex;
    margin: 0px auto;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 160px;
`;

export const ButtonWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  padding: 14px 60px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  :hover {
    background-color: #fada95;
  }
`;

export const CarouselWrapper = styled.div`
  /* max-height: 400px;
  max-width: 400px; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Carousel = styled.div`
  width: 100%;
`;

export const CarouselImage = styled.img`
  margin: 0px auto;
  width: 100%;
  text-align: center;
`;

export const Map = styled.div`
  width: 100%;
  height: 500px;
`;
