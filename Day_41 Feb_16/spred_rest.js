/* 
   ...
    ...objectName/variableName --> spread/rest 

    spread --> separate the values
    input: string, array, object
    output: depends on the separate value

    rest --> combine the values
    input: any random entities
    output: array/object


ES6 feature

*/

let arr = [1, 2, 3, "JS"];
// console.log(arr);
// console.table(arr); // [1, 2, 3, "JS"];

/* 
  spread --> separate the values
    input: string, array, object
    output: depends on the separate value
*/

// spread operator
// ... [1, 2, 3, "JS"];
// console.log(...arr); // 1 2 3 JS

/* 
[ 1, 2, 3, 'JS' ]

1 2 3 JS
*/
// Can Combine

// RHS :  spread operator

let arr2 = ["p", "q", ...arr]
// console.log(arr2); // [ 'p', 'q', 1, 2, 3, 'JS' ]


// TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function
// Not able to use with obj:
let obj = {
    a: "JS",
    b: true
}

// Can Combine
// RHS :  spread operator
let obj2 = {
    aa: "JS",
    bb: true,
    ...obj
}
// { a: 'JS', b: true } ???
// console.log(obj2); // { aa: 'JS', bb: true, a: 'JS', b: true }

// function:

// function fun(para1, para2, para3) {
//     console.log(para1, typeof para1)
//     console.log(para2, typeof para2)
//     console.log(para3, typeof para3)
// }

// // function calling:
// // fun(arr); // [ 1, 2, 3, 'JS' ] object
// fun(...arr);  // fun (1, 2, 3, JS);
// // spread operation

// /* 
// 1 number
// 2 number
// 3 number

// */


/* 
    rest --> combine the values
    input: any random entities
    output: array/object

*/

//  rest operator
function fun(...para1) {
    // console.log(para1, typeof para1); // [ [ 1, 2, 3, 'JS' ] ] object
    console.log(para1, typeof para1); // [ 1, 2, 3, 'JS' ] object
};

// fun(arr);  // fun ([ 1, 2, 3, 'JS' ]);
fun(1, 2, 3, 'JS');

// partial rest:
function fun(a, ...para1) {
    console.log(a, typeof a); // 1 number
    console.log(para1, typeof para1); // [ 2, 3, 'JS' ] object
};
fun(1, 2, 3, 'JS');

// use of rest: