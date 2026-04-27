/* 
1. Comman JS module system
   File1 --> Export --> module.exports
   File2 --> Import --> require("FilePath")

*/

let getVale = require("./fileOne.js");
console.log(getVale);
console.log(getVale.c);