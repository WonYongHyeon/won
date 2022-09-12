import * as S from "./ItemNew.styles";
import UploadImage from "../../../commons/UploadImage/UploadImage.container";
import { IProductNewUIProps } from "./ItemNew.types";
import Input02 from "../../../commons/inputs/02";
import Button02 from "../../../commons/buttons/02";
import { v4 as uuidv4 } from "uuid";
import ReactQuillContainer from "../../../commons/quill";

export default function ProductNewUI(props: IProductNewUIProps) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.Title>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</S.Title>
        <form
          onSubmit={
            props.isEdit
              ? props.handleSubmit(props.onClickEdit)
              : props.handleSubmit(props.onClickSubmit)
          }
        >
          <S.InputText>상품명</S.InputText>
          <Input02
            type="text"
            holder="상품명을 작성해주세요."
            register={props.register("name")}
            defaultValue={props.fetchData?.fetchUseditem.name}
            readonly={false}
          ></Input02>
          <S.InputText>판매가격</S.InputText>
          <Input02
            type="number"
            holder="판매 가격을 입력해주세요."
            register={props.register("price")}
            defaultValue={props.fetchData?.fetchUseditem.price}
            readonly={false}
          ></Input02>
          <S.InputText>상품 설명</S.InputText>
          <ReactQuillContainer
            getValues={props.getValues}
            onChangeContent={props.onChangeContents}
          ></ReactQuillContainer>
          <>
            <S.InputText>기프티콘 첨부</S.InputText>
            <S.ImageButtonWrapper>
              <UploadImage
                key={uuidv4()}
                index={0}
                onChangeFiles={props.onChangeGifticon}
                fileUrls={[props.getValues("remarks")]}
              />
            </S.ImageButtonWrapper>
            <S.InputText>사진첨부</S.InputText>
            <S.ImageButtonWrapper>
              {new Array(props.fileUrls.length + 1)
                .fill(1)
                .map((data, index) => (
                  <UploadImage
                    key={uuidv4()}
                    index={index}
                    onChangeFiles={props.onChangeFiles}
                    fileUrls={props.fileUrls}
                  />
                ))}
            </S.ImageButtonWrapper>
          </>
          {props.isEdit ? (
            <Button02 title="수정하기" isActive={true}></Button02>
          ) : (
            <Button02 title="등록하기" isActive={props.isActive}></Button02>
          )}
        </form>
      </S.Wrapper>
    </S.Body>
  );
}
