import { useQuery } from "@apollo/client";
import { NextRouter, useRouter } from "next/router";
import _ from "lodash";
import { ChangeEvent, MouseEvent, useState } from "react";
import ReviewListUI from "./Review.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./Review.query";

export default function ReviewList() {
  const router: NextRouter = useRouter();

  const [search, setSearch] = useState("");
  const [nowPage, setNowPage] = useState(1);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const { data: review, refetch } = useQuery(FETCH_BOARDS);
  const { data: number, refetch: countRefetch } = useQuery(FETCH_BOARDS_COUNT);

  const getDebounce = _.debounce((input: string) => {
    refetch({
      search: input,
      page: 1,
      endDate,
      startDate,
    });
    countRefetch({
      search: input,
      endDate,
      startDate,
    });
    setSearch(input);
    setNowPage(1);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const onClickReview = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/review/${event.currentTarget.id}`);
  };

  const onClickWriteButton = () => {
    router.push(`/review/new`);
  };

  const onClickSearch = () => {
    refetch({
      search,
      page: 1,
      endDate,
      startDate,
    });
    countRefetch({
      search,
      endDate,
      startDate,
    });
    setNowPage(1);
  };

  return (
    <ReviewListUI
      refetch={refetch}
      search={search}
      review={review}
      number={number}
      nowPage={nowPage}
      setNowPage={setNowPage}
      onClickReview={onClickReview}
      onClickWriteButton={onClickWriteButton}
      onChangeSearch={onChangeSearch}
      onClickSearch={onClickSearch}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    ></ReviewListUI>
  );
}
