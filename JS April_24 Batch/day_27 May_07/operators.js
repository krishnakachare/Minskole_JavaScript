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
Q. Value comparison & address(referance) comparison ?
Q. Find max number using conditional operator.
Q. Ask user to enter 2 numbers & 1 operator (+ - * /)
   perform the operation based on the user entered operator.

   NOTE: 
   Value Comparison: Compares the content of values regardless of type (with == after type      coercion or === without coercion).
   Address Comparison (Reference): Compares if two references point to the same object in memory (using ===).

console.log("hi" && "1")
console.log("hi" || "1")
console.log("" || "1")
-----------------------------------------------------------------*/
// # Requirement: "2" + 2 + 1 = 5 -- > How can do ?


// console.log("2" + 2 + 1)  // 221
// console.log(Number("2") + 2 + 1) // 5

// 1. Unary operators: +,++, -- (Pre, post)  -->  1 operand

// Unary operator: + (Converting datatype in number)
// 1 operand to required operation

// console.log(+"2" + 2 + 1)  // 5

// let a = +"100"
// console.log(a, typeof a)  // 100 number
// console.log(+"0") // 0
// console.log(+"Hi") // NaN

// ++ --> Increment by 1;   Pre-fix increment, post-fix increment
// -- --> Decrement by 1;    Pre-fix decrement, post-fix decrement

let b = 2; // 3
// b = b + 1; // 3
// b++
// b = 1 + b;
// ++b

// console.log(b) // 2
// console.log(b++, b) // 2, 3
// console.log(b + 1)  // 3

// console.log(++b)  // 3

// console.log(b--, b) // 2, 1
// console.log(--b)  // 1


console.log("5" + "5")  // "5" + -5 // "5 - 5";




