
/* 
# Escape pattern/sequance: Denoted by \
  * Use :
       - Including special characters in strings.
       - Formatting output for readability or structured layout.

  * Patterns: \', \", \\, \n, \t, \uXXXX 
*/

// 1. Single quote (\') :
console.log("It's me.") // It's me.
console.log('It\'s me.') // It's me.
console.log('It"s me.') // It"s me.

// 2. Double quote (\") :
console.log('"Hello!", Ram') // "Hello!", Ram
console.log("\"Hello!\", Ram") // "Hello!", Ram

/* 
3. Newline (\n)  : Inserts a new line.
    <h1> Hi :
            Ram 
    <h1/>

    "Hi : Ram" ==> Not able to assert text directly in cypress need to break it.
*/
