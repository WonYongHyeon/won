import { MouseEvent, useState } from "react";
import PaginationUI from "./pagination.presenter";
import { IPaginationProps } from "./pagination.types";

export default function Pagination(props: IPaginationProps) {
  const [start, setStart] = useState(1);

  const lastPage = Math.ceil(props.number?.fetchBoardsCount / 10);
  const isActivePrev = start === 1;
  const isActiveNext = props.number?.fetchBoardsCount - (start - 1) * 10 <= 100;

  const onClickPageMove = (event: MouseEvent<HTMLButtonElement>) => {
    props.setNowPage(Number(event.currentTarget.id));
    props.refetch({
      page: Number(event.currentTarget.id),
    });
  };

  const onClickPrevPage = () => {
    if (start === 1) return;
    setStart((prev) => prev - 10);
    props.setNowPage(start - 10);
    props.refetch({
      page: start - 10,
    });
  };

  const onClickNextPage = () => {
    if (start + 10 <= lastPage) {
      setStart((prev) => prev + 10);
      props.setNowPage(start + 10);
      props.refetch({
        page: start + 10,
      });
    }
  };

  return (
    <PaginationUI
      start={start}
      lastPage={lastPage}
      nowPage={props.nowPage}
      onClickPageMove={onClickPageMove}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      isActivePrev={isActivePrev}
      isActiveNext={isActiveNext}
    ></PaginationUI>
  );
}
