// Datatypes in js:
// number, bigInt, string, null, undefined, boolean,symbol, object,array, function, RegEx.

// let var const
// const --> cant update value(immutable datatype)
// mutable datatype--> we can update the value

// const a = "JS"
// mutable -> can update
// immutable --> can not update
// const --> Cant update value with const
//  a = 10
//  console.log(a)  // TypeError: Assignment to constant variable.

 // With const can mutate value/data
 // With the mutable datatype-> e.g array, object

const arr4 = [1, 2, 3]
console.table(arr4)
arr4.length = 0;  // can mutate
console.log(arr4)  // []
console.table(arr4)

const obj = { fName: "Js" }
obj.fName = "TS"  // mutate
console.log(obj) // { fName: "TS"}

// Global methods:
// String(), Number(), Math, alert(), confirm(), prompt()






