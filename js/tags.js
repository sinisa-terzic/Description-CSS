///////////////////////////////////////////////
// NAZIVI TAGOVA
const openNameTag = '<span class="tag">';
const openAttributesTag = '<span class="attributes">';
const closeAttributesTag = '<span class="attributes">"</span>';
const AttributeValue = '<span class="attributes-value">';
const closeTag = '</span>';
const _CLASS = 'class="';
const _ID = 'id="';

const lessThan = "&lt;"; /*= < =*/
const greaterThan = "&gt;"; /*= > =*/
const lessThanSlash = "&lt;&#47;"; /*= </ =*/
const greaterThanSlash = "&#47;&gt;"; /*= /> =*/

// comment
const openComments = '<span class="comment">' + lessThan;
const closeComments = greaterThan + closeTag;

const openComment = document.querySelectorAll(".open-comment");
openComment.forEach(openComment => {
    openComment.outerHTML = openComments + '!-- CSS Style --' + closeComments;
});


// div
const div = "div";
const id_container = "id-container";
const classContainer = "container";
const classGrid = "grid";
const classFlex = "flex";

const openDiv = document.querySelectorAll(".openDiv");
openDiv.forEach(openDiv => {
    openDiv.outerHTML = lessThan + openNameTag + div + closeTag + ' ' + openAttributesTag + _ID + closeTag + AttributeValue + id_container + closeTag + closeAttributesTag + openAttributesTag + ' ' + _CLASS + closeTag + AttributeValue + classContainer + closeTag + closeAttributesTag + greaterThan;
});
/* container */
const openDivContainer = document.querySelectorAll(".openDivContainer");
openDivContainer.forEach(openDivContainer => {
    openDivContainer.outerHTML = lessThan + openNameTag + div + closeTag + ' ' + openAttributesTag + _ID + closeTag + AttributeValue + id_container + closeTag + closeAttributesTag + openAttributesTag + ' ' + _CLASS + closeTag + AttributeValue + classContainer + closeTag + closeAttributesTag + greaterThan;
});
/* grid */
const openDivGrid = document.querySelectorAll(".openDivGrid");
openDivGrid.forEach(openDivGrid => {
    openDivGrid.outerHTML = lessThan + openNameTag + div + closeTag + ' ' + openAttributesTag + _CLASS + closeTag + AttributeValue + classGrid + closeTag + closeAttributesTag + greaterThan;
});
/* flex */
const openDivFlex = document.querySelectorAll(".openDivFlex");
openDivFlex.forEach(openDivFlex => {
    openDivFlex.outerHTML = lessThan + openNameTag + div + closeTag + ' ' + openAttributesTag + _CLASS + closeTag + AttributeValue + classFlex + closeTag + closeAttributesTag + greaterThan;
});

const closeDiv = document.querySelectorAll(".closeDiv");
closeDiv.forEach(closeDiv => {
    closeDiv.outerHTML = lessThanSlash + openNameTag + div + closeTag + greaterThan;
});


// span
const span = "span";

const openSpan = document.querySelectorAll(".openSpan");
openSpan.forEach(openSpan => {
    openSpan.outerHTML = lessThan + openNameTag + span + closeTag + ' ' + openAttributesTag + _CLASS + closeTag + AttributeValue + 'add-class' + closeTag + closeAttributesTag + greaterThan;
});
const closeSpan = document.querySelectorAll(".closeSpan");
closeSpan.forEach(closeSpan => {
    closeSpan.outerHTML = lessThanSlash + openNameTag + span + closeTag + greaterThan;
});


// Heading
const heading1 = "h1";
const heading2 = "h2";
const heading3 = "h3";
const classHeading1 = "h1";
const classHeading2 = "h2";
const classHeading3 = "h3";
/* h1 */
const openHeading1 = document.querySelectorAll(".openHeading1");
openHeading1.forEach(openHeading1 => {
    openHeading1.outerHTML = lessThan + openNameTag + heading1 + closeTag + ' ' + openAttributesTag + _CLASS + closeTag + AttributeValue + classHeading1 + closeTag + closeAttributesTag + greaterThan;
});
const closeHeading1 = document.querySelectorAll(".closeHeading1");
closeHeading1.forEach(closeHeading1 => {
    closeHeading1.outerHTML = lessThanSlash + openNameTag + heading1 + closeTag + greaterThan;
});
/* h2 */
const openHeading2 = document.querySelectorAll(".openHeading2");
openHeading2.forEach(openHeading2 => {
    openHeading2.outerHTML = lessThan + openNameTag + heading2 + closeTag + ' ' + openAttributesTag + _CLASS + closeTag + AttributeValue + classHeading2 + closeTag + closeAttributesTag + greaterThan;
});
const closeHeading2 = document.querySelectorAll(".closeHeading2");
closeHeading2.forEach(closeHeading2 => {
    closeHeading2.outerHTML = lessThanSlash + openNameTag + heading2 + closeTag + greaterThan;
});
/* h3 */
const openHeading3 = document.querySelectorAll(".openHeading3");
openHeading3.forEach(openHeading3 => {
    openHeading3.outerHTML = lessThan + openNameTag + heading3 + closeTag + ' ' + openAttributesTag + _CLASS + closeTag + AttributeValue + classHeading3 + closeTag + closeAttributesTag + greaterThan;
});
const closeHeading3 = document.querySelectorAll(".closeHeading3");
closeHeading3.forEach(closeHeading3 => {
    closeHeading3.outerHTML = lessThanSlash + openNameTag + heading3 + closeTag + greaterThan;
});


