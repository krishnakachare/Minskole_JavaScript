/*
2. Loops --> for, while, do-while, for-in, for-of
    loops running as per the conditions
    condition --> false --> break the loop

    1. Entry control loop : At Entry condition check --> for, while
    2. Exit control loop : At Exit condition check --> do-while

    for loop: Entry control loop
    initialization --> condition check --> code execute ---> updation

    for(initialization; conditionCheck; updation){
        // code
    }
*/

// for (let i = 0; i < 4; i++) { // 1, 2, 3 , 4
//     console.log(i) // 0, 1, 2, 3
// }

// i = i + 1 --> i+=1
// for (let i = 0; i < 4; i += 2) { // 2, 4
//     console.log(i) // 0, 2
// }

// forword loop, backword/reverse loop
// for (let i = 5; i > 0; i--) { // 4, 3, 2, 1, 0
//     console.log(i) // 5, 4, 3, 2, 1 
// }
// console.log("out of loop")

// jump keywords: break, continue use...
// break : break the loop or skip block of code && loop/iteration after the break keyword
for (let i = 0; i < 4; i++) {
    console.log("Inside the loop");
    console.log(i);
    if (i == 1) {
        break; // After it its skipping the block of code && for-loop/iteration
    }
    // console.log(i);
}
console.log("out of loop");

// continue : skip only one loop/iteration or skip block of code after the continue keyword
for (let i = 0; i < 4; i++) {
    console.log("Inside the loop");
    // console.log(i);
    continue; // After it its skipping the block of code
    console.log(i);
}
console.log("out of loop");