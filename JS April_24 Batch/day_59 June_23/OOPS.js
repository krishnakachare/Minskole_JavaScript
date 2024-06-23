/* 
# OOPS : Object-Oriented Programming
        JavaScript is a programming paradigm that uses "objects" to represent data and methods. These objects can be used to model real-world entities and manage code in a more modular and organized way. 
# OOP Concepts/pillars in JavaScript:
    1. Inheritance
    2. Encapsulation
    3. Abstraction
    4. Polymorphism

1. Inheritance: Inheritance is the concept where one class inherits the properties
  from another class.  
    # Type of inheritance :
       a. single level (In bt 2 classes)
       b. multi level (In bt multiple classes)
    # Mode of inheritance :
       1.Prototype Inheritance : Inheritance achived with the help of prototype
       2.Using class (extend super) : Inheritance achived with the help of class
  
*/

let arr = [1, 2, 3]

arr.push(4); // push() inherited from Array class
console.log(arr)
/* 
b. Multilevel prototype inheritance :
 Instance level --> Array constructor --> Object constructor
*/

let obj1 = {
    a: 10
}
let obj2 = {
    b: 20,
    __proto__: obj1
}
/* 
a. Single level prototype inheritance :
 Instance level --> Object constructor
*/
console.log("Im obj1", obj1)
console.log(obj1.a) // 10
console.log(obj1.b) // undefined
console.log(obj2.b) // 20
console.log(obj2.a) // 10
console.log(obj2)

class abc2 {
    b = 20
}
class abc1 {
    a = 10
}
let objNew1 = new abc1()
let objNew2 = new abc2()
objNew1.__proto__ = obj2
console.log(objNew1)
console.log(objNew1.a) // 10
console.log(objNew1.b) // 20








