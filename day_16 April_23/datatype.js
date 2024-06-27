// Datatypes in js:
// number, bigInt, string, null, undefined, boolean,symbol, object,array, function, RegEx.

// NaN -> Not a number
// NaN - Value, Number
// operations with number --> NaN
// console.log(2 / "js") // NaN
// console.log(typeof NaN)  // number

// // RegEx -> Patterns
// // object
// let a = /abc/
// console.log(a) // /abc/
// console.log(typeof a) // object

// // boolean --> true, false
// console.log(typeof true) // boolean

// Truthy, Falsy values in js:
// Truthy : true, numbers(non zero), string(non empty), all function, object(Non empty), array(non empty)
// Falsy : false, 0, Empty string-> '', null, undefined, NaN

// true 1 ON
// false 0 OFF

// Control flow in js:
// if-else conditions-

/*
if(condition){
// true block
}else{
// false block
}

condition --> true, false
condition --> output
*/


// if (NaN) {
//     console.log("I am TRUE")
// } else {
//     console.log("I am FALSE")
// }

// String:
// String literal
let str = "JS"
console.log(str, typeof str)
// object-->
// class --> user define, inbuild in js
// let obj = new ClassName()

// using js inbuild class
let str2 = new String("JS2")
console.log(str2, typeof str2)  // object

// Global method
// converting string
let str3 = String("JS3")
console.log(str3, typeof str3)  // JS3 string