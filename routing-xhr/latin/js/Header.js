const HeaderComponent = ({ match }) => (
  <nav className="navbar navbar-light bg-light">
    {match && match.params.id
      ? <p className="navbar-brand">Уникальный идентификатор статьи: { match.params.id}</p>
      : <p className="navbar-brand">Статья не выбрана</p> 
    }
  </nav>
);

const Header = withRouter(HeaderComponent);
