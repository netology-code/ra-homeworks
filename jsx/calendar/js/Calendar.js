'use strict';

function Tr(props) {
  console.log(props.arr[0])

  return (
    <tr>
    </tr>
  )
}

function Calendar(props) {
  let weekDay = props.date.toLocaleString('ru', {weekday: 'long'});   // str
  let numDay  = props.date.toLocaleString('ru', {day: 'numeric'});    // number
  let month   = props.date.toLocaleString('ru', {month: 'long'});     // str
  let year    = props.date.toLocaleString('ru', {year: 'numeric'});   // number

  let thisYear  = props.date.getFullYear();  // number
  let thisMonth = props.date.getMonth();     // number
  let firstDay  = 1;

  let beforeThisMonth = thisMonth - 1;
  let afterThisMonth  = thisMonth + 1;

  let firstDayMonth = new Date(thisYear, thisMonth, firstDay).toLocaleString('ru', {weekday: 'short'}); // str

  function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }

  function numberDay(day) {
    switch(day) {
      case 'пн' : return 0;
      case 'вт' : return 1;
      case 'ср' : return 2;
      case 'чт' : return 3;
      case 'пт' : return 4;
      case 'сб' : return 5;
      case 'вс' : return 6;
      default : return undefined;
    }
  }

  let numberInArray = numberDay(firstDayMonth);
  let arr = [];
  let newArr = [];
  let dayInMonth = getLastDayOfMonth(thisYear, thisMonth); // number

  for (let i = 0; i < dayInMonth; i++) {
    arr[numberInArray + i] = 1 + i;
  }

  for (let i = 0, j = 0; i < Math.ceil(arr.length); i = i + 7, j++) {
    // newArr.push(arr.slice(i, i + 7))
    newArr[j] = arr.slice(i, i + 7)
  }

  console.log()

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{weekDay}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{numDay}</div>
          <div className="ui-datepicker-material-month">{month}</div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{month}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
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
          <Tr arr={newArr} />


        </tbody>
      </table>
    </div>
  )
}
