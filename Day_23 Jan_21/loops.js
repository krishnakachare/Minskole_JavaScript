/* 
  2. loops: while, do-while, for, for-in, for-of

  loop: repeat executing block of code  

  A. Entry control loops: for, while
  B. Exit control loops: do-while


  1. while loop:

    syntax:
        while(condition){
            code block to be executed
        }

*/

// while (false) {
//     console.log("Inside while loop");
// }

// while (true) {
//     console.log("Inside while loop");
// }

let falg = true;

while (falg) {
    console.log("Inside while loop");
    falg = false;
}

/* 
Inside while loop
*/


/* 
  2. do-while loop: Exit control loop

  syntax:
        do{
            code block to be executed
        }while(condition)

*/

// do {
//     console.log("Inside do-while loop");
// } while (false);

do {
    console.log("Inside do-while loop");
} while (true);