// Paragraphs
const paragraph = "p";
const classParagraphsSm = "p-sm";
const classParagraphs = "p";
const classParagraphsLg = "p-bg";
/* p-sm */
const openParagraphsSm = document.querySelectorAll(".openParagraphsSm");
openParagraphsSm.forEach(openParagraphsSm => {
    openParagraphsSm.outerHTML = lessThan + openNameTag + paragraph + closeTag + ' ' + openAttributesTag + _CLASS + closeTag + AttributeValue + classParagraphsSm + closeTag + closeAttributesTag + greaterThan;
});
/* p */
const openParagraphs = document.querySelectorAll(".openParagraphs");
openParagraphs.forEach(openParagraphs => {
    openParagraphs.outerHTML = lessThan + openNameTag + paragraph + closeTag + ' ' + openAttributesTag + _CLASS + closeTag + AttributeValue + classParagraphs + closeTag + closeAttributesTag + greaterThan;
});
/* p-lg */
const openParagraphsLg = document.querySelectorAll(".openParagraphsLg");
openParagraphsLg.forEach(openParagraphsLg => {
    openParagraphsLg.outerHTML = lessThan + openNameTag + paragraph + closeTag + ' ' + openAttributesTag + _CLASS + closeTag + AttributeValue + classParagraphsLg + closeTag + closeAttributesTag + greaterThan;
});
const closeParagraphs = document.querySelectorAll(".closeParagraphs");
closeParagraphs.forEach(closeParagraphs => {
    closeParagraphs.outerHTML = lessThanSlash + openNameTag + paragraph + closeTag + greaterThan;
});


// image
const img = "img";
const classImg = "img";

const image = document.querySelectorAll(".tagImg");
image.forEach(image => {
    image.outerHTML = lessThan + openNameTag + img + closeTag + ' ' + openAttributesTag + _CLASS + closeTag + AttributeValue + classImg + closeTag + closeAttributesTag + openAttributesTag + ' ' + 'src="' + closeTag + AttributeValue + 'path_img.png' + closeTag + closeAttributesTag + openAttributesTag + ' ' + 'alt="' + closeTag + AttributeValue + 'description image' + closeTag + closeAttributesTag + ' ' + greaterThanSlash;
});


// hyperlinks
const hyperlinks = "a";
const classlinks = "link";
const _HREF = 'href="';

const openA = document.querySelectorAll(".openA");
openA.forEach(openA => {
    openA.outerHTML = lessThan + openNameTag + hyperlinks + closeTag + ' ' + openAttributesTag + _CLASS + closeTag + AttributeValue + classlinks + closeTag + closeAttributesTag + openAttributesTag + ' ' + _HREF + closeTag + AttributeValue + 'path-to-link' + closeTag + closeAttributesTag + greaterThan;
});
const closeA = document.querySelectorAll(".closeA");
closeA.forEach(closeA => {
    closeA.outerHTML = lessThanSlash + openNameTag + hyperlinks + closeTag + greaterThan;
});


// button
const btn = "button";
const classBtn = "btn";
const classColorBtn = "btn-full";
const classTranBtn = "btn-ghost";

/* button of a tag */
const commentBtnA = document.querySelector(".commentBtnA"); /* comment */
commentBtnA.outerHTML = openComments + '!-- style a tag like button --' + closeComments;

const openBtnA = document.querySelectorAll(".openBtnA");
openBtnA.forEach(openBtnA => {
    openBtnA.outerHTML = lessThan + openNameTag + hyperlinks + closeTag + ' ' + openAttributesTag + _CLASS + closeTag + AttributeValue + classBtn + closeTag + closeAttributesTag + openAttributesTag + ' ' + _HREF + closeTag + AttributeValue + 'path-to-link' + closeTag + closeAttributesTag + greaterThan;
});
const closeBtnA = document.querySelectorAll(".closeBtnA");
closeBtnA.forEach(closeBtnA => {
    closeBtnA.outerHTML = lessThanSlash + openNameTag + hyperlinks + closeTag + greaterThan;
});

