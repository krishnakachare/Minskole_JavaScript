/* 
# String :
  - What is string?
  - Ways of string define
  - Template literal(ES6)
*/

// string literal
let str = "JavaScript" // 'JavaScript' // `JavaScript`
console.log(str) // JavaScript
console.log(typeof (str)); // string

/* 
eval(arg) : windows method
arg : any type of value
    Action : evaluting arg
    Return : value (depends on passing arg)
*/
let add = "2+3"
console.log(add); // "2+3"
console.log(eval(add)); // 5

// string defined by String class
let str2 = new String("JavaScript")
console.log(str === str2); // false

console.log(str2) // [String: 'JavaScript']
console.log(typeof (str2)); // object

let add2 = new String("2+3")
console.log(add2); // [String: '2+3']
console.log(eval(add2)); // [String: '2+3']

/* 
valueOf() : object method
    Action: getting primitive values from the object
    Return: primitive value
*/
let value = add2.valueOf()
console.log(value, typeof(value)) // '2+3' string
console.log(eval(value)); // 5


