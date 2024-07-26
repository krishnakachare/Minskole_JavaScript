/* 
# object destructuring:

Syntax :
    let {property1:aliasname,property2:aliasname,property3} = objectname/object 
    let {property1:{property1:aliasname}} = objectName/object --> For nested object structure

- Assign default values
- can destructure complex object structure
*/

let obj = {
    namee: "JS",
    age: 10
}
obj.age // 10 --> Retrive values

// LHS = RHS 
// const { age, namee } = obj
// console.log(age) // 10
// console.log(namee) //"JS"

// real time use of destructuring:
// const {test, expect} = require("@playwright/test")
// .then(({request,response})=>{});

// custome name/ variable or alise :
// const { age: A, namee } = obj
// // console.log(age) //ReferenceError: age is not defined
// console.log(A) // 10 --> A is alise

// Default value
// const { age, namee, skill = "ABC" } = obj
// console.log(skill) // undefined // ABC

// complex structure:
let Person = {
    fname: "abc",
    age: 60,
    family: {
        son1: {
            sName1: "Son1",
            skillSon1: ["writing1", "Reading1"]
        },
        son2: {
            sName2: "Son2",
            skillSon2: ["writing2", "Reading2"]
        },
    },
    skill: [{ skill1: "Gamming" }, { Skill2: "Playing" }]
}

let { fname, family: { son1: { skillSon1: [, a] } } } = Person;
console.log(fname) // "abc"
// console.log(family)

console.log(a) // "Reading1"
let {skill:[{skill1:js}] } = Person;
console.log(js) // Gamming
