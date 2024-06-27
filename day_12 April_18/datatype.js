/*
# Js Datatypes :- 

Symbol.

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

B. Non-Primitive datatype- mutable
- Can update original value

1. Array
2. object
3. function

*/


//------------------------------------------
// Array:

let arr = [1, 2, 3, 4];
arr[1] = "JS"
console.log(arr[1])  // 2 --> JS
// Can mutate array, Hence its non-primitive

//---------------------------------------------
// Number:

let num = 10;
// Can not mutate/ immutable the value

//----------------------------------------------
// Boolean: true, false

let a = true;
// Can not mutate/ immutable the value


//-----------------------------------------------
// Object: can the store info in descriptive form
// Values stores on key
// let a = 10;
let obj = {
    // key, value
    a: 10
    // object key/ propertyName/ variable --> a
    // key Value --> 10; have all datatypes
}
// CURD
// Update-> mutate=>
// retrive values from object
//1. Dot notation:
// objectName.keyName

// 2. Bracket notation:
// objectName['keyName']

// obj.a
console.log(obj.a)  // 10

// update value

obj.a = "JS"
console.log(obj.a)  //  JS

// Can mutate object

//---------------------------------------
// Null:
// What is Null in js ?
// In js Null is a value
// null is object in js
// Can assign it to variable for temproray
// Its indication of absence of original value;

// This datatype not containe any value

let aa = null;
console.log(aa) // null
console.log(typeof aa) // object

// null is value, not able to mutate/ immutable


//-------------------------------------------------------------
// undefine:
// Its value and datatype in js
// when initaially we not assign variable value, function not return anything

let b;
console.log(b) // undefined
console.log(typeof b)  // undefined

// value undefine, not able to mutate/ immutable

//-------------------------------------
// Function:
// What is function ?
// Block of code developed to give specific output

// Syntax:
// Function writing:

// function funNmae(parametrs){
// code/ statements
// } --> Block of function

// Use function need to call it
// function calling:

// funName(arug..);

function f1(a,b){
    console.log(a+b)
}

f1(1,2)

// a =1, b=2








