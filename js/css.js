function insertCSSRules(sectionName, ruleContainer, cssRules) {
    // const sectionRule = document.getElementById(sectionName);

    cssRules.forEach(item => {
        const li = document.createElement('li');
        if (item.type === 'empty') {
            // Add an empty line
            li.innerHTML = '';
        } else {
            li.innerHTML = `<span class="${item.type}">${item.text || ''}</span>`;
        }
        ruleContainer.appendChild(li);
    });
}


/////////////////////////////////////////////////////////////
// === cssCONTAINER
const cssCONTAINER = [
    { type: 'comment', text: '/* 120px * 10px = 1200px */' },
    { type: 'selector', text: '.container {' },
    { type: 'property', text: 'width: <span class="propertyColor">80%</span>;' },
    { type: 'property', text: 'max-width: <span class="propertyColor">120em</span>;' },
    { type: 'property', text: 'margin: <span class="propertyColor">0 auto</span>;' },
    { type: 'end selector', text: '}' }
];


/////////////////////////////////////////////////////////////
// === cssGRID
const cssGRID = [
    { type: 'selector', text: '.grid {' },
    { type: 'property', text: 'display: <span class="propertyColor">grid</span>;' },
    { type: 'end selector', text: '}' }
];


/////////////////////////////////////////////////////////////
// === cssFLEX
const cssFLEX = [
    { type: 'selector', text: '.flex {' },
    { type: 'property', text: 'display: <span class="propertyColor">flex</span>;' },
    { type: 'end selector', text: '}' }
];


/////////////////////////////////////////////////////////////
// === cssTYPOGRAPHY
const cssTYPOGRAPHY = [
    { type: 'selector', text: '.h1 .h2 .h3 {' }, // Update the class name and content as needed
    { type: 'property', text: 'font-size: <span class="propertyColor">xxrem</span>;' }, // Update the property value
    { type: 'end selector', text: '}' }
];


/////////////////////////////////////////////////////////////
// === cssHYPERLINKS
const cssHYPERLINKS = [
    { type: 'selector', text: '.link:link,' },
    { type: 'selector', text: '.link:visited {' },
    { type: 'property', text: 'display: <span class="propertyColor">inline-block</span>;' },
    { type: 'property', text: 'color: <span class="propertyColor">#e67e22</span>;' },
    { type: 'property', text: 'text-decoration: <span class="propertyColor">none</span>;' },
    { type: 'property', text: 'transition: <span class="propertyColor">all 0.3s</span>;' },
    { type: 'property', text: 'border-bottom: <span class="propertyColor">2px solid transparent</span>;' },
    { type: 'end selector', text: '}' },
    {},
    { type: 'selector', text: '.link:hover,' },
    { type: 'selector', text: '.link:active {' },
    { type: 'property', text: 'color: <span class="propertyColor">#ff9f4b</span>;' },
    { type: 'property', text: 'border-bottom: <span class="propertyColor">2px solid currentColor</span>;' },
    { type: 'end selector', text: '}' }
];


/////////////////////////////////////////////////////////////
// === cssLISTS
const cssLISTS = [
    { type: 'selector', text: '.list {' },
    { type: 'property', text: 'display: <span class="propertyColor">flex</span>;' },
    { type: 'property', text: 'flex-direction: <span class="propertyColor">column</span>;' },
    { type: 'property', text: 'list-style: <span class="propertyColor">none</span>;' },
    { type: 'property', text: 'gap: <span class="propertyColor">1.6rem</span>;' },
    { type: 'selector', text: '}' },
    {}, // An empty item
    { type: 'selector', text: '.list-item {' },
    { type: 'property', text: 'font-size: <span class="propertyColor">1.8rem</span>;' },
    { type: 'property', text: 'display: <span class="propertyColor">none</span>;' },
    { type: 'property', text: 'align-items: <span class="propertyColor">center</span>;' },
    { type: 'property', text: 'gap: <span class="propertyColor">1.6rem</span>;' },
    { type: 'property', text: 'line-height: <span class="propertyColor">1.2</span>;' },
    { type: 'selector', text: '}' },
];


