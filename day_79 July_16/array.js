let str = "JavaScript"
console.log(str, typeof (str)) // JavaScript string

let str2 = new String("JavaScript")
console.log(str2, typeof (str2)) // [String: 'JavaScript'] object

console.log(str == str2) // true
console.log(str === str2) // false

//---------------------------------------
let arr = [1, 2, 3]
console.log(arr, typeof (arr)) // [ 1, 2, 3 ] object

let arr2 = new Array(1, 2, 3)
console.log(arr2, typeof (arr2)) // [ 1, 2, 3 ] object

console.log(arr == arr2) // false
console.log(arr === arr2) // false