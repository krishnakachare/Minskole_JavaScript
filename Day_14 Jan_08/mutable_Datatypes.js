/* 
2. Non- Primitive data types:- mutable (can update original value)
    1. Object (E.g.Date,);
    2. Array
    3. Function  
    4. RegEx  
*/

/* 
Object:

            = value

            = {
                key:value,
                key2: value2

            }

*/


let boy = "Ram";
boy = 10;  // updation
console.log(boy); // "Ram"


// object literal:

// CURD: Create, Update, Retrive, Delete

boy = {
    name: "Ram",
    sName: "abc"
};

console.log(boy); // { name: 'Ram', sName: 'abc' }
console.table(boy);
// console.log(name) //ReferenceError: name is not defined

// Retrive values:
// 1. dot notation:
console.log(boy.name); // Ram
// console contains table
// console contains log

// 2. Bracket notation:
console.log(boy['name']); // Ram
console.log(boy['sName']); // abc

// why two ways ?

// Update values:
console.table(boy);
boy['sName'] = "xyz"
console.log(boy['sName']);
console.table(boy);