const Homepage = () => (
  <div className="container mt-5">
    <div className="row">
      {ids.map(id =>
        <div className="col-sm-3 p-2" key={id}>
          <div className="card">
            <img class="card-img-top" src={`https://picsum.photos/200/300?image=${id}`} />
            <div className="card-body">
              <h5 className="card-title">Рассказ №{id}</h5>
              <Link className="btn btn-primary" to={`/article/${id}`}>Открыть</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);

const ids = [1, 2, 3, 4, 5, 6, 7, 8]