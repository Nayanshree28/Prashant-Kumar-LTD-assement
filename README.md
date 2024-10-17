# Prashant-Kumar-LTD- Softeware-Development-Assement

# Part-1 : System Design(ecommerce.js)

This project is a simplified e-commerce system that handles basic operations like user management, product catalog, order management, and payment processing. It is written in JavaScript using basic class structures to simulate a backend service.

## Features

- **Users**: Can create and manage orders.
- **Products**: Can be added to orders, each having its own price.
- **Orders**: Contain multiple products, with support for order status tracking.
- **Payments**: Associated with orders and can be marked as completed.

## Project Structure

The system is designed around four main classes:

1. **User**: Represents a user in the system who can create and view orders.
2. **Product**: Represents a product in the catalog with a price.
3. **Order**: Represents an order that a user places, which contains multiple products.
4. **Payment**: Represents payment for a specific order.

## Class Descriptions

### User Class

- **Properties**:
  - `userId`: Unique identifier for the user.
  - `name`: Name of the user.
  - `email`: Email of the user.
  - `orders`: Array to store the user's orders.
  
- **Methods**:
  - `addOrder(order)`: Adds a new order to the user's order list.
  - `getOrders()`: Retrieves all orders made by the user.

### Product Class

- **Properties**:
  - `productId`: Unique identifier for the product.
  - `name`: Name of the product.
  - `price`: Price of the product.

### Order Class

- **Properties**:
  - `orderId`: Unique identifier for the order.
  - `userId`: The user who made the order.
  - `status`: Status of the order (e.g., pending, completed, shipped).
  - `date`: The date when the order was placed.
  - `products`: Array to store the products added to the order.
  
- **Methods**:
  - `addProduct(product)`: Adds a product to the order.
  - `getTotalAmount()`: Calculates the total amount of the order.
  - `updateStatus(newStatus)`: Updates the status of the order.

### Payment Class

- **Properties**:
  - `paymentId`: Unique identifier for the payment.
  - `orderId`: The order associated with the payment.
  - `amount`: The amount of the payment.
  - `status`: Status of the payment (e.g., pending, completed).
  
- **Methods**:
  - `completePayment()`: Marks the payment as completed.

## Example Usage

The system simulates the interaction between users, orders, and payments. Here’s how you can use the system:

```javascript
// Create users
const user1 = new User(1, 'Alice', 'alice@example.com');
const user2 = new User(2, 'Bob', 'bob@example.com');

// Create products
const product1 = new Product(101, 'Laptop', 1200);
const product2 = new Product(102, 'Mouse', 25);

// Create orders
const order1 = new Order(201, user1.userId);
order1.addProduct(product1);
order1.addProduct(product2);

// Add order to user1
user1.addOrder(order1);

// Create a payment for the order
const payment1 = new Payment(301, order1.orderId, order1.getTotalAmount());
payment1.completePayment();

console.log(user1);
console.log(payment1);

