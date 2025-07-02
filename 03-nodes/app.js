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