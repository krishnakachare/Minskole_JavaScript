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

// console.log("" < 0)  // 0 < 0 // false
// console.log("Data conversion",Number(""))  // 0

console.log("3" > true) // 3 > 1 // true
// "3" --> 3
// true-> 1
// console.log("Data conversion",Number("3")) // number 3

// ----------------------------------------------------------
// String concatination : adding string  [Particularly + operator]

/* 
    str + str = str
    str + num = str
    num + str = str
    -----------------
    str - str = num
    str - num = num
    num - str = num
    -Same with *,/
*/

console.log("2" + "2")  // 22
console.log("2" + -2)  // 2-2
console.log("2" + -"2")  // 2-2
console.log("Hi" + "JS")  // "HiJS"
console.log("2" + 2 + 1)  // 221  
console.log(2 + 1 + "2")   // 3+"2" // 32
console.log(2 + 1 + "HI") // 3HI

console.log(true + 1 + 1 + "HI")  // 1+1+1+"HI" // 3+"HI"// 3HI

console.log("2" - "2") // 0
console.log("2" - "HI") // NaN
console.log("2" * "2") // 4
console.log("2" / "2") // 1
