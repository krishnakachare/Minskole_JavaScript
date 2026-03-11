
// Private property:
class classOne {
    // static property
    static a = 10
    // Private property: #
    #b = "TS"

}

console.log(classOne.a);
let obj = new classOne();
// console.log(obj.#b); // SyntaxError: Private field '#b' must be declared in an enclosing class

// class classTwo extends classOne {
//     c = this.#b // Property '#b' is not accessible outside class 'classOne' because it has a private identifier.
// }
