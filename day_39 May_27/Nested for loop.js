/* 
# for-loop:
    -Nested for-loop: loop inside the loop
    E.g.Flat nested array, Print Pattern
*/

// 1. Independent Nested for-loop:
// for (let i = 0; i < 5; i++) {
//     console.log('outer loop :', i)
//     for (let i = 0; i < 5; i++) {
//         console.log('inner loop :', i)
//     }
// }
// For outer loop 1 iteration ==> then inner loop complete execution(Completing all iterations)

// 2. Dependent Nested for-loop:
// for (let i = 0; i < 5; i++) {
//     console.log('outer loop :', i)
//     for (let j = i; j < 5; j++) {
//         console.log('inner loop :', j)
//     }
// }

// E.g. Print Pattern: 
for (let i = 1; i < 5; i++) {
    // console.log('outer loop :', i)
    let str = ''
    for (let j = 1; j <= i; j++) {
        // console.log('inner loop :', j)
        // str = str + j;
        str += j;
        /* 
        Check Here:
            str += i;
            str += "*";
            str += "1";
            str += "😊";  (window + .)
        */
    }
    console.log(str);
}

/*
Outer loop => Row of matrix
Inner loop => Column of matrix

*****
****
***
**
*
-------------
01234
1234
234
34
4
-------------
1
12
123
1234
----------------
1 
1 1 
1 1 1 
1 1 1 1 
--------------
        *
        * *
        * * *
        * * * *
*/


