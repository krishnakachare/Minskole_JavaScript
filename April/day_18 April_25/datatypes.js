// Datatypes in js:
// number, bigInt, string, null, undefined, boolean,symbol, object,array, function, RegEx.

// number:
// let a = 10;
// Global method-> Number(arg)
// Action: arg Convert/ made number datatype
// Return: number(datatype)

// console.log(Number(10)) // 10
// let b = Number('10');
// console.log(b, typeof b) // 10,  number
// let c = Number('JS');
// console.log(c, typeof c)  // NaN number
// // Datatype converting
// // DOM --> String

// // inbuild class js
// let aa = new Number('10')
// console.log(aa, typeof aa) // [Number: 10] object


// Array:
// literal
let arr = [1, 2, 3];
console.log(arr, typeof arr)  // [ 1, 2, 3 ] object
// Global method:
let arrGlobal = Array.from("Hi JS")
console.log(arrGlobal, arrGlobal.length, typeof arrGlobal)  // [ 'H', 'i', ' ', 'J', 'S' ] 5 object

// inbuild method:
let arr2 = new Array(2); // arg -> array length
console.log(arr2, arr2.length, typeof arr2)  // [ <2 empty items> ] 2 object

let arr3 = new Array(1, 2, 3, 4);  // [ 1, 2, 3, 4 ] 4 object
console.log(arr3, arr3.length, typeof arr3)

// let var const
// const --> cant update value(immutable datatype)
// mutable datatype--> we can update the value

const arr4 = [1, 2, 3]
arr4.length = 0;
console.log(arr4)  // []

const obj = { fName: "Js"}
obj.fName="TS"
console.log(obj) // { fName: ""}

