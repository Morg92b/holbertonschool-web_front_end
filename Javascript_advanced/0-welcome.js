/**
 * Function welcome acts as a wrapper to demonstrate lexical scoping.
 * @param {string} firstName - The first name provided.
 * @param {string} lastName - The last name provided.
 * 
 * Requirements:
 * 1. Create a variable 'fullName' combining firstName and lastName.
 * 2. Define a helper function 'displayFullName' that uses 'fullName' 
 * to show an alert with the message: "Welcome <fullName>!".
 * 3. Execute 'displayFullName' immediately.
 */

function welcome(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;

    function displayFullName() {
        alert('Welcome ' + fullName + '!');
    }

    displayFullName();
}
