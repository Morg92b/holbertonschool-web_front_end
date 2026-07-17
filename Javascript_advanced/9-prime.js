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
 * Performance Measurement
 * Uses the performance.now() API to measure the time taken to execute
 * the countPrimeNumbers function.
 */

const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();

console.log('Execution time of printing countPrimeNumbers was ' + (t1 - t0) + ' milliseconds.');
