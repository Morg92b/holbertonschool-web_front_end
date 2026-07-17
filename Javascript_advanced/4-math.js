/**
 * Function divideBy
 * @param {number} firstNumber - The divisor.
 * Behavior:
 * It returns a function that takes into argument secondNumber (number).
 * It returns the second number divided by the first number.
 */

function divideBy(firstNumber) {
    return function (secondNumber) {
        return secondNumber / firstNumber;
    }
}

/**
 * Function addBy
 * @param {number} firstNumber - The base number to add.
 * Behavior:
 * It returns a function that takes into argument secondNumber (number).
 * It returns the sum of the two numbers.
 */

function addBy(firstNumber) {
    return function (secondNumber) {
        return secondNumber + firstNumber;
    }
}

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);
