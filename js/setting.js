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



///////////////////////////////////////////////////////////
// FOR IMAGE
// Select the image elements by their class or ID
const imgElements = document.querySelectorAll("img"); // You can use a class or another selector

// Set the width and height for each image element
/* imgElements.forEach((img) => {
    img.width = 1260; // Set the desired width in pixels
    img.height = 55; // Set the desired height in pixels
}); */



/* ///////////////////////////////////////////////////////////
// JavaScript to handle scrolling to sections
const linkANavLinks = document.querySelectorAll('.linkA');
linkANavLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // Extract the target section ID
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Update the URL for back/forward navigation
        history.pushState({ section: targetId }, null, `#${targetId}`);
    });
});


const descriptionSections = document.querySelectorAll('.description section');
descriptionSections.forEach((section) => {
    section.addEventListener('click', () => {
        const sectionId = section.id;
        // Update the URL for back/forward navigation
        history.pushState({ section: sectionId }, null, `#${sectionId}`);
    });
});


window.addEventListener('popstate', (event) => {
    if (event.state && event.state.section) {
        const targetSection = document.getElementById(event.state.section);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});
 */



const linkANavLinks = document.querySelectorAll('.linkA');
linkANavLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // Extract the target section ID
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Update the URL for back/forward navigation
        history.pushState({ section: targetId }, null, `#${targetId}`);
    });
});

const descriptionSections = document.querySelectorAll('.description section');
descriptionSections.forEach((section) => {
    section.addEventListener('click', () => {
        const sectionId = section.id;
        const activeLink = document.querySelector('.linkA.active');
        if (activeLink) {
            activeLink.classList.remove('active');
        }
        // Update the URL for back/forward navigation
        history.pushState({ section: sectionId }, null, `#${sectionId}`);
        const matchingLink = document.querySelector(`.linkA[href="#${sectionId}"]`);
        if (matchingLink) {
            matchingLink.classList.add('active');
        }
    });
});

window.addEventListener('popstate', (event) => {
    if (event.state && event.state.section) {
        const targetSection = document.getElementById(event.state.section);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        const matchingLink = document.querySelector(`.linkA[href="#${event.state.section}"]`);
        const activeLink = document.querySelector('.linkA.active');
        if (activeLink) {
            activeLink.classList.remove('active');
        }
        if (matchingLink) {
            matchingLink.classList.add('active');
        }
    }
});

// JavaScript to handle forward navigation
/* document.getElementById('go-forward').addEventListener('click', () => {
    history.forward();
}); */















