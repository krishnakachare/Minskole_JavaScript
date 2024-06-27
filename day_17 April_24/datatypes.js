// Datatypes in js:
// number, bigInt, string, null, undefined, boolean,symbol, object,array, function, RegEx.

// Truthy, Falsy values in js:
// Truthy : true, numbers(non zero), string(non empty), all function, object(Non empty), array(non empty)
// Falsy : false, 0, Empty string-> '', null, undefined, NaN


// if ({ }) {
//     console.log("I am TRUE")
// } else {
//     console.log("I am FALSE")
// }

// js application --> understand

//--------------------------------------------------------------------
// #string:
// ways of string define : string literal, global method, inbuild class in js

// single quote --> ' '
// double quote --> " "
// Backticks --> ` `
let str = "JS"  // all string
str = 'JS'
str = `JS`
console.log(str, typeof str)
// Meaning:
// 'Now time 9'o clock'
"Now time 9'o clock"
// use reverse comb of quotes
// " ' ' "
// ' " " '
// css selector:
// "tagName[attr='attrValue']"

// Backticks:
// ES6 feature
// 1. Template literal

let a = 10;
let b = 10;
console.log(a + b) // 20
'Addition of a and b is equal to : 20'
// String concatination: means addition of string with + operator
// 10+10 --> 20
// "Hi"+"JS" --> "HiJS" --> joining LHS & RHS
console.log('Addition of' + a + 'and' + b + 'is equal to :' + (a + b)) // Addition of10and10is equal to :20
// Template literal: can read variable value in string
// Place holders- ${}, ``
console.log(`Addition of ${a} and ${b} is equal to : ${a+b}`)

// 2. Multiline string : using backticks--> ``






