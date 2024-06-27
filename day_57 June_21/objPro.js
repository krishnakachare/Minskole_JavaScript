/*
 2.prototype : 
        -Prototype is class inbuild property who have object value.
        -Prototype is inbuild object which is inbuild attached to every instance object in javascript.
 # Use:
        -Set properties in class level
        -Inherite properties from one class to another class

All JavaScript objects inherit properties and methods from a prototype.


#  Prototype chain :
   Object --> Array, String, Number, Boolean  ---> instances

        Object
          |
        Array, String, Number, Boolean, Function --> inbuild and user define class
          |
        let arr = [1,2], Instances
      
*/

/* 
 # Prototype Use:
        1.Set properties in class level
        2.Inherite properties from one class to another class

*/
// Array :
// let arr = [1, 2, 3]
// // prototype properties : Exist in prototype
// arr.push()
// console.log(arr)
// Array class inherite properties to the arr with the help of prototype

// Array class prototype attached to the Object class
// console.log(Object.prototype)

// String:
// let str = "JS"
// console.log(str)
// console.log(Object.getPrototypeOf(str))
// str.toLowerCase()
// console.log(String.prototype)
// // prototype --> class

// Prototype inheritance will see in OOPS...

// 1. Add properties on class level : It will access in all instances:
// user define class
// class abc {
//   a = 10
// }
// console.log(abc)

// let objNew = new abc()
// // || will have multiple instances
// // |
// // |
// console.log(objNew)
// objNew.b = 10  // intance level adding property not in class abc
// console.log(objNew)
// console.log(abc)
// let objNew2 = new abc()
// console.log(objNew2) // b property not in objNew2 instance

// Add properties in class with help of prototype:
// abc.b = 20 
// console.log(abc.prototype)
// abc.prototype.b = 20 // adding properties on class level
// console.log(abc.prototype)

/* 
# Prototype chain:
  prototype ==> inbuild class property
  __proto__ ==> is a instance property. Its return instance constructor/class prototype

       Object
          |
        Array, String, Number, Boolean, Function --> inbuild and user define class
          |
        Instances...
        let arr = [1,2] 

*/

// Object:
let obj = { a: 10 }
console.log(obj)
// Direct properties : Exist in instance/direct class
console.log(obj.a) // 10
// prototype properties : Exist in prototype
console.log(obj.hasOwnProperty('a')) // true
// Get the direct obj prototype object
console.log(obj.__proto__) // obj is instance of Object class
console.log(Object.prototype)

// Array:
let arr = [] // arr is instance of Array class
console.log(arr.__proto__) // getting direct arr prototype object
console.log(Array.prototype)

// Relation bt __proto__ and prototype :
console.log(arr.__proto__ === Array.prototype) // true






