/* 
 submit

*/

// let form = document.getElementById("userForm");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log("Submit Event");
// })

// # Event propagation : 1. Bubbling 2. Capturing

let parent = document.getElementById("parent");
let child = document.getElementById("child");

// Event Bubbling --> Chlid to Parent
/* 
When an event occurs on a child element, it"bubbles up" to its parent and then to the entiredocument
*/

// parent.addEventListener("click", (event) => {
//     console.log("Clicked on the Parent (Outer) Ele");
// });
// Default : False

child.addEventListener("click", (event) => {
    console.log("Clicked on the Child (inner) Ele");
});

// Event Capturing: Parent to child
/* 
Event Capturing (or Trickle Down) is the opposite ofbubbling – the event fires first on the topmost element andmoves down to the target
*/

parent.addEventListener("click", (event) => {
    console.log("Clicked on the Parent (Outer) Ele");
}, true)