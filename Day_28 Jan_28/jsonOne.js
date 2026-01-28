/* 
JSON : JavaScript Object Notation.

*/

let a = 10;

let obj = {

    name: "John Doe",
    age: 30,
    isStudent: false,
}

// js objcet vs Json object

/* 
JSON:

FE <-----API-------> BE


JSON Object (string)
{
    "name": "shrikrishna kachare",
    "email": "minskoleopc@gmail.com",
    "mobile": "8830729406",
    "message": "df"
}


string 
  |
JS object
  |
string

*/


// let b = {
//     "name": "shrikrishna kachare",
//     "email": "minskoleopc@gmail.com",
//     "mobile": "8830729406",
//     "message": "df"
// }


console.log(typeof obj); // object

let str = JSON.stringify(obj)
console.log(str, typeof str)
// {"name":"John Doe","age":30,"isStudent":false} string

let Obj2 = JSON.parse(str)
console.log(Obj2, typeof Obj2)
// { name: 'John Doe', age: 30, isStudent: false } object