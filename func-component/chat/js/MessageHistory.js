'use strict';

function MessageHistory({list}) {
  const types = {
    'message': Message,
    'response': Response,
    'typing': Typing
  };
  const messages = list.map(message => {
    const Item = types[message.type];
    return (
      <Item key={message.id} from={message.from} message={message} />
    );
  });
  return (
    <ul>
      {messages}
    </ul>
  );
}
