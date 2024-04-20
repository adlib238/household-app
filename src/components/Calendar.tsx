import FullCalendar from "@fullcalendar/react";
import React from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import jaLocale from "@fullcalendar/core/locales/ja";
import { DatesSetArg, EventContentArg } from "@fullcalendar/core";
import "../calendar.css";
import { Balance, CalendarContent, Transaction } from "../types";
import { calculateDailyBalances } from "../utils/financeCalculations";
import { formatCurrency } from "../utils/formatting";
// import interactionPlugin from "@fullcalendar/interaction";
import { DateClickArg } from "@fullcalendar/interaction";
import { useTheme } from "@mui/material";
import { isSameMonth } from "date-fns";

interface CalendarProps {
  monthlyTransactions: Transaction[];
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
}

const Calendar = ({ monthlyTransactions, setCurrentMonth }: CalendarProps) => {
  // 1.各日付の収支を計算する関数（呼び出し）🎃
  const dailyBalances = calculateDailyBalances(monthlyTransactions);
  console.log(dailyBalances);

  // // ***2.FullCalendar用のイベントを生成する関数📅
  const createCalendarEvents = (
    dailyBalances: Record<string, Balance>
  ): CalendarContent[] => {
    return Object.keys(dailyBalances).map((date) => {
      const { income, expense, balance } = dailyBalances[date];
      return {
        start: date,
        income: formatCurrency(income),
        expense: formatCurrency(expense),
        balance: formatCurrency(balance),
      };
    });
  };

  const calendarEvents = createCalendarEvents(dailyBalances);

  //カレンダーイベントの見た目を作る関数
  const renderEventContent = (eventInfo: EventContentArg) => {
    return (
      <div>
        <div className="money" id="event-income">
          {eventInfo.event.extendedProps.income}
        </div>

        <div className="money" id="event-expense">
          {eventInfo.event.extendedProps.expense}
        </div>

        <div className="money" id="event-balance">
          {eventInfo.event.extendedProps.balance}
        </div>
      </div>
    );
  };

  //月の日付取得
  const handleDateSet = (datesetInfo: DatesSetArg) => {
    const currentMonth = datesetInfo.view.currentStart;
    setCurrentMonth(currentMonth);
  };

  return (
    <FullCalendar
      locale={jaLocale}
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={calendarEvents}
      eventContent={renderEventContent}
      datesSet={handleDateSet}
    />
  );
};

export default Calendar;
