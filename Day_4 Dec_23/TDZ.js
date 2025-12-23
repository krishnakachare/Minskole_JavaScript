// Read the js code :
// console.log(b) // b is not defined
let a // --> Variable declaration
console.log(a) // undefined

a = 10 // --> Variable initialization
console.log(a) // 10

a = "Hi" // --> Variable re-initialization/re-assignment/ value change/ value update
console.log(a) // Hi

let p = 10;
// p declared and initialized with value 10


// 3. 

// Diff var, let, const when we just declare variable without initialization
var varVariable
console.log(varVariable) // undefined
let letVariable
console.log(letVariable) // undefined
const constVariable // SyntaxError: Missing initializer in const declaration
console.log(constVariable)
// variable declared with const keyword must be initialized during declaration itself
// variable declared with var and let keywords can be declared without initialization
