/* 
# Array methods:         
    * Functional methods:
         sort(func)
         forEach(func)
         map(func) 
         flatMap(func)        
         reduce(func(acc,el,...), initial)
         filter(func)         
         some(func)
         every(func)
         find(func)
         findLast(func)
         findIndex(func)       
*/

let arr = [1, 2, 3, 4]

/* 
reduce(func(acc,el,...), initial) –
    Action : calculate a single value over the array by calling func for 	each element and passing an intermediate result between the calls.
    Return : single value (depends on function defination)
*/
let output = arr.reduce((acc, el, ind, arr) => {
    // console.log("el", el)
    // console.log("acc", acc)
    return acc + el
}, 0);
console.log(output) // 10

/* 
filter(func) –     
    Action : filter elements through the function
    Return : New filtered array
*/
let filterOutput = arr.filter((el, ind, arr) => {
    // condition
    return el == 2
})
console.log(filterOutput) // [ 2 ]

/* 
some(func):
    Action : checking condition for some el
    Return : Boolean
*/
let someOutput = arr.some((el, ind, arr) => { // 1, 2, 3, 4
    // condition
    return el == 2
})
console.log(someOutput) // true

/* 
every(func):
    Action : checking condition for every el
    Return : Boolean
*/
let everyOutput = arr.every((el, ind, arr) => { // 1, 2, 3, 4
    // condition
    // return el == 2 // false
    // return el > 0  // true
})
console.log(everyOutput)

arr = [1, 2, 3, 2, 4]
/* 
find(func) – 
    Action : filter element through the function, return first value that make it return true.
    Return : array el
*/
let findOutput = arr.find((el, ind, arr) => {
    if (el == 2) {
        console.log("ind", ind) // 1
        return el
    }
})
console.log("output", findOutput) // 2

/* 
findLast(func) – 
    Action : filter element through the function, return last value that make it return true.
    Return : array el
*/
let findLastOutput = arr.findLast((el, ind, arr) => {
    if (el == 2) {
        console.log("ind", ind) // 3
        return el
    }
})
console.log("output", findLastOutput) // 2

/* 
findIndex(func)  - 
    Action : it is like find(), but returns the index instead of a value, where the condition match
    Return : number
*/
let findIndexOutput = arr.findIndex((el, ind, arr) => {
    // el == 2 // -1
    return el == 2 // 1
})
console.log(findIndexOutput)
// If el present in array then getting its index, otherwise -1