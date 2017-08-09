'use strict';

const Item = ({color, item}) => (
  <figure className={`snip1171 ${color}`}>
    <img src={item.pic} alt={item.title} />
    <div className="price">${item.price.toFixed(2)}</div>
    <figcaption>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <a href="#">Add to Cart</a>
    </figcaption>
  </figure>
);
