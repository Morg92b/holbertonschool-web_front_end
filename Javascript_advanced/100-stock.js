const stock = {
  macbook: 2,
  iphone: 4,
};

function processPayment(itemName) {
  stock[itemName]--;
  console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
  console.log(`No more ${itemName} in stock`);
  console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {
  console.log(`Verifying the stock of ${itemName}`);

  if (stock[itemName] > 0) {
    callbackPayment(itemName);
  } else {
    callbackError(itemName);
  }
}

module.exports = {
  processPayment,
  processError,
  processOrder,
};
