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
*/

// 1. object literal;
let obj = {
    a: 10,
    'arr 1': [1, 2, 3]
}
// console.log(obj)

// 2. function constructor (ES5)
// Constructor: A constructor is a special function that creates and initializes an object instance of a class
function objj2(para) {
    this.name = para;
}
let obj2 = new objj2("JS"); // new constroctorName(arg)
// console.log(obj2) // objj2 { name: 'JS' }

// 3. Class (ES6)
// Class: blueprint, plan, template, mould for the object creation
class obj3 {
    constructor(para) {
        this.name = para;
    }
    // methods
}
let objj3 = new obj3("JS3");
// can create multipal objects
// console.log(objj3)  // obj3 { name: 'JS3' }
// console.log(typeof obj3);  // function

//  4. new Object();
// let obj4 = new Object({a:10});
// let obj4 = new Object("Hi");
// console.log(obj4) // { a: 10 }

// 5. Object.create();
let obj5 = Object.create({});
// console.log(obj5)  //{}