/////////////////////////////////////////////////////////////
// === cssBUTTONS
const cssBUTTONS = [
    { type: 'selector', text: '.btn {' },
    { type: 'property', text: 'display: <span class="propertyColor">inline-block</span>;' },
    { type: 'property', text: 'margin: <span class="propertyColor">0.4rem 0</span>;' },
    { type: 'property', text: 'padding: <span class="propertyColor">1.6rem 3rem 1.4rem</span>;' },
    { type: 'property', text: 'font-size: <span class="propertyColor">1.2rem</span>;' },
    { type: 'property', text: 'text-align: <span class="propertyColor">center</span>;' },
    { type: 'property', text: 'font-weight: <span class="propertyColor">500</span>;' },
    { type: 'property', text: 'text-decoration: <span class="propertyColor">none</span>;' },
    { type: 'property', text: 'letter-spacing: <span class="propertyColor">1px</span>;' },
    { type: 'property', text: 'text-transform: <span class="propertyColor">uppercase</span>;' },
    { type: 'property', text: 'border: <span class="propertyColor">none</span>;' },
    { type: 'property', text: 'border-radius: <span class="propertyColor">10px</span>;' },
    { type: 'property', text: 'transition-duration: <span class="propertyColor">0.4s</span>;' },
    { type: 'property', text: 'cursor: <span class="propertyColor">pointer</span>;' },
    { type: 'selector', text: '}' },
];
/* colorBUTTONS */
const colorBUTTONS = [
    { type: 'comment', text: '/* color button */' },
    { type: 'selector', text: '.btn-full {' },
    { type: 'property', text: 'background-color: <span class="propertyColor">#555555</span>;' },
    { type: 'property', text: 'color: <span class="propertyColor">#fff</span>;' },
    { type: 'property', text: 'border: <span class="propertyColor">1px solid transparent</span>;' },
    { type: 'selector', text: '}' },
    { type: 'empty' },
    { type: 'selector', text: '.btn-full:hover {' },
    { type: 'property', text: 'background-color: <span class="propertyColor">#fff</span>;' },
    { type: 'property', text: 'color: <span class="propertyColor">#000</span>;' },
    { type: 'property', text: 'border: <span class="propertyColor">1px solid #555555</span>;' },
    { type: 'selector', text: '}' },
];
/* ghostBUTTONS */
const ghostBUTTONS = [
    { type: 'comment', text: '/* transparent button */' },
    { type: 'selector', text: '.btn-ghost {' },
    { type: 'property', text: 'background-color: <span class="propertyColor">transparent</span>;' },
    { type: 'property', text: 'color: <span class="propertyColor">#000</span>;' },
    { type: 'property', text: 'border: <span class="propertyColor">1px solid #555555</span>;' },
    { type: 'selector', text: '}' },
    { type: 'empty' },
    { type: 'selector', text: '.btn-ghost:hover {' },
    { type: 'property', text: 'background-color: <span class="propertyColor">#555555</span>;' },
    { type: 'property', text: 'color: <span class="propertyColor">#fff</span>;' },
    { type: 'property', text: 'border: <span class="propertyColor">1px solid transparent</span>;' },
    { type: 'selector', text: '}' },
];


// Example usage for different sections
insertCSSRules('containerRule', containerRule, cssCONTAINER);
insertCSSRules('gridRule', gridRule, cssGRID);
insertCSSRules('flexRule', flexRule, cssFLEX);
insertCSSRules('typeRule', typeRule, cssTYPOGRAPHY);
insertCSSRules('linkRule', linkRule, cssHYPERLINKS);
insertCSSRules('listRule', listRule, cssLISTS);
insertCSSRules('btnRule', btnRule, cssBUTTONS);
insertCSSRules('btnColorRule', btnColorRule, colorBUTTONS);
insertCSSRules('btnTranRule', btnTranRule, ghostBUTTONS);
// Insert rules for other sections as needed

