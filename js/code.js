///////////////////////////////////////////////////////////
// SCROLL TOP / BOTTOM OF THE SECTION

// Function to scroll to the top of a section
function scrollToSectionTop(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollTop = 0;
    }
}

// Function to scroll to the bottom of a section
function scrollToSectionBottom(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollTop = section.scrollHeight;
    }
}

// Function to simulate a click on the last "Cursor" link and remove active class from other links
const cursorLinks = document.querySelectorAll('a[name]');
function scrollToCursorLink() {
    if (cursorLinks.length > 0) {
        cursorLinks[cursorLinks.length - 1].click(); // Simulate a click on the last "Cursor" link
    }
}

const navbar = document.querySelector('.navbar');

// Event listener for scrolling to the top
const scrollTopButton = document.querySelector('.scrollTop');
const layoutLink = document.getElementById('layoutLink');
scrollTopButton.addEventListener('click', function () {
    if (navbar) {
        navbar.scrollIntoView({ behavior: 'smooth' });
        navbar.scrollTop = 0;
    }
    scrollToSectionTop('description');
    layoutLink.click(); // Simulate a click on the "Layout" link
});

// Event listener for scrolling to the bottom
const scrollBottomButton = document.querySelector('.scrollBottom');
scrollBottomButton.addEventListener('click', function () {
    scrollToSectionBottom('description');
    // scrollToCursorLink();
    navbar.scrollTop = navbar.scrollHeight;
    // cursorLinks[cursorLinks.length - 1].classList.remove('active');
});