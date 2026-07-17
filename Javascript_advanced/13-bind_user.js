/**
 * Object user
 * Contains various user details.
 */

const user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Guillaume',
    lastName: 'Johns',
    location: 'Netherlands',
    occupation: 'Engineer'
};

/**
 * Function logWelcomeUser
 * @param {string} welcomeString - The greeting message.
 * Behavior:
 * Logs a welcome message using the 'firstName' and 'occupation'
 * properties accessed via 'this'.
 */

function logWelcomeUser(welcomeString) {
    console.log(welcomeString + ', ' + this.firstName + '. Your occupation is: ' + this.occupation);
}

/**
 * Variable bindLogWelcomeUser
 * Binds the logWelcomeUser function to the user object.
 * This ensures 'this' inside the function refers to 'user'.
 */

const bindLogWelcomeUser = logWelcomeUser.bind(user);

// Call the function with the string 'Welcome'
bindLogWelcomeUser('Welcome');
