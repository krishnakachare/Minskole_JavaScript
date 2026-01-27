// var a = 10;
// console.log("Line: 1", a);
// function fu() {
//     console.log("line: 2", a);
//     var a = 28;
//     a++;
//     console.log("line: 3", a);
//     if (a) {
//         var a = 30;
//         a++;
//         console.log("line: 4", a);
//     }
//     console.log("line: 5", a);
// }
// console.log("Line: 6", a);
// fu();









/* 
1. Math.pow(x,y)
    Action: calculating the result of x power y
    Return: number  
*/
// Math operations: number

// console.log(Math.pow(2, 2)) // 4
// 2 ** 2

/* 
2. Math.abs(-x) 
        Action: will remove the negitivity and print results
        Return: number 

*/
// console.log(Math.abs(-4)); // 4
// +ve

/* 
3. Math.random()
    Action: will generate random value from 0.0-1.0
    Return: number
*/

// console.log(Math.random()); // 0.0 - 1.0
// Math.random(); // 0.0 - 1.0

// Q. Generate 4 digit OTP.
// console.log(Math.random() * 10000);


/* 
4. Math.round(num) -->(0.5>= round for max value and 0.5< round for min value)
    Action: will round figure the value of num
    Return: number  
*/

// 1.7 --> 2
// 1.3 --> 1
// console.log(Math.round(1.7)); // 2
// console.log(Math.round(1.3));


/* 
5. Math.ceil(x)
    Action: calculating the largest near possible number in decimal number line.
    Return: number
*/

// 1.7 -- > 2
// 1.3 -- > 2
// console.log(Math.ceil(1.3));


/*
6. Math.floor(x)
    Action: calculating the smallest near possible number in decimal number line
    Return: number
*/

// 1.7 -- > 1
// console.log(Math.floor(1.3)); //  
// console.log(Math.floor(1.9)); // 1

// 0.1 --> 1.0
// 0
// 1
// console.log(Math.floorMath.random() * 1000);
console.log(Math.round(Math.random() * 10000))

const otp = Math.floor(1000 + Math.random() * 9000);
console.log(otp);



/* 
7. Math.max(x,y) & Math.min(x,y) 
    Action: will generate maximum and minimum values from given values
    Return: number
*/

console.log(Math.max(10, 2, 3, 6, 9, 3));
console.log(Math.min(10, 2, 3, 6, 9, 3, 0));