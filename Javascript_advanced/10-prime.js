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
 * - Records start time (t0).
 * - Executes countPrimeNumbers 100 times in a loop.
 * - Records end time (t1).
 * - Logs the total duration.
 */

const t0 = performance.now();

for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}

const t1 = performance.now();

console.log('Execution time of calculating prime numbers 100 times was ' + (t1 - t0) + ' milliseconds.');
