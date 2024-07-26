/* 
# spread-rest operator: ES6 feature
    ...
    ...variableName/objectName --> spread/rest 

    spread --> separate the values
    input:
    output:

    rest --> combine the values
    input:
    output: array

    // use with:
        1. function
        2. destructuring
*/

// array, string, object
let arr = [1, 2, 3, 4]
console.log(...arr) // 1 2 3 4

//1.
// function abc(a, b) {
//     console.log(a, typeof (a))
//     console.log(b, typeof (b))
// }
// abc(arr) // arg --> 1
// abc(...arr) // arg --> 4

// 2.
function abc(...a) {
    console.log(a, typeof (a))
}
abc(arr) // arg --> 1
