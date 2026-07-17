/**
 * Function changeMode
 * @param {number} size - The font size (in px).
 * @param {string} weight - The font weight (e.g., 'bold').
 * @param {string} transform - The text transformation (e.g., 'uppercase').
 * @param {string} background - The background color.
 * @param {string} color - The text color.
 *
 * Behavior:
 * Returns a closure function that, when called, sets the styles
 * of the document body according to the passed arguments.
 */

function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

/**
 * Function main
 * Behavior:
 * 1. Sets up three closures (spooky, darkMode, screamMode) using changeMode.
 * 2. Adds a paragraph "Welcome Holberton!" to the body.
 * 3. Adds three buttons to the body with click events linked to the closures.
 */

function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // Add Paragraph
    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    // Add Spooky Button
    const btnSpooky = document.createElement('button');
    btnSpooky.innerHTML = 'Spooky';
    btnSpooky.onclick = spooky;
    document.body.appendChild(btnSpooky);

    // Add Dark mode Button
    const btnDark = document.createElement('button');
    btnDark.innerHTML = 'Dark mode';
    btnDark.onclick = darkMode;
    document.body.appendChild(btnDark);

    // Add Scream mode Button
    const btnScream = document.createElement('button');
    btnScream.innerHTML = 'Scream mode';
    btnScream.onclick = screamMode;
    document.body.appendChild(btnScream);
}

main();
