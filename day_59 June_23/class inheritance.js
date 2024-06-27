/* 
2. Inheritance using class (extend super)
  a. single level inheritance : Transfering properties and methods only in bt 2 classes
*/
class abc1 {
    a = 10
}
class abc2 extends abc1 {
    b = 20
}
let objNew = new abc2();
console.log(objNew)
console.log(objNew.b) // 20
console.log(objNew.a) // 10

/* 
b. Multilevel inheritance :
    -we can inherit properties and methods from step by step (GrandFather,Father,Son) or multilevel
    -its also call forward inheritance
    -Reverce inheritance not possible

    GrandFather --> Father --> son
*/

class GrandFather {
    constructor(name, lastName) {
        this.grandFName = name
        this.grandFLastName = lastName
    }
}
// let grandFather = new GrandFather("grandName", "abc")

class Father extends GrandFather {
    constructor(fname, flastName) {
        this.fatherName = fname
        // this.fatherLastName = flastName
    }
}
let father = new Father("fatherName", "abc")
console.log(father)

// class Son {
//     constructor(sname, slastName) {
//         this.sonName = sname
//         // this.sonLastName = slastName
//     }
// }
// let son = new Son("sonName", "abc")
