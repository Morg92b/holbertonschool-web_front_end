/**
 * Function processPayment
 * @param {number} amount - The amount to collect.
 * Behavior: Logs the payment collection message.
 */

function processPayment(amount) {
    console.log('Collecting payment of ' + amount);
}

/**
 * Function processOrder
 * @param {number} orderId - The ID of the order.
 * @param {number} amount - The amount of the order.
 * Behavior:
 * 1. Logs that the order is being processed.
 * 2. Calls processPayment.
 * 3. Logs that the order has been fully processed.
 */

function processOrder(orderId, amount) {
    console.log(orderId + ' is being processed');
    processPayment(amount);
    console.log(orderId + ' has been fully processed');
}

// Main execution block
console.log('Processing orders');

processOrder(12321, 10.99);
processOrder(12322, 12.99);
processOrder(12323, 15.0);

console.log('All the orders have been processed');
