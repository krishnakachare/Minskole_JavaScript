/*
# Js Datatypes :- 



map, set --> Methods in js
userDefine datatype --> defining ways of datatypes
- user can define datatype directly

# data types have 2 sections:
A. Primitive dataype- immutable
- Can not update original value

1. string
2. number --> 0, -ve, +ve, decimal(Float), NaN--> Number
3. Boolean (true, false)
3. Null
4. undefined
5. Symbol

B. Non-Primitive datatype- mutable
- Can update original value

1. Array
2. object
3. function

*/

// Function :
function add() {
    // block of code
}
console.log(typeof add)  // function
// block code depend on argu/para --> mutate --> non- primitive


// Symbol:
// Its ES6 feature
// Define datatype --> Syntax --> Symbol(string,Number,undefine)
// like-> array --> [,,,], {key:value}
// let arr = []
 let a = Symbol("Hi");
 // "Hi" --> Value
 console.log(a)  // Symbol(Hi)
 let b =Symbol(20); 
 console.log(b) // Symbol(20)
 console.log(typeof b)  // symbol

 // Symbol always create new momery address for its value: always we have diffrent address
 console.log(Symbol("Hi") == Symbol("Hi"))  // false
 
 // 





// // Application of Symbol datatype:
// let obj = {
//     a: 10,
//     b: 20,
//     "user": "abc",
//     "user Id": 30,
// }
// console.log(obj["user"]) // abc
// //  obj["user"] = "xyz"

// let z = Symbol("user")
// obj[z] = "xyz"
// console.log(obj["user"]) // abc
// console.log(obj[z])   // xyz
// console.log(obj)

// console.log(Symbol("Hi") == Symbol("Hi"))  // false
// console.log(typeof Symbol("Hi")) // symbol

console.log()


