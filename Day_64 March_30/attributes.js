console.log(document);

let h1 = document.getElementsByTagName("H1")[0];
console.log(h1);

// getAttribute
let classVal = h1.getAttribute("class");
console.log(classVal);

// setAttribute
h1.setAttribute("id", "MyValue");
console.log(h1);

// removeAttribute
h1.removeAttribute("class");
console.log(h1);

// hasAttribute
let classAttrCheck = h1.hasAttribute("class");
console.log(classAttrCheck);

let idAttrCheck = h1.hasAttribute("id");
console.log(idAttrCheck);

