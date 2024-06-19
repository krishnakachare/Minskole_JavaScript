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
   perform the operation based on the user entered operator.

NOTE: 
Value Comparison: Compares the content of values regardless of type (with == after type      coercion or === without coercion).
Address Comparison (Reference): Compares if two references point to the same object in memory (using ===).
-----------------------------------------------------------------*/

console.log("5" + -"5");

// coercion --> forfully datatype conversion
console.log(2 + 2) // 4
// String concatination (string)
// LHS  art operators RHS ---> string addition --> (+ only)
console.log("5" + "5"); // 55

// + --> converting in number
console.log(+"5")  // 5
console.log(-"5") // -5

console.log("5" + 2 + 1); // 521
console.log("5" + 5);   // 55
console.log("5" + -5);  // 5-5
console.log("5" + -"5"); // "5" + -5 // 5-5
// LHS -> "5"
// RHS -> -"5" --> -5
console.log(-"5" + "5"); // -5 + "5" // -55
//----------------------------

let a = 4;
let ans = a++ + --a + ++a + a--;  // 4+4+5+5
console.log("ans :", ans)  //ans : 18

let x = 4; let y = 4;
let ans2 = x++ + --y + ++y + --x;  //4+3+4+4 // 15

// console.log(++x) // 5
// console.log(x++)  // 5
console.log("ans2 :", ans2) // ans2 : 15
//NOTE : Dont consider the post operation values for use, It will usable for next operation

console.log("5" - +"5") // "5"-5 // 0 (substraction with corecion)
// +"5" -> 5

// ("5" - +"5")
// concatination --> (+)
// coercion
// Arth operation

// LHS  --> "5"
// operator --> -
// RHS --> +"5"
//------------------------------------------------------------------



