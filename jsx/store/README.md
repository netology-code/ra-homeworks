Страница интернет-магазина
===

Необходимо создать React-компонент `ShopItem`, с помощью которого мы могли бы реализовывать представление информации о товарах из нашего каталога на сайте в таком виде (компонент обведён пунктирной линией):
![Внешний вид страницы после реализации компонента](./res/preview.png)

## Пример использования
```jsx
const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

ReactDOM.render(
  <ShopItem item={item} />,
  document.getElementById('root')
);
```

## Описание компонента

Компонент должен иметь один атрибут `item`, в котором он ожидает объект с информацией о товаре со следующими свойствами:
- `brand` — название производителя товара,
- `title` — название товара,
- `description` — краткое описание товара,
- `descriptionFull` — подробное описание товара,
- `price` — цена товара,
- `currency` — валюта товара.

Компонент должен создавать DOM элемент следующей структуры:
```html
<div class="main-content">
  <h2>Tiger of Sweden</h2>
  <h1>Leonard coat</h1>
  <h3>Minimalistic coat in cotton-blend</h3>
  <div class="description">
    Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.
  </div>
  <div class="highlight-window  mobile"><div class="highlight-overlay"></div></div>
  <div class="divider"></div>
  <div class="purchase-info">
    <div class="price">£399.00</div>
    <button>Добавить в корзину</button>
  </div>
</div>
```

Соответственно название производителя необходимо подставить в `h2`, название товара в `h1`, краткое описание в `<h3>`, подробное описание в `div.description`, цену и валюту в `div.price`. При этом символ валюты должен следовать перед ценой, а цена должна быть представлена с двумя числами после запятой.

## Реализация

### Локально с использованием git

Компонент необходимо реализовать в файле `./js/ShopItem.js`. Файл уже подключен к документы, поэтому другие файлы изменять не требуется.

### В песочнице CodePen

Реализуйте компонент во вкладке JS(Babel). Перед началом работы сделайте форк этого пена:

https://codepen.io/Netology/pen/VXRqWY
