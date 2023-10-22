// Početni jezik
let currentLanguage = 'en';

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
    const sectionsData = [
        {
            // SECTION 1 CONTAINER
            selector: '.section1',
            h33: translations.h3.container,
            elementsDescriptions: [

                translations.p.containerP2,
            ],
        },
        {
            // SECTION 2 GRID
            selector: '.section2',
            h33: translations.h3.grid,
            elementsDescriptions: [
                translations.p.gridP1,
                translations.p.gridP2,
            ],
        },
        {
            // SECTION 3 FLEX 
            selector: '.section3',
            h33: translations.h3.flex,
            elementsDescriptions: [
                translations.p.flexP1,
                translations.p.flexP2,
            ],
        },
        {
            // SECTION 4 TYPOGRAPHY 
            selector: '.section4',
            h33: translations.h3.typography,
            h44: [
                translations.h4.typographyS1,
            ],
            elementsDescriptions: [
                translations.p.typographyP1,
                translations.p.typographyP2,
                translations.p.typographyP3,
            ],
        },
        {
            // SECTION 5 HYPERLINKS
            selector: '.section5',
            h33: translations.h3.link,
            elementsDescriptions: [
                translations.p.linkP1,
                translations.p.linkP2,
            ],
        },
        {
            // SECTION 6 LISTS 
            selector: '.section6',
            h33: translations.h3.list,
            elementsDescriptions: [
                translations.p.listP1,
                translations.p.listP2,
            ],
        },
        {
            // SECTION 7 BUTTONS 
            selector: '.section7',
            h33: translations.h3.button,
            h44: [
                translations.h4.buttonS1,
                translations.h4.buttonS2,
            ],
            elementsDescriptions: [
                translations.p.buttonP1,
                translations.p.buttonP2,
                translations.p.buttonP3,
            ],
        },
        {
            // SECTION 8 IMAGES 
            selector: '.section8',
            h33: translations.h3.image,
            elementsDescriptions: [
                translations.p.imageP1,
                translations.p.imageP2,
                translations.p.imageP3,
            ],
        },
        {
            // SECTION 9 ICONS 
            selector: '.section9',
            h33: translations.h3.icon,
            h44: [
                translations.h4.iconS1,
                translations.h4.iconS2,
            ],
            elementsDescriptions: [
                translations.p.iconP1,
                translations.p.iconP2,
            ],
        },
        {
            // SECTION 10 DISPLAY 
            selector: '.section10',
            h33: translations.h3.display,
            h44: [
                translations.h4.displayS1,
            ],
            elementsDescriptions: [
                translations.p.displayP1,
            ],
        },
        {
            // SECTION 11 POSITION 
            selector: '.section11',
            h33: translations.h3.position,
            h44: [
                translations.h4.positionS1,
            ],
            elementsDescriptions: [
                translations.p.positionP1,
            ],
        },
        {
            // SECTION 12 MARGINS 
            selector: '.section12',
            h33: translations.h3.margin,
            h44: [
                translations.h4.marginS1,
            ],
            elementsDescriptions: [
                translations.p.marginP1,
            ],
        },
        {
            // SECTION 13 PADDINGS 
            selector: '.section13',
            h33: translations.h3.padding,
            h44: [
                translations.h4.paddingS1,
            ],
            elementsDescriptions: [
                translations.p.paddingP1,
            ],
        },
        {
            // SECTION 14 INTERSECTIONS 
            selector: '.section14',
            h33: translations.h3.intersection,
            h44: [
                translations.h4.intersectionS1,
            ],
            elementsDescriptions: [
                translations.p.intersectionP1,
            ],
        },
        {
            // SECTION 15 CURSOR 
            selector: '.section15',
            h33: translations.h3.cursor,
            h44: [
                translations.h4.cursorS1,
            ],
            elementsDescriptions: [
                translations.p.cursorP1,
            ],
        },
    ];


    // Iteriramo kroz podatke sekcija i postavljamo sadržaj
    sectionsData.forEach(sectionData => {
        const section = document.querySelector(sectionData.selector);

        // Postavljanje h3 sadržaja
        section.querySelector('.h33').textContent = sectionData.h33;

        const handSpan = '<span class="hand">&#9755;</span> ';

        // Postavljanje sadržaja za p elemente
        const descriptionElements = section.querySelectorAll('.elements-description');
        sectionData.elementsDescriptions.forEach((description, index) => {
            descriptionElements[index].innerHTML = handSpan + description;
        });

        // Postavljanje sadržaja za h4 elemente (ako postoje)
        const h44Elements = section.querySelectorAll('.h44');
        if (Array.isArray(sectionData.h44) && sectionData.h44.length > 0) {
            sectionData.h44.forEach((h44, index) => {
                h44Elements[index].innerHTML = h44;
            });
        }
    });

}


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
        // Hide the buttons if they are visible
        languageBox.classList.add("noneDisplay");
    }
});


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


const languageButtons = document.querySelectorAll('.changeLanguageButton');
languageButtons.forEach(button => {
    button.addEventListener('click', function () {
        const newLanguage = button.getAttribute('data-language');
        currentLanguage = newLanguage;

        // Dodaj klasu za animaciju na h3, h4 i p tagove
        tags = document.querySelectorAll('.h33, .h44, .elements-description');
        tags.forEach(tag => {
            tag.classList.add("tag-animation");
        });

        // Tekst na osnovu izabranog jezika
        setLanguageText(currentLanguage);

        // Postavite tajmer za promenu jezika nakon završetka animacije
        setTimeout(() => {
            // Postavite kod za promenu jezika i učitavanje prevoda
            loadTranslations(currentLanguage);

            // Uklonite klasu za animaciju i prikažite tagove
            tags.forEach(tag => {
                tag.classList.remove("tag-animation");
            });
        }, 200); // Promenite 500 na odgovarajući broj milisekundi za trajanje animacije
    });
});


// Inicijalno učitaj prevode za trenutni jezik
loadTranslations(currentLanguage);

