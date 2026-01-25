class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Method to calculate the total price for this item
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Get the total number of items in the cart
  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  // Add an item to the cart
  addItem(product, quantity) {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id,
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new ShoppingCartItem(product, quantity));
    }
  }

  // Remove an item from the cart
  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  // Display cart items
  displayCart() {
    console.log("Shopping Cart:");
    this.items.forEach((item) => {
      console.log(
        `- ${item.product.name} (x${item.quantity}): $${item.getTotalPrice().toFixed(2)}`,
      );
    });
    console.log(`Total items: ${this.getTotalItems()}`);
  }
}

// Create some products
const product1 = new Product(1, "Laptop", 500);
const product2 = new Product(2, "Mouse", 15);
const product3 = new Product(3, "keyboard", 20);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 1);

// Display the cart
cart.displayCart();

// Remove an item from the cart
cart.removeItem(1);

// Display the cart again
cart.displayCart();
