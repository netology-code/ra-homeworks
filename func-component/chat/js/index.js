'use strict';

const messages = [{
  id: 'chat-5-1090',
  from: { name: 'Ольга' },
  type: 'response',
  time: '10:10',
  text: 'Привет, Виктор. Как дела? Как идет работа над проектом?'
}, {
  id: 'chat-5-1091',
  from: { name: 'Виктор' },
  type: 'message',
  time: '10:12',
  text: 'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.'
}, {
  id: 'chat-5-1092',
  from: { name: 'Ольга' },
  type: 'response',
  time: '10:14',
  text: 'Не уверена что сегодня получится. Не все еще в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?'
}, {
  id: 'chat-5-1093',
  from: { name: 'Виктор' },
  type: 'message',
  time: '10:20',
  text: 'Нет, все прошло гладко. Очень хочу показать всё команде.'
}, {
  id: 'chat-5-1094',
  from: { name: 'Виктор' },
  type: 'typing',
  time: '10:31'
}];

const chats = [{
  avatar: './i/chat_avatar_01.jpg',
  name: 'Виктор Иванов',
  isOnline: true
}, {
  avatar: './i/chat_avatar_02.jpg',
  name: 'Адрей Гагарин',
  isOnline: false,
  lastSeen: '7 минут назад'
}, {
  avatar: './i/chat_avatar_03.jpg',
  name: 'Михаил Толмачев',
  isOnline: true
}, {
  avatar: './i/chat_avatar_04.jpg',
  name: 'Настя Ушакова',
  isOnline: true
}, {
  avatar: './i/chat_avatar_05.jpg',
  name: 'Евгения Барышникова',
  isOnline: true
}, {
  avatar: './i/chat_avatar_06.jpg',
  name: 'Тамара Плотникова',
  isOnline: false,
  lastSeen: '30 минут назад'
}, {
  avatar: './i/chat_avatar_07.jpg',
  name: 'Кирилл Аникеев',
  isOnline: false,
  lastSeen: '10 часов назад'
}, {
  avatar: './i/chat_avatar_08.jpg',
  name: 'Марина Пух',
  isOnline: true
}, {
  avatar: './i/chat_avatar_09.jpg',
  name: 'Георгий Усачов',
  isOnline: false,
  lastSeen: '28 марта'
}, {
  avatar: './i/chat_avatar_10.jpg',
  name: 'Наталья Симакова',
  isOnline: false,
  lastSeen: '4 января'
}];

ReactDOM.render(
  <Chat chats={chats} messages={messages} />,
  document.getElementById('root')
);
