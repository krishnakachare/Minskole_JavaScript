/* 
# string destructure :
  String stored its characters on the index number.
  As like array, In the string destructuring position is mandateory insted of variable name.
  
  String destructuring syntax:
    let/var/const [variable1, variable2] = "String"
*/

let str = "JavaScript"
//         01
console.log(str[2]) // v 

let [, , l] = str
console.log(l) // v