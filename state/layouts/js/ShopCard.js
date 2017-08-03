'use strict';

const ShopCard = props => {
  const { title, caption, img, price } = props;

  return (
    <div className="shop-card">
      <div className="title">
        {title}
      </div>
      <div className="desc">
        {caption}
      </div>
      <div className="slider">
        <figure>
            <img src={img} alt={title}/>
        </figure>
      </div>

      <div className="cta">
        <div className="price">{price}</div>
        <Button label="Add to cart"/>
      </div>
    </div>
  );
};
