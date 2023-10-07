///////////////////////////////////////////////////////////
// Copy text and remove alert div tag
function copyCssRule(id) {
    const ruleToCopy = document.getElementById(id);
    const textToCopy = getTextFromUL(ruleToCopy);
    copyToClipboard(textToCopy);
}

function getTextFromUL(element) {
    let text = '';
    const listItems = element.querySelectorAll('li');
    listItems.forEach(li => {
        text += li.textContent + '\n';
    });
    return text;
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    // alert('CSS rule copied to clipboard');
    console.log("Copied to clipboard");

    const alertDiv = document.createElement('div');
    alertDiv.textContent = 'Copy to clipboard';
    alertDiv.style.backgroundColor = '#981b1e';
    alertDiv.style.color = '#fff';
    alertDiv.style.fontSize = 'medium';
    alertDiv.style.textAlign = 'center';
    alertDiv.style.padding = '10px';
    alertDiv.style.position = 'fixed';
    alertDiv.style.width = '200px';
    alertDiv.style.margin = 'auto';
    alertDiv.style.top = '10px';
    alertDiv.style.left = '0px';
    alertDiv.style.right = '0px';
    alertDiv.style.zIndex = '100';
    alertDiv.style.transition = "all 500ms";

    document.body.appendChild(alertDiv);

    setTimeout(() => {
        alertDiv.style.opacity = '0';
    }, 2500);

    setTimeout(() => {
        document.body.removeChild(alertDiv);
    }, 3000);
}


///////////////////////////////////////////////////////////
// Mouse eventon button and change copy text when click
const buttons = document.querySelectorAll(".copyButton");
let timeoutIdA;
let timeoutIdB;

buttons.forEach((button, index) => {
    button.addEventListener("mouseenter", () => {
        button.classList.add("copyButtonActive");
    });

    button.addEventListener("mouseleave", () => {
        button.classList.remove("copyButtonActive");
    });

    button.addEventListener("click", () => {
        // Clear any existing timeout
        clearTimeout(timeoutIdA, timeoutIdB);

        // Reset the state of all buttons
        buttons.forEach((btn, i) => {
            btn.textContent = "Copy code";
            btn.classList.remove('copyButtonNo');
            btn.classList.remove('copyButtonOk');
            btn.disabled = false;
        });

        button.classList.remove("copyButtonActive");
        button.classList.add('copyButtonOk');
        button.textContent = "OK!";
        button.disabled = true;

        /* timeoutIdA = setTimeout(() => {
            button.textContent = "Copied code!";
            button.classList.add('copyButtonNo');
            button.classList.remove('copyButtonOk');
        }, 2500); */

        timeoutIdB = setTimeout(() => {
            button.textContent = "Copy code";
            // button.classList.remove('copyButtonNo');
            button.classList.remove('copyButtonOk');
            button.disabled = false;
        }, 2500);
    });
});









