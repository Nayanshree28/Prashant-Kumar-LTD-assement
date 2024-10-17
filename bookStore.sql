-- Part 1: SQL Queries

-- Query 1: Top 5 Customers Who Purchased the Most Books in the Last Year
SELECT c.customer_id, c.name, SUM(od.quantity) AS total_books
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
JOIN OrderDetails od ON o.order_id = od.order_id
WHERE o.order_date >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)
GROUP BY c.customer_id, c.name
ORDER BY total_books DESC
LIMIT 5;

-- Query 2: Total Revenue Generated from Book Sales by Each Author
SELECT b.author, SUM(od.quantity * b.price) AS total_revenue
FROM Books b
JOIN OrderDetails od ON b.book_id = od.book_id
GROUP BY b.author
ORDER BY total_revenue DESC;

-- Query 3: Books Ordered More Than 10 Times (with Total Quantity)
SELECT b.book_id, b.title, SUM(od.quantity) AS total_quantity_ordered
FROM Books b
JOIN OrderDetails od ON b.book_id = od.book_id
GROUP BY b.book_id, b.title
HAVING total_quantity_ordered > 10;


-- Part 2: Indexing for Performance Optimization

-- Add index on Customers table for customer_id
CREATE INDEX idx_customers_customer_id ON Customers(customer_id);

-- Add index on Orders table for customer_id and order_date
CREATE INDEX idx_orders_customer_id ON Orders(customer_id);
CREATE INDEX idx_orders_order_date ON Orders(order_date);

-- Add index on Books table for book_id and author
CREATE INDEX idx_books_book_id ON Books(book_id);
CREATE INDEX idx_books_author ON Books(author);

-- Add index on OrderDetails table for order_id and book_id
CREATE INDEX idx_orderdetails_order_id ON OrderDetails(order_id);
CREATE INDEX idx_orderdetails_book_id ON OrderDetails(book_id);
