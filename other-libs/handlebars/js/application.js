var template = $('#handlebars-app').html();

var templateScript = Handlebars.compile(template);

var nowDate = new Date();

var context = {
  title: 'handle me inc.',
  today: nowDate.getDate() + '.' + (nowDate.getMonth() + 1) + '.' + nowDate.getFullYear(),
  quote: 'Роботы были спроектированы компьютерами — мы уже не знаем как они работают',

  articles,
};

var html = templateScript(context);
$(document.body).append(html);
