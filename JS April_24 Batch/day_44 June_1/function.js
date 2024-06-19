/*       -Closures 
         -Lexical scope (counter and parameter ex)
         -'this' keyword
         -Constructor function
         -IIFE (Immediately Invoked Function Expression)
         ─ Higher order function (map ex)
         ─ Callback function

# Types of function:
  3. arrow function (ES6 feature) :
    - Have 3 advantages over the other functions :

     1. syntax :
       let fun = ()=>{
        // block of code
       }

     2. return : 
       - return ?
         return : js reserved keyword
       - something recive
       - syntax: return expression;
       - arrow function can return expression without return keyword
     
     3. "this" keyword scope:
*/

/* 
Q. what is 'this'?
    'this' is a object
     which object ?
     containing dynamic value/object according to scope
 
      -𝐈𝐧 𝐚 script and 𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧s, '𝐭𝐡𝐢𝐬' 𝐫𝐞𝐟𝐞𝐫𝐬 𝐭𝐨 𝐭𝐡𝐞 𝐠𝐥𝐨𝐛𝐚𝐥 𝐨𝐛𝐣𝐞𝐜𝐭.
      -𝐈𝐧 𝐚 𝐦𝐞𝐭𝐡𝐨𝐝, '𝐭𝐡𝐢𝐬' 𝐫𝐞𝐟𝐞𝐫𝐬 𝐭𝐨 𝐭𝐡𝐞 𝐨𝐰𝐧𝐞𝐫 𝐨𝐛𝐣𝐞𝐜𝐭.(depends on function and its nested structure)
      -𝐈𝐧 𝐚 𝐜𝐨𝐧𝐬𝐭𝐫𝐮𝐜𝐭𝐨𝐫, '𝐭𝐡𝐢𝐬' 𝐫𝐞𝐟𝐞𝐫𝐬 𝐭𝐨 𝐭𝐡𝐞 𝐧𝐞𝐰 𝐨𝐛𝐣𝐞𝐜𝐭 𝐛𝐞𝐢𝐧𝐠 𝐜𝐫𝐞𝐚𝐭𝐞𝐝.
*/

// console.log("Outer this", this) // window
let fun = () => {
  console.log("fun", this) // window
}
// fun()

let obj = {
  fNmae: "I am Obj",
  lastName: this,  // window
  printName: function () {
    console.log("printName", this) // obj
    let printName2 = () => {
      console.log("printName3", this) // obj
    }
    printName2();
  },
  printName2: () => {
    console.log("printName2", this) // window
  }
}
// console.log("key", obj.lastName)
// obj.printName()
// obj.printName2()
//--------------------------------------------------------------

function printName1() {
  console.log(this)
}
// printName1() // window

//4. function constructor : Before the ES6 way of object create. IN ES6 class introduced
function printName(name) {
  this.name = name;
  console.log("function constructor", this)
}
// let obj2 = new printName("js");

/* ------------------------------------------------------------
5. IIFE : (Immediately Invoked Function Expression) or self calling/incoke function
   -The function is invoked Immediately after the declaration
   -If we have to exceute a block of code only once, IIFE can be used
   -self invoked functions cann't be invoked more than once.
*/

(function () {
  console.log("I am IIFE");
}())

/* ------------------------------------------------------------
# Higher-order function : 
-A function can be called as a Higher-order if that function has either of the below 2 abilities:
  1. a function has ability to return another function.
  2. a function has ability to take another function as argument.
-E.g. Array methods like filter(),map(),reduce(),sort(),  decribe("", () => { }); it("", function () { }); 
---------------------------
# callback functions:
      Writing or taking one function as aparameter to another function is called call back function

The function which is taking is called Higher order function.
The function which is in parameter is called callback function.  
*/

let add = function () {
  return 4;
}
// console.log(add) --> function print
// alert() --> function calling

function add2(num) {
  console.log(2 + num()) // 6
}
add2(add);
// add --> callback function ; add2 --> Higher order function

let arr = [1, 2, 3]
let newArr = arr.map(el => el + 10)
console.log(newArr)
// map --> Higher order function




