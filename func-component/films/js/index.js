const films = [{
  id: 'film-01',
  poster: './i/superman.jpg',
  title: 'Супермен',
  stars: 4,
  price: 1299,
  type: 'Экшн',
  color: 'orange',
  isFavorite: true
}, {
  id: 'film-02',
  poster: './i/lone-runner.jpg',
  title: 'Одинокий странник',
  stars: 3,
  price: 899,
  type: 'Вестерн',
  color: 'brown',
  isFavorite: false
}, {
  id: 'film-03',
  poster: './i/batman.jpg',
  title: 'Бэтмэн',
  stars: 5,
  price: 1499,
  type: 'Экшн',
  color: 'orange',
  isFavorite: false
}];

ReactDOM.render(
  <Films list={films} />,
  document.getElementById('root')
);
