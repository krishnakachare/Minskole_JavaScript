// # Miscellaneous operators:
// 1. comma-> ,
// 2. typeof
// 3. intanceof
// 4. void

//3. intanceof
// Action- Check intance
// Return : Boolean

// let arr = [1, 2, 3]
// console.log(arr instanceof Array) // true
// let obj = { a: 10 };
// console.log(obj instanceof Array)  // false
// console.log(obj instanceof Object)  // true

// // 4. void
// // Action : return as a undefined
// // return : ForceFully undefined return
// // void expression

// let a = 10
// console.log(a)  // 10
// let aa = void 10
// console.log(aa)  //undefined

// function add() {
//     return 4
// }
// // add()=4, 
// console.log(void add()) // undefined


// 2. typeof:
// Action: finding datatype
// Return : string
// typeof expresion OR typeof (expresion)

// Datatypes in js:
// number, bigInt, string, null, undefined, boolean,symbol, object,array, function, RegEx.

// number:
// typeof typeof 3
console.log(typeof 3)  // number
console.log(typeof typeof 3)  // string

// -ve, +ve, 0, float(o.o1) --> number
console.log(typeof -3) 
console.log(typeof 0) 
console.log(typeof 0.2) // number

console.log(Number.MAX_SAFE_INTEGER)  // 9007199254740991


// bigInt
// 20n
console.log(typeof 20) // number
console.log(typeof 20n)  // bigint

// Que? -> Diff null, undefined, undeclared, NaN
// null-> value, object
// undefined-> value, undefined
// undeclared->
// NaN -> Not a number
// NaN - Value, Number
// operations with number --> NaN
console.log(2/"js") // NaN

// read JS
// let a = 10;
// console.log(b)
// c =10
// let
// let A
// =
// 10







