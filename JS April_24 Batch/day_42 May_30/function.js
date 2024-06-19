/* 
-function with parameters
-without parameters
-default parameters(ES6)
-return
-pre-defined and user-defined functions  
-Diff bt function and method

1. function without parameters: --> No arguments, no parametrs

    Have 2 values--> 4, 4
    code for maths operations like addition and substraction
 
*/
function mathOperation() {
  console.log(4 + 4);
  console.log(4 - 4);
}
// mathOperation(); // 8, 0
// mathOperation(); // 8, 0 same output
// have static code --> output is static or constant

// 2. function with parameters:
function mathOperation2(a, b) {
  console.log(a, b)
  // focus on task
  console.log(a + b);
  console.log(a - b);
}
// mathOperation2(10, 10) // 20, 0
// mathOperation2(20, 10) // 30, 10

/* 
  function output is dynamic and depends on the arguments
  Have same behaviour with the function expression and arrow function
*/

// 3. functions with default parameters--> ES6
function mathOperation3(a, b) {
  console.log(a, b) // undfined, undfined
  console.log(a + b);
  console.log(a - b);
}
mathOperation3(); // NaN, NaN
// Parameters only declared with no initialization

// ** default parametrs : parameter initialization
function mathOperation4(a = 0, b = 0) {
  // parameter initializated with 0,0 respectively
  console.log(a, b)  // 0, 0
  console.log(a + b); // 0
  console.log(a - b); // 0
}
// mathOperation4(); // 0, 0
mathOperation4(20, 10) // 30, 10 --> use function/ function calling/ function invoke
// arguments --> Parameters updatation

/* 
  # pre-defined and user-defined functions:

  # user-defined functions: functions inside the script
      function write 
      function call

  # pre-defined :
    only using default or inbuild functions/ calling or invoking inbuild functions
    like functionName() --> E.g. Number(), alert(), prompt(), describe(), it()

  Q. Diff bt function and method ?
*/





