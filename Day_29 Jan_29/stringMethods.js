/* 
# string properties & methods:
        length

        toUpperCase()
        toLowerCase()
        trim()
        trimStart()
        trimEnd()
        startsWith(subString)
        endsWith(subString)
        concat(joiner, joining element)
        padStart(string length, padElement)
        padEnd(string length, padElement)        
        repeat(count)
        replace(targetString, replacerString)
        replaceAll(targetString, replacerString)
*/

let str = "JavaScript";
//         0123456789
//         -9      -1


//address == index
// child --> literal type
// String --> Parent class

// function vs method
// property vs method

// console.log(str.length) // 10

// value retrive from string

// console.log(str[1]) // a
// console.log(str[-9]) // undefined

// at()
// console.log(str.at(1)) // a
// console.log(str.at(11)) // undefined
// console.log(str.at(-9)) // a

//charAt()
// console.log(str.charAt(1)) // a
// console.log(str.charAt(11))
// console.log(str.charAt(-9))

// charCodeAt()
// console.log(str.charCodeAt(1)) // 97
// console.log(str.charCodeAt(11)) // NaN
// console.log(str.charCodeAt(-9)) // NaN

// console.log(str.charCodeAt(0)) // 74
// console.log(str.charCodeAt(4)) // 74


// toUpperCase()
console.log("java".toUpperCase()); // JAVA

// toLowerCase()
console.log("JAVA".toLowerCase()); // java

// trim()
console.log(" JAVA ".length); // 6
console.log(" JAVA ".trim()); // JAVA
console.log(" JAVA ".trim().length); // 4

// trimStart()
console.log(" JAVA ".trimStart()); // JAVA
console.log(" JAVA ".trimStart().length); // 5

// trimEnd()
console.log(" JAVA ".trimEnd()); // JAVA
console.log(" JAVA ".trimEnd().length); // 5