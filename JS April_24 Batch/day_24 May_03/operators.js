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

// LHS operator   RHS
//  a     +        b     --> operations (a, b --> operands)
//------------------------------------------------
// 2. Assignment Operators: =
// +=, -=, *=, /=, %=, **= (short hand methods)
// to perform operations required 2 operands

// = --> Assign operator
// let a = 10; // 10 value assign(=) to a 

// In assignment operator assign(=) is base
// Can perform operations(arithmatic operations) with assign
//+=
// let a = 10;
// // a = a + 2;
// // console.log(a)  // 12
// a += 2  // (short hand methods)
// console.log(a)  // 12

//---------------------------------------
/* Interview questions:
1).If(true){
Var varVariable=”I am a var variable”
Let letVariable=”I am a let variable”
}
Console.log(varVariable)
Console.log(letVariable)

2)[5]==[5]
3)”5”+2+3
4)2+3+”5”
5)let str=”snehal bhor”
Then want ans “bhor snehal”
6).explain map, reduce ,filter
*/

if (true) {
    var varVariable = 'I am a var variable' // var --> G/B, F
    let letVariable = 'I am a let variable'
}
console.log(varVariable); // 'I am a var variable'
console.log(letVariable); // ReferenceError: letVariable is not defined

//------------------------------------------------------

//code execution --> top-bottom(line by line) --> LHS to RHS --> As like book reading
// +=, -=, *=, /=, %=, **=
let a = 10;
// a = a + 2;
// console.log(a)  // 12
// a += 2  // (short hand methods)
// 10 + 2 = a
// a = 10 + 2
// a = a + 2
console.log(a)  // 12

console.log(a -= 2)  // a = a - 2 // 8
console.log(a *= 2)  // a = a * 2 // 16
console.log(a /= 2)  // a = a / 2 // 8
console.log(a %= 2)  // a = a % 2 // 0
console.log(a **= 2)  // a = a ** 2 // 0

//-----------------------------------------------------------------
// 2.3. Comparison Operators: <, >, <=, >=, ==, ===, !=, !==

// LHS  operator  RHS  --> operation --> return boolean(true, false)
// LHS < RHS
// 1 < 2
// 1 > 2
// Mouth open > Minimum end
console.log(1 < 2) // true
console.log(1 > 2) // false
// LHS --> value(truthy,falsy), condition, true/false
// RHS --> value(truthy,falsy), condition, true/false

console.log(true < true) // false
console.log(false < true) // true



