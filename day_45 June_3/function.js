/*       -Closures 
         -Lexical scope (counter and parameter ex)
         -generators function
         -function recursion (factorial, fibonacci)
           0  1 1 2 3 5 8 13 21 34 55 89
         -Memoization
*/

/* 
# Lexical Scope: 
   -The scope of a variable is determined by its location within the source code and nested functions have access to variables declared in their outer scope.
# Closure: 
   -A closure is an inner function that has access to its outer function's variables even after the outer function's execution is Completed/Closed.
   -A function that retains access to its lexical scope even when it is executed outside of that lexical scope. e.g. counter
*/

function outer() {
  let a = 2;
  function inner(b) {
    console.log("inner", a + b);
  }
  inner(4);
};
// outer(); // inner 6

//-----------------------------
function add(a) {
  console.log("outerFun", a)
  return function addNum(b) {
    console.log("innerFun", a + b);
  }
}
// console.log(add())
// let fun = add(2);
// fun(5); // 7
// fun(8); // 10 
// fun(10); // 12
//--------------------------------

function counter() {
  let count = 0;
  console.log("outer fun called...")
  return function countCall() {
    count++
    console.log("inner fun", count)
  }
};
let count = counter();
count(); // 1
count(); // 2
count(); // 3
//-------------------------------------

/* 
Generators function (ES6):
  -feature that allows you to work with functions that can be paused and resumed.
  -Can control the function block of code(paused and resumed).
  -yeild--> stop and return execution  
  -next()--> execution calling, return object
*/

function* funGenerator() {
  yield 1;
}
