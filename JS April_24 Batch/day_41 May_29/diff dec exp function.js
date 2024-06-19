/*  # Function: Block of code designed to get particular output.
               - functions are the first class citizen of js.
               - functions are heart of js.

    # use/need of function:
        1. avoid repetative code (reuseibility)
        2. split of code.

    # Syntax:
        function functionName (para1, para2, ...){ function decleration
             **block of code --> function defination
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
        1. function declaration (named)
        2. function expression (anonymous)
        3. arrow function

# Js execution:
  Phases of code execution: 1. Memory creation 2. Code execution --> Show in code

# Function hoisting OR Hoisting in js : variables and functions initialize in the memory creation phase
    -For variable with var have default value undefined
    -For function decleration have default value itself(fully hoisted)
  
Q. diff bt function decleration and function expression ?
      function declaration                 function expression 
    1. Named                               Anonymous
    2. can call before the declaration     cant call before the decleration
      (fully hoisted in memory creation)  
    3. parse in memory creation            run in code execution 

*/

/* 
1. function declaration (named):
  - function declaration have feature for the hoisting, It will be fully hoisted at time of memory   creation phase or 
   parse or 
   fully decleared in global variable with default itself value

   -bcoz of that we can access it before and after the function declaration in code execution phase.
   [ considering which phase is running insted of Before and After code writting ]
*/

// add() ///  --> code Execution 
// function add() {
//   console.log("Function Decleration")
// }  // --> Memory creation
// add()    //  --> code Execution 

/* 
  2. function expression (anonymous) :
    - fun variable declared with let keyword and assigned it function as value
    - fun will be hoisted as per the let keyword 
    - with the let, const, var declarard variabled have its default value in hoisting in memory creation phase like no value for let, const and undefined for var. But no one have function value. Hence function expression cant be called before the its declaration.
*/

// fun()  // ReferenceError: Cannot access 'fun' before initialization
// console.log(fun)
// let fun = function () {
//   console.log("Function Expression")
// }
// fun()


/* 
fun variable declared with var keyword and assigned it function as value
- fun will be hoisted as per the var keyword
*/
fun()  // TypeError: fun is not a function
// console.log(fun) // --> undefined()
var fun = function () {
  console.log("Function Expression")
}
// fun()






