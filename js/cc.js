/* document.addEventListener('DOMContentLoaded', function () {
    // DOM element references
    const autoThemeCheckbox = document.querySelector("#auto-theme-checkbox");
    const toggleButton = document.querySelector(".dark-light");
    const themeButton = document.getElementById("theme-button");
    const statusText = document.getElementById("status-text");
    const changeAutoModeMessage = document.querySelector('.changeAutoModeMessage')
    const toggleLightModeCheckbox = document.getElementById("toggle-light-mode");
    const changeManually = document.querySelector('.changeManually');
    const body = document.body;
    const themeDiv = document.querySelector(".theme");
    const autoMode = document.querySelector(".autoMode");

    // Variables for auto theme switching
    let autoChangeInterval;

    // Constants for time
    const morningHour = 7;
    const eveningHour = 19;
    const morningMinute = 0;
    const eveningMinute = 0;

    // Initialize the checkbox state and automatic theme change
    const savedAutoThemeEnabled = localStorage.getItem('autoThemeEnabled');
    if (savedAutoThemeEnabled === 'true') {
        autoThemeCheckbox.checked = true;
    }
    handleCheckboxChange();

    // Check for saved theme preference
    const savedThemePreference = localStorage.getItem('theme');
    if (savedThemePreference === 'light') {
        setThemePreference(true);
    } else {
        setThemePreference(false);
    }

    // Function to set theme preference
    function setThemePreference(isLightMode) {
        isLightMode ? body.classList.remove("light-mode") : body.classList.add("light-mode");
        isLightMode ? localStorage.setItem("theme", "dark") : localStorage.setItem("theme", "light");
    }

    // Function to handle checkbox change
    function handleCheckboxChange() {
        if (autoThemeCheckbox.checked) {
            // autoThemeCheckbox.checked = true;
            toggleButton.disabled = true;
            toggleButton.classList.add("noneDisplay");
            changeAutoModeMessage.textContent = 'Automatically changes mode based on the day. At 07:00 and 19:00.'
            autoChangeTheme();
            autoChangeInterval = setInterval(autoChangeTheme, 0);
        } else {
            toggleButton.disabled = false;
            toggleButton.classList.remove("noneDisplay");
            changeAutoModeMessage.textContent = 'Auto mode is off! You can choose theme!'
            clearInterval(autoChangeInterval);
        }
    }

    // Function to automatically change the theme
    function autoChangeTheme() {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        if (
            (currentHour === morningHour && currentMinute >= morningMinute) ||
            (currentHour > morningHour && currentHour < eveningHour) ||
            (currentHour === eveningHour && currentMinute < eveningMinute)
        ) {
            setThemePreference(false);
        } else {
            setThemePreference(true);
        }
    }

    // Event listeners
    autoThemeCheckbox.addEventListener("change", handleCheckboxChange);

    toggleButton.addEventListener("click", () => {
        setThemePreference(body.classList.contains("light-mode"));
        const isLightMode = body.classList.contains("light-mode");
        changeAutoModeMessage.textContent = !isLightMode ? "Auto mode is off! Chosen is dark mode." : "Auto mode is off! Chosen is light mode.";
    });

    themeButton.addEventListener("click", () => {
        if (themeDiv) {
            autoThemeCheckbox.disabled = !autoThemeCheckbox.disabled;
            if (autoThemeCheckbox.disabled) {
                themeButton.textContent = "On";
                changeAutoModeMessage.textContent = 'Theme mode is off. You can select light mode in checkbox!'
                statusText.textContent = "Turn on";
                themeButton.classList.remove('original-class');
                themeButton.classList.add('new-class');
                changeManually.classList.remove('noneDisplay')
                autoMode.classList.add('noneDisplay');;
                toggleButton.classList.add("noneDisplay");
                autoThemeCheckbox.checked = true;
                setThemePreference(true);
                clearInterval(autoChangeInterval);
                toggleLightModeCheckbox.checked = false;
                console.log('Disable Auto Theme');
            } else {
                // Code for enabling auto mode
                themeButton.textContent = "Off";
                statusText.textContent = "Turn off";
                themeButton.classList.add('original-class');
                themeButton.classList.remove('new-class');
                changeManually.classList.add('noneDisplay');
                autoMode.classList.remove('noneDisplay');
                handleCheckboxChange();
                setThemePreference(false);
                autoThemeCheckbox.disabled = false;
                console.log('Enable Auto Theme');
            }
        }
    });

    toggleLightModeCheckbox.addEventListener('change', function () {
        const isLightMode = !this.checked;
        this.nextElementSibling.textContent = isLightMode ? 'Enable Light Mode' : 'Disable Light Mode';
        changeAutoModeMessage.textContent = isLightMode ? 'Theme mode is off. You can select light mode in checkbox!' : 'Theme mode is off. You have chosen light mode!';
        setThemePreference(isLightMode);
    });

    // Save settings in localStorage before the page is unloaded or refreshed
    window.addEventListener('beforeunload', function () {
        localStorage.setItem("autoThemeEnabled", autoThemeCheckbox.checked ? "true" : "false");
        localStorage.setItem("theme", body.classList.contains("light-mode") ? "dark" : "light");
    });
}); */



////////////////////////////////////////////////////////////////////////
//


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

