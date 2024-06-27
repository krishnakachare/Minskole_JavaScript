// 2. Loops --> for, while, do-while, for-in, for-of
// loops running as per the conditions
// condition --> false --> break the loop

// 1. Entry control loop : At Entry condition check --> for, while
// 2. Exit control loop : At Exit condition check --> do-while

/* 
1. while loop:Entry control loop

initialization of variable
while(condition){
    code
    updation of variable(--,++)
}
*/
let aa = 10;
// while (aa > 7) {
//     console.log(aa)
//     aa--
// }
// console.log("out of loop");

while (aa > 10) {
    console.log(aa) // 
    aa--
}
console.log("out of loop");

/* 
2. do-while loop: Exit control loop

initialization of variable
do{
   code
   updation of variable(--,++)
}while(condition)

Q. Diff b/t while and do-while loop ?
Ans: while: Entry contol loop
            Not enter in loop for 1 st time condition false 
    do-while: Exit contol loop
            Enter in loop once for 1 st time condition false 
    
*/

let a = 10;
// do {
//     console.log(a)  //  10, 9, 8
//     a--
// } while (a > 7) 
// console.log("out of loop");

do {
    console.log(a)  //  10   
} while (a > 10) 
console.log("out of loop");

