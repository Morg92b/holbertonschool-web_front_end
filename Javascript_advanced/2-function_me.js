/**
 * Function welcomeMessage
 * @param {string} fullName - The name to be displayed in the alert.
 * * Behavior:
 * This function returns a closure (an inner function).
 * The closure, when called, displays an alert with the message:
 * "Welcome <fullName>"
 */

function welcomeMessage(fullName) {
    return function () {
        alert('Welcome ' + fullName);
    }
}

const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');
