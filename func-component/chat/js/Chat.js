'use strict';

function Chat({chats, messages}) {
  const users = chats.map(chat => {
    const status = chat.isOnline ? 'в сети' : `был ${chat.lastSeen}`;
    return (
      <li className="clearfix">
        <img src={chat.avatar} alt="avatar" />
        <div className="about">
          <div className="name">{chat.name}</div>
          <div className="status">
            <i className={`fa fa-circle ${chat.isOnline ? 'online' : 'offline'}`}></i> {status}
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="container clearfix">
      <div className="people-list" id="people-list">
        <div className="search">
          <input type="text" placeholder="search" />
          <i className="fa fa-search"></i>
        </div>
        <ul className="list">
          { users }
        </ul>
      </div>

      <div className="chat">
        <div className="chat-header clearfix">
          <img src="./i/avatar.jpg" alt="Виктор Иванов" />

          <div className="chat-about">
            <div className="chat-with">Чат с Виктором Ивановым</div>
            <div className="chat-num-messages">1&nbsp;903 сообщений</div>
          </div>
          <i className="fa fa-star"></i>
        </div>

        <div className="chat-history">
          <MessageHistory list={messages} />
        </div>

        <div className="chat-message clearfix">
          <textarea name="message-to-send" id="message-to-send" placeholder ="Введите текст сообщения" rows="3"></textarea>

          <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
          <i className="fa fa-file-image-o"></i>

          <button>Отправить</button>

        </div>

      </div>

    </div>
  );
}
