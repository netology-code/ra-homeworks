'use strict';

function ShopItem(props) {
  let {brand, title, description, descriptionFull, price, currency} = props.item;

  return (
    <div className="main-content">
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className="description">{descriptionFull}</div>
      <div className="highlight-window  mobile">
        <div className="highlight-overlay"></div>
      </div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">
          {/*
            Честно говоря, я не знаю как правильно указывать знак валюты, до/после)
            Думаю вы это хотели увидеть.
          */}
          {currency === `£` || currency === `$` ? currency + price.toFixed(2) : price.toFixed(2) + currency}
        </div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
};
