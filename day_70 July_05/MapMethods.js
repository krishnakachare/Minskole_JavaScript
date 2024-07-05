/* 
  use address/referance for setting, getting properties, insted of value.
*/

let objMap = new Map();
console.log(objMap)

// console.log( 10 === 10) // true
// console.log([1, 2] === [1, 2]) // false
// console.log({name: "JS"} === {name: "JS"}) // false

// objMap.set("skill", "Play")
// objMap.set([1,2], "IM Array")
// objMap.set({name: "JS"}, "IM Object")
// console.log(objMap)

// console.log(objMap.get("skill")) // Play
// console.log(objMap.get("name"))  // undefined
// console.log(objMap.get([1, 2])) // undefined
// console.log(objMap.get({name: "JS"})) // undefined

//--------------------------------------
let arr = [1, 2]
let obj = {name: "JS"}

console.log( 10 === 10) // true
console.log(arr === arr) // true
console.log(obj === obj) // true

objMap.set("skill", "Play")
objMap.set(arr, "IM Array")
objMap.set(obj, "IM Object")
// console.log(objMap)

console.log(objMap.get("skill")) // Play
console.log(objMap.get("name"))  // undefined
console.log(objMap.get(arr)) // IM Array
console.log(objMap.get(obj)) // IM Object

