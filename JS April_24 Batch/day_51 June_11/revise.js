/* 
•	value comparison, address comparison
•	Pass by value, Pass by address/referance
•	value copy, address/referance copy
    •	shallow copy, Deep copy

# Working with Primitive and Non-Primitive datatypes:
    1. comparsion
    2. Pass by
    3. Copy
---------------------------------
// Primitive datatype: Direct value stored on the address
    let a = 10;
// Non-Primitive datatype: Nested address-values pairs stored on the address
    let arr = [1, 2, 3]
    let arry = [1, 2, 3]

--------------------------------
1. comparsion:  
  # value comparison: comparsion operator can directly compare values
    1 == 1  // true
    arr == arr // true

  # address comparison: comparsion operator can not compare nested stored values
    [1,2] == [1,2] // false
    arr == arry // false
    arr == arr // true
-----------------------------------

2. Pass by: At time of function calling

        function update(para) {
            // If para primitive its creating new memory in block
            // If para Non-primitive its creating new address (para) in block and pointing to the arr value
            // update operations
        }
        update(a) // Primitive --> Value copy --> Passing value (Pass by value)
        update(arr) // Non-Primitive --> address copy --> Passing address (Pass by address)
------------------------------------

3. Copy:
     A. value : Memory Allocation (1 seperate address for 1 seperate value)
        # Types of value copy:
          1. Shallow copy : combination of value and address copy for nested object structure
          2. Deep copy : Totally seperate value copy with all nested object structure
     B. address/refrance/variableName : 1 value(memory creation) for multipal addresses

*/

let arr = [1, 2, 3];
let arr2 = [1, 2, 3];
let num1 = 10;

// 1. comparsion :
// console.log(5 == 5) // true (primitive datatype)
// console.log("hi" == "hi") // true
// console.log([1, 2, 3] == [1, 2, 3]) // false (Non-Primitive datatype)
// console.log(arr == arr2) // false
// console.log(arr == arr) // true

//--------------------------------------
// 2. Pass by :
function updateValue(para) {
    if (Array.isArray(para))
        para.push("Hi");
    else
        para++;
    console.log(para);
}
// console.log(num1); // 10 --> Before update
// updateValue(num1); // 11
// console.log(num1); // 10 --> After update
//------------------------
// console.log(arr); // [ 1, 2, 3 ]  --> Before update
// updateValue(arr); // [ 1, 2, 3, 'Hi' ]
// console.log(arr); // [ 1, 2, 3, 'Hi' ]  --> After update

//------------------------------------------------
// 3. Copy :
// 1. address/reference copy (neither shallow copy nor deep copy)
let obj1 = { a: 10, b: 20 };
let obj2 = obj1;  // Address Copy, a new object is not being created
obj2.c = 30;
console.log(obj1); // { a: 10, b: 20, c: 30 }
console.log(obj2); // { a: 10, b: 20, c: 30 }
 
//---------------------------------------------
// 1. value copy:
//    A. shallow copy:
let obj3 = { a: 100, b: 200, c: { d: 300 } };
let obj4 = { ...obj3 };   // value copy --> shallow copy 
obj4.a = 150;
obj4.c.d = 350; // nested property, copied by address
console.log(obj3) // { a: 100, b: 200, c: { d: 350 } }
console.log(obj4) // { a: 150, b: 200, c: { d: 350 } }
// bcoz of shallow copy 

//    B. Deep copy:
let myObj1 = { a: 100, b: 200, c: { d: 300 } }
let myObj2 = structuredClone(myObj1); // value copy --> Deep Copy
myObj2.a = 150;
myObj2.c.d = 350;   // everything is copied by value(even nested properties)
console.log(myObj1) // { a: 100, b: 200, c: { d: 300 } }
console.log(myObj2) // { a: 150, b: 200, c: { d: 350 } }


