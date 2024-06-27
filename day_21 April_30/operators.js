/*
Q. What is operands, operators, operation ?

1. Arithmetic Operators:+,-,*,/,**,%
  - unary operators: +, ++, -- (Pre, post)
2. Assignment Operators: =, +=, -=, *=, /=, %=, **=
3. Comparison Operators: <, >, <=, >=, ==, ===, !=, !==
4. Logical Operators: &&, ||, !
5. Bitwise Operators.
6. Miscellaneous Operators:, typeof, instanceof, void() --> Explain->;
7. Ternary operator or conditional operator.
*/

// ; -> end of code line
let a = 10; let b = 10;
// a+b
// operation
// a, b --> operands
// + operator

// 1. Arithmatic operators: +,-,*,/,**,%
// Mathematical operations:
console.log(a + b) // 20
console.log(a - b) // 0
console.log(a * b) // 100
console.log(a / b) // 1
console.log(a ** b) // 10000000000
console.log(a % b) // 0

// To perform mathematical operations we have math global object
// Golbal object: Maths --> Methods -> to do maths operations.

// Math object methods:
// 1. pow():
// Action:
// Return:
Math.pow(a)