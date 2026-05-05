
/* 
Syntax:

/string/flag

new RegEx(para1, para2)

para1: string/pattern
para2: flag


*/

// 1. literal

let str = "Hi";
console.log(str, typeof (str))

let regEx = /hi/
console.log(regEx, typeof (regEx))

// 2. InBuild JS Class

let regEx2 = new RegExp("hi");
console.log(regEx2, typeof (regEx2))


// flag

// RegEx methods:
// 1. test: Action: checking if pattern/regEx present in string, Return: Boolean

console.log(regEx.test(str)); // false