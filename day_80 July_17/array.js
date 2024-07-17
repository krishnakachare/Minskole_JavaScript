/* 
    delete arr[1]
    typeof(arr)
    arr instanceof Array

# Array static methods:
    Array.isArray(arr) 
    Array.from() 
    Array.of() 

    keys()
    values()
    entries()

# Array properties:
        length
*/

let a = 10 // single value stored
let arr = [1, 2, null, "JS", true, 3] // array created by array literal
//         0  1  2       3    4    5   6  7  8  9  10
//        -6 -5 -4      -3   -2   -1

/* 
  Index no. 6,7,8,9 are loop holes whos stored undefined value.
  Js array is flexible/dynamic
*/

console.log(typeof (arr)) // object
console.log(arr instanceof Array) // true

console.table(arr)
console.log(arr[1]) // 2 --> Value Retrive

arr[1] = 10 // ---> Value Update
console.table(arr)
/* 
   length : calculating arrays value count and returns it in number
*/
console.log(arr.length) // 6
console.log(arr[1]) // 10
console.log(arr[10]) // undefined --> index not present in array

arr[10] = 100 // adding new value in array
console.table(arr)
console.log(arr.length) // 11
console.log(arr[6]) // undefined --> empty holes in array

/* 
delete : can delete the array values
         creates empty holes where value deleted
        
    NOTE = After the delete operation, array length remains unchanged
*/

delete arr[1]
// delete arr[10]
console.table(arr)
console.log(arr.length) // 11

/* 
# Array static methods: methods can able to access on class level
    1. Array.isArray(arr) :
       Action : checking datatype is array or not
       Return : Boolean

    2. Array.from(arg) :
       Action : creating array from arg
       Return : array

    3. Array.of(arg1, arg2) :
       Action : creating array from args
       Return : array
*/

console.log(Array.isArray(arr)) // true
console.log(Array.from("JavaScript")) // ['J', 'a', 'v', 'a','S', 'c', 'r', 'i','p', 't']
console.log(Array.of("Hi", "JavaScript")) // [ 'Hi', 'JavaScript' ]

/* 
# Object methods :
    keys()
    values()
    entries() 
*/