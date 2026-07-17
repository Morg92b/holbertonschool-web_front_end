/**
 * Stock available for the items being sold.
 * Contains the number of MacBooks and iPhones available.
 */
const stock = {
  macbook: 2,
  iphone: 4,
};

/**
 * Process a successful payment.
 *
 * @param {string} itemName - Name of the purchased item.
 * Decreases the stock of the purchased item by one
 * and displays a confirmation message.
 */
function processPayment(itemName) {
  const key = itemName.toLowerCase();

  stock[key] -= 1;

  console.log(`Payment is being processed for item ${itemName}`);
}

/**
 * Process an unsuccessful payment.
 *
 * @param {string} itemName - Name of the item that is unavailable.
 * Displays an error message when there is no stock available.
 */
function processError(itemName) {
  console.log(`No more ${itemName} in stock`);
  console.log("Payment is not being processed");
}

/**
 * Process an order depending on stock availability.
 *
 * @param {string} itemName - Name of the item to purchase.
 * @param {function} callbackPayment - Function called when stock is available.
 * @param {function} callbackError - Function called when stock is unavailable.
 *
 * Checks the stock of the requested item and calls the correct callback.
 */
function processOrder(itemName, callbackPayment, callbackError) {
  console.log(`Verifying the stock of ${itemName}`);

  const key = itemName.toLowerCase();

  if (stock[key] > 0) {
    callbackPayment(itemName);
  } else {
    callbackError(itemName);
  }
}

/**
 * Ask the user which item they want to purchase
 * and process the order with the corresponding callbacks.
 */
const itemName = prompt(
  "Please enter the item you would like to purchase (Macbook, iPhone)",
);

processOrder(itemName, processPayment, processError);
