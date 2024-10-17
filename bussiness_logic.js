// Product class to manage individual products
class Product {
  constructor(productId, name, stock, threshold = 10) {
    this.productId = productId;
    this.name = name;
    this.stock = stock;
    this.threshold = threshold;
  }

  // Method to display product details
  toString() {
    return `Product(id=${this.productId}, name=${this.name}, stock=${this.stock})`;
  }
}

// Function to process orders and update stock levels
function processOrders(products, orders) {
  /**
   * This function takes a list of products and a list of orders.
   * It updates stock levels and triggers a restock alert if stock falls below a threshold.
   * 
   * @param {Object} products - Dictionary of Product objects with productId as key.
   * @param {Array} orders - List of tuples [productId, quantity] representing the sales orders.
   */
  orders.forEach(([productId, quantity]) => {
    const product = products[productId];

    if (!product) {
      console.log(`Error: Product with ID ${productId} not found.`);
      return;
    }

    if (product.stock >= quantity) {
      product.stock -= quantity;
      console.log(
        `Processed order for ${quantity} of ${product.name}. New stock: ${product.stock}`
      );

      // Check if stock is below the threshold
      if (product.stock < product.threshold) {
        console.log(`Alert: Stock for ${product.name} is below threshold! Consider restocking.`);
      }
    } else {
      console.log(
        `Error: Not enough stock for ${product.name}. Available stock: ${product.stock}`
      );
    }
  });
}

// Function to restock items
function restockItems(products, restockList) {
  /**
   * This function takes a list of products that need to be restocked and updates their stock levels.
   * 
   * @param {Object} products - Dictionary of Product objects with productId as key.
   * @param {Array} restockList - List of tuples [productId, quantity] representing the products to restock.
   */
  restockList.forEach(([productId, quantity]) => {
    const product = products[productId];

    if (!product) {
      console.log(`Error: Product with ID ${productId} not found.`);
      return;
    }

    product.stock += quantity;
    console.log(`Restocked ${quantity} of ${product.name}. New stock: ${product.stock}`);
  });
}

// Example usage
// Initialize products
const products = {
  101: new Product(101, 'Laptop', 15),
  102: new Product(102, 'Mouse', 5),
  103: new Product(103, 'Keyboard', 20),
};

// Incoming sales orders: [productId, quantity]
const orders = [
  [101, 5], // 5 Laptops
  [102, 3], // 3 Mice
  [103, 25], // 25 Keyboards (exceeds available stock)
];

// Process orders
processOrders(products, orders);

// Restock items: [productId, quantity]
const restockList = [
  [102, 10], // Restock 10 Mice
  [103, 30], // Restock 30 Keyboards
];

// Restock products
restockItems(products, restockList);
