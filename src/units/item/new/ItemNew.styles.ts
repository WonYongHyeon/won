import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

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
  display: flex;
  flex-direction: column;
  padding: 60px 103px 100px 101px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  background-color: #f7f6ee;
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 40px;
  padding-bottom: 30px;
`;

export const InputText = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 52px;
  border: 1px solid #111111;
  padding: 14px 16px;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const ImageButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const ContentsEditor = styled(ReactQuill)`
  .ql-container {
    height: 400px;
  }
`;

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 60px;
`;

export const XYWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const XYInput = styled.input`
  width: 100px;
  height: 52px;
  border-radius: 5px;
  border: 1px solid #111111;
  padding: 14px 16px;
  font-size: 16px;
  margin-right: 30px;
`;

export const Map = styled.div`
  height: 300px;
  width: 400px;
  margin-bottom: 20px;
`;
