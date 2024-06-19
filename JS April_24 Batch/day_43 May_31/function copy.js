/*       -Closures 
         -Lexical scope (counter and parameter ex)
         -'this' keyword
         -Constructor function
         -IIFE (Immediately Invoked Function Expression)
          | ├── Higher order function (map ex)
          | ├── Callback function

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


// function a () {
//   console.log("a", this)
// }
// a();

// let b = function () {
//   console.log("b", this)
// }
// b()

// let c = () => {
//   console.log("c", this)
// }
// c()



let obj = {
  fname: "I am obj",
  fun: function () {
    console.log("fun", this)
    let fun2 = () => {
      console.log("fun2 :", this)
    }
    fun2()
  },
  fun2: () => {
    console.log("fun2 :", this)
  },
}
// console.log(obj.lastName)
// obj.fun()
// obj.fun2()



function Bird(name) {
  this.name = name;
  console.log(this);
}
// const pigeon = new Bird('Pigeon')

// console.log(pigeon);
// Bird()

function createCounter() {
  let count = 0; // `count` is in the lexical scope of `incrementCounter`

  function incrementCounter() {
     count += 1;
     console.log(count);
  }

  return incrementCounter;
  }

  // const counter = createCounter();
  // counter(); // Outputs: 1
  // counter();
  // createCounter()();
  // counter();

  function makeAdder(x) {
    return function(y) {
       console.log(x+y) // `x` is from the lexical scope of `makeAdder`
    };
    }

    const add5 = makeAdder(5);
    console.log(add5(2)); // Outputs: 7
    add5(4)