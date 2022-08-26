import { IPaginationUIProps } from "./pagination.types";
import * as S from "./pagination.styles";
import { v4 as uuidv4 } from "uuid";

export default function PaginationUI(props: IPaginationUIProps) {
  return (
    <div>
      <S.PrevButton
        disabled={props.isActivePrev}
        onClick={props.onClickPrevPage}
      >
        {"<"}
      </S.PrevButton>
      {new Array(10).fill(1).map((_, idx) => {
        return (
          idx + props.start <= props.lastPage && (
            <S.Page
              key={uuidv4()}
              id={String(idx + props.start)}
              onClick={props.onClickPageMove}
              style={{
                color:
                  Number(props.nowPage) === idx + props.start
                    ? "blue"
                    : "black",
              }}
            >
              {idx + props.start}
            </S.Page>
          )
        );
      })}
      <S.NextButton
        disabled={props.isActiveNext}
        onClick={props.onClickNextPage}
      >
        {">"}
      </S.NextButton>
    </div>
  );
}
