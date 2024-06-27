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

        a++ + --a + ++a + a--;
        x++ + --y + ++y + --x;
        x++ + --y + y++ + --x;

        console.log("hi" && "1")
        console.log("hi" || "1")
        console.log("" || "1")

        console.log(true == 1)
        console.log(true === 1)
        console.log("" == 1)
        console.log("" == 0)
        console.log("" == false)
        console.log("" === 0)

Q. Diff =, ==, === ?
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
-----------------------------------------------------------------*/
// 3. Comparison Operators: <, >, <=, >=, ==, ===, !=, !==
// LHS operator RHS --> Boolean --> T/F

console.log(1 > 2)  // false
console.log(1 < 2)  //  true

// = --> Assigne operator, like let a = 10
// when using with other operator its equal to (==) operator
// <=
console.log(1 < 1) // false
console.log(1 <= 1) // less than OR equal to // true
// OR (||) --> T || T --> T
console.log(1 <= 2) // less than OR equal to // true
console.log(2 <= 1) // false

// >=
console.log(4 >= 4) // true
console.log(4 >= 2)  // true
console.log(4 >= 5)  // flase


/* 
=, ==, ===
= --> Assigne operator
== --> Loos Comparision operator : return --> Boolean
    LHS == RHS
    let a = 10;
    value comparision
    Datatype conversion (with coercion)
    comparision

=== --> strict Comparision operator (2 things comparing)
    value && datatype comparision
    comparing without coercion
*/

// // ==
// console.log(1 == 1) // true
// console.log(1 == "1") // true
// // 1
// // "1" --> coercion happening --> "1" --> 1
// console.log(1 == "") // false
// console.log(false == "") // true
// console.log(1 == true)  //  true
//--------------------------------------------

// ===
console.log(1 === 1) // true 
// value --> 1, datatype --> number (LHS, RHS)
console.log(1 === "1") // false
// Value && datatype --> T && T --> T
// value --> 1, datatype --> Number and string
// Without coercion comparision

console.log(1 === "") // false
// T && T --> T
console.log(false === "") // false
console.log(1 === true)  //  false

/* 
Q. Diff ==, === ?

            ==                                          ===
1. Loose comparision bt LHS and RHS          Strict comparision bt LHS and RHS
2. Value comparision                         value and(&&) datatype comparision
3. LHS and RHS entities converting           3. comparing LHS and RHS without coercion 
   into values with coercion then 
   comparing              
*/

//  !=, !==
// ! --> Not
// = --> ==
// == --> ===
// Combination --> !=, !==

console.log(1 != 1) 