/* 
# spread-rest operator: ES6 feature
    ...
    ...objectName/variableName --> spread/rest 

    spread --> separate the values
    input: string, array, object
    output: depends on the separate value

    rest --> combine the values
    input: any random entities
    output: array/object

    // use with:
        1. function
        2. destructuring
*/

// Spread operation : array, string, object
let arr = [1, 2, 3, 4]
console.log(...arr) // 1 2 3 4

// Function :
function abc(a, b) {
    console.log(a, typeof (a))
    console.log(b, typeof (b))
}
// abc(arr) // arg --> 1
// abc(...arr) // arg --> 4

// Rest operation :
// function abc(...a) {
//     console.log(a, typeof (a))
// }
// // abc(arr) // arg --> 1  // [ [ 1, 2, 3, 4 ] ] object
// abc(1, "Hi", "JS") // [ 1, 'Hi', 'JS' ] object

function abc(a, ...b) {
    console.log(a, typeof (a))
    console.log(b, typeof (b))
}
// abc(1, "Hi", "JS") //  1 number, ['Hi', 'JS' ] object


// Destructure:
// arr.push(5)
// console.log(arr) //[ 1, 2, 3, 4, 5 ] updating array

let newArr = [...arr, 5]
console.log(newArr) // [ 1, 2, 3, 4, 5 ] // spread creating new shallow copy
console.log(arr) // [ 1, 2, 3, 4 ]

// LHS(Rest)  =  RHS (Spread)
// let [x, y, ...rest] =  [...arr, 5]
let [x, y, ...rest] = newArr
console.log(x, y) // 1,2
console.log(rest) // [ 3, 4, 5 ]

// array spread 
let arr2 = [6, 7]
let arrNew = [...arr, ...arr2]
console.log(arrNew) // [ 1, 2, 3, 4, 6, 7 ]

// object:
let obj2 = {
    name: "TS",
    age: 10
}
// obj2.skill = "ABC"
console.log(obj2)

let newObj = { ...obj2, skill: "ABC" }
console.log(newObj) // { name: 'TS', age: 10, skill: 'ABC' }

// let {skill, ...rest2} = {...obj2, skill:"ABC"}
let { skill, ...rest2 } = newObj
console.log(skill) // "ABC"
console.log(rest2) // { name: 'TS', age: 10 }

let obj = { a: 20 }
let newObj2 = { ...obj2, ...obj }
console.log(newObj2) // { name: 'TS', age: 10, a: 20 } // shallow copy