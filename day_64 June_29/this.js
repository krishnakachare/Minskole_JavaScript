/*
Q. what is 'this'?
   - js reserved keyword or variable
   - 'this' always containing dynamic value which is object
   - 'this' is a object (Dynamic object)
   - which object ?
    - containing dynamic value/object according to its scope:
      1. In script & functions : this ==> window 
      2. In method  : this ==> owner object
          Depends on function type and its nested structure
      3. In constructor : this ==> new instance.

# this scope depends on function type and its nested structure :
  # Type of function:
   1. Normal function : (function declaration & expression)
    - 'this' value is dynamic
    - Depends on how/where the function is called

   2. Arrow function :
    - 'this' value is static
    - Depends on the where the function is declared/written
    - Enclosing lexical context/scope        

*/
// let a = "js"
var a = "js"
console.log(a) // "js"
console.log(window.a)  // "js"

console.log(this) // window

class abc {
    constructor() {
        console.log("constructor this", this) // abcNew
    }
}
let abcNew = new abc()
console.log(abcNew)

let objNew = {
    fName: "JS",
    // print: function () {
    //     console.log("this value ***", this) // objNew
    // }
    print: () => {
        console.log("this value ***", this) // window
    }
}
console.log(objNew)
objNew.print()  // objNew





