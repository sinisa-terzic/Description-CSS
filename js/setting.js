///////////////////////////////////////////////////////////
// OPEN SETTING BOX
const settingButtonOpen = document.querySelector('.settingButtonOpen')
const alertThemeElement = document.querySelector('.settingBox');
const settingButtonClose = document.querySelector('.settingButtonClose')
const darkOpen = document.querySelector('.dark')

function toggleAlertTheme() {
    settingButtonOpen.classList.toggle('settingButtonOpenHide');
    alertThemeElement.classList.toggle('settingBoxOpen');
    darkOpen.classList.toggle('darkOpen');
}

settingButtonOpen.addEventListener('click', toggleAlertTheme);
settingButtonClose.addEventListener('click', toggleAlertTheme);
darkOpen.addEventListener('click', toggleAlertTheme);



///////////////////////////////////////////////////////////
// SCROLL TOP / BOTTOM OF THE SECTION

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
    timeoutNavbar = setTimeout(() => {
        navbar.scrollTop = 0;
    }, 500);
    removeActiveClass();
}
/* Event listener for scrolling to the top */
const scrollTopButton = document.querySelector('.scrollTop');
scrollTopButton.addEventListener('click', function () {
    scrollToSectionTop('description');
    scrollToNavbarTop('navbar');
    removeHashFromURL(); // Call a function to remove the hash from the URL
});


// Function to scroll to the bottom of the section
function scrollToSectionBottom(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollTop = section.scrollHeight;
}
// Function to scroll to the bottom of the section
function scrollToNavbarBottom(sectionId) {
    const navbar = document.getElementById(sectionId);
    timeoutNavbar = setTimeout(() => {
        navbar.scrollTop = navbar.scrollHeight;
    }, 500);
    removeActiveClass();
}
/* Event listener for scrolling to the bottom */
const scrollBottomButton = document.querySelector('.scrollBottom');
scrollBottomButton.addEventListener('click', function () {
    scrollToSectionBottom('description');
    scrollToNavbarBottom('navbar');
    removeHashFromURL(); // Call a function to remove the hash from the URL
});

// Function to remove the hash from the URL
function removeHashFromURL() {
    history.pushState("", document.title, window.location.pathname + window.location.search);
}
























