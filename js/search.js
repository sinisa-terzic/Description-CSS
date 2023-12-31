// Create a div to display matching navigation links
const matchingDiv = document.createElement('div');
matchingDiv.id = 'matchingNav';
matchingDiv.innerHTML = '<strong>Matching Navigation:</strong>';
matchingDiv.classList.add('matchingDiv');

// Initialize selected matching link index
let selectedMatchingLinkIndex = -1;

// Function to handle navigation through matching links using arrow keys
function navigateMatchingLinks(direction) {
    const matchingLinks = matchingDiv.querySelectorAll('.matchingLink');

    if (matchingLinks.length === 0) {
        return;
    }

    if (direction === 'up') {
        selectedMatchingLinkIndex = (selectedMatchingLinkIndex - 1 + matchingLinks.length) % matchingLinks.length;
    } else if (direction === 'down') {
        selectedMatchingLinkIndex = (selectedMatchingLinkIndex + 1) % matchingLinks.length;
    }

    // Handle class for focus effect
    matchingLinks.forEach((link, index) => {
        if (index === selectedMatchingLinkIndex) {
            link.classList.add('focused');
        } else {
            link.classList.remove('focused');
        }
    });
}

// Function to handle navigation through matching links using arrow keys
const warningSearchText = document.querySelector('.warningSearchText');
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

// Function to perform a search
function performSearch(searchText) {
    const activeLink = document.querySelector('.link.active');
    if (activeLink) {
        activeLink.classList.remove('active');
        activeLink.click(); // Simulate a click on the active link
    }
    document.getElementById('searchInput').value = ''; // Clear the search input
    matchingDiv.innerHTML = ''; // Clear the matchingDiv
    warningSearchText.classList.add('noneDisplay');
}

// Function to handle Enter key press
function handleEnterKeyPress(event) {
    if (event.key === 'Enter') {
        const searchText = document.getElementById('searchInput').value;

        if (searchText.length >= 3) {
            performSearch(searchText); // Trigger the search
        } else {
            event.preventDefault(); // Prevent Enter key action if the input length requirement is not met
        }
    }
}

// Function to handle input changes and matching link highlighting
function searchAndHighlight() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const articles = document.querySelectorAll('.navbar-item');

    articles.forEach((article) => {
        const navLinks = article.querySelectorAll('.link');

        navLinks.forEach((link) => {
            const linkText = link.textContent.toLowerCase();

            if (linkText.includes(searchText)) {
                link.classList.add('active'); // Add .active class to the link

                const matchingLink = document.createElement('p');
                matchingLink.textContent = link.textContent;
                matchingLink.classList.add('matchingLink');
                matchingLink.tabIndex = 0; // Make it focusable

                matchingLink.addEventListener('click', () => {
                    const allLinks = document.querySelectorAll('.link');
                    allLinks.forEach((link) => {
                        link.classList.remove('active');
                    });
                });

                matchingDiv.appendChild(matchingLink);

                matchingLink.addEventListener('click', () => {
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

    if (searchText === '') {
        matchingDiv.innerHTML = ''; // Clear the matchingDiv
        warningSearchText.classList.add('noneDisplay');
    }

    const existingMatchingDiv = document.getElementById('matchingNav');
    if (existingMatchingDiv) {
        existingMatchingDiv.parentNode.removeChild(existingMatchingDiv);
    }

    document.getElementById('searchInput').insertAdjacentElement('afterend', matchingDiv);
}

// Add an event listener to the search input for input changes
document.getElementById('searchInput').addEventListener('input', searchAndHighlight);

// Add keyboard event listeners for arrow keys and Enter key
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        navigateMatchingLinks('up');
        event.preventDefault();
    } else if (event.key === 'ArrowDown') {
        navigateMatchingLinks('down');
        event.preventDefault();
    }

    if (event.key === 'Enter') {
        if (selectedMatchingLinkIndex >= 0) {
            const matchingLinks = matchingDiv.querySelectorAll('.matchingLink');
            if (selectedMatchingLinkIndex < matchingLinks.length) {
                matchingLinks[selectedMatchingLinkIndex].click();
                document.getElementById('searchInput').value = ''; // Clear the search input
                matchingDiv.innerHTML = ''; // Clear the matchingDiv
                warningSearchText.classList.add('noneDisplay');
            }
        }
    }
});



///////////////////////////////////////////////////////////
// ADD ACTIVE CLASS ON LINK 
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.link');
    const titleNavbar = document.querySelectorAll(".titleNavbar");

    // Add active class when a link is clicked
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.forEach((otherLink) => otherLink.classList.remove("active"));
            link.classList.add("active");
        });
    });


    // Remove active class when a link is clicked
    titleNavbar.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.forEach((otherLink) => otherLink.classList.remove("active"));
            link.classList.remove("active");
        });
    });


    // Apply the "active" class based on the URL fragment
    function setActiveLinkFromFragment() {
        const fragment = window.location.hash.substr(1); // Get the fragment (e.g., "section1")
        if (fragment) {
            const activeLink = document.querySelector(`[name="${fragment}"]`);
            if (activeLink) {
                navLinks.forEach(link => link.classList.remove('active'));
                activeLink.classList.add('active');
                description.scrollTop = document.getElementById(fragment).offsetTop;
            }
        }
    }

    // Add a listener for changes to the URL fragment (e.g., when using back/forward buttons)
    window.addEventListener('hashchange', setActiveLinkFromFragment);

    // Call the function initially to set the "active" class when the page loads or when returning from bfcache
    setActiveLinkFromFragment();
});


