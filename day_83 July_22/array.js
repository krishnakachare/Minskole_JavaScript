/* 
# Array methods:         
    * Functional methods:
         sort(func)
         forEach(func)
         map(func) 
         flatMap(func)  
         filter(func)
         reduce(func(acc,el,...), initial)
         some(func)
         every(func)
         find(func)
         findLast(func)
         findIndex(func)       
*/
// callback function ? higher order function ?

/* 
sort(func) –   
    Action : array values arranging in alphabetical order
    Return : updated array   
*/

// sorting with string
let arr = ["JS", "z", "Hi", "A"]
console.log(arr.sort()) // [ 'A', 'Hi', 'JS', 'z' ]
console.log(arr)

// sorting with number (single digit)
arr = [2, 4, 3, 1]
console.log(arr.sort()) // [ 1, 2, 3, 4 ]

// sorting with number (double digit)
arr = [2, 4, 3, 11, 20, 5]
// console.log(arr.sort())  // [ 11, 2, 20, 3, 4, 5 ] // not correct

// Use callback function for sort 2 digit number:
// let sortArr = arr.sort((a, b) => {
//     return a - b // Assending order
// })
// console.log(sortArr)  // [ 2, 3, 4, 5, 11, 20 ]

let sortArr2 = arr.sort((a, b) => {
    return b - a // Desending order
})
console.log(sortArr2)  // [ 20, 11, 5, 4, 3, 2 ]

/* 
forEach(func):
    Action : Iterate/operation on the each element
    Return : undefined
*/
let arr3 = [1, 2, 3, 4, 5]

let output = arr3.forEach((element, index, array) => {
    // console.log("el", element)
    // console.log("ind", index)
    console.log("array", array)
});
console.log("output-->", output) // output--> undefined

/*
map(func) – 
    Action : Iterate/operation on the each element (as per the function defination)
    Return : New array   
*/
function mapFun(el, ind, array) {
    return el + 10;
};
let mapOutput = arr3.map(mapFun)
console.log(mapOutput); // [ 11, 12, 13, 14, 15 ]

/* 
flatMap(func) - map() + flat()
    Action : Iterate/operation on the each element (as per the function defination)
    Return : New array
*/
let arr2D = [[1, 2], 3, [4, 5]]

// 1
// let flatArr = arr2D.flat()
// console.log(flatArr)
// mapOutput = flatArr.map(mapFun)
// console.log(mapOutput); // [ 11, 12, 13, 14, 15 ]

// 2
let flatMapOutput = arr2D.flatMap((el, ind, arr) => {
    return Array.isArray(el) ? el.map(mapFun) : el + 10
})
console.log(flatMapOutput); // [ 11, 12, 13, 14, 15 ]
