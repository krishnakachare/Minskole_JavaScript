/* 
-JavaScript modules allow you to break up your code into separate files.
-This makes it easier to maintain a code-base.
-make code more organized and manageable.

Module System: 4 types:

1. Comman JS module system
   File1 --> Export --> module.exports
   File2 --> Import --> require("FilePath")

2. ECMAScript Module (ESM)
   File1 --> Export --> export / default export
   File2 --> Import --> import {} from "Path";

*/

// 2. ECMAScript Module (ESM)

// Object form 
// export let a = 10;

// export let obj = {
//    a: 10
// }

// 2. default export
let a = 10;

let obj = {
   a: 10
}

let str = "JS"

// export default obj;

export default { a, obj, str };

