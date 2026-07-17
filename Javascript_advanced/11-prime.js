/**
 * Function countPrimeNumbers
 * Behavior:
 * Counts the number of prime numbers from 2 to 100.
 * Returns the count.
 */

function countPrimeNumbers() {
    let count = 0;

    for (let i = 2; i <= 100; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            count++;
        }
    }
    return count;
}

/**
 * Stack Order Manipulation
 * 1. Start timer (t0).
 * 2. Use setTimeout to defer the loop execution to the end of the stack.
 * (The loop is moved to the Web API -> Callback Queue).
 * 3. End timer (t1) immediately.
 * 4. Log the difference.
 *
 * Result: The logged time is nearly 0 because the loop hasn't run yet
 * when the console.log executes.
 */

const t0 = performance.now();

setTimeout(function () {
    for (let i = 0; i < 100; i++) {
        countPrimeNumbers();
    }
}, 0);

const t1 = performance.now();

console.log('Execution time of calculating prime numbers 100 times was ' + (t1 - t0) + ' milliseconds.');
