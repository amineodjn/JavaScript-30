class Product {
  //   title = 'DEFAULT';
  //   imageURL;
  //   price;
  //   description;

  constructor(title, imageURL, price, description) {
    this.title = title;
    this.imageURL = imageURL;
    this.price = price;
    this.description = description;
  }
}
class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  render() {}

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}
class ProductItem extends Component {
  constructor(Product, renderHookId) {
    super(renderHookId, false);
    this.product = Product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement('li', 'product-item');

    prodEl.innerHTML = `<div>
          <img src='${this.product.imageURL}' alt='${this.product.title}'>
          <div class='product-item__content'>
          <h2>${this.product.title}</h2>
          <h3>$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to cart</button>
          </div>
          </div>`;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
  }
}

class ProductList extends Component {
  #product = [];

  constructor(renderHookId) {
    super(renderHookId,false);
    this.render();
    this.fetchProducts();
  }

  fetchProducts() {
    this.#product = [
      new Product(
        'Pillow',
        'https://images.ctfassets.net/ltric1hkjv72/1HYexb24uIz1uNiUQTtx21/56833acb51569d6a249a0eb225c9d6eb/toddler-pillow_default_lightbox_10652.jpg',
        19.99,
        'A soft pillow'
      ),
      new Product(
        'Carpet',
        'https://img.freepik.com/premium-vector/oriental-carpet_17870-29.jpg?w=2000',
        190.99,
        'Lovely Carpet'
      ),
    ];
    this.renderproduct();
  }

  renderproduct() {
    for (const prod of this.#product) {
      new ProductItem(prod, 'prod-list');
    }
  }
  render() {
    this.createRootElement('ul', 'product-list', [
      new ElementAttribute('id', 'prod-list'),
    ]);
    if (this.#product && this.#product.length > 0) {
      this.renderproduct();
    }
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total:\$ ${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevVal, curItem) => prevVal + curItem.price,
      0
    );

    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  orderProduct(){
    console.log('Ordering...');
    console.log(this.items);
  }

  render() {
    const cartEl = this.createRootElement('section', 'cart');
    cartEl.innerHTML = `
    <h2>Total:\$ ${0}</h2>
    <button>OrderNow!</button>`;
    const orderButton=cartEl.querySelector('button');
    orderButton.addEventListener('click',()=>this.orderProduct())
    this.totalOutput = cartEl.querySelector('h2');
  }
}

class Shop {
  constructor() {
    this.render();
  }
  render() {
    this.cart = new ShoppingCart('app');

    new ProductList('app');
  }
}

class App {
  static cart;
  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}
App.init();
