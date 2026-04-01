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

*/

let btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", function () {
    let el = document.createElement("h1")
    el.textContent = "I am Clicked";
    document.body.appendChild(el);
})