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
function scrollToCursorLink() {
    const cursorLinks = document.querySelectorAll('a[name]');
    if (cursorLinks.length > 0) {
        cursorLinks[cursorLinks.length - 1].click(); // Simulate a click on the last "Cursor" link
    }
}

// Event listener for scrolling to the top
const scrollTopButton = document.querySelector('.scrollTop');
const layoutLink = document.getElementById('layoutLink');
scrollTopButton.addEventListener('click', function () {
    scrollToSectionTop('description');
    layoutLink.click(); // Simulate a click on the "Layout" link
});

// Event listener for scrolling to the bottom
const scrollBottomButton = document.querySelector('.scrollBottom');
scrollBottomButton.addEventListener('click', function () {
    scrollToSectionBottom('description');
    scrollToCursorLink();
});
















