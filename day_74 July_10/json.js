/* 
# Datatypes in JSON: string, number, boolean, null, array, object

# JSON methods:
    1. JSON.stringify()
    2. JSON.parse() 
*/

let obj = {
    name: "JS",
    age: 10,
    isTrue: true
}
console.log(obj) // {name: 'JS', age: 10, isTrue: true}
console.log(typeof(obj)) // object
let strObj = JSON.stringify(obj)
console.log(strObj) // '{"name":"JS","age":10,"isTrue":true}'
console.log(typeof(strObj)) // string
