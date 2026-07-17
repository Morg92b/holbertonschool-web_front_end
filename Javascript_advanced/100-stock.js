/**
 * Stock available for the items being sold.
 */
const stock = {
  macbook: 2,
  iphone: 4,
};

/**
 * Process a payment for an item.
 *
 * @param {string} itemName - The name of the item purchased.
 */
function processPayment(itemName) {
  const key = itemName.toLowerCase();

  stock[key] -= 1;

  console.log(`Payment is being processed for item ${itemName}`);
}

/**
 * Process an error when an item is unavailable.
 *
 * @param {string} itemName - The name of the item.
 */
function processError(itemName) {
  console.log(`No more ${itemName} in stock`);
  console.log("Payment is not being processed");
}

/**
 * Process an order depending on the stock availability.
 *
 * @param {string} itemName - The item to purchase.
 * @param {function} callbackPayment - Callback executed if payment is possible.
 * @param {function} callbackError - Callback executed if there is no stock.
 */
function processOrder(itemName, callbackPayment, callbackError) {
  console.log(`Verifying the stock of ${itemName}`);

  const key = itemName.toLowerCase();

  if (stock[key] && stock[key] > 0) {
    callbackPayment(itemName);
  } else {
    callbackError(itemName);
  }
}

/**
 * Ask the user for the item they want to purchase.
 */
const itemName = prompt(
  "Please enter the item you would like to purchase (Macbook, iPhone)",
);

processOrder(itemName, processPayment, processError);
