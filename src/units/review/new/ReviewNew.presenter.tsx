import {
  Body,
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
import ReactQuillContainer from "../../../commons/quill";
import { IReviewWriteUIProps } from "./ReviewNew.types";

export default function ReviewNewUI(props: IReviewWriteUIProps) {
  return (
    // type="button"
    //           onClick={
    //             props.isEdit
    //               ? props.onClickEdit
    //               : props.onClickRegistrationButton
    //           }
    <form
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickEdit : props.onClickRegistrationButton
      )}
    >
      <Body>
        <Wrapper>
          <Header>{props.isEdit ? "게시물 수정" : "게시물 등록"}</Header>
          <EditWrapper>
            <WriterPasswordWrapper>
              <WriterWrapper>
                <InputText>작성자</InputText>
                <WriterInput
                  placeholder="이름을 적어주세요."
                  {...props.register("writer")}
                  defaultValue={
                    props.isEdit ? props.data?.fetchBoard.writer : ""
                  }
                  readOnly={props.isEdit}
                ></WriterInput>
              </WriterWrapper>
              <PasswordWrapper>
                <InputText>비밀번호</InputText>
                <PasswordInput
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  {...props.register("password")}
                ></PasswordInput>
              </PasswordWrapper>
            </WriterPasswordWrapper>
            <TitleWrapper>
              <InputText>제목</InputText>
              <TitleInput
                placeholder="제목을 작성해주세요."
                {...props.register("title")}
                defaultValue={props.isEdit ? props.data?.fetchBoard.title : ""}
              ></TitleInput>
            </TitleWrapper>
            <ContentsWrapper>
              <InputText>내용</InputText>
              <ReactQuillContainer
                content={props.getValues("contents") || ""}
                onChangeContent={props.onChangeContents}
              ></ReactQuillContainer>
            </ContentsWrapper>
            <ImageWrapper>
              <InputText>사진 첨부</InputText>
              <ImageButtonWrapper>
                {new Array((props.fileUrls?.length || 0) + 1)
                  .fill(1)
                  .map((_, index) => (
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
            // disabled={props.isEdit ? props.isEditDisabled : props.isDisabled}
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </RegistrationButton>
          </Footer>
        </Wrapper>
      </Body>
    </form>
  );
}
