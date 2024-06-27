/* 
  Q. Diff bt function and method ? 

      # Types of function:
        1. function declaration (named)
        2. function expression (anonymous)
        3. arrow function

  - return
  - 'this' keyword
*/

// Q. Diff bt function and method ? 
// alert(); --> method calling
// window.alert(); --> window method

let fun = function () {
  console.log("I am expression")
}
// fun()

let obj = {
  fname: "JS",
  age: 20,
  // new syntax(function expression)
  printName: function () {
    console.log("Method 1");
  },
  // old syntax(function declaration)
  printName2() {
    console.log("Method 2");
  }
}
// obj.printName()
// obj.printName2()
// console.log("Hi")

/* 
# Method:
  - Its belongs to object.
  - If any object key stored function as value then that object key we can called method.

  KeyName() --> function calling
  objectName.KeyName() --> Method calling
------------------------------------------------------
# Types of function:
  3. arrow function (ES6 feature) :
    - Have 3 advantages over the other functions :

     1. syntax :
       let fun = ()=>{
        // block of code
       }

     2. return : 
       - return ?
         return : js reserved keyword
       - something recive
       - syntax: return expression;
       - arrow function can return expression without return keyword
     
     3. "this" keyword scope
*/

// function add(a, b) {
//   // a + b;
//   console.log(a + b)
// }
// // function calling
// add(2, 2)
// // function print
// let a = add(2, 2);
// console.log(add(2, 2))  // undefined
// console.log(a)     // undefined

// 1. function declaration:
// function add(a, b) {
//   return a + b;  
// }

// 2. function Expression:
// let add = function (a, b) {
//   return a + b;  
// }

// 3. arrow function:
// let add = (a, b) => {
//   return a + b;  
// }

//-----------------------------------------------
let add = (a, b) => a + b;  // --> can return expression without return keyword
//-------------------------------------------------

add(2, 2); // function calling
// function print
console.log(add(2, 2))  // 4
let a = add(2, 2);
console.log(a)     // 4




