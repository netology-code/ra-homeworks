const Catalog = ({ addProduct, checkInCart }) => (
  <main className="container">
    <div className="row">
      {products.map((product, i) => 
        <section className="col-lg-3 col-md-6 col-sm-12" key={i}>
          <div className="product">
            <h2>{product.title}</h2>
            <p>{product.price} руб.</p>

            {checkInCart(product)
              ? <button onClick={() => addProduct(product)} className="product__add">В корзину</button>
              : <button className="product__add">Добавлено</button>
            }
          </div>
        </section>
      )}
    </div>
  </main>
);

const products = [
  { title: 'Стартап-гайд', price: 900 },
  { title: 'О чем мечтать', price: 800 },
  { title: 'Playbook', price: 700 },
  { title: 'Теория поля', price: 300 },
  { title: 'Джедайские техники', price: 700 },
  { title: 'Физические головоломки', price: 200 },
  { title: 'Задачи по общей физике', price: 120 },
  { title: 'Я и Мы', price: 215 },
  { title: 'СССР-Германия', price: 112 },
  { title: 'Занимательная физика', price: 270 },
]