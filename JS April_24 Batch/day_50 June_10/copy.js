/* 
•	Pass by value, Pass by address/referance
•	value comparison, address comparison
•	value copy, address/referance copy
•	shallow copy, Deep copy
*/

/*------------------------------------------------
• value comparison vs address comparison :
    Primitive datatyes --> dell with value 
    Non-Primitive datatypes--> dell with address/referance
*/

//  Primitive datatyes:
let a = 10;

// Non-Primitive datatypes:
let obj = {
    a: 10
}
let obj2 = {
    a: 10
}
let obj1 = obj; // holding 1 value on the diffrent(2) variableName/address/referances 

// console.log("Hi" == "Hi") // true
// console.log(2 == 2)  //  true
// console.log([1, 2] == [1, 2])  //  false
// console.log({ a: 10 } == { a: 10 }) //  false
// console.log(obj == obj)  //  true
// console.log(obj == obj1) // true
// console.log(obj == obj2) // false

/*-------------------------------------------------------
•	Pass by value, Pass by address/referance:
    - Pass by Value:
        When passing a primitive data type (like numbers, strings, booleans) to a function, JavaScript passes a copy of the value to the function.
        Changes made to the parameter inside the function do not affect the original value outside the function.

    - Pass by Reference:
        When passing non-primitive data types (like objects and arrays) to a function, JavaScript passes a reference to the original object or array, not a copy.
        Changes made to the parameter inside the function affect the original object or array outside the function.
*/

// let b = 20; // Primitive datatyes:
// console.log(b) // 20
// function update1(num) {
//     num++;
//     console.log(num)
// }
// // update1(b); // 21
// // sending value
// // console.log(b) // 20
// //----------------------------------------------------
// let arr = [1, 2, 3]; // // Non-Primitive datatypes:
// console.log(arr) // [1, 2, 3]
// function update(aa) {
//     aa.push(10);
//     console.log(aa)
// }
// // update(arr); // [1, 2, 3, 10]
// // sending address
// // console.log(arr) // [1, 2, 3, 10]

// /*---------------------------------------------------
// •	address/referance copy :
// */
// let arr1 = [10, 20]
// let arr2 = arr1  // holding 1 value on the diffrent(2) variableName/address/referances
// console.log(arr2, arr1) //  [10, 20]  [10, 20]
// arr2.push(30)
// console.log(arr2, arr1) // [10, 20, 30]  [10, 20, 30]
// arr1.push(40)
// console.log(arr2, arr1)

// // Nested object structure:
// let arr4 = [10, 20, [1, 2]]
// console.log(arr4[0]) // 10
// console.log(arr4[2]) // [1, 2]
// console.log(arr4[2][0]) // 1
// let arr5 = arr4  // holding 1 value on the diffrent(2) variableName/address/referances
// console.log(arr5, arr4)  //  [10, 20, [1, 2]],  [10, 20, [1, 2]]
// arr5.push(5)
// console.log(arr5, arr4) // [ 10, 20, [ 1, 2 ], 5 ] [ 10, 20, [ 1, 2 ] 5 ]
// arr5[2].push(3)
// console.log(arr5, arr4) // [ 10, 20, [ 1, 2, 3 ], 5 ] [ 10, 20, [ 1, 2, 3 ] 5 ]

/*---------------------------------------------------
•	value copy : different addresses pointing to the different values
*/
// let arr1 = [10, 20]
// let arr2 = arr1.slice(0);
// console.log(arr1, arr2);  //[ 10, 20 ] [ 10, 20 ]
// arr2.push(5);
// console.log(arr1, arr2); // [ 10, 20 ] [ 10, 20, 5 ]
// arr1.push("Hi");
// console.log(arr1, arr2); // [ 10, 20, 'Hi' ] [ 10, 20, 5 ]
//----------------------------------
// let arr1 = [10, 20]
// arr1.slice(0); 
// console.log(arr1); // [ 10, 20 ] 
// arr1.push(0); 
// console.log(arr1); // [ 10, 20, 0 ] 
//------------------------------------

// Nested object structure:
// shallow copy:
// let arr4 = [10, 20, [1, 2]]
// let arr5 = arr4.slice(0);
// console.log(arr4, arr5) // [ 10, 20, [ 1, 2 ] ], [ 10, 20, [ 1, 2 ] ]
// arr4.push(50);
// console.log(arr4, arr5) // [ 10, 20, [ 1, 2 ], 50 ], [ 10, 20, [ 1, 2 ] ]
// arr4[2].push(0);
// console.log(arr4, arr5) // [ 10, 20, [ 1, 2, 0 ], 50 ] [ 10, 20, [ 1, 2, 0 ] ]

// Deep copy:
let arr4 = [10, 20, [1, 2]]
let arr5 = structuredClone(arr4)
console.log(arr4, arr5) // [ 10, 20, [ 1, 2 ] ], [ 10, 20, [ 1, 2 ] ]
arr4.push(30);
console.log(arr4, arr5) // [ 10, 20, [ 1, 2 ], 30 ] [ 10, 20, [ 1, 2 ] ]
arr4[2].push(10);
console.log(arr4, arr5) // [ 10, 20, [ 1, 2, 10 ], 30 ] [ 10, 20, [ 1, 2 ] ]
arr5[2].push(100);
console.log(arr4, arr5) // [ 10, 20, [ 1, 2, 10 ], 30 ] [ 10, 20, [ 1, 2, 100 ] ]