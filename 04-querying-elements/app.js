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