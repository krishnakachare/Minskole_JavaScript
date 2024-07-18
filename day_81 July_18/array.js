/* 
# Array methods:     
    * To add/remove elements:
        push(...items) :
         Action : items adding at end of array
         Return : new array length

        pop() :
         Action : removing array last element
         Return : poped element

        shift() :
         Action : removing array first element
         Return : shifted out element

        unshift(...items) :
         Action : items adding at start of array
         Return : new array length

        splice(pos, deleteCount, ...items) 
         Action : Adding/replacing/deleting elements according to passed arguments
         Return : array (removed element array)

        slice(startIndex, endIndex(Excluding)) :
         Action : slicing/cuting array part according to passed index
         Return : new sliced array

        concat(...items) :
         Action : Adding items in array(items: array, string, number, ...)
         Return : new array
        
        flat() :
         Action : converting 2D array in 1D
         Return : new array

        reverse() :
         Action : reversing array
         Return : reversed array
*/

let arr = [1, 2, null, "JS", true, 3]
//         0  1   2      3    4    5  
//        -6 -5  -4     -3   -2   -1

console.table(arr)
console.log(arr.push("Hi"))
console.table(arr)

console.log(arr.pop()) // "Hi" 
console.table(arr)

console.log(arr.unshift("TS")) // 7
console.table(arr)

console.log(arr.shift("TS")) // "TS"
console.table(arr)

// console.table(arr.reverse())
// console.table(arr)

// slice(startIndex, endIndex)
let sliced = arr.slice(1)  //  [2, null, "JS", true, 3]
console.table(sliced)
console.table(arr)

sliced = arr.slice(1, 3) // [2, null]
console.table(sliced)

// splice(startIndex, noOfElements, elements)
// arr.splice(2, 0, "Hi", "Hi2");
// console.table(arr)
let spliced = arr.splice(1, 1, "Hi", "Hi2");
console.log(spliced)
console.table(arr)

let arr1 = ["JS", "TS"]

// console.table(arr.concat(10))
// console.table(arr.concat("Hi"))
console.table(arr.concat(arr1)) //  [1, 2, null, "JS", true, 3, "JS", "TS"]
// console.table(arr)

let Arr2D = [10, [1, 3, ["JS"], ["A", "B"]], 4]
console.table(Arr2D);
let flatArr = Arr2D.flat();
console.table(flatArr);
console.log(flatArr);