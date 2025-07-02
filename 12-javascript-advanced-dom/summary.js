// console.dir(document);
// alert();
// window.alert();


// drilling into the DOM (Traversal)

document.body.children[1].children[0].href = "https://www.google.com";


// DOM Traversal vs Query Selector
// Traversal: navigate DOM from a known element (e.g. parentElement)
// Query: select elements using CSS selectors (e.g. querySelector)
// Traversal is faster and depends on structure
// Query is flexible but can be slower

// Use querySelector to find initial elements by selector
// Use DOM traversal to navigate between related elements
// Combine both for efficient and readable code

// Nodes

console.log(document.body.firstChild); // #text
console.log(document.body.firstElementChild); // <h1>
console.log(document.body.childNodes); // NodeList(9) [#text, h1, #text, p, #text, div, #text, script, #text]

// A Node is any type of content in the DOM: elements, text, comments, etc.
// An Element is a type of Node that represents an HTML tag.
// firstChild can return a text node, but firstElementChild only returns an HTML element.
// childNodes includes all node types, while children includes only element nodes.

document.body.firstElementChild; // <h1>
document.body.children[0]; // <h1>

// ✅ Use childNodes for all node types, and children only when you’re sure it’s an element node! 

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://www.google.com";
// getElementById is faster but only works with IDs

anchorElement.document.querySelector("p a");
anchorElement.href = "https://www.naver.com";
// querySelector is more flexible and supports any CSS selector
// ex. p a { color : red; }

document.querySelectorAll();
// querySelector returns the first matching element  
// querySelectorAll returns all matching elements as a NodeList

// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and 
//    save it in a variable with a name of your choice
document.body.firstElementChild;
let h1Element = document.body.firstElementChild;


// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the 
//    sibling element (i.e. the <p> element next to the <h1> element)

let parentElement = h1Element.parentElement;

let siblingElement = h1Element.nextElementSibling;

// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)

let h1ElementById = document.getElementById("question-3");

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class) 
//    and store it in a new variable with a name of your choice
document.querySelectorAll("p")[1];
// or
document.querySelector(".paragraph");
let secondPElement = document.querySelector(".paragraph");

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice
secondPElement.textContent = "This is the new text content of the second paragraph.";

// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and 
//    save it in a variable with a name of your choice

let h1Element = document.body.firstElementChild;
h1Element = document.body.children[0];

console.dir(h1Element);


// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)

console.dir(h1Element.parentElement);

//    BONUS: Try using the variable from (1) to get access to the 
//    sibling element (i.e. the <p> element next to the <h1> element)

console.dir(h1Element.nextElementSibling);


// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)

h1Element = document.getElementById("first-title");

console.dir(h1Element);


// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class) 
//    and store it in a new variable with a name of your choice

let paragraph =  document.querySelector(".paragraph");

console.dir(paragraph);

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

paragraph.textContent = "This was changed by Willo!";


// ADD AN ELEMENT ➕

// 1. Create a new element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://www.google.com";
newAnchorElement.textContent = "Google";

// 2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector("p");

// 3. Insert the new elemenet into the parent element cocntent

firstParagraph.append(newAnchorElement);

// 👉 append() is a method used to add HTML elements or text as the last child of a parent element.
// 👉 prepend() is a method used to add HTML elements or text as the first child of a parent element.

// REMOVE ELEMENTS ➖

// 1. Select the element to be removed

let firstH1Element = document.querySelector("h1");

// 2. Remove the element!

firstH1Element.remove(); // for modern browsers 최신 방식 (간단함)
firstH1Element.parentElement.removeChild(firstH1Element); // for older browsers 전통 방식 (조금 더 복잡)
// but, removeChild() 리턴값을 주기때문에 console.log(removedElement); 로 방금 제거한 요소를 다시 확인하거나 재사용 가능!

