const Calendar = (props) => {
  const {date} = props;
  const currentYear = date.getFullYear();
  const currentDay = date.getDate();
  const prevMonth = getPreviousMonth(date);
  const prevMonthDaysList = getPreviousMonthDays(date, prevMonth);
  const currentMonthDaysList = getCurrentMonthDays(date);
  const nextMonthDaysList = getNextMonthDays(date);
  const dayList = [...prevMonthDaysList, ...currentMonthDaysList, ...nextMonthDaysList];

  // text strings
  const dayString = capitalizeString(date.toLocaleString('ru-ru', {weekday: 'long'}));
  const decliningMonth = date.toLocaleString('ru', {month: 'long', day: 'numeric'}).split(' ')[1];
  const month = capitalizeString(date.toLocaleString('ru', {month: 'long'}));

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{dayString}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{currentDay}</div>
          <div className="ui-datepicker-material-month">{decliningMonth}</div>
          <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{month}</span>&nbsp;<span
          className="ui-datepicker-year">{currentYear}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col/>
          <col/>
          <col/>
          <col/>
          <col/>
          <col className="ui-datepicker-week-end"/>
          <col className="ui-datepicker-week-end"/>
        </colgroup>
        <thead>
        <tr>
          <th scope="col" title="Понедельник">Пн</th>
          <th scope="col" title="Вторник">Вт</th>
          <th scope="col" title="Среда">Ср</th>
          <th scope="col" title="Четверг">Чт</th>
          <th scope="col" title="Пятница">Пт</th>
          <th scope="col" title="Суббота">Сб</th>
          <th scope="col" title="Воскресенье">Вс</th>
        </tr>
        </thead>
        <tbody>
        {getRows(dayList, currentDay)}
        </tbody>
      </table>
    </div>
  )
};

function getPreviousMonth(currentDate) {
  const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth());
  newDate.setMonth(newDate.getMonth() - 1);

  return newDate;
}

function getPreviousMonthDays(date, prevMonth) {
  const firstDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const weekDay = firstDayOfCurrentMonth.getDay();
  const counter = weekDay === 0 ? 6 : weekDay - 1;
  const lastDayOfPrevMonth = new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 0);
  const preparedLastDay = lastDayOfPrevMonth.getDate();

  return collectReverseDays(counter, preparedLastDay);
}

function getCurrentMonthDays(date) {
  const lastDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const lastDay = lastDayOfCurrentMonth.getDate();

  return collectDays(lastDay);
}

function getNextMonthDays(date) {
  const lastDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const weekDay = lastDayOfCurrentMonth.getDay();
  const counter = weekDay === 0 ? weekDay : 7 - weekDay;

  return collectDays(counter);
}

function collectReverseDays(counter, prevDay, list = []) {
  if (counter > 0) {
    list.push(prevDay);
    return collectReverseDays(counter - 1, prevDay - 1, list);
  }

  return list.reverse();
}

function collectDays(counter, prevDay = 1, list = []) {
  if (counter > 0) {
    list.push(prevDay);
    return collectDays(counter - 1, prevDay + 1, list);
  }

  return list;
}

function capitalizeString(string) {
  const newString = new String(string);

  return newString[0].toUpperCase() + newString.slice(1);
}

function getRows(days, currentDay, rows = [], isFirstRow = true) {
  if (days.length > 0) {
    const daysList = [...days];
    const splicedDaysList = daysList.splice(7);
    rows.push(<Row days={daysList} currentDay={currentDay} isFirstRow={isFirstRow}/>);

    return getRows(splicedDaysList, currentDay, rows, false);
  }

  return rows;
}

function Row(props) {
  const {days, isFirstRow, currentDay} = props;
  const firstDay = days[0];

  return (
    <tr>
      {days.map(day => {
        let cellClass;

        if (isFirstRow && day > 7 || !isFirstRow && day < firstDay) {
          cellClass = 'ui-datepicker-other-month';
        } else if (day === currentDay) {
          cellClass = 'ui-datepicker-today';
        }

        return <td className={cellClass}>{day}</td>;
      })}
    </tr>
  )
}