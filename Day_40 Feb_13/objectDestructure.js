/* 
Array: Position IMP
let/var/const [address1, address2, ..., address_n] = [value1, value2, ..., value_n];


syntax: Object --> keyName IMP
let/var/const {keyName1, keyName2, ..., keyName_n} = {key:value,...}

*/

let obj = {
    a: 10,
    b: "Hi"
}

// retrive:
// console.log(obj.a)

// update:
// obj.a = 20;




// let {} = obj
// let { a, b } = {
//     a: 10,
//     b: "Hi"
// }
// console.log(a); // 10
// console.log(b); // Hi

// let { b } = {
//     a: 10,
//     b: "Hi"
// }
// console.log(b); // Hi


// let { c  } = {
//     a: 10,
//     b: "Hi"
// }
// console.log(c); // undefined

// let { c = "defaultValue" } = {
//     a: 10,
//     b: "Hi"
// }
// console.log(c); // defaultValue

// keyName --> alise 
// keyName: aliseName
let { b: alise } = {
    a: 10,
    b: "Hi"
}
console.log(alise); // Hi


// Can destructure complex structure:

let obj2 = {
    a: 10,
    b: [1, 2, [4, 5]],
    c: {
        p: { s: true },
        q: ["JS", ["TS"]]
    },
    d: false
};

// let { d, b: [, , [, x]] } = obj2

// console.log(d); // false
// // console.log(b); // [ 1, 2, [ 4, 5 ] ]
// console.log(x); // 5

// let { c: p: s } = obj2
let { c: { p: { s } } } = obj2

console.log(s); // true


