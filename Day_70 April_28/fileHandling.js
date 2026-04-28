/* 
File Handling: read, write

*/

// Comman JS Module system : require --> code Import
// 'fs' ---> path
let fs = require("fs");

fs.readFile("./ModuleSystem.txt", "utf8", (data, error) => {
    console.log(data)
    console.log(error)
})