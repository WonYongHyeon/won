import styled from "@emotion/styled";
import { ko } from "date-fns/locale";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DateSpace = styled.div`
  width: 320px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  margin: 0px 30px;
`;

interface IProps {
  setStartDate: Dispatch<SetStateAction<Date | null>>;
  setEndDate: Dispatch<SetStateAction<Date | null>>;
}

export default function DatePicker(props: IProps) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  useEffect(() => {
    props.setStartDate(startDate);
  }, [startDate]);

  useEffect(() => {
    props.setEndDate(endDate);
  }, [endDate]);

  return (
    <DateSpace>
      <ReactDatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        locale={ko} // 한글로 변경
        dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
        maxDate={new Date()}
      ></ReactDatePicker>
      <span> ~ </span>
      <ReactDatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        locale={ko} // 한글로 변경
        dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
        minDate={startDate}
        maxDate={new Date()}
      ></ReactDatePicker>
    </DateSpace>
  );
}
