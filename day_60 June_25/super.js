//1. Inheritance: Inheritance is the concept where one class inherits the properties

// class abc1 {
//     a = 10
// }
// class abc2 extends abc1 {
//     b = 20
// }
// let objNew = new abc2();
// console.log(objNew)
// console.log(objNew.b) // 20
// console.log(objNew.a) // 10

// class abc1 {
//     a = 10
//     constructor() {
//         console.log("Im abc1 constructor")
//     }
// }

// class abc2 extends abc1 {
//     constructor() {
//         super()
//     }
// }
// let objNew = new abc2();
// console.log(objNew)

class GrandFather {
    constructor(gFName, lastName) {
        this.grandFatherName = gFName
        this.lastName = lastName
    }
    printGrandFatherName = function () {
        console.log(`${this.grandFatherName} ${this.lastName}`)
    }
}

class Father extends GrandFather {
    constructor(gFName, FName, lastName) {
        super(gFName, lastName)
        this.fatherName = FName
        // this.lastName = lastName
    }
    printFatherName = function () {
        console.log(`${this.fatherName} ${this.lastName}`)
        // super.printGrandFatherName();
    }
}
let father = new Father("GrandFatherName", "FatherName", "LastName")

console.log(father)
console.log(father.fatherName)

console.log(father.grandFatherName)
console.log(father.lastName)

printGrandFatherName();
printFatherName();



