/* 
4. Polymorphism: It is the combination of both overloading and overriding.
    Poly: Multipal
    morphism: Transformation

    1. Overloading :
        same class, same method name (same declaration), different signature(different defination).

    2. Overriding :
        different class, same method name (different declaration), same signature(same defination).
        Existing functionality override

    # Signature : type of arguments, no of arguments, order of arguments.

*/


function fun(a, b, c, d) {
    console.log(a, b, c, d)
}

// let fun = function () { }
// let fun = () => { }

// fun(true); // true undefined undefined undefined
// script scope:
// globally define --> window
// window.fun(true); // true undefined undefined undefined
// class --> window
// method/function --> fun()
// signature ---> arguments --> true

// function / method overloading:
// window.fun(true, 1);
// window.fun(true, 1, "Hi");
// window.fun(true, 1, "Hi", []);

// Real examples:

let arr = [1, 2, 4];
console.log(arr.slice()); // [ 1, 2, 4 ]
console.log(arr.slice(0)); // [ 1, 2, 4 ]
console.log(arr.slice(0, 2)); // [ 1, 2 ]



/* 
  2. Overriding :
        different class, same method name (different declaration), same signature(same defination).
*/
function fun2() {
    console.log("I am fun2")
}

fun2(); // I am fun2
window.fun2(); // I am fun2

let obj = {
    a: 10,
    fun2() {
        console.log("I am fun2")
    }
}

obj.fun2(); // I am fun2


// Interview:
// OOPS ?
// default examples
// real implementation
// present code --> OOPS concept