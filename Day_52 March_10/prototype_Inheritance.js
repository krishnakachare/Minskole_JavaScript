/* 
prototype ?
class classOne{
   prototype: object
}


__proto__ ?
array, number, string, object

let obj = {
__proto__: object
}

let arr = []
arr.__proto__ --> Array

push() --> present in Array constructor and inherite on the instance level
*/

// protoype Inheritance: push()

let arr = [1, 2, 3]
arr.push(); // inbuild example of prototype inheritance


let obj1 = {
    a: 10
}

let obj2 = {
    b: 20
}
// Obj1, obj2 instance of the Object constructor

console.log(obj1.a); // 10
console.log(obj2.b); // 20

console.log(obj2.a); // undefined

console.log(obj2.__proto__); // Object
console.log(Object.prototype); // Object
console.log(obj2.hasOwnProperty("b")); // true

obj2.__proto__ = obj1;
console.log(obj2.__proto__); // {a:10}
console.log(obj2.a); // 10
console.log(obj2.hasOwnProperty("b")); // true (bcoz of prototype chain)