
let divEl = document.createElement("div");

let h2One = document.createElement("h2");
let h2Second = document.createElement("h2");

h2One.textContent = "I am div";
h2Second.textContent = "I am div2";

divEl.appendChild(h2One);
divEl.appendChild(h2Second);

console.log(divEl)


document.body.appendChild(divEl)

// remove element:

let getH2Second = document.getElementsByTagName("h2")
console.log(getH2Second[1])

let getDiv = document.getElementsByTagName("div")
console.log(getDiv[0])
getDiv[0].removeChild(getH2Second[1])