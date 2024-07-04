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

// let objMap = new Map([[[1, 2], "JS"], [{ name: "KK" }, 10]]);
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
// console.log(objMap2.size) // 0

/*
# Methods of Map(): set(), get(), has(), delete(), keys(), values(), entries()  

 1. set(key, value)
    Action : setting properties
    Return : updated Map object
*/
objMap2.set([1, 2], "JS");
// objMap2.set("fname", 10);
console.log(objMap2.set("id", 200))
console.log(objMap2.set("fname", 10))
console.log(objMap2.set("fname", 20))
console.log(objMap2.set(true, "true"))
console.log(objMap2.set({ name: "Ram" }, 100))
// console.log(objMap2);
// console.log(objMap2.size)

/*
 2. get(key)
    Action : Retrive properties
    Return : property value
*/
// console.log(objMap2.get("fname")) // 20
// let pro = objMap2.get(true)
// console.log(pro) // true
// console.log(objMap2.get("id")) // 200
// console.log(objMap2.get(20)) // undefined --> If key is not present and tring to retrive
// console.log(objMap2.get({ name: "Ram" })) // undefined --> Error (Bcoz key is present in map object)
// console.log(objMap2.get([1, 2])) // undefined --> Error

/*
 3. has(key)
    Action : checking key present or not in object
    Return : Boolean
*/
// console.log(objMap2.has("id"))  // true
// console.log(objMap2.has("lastName")) // false
// console.log(objMap2.has([1, 2])) // false --> Error (Bcoz key is present in map object)

/*
 4. delete(key)
    Action : deleting property
    Return : Boolean
*/
// console.log(objMap2)
// console.log(objMap2.delete("id")) // true // sucessfully deleted
// console.log(objMap2.delete("lastName")) // false --> If key is not present and tring to delete
// console.log(objMap2)

/*
 5. keys()
    Action : Collecting all map object keys in array
    Return : Array
*/
// console.log(objMap2)
// console.log(objMap2.keys())
// // Object.keys(objectName)  --> normal object
// for(let key of objMap2.keys()){
//     console.log(key)
// }

/*
 6. values()
    Action : Collecting all map object values in array
    Return : Array
*/
// console.log(objMap2)
// console.log(objMap2.values())
// for (let value of objMap2.values()) {
//     console.log(value)
// }

/*
 7. entries()
    Action : Collecting all map object key-value in nested/2D array
    Return : 2D Array
*/
// console.log(objMap2)
// console.table(objMap2.entries()) // check in terminal
// for (let property of objMap2.entries()) {
//     console.log(property)
// }

// // Array Destructure
// for (let [key, value] of objMap2.entries()) {
//     console.log(key); console.log(value)
// }



