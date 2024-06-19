/* 
    # Function: Block of code designed to get particular output.
               - functions are the first class citizen of js.
               - functions are heart of js.

    # use/need of function:
        1. avoid repetative code (reuseibility)
        2. split of code.

    # Syntax:
        function functionName (para1, para2, ...){ function decleration
        // block of code --> function defination
        }
        functionName(arg1, arg2)  --> function calling (To use function code then need to call function.)        

        # functions 3 parts:
            1.function decleration
            2.function defination
            3.function calling

    Q. what is the function parameters ?
       Parameters are block of code variables

    Q. what is the function arguments ?
       Values for the paramers initialization

    # Types of function:
        1. function decleration
        2. function expression
        3. arrow function

# Js execution:
  Part of code execution: 1. Memory creation 2. Code execution

# Function hoisting
  Hoisting in js : 

*/

// 1. function decleration (named function)
// function add (a,b){
//     console.log(a,b) // undefined undefined
//     console.log(a+b) // NaN
// }
// add()

function add(a, b) {
    console.log(a, b) // 1, 2
    console.log(a + b) // 3
}
// add(1, 2) // 1 = a, 2 = b --> Parametrs initialization
// add(4, 5) --> Parametrs initialization
// add() 
// NOTE: function defination and function calling are seperate parts

console.log(typeof add) // function --> datatype --> varity of value
// let a = 10;
// console.log(typeof a) // number

// Assign function value to the variable ==>

//2. function expression (anonymous function)
let a = function add2(a, b) {
    console.log(a, b) // 10, 10
    console.log(a + b) // 20
}
console.log(typeof a)  // function
a(10, 10) //20
// add2(20,20) // ReferenceError: add2 is not defined

let a2 = function (a, b) {
    console.log(a, b) // 100, 100
    console.log(a + b) // 200
}
a2(100, 100) // 200