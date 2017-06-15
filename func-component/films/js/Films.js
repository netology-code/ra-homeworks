'use strict';

function Films({list}) {
  const films = list.map(film => <Film key={film.id} info={film} />);
  return (
    <div className="container">
      {films}
    </div>
  );
}
