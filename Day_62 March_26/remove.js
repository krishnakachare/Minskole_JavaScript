console.log("......Remove.js FILE.......")

let divEle = document.getElementsByTagName("div")[0];
console.log(divEle)
let childOne = document.getElementsByTagName("p");
// console.log(childOne[1])
divEle.removeChild(childOne[1]);

let h3Ele = document.getElementsByTagName("h3")[0];
h3Ele.remove();