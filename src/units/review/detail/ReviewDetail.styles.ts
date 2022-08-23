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
`;

export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 36px;
  font-weight: bold;
  padding-bottom: 40px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 600px;
  max-height: 600px;
  padding-bottom: 40px;
`;
export const Contents = styled.div`
  font-size: 16px;
  line-height: 24px;
  word-wrap: break-word;
  padding-bottom: 120px;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 160px;
`;

export const EvaluationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

export const EvaluationLikeImage = styled.img`
  width: 20px;
  height: 20px;
  color: #ffd600;
  cursor: pointer;
`;

export const EvaluationLikeNumber = styled.div`
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ffd600;
  padding-top: 4px;
`;
export const EvaluationDislikeImage = styled.img`
  width: 20px;
  height: 20px;
  color: #828282;
  cursor: pointer;
`;

export const EvaluationDislikeNumber = styled.div`
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #828282;
  padding-top: 4px;
`;

export const BoardSettingButtonWrapper = styled.div`
  padding-top: 101px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const GoListPageButton = styled.button`
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

export const GoFixPageButton = styled.button`
  width: 179px;
  height: 45px;
  padding: 14px 60px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  margin: 0px 24px;
  background-color: white;
  cursor: pointer;
  :hover {
    background-color: #fada95;
  }
`;

export const DeletePageButton = styled.button`
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
