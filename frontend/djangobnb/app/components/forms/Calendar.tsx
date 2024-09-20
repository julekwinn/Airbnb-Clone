"use client";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { on } from "events";

interface DatePickerProps {
  value: Range;
  onChange: (range: Range) => void;
  bookedDates?: Date[];
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  bookedDates,
}) => {
  return (
    <>
      <DateRange
        className="w-full border border-gray-400 rounded-xl mb-4"
        rangeColors={["#262626"]}
        ranges={[value]}
        date={new Date()}
        onChange={onChange}
        direction="vertical"
        showDateDisplay={false}
        minDate={new Date()}
        disabledDates={bookedDates}
      ></DateRange>
    </>
  );
};

export default DatePicker;
