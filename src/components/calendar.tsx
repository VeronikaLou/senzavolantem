import { addDays } from 'date-fns';
import { cs } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { DateRange, Range } from 'react-date-range';
import { reservations } from 'src/lib/directus';
import { getFirstDayOfMonthDate, getLastDayOfMonthDate } from 'src/utils/date';

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

  const loadAvailability = async (date: Date) => {
    const today = new Date();
    const from = getFirstDayOfMonthDate(date);
    const to = getLastDayOfMonthDate(date);

    const res = await reservations.readByQuery({
      filter: {
        from: {
          _between: [new Date(today) > new Date(from) ? today : from, to],
        },
      },
    });

    const dates: Date[] = [];
    res?.data?.forEach(({ from, to }) => {
      let currentDate: Date = new Date(from);
      while (currentDate <= new Date(to)) {
        dates.push(new Date(currentDate));
        currentDate = addDays(currentDate, 1);
      }
    });

    setReservedDates(dates);
  };

  useEffect(() => {
    loadAvailability(new Date());
  }, []);

  return (
    <DateRange
      locale={cs}
      ranges={dateRange}
      minDate={new Date()}
      disabledDates={reservedDates}
      onShownDateChange={async (props) => {
        loadAvailability(props);
      }}
      onChange={(item) => {
        handleChange(item.selection);
        setDateRange([item.selection]);
      }}
    />
  );
};
