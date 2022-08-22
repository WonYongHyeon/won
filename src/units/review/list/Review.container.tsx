import { useQuery } from "@apollo/client";
import { NextRouter, useRouter } from "next/router";
import type { DatePickerProps } from "antd";
import _ from "lodash";
import { ChangeEvent, MouseEvent, useState } from "react";
import ReviewListUI from "./Review.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./Review.query";

export default function ReviewList() {
  const router: NextRouter = useRouter();

  const [search, setSearch] = useState("");
  const [nowPage, setNowPage] = useState(1);

  const [startDate, setStartDate] = useState(
    new Date(2000, 2, 1).toISOString()
  );
  const [endDate, setEndDate] = useState(new Date().toISOString());

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

  const onChangeStartDate: DatePickerProps["onChange"] = (date, dateString) => {
    if (date === null) {
      const date = new Date(2000, 2, 1);
      setStartDate(date.toISOString());
    } else {
      const date = new Date(dateString + "T00:00:00");
      setStartDate(date.toISOString());
    }
  };

  const onChangeEndDate: DatePickerProps["onChange"] = (date, dateString) => {
    if (date === null) {
      const date = new Date();
      setEndDate(date.toISOString());
    } else {
      const date = new Date(dateString + "T23:59:59");
      setEndDate(date.toISOString());
    }
  };

  const onClickSearch = () => {
    getDebounce(search);
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
      onChangeStartDate={onChangeStartDate}
      onChangeEndDate={onChangeEndDate}
      onChangeSearch={onChangeSearch}
      onClickSearch={onClickSearch}
    ></ReviewListUI>
  );
}
