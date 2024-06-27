// Symbol:
// Symbol always create new momery address for its value: always we have diffrent address
console.log(Symbol("Hi") == Symbol("Hi"))  // false


// Application of symbol:
// in object:
// cant store duplicate keys:

let obj = {
    "name": "JS"
}
console.log(obj.name); // JS
// cant store duplicate keys:
// obj.name = "TS"  // update name value
console.log(obj.name);

console.log("name" == "name")
console.log(Symbol("Hi") == Symbol("Hi"))

let b = Symbol("name")
console.log(b, typeof b)  // Symbol(name) symbol
obj.b = "TS"
// obj[Symbol("name")] = "TS"
console.log(obj);  // { name: 'TS', [Symbol(name)]: 'TS' }
obj[Symbol("name")] = "TS2"
console.log(obj); // { name: 'TS', b: 'TS', [Symbol(name)]: 'TS2' }

// added symbol data in object not considered as its own property: hidden properties in obj

console.log(obj.hasOwnProperty("name"))  // true
console.log(obj.hasOwnProperty("kk"))   // false
console.log(obj.hasOwnProperty(b))   // false

// not iterating:
for (let key in obj) {
    console.log(key)  // name, b
    console.log(key, obj[key])
}


/*
# data types have 2 sections:
A. Primitive dataype- immutable
- Can not update original value

1. string
2. number --> 0, -ve, +ve, decimal(Float), NaN--> Number
3. Boolean (true, false)
3. Null
4. undefined
5. Symbol

B. Non-Primitive datatype- mutable
- Can update original value

1. Array
2. object
3. function
4. RegEx

*/

// typeof --> operator
// 1. comma-> ,
// 2. typeof
// 3. intanceof
// 4. void

// 1. comma 
let a = [1, 2, 3]
// a.filter
console.log(a)  // [ 1, 2, 3 ]
let s = (1, 2, 3)
console.log(s)  // 3
// Top -> bottom
// LHS -> RHS


// 3. instanceof 
// input instanceof targetArea
// arr instanceof Array
console.log(a instanceof Array) // true

// Array --> Global method, constructor, inbuild class in js

