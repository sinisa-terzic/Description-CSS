const h2FontSizeSlider = document.getElementById("h2-font-size-slider");
const h2CurrentFontSize = document.getElementById("current-h2-font-size");
const h3FontSizeSlider = document.getElementById("h3-font-size-slider");
const h3CurrentFontSize = document.getElementById("current-h3-font-size");
const pFontSizeSlider = document.getElementById("p-font-size-slider");
const pCurrentFontSize = document.getElementById("current-p-font-size");

// Font size controls for .list-item elements
const listItemFontSizeSlider = document.getElementById("list-item-font-size-slider");
const listItemCurrentFontSize = document.getElementById("current-list-item-font-size");

// Initial font size values
const initialH2FontSize = "2vw";      // Updated initial value
const initialH3FontSize = "1.5vw";    // Updated initial value
const initialPFontSize = "0.9vw";        // Updated initial value
const initialListItemFontSize = "18px"; // Updated initial value

// Function to update font size based on slider value
function updateFontSize() {
    const h2NewSize = h2FontSizeSlider.value + "vw"; // Added "vw" unit
    const h3NewSize = h3FontSizeSlider.value + "vw"; // Added "vw" unit
    const pNewSize = pFontSizeSlider.value + "vw";   // Added "vw" unit
    const listItemNewSize = listItemFontSizeSlider.value + "px"; // Added "px" unit

    // Update the font size for <h2> elements
    const h2Elements = document.querySelectorAll("h2");
    h2Elements.forEach((element) => {
        element.style.fontSize = h2NewSize;
    });
    h2CurrentFontSize.textContent = "Font Size: " + h2NewSize;

    // Update the font size for <h3> elements
    const h3Elements = document.querySelectorAll("h3");
    h3Elements.forEach((element) => {
        element.style.fontSize = h3NewSize;
    });
    h3CurrentFontSize.textContent = "Font Size: " + h3NewSize;

    // Update the font size for .elements-description elements
    const pElements = document.querySelectorAll(".elements-description");
    pElements.forEach((element) => {
        element.style.fontSize = pNewSize;
    });
    pCurrentFontSize.textContent = "Font Size: " + pNewSize;

    // Update the font size for .list-item elements
    const listItemElements = document.querySelectorAll(".list-item");
    listItemElements.forEach((element) => {
        element.style.fontSize = listItemNewSize;
    });
    listItemCurrentFontSize.textContent = "Font Size: " + listItemNewSize;
}

// Set initial font size values
h2FontSizeSlider.value = initialH2FontSize.replace("vw", "");      // Updated initial value
h3FontSizeSlider.value = initialH3FontSize.replace("vw", "");    // Updated initial value
pFontSizeSlider.value = initialPFontSize.replace("vw", "");        // Updated initial value
listItemFontSizeSlider.value = parseInt(initialListItemFontSize); // Updated initial value

// Initial font size update for all elements
updateFontSize();

// Attach "input" event listeners to the sliders
h2FontSizeSlider.addEventListener("input", updateFontSize);
h3FontSizeSlider.addEventListener("input", updateFontSize);
pFontSizeSlider.addEventListener("input", updateFontSize);
listItemFontSizeSlider.addEventListener("input", updateFontSize);

// Decrease font size buttons click handlers
document.getElementById("decrease-h2-font").addEventListener("click", () => {
    h2FontSizeSlider.stepDown();
    updateFontSize();
});
document.getElementById("decrease-h3-font").addEventListener("click", () => {
    h3FontSizeSlider.stepDown();
    updateFontSize();
});
document.getElementById("decrease-p-font").addEventListener("click", () => {
    pFontSizeSlider.stepDown();
    updateFontSize();
});
document.getElementById("decrease-list-item-font").addEventListener("click", () => {
    listItemFontSizeSlider.stepDown();
    updateFontSize();
});

// Increase font size buttons click handlers
document.getElementById("increase-h2-font").addEventListener("click", () => {
    h2FontSizeSlider.stepUp();
    updateFontSize();
});
document.getElementById("increase-h3-font").addEventListener("click", () => {
    h3FontSizeSlider.stepUp();
    updateFontSize();
});
document.getElementById("increase-p-font").addEventListener("click", () => {
    pFontSizeSlider.stepUp();
    updateFontSize();
});
document.getElementById("increase-list-item-font").addEventListener("click", () => {
    listItemFontSizeSlider.stepUp();
    updateFontSize();
});

// Reset button click handler
document.getElementById("reset-font-sizes").addEventListener("click", () => {
    // Reset font sizes to their initial values
    h2FontSizeSlider.value = initialH2FontSize.replace("vw", "");      // Updated initial value
    h3FontSizeSlider.value = initialH3FontSize.replace("vw", "");    // Updated initial value
    pFontSizeSlider.value = initialPFontSize.replace("vw", "");        // Updated initial value
    listItemFontSizeSlider.value = parseInt(initialListItemFontSize); // Updated initial value

    // Update the font sizes accordingly
    updateFontSize();
});
