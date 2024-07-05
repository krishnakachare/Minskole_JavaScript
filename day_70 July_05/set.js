/* 
 # set : 
   A `Set` object lets you store unique values of any type, whether primitive values or object references.
*/

// Ways of define Set object :
let setObj = new Set([1, "Hi"]);

// let setObj = new Set();
console.log(setObj) // Set(2) { 1, 'Hi' }
// console.table(setObj)

// Array --> [ , , ]
// Set --> { , , ,}

/*
# Properties of Set():
1. size
    Action : Calculating count of value/elements
    Return : Number
*/
console.log(setObj.size)  // 2

/*
# Methods of Set(): add(), has(), delete(), clear(), keys(), values(), entries()

 1. add(value)
    Action : adding unique value
    Return : updated set object
*/
console.log(setObj.add(true))
console.log(setObj.add(1)) // Existing value not able to add

/*
 2. has(value)
    Action : checking value present or not in object
    Return : Boolean
*/
console.log(setObj.has(1)) // true
console.log(setObj.has("by"))  // false

/*
 3. clear()
    Action : clearing all values from object (updated with empty object)
    Return : undefined
*/
// setObj.clear()
// console.table(setObj)

/*
 4. delete(value)
    Action : deleting value
    Return : Boolean
*/
console.log(setObj.delete(1)) // true
console.log(setObj.delete("by")) // false
console.log(setObj) 



