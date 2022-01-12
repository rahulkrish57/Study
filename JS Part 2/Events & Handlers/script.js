//Events
//Keyboards
    //Keydown
    function keyDown(event) {
        //console.log(event);
        console.log("Working");
    }
    //KeyUp
    function keyUp(event) {
        //console.log(event);
        console.log("Working");    }
    //keyPress
    function keyPress(event) {
        //console.log(event);
        console.log("Working");    }
//Mouse
    // 1. Mouse Move 2. onclick 3. ondblclick 4. onmouseover 5. onmouseleave
    function myFunc(event) {
        //console.log(event);
        console.log("Working");
    }

// Object Model Eventhandler
const addButton = document.getElementById("addBtn");
addButton.innerText = "Add";
addButton.onclick = myFunc;
const inputBox = document.getElementById("inputBlock");
inputBox.onmouseover = myFunc;

// built-in Event
function buttonClick1() {
    console.log("ButtonClick1 function working");
}
function buttonClick2() {
    console.log("ButtonClick2 function working");
}
const addButton = document.getElementById("addBtn");
addButton.innerText = "Add";
addButton.addEventListener("click", buttonClick1);
addButton.addEventListener("click", buttonClick2);

addButton.addEventListener("click", function() { // anonymous function
    console.log("button clicked from anonymous function") 
});

//Global

window.addEventListener("resize", function (event) {
    console.log("window is resized")
})

window.addEventListener("scroll", function (event) {
    console.log("window is scrolled")
})


