// Redeclare variable:

// // Can not be redeclare variable with let keyword
// let a = 2;
// let a = "Hi"; // SyntaxError: Identifier 'a' has already been declared
// console.log(a);

// // Can not be redeclare variable with const keyword
// const a = 2;
// const a = "Hi"; // SyntaxError: Identifier 'a' has already been declared
// console.log(a);

// Can redeclare variable with var keyword
var a = 2;
console.log(a); // 2
var a = "Hi";   // value update for variable
console.log(a); // Hi
