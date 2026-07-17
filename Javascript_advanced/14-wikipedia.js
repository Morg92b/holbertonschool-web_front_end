/**
 * Function createElement
 * @param {string} data - The content to be added to the paragraph.
 * Behavior:
 * Creates a paragraph element, sets its content to 'data',
 * and appends it to the document body.
 */

function createElement(data) {
    const paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

/**
 * Function queryWikipedia
 * @param {function} callback - The function to call when the request is complete.
 * Behavior:
 * 1. Creates a new XMLHttpRequest object.
 * 2. Opens a GET request to the Wikipedia API.
 * 3. On load, parses the JSON response to extract the article text.
 * 4. Calls the 'callback' function with the extracted text.
 */

function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            // The API returns an object with dynamic page IDs under 'pages'
            const pages = response.query.pages;
            // Get the first key (the page ID) to access the page object
            const pageId = Object.keys(pages)[0];
            const extract = pages[pageId].extract;

            callback(extract);
        }
    };

    xhr.send();
}

// Call queryWikipedia and pass createElement as the callback
queryWikipedia(createElement);
