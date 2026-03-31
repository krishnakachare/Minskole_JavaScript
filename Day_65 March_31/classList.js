console.log(document);

let h2 = document.getElementsByTagName("h2")[0];
// console.log(h2);

// Add class:

// // setAttribute
// h2.setAttribute("Class", "red");
// // console.log(h2);

// // Not able to achive classList
// h2.setAttribute("Class", "background");
// console.log(h2);

h2.classList.add("red")
h2.classList.add("background")
h2.classList.add("ABC")
// console.log(h2);

// h2.classList.remove("ABC")
console.log(h2);

// h2.classList.toggle("ABC")
console.log(h2);

let checkClass = h2.classList.contains("ABC");
console.log(checkClass); // true
checkClass = h2.classList.contains("PQR");
console.log(checkClass); // false