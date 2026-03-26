let divEl = document.createElement("div");
divEl.textContent = "I am div";
console.log(divEl);

let para1 = document.createElement("p");
para1.textContent = "I am Para one"

let para2 = document.createElement("p");
para2.textContent = "I am Para Two"

let para3 = document.createElement("p");
para3.textContent = "I am Para Three"

// document.body.appendChild(divEl);

document.body.append(divEl);

divEl.append(para1, para2);

// divEl.append(para3);

divEl.prepend(para3);

// sequance for element adding

let h2El = document.createElement("h2");
h2El.textContent = "I am h2";

let h3El = document.createElement("h3");
h3El.textContent = "I am h3";

let getH1 = document.getElementsByTagName("h1");
console.log(getH1[0])
getH1[0].before(h2El);

getH1[0].after(h3El);
