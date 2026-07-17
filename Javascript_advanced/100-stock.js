const stock = {
  macbook: 2,
  iphone: 4,
};

function processPayment(itemName) {
  const key = itemName.toLowerCase();
  stock[key] -= 1;
  console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
  console.log(`No more ${itemName} in stock`);
  console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {
  console.log(`Verifying the stock of ${itemName}`);

  const key = itemName.toLowerCase();
  const isInStock =
    Object.prototype.hasOwnProperty.call(stock, key) && stock[key] > 0;

  if (isInStock) {
    callbackPayment(itemName);
  } else {
    callbackError(itemName);
  }
}

const itemName = prompt(
  "Please enter the item you would like to purchase (Macbook, iPhone)",
);
processOrder(itemName, processPayment, processError);
