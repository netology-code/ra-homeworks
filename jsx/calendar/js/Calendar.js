const Calendar = (props) => {
  const {date} = props;
  const dayString = capitalizeString(date.toLocaleString('ru-ru', {weekday: 'long'}));
  const decliningMonth = date.toLocaleString('ru', {month: 'long', day: 'numeric'}).split(' ')[1];
  const month = capitalizeString(date.toLocaleString('ru', {month: 'long'}));
  const year = date.getFullYear();
  const prevMonth = getPreviousMonth(date);
  const nextMonth = getNextMonth(date);
  const prevMonthDays = getPreviousDays(date.getDay(), prevMonth);
  const currentMonthDays = getCurrentDays(date);
  const nextMonthDays = getNextDays(date.getDay(), nextMonth);
  const dayList = [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{dayString}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
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
          {getRows(dayList)}
        </tbody>
      </table>
    </div>
  )
};

function getPreviousMonth(currentDate) {
  /*new Date принимает currentDate.getFullYear() и currentDate.getMonth(), а не currentDate.getTime().
  Причина данной реализациии состоит в том, что если текущая дата 31.12.2018, то newDate.getMonth() вернет не предыдущий
  месяц, а 1.12.2018
  */
  const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth());

  newDate.setMonth(newDate.getMonth() - 1);
  return newDate;

}

function getNextMonth(currentDate) {
  const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth());

  newDate.setMonth(newDate.getMonth() + 1);
  return newDate;
}

function getPreviousDays(weekDay, month) {
  const counter = weekDay === 0 ? 6 : weekDay - 1;
  const lastDayOfMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0);
  const day = lastDayOfMonth.getDate();
  const result = collectPrevDays(counter, day);

  return result.reverse();
}

function getCurrentDays(date) {
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const lastDay = lastDayOfMonth.getDate();

  return collectNextDays(lastDay);
}

function getNextDays(weekDay, month) {
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

function getRows(days, rows = []) {
  if (days.length < 1) return rows;

  const array = [...days];
  const splicedList = array.splice(7);
  const row = <tr>{array.map(day => <td>{day}</td>)}</tr>;

  rows.push(row);

  return getRows(splicedList, rows);
}


{/*<tr>*/}
{/*<td className="ui-datepicker-other-month">27</td>*/}
{/*<td className="ui-datepicker-other-month">28</td>*/}
{/*<td>1</td>*/}
{/*<td>2</td>*/}
{/*<td>3</td>*/}
{/*<td>4</td>*/}
{/*<td>5</td>*/}
{/*</tr>*/}
{/*<tr>*/}
{/*<td>6</td>*/}
{/*<td>7</td>*/}
{/*<td className="ui-datepicker-today">8</td>*/}
{/*<td>9</td>*/}
{/*<td>10</td>*/}
{/*<td>11</td>*/}
{/*<td>12</td>*/}
{/*</tr>*/}