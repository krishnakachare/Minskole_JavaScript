/* 
File Handling: read, write

*/

// Comman JS Module system : require --> code Import
// 'fs' ---> path
let fs = require("fs");

// fs.readFile("./storages.txt", "utf8", (error, data) => {
//     console.log(data)
//     console.log(error)
// })

let content = "I am New Data...!!!"

fs.writeFile("./NewFile.txt", content, (error) => {
    console.log("Completed");
    console.log(error);
})

fs.readFile("./NewFile.txt", "utf8", (error, data) => {
    console.log(data);
    console.log(error);
})