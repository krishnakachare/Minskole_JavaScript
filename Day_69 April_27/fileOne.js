/* 
Comman JS module system:

   File1 --> Export --> module.exports
   File2 --> Import --> require("FilePath")
*/

let a = "I am a, Going to Export";

// module.exports = a

let b = true;
let c = 10;

module.exports = { a, b, c };
