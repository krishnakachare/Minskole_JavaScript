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

* search string:
        search(string/RegExp)
        indexOf(string, index(startPoint))
        lastIndexOf(string, index(startPoint))
        includes(subString, index(startPoint))

* Retrive string character: 
        at(index)
        charAt(index)
        charCodeAt(index)

* Retrive sub-string:
        slice(start, end(not included))
        substring(start, end)
        substr(start, length)

* Datatype conversion:
        split(splitPoint)
*/

let str = "JavaScript"
console.log(str[1]) // a
console.log(str[-1]) // undefined

console.log(str.at(1)) // a
console.log(str.at(-1)) // t

console.log(str.charAt(1)) // a
console.log(str.charAt(-1)) // not work with -ve index

console.log(str.charCodeAt(1)) // a --> 97
console.log(str.charCodeAt(0)) // J --> 74

console.log(str.search("J")) // 0
console.log(str.search("v")) // 2

console.log(str.indexOf("v")) // 2
console.log(str.indexOf("Z")) // -1
console.log(str.indexOf("a")) // 1
console.log(str.indexOf("a", 2)) // 3

console.log(str.lastIndexOf("a")) // 3

console.log(str.includes("a")) // true
console.log(str.includes("Z")) // false
console.log(str.includes("a", 2)) // true

// "JavaScript"
console.log(str.slice(1)) // "avaScript"
console.log(str.slice(1, 4)) // "ava"
console.log(str.slice(-6, -1)) // "Scrip"
console.log(str.slice(-6)) // "Script"
console.log(str.slice(0, 0)) // ""

// -ve index == 0
console.log(str.substring(1, 4)) // "ava"
console.log(str.substring(-6, -1))  // ""
console.log(str.substring(-6)) // "JavaScript"

// substr(startInd, length)
console.log(str.substr(0, 4)) // "Java"
console.log(str.substr(4)) // "Script"

console.log(str.startsWith("J")) // true
console.log(str.startsWith("Jav")) // true
console.log(str.startsWith("z")) // false

console.log(str.endsWith("t")) // true
console.log(str.endsWith("T")) // false
console.log(str.endsWith("ipt")) // true