const items = [
  { title: 'Главная страница', href: '#home' },
  { title: 'О компании', href: '#about' },
  { title: 'Контакты', href: '#contact' }
];

const app = (
  <div>
    <Menu items={items} opened />
    <Menu items={items} />
  </div>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);
