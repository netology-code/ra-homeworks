'use strict';

const ShopItem = props => {
  let { title, caption, img, price } = props;
  return (
    <div className="shop-item">
      <div className="thumb">
        <figure>
          <img src={img} alt={title}/>
        </figure>
      </div>
      <div className="title">
        {title}
      </div>
      <div className="desc">
        {caption}
      </div>
      <div className="price">{price}</div>
      <Button label="Add to cart"/>
    </div>
  );
};
