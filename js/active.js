///////////////////////////////////////////////////////////
// Function to add active class
function addActiveClass() {
    const navLinkEls = document.querySelectorAll(".linkA");
    navLinkEls.forEach(navLinkEl => {
        navLinkEl.addEventListener('click', () => {
            document.querySelector('.active')?.classList.remove('active');
            navLinkEl.classList.add('active');
            localStorage.setItem('activeLink', navLinkEl.textContent); // Save the active link in local storage
            console.log("add active class");
        });
    });
    // Check local storage for active link and set it on page load
    const storedActiveLink = localStorage.getItem('activeLink');
    if (storedActiveLink) {
        const matchingLink = [...navLinkEls].find(link => link.textContent === storedActiveLink);
        if (matchingLink) {
            matchingLink.classList.add('active');
        }
    }
}
// Call the functions to add and remove active class
addActiveClass();


///////////////////////////////////////////////////////////
// Function to remove active class
function removeActiveClass() {
    const headerEl = document.querySelectorAll(".title-navbar");
    headerEl.forEach(headerEl => {
        headerEl.addEventListener("click", () => {
            const remove_active = document.querySelectorAll(".active");
            remove_active.forEach(element => {
                element.classList.remove('active');
                console.log("remove active class");
                localStorage.removeItem('activeLink'); // Remove active link from local storage
            });
        });
    });
}
// Call the functions to add and remove active class
removeActiveClass();



export { addActiveClass, removeActiveClass };


///////////////////////////////////////////////////////////
// Function to remove the "active" class from a list of elements
export function removeActiveClassFromElements(elements) {
    elements.forEach(function (element) {
        element.classList.remove('active');
        console.log("remove active class");
    });

    // Store a boolean value in localStorage to represent the removal of the "active" class
    localStorage.setItem('activeClassRemoved', 'true');
}


///////////////////////////////////////////////////////////
// add scrill activa class in navbar
const options = {
    root: null,
    rootMargin: '-35% 0px',
    threshold: 0
};

const callback = (entries) => {
    entries.forEach((entry) => {
        const section = entry.target.dataset.section;
        const links = document.querySelectorAll(`.link[data-section="${section}"]`);

        if (entry.isIntersecting) {
            links.forEach(link => {
                link.classList.add('active-brd');
            });
        } else {
            links.forEach(link => {
                link.classList.remove('active-brd');
            });
        }
    });
};

const observer = new IntersectionObserver(callback, options);

document.querySelectorAll('section.rules').forEach((elem) => {
    observer.observe(elem);
});


///////////////////////////////////////////////////////////
// Function to save scroll position to localStorage
function saveScrollPosition() {
    const section = document.getElementById('description'); // Replace with the actual section ID
    localStorage.setItem('scrollPosition', section.scrollTop);
}
/* Function to restore scroll position from localStorage */
function restoreScrollPosition() {
    const section = document.getElementById('description'); // Replace with the actual section ID
    const savedScrollPosition = localStorage.getItem('scrollPosition');

    if (savedScrollPosition !== null) {
        section.scrollTop = savedScrollPosition;
    }
}
/* Event listener for scrolling within the section */
const section = document.getElementById('description'); // Replace with the actual section ID
section.addEventListener('scroll', saveScrollPosition);
/* Call restoreScrollPosition when the page loads */
window.addEventListener('load', restoreScrollPosition);