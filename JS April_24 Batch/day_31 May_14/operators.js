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
/* 
3. Comparison Operators: <, >, <=, >=, ==, ===, !=, !==

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

console.log(1 == 1)  // true
console.log(!(1 == 1))  // false
console.log(1 != 1)  // !  == // != // false

console.log(1 !== 1) // !  === // !==  // false
console.log(1 === "1")  // false
console.log(1 !== "1")  // !false // true

// Q. Value comparison & address(referance) comparison ?
let a = 1;
console.log(a == a)
console.log(1 == 1)  // true
// values datatype --> number
console.log("Hi" == "Hi") // true
// values datatype --> string
// RHS ==> value 
// can interact direct with values

// going to compare objects
// RHS ==> value ==> object (array, object)

let obj = {
    a: 10,
    b: "hi"
}
// value ==> object ==> values stored in key
// Nested structure for storing values
// obj.a -->  particular value can get

let arr = [1, 2, 3]
// arr[0] --> particular value can get
// value ==> object/Array ==> values stored in index number
// cant compare values directly by == operator

console.log([5] == [5])  // false

let aa = [5];
let bb = [5];

// solution for compare object: compare address(referance)
console.log(aa == bb) // false
console.log(aa == aa) // true
console.log(bb == bb) // true

    //-------------------------------------------------
    // 3. Ternary operators:  3 operands
    //     1. conditional operator.

    // Ternary --> 3 --> 3 operands


    (1 < 2) ? console.log("Condition:True") : console.log("Condition:False");

