/*       -generators function
         -function recursion (factorial, fibonacci)
           0  1 1 2 3 5 8 13 21 34 55 89
*/

/* 
# Generators function (ES6):
  -feature that allows you to work with functions that can be paused and resumed.
  -Can control the function block of code(paused(stop) and resumed(start)).
  -yeild, yeild*--> start/stop execution and return expression  
  -next()--> execution calling, return object
    action: block of code execution --> yield to yield
    return: object --> {value, done}
      value --> value return by yield.
      done --> indicating block of code end (true/false).
*/

function* funGenerator() {
  // yield expression
  yield 1;  //  start/stop execution and return expression
  yield 2 + 2;
  yield 5;
}

let obj = funGenerator(); // return object
// console.log(obj); // Object [Generator] {}
// console.log(obj.next()) // { value: 1, done: false }
// console.log(obj.next()) // { value: 4, done: false }
// console.log(obj.next()) // { value: 5, done: false }
// console.log(obj.next()) // { value: undefined, done: true }

function* funGenerator2() {
  // return expression
  yield "JS";  // start/stop execution and return expression
  return 2 + 2 + 2; // end execution and return expression
  yield 10;
}
let obj2 = funGenerator2();
// console.log(obj2.next()) // { value: "JS", done: false }
// console.log(obj2.next()) // { value: 6, done: true }
// console.log(obj2.next()) // { value: undefined, done: true }

function* funGenerator3() {
  // yield* expression
  yield "JS";  // stop/resume execution and return expression
  yield [1, 2, 3];
  yield* [1, 2, 3]; // iterating in iterable object
}
let obj3 = funGenerator3();
// console.log(obj3.next())  // { value: 'JS', done: false }
// console.log(obj3.next())  // { value: [ 1, 2, 3 ], done: false }
// console.log(obj3.next())  // { value: 1, done: false }
// console.log(obj3.next())  // { value: 2, done: false }
// // console.log(obj3.next())  // { value: 3, done: false }
// console.log(obj3.next().value) // console.log(obj3.next()) 
// console.log(obj3.next())  // { value: undefined, done: true }

/* ------------------------------------------
# function recursion : 
  -A recursive function is a function that calls itself until the program achieves the desired result.
  -A recursive function should have a condition that stops the function from calling itself.otherwise, 'RangeError: Maximum call stack size exceeded'  error will be thrown
  -A recursive function can be used instead of a loop where we don't know how many times the loop needs to be executed.
  ------------
  use : 
  pagination ---> cypress UI
*/

function abc() {
  console.log("I am fun...")
  abc();
  /* 
  function calling itself
  RangeError: Maximum call stack size exceeded
  */
}
abc();

