// Document Object Model
/*
console.log(document);

console.log(document.head);

console.log(document.body);

*/
//

let userInput = "Task 1";

const newElement = document.createElement("div"); // create Element
newElement.innerText = userInput;;
newElement.setAttribute("class", "task") // Set Attribute
newElement.style.backgroundColor = "lightpink";
newElement.style.border = "1px solid black";
newElement.style.margin = "1 px";
newElement.style.width = "25%"

// console.log(newElement);
// document.body.append(newElement)

// getAttribute
const container = document.getElementById("taskContainer");

container.append(newElement);

const inputBox = document.getElementById("inputBox");
console.log(inputBox);
console.log(inputBox.getAttribute("id")); // inputBox
console.log(inputBox.getAttribute("class")); // null
console.log(inputBox.getAttribute("type")); // text

// setAttribute
const newElement1 = document.createElement("input");
newElement1.setAttribute("id","inputBox"); // a input box of id="inputBox" is created
newElement1.setAttribute("type", "radio");
console.log(newElement1.getAttribute("type")); // here input box is changed as radio
container.append(newElement1);