const Article = props => (
  <div className="card">
    <img className="card-img-top" src={`https://picsum.photos/260/180/?image=${random(1, 50)}`} alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={`/routing-xhr/magazine/article?id=${props.id}`} className="btn btn-primary">Подробнее</a>
      </div>
  </div>
)

const random = (lower = 0, upper = 1) =>
  lower + Math.floor(Math.random() * (upper - lower + 1))