/* 
# String :
  - What is string?
  - Ways of string define
  - Template literal(ES6)

  # string property :  
   1. length
     Action: calculating no. of characters
     Return: number
     
  # string methods :
    1. toLowerCase() 
     Action: Converting all characters in lower case
     Return: string 

    2. toUpperCase() 
     Action: Converting all characters in upper case
     Return: string 

    3. trim() 
     Action: Removing start & end (both side) empty space
     Return: string 

    4. trimStart() 
     Action: Removing start side empty space
     Return: string 
        
    5. trimEnd()
     Action: Removing end side empty space
     Return: string      
*/

let str = "JavaScript"

// Retrive data from array
let arr = [1, 2]
console.log("Array", arr[-1]) // undefined
// Retrive data from string
console.log(str[1]) // a
console.log(str[15]) // undefined
console.log(str[-1]) // undefined

// String property:
console.log(str.length) // 10

// String methods:
console.log(str.toLowerCase()) // javascript
console.log(str) // JavaScript
console.log(str.toUpperCase()) // JAVASCRIPT

str = " JavaScript "
console.log(str.trim()) // "JavaScript"
console.log(str.trimEnd()) // " JavaScript"
console.log(str.trimStart()) // "JavaScript "