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
        toString()
        split(splitPoint)
*/

let str = "JavaScript"

// str+Hi
console.log(str.concat("Hi")) // JavaScriptHi
console.log(str.concat("*", "Hi")) // JavaScript*Hi

console.log(str.padStart(15, "*")) // *****JavaScript
console.log(str.padEnd(15, "*"))  // JavaScript*****
console.log(str) // JavaScript

console.log(str.repeat(3)) // JavaScriptJavaScriptJavaScript

let str2 = "Hi JS, I know JS"
console.log(str2.replace("JS", "TS"))  // Hi TS, I know JS
console.log(str2.replaceAll("JS", "TS")) // Hi TS, I know TS

/* 
* Datatype conversion:
        toString()
        split(splitPoint)
*/
let num = 10
let numStr = num.toString()
console.log(numStr, typeof (numStr)) // "10" --> string
let arr = [1, 23, 4]
let arrStr = arr.toString();
console.log(arrStr, typeof (arrStr)) // 1,23,4 string

let arr2 = str2.split(" ")
// arr2 = str2.split("")
// arr2 = str2.split("JS")
console.log(arr2, typeof(arr2)) // [ 'Hi', 'JS,', 'I', 'know', 'JS' ] object
// string --> array