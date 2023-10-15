///////////////////////////////////////////////////////////
// SCROLL TOP / BOTTOM OF THE SECTION

// Function to scroll to the top of a section
/* function scrollToSectionTop(sectionId) {
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
}); */




///////////////////////////////////////////////
// Function to remove the "active" class from a button
function removeActiveClass() {
    const navLinks = document.querySelectorAll('.link');
    navLinks.forEach(function (link) {
        link.classList.remove('active'); // Remove .active class from the link
    });
}

// Function to scroll to the top of a section description
function scrollToSectionTop(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollTop = 0;
}
// Function to scroll to the top of a section description
function scrollToNavbarTop(sectionId) {
    const navbar = document.getElementById(sectionId);
    navbar.scrollTop = 0;
    removeActiveClass();
}
/* Event listener for scrolling to the top */
const scrollTopButton = document.querySelector('.scrollTop');
scrollTopButton.addEventListener('click', function () {
    scrollToSectionTop('description');
    scrollToNavbarTop('navbar');
});


// Function to scroll to the bottom of the section
function scrollToSectionBottom(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollTop = section.scrollHeight;
}
// Function to scroll to the bottom of the section
function scrollToNavbarBottom(sectionId) {
    const navbar = document.getElementById(sectionId);
    // Adjust the timeout for slower scrolling
    timeoutNavbar = setTimeout(() => {
        navbar.scrollTop = navbar.scrollHeight;
    }, 1000); // Increase the timeout for slower scrolling
    removeActiveClass();
}
/* Event listener for scrolling to the bottom */
const scrollBottomButton = document.querySelector('.scrollBottom');
scrollBottomButton.addEventListener('click', function () {
    scrollToSectionBottom('description');
    scrollToNavbarBottom('navbar');
});
