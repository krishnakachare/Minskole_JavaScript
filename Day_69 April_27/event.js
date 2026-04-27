/* 
Event Delegation:
Instead of adding event listeners to multipleelements, attach one listener to a common ancestorand use event.target to identify the clicked element
*/

let list = document.getElementsByTagName('ol')[0];

// console.log(list)
list.addEventListener("click", (event) => {
    console.log(event.target);
});