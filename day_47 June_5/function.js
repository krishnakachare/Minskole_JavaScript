/* 
# function recursion : 
  -A recursive function is a function that calls itself until the program achieves the desired result.
  -A recursive function should have a condition that stops the function from calling itself.otherwise, 'RangeError: Maximum call stack size exceeded'  error will be thrown
  -A recursive function can be used instead of a loop where we don't know how many times the loop needs to be executed.
  ------------
  use : 
    pagination ---> cypress UI
    factorial
    fibonacci --> 0  1 1 2 3 5 8 13 21 34 55 89           
*/

function abc() {
  console.log("I am fun...")
  abc();
  /* 
  function calling itself
  RangeError: Maximum call stack size exceeded
  */
}
// abc();


/* 
Q. Find number factorial.
     4! = 4*3*2*1
*/

function factorial(num) {
  // console.log(num) // 4, 3, 2, 1, 0
  if (num == 0) return true;
  return num * factorial(num - 1);
}
// console.log(4 * 3 * 2 * 1)  // 24
// console.log(factorial(4)) // 24

/* 
# wait in cypress :
 1. Static/implicit wait
 2. Dynamic/Explicit wait

  timeout --> command wait
  for script wait -->
  cy.wait(1000) -->  Static/implicit wait
  cy.intercept()  --> Dynamic/Explicit wait 
*/

function wait(button) {
  cy.get("body").then(body => {
    if (body.find(button).length == 0) {
      cy.wait(1000);
      wait();
    } else {
      return true;
    };
  });
};
// use:
wait("button css");


