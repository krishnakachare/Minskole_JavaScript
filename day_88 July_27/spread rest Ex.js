// spread operator with array
let numbers  = [11,22,33,44,55]
function addThree(a,b,c){
    console.log(a+b+c)
}
//addThree(numbers[0],numbers[1],numbers[2]) // old way, before the ES6
addThree(...numbers)

// rest operator with array
function addAll(...arr){
    console.log(arr)
    return arr.reduce(function(acc,el){
        return acc + el
    },0)
}
let q2 = addAll(12,33,44,55,66,77,33,44,55,66,77)
console.log(q2)

//1,2,3,4,5  -----> [1,2,3,4,5]
//[1,2,3,4,5] ---->  1,2,3,4,5,6

let fruits = ['apple',"mango","banana","orange"]
let [a1,...arr] = fruits
console.log(a1)
console.log(arr)

// function add1(...arr){
// return arr.reduce(function(acc,el){
//     return acc+el
// })
// }
// let ff1=add1(22,65,45,837,98,37,98,67,56,45,67,89,05,74,53,76)
// console.log(ff1)

// program 3 
let infoe = {
    firstName:"chinmay",
    lastName:"deshpande",
    city:"pune"    
}

let infob = {infoe,"age":34}
console.log(infob)

// spread operator with object
let infoc  = {...infoe,"age":34}
console.log(infoc)

// rest operator with objects 
let {city , ...infot} = infoe
console.log(city)
console.log(infot)


// Rest and Spread operators with string destructuring:

// let str = 'krishna'
// var [a,b] = str
// console.log(a)     // k
// var [a,...b] = [...str]    //  str        // string spread (new memory made)
// // rest        //  spread
// console.log(b)          // [ 'r', 'i', 's', 'h', 'n', 'a' ]
// console.log(...b)       // r i s h n a