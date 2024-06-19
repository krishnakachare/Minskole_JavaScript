/* # object properties:    
        1.length
        2.prototype
*/

// 1. find object length:
function abcd(x, y, z) {
    console.log(x, y, z);
}
console.log(abcd.length); // 3 --> function(constructor) length

let obj = {
    /* 
     object keys --> variables, string, symbol
      values --> all js datatypes
      if value is function then that key called method
    */
    key: 'value',
    abc: () => {
       console.log(this.key)
    }
}
// find actual object length
console.log(obj.length) // undefined
console.log(Object.keys(obj).length) // 2

/* 2. prototype

# Function constroctor (ES5)
# What is class?  
    ES6 feature,user defined datatype    
    Blueprint, skelton, tempate, mould for object making

# class provinding features :
    1. class inheritance --> extend super()
    2. class constructor --> to set instance dynamic property
    3. class level properties
*/

// function abc() {
// }
// console.log(typeof abc) // function

// extend super() --> Inheritance
class abc {
    lastName = "TS" // // instance static property
    constructor(nam) {
        this.name = nam  // instance dynamic property
    }
}
console.log(typeof abc)  // function

let objNew = new abc(); // instance creation
console.log(objNew)  // abc { lastName: 'TS' }
let objNew2 = new abc("JS");
console.log(objNew2) // abc { lastName: 'TS', name: 'JS' }
console.log(objNew2.lastName)  // 'TS'
console.log(abc.lastName)  // undefined  --> Not able to retrive properties from class

// Retrive data from class level