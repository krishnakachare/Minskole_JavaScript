// Read js :
let a = 10;
let b = "Hi";

/*
value -> 10, "Hi"
Value == data, info
Types of value-> Datatype

# Js Datatypes :- 
Array, 
string, 
number --> 0, -ve, +ve, decimal(Float), NaN--> Number
boolean --> true, false
object,  
Null,
undefine, 
function, 
Symbol.

map, set --> Methods in js
userDefine datatype --> defining ways of datatypes
- user can define datatype directly


# data types have 2 sections:
A. Primitive dataype- immutable
- Can not update original value

B. Non-Primitive datatype- mutable
- Can update original value

*/

let z = "Hi"
let z1 = String("hi")

console.log(typeof NaN) //number
// NaN is a value

//Primitive datatype:
let z2 = "HiKK"
// Cant update value hence string datatype is Primitive
z2[2] = "X"
console.log(z2[2])  // k  // Expected -> X


