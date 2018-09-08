const Menu = (props) => {
  const {items, opened} = props;

  return (
    <div className={'menu ' + (opened ? 'menu-open' : '')}>
      <div className="menu-toggle"><span></span></div>
      {opened ? getNavigation(items) : null}
    </div>
  )
};

function getNavigation(elements) {
  return (
    <nav>
      <ul>
        {elements.map(({title, href}) => <li><a href={href}>{title}</a></li>)}
      </ul>
    </nav>
  );
}