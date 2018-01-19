function getTd(someDate, needDate) {
	let needClass = "";
	if (needDate.getMonth() !== someDate.getMonth()) {
		needClass = "ui-datepicker-other-month";
	} else if (needDate.getDate() === someDate.getDate()) {
		needClass = "ui-datepicker-today";
	}

	if (needClass !== "") {
		return (
			<td className={needClass}>{someDate.getDate()}</td>
		);		
	}

	return (
		<td>{someDate.getDate()}</td>
	);			
}

/* Метод возвращает массив из 7 нарастающих дат, начиная со startDate */
function getWeekDates(startDate) {
    const dateArray = [];
    let currentDate = new Date(startDate.getTime());
    for (let i = 0; i < 7; i++) {
        dateArray.push(new Date(currentDate.getTime()));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateArray;
}

function getAllTd(startDate, needDate) {
	return getWeekDates(startDate).map((elem) => getTd(elem, needDate));
}

function getTr(startDate, needDate) {
	return (
		<tr>{getAllTd(startDate, needDate)}</tr>
	);
}


function getAllTr(needDate) {
	let startDate = new Date(needDate.getTime());
	startDate.setDate(1);
	startDate.setDate(startDate.getDate() - startDate.getDay() + 1); /* Встаем на понедельник возможно предыдущего месяца */

	const arr = [];
	do {
		arr.push(getTr(startDate, needDate));
		startDate.setDate(startDate.getDate() + 7);
	} while (startDate.getMonth() === needDate.getMonth());

	return arr;
}

function Calendar({date}) {
	const months1 = [
			'Январь', 
			'Февраль', 
			'Март', 
			'Апрель', 
			'Май', 
			'Июнь', 
			'Июль', 
			'Август', 
			'Сентябрь', 
			'Октябрь', 
			'Ноябрь', 
			'Декабрь'
		],
		months2 = [
			'Января', 
			'Февраля', 
			'Марта', 
			'Апреля', 
			'Мая', 
			'Июня', 
			'Июля', 
			'Августа', 
			'Сентября', 
			'Октября', 
			'Ноября', 
			'Декабря'
		],
		weekdays = [
			'Воскресенье',
			'Понедельник',
			'Вторник',
			'Среда',
			'Четверг',
			'Пятница',
			'Суббота'
		];

	return (
		<div className="ui-datepicker">
		  <div className="ui-datepicker-material-header">
		    <div className="ui-datepicker-material-day">{weekdays[date.getDay()]}</div>
		    <div className="ui-datepicker-material-date">
		      <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
		      <div className="ui-datepicker-material-month">{months2[date.getMonth()]}</div>
		      <div className="ui-datepicker-material-year">{date.getFullYear}</div>
		    </div>
		  </div>
		  <div className="ui-datepicker-header">
		    <div className="ui-datepicker-title">
		      <span className="ui-datepicker-month">{months1[date.getMonth()]}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear}</span>
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
		      {getAllTr(date)}
		    </tbody>
		  </table>
		</div>
	);
}