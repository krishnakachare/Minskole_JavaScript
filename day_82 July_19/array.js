/* 
# Array methods:      
        copyWithin(copyPointIndex, copyStartIndex, copyEndIndex):
            Action : copying value within it in same length
            Return : updated array

    * search value:
        at(index):
            Action : value retrive
            Return : array vale

        indexOf(value, index(startPoint)):
            Action : searching first occurance value index
            Return : number

        lastIndexOf(value, index(startPoint))
            Action : searching last occurance value index
            Return : number

        includes(value, index(startPoint)):
            Action : checking value present or not in array
            Return : Boolean

    * Datatype conversion:
        join(joiner):
            Action : joining the array values by using joiner
            Return : string
*/

let arr = [3, 2, "TS", "JS", true, 1]
//         0  1   2      3    4    5
//        -6 -5  -4     -3   -2   -1

// copyWithin():
console.table(arr)
// let arrCopy = arr.copyWithin(1, 0, 4)
// console.table(arrCopy) // updated array
// console.table(arr)

// search ele :
// at(index):
console.log(arr.at(1)) // 2
console.log(arr.at(-1)) // 1

// indexof(value, startPoint):
console.log(arr.indexOf(true)) // 4
console.log(arr.indexOf("JavaScript")) // -1

console.log(arr.indexOf(true, 1)) // 4
console.log(arr.indexOf(true, 5)) // -1

let arr2 = [1, "JS", 2, "JS", 3, "JS", 4, "JS"]
//          0   1    2    3   4    5   6    7

// first occurance of "JS"
console.log(arr2.indexOf("JS")) // 1
console.log(arr2.lastIndexOf("JS")) // 7
console.log(arr2.lastIndexOf(2)) // 2

let firstOccurance = arr2.indexOf("JS") + 1

// second occurance of "JS"
let secondOccurance = arr2.indexOf("JS", firstOccurance)
console.log(secondOccurance) // 3

// 3 rd occurance of "JS"
let thirdOccurance = arr2.indexOf("JS", secondOccurance + 1)
console.log(thirdOccurance)  // 5

// includes(value, index(startPoint)):
console.log(arr2.includes(1)) // true
console.log(arr2.includes(1, 2)) // false

// join(joiner):
let output = arr2.join()
console.log(output, typeof(output)) // "1,JS,2,JS,3,JS,4,JS" // string
output = arr2.join("*")
console.log(output) // "1*JS*2*JS*3*JS*4*JS"
output = arr2.join(" ")
console.log(output) // "1 JS 2 JS 3 JS 4 JS"
