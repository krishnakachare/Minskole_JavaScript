/*
# Math : Its in global object and its object.
NOTE: Math methods only accepting(argument) number datatype and returning only number datatype.
   # Math Methods:     
        1. Math.pow(x,y)
           Action: calculating the result of x power y
           Return: number  
        2. Math.abs(-x) 
           Action: will remove the negitivity and print results
           Return: number 
        3. Math.random()
           Action: will generate random value from 0.0-1.0
           Return: number
        4. Math.round(num) -->(0.5>= round for max value and 0.5< round for min value)
           Action: will round figure the value of num
           Return: number  
        5. Math.ceil(x)
           Action: calculating the largest near possible number in decimal number line.
           Return: number
        6. Math.floor(x) 
           Action: calculating the smallest near possible number in decimal number line
           Return: number 
        7. Math.max(x,y) & Math.min(x,y) 
           Action: will generate maximum and minimum values from given values
           Return: number
     
Q. Generate 4 digit OTP.
*/

// To perform mathematical operations we have math global object
// Golbal object: Maths --> Methods -> to do maths operations.

// NOTE-> methods inputs/arg always should number
// Always return number datatype

let a = 10;
let b = 10;
// Math object methods:
// 1. pow(arg1, arg2):  // arg1 ** arg2
// Action: calculating power of base arg1 with arg2
// Return: number
// console.log(Math.pow("Hi"))  // NaN
// // Not able to do maths operations, hence NaN
// console.log(Math.pow(a, b))  // 10000000000

// 2. random()
// Action: giving random value in range 0 to 1.0
// Return: number
// console.log(Math.random())
// console.log(Math.random()*10)
// console.log(Math.random()*100)
// console.log(Math.random()*10000)

// 3. round(arg)
// Action: round up number --> 0.5>= --> 1, 0.4 <=  --> 0;
// Return: number
// console.log(Math.round(1.3)) // 1
// console.log(Math.round(1.4)) // 1
// console.log(Math.round(1.5)) // 2
// console.log(Math.round(1.6)) // 2

// Q. Generate 4 digit OTP.
// OTP -> 4 digit-> new number

// Always new number --> Math.random()
// 4 digit --> Math.random() * 10000
// To get round number --> Math.round()

// let OTP =Math.round(Math.random()*10000)
// console.log(OTP)

// 4. ceil(arg)
// Action: pointing towords the maximum value
// Return: number
console.log(Math.ceil(1.0)) // 1
console.log(Math.ceil(1.1)) // 2
console.log(Math.ceil(1.2)) // 2
console.log(Math.ceil(1.3)) // 2
console.log(Math.ceil(1.4)) // 2
