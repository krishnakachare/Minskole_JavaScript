console.log("Hi I am Create element file");
console.log(document);

// CURD:

let h2El = document.createElement("h2");
console.log(h2El); // <h2></h2>
h2El.textContent = "Hi I am H2";
console.log(h2El); // <h2>Hi I am H2</h2>

h2El.setAttribute("abc", "pqr");
// attr : abc
// attr value : pqr

h2El.setAttribute("class", "classVal");
h2El.setAttribute("id", "idVal");
console.log(h2El);
