import Pagination from "./pagination/pagination.container";
import * as S from "./Review.styles";
import { v4 as uuidv4 } from "uuid";
import { IReview, IReviewListUIProps } from "./Review.types";
import { getDate } from "../../../commons/lib/utils";
import DatePicker from "../../../commons/datepicker";

export default function ReviewListUI(props: IReviewListUIProps) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.SearchWrapper>
          <S.TitleSearchInput
            placeholder="제목을 입력해주세요."
            onChange={props.onChangeSearch}
          ></S.TitleSearchInput>
          {/* <S.DateSearchWrapper> */}
          <S.DateSpace direction="vertical">
            {/* <ReactDatePicker onChange={props.onChangeStartDate} />
              <div>~</div>
              <ReactDatePicker onChange={props.onChangeEndDate} /> */}
            <DatePicker
              setStartDate={props.setStartDate}
              setEndDate={props.setEndDate}
            />
          </S.DateSpace>
          {/* </S.DateSearchWrapper> */}
          <S.SearchButton onClick={props.onClickSearch}>검색</S.SearchButton>
        </S.SearchWrapper>
        <S.ListWrapper>
          <S.ListTitleRow>
            <S.ListTitleNumber>번호</S.ListTitleNumber>
            <S.ListTitleTitle>제목</S.ListTitleTitle>
            <S.ListTitleWriter>작성자</S.ListTitleWriter>
            <S.ListTitleDate>날짜</S.ListTitleDate>
          </S.ListTitleRow>
          {props.review?.fetchBoards.map((item: IReview, index: number) => (
            <S.ListRow
              key={uuidv4()}
              onClick={props.onClickReview}
              id={item._id}
            >
              <S.ListNumberColumn>
                {props?.number?.fetchBoardsCount -
                  index -
                  (props.nowPage - 1) * 10 || ""}
              </S.ListNumberColumn>
              <S.ListTitleColumn>
                {item.title
                  .replaceAll(props.search, `#$%${props.search}#$%`)
                  .split("#$%")
                  .map((item: string) => (
                    <S.Word key={uuidv4()} isMatched={props.search === item}>
                      {item}
                    </S.Word>
                  ))}
              </S.ListTitleColumn>
              <S.ListWriterColumn>{item.writer}</S.ListWriterColumn>
              <S.ListDateColumn>{getDate(item.createdAt)}</S.ListDateColumn>
            </S.ListRow>
          ))}
          <S.FooterWrapper>
            <Pagination
              refetch={props.refetch}
              search={props.search}
              number={props.number}
              nowPage={props.nowPage}
              setNowPage={props.setNowPage}
            ></Pagination>
            <S.ReviewWritePageButton onClick={props.onClickWriteButton}>
              리뷰 등록하기
            </S.ReviewWritePageButton>
          </S.FooterWrapper>
        </S.ListWrapper>
      </S.Wrapper>
    </S.Body>
  );
}
