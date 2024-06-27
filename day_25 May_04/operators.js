/*
1. Unary operators: +, ++, -- (Pre, post)  -->  1 operand
2. Binary operators: 2 operands
    1. Arithmetic Operators:+,-,*,/,**,%
    2. Assignment Operators: =, +=, -=, *=, /=, %=, **= (short hand methods)
    3. Comparison Operators: <, >, <=, >=, ==, ===, !=, !==
    4. Logical Operators: &&, ||, !
    5. Bitwise Operators.
    6. Miscellaneous Operators:, typeof, instanceof, void() --> Explain->;
3. Ternary operators:  3 operands
    1. conditional operator.

Q. Diff =, ==, === ?
Q. Find max number using conditional operator

*/

//-----------------------------------------------------------------
// 2.3. Comparison Operators: <, >, <=, >=, ==, ===, !=, !==

// LHS  operator  RHS  --> operation --> return boolean(true, false)
// LHS < RHS
// 1 < 2
// 1 > 2
// Mouth open > Minimum end
// console.log(1 < 2) // true
// console.log(1 > 2) // false

// LHS & RHS --> value, condition, true/false
// Value --> 1, "hi", NaN
// condition --> (1>2) > (1>2)
// true/false

// Dynamically typed
// Datatype conversion ---> processing --> Corecion
// Boolean 
// 1 1 --> number

// true/1/ON
// false/0/OFF

// console.log(true < true) // false
// // 1 < 1 --> False

// console.log(false < true) // true
// 0 < 1 --> true


// ====================================================
// # Corecion: forcefully datatype conversion

// datatype conversion --> boolean --> number
// truthy/false not considering

console.log(1 < false) // 1 < 0 // false
console.log("" < 1)    // 0 < 1 // true
// jS truthy/falsy value
// "" --> false --> 0 --> wrong

console.log("Hi" > false)  // 1 > 0  // Expected result :true, but result : false
// "Hi"--> true --> 1

// Datatype conversion ---> processing --> Corecion
// Comparison on quantity like max, min --> Number
// Finally converting in number for comparision
console.log("Hi" > false)  // 0 > 0 --> false
// Data conversion -->
// "Hi" --> Convert number --> Number("Hi") --> NaN(falsy)--> 0

// console.log("" < 0)
// console.log("3" > true)





