'use strict';

const ListView = props => {
  const {items} = props;

  const renderItems = (items) => {
    return items.map((item, i) => {
      return (
        <li className="list-item" key={`li-${i}`}>
          {item}
        </li>
      );
    });
  };

  return (
    <ul className="list">
      {renderItems(items)}
    </ul>
  );
};
