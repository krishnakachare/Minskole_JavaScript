// re-assign/ update variable value / change variable value / modify variable value:

// var keyword: can re-assign/ update variable value with var keyword
// var a = 10;
// console.log(a); // 10
// a = "js" // --> a update/ re-assign,
// console.log(a); // js

// let keyword: can re-assign/ update variable value with let keyword
// let a = 10;
// console.log(a);
// a = "js" // --> a update/ re-assign,
// console.log(a);


// const keyword: cannot re-assign/ update variable value with const keyword
const a = 10;
console.log(a); // 10
a = "js" // --> TypeError: Assignment to constant variable.
console.log(a); // js
// value not able to update/re-assign

// Note: const keyword variable must be initialized during declaration
// can mutate the object or array elements but cannot re-assign the object or array itself
