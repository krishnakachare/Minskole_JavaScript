/* 
# Object constructor methods :
Action : calling the required function/method(with its parameters) with required this value

    1. call() : functionName.call(thisValue, arg1, arg2, ...); 
    Return : depends on function working

    2. bind() : functionName.bind(thisValue, arg1, arg2, ...);
    Return : new function

    3. apply() : functionName.bind(thisValue, [arg1, arg2, ...]);
    Return : depends on function working 
*/

function add(a, b) {
    console.log(a + b)
}
// add(1, 1)

//-------------------------------------
let obj = {
    z: 10,
    print: function () {
        console.log(this.z)
    }
}
// obj.print() // 10

//--------------------------------------
let person1 = {
    name: "Ram",
    birthDate: 2000,
    calculateAge: function () {
        console.log(this.name + " Age :")
        console.log(2024 - this.birthDate)
    }
}
person1.calculateAge() // 24

let person2 = {
    name: "sham",
    birthDate: 2002,
    // calculateAge: function () {
    //     console.log(this.name + " Age :")
    //     console.log(2024 - this.birthDate)
    // }
}
// person2.calculateAge() // 22
person1.calculateAge.call(person2)

//------------------------------------------------

function printName() {
    console.log(this) // window
    console.log(this.name + " " + this.lastName)
}
// printName()

let person3 = {
    name: "JS1",
    lastName: "TS1"
}
let person4 = {
    name: "JS2",
    lastName: "TS2"
}
