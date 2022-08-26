import * as S from "./ItemNew.styles";
import UploadImage from "../../../commons/UploadImage/UploadImage.container";
import { IProductNewUIProps } from "./ItemNew.types";
import Input03 from "../../../commons/inputs/03";
import Input02 from "../../../commons/inputs/02";
import Button02 from "../../../commons/buttons/02";
import { v4 as uuidv4 } from "uuid";

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
          <S.InputText>한줄요약</S.InputText>
          <Input02
            type="text"
            holder="한줄요약을 작성해주세요."
            register={props.register("remarks")}
            defaultValue={props.fetchData?.fetchUseditem.remarks}
            readonly={false}
          ></Input02>
          <S.InputText>상품 설명</S.InputText>
          <S.ContentsEditor
            style={{
              backgroundColor: "white",
              marginBottom: "20px",
            }}
            placeholder="상품 설명을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.fetchData?.fetchUseditem?.contents}
          ></S.ContentsEditor>
          <S.InputText>판매가격</S.InputText>
          <Input02
            type="number"
            holder="판매 가격을 입력해주세요."
            register={props.register("price")}
            defaultValue={props.fetchData?.fetchUseditem.price}
            readonly={false}
          ></Input02>
          <S.MapWrapper>
            <S.ColumnWrapper>
              <S.InputText>거래위치</S.InputText>
              <S.Map id="map"></S.Map>
            </S.ColumnWrapper>
            <S.ColumnWrapper>
              <S.InputText>위치</S.InputText>
              <S.XYWrapper>
                <Input03
                  type="number"
                  holder="위도"
                  defaultValue={
                    props.fetchData?.fetchUseditem.useditemAddress.lng
                  }
                  register={props.register("lng")}
                />
                <Input03
                  type="number"
                  holder="경도"
                  defaultValue={
                    props.fetchData?.fetchUseditem.useditemAddress.lat
                  }
                  register={props.register("lat")}
                />
              </S.XYWrapper>
              <S.InputText>상세주소</S.InputText>
              <Input02
                type="string"
                holder="지도를 클릭하면 주소가 입력됩니다."
                register={props.register("address")}
                defaultValue={
                  props.fetchData?.fetchUseditem.useditemAddress.address
                }
                readonly={true}
              />
              <Input02
                type="string"
                holder="거래를 위한 상세한 위치를 입력해주세요."
                register={props.register("addressDetail")}
                defaultValue={
                  props.fetchData?.fetchUseditem.useditemAddress.addressDetail
                }
                readonly={false}
              />
            </S.ColumnWrapper>
          </S.MapWrapper>

          <S.InputText>사진첨부</S.InputText>
          <S.ImageButtonWrapper>
            {new Array(props.fileUrls.length + 1).fill(1).map((data, index) => (
              <UploadImage
                key={uuidv4()}
                index={index}
                onChangeFiles={props.onChangeFiles}
                fileUrls={props.fileUrls}
              />
            ))}
          </S.ImageButtonWrapper>
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
