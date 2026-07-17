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
  const item = itemName.toLowerCase();

  console.log(`Verifying the stock of ${item}`);

  if (stock[item] > 0) {
    callbackPayment(item);
  } else {
    callbackError(item);
  }
}

module.exports = {
  stock,
  processPayment,
  processError,
  processOrder,
};
