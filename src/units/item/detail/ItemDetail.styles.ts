import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 100px 0;
  padding-bottom: 50px;
  border-bottom: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding-right: 25px;
`;

export const MainImage = styled.img`
  width: 80%;
  height: 400px;
  object-fit: cover;
`;

export const SubImageWrapper = styled.div`
  width: 80%;
`;

export const StyledSlider = styled(Slider)`
  display: flex;
  justify-content: center;
  align-items: center;
  .slick-slide slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-prev:before {
    font-size: 1.3rem;
    color: #ccc;
  }

  .slick-next:before {
    font-size: 1.3rem;
    color: #ccc;
  }
`;

export const SubImage = styled.img`
  object-fit: cover;
  height: 100px;
  margin: 50px 0px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const InfoRightWrapper = styled.div`
  width: 50%;
  pad: 50px;
  display: flex;
  flex-direction: column;
  padding-left: 25px;
`;

export const Title = styled.h3`
  font-size: 40px;
  border-bottom: 2px solid #bdbdbd;
  height: 80px;
`;

export const Price = styled.h3`
  font-size: 40px;
  height: 90px;
  width: 100%;
  text-align: end;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  font-size: 20px;
  background-color: black;
  color: white;
  border: 0px solid;
  border-radius: 10px;
`;

export const Contents = styled.div`
  width: 100%;
  padding: 100px 0;
  margin-bottom: 100px;
  border-bottom: 1px solid #bdbdbd;
  p {
    width: 80%;
    margin: 0px auto;
  }
  img {
    max-width: 80%;
    display: flex;
    margin: 0px auto;
  }
`;
