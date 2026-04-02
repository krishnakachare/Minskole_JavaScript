/* 
events : User inputs

Click (Mouse Events: Click, MouseUp, MouseDown, MouseHover)
Type (KeyBoard events: keyPress)
Submit (Form)
Change (DropDown)  

UI : HTML, CSS, JS

Car Start: Key 

Click -->  Ui Change

Clcik --> Capture --> type  --> change

# Events: 

- `click`
- `mouseover`
- `mouseout`
- `keydown`
- `keyup`
- `submit`
- `change`
*/

// Mouse Events

let btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", function () {
    let el = document.createElement("h1")
    el.textContent = "I am Clicked";
    document.body.appendChild(el);
    btn.style.color = 'green'
})

btn.addEventListener("mouseover", function () {
    btn.style.background = 'yellow'
})

btn.addEventListener("mouseout", function () {
    btn.style.background = 'white'
})

let para = document.getElementsByTagName("p")[0];
para.addEventListener("mouseover", function () {
    para.style.background = 'yellow'
})

para.addEventListener("mouseout", function () {
    para.style.background = 'white'
})

// KeyBoard Events
let inputTextBox = document.getElementsByTagName("input")[0];
inputTextBox.addEventListener("keydown", function () {
    inputTextBox.style.background = 'yellow'
})

inputTextBox.addEventListener("keyup", function () {
    inputTextBox.style.background = 'white'
});

// Change Event

// Event Object: target, type

let dropDown = document.getElementById("DropDown");
dropDown.addEventListener("change", (event) => {
    console.log(event.type)
    console.log(event.target)
    console.log("DropDown Value Changed to: ", dropDown.value);
});

//preventDefault()

let link = document.getElementById("Link");
link.addEventListener("click", (event) => {
    event.preventDefault()
    // console.log("User clicked")
    console.log("User Not Navigating")
});