// Function to handle search and highlight within all .navbar-item articles
var matchingDiv = document.createElement('div');
function searchAndHighlight() {
    var searchText = document.getElementById('searchInput').value.toLowerCase();
    var articles = document.querySelectorAll('.navbar-item'); // Select all .navbar-item articles

    // Create a div to display matching navigation links
    matchingDiv.id = 'matchingNav';
    matchingDiv.innerHTML = '<strong>Matching Navigation:</strong>';
    matchingDiv.classList.add("matchingDiv");

    articles.forEach(function (article) {
        var navLinks = article.querySelectorAll('.linkA'); // Select all links with class "linkA" within the article

        navLinks.forEach(function (link) {
            var linkText = link.textContent.toLowerCase();

            if (linkText.includes(searchText)) {
                link.classList.add('active'); // Add .active class to the link

                // Create a matching link text element
                var matchingLink = document.createElement('p');
                matchingLink.textContent = link.textContent;
                matchingLink.classList.add("matchingLink");
                matchingLink.tabIndex = 0; // Make it focusable

                // Remove active class from the clicked matchingLink
                matchingLink.addEventListener('click', function () {
                    var allLinks = document.querySelectorAll('.linkA');
                    allLinks.forEach(function (link) {
                        link.classList.remove('active');
                    });
                });

                matchingDiv.appendChild(matchingLink);

                // Add a click event listener to simulate link click
                matchingLink.addEventListener('click', function () {
                    link.click();
                    document.getElementById('searchInput').value = ''; // Clear the search input
                    matchingDiv.innerHTML = ''; // Clear the matchingDiv
                    warningSearchText.classList.add('noneDisplay');
                });

            } else {
                link.classList.remove('active'); // Remove .active class from the link
            }
        });
    });

    // Check if search input is empty and remove active class if it is
    if (searchText === '') {
        var allLinks = document.querySelectorAll('.linkA');
        allLinks.forEach(function (link) {
            link.classList.remove('active');
        });
        matchingDiv.innerHTML = ''; // Clear the matchingDiv
        warningSearchText.classList.add('noneDisplay');
    }

    // Get the existing matchingDiv (if it exists) and remove it
    var existingMatchingDiv = document.getElementById('matchingNav');
    if (existingMatchingDiv) {
        existingMatchingDiv.parentNode.removeChild(existingMatchingDiv);
    }

    // Append the matchingDiv below the search input
    document.getElementById('searchInput').insertAdjacentElement('afterend', matchingDiv);
}


// Function to handle navigation through matching links using arrow keys
const warningSearchText = document.querySelector('.warningSearchText')
function checkMinLength(input) {
    var minLength = 3; // Change this to your desired minimum length

    if (input.value.length < minLength) {
        // Display a message or take action when the input length is less than the minimum
        // For example, you can show an error message or style the input differently.
        // alert('Minimum three letters are required.');
        warningSearchText.classList.remove('noneDisplay');
    } else {
        warningSearchText.classList.add('noneDisplay');
    }
}

function handleEnterKeyPress(event) {
    if (event.key === 'Enter') {
        var searchText = document.getElementById('searchInput').value;

        if (searchText.length >= 3) {
            // The minimum length requirement is met, so you can proceed with your Enter key action.
            // For example, trigger a search.
            performSearch(searchText);
        } else {
            // Prevent the Enter key action when the minimum length requirement is not met.
            event.preventDefault();
        }
    }
}

function performSearch(searchText) {
    // Implement your search logic here.
    // This function will be called when the user presses Enter and the input has at least three characters.


    // Add your code here to handle the search and matchingDiv as needed.
    // For example, you can add code to create and populate the matchingDiv.
    // Ensure that you remove 'active' classes and clear the matchingDiv as required.
    const activeLink = document.querySelector('.linkA.active');
    if (activeLink) {
        activeLink.classList.remove('active');
        activeLink.click(); // Simulate a click on the active link, simulate click on first linik from matchingDiv
    }
    document.getElementById('searchInput').value = ''; // Clear the search input
    matchingDiv.innerHTML = ''; // Clear the matchingDiv
}


// Add an event listener to the search input for input changes
document.getElementById('searchInput').addEventListener('input', searchAndHighlight);

// Add an event listener to the search input for Enter key press
document.getElementById('searchInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        handleEnterKeyPress(event);
    }
});