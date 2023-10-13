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
import { removeActiveClassFromElements } from './active.js';

const scrollTop = document.querySelector('.scrollTop');
const scrollBottom = document.querySelector('.scrollBottom');
const navLinks = document.querySelectorAll('.linkA');

// Function to scroll to the top of a section
function scrollToSectionTop(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollTop = 0;
        removeActiveClassFromElements(navLinks);
    }
}
scrollTop.addEventListener('click', function () {
    scrollToSectionTop('description');
    localStorage.clear();
    // console.log('scroll top is ok')
});

// Function to scroll to the bottom of the section
function scrollToSectionBottom(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollTop = section.scrollHeight;
        removeActiveClassFromElements(navLinks);
    }
}
scrollBottom.addEventListener('click', function () {
    scrollToSectionBottom('description');
    localStorage.clear();
    // console.log('scroll bottom is ok')
});














