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
