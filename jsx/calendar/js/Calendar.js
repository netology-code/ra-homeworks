'use strict';

// ф-я вернёт посицию дня недели в строке

function numberDay(day) {
  switch(day) {
    case 'пн' : return 0;
    case 'вт' : return 1;
    case 'ср' : return 2;
    case 'чт' : return 3;
    case 'пт' : return 4;
    case 'сб' : return 5;
    case 'вс' : return 6;
    default   : return undefined;
  }
}

// ф-я изменит первую буку строки на заглавную

function capitalLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// ф-я вернёт количество дней в месяце

function getDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);

  return date.getDate();
}

// ф-я изменит падежь месяца на родительный

function nameMonth(month) {
  switch(month) {
    case 'январь'   : return 'января';
    case 'феврарь'  : return 'февраля';
    case 'март'     : return 'марта';
    case 'апрель'   : return 'апреля';
    case 'май'      : return 'мая';
    case 'июнь'     : return 'июня';
    case 'июль'     : return 'июля';
    case 'август'   : return 'августа';
    case 'сентябрь' : return 'сентября';
    case 'октябрь'  : return 'октября';
    case 'нояборь'  : return 'ноября';
    case 'декабрь'  : return 'декабря';
    default         : return undefined;
  }
}

function classValue(props, day) {
  return typeof day === 'string'      ?  'ui-datepicker-other-month ' : '' ||
         Number(props.dayNow) === day ? ' ui-datepicker-today '       : '';
}

function Tr(props) {
  return (
    <tr>
      {props.arr.map(day => <td className={classValue(props, day)}>{day}</td>)}
    </tr>
  )
}

function Colgroup() {
  return (
        <colgroup>
          {Array(5).fill().map(day => <col />)}
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
  )
}

function Calendar(props) {
  // Gleb:
  // не совсем понятно где тут использовать деструктуризацию
  // мы ведь передаём один объект содержащий дату

  let weekDay = props.date.toLocaleString('ru', {weekday: 'long'});
  let numDay  = props.date.toLocaleString('ru', {day: 'numeric'});
  let month   = props.date.toLocaleString('ru', {month: 'long'});
  let year    = props.date.toLocaleString('ru', {year: 'numeric'});

  let thisYear  = props.date.getFullYear();
  let thisMonth = props.date.getMonth();
  let firstDay  = 1;

  let beforeThisMonth = thisMonth - 1;
  let afterThisMonth  = thisMonth + 1;

  let firstDayMonth = new Date(thisYear, thisMonth, firstDay).toLocaleString('ru', {weekday: 'short'});

  let numberInArray = numberDay(firstDayMonth);
  let arrNumber = [];
  let arrNumberDay = [];
  let dayInMonth = getDayOfMonth(thisYear, thisMonth);
  let lastDayMonth  = new Date(thisYear, afterThisMonth, 0).toLocaleString('ru', {weekday: 'short'});;

  for (let i = 0; i < dayInMonth; i++) {
    arrNumber[numberInArray + i] = 1 + i;
  }

  for (let i = 0, j = 0; i < Math.ceil(arrNumber.length); i = i + 7, j++) {
    arrNumberDay[j] = arrNumber.slice(i, i + 7);
  }

  // проверка на последний день месяца

  if (lastDayMonth === 'вс') {
    let lastWeek = ['1', '2', '3', '4', '5', '6', '7'];

    arrNumberDay.push(lastWeek);
  }

  // добавление дней прошлого месяца

  let dayInAfterMonth = new Date(thisYear, thisMonth, 0).getDate();
  let countDay = numberInArray;

  if (numberInArray) {
    for (let i = 0; i < numberInArray; i++) {
      arrNumberDay[0][i] = dayInAfterMonth - countDay + '';
      countDay--;
    }
  }

  let lengthLastWeekInArray = arrNumberDay[arrNumberDay.length - 1].length;

  if (lengthLastWeekInArray !== 7) {
    let count = 0;
    for (let i = 0; i < 7 - lengthLastWeekInArray; i++) {
      count++;
      arrNumberDay[arrNumberDay.length - 1][lengthLastWeekInArray + i] = count + '';
    }
  }

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{capitalLetter(weekDay)}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{numDay}</div>
          <div className="ui-datepicker-material-month">{nameMonth(month)}</div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{capitalLetter(month)}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <Colgroup />
        {/*
          Gleb:
          Есть ли смысл выносить элемент thead в отдельный компонент?
          Придётся создавать отдельный массив в названиями дней для генерации
          элементов в цикле.
        */}
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
          {arrNumberDay.map(week => <Tr arr={week} dayNow={numDay} />)}
        </tbody>
      </table>
    </div>
  )
}
