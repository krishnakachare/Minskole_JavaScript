/*
 Object :
    # What is object in JS?
        Object is non-primitive datatype in JS, Its stored info/data in descriptive form.
        Object have key(property)-value pair.
        key have a string and symbol datatype and value have any datatype
        Object contains properties and methods.

    # object creation ways in JS :
        1. object literal;
        2. function constructor (ES5)
        3. Class (ES6)
        4. new Object();
        5. Object.create();

    # CURD operations on database:
        C --> Create object
        U --> Update
        R --> Retrive/get
        D --> Delete

   # object properties:

   # object methods:
        hasOwnProperty()

        Object.keys()
        Object.values()
        Object.entries()
        Object.fromEntries()

        Object.create()
        Object.assign()

    Object is non-primitive datatype.
    Object class methods to control object CURD operations:
        Object.preventExtensions()
        Object.isExtensible()
        Object.seal()
        Object.isSealed()
        Object.freeze()
        Object.isFrozen()
*/

let obj = {
    fname: "JS",
    num: 10
}
console.log(obj)
obj.printName = function (){
    return this.fname
}  // Add - Yes
obj.fname = "TS"  // Update - Yes
// delete obj.num // Delete - Yes
console.log(obj.printName()) //  invoke
console.log(obj)

/* 
8. Object.preventExtensions(objectName)
    Action : Not allow to add properties
    Return : object

9. Object.isExtensible(objectName)
    Action : checking object is Extensible or not
    Return : Boolean
*/
// console.log(Object.isExtensible(obj)) // true
// Object.preventExtensions(obj)
// obj.lName = "Hi" // Add - No
// console.log(obj.fname = "JS") // Update - Yes
// delete obj.num // Delete - Yes
// console.log(obj)
// console.log(Object.isExtensible(obj)) // false

/*
10. Object.seal(objectName)
        Action : Not allow to add and delete properties
        Return : object

11. Object.isSealed(objectName)
        Action : checking object is seal or not
        Return : Boolean
*/
// console.log(Object.isSealed(obj))  //  false
// Object.seal(obj)
// obj.lName = "Hi" // Add - No
// console.log(obj.fname) // invoke - Yes
// console.log(obj.fname = "JS") // update - Yes
// delete obj.num // Delete - No
// console.log(obj)
// console.log(Object.isSealed(obj)) // true

/* 
12. Object.freeze(objectName)
     Action : Not allow to add, update & delete properties
     Return : object

13. Object.isFrozen(objectName)
        Action : checking object is freez or not
        Return : Boolean
*/
console.log(Object.isFrozen(obj))  //  false
Object.freeze(obj)
obj.lName = "Hi" // Add - No
console.log(obj.fname = "JS") // update - No
delete obj.num // Delete - No
console.log(obj)
console.log(Object.isFrozen(obj)) // true
