import {
  Body,
  ContentsInput,
  ContentsWrapper,
  EditWrapper,
  Footer,
  Header,
  ImageButtonWrapper,
  ImageWrapper,
  InputText,
  PasswordInput,
  PasswordWrapper,
  RegistrationButton,
  TitleInput,
  TitleWrapper,
  Wrapper,
  WriterInput,
  WriterPasswordWrapper,
  WriterWrapper,
  Error,
} from "./ReviewNew.styles";
import UploadImage from "../../../commons/UploadImage/UploadImage.container";
import { v4 as uuidv4 } from "uuid";

export default function ReviewNewUI(props: any) {
  return (
    <Body>
      <Wrapper>
        <Header>{props.isEdit ? "게시물 수정" : "게시물 등록"}</Header>
        <EditWrapper>
          <WriterPasswordWrapper>
            <WriterWrapper>
              <InputText>작성자</InputText>
              <WriterInput
                placeholder="이름을 적어주세요."
                onChange={props.onChangeWriter}
                defaultValue={props.isEdit ? props.data?.fetchBoard.writer : ""}
                readOnly={props.isEdit}
              ></WriterInput>
              <Error>{props.writerError}</Error>
            </WriterWrapper>
            <PasswordWrapper>
              <InputText>비밀번호</InputText>
              <PasswordInput
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={props.onChangePassword}
              ></PasswordInput>
              <Error>{props.passwordError}</Error>
            </PasswordWrapper>
          </WriterPasswordWrapper>
          <TitleWrapper>
            <InputText>제목</InputText>
            <TitleInput
              placeholder="제목을 작성해주세요."
              onChange={props.onChangeTitle}
              defaultValue={props.isEdit ? props.data?.fetchBoard.title : ""}
            ></TitleInput>
            <Error>{props.titleError}</Error>
          </TitleWrapper>
          <ContentsWrapper>
            <InputText>내용</InputText>
            <ContentsInput
              placeholder="내용을 입력해주세요."
              onChange={props.onChangeContents}
              defaultValue={props.isEdit ? props.data?.fetchBoard.contents : ""}
            ></ContentsInput>
            <Error>{props.contentsError}</Error>
          </ContentsWrapper>
          <ImageWrapper>
            <InputText>사진 첨부</InputText>
            <ImageButtonWrapper>
              {new Array(props.fileUrls.length + 1).fill(1).map((_, index) => (
                <UploadImage
                  key={uuidv4()}
                  index={index}
                  onChangeFiles={props.onChangeFiles}
                  fileUrls={props.fileUrls}
                />
              ))}
            </ImageButtonWrapper>
          </ImageWrapper>
        </EditWrapper>
        <Footer>
          <RegistrationButton
            disabled={props.isEdit ? props.isEditDisabled : props.isDisabled}
            onClick={
              props.isEdit ? props.onClickEdit : props.onClickRegistrationButton
            }
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </RegistrationButton>
        </Footer>
      </Wrapper>
    </Body>
  );
}
