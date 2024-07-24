/* 
  Destructure --> object
  ES6
  object --> object{}, array[], string''
*/

// let a = 10
let str = "JavaScript"
let arr = [1, 2, 3]
//         0  1  3
arr[1]// 2
let obj = {
    name: "JS",
    age: 10
}
obj.age // 10

// Array : IMP position, not IMP variable name
// mutipal address = multipal values
// syntax :
// []
let [a, b, c] = [1, 2, 3]
console.log(a) // 1
console.log(b) // 2
console.log(c) // 3

let [p, , q] = [1, 2, 3]
console.log(p) // 1
console.log(q) // 3

let [m, , n, t = 20] = [1, 2, 3]
console.log(t) // undefined // 20

// swaip the variable values 
var aa = 10;
var bb = 20;
console.log("aa", aa) // 10
console.log("bb", bb) // 20
var [bb, aa] = [aa, bb]
console.log("aa", aa) // 20
console.log("bb", bb) // 10

// object :
// syntax : {}

const {age} = obj
console.log(age) // 10

// real time example:
// const {test, expect} = require("@playwrightTest")