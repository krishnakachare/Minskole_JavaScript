/* 
# Destructuring:
    ES6 feature
    Can destructure object --> array[], string'', object{}
    De-structure or braking object in seperate address-value pair

    For array: address(index no)-value pair

    array destructure syntax :
        let [first,second,third] = arrayname/array 
                 mutipal address = multipal values

- Can skip the array values
- Assign default values
- Swaip or exchange the variable values
- Can destructure 2D array
*/

// let a = 10 // --> 1 address = 1 value

// let arr = [1, 2, 3]
// //         0  1  3
// arr[1] // 2 --> Retrive values

// let obj = {
//     name: "JS",
//     age: 10
// }
// obj.age // 10 --> Retrive values

// // Array : Position is mandetory, not variable name
// let [a, b, c] = [1, 2, 3] // --> multipal address = multipal values
// console.log(a) // 1
// console.log(b) // 2
// console.log(c) // 3

// // can skip the values
// let [p, , q] = [1, 2, 3]
// console.log(p) // 1
// console.log(q) // 3

// // can assign the default values
// let [m, , n, t = 20] = [1, 2, 3]
// console.log(t) // undefined // 20 --> default value

// // swaip or exchange the variable values 
// var aa = 10;
// var bb = 20;
// console.log("aa", aa) // 10
// console.log("bb", bb) // 20
// var [bb, aa] = [aa, bb]
// console.log("aa", aa) // 20
// console.log("bb", bb) // 10

// let aa = 10;
// let bb = 20;

// console.log("aa", aa);
// console.log("bb", bb);

// [aa, bb] = [bb, aa];

// console.log("aa", aa);
// console.log("bb", bb);

// 2D array : can destructure any complex array structure
let arr2D = [1, [2, [3], 4, 5, [6, 7], 8], 9, 10]

let [, [r, [s], , , [, t],], , m] = arr2D
console.log(r); // 2
console.log(s); // 3
console.log(t); // 7
console.log(m); // 10