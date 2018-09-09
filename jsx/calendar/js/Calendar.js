const Calendar = (props) => {
  const {date} = props;
  const dayString = capitalizeString(date.toLocaleString('ru-ru', {weekday: 'long'}));
  const decliningMonth = date.toLocaleString('ru', {month: 'long', day: 'numeric'}).split(' ')[1];
  const month = capitalizeString(date.toLocaleString('ru', {month: 'long'}));
  const year = date.getFullYear();
  const currentDay = date.getDate();
  const prevMonth = getPreviousMonth(date);
  const nextMonth = getNextMonth(date);
  const prevMonthDays = getPreviousDays(date, prevMonth);
  const currentMonthDays = getCurrentDays(date);
  const nextMonthDays = getNextDays(date, nextMonth);
  const dayList = [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];

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
          <span className="ui-datepicker-month">{month}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
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

function getNextMonth(currentDate) {
  const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth());

  newDate.setMonth(newDate.getMonth() + 1);
  return newDate;
}

function getPreviousDays(date, prevMonth) {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const weekDay = firstDayOfMonth.getDay();
  const counter = weekDay === 0 ? 6 : weekDay - 1;

  const lastPrevMonthDay = new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 0);
  const day = lastPrevMonthDay.getDate();
  const result = collectPrevDays(counter, day);

  return result.reverse();
}

function getCurrentDays(date) {
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const lastDay = lastDayOfMonth.getDate();

  return collectNextDays(lastDay);
}

function getNextDays(date) {
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const weekDay = lastDayOfMonth.getDay();
  const counter = weekDay === 0 ? weekDay : 7 - weekDay;

  const result = collectNextDays(counter);
  return result;
}

function collectPrevDays(i, prevDay, list = []) {
  if (i === 0) return list;

  const day = list.length < 1 ? prevDay : prevDay - 1;
  list.push(day);

  return collectPrevDays(i - 1, day, list);
}

function collectNextDays(i, prevDay = 1, list = []) {
  if (i === 0) return list;

  const day = list.length < 1 ? prevDay : prevDay + 1;
  list.push(day);

  return collectNextDays(i - 1, day, list);
}

function capitalizeString(string) {
  const newString = new String(string);
  return newString[0].toUpperCase() + newString.slice(1);
}

function getRows(days, currentDay, rows = [], isFirstRow = true) {
  if (days.length < 1) return rows;

  const daysList = [...days];
  const splicedList = daysList.splice(7);
  const row = <Row days={daysList} currentDay={currentDay} isFirstRow={isFirstRow} />;

  rows.push(row);

  return getRows(splicedList, currentDay, rows, false);
}

function Row(props) {
  const {days, isFirstRow, currentDay} = props;
  const firstDay = days[0];

  return (
    <tr>
      {days.map(day => {
        let cell;

        if (isFirstRow && day > 7 || !isFirstRow && day < firstDay) {
          cell = <td className="ui-datepicker-other-month">{day}</td>;
        } else if (day === currentDay) {
          cell = <td className="ui-datepicker-today">{day}</td>;
        } else {
          cell = <td>{day}</td>;
        }

        return cell;
      })}
    </tr>
  )
}