'use strict';

function Menu(props) {
  const { items, opened } = props;
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


}

const items = [
  { title: 'Главная страница', href: '#home' },
  { title: 'О компании', href: '#about' },
  { title: 'Контакты', href: '#contact' }
];

const app = (
  <div>
    <Menu items={items} opened={false} />
  </div>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);
