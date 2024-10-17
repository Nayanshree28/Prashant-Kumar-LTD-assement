// User class
class User {
    constructor(userId, name, email) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.orders = []; // A user can have multiple orders
    }

    addOrder(order) {
        this.orders.push(order);
    }

    getOrders() {
        return this.orders;
    }
}

// Product class
class Product {
    constructor(productId, name, price) {
        this.productId = productId;
        this.name = name;
        this.price = price;
    }
}

// Order class
class Order {
    constructor(orderId, userId, status = 'pending', date = new Date()) {
        this.orderId = orderId;
        this.userId = userId;
        this.status = status;
        this.date = date;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getTotalAmount() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }
}

// Payment class
class Payment {
    constructor(paymentId, orderId, amount, status = 'pending') {
        this.paymentId = paymentId;
        this.orderId = orderId;
        this.amount = amount;
        this.status = status;
    }

    completePayment() {
        this.status = 'completed';
    }
}

// Example usage

// Create users
const user1 = new User(1, 'Alice', 'alice@example.com');
const user2 = new User(2, 'Bob', 'bob@example.com');

// Create products
const product1 = new Product(101, 'Laptop', 1200);
const product2 = new Product(102, 'Mouse', 25);
const product3 = new Product(103, 'Keyboard', 75);

// Create orders for user1
const order1 = new Order(201, user1.userId);
order1.addProduct(product1);
order1.addProduct(product2);

// Create orders for user2
const order2 = new Order(202, user2.userId);
order2.addProduct(product3);

// Add orders to users
user1.addOrder(order1);
user2.addOrder(order2);

// Create payments for the orders
const payment1 = new Payment(301, order1.orderId, order1.getTotalAmount());
payment1.completePayment();

const payment2 = new Payment(302, order2.orderId, order2.getTotalAmount());

// Print user details
console.log("User 1 Orders:", user1.getOrders());
console.log("User 2 Orders:", user2.getOrders());

// Print order details
console.log("Order 1 total amount:", order1.getTotalAmount());
console.log("Order 1 status:", order1.status);
order1.updateStatus('shipped');
console.log("Order 1 updated status:", order1.status);

// Print payment details
console.log("Payment 1 details:", payment1);
console.log("Payment 2 details:", payment2);
