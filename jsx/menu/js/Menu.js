'use strict';

function Menu(props) {
  const { items, opened = false } = props;
  console.log(opened)
  if (opened) {
    return (
      <div className="menu menu-open">
        <div className="menu-toggle"><span></span></div>
        <nav>
          <ul>
            {items.map(item => <li><a href={item.href}>{item.title}</a></li>)}
          </ul>
        </nav>
      </div>
    )
  }

  return (
    <div className="menu">
      <div className="menu-toggle"><span></span></div>
    </div>
  )
};
