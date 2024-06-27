/* # object properties:    
        1.length
        2.prototype
*/

/* 
# Retrive data from class level:
        static properties : can access without creating instance
*/
class abc {
        static a = 10 // static property / class level
        lastName = "TS" // instance static property
        constructor(nam) {
                this.name = nam  // instance dynamic property
        }
        printName = function () {
                return this.name
        }
        static printName2 = function () { // static method
                return this.a
        }
}

// console.log(abc.lastName) // undefined --> 
// // console.log(abc.printName()) // TypeError: abc.printName is not a function
// console.log(abc.a) // 10
// console.log(abc.printName2()) // 10

// let objNew = new abc("JS")
// console.log(objNew) // not seen static properties
// console.log(objNew.name) // 'JS'
// console.log(objNew.a) // undefined

/*
 2.prototype : 
        -Prototype is class inbuild property who have object value.
        -Prototype is inbuild object which is inbuild attached to every instance object in javascript.
 # Use:
        -Set properties in class level
        -Inherite properties from one class to another class

*/
let obj = { a: 10 }
console.log(obj)
// Direct properties : Exist in instance/direct class
console.log(obj.a) // 10
// prototype properties : Exist in prototype
console.log(obj.hasOwnProperty('a')) // true
// obj is instance of Object constructor

let arr = [1, 2]
console.log(arr)
// prototype properties
console.log(arr.push(3))
// arr is instance of Array constructor

let a = 10
console.log(a)
console.log(Object.getPrototypeOf(a))
// a is instance of Number constructor

let str = "JS"
console.log(str)
// str is instance of String constructor
console.log(Object.getPrototypeOf(str))
// prototype properties
str.toLowerCase()
// All JavaScript objects inherit properties and methods from a prototype.

/* 
#  Prototype chain :
   Object --> Array, String, Number, Boolean  ---> instances

        Object
          |
        Array 
          |
        let arr = [1,2]

*/




