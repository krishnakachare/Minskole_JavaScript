/*
2. Loops --> for, while, do-while, for-in, for-of
    loops running as per the conditions
    condition --> false --> break the loop

    1. Entry control loop : At Entry condition check --> for, while
    2. Exit control loop : At Exit condition check --> do-while

    for loop: Entry control loop
    initialization --> condition check --> code execute ---> updation
*/

// jump keywords: break, continue use...
// break : break the loop or skip block of code && loop/iteration after the break keyword
// for (let i = 0; i < 4; i++) {
//     console.log("Inside the loop");
//     console.log(i);
//     if (i == 1) {
//         break; // After it its skipping the block of code && for-loop/iteration
//     }
//     // console.log(i);
// }
// console.log("out of loop");

// // continue : skip only one loop/iteration or skip block of code after the continue keyword
// for (let i = 0; i < 4; i++) {
//     console.log("Inside the loop");
//     // console.log(i);
//     continue; // After it its skipping the block of code
//     console.log(i);
// }
// console.log("out of loop");


//--------------------------------------
// for-in, for-of : ES6
// No condition check
// No updation

// 1. for-in loop -->
// for(let variableNmae in objectName){
// // Block of code
// }
// // in --> iterating propertyName/key or index from the object

let obj = {
    fname: "JS",
    lname: "AA",
    age: 20,
}
let str = "Hi JS"
let arr = [10, 20, 30, "str"]


// for (let key in obj) {
//     console.log(key) // fname, lname,   age
//     console.log(obj[key]) // JS, AA, 20
// }

// for (let index in arr) {
//     console.log(index) //0,1,2,3 
//     console.log(arr[index]) // 10,20,30,str
// }

// for (let index in str) {
//     // console.log(index) //0,1,2,3,4 s
//     console.log(str[index]) // H,i, ,J,S
// }

//========================================
// 2. for-of loop -->
// for(let variableNmae of objectName){
// // Block of code
// }
// // of --> iterating values from the object

// for (let value of arr) {
//     console.log(value) //10,20,30,str
// }

// for (let value of str) {
//     console.log(value) // H,i, ,J,S
// }

//----------------------------------------

for (let value of obj) { // TypeError: obj is not iterable
    console.log(value)  
}



