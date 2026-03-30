console.log(document);

let h2 = document.getElementsByTagName("h2")[0];
console.log(h2);

// Add class:

// setAttribute
h2.setAttribute("Class", "red");
console.log(h2);

// Not able to achive classList
h2.setAttribute("Class", "background");
console.log(h2);