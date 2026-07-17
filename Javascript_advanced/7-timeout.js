/**
 * Logs the start of the execution queue.
 */

console.log('Start of the execution queue');

/**
 * setTimeout with delay 0.
 * Even with 0ms delay, this callback is pushed to the Web API
 * and then the Callback Queue. It waits for the Call Stack to be empty.
 */

setTimeout(function () {
    console.log('Final code block to be executed');
}, 0);

/**
 * Loop 100 times.
 * This runs synchronously on the Call Stack.
 */

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

/**
 * Logs the end of the loop.
 * This still runs on the Call Stack, before the Event Loop checks the Callback Queue.
 */

console.log('End of the loop printing');
