/* 
# Map, Set ==>
        -ES6 features.
        -Map and Set are object. --> Type of object.
        -Both are iteratable.

# Map: object which stores properties in key-value pair.
       key have any type of datatype.

# Set:
*/

let a = 10 // 10 is number value which is stored on a variable
// Normal js object :
let obj = {
    // key - value --> data stored
    name: "JS",
    "lastName": "ABC",
    age: 10,
    skill: ["read", "write"],
    // [1, 2]: 20,
    // {}: 10     // not able to define key as object
}
// console.log(obj)

// for(let val of obj){
//     console.log(val)  // TypeError: obj is not iterable
// }

// Make normal object iterable
// for(let val of Object.values(obj)){
//     console.log(val)  
// }

/* 
# limitations of normal js object :
    -key is only in string datatype. Not able store key in other than string datatype
    -Normal object not iterable

# To overcome normal object limitations Map, Set objects are introduced in ES6.

# Map: object which stores properties in key-value pair.
       key have any type of datatype.

*/

// Ways of define Map object :

// let objMap = new Map([[[1,2], "JS"], [{name:"KK"}, 10]]);
// console.log(objMap) // Map(2) { [ 1, 2 ] => 'JS', { name: 'KK' } => 10 }
// console.log(typeof(objMap)) // object

let objMap2 = new Map();
// console.log(objMap2) // Map(0) {}

/* 
# Properties of Map():
1. size
    Action : Calculating count of key-value pair
    Return : Number 
*/
console.log(objMap2.size) // 0

/* 
# Methods of Map():
 1. set(key, value)
    Action : 
    Return : 
*/

objMap2.set([1, 2], "JS");
console.log(objMap2);






