import { useQuery } from "@apollo/client";
import { NextRouter, useRouter } from "next/router";
import { useState, ChangeEvent, useEffect } from "react";
import ItemListUI from "./ItemList.presenter";
import { FETCH_USEDITEMS } from "./ItemList.queries";
import _ from "lodash";
import { IData } from "./ItemList.types";

export default function ItemList() {
  const router: NextRouter = useRouter();
  const [isSoldout, setIsSoldout] = useState(false);
  const [today, setToday] = useState([]);

  const { data, refetch, loading, fetchMore } = useQuery(FETCH_USEDITEMS, {
    variables: {
      isSoldout,
      search: "",
      page: 1,
    },
  });

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const getDebounce = _.debounce((input: string) => {
    refetch({
      search: input,
      page: 1,
    });
  }, 500);

  // 오늘 본 상품 만들기
  const onClickItem = (el: IData) => () => {
    const day = new Date();

    const yyyy = String(day.getFullYear());
    const mm = String(day.getMonth() + 1).padStart(2, "0");
    const dd = String(day.getDate()).padStart(2, "0");

    // el에 날짜 추가
    el = { ...el, day: `${yyyy}-${mm}-${dd}` };
    // 1. 기존 투데이
    const todayItem = JSON.parse(sessionStorage.getItem("today") || "[]");

    // 2. 이미 담겨있는지 확인하기 있으면 이미 있는 친구는 삭제
    const temp = todayItem.filter((item: IData) => item._id !== el._id);

    // // 3. today에 추가
    const { __typename, ...El } = el;
    temp.unshift(El);

    // temp 길이 5로 유지
    if (temp.length > 5) {
      temp.pop();
    }

    setToday(temp);
    sessionStorage.setItem("today", JSON.stringify(temp));

    router.push(`/markets/${el._id}`);
  };

  // 글 작성 버튼 클릭 이벤트
  const onClickWriteButton = () => {
    router.push(`/markets/new`);
  };

  // 검색 버튼 클릭 이벤트
  const onClickSearch = () => {
    refetch();
  };

  const loadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickSellingSoldout = (el: boolean) => () => {
    setIsSoldout(el);
  };

  useEffect(() => {
    setToday(JSON.parse(sessionStorage.getItem("today") || "[]"));
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <ItemListUI
          onChangeSearch={onChangeSearch}
          today={today}
          data={data}
          loadFunc={loadFunc}
          onClickSearch={onClickSearch}
          onClickItem={onClickItem}
          onClickWriteButton={onClickWriteButton}
          onClickSellingSoldout={onClickSellingSoldout}
        ></ItemListUI>
      )}
    </>
  );
}
