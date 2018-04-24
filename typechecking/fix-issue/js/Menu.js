'use strict';

const Menu = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">{props.title}{' '}
        <span style={{fontSize:'60%'}}>v{props.version}</span>
      </a>

      <ul className="navbar-nav mr-auto">
        {props.items.map(({name, url}) => (
          <li key={name} className="nav-item">
            <a className="nav-link" href={url}>{name}</a>
          </li>
        ))}
      </ul>
      <form className="form-inline my-2 my-lg-0" onSubmit={props.handleSearch}>
        <input className="form-control mr-sm-2"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Поиск</button>
      </form>
    </nav>
  )
};

Menu.propTypes = {
  handleSearch: PropTypes.func,

  title: PropTypes.string,
  version: (props, propName, componentName) => {
    if (!/^[0-9]{1,2}\.[0-9]{1,2}$/.test(props[propName])) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting something like 'xx.xx'. Validation failed.`);
    }
  },
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })),
};
