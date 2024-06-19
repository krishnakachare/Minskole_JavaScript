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

Q. Diff ==, === ?
Q. Value comparison & address(referance) comparison ?
Q. Find max number using conditional operator.
Q. Ask user to enter 2 numbers & 1 operator (+ - * /)
   perform the operation based on the user entered operator and show operation result.

   E.g:
   prompt 1 message : Enter first value
   prompt 2 message : Enter second value
   prompt 3 message : Operation
   -show operation ans in console.

NOTE:
    Value Comparison: Compares the content of values regardless of type (with == after type      coercion or === without coercion).
    Address Comparison (Reference): Compares if two references point to the same object in memory (using ===).
------------------------------------------------------------------------------------------------*/
// 3. Ternary operators:  3 operands
//     1. conditional operator.

// Ternary --> 3 --> 3 operands

true ? console.log("Condition:True") : console.log("Condition:False");  // Condition:True
false ? console.log("Condition:True") : console.log("Condition:False"); // Condition:False
// Entity ?
// Last Boolean entity
// true/false, condition
(1 < 2) ? console.log("Condition:True") : console.log("Condition:False"); // Condition:True
"" ? console.log("Condition:True") : console.log("Condition:False"); // Condition:False
// return
"" ? 10 : 100;

console.log("" ? 10 : 100)  // 100 --> return
let val = "" ? 10 : 100; // return and assign to val
console.log(val)  //  100

// Q. 4,1,8 find max value using conditional operator --> 11,90,50    87,23,33

let x = 9
let y = 87
let z = 33
//Assuming x is greater than y hence, x>y (always)
let grt1 = x > y ? x : y;
let grt2 = grt1 > z ? grt1 : z;
console.log(grt2);



