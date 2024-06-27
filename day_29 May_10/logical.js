// 4. Logical Operators: &&, ||, !
// LHS  operator RHS  --> T/F

// 1. && (And)
// If both sides are true then only returns true otherwise false
// console.log(true && true) // true
// console.log(false && true) // false
// console.log(true && false)  // false
// console.log(false && false) // false

// 2. || (OR)
// If both sides are false then only returns false otherwise true
// console.log(true || true) // true
// console.log(false || true) // true
// console.log(true || false)  // true
// console.log(false || false) // false

// 3. ! (Not)
// Reverse, true->false, false->true
// not true -> false
// not false -> true
// console.log(!true) // false
// console.log(!false) // true

// LHS/RHS --> true/false, different values, conditions 


// falsy value js --> ""
console.log("" && "Hi") // false && true // false --> ""
console.log("Hi" && "") // true && false // false --> ""
console.log("JS" && "Hi") // true && true // true --> "Hi" (RHS)
console.log(false && "") // false && false // false --> false (LHS bcoz required both true)

let val = "JS" && "Hi"
console.log(val) // "Hi"
console.log("hi" && "1") // "1"
console.log(0 && 1) // 0
console.log(null && 1) // null
console.log(undefined && 1) // undefined
console.log(NaN && undefined) // NaN

console.log("hi" || "1")  // "hi"
console.log("" || "1") // "1"
console.log(1 || 0) // 1
// upto checking where getting true, one true sufficient for true otherwise false(Always RHS false)
console.log("" || false) // false || false // false --> false
console.log(false || "")  // false || false // false --> ""

let val2 = "" || "1"
console.log(val2) // "1"


/* 
&& => 
    true: required both side true, then sencond(RHS) true will return.
    false: where false getting that one return as false
|| => 
    true: required one true, then where getting ture that one return. (if LHS getting true not checking RHS)
    false: Always returns (RHS) last false
*/
