// Proverite da li postoji sačuvani jezik u localStorage
const savedLanguage = localStorage.getItem('selectedLanguage');

// Inicijalno postavite trenutni jezik na "sr" ako nije sačuvan
let currentLanguage = savedLanguage || 'sr';

// Funkcija za učitavanje prevoda za odabrani jezik
function loadTranslations(language) {
    // Koristimo backticks (`) za dinamičko kreiranje putanje do JSON fajla na osnovu jezika
    fetch(`translations-${language}.json`)
        .then(response => response.json())
        .then(data => {
            // Poziv funkcije za postavljanje prevoda
            setTranslations(data);
        })
        .catch(error => console.error('Greška pri preuzimanju prevoda:', error));
}

function setTranslations(translations) {
    const allTextElements = document.querySelectorAll('[data-translation-key]');
    const handSpan = '<span class="hand">&#9755;</span> ';
    const descriptionElements = document.querySelectorAll('.elements-description');
    // Iterirajte kroz sve objekte u nizu
    translations.forEach(translationObj => {
        allTextElements.forEach(element => {
            const key = element.getAttribute('data-translation-key');
            // Proverite da li prevod postoji u trenutnom objektu
            if (translationObj[key]) {
                element.innerHTML = translationObj[key];
            }
        });
    });
    descriptionElements.forEach(element => {
        element.innerHTML = handSpan + element.innerHTML;
    });
}


// Funkcija za postavljanje teksta u zavisnosti od jezika
function setLanguageText(language) {
    const languageText = document.getElementById("language");
    const srButton = document.getElementById("srButton");
    const enButton = document.getElementById("enButton");
    const ruButton = document.getElementById("ruButton");

    if (language === 'en') {
        languageText.textContent = 'English';
        srButton.classList.add('noneDisplay');
        enButton.classList.remove('noneDisplay');
        ruButton.classList.remove('noneDisplay');
    } else if (language === 'sr') {
        languageText.textContent = 'Srpski';
        srButton.classList.remove('noneDisplay');
        ruButton.classList.remove('noneDisplay');
        enButton.classList.add('noneDisplay');
    } else if (language === 'ru') {
        languageText.textContent = 'Русский';
        srButton.classList.remove('noneDisplay');
        enButton.classList.remove('noneDisplay');
        ruButton.classList.add('noneDisplay');
    }
}

// Pozovite funkciju da postavite početni tekst
setLanguageText(currentLanguage);

// Funkcija za promenu jezika
const changeLanguage = (newLanguage) => {
    currentLanguage = newLanguage;

    // Sačuvajte trenutni jezik u localStorage
    localStorage.setItem('selectedLanguage', currentLanguage);

    // Ažurirajte prikaz jezika
    setLanguageText(currentLanguage);

    // Uklonite klasu za animaciju
    tags = document.querySelectorAll('.h33, .h44, .elements-description');
    tags.forEach(tag => {
        tag.classList.remove("tag-animation");
    });

    // Postavite tajmer za promenu jezika nakon završetka animacije
    setTimeout(() => {
        // Postavite kod za promenu jezika i učitavanje prevoda
        loadTranslations(currentLanguage);

        // Uklonite klasu za animaciju i prikažite tagove
        tags.forEach(tag => {
            tag.classList.remove("tag-animation");
        });
    }, 200); // Promenite 500 na odgovarajući broj milisekundi za trajanje animacije
};

// Učitajte prevode za trenutni jezik
loadTranslations(currentLanguage);

const languageBox = document.querySelector(".language");
const languageText = document.getElementById("language");
const chooseLanguage = document.getElementById("chooseLanguage");

function toggleButtons() {
    languageBox.classList.toggle("noneDisplay");
}

chooseLanguage.addEventListener("click", toggleButtons);
languageText.addEventListener("click", toggleButtons);

document.body.addEventListener("click", (event) => {
    if (
        event.target !== languageText &&
        event.target !== chooseLanguage &&
        event.target !== languageBox
    ) {
        // Sakrijte dugmad ako su vidljiva
        languageBox.classList.add("noneDisplay");
    }
});

const languageButtons = document.querySelectorAll('.changeLanguageButton');
languageButtons.forEach(button => {
    button.addEventListener('click', function () {
        const newLanguage = button.getAttribute('data-language');
        changeLanguage(newLanguage);
    });
});
