/**
 * Global Variable Definition:
 * Create a variable named globalVariable with value 'Welcome'.
 *
 * Function outer:
 * - Alerts the content of globalVariable.
 * - Creates a variable named course with value 'Holberton'.
 * - Defines an inner function named inner.
 * - Calls the function inner.
 *
 * Function inner:
 * - Alerts the content of globalVariable and course (concatenated).
 * - Creates a variable named exclamation with value '!'.
 * - Defines an inner function named inception.
 * - Calls the function inception.
 *
 * Function inception:
 * - Alerts the content of globalVariable, course, and exclamation (concatenated).
 */

let globalVariable = 'Welcome';

function outer() {
    alert(globalVariable);
    const course = 'Holberton';

    function inner() {
        alert(globalVariable + ' ' + course);
        const exclamation = '!';

        function inception() {
            alert(globalVariable + ' ' + course + exclamation);
        }

        inception();
    }

    inner();
}

outer();
