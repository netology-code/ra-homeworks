class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      items: []
    };
  }

  render() {
    const { items, isOpen } = this.state

    return (
      <div>
        <Header
          items={items} isOpen={isOpen}
          toggleCart={() => this.toggleCart()}
          clearCart={() => this.clearCart()}
        />
        <Catalog
          addProduct={product => this.addProduct(product)}
          checkInCart={product => this.checkInCart(product)}
        />
      </div>
    );
  }

  toggleCart() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  addProduct(product) {
    this.setState({
      items: [
        ...this.state.items.filter(item => item.title !== product.title),
        product,
      ]
    });
  }

  clearCart() {
    this.setState({
      items: [],
    });
  }

  checkInCart(product) {
    return !this.state.items.find(item => item.title === product.title);
  }
}
  