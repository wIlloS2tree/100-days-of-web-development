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


