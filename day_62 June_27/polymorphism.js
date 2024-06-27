/* 
4. Polymorphism: It is the combination of both overloading and overriding.
            Poly: Multipal
            morphism: Transformation
    1. Overloading :
        same class , same method name (same declaration), different signature(different defination).

    2. Overriding :
        different class , same method name (different declaration), same signature(same defination).
        Existing functionality override

    # Signature : type of arguments, no of arguments, order of arguments.
*/

// 1. overloading:
// let var const --> not using
let a = 20
a = 30
console.log(a) // 30

function add(a, b) {
    console.log(a + b)
}

function add(a, b, c) {
    console.log("IM called")
    console.log(a + b + c)
}
add(1, 1)  // NaN
add(1, 1, 1) // 3
add(1, 1, 1, 1) // 3

// .should(()={});
// .should("be.visible")
// .should("have.text", "ABC")
// .should("have.length", 8)
// .should("have.attr", "attrName", "attrValue")
// Arguments --> No. of arg, Type of arg --> Method signature


// 2. overriding:
let arr = [1, 2]
// arr.push(3)
console.log(arr.push(3)) // 3
console.log(arr) // [1,2,3]

// overriding the push method functionality :
Array.prototype.push = function () {
    console.log("IM custom push methods... override")
}
console.log(arr.push(4))
/* 
Action : printing --> 'IM custom push methods... override'
Return : undefined
*/
console.log(arr) // [1,2,3]