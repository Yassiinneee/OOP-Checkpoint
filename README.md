# 🛒 Object-Oriented Programming (OOP) Shopping Cart

> A JavaScript implementation of a **Shopping Cart System** using **Object-Oriented Programming (OOP)** principles. This project demonstrates how to model real-world entities such as products, shopping cart items, and shopping carts using classes, constructors, methods, and object relationships.

---

## 📖 Project Overview

This project is an introductory checkpoint focused on applying **Object-Oriented Programming (OOP)** concepts in JavaScript.

The application simulates a basic shopping cart where users can:

- Create products
- Add products to a shopping cart
- Update quantities automatically
- Remove products
- Calculate item totals
- Display the shopping cart contents

The project emphasizes writing clean, modular, and reusable code using JavaScript classes.

---

## 🎯 Learning Objectives

By completing this checkpoint, you practice:

- Object-Oriented Programming concepts
- Creating and using JavaScript classes
- Constructors
- Object composition
- Instance methods
- Array manipulation
- Encapsulation of business logic
- Writing maintainable and reusable code

---

# 📂 Project Structure

```
OOP-Checkpoint-main/
│
├── oop.js          # Main application source code
├── oop.json        # Project metadata
└── README.md       # Documentation
```

---

# 🏗️ System Architecture

The project is organized around three main classes.

## 1. Product

Represents a product available for purchase.

### Properties

| Property | Type | Description |
|----------|------|-------------|
| id | Number | Unique product identifier |
| name | String | Product name |
| price | Number | Product price |

Example:

```javascript
const laptop = new Product(1, "Laptop", 500);
```

---

## 2. ShoppingCartItem

Represents one product inside the shopping cart together with its quantity.

### Properties

| Property | Description |
|----------|-------------|
| product | Product object |
| quantity | Number of units |

### Methods

#### getTotalPrice()

Calculates the total price of the cart item.

```javascript
price × quantity
```

---

## 3. ShoppingCart

Represents the complete shopping cart.

### Properties

```javascript
items = []
```

Stores every `ShoppingCartItem`.

---

### Methods

#### addItem(product, quantity)

- Adds a product
- If the product already exists:
  - quantity is increased
- Otherwise:
  - a new ShoppingCartItem is created

---

#### removeItem(productId)

Removes a product using its unique identifier.

---

#### getTotalItems()

Returns the total quantity of products currently in the cart.

---

#### displayCart()

Displays:

- Product names
- Quantity
- Total price per item
- Total number of items

---

# 🔄 Workflow

```
Create Products
       │
       ▼
Create Shopping Cart
       │
       ▼
Add Products
       │
       ▼
Update Quantities
       │
       ▼
Display Cart
       │
       ▼
Remove Product
       │
       ▼
Display Updated Cart
```

---

# 🚀 Getting Started

## Prerequisites

- Node.js
- JavaScript (ES6+)

---

## Installation

Clone the repository

```bash
git clone https://github.com/your-username/OOP-Checkpoint.git
```

Navigate to the project

```bash
cd OOP-Checkpoint-main
```

---

## Run the Project

Execute:

```bash
node oop.js
```

---

# 💻 Example Output

```
Shopping Cart:
- Laptop (x1): $500.00
- Mouse (x2): $30.00
- Keyboard (x1): $20.00
Total items: 4

Shopping Cart:
- Mouse (x2): $30.00
- Keyboard (x1): $20.00
Total items: 3
```

---

# 🧠 OOP Concepts Demonstrated

✅ Classes

✅ Objects

✅ Constructors

✅ Encapsulation

✅ Object Composition

✅ Instance Methods

✅ Reusability

✅ Separation of Responsibilities

---

# ⚙️ Technologies Used

- JavaScript (ES6)
- Node.js

---

# 📌 Features

- Product creation
- Shopping cart management
- Automatic quantity updates
- Item removal
- Price calculation
- Cart summary
- Clean object-oriented architecture

---

# 🔮 Possible Improvements

Future enhancements could include:

- Product stock management
- Discount and coupon system
- Tax calculation
- Shipping cost calculation
- Cart persistence using JSON
- File/database storage
- Interactive command-line interface (CLI)
- Unit testing
- Input validation
- Error handling
- Checkout functionality

---

# 📚 Key Takeaways

This project demonstrates how Object-Oriented Programming can simplify application design by separating responsibilities into dedicated classes. Each class has a clear purpose, making the code easier to understand, extend, and maintain.

---

# 👨‍💻 Author
*yassine kalthoum*

**Developed as part of an Object-Oriented Programming (OOP) JavaScript Checkpoint.**

Designed to demonstrate practical application of OOP principles through a shopping cart management system.

---

# 📄 License

This project is intended for **educational purposes** as part of an Object-Oriented Programming learning checkpoint.
