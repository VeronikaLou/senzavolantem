/* eslint-disable prettier/prettier */
import { H2 } from './typography';
import { cs } from 'date-fns/locale';
import React, { useState } from 'react';
import { DateRange, Range } from 'react-date-range';
import colors from 'tailwindcss/colors';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './calendar.module.css';

interface CalendarProps {
  handleChange: (range: Range) => void;
}

export const Calendar = ({ handleChange }: CalendarProps) => {
  const [reservedDates, setReservedDates] = useState<Date[]>([]);
  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: undefined,
      endDate: new Date(''),
      key: 'selection',
    },
  ]);

  // const loadAvailability = async (date: Date) => {
  //   const today = new Date();
  //   const from = getFirstDayOfMonthDate(date);
  //   const to = getLastDayOfMonthDate(date);

  //   const res = await reservations.readByQuery({
  //     filter: {
  //       from: {
  //         _between: [new Date(today) > new Date(from) ? today : from, to],
  //       },
  //     },
  //   });

  //   const dates: Date[] = [];
  //   res?.data?.forEach(({ from, to }) => {
  //     let currentDate: Date = new Date(from);
  //     while (currentDate <= new Date(to)) {
  //       dates.push(new Date(currentDate));
  //       currentDate = addDays(currentDate, 1);
  //     }
  //   });

  //   setReservedDates(dates);
  // };

  // useEffect(() => {
  //   loadAvailability(new Date());
  // }, []);

  return (
    <div className='w-[70%]'>
      <H2>Termín</H2>
      <DateRange
        locale={cs}
        ranges={dateRange}
        minDate={new Date()}
        months={2}
        // className='w-full'
        disabledDates={reservedDates}
        // onShownDateChange={async (props) => {
        //   loadAvailability(props);
        // }}
        direction='horizontal'
        onChange={(item) => {
          handleChange(item.selection);
          setDateRange([item.selection]);
        }}
        startDatePlaceholder='Půjčení'
        endDatePlaceholder='Vrácení'
        showMonthAndYearPickers={false}
        rangeColors={[colors.sky[800]]}
      />
    </div>
  );
};
