/* 
# Iterable Objects: Have a Symbol.iterator method, allowing them to be used with for-of loops and other iterable contexts. Examples include arrays, strings, maps, and sets.
# Non-Iterable Objects: Do not have a Symbol.iterator method and cannot be directly used in iterable contexts like for-of. Examples include plain objects unless explicitly made iterable.

for-in : Iterates over the keys (property names) of an object.
         Best suited for iterating over the properties of an object.
for-of : Iterates over the values of an iterable object. 
         Best suited for iterating over arrays,  strings, Map, Set, and other iterable objects.

# Nested for-loop: Flat nested array, Print Pattern

*/

let obj = {
    fname: "JS",
    lname: "AA",
    age: 20,
}
let str = "Hi JS"
let arr = [10, 20, 30, "str"]

//----------------------------------------

/* 
for (let value of obj) { // TypeError: obj is not iterable
    console.log(value)  
}

- We get error because for..of loop works only on Iterable object like array.
- Here obj object are not iterables.
- pass iteratable object like array, string --> Then convert object into array
  - Make object iteratable:
    1. Object.keys({})
    2. Object.values({})
    3. Object.entries({})

*/

// 1. keys (): Inbuild object method
// arg: object
// Action : fetching properties/keys
// Return : Array
// console.log(Object.keys(obj))  // [ 'fname', 'lname', 'age' ]

// 2. vales (object): 
// Action : fetching values
// Return : Array
// console.log(Object.values(obj))  // [ 'JS', 'AA', 20 ]

// 3. entries (object): 
// Action : fetching keys,values
// Return : 2D Array (Nested array)
// console.log(Object.entries(obj))  // [ [ 'fname', 'JS' ], [ 'lname', 'AA' ], [ 'age', 20 ] ]

// for (let variableName of IteratableObject) { 
//    // Code 
// }

// for (let value of Object.keys(obj)) {  //  [ 'fname', 'lname', 'age' ]
//     console.log(value)   // 'fname', 'lname', 'age'
// }

// for (let value of Object.values(obj)) {  //  [ 'JS', 'AA', 20 ]
//     console.log(value)   // 'JS', 'AA', 20
// }

// for (let value of Object.entries(obj)) {  //  [ [ 'fname', 'JS' ], [ 'lname', 'AA' ], [ 'age', 20 ] ]
//     console.log(value)   // [ 'fname', 'JS' ], [ 'lname', 'AA' ], [ 'age', 20 ]
// }

// for (let [key, value] of Object.entries(obj)) {  //  [ [ 'fname', 'JS' ], [ 'lname', 'AA' ], [ 'age', 20 ] ]
//    // [ 'fname', 'JS' ] --> [key, value]
//    console.log(key, value) //  fname JS, lname AA, age 20
// }

//--------------------------------------------------------
// value --> array --> destructure --> break structure
// array destructure:
// [variable1, variable2, .....]

// let arrZ = [1, 2, 3]
// let [a, b, c, d] = [1, 2, 3]
// console.log(a, b) // 1 2
//-----------------------------------------------------------

// Nested loop:
for (let value of Object.entries(obj)) {  //  [ [ 'fname', 'JS' ], [ 'lname', 'AA' ], [ 'age', 20 ] ]
    for (let value2 of value) {
        console.log(value2) // fname,JS,lname,AA,age,20
    }
}

