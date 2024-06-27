/* 
2. Abstraction : 
    Involves hiding complex implementation details and showing only the necessary features of an object.

Examples : push(), map(), trim()
*/

class person {
    constructor(fName, date) {
        this.firstName = fName
        this.birthDate = date
    }
    getAge = function () {
        return 2024 - this.birthDate
    }
    getFullName(){
        return `My FullName is ${this.firstName} Patil`
    }
}
let Ram = new person("ram", 2001)
console.log(Ram)
console.log(Ram.birthDate) // 2001
console.log(Ram.getAge()) // 23
console.log(Ram.getFullName()) 