/* color button of a tag */
const commentColorBtnA = document.querySelector(".commentColorBtnA"); /* comment */
commentColorBtnA.outerHTML = openComments + '!-- style a tag like color button --' + closeComments;

const openColorBtnA = document.querySelectorAll(".openColorBtnA");
openColorBtnA.forEach(openColorBtnA => {
    openColorBtnA.outerHTML = lessThan + openNameTag + hyperlinks + closeTag + ' ' + openAttributesTag + _CLASS + closeTag + AttributeValue + classBtn + ' ' + classColorBtn + closeTag + closeAttributesTag + openAttributesTag + ' ' + _HREF + closeTag + AttributeValue + 'path-to-link' + closeTag + closeAttributesTag + greaterThan;
});
const closeColorBtnA = document.querySelectorAll(".closeColorBtnA");
closeColorBtnA.forEach(closeColorBtnA => {
    closeColorBtnA.outerHTML = lessThanSlash + openNameTag + hyperlinks + closeTag + greaterThan;
});

/* transparent button of a tag */
const commentTranBtnA = document.querySelector(".commentTranBtnA"); /* comment */
commentTranBtnA.outerHTML = openComments + '!-- style a tag like transparent button --' + closeComments;

const openTranBtnA = document.querySelectorAll(".openTranBtnA");
openTranBtnA.forEach(openTranBtnA => {
    openTranBtnA.outerHTML = lessThan + openNameTag + hyperlinks + closeTag + ' ' + openAttributesTag + _CLASS + closeTag + AttributeValue + classBtn + ' ' + classTranBtn + closeTag + closeAttributesTag + openAttributesTag + ' ' + _HREF + closeTag + AttributeValue + 'path-to-link' + closeTag + closeAttributesTag + greaterThan;
});
const closeTranBtnA = document.querySelectorAll(".closeTranBtnA");
closeTranBtnA.forEach(closeTranBtnA => {
    closeTranBtnA.outerHTML = lessThanSlash + openNameTag + hyperlinks + closeTag + greaterThan;
});

/* button of tag */
const commentBtn = document.querySelector(".commentBtn"); /* comment */
commentBtn.outerHTML = openComments + '!-- style button --' + closeComments;

const openBtn = document.querySelectorAll(".openBtn");
openBtn.forEach(openBtn => {
    openBtn.outerHTML = lessThan + openNameTag + btn + closeTag + ' ' + openAttributesTag + _CLASS + closeTag + AttributeValue + classBtn + closeTag + closeAttributesTag + greaterThan;
});

const closeBtn = document.querySelectorAll(".closeBtn");
closeBtn.forEach(closeBtn => {
    closeBtn.outerHTML = lessThanSlash + openNameTag + btn + closeTag + greaterThan;
});


// unordered list
const ul = "ul";
const li = "li";

const openUl = document.querySelectorAll(".openUl");
const classUl = "list";
const classLi = "list-item";

openUl.forEach(openUl => {
    openUl.outerHTML = lessThan + openNameTag + ul + closeTag + ' ' + openAttributesTag + _CLASS + closeTag + AttributeValue + classUl + closeTag + closeAttributesTag + greaterThan;
});
const closeUl = document.querySelectorAll(".closeUl");
closeUl.forEach(closeUl => {
    closeUl.outerHTML = lessThanSlash + openNameTag + ul + greaterThan;
});

// list
const openLi = document.querySelectorAll(".openLi");
openLi.forEach(openLi => {
    openLi.outerHTML = lessThan + openNameTag + li + closeTag + ' ' + openAttributesTag + _CLASS + closeTag + AttributeValue + classLi + closeTag + closeAttributesTag + greaterThan;
});
const closeLi = document.querySelectorAll(".closeLi");
closeLi.forEach(closeLi => {
    closeLi.outerHTML = lessThanSlash + openNameTag + li + closeTag + greaterThan;
});


// Icon
const svg = "svg";
const classIconBg = "icon-big";
const classIconSm = "icon-small";
/* big icon */
const openBgSvg = document.querySelectorAll(".openBgSvg");
openBgSvg.forEach(openBgSvg => {
    openBgSvg.outerHTML = lessThan + openNameTag + svg + closeTag + ' ' + openAttributesTag + _CLASS + closeTag + AttributeValue + classIconBg + closeTag + closeAttributesTag + greaterThan;
});
/* small icon */
const openSmSvg = document.querySelectorAll(".openSmSvg");
openSmSvg.forEach(openSmSvg => {
    openSmSvg.outerHTML = lessThan + openNameTag + svg + closeTag + ' ' + openAttributesTag + _CLASS + closeTag + AttributeValue + classIconSm + closeTag + closeAttributesTag + greaterThan;
});

const closeSvg = document.querySelectorAll(".closeSvg");
closeSvg.forEach(closeSvg => {
    closeSvg.outerHTML = lessThanSlash + openNameTag + svg + closeTag + greaterThan;
});