/* 
** Conrol Flows in JS:
    1. Conditional satements --> if-else, switch case
    2. Loops --> for, while, do-while, for-in, for-of
 */

// 3. if else-if statement:

// console.log("Code Before the if statement...")
// if (true) {
//     console.log('if block of code executing for first true condition')
// } else if (true) {
//     console.log('else-if block of code executing for second true condition')
// } else {
//     console.log('else block of code executing for false condition/default')
// }
// console.log("Code After the if statement...")

// 4. if if (nested if statement):

// if (true) {
//     console.log("if 1")
//     if (false) {
//         console.log("if 2")
//     } else {
//         console.log("Else:if 2")
//     }
// } else {
//     console.log("Else:if 1")
// }

// if-else: 
// For nested
// for check multipal conditions

// switch case:

// switch (key) {
//     case value:
//         console.log('case1')

//     case value:
//         console.log('case2')

//     default:
//         console.log('Default case')
// }
// key == value --> true/false --> case code execute
// fall out error --> problem
// break;

// switch (1) {
//     case 0:
//         console.log('case1')
//         break;
//     case 1:
//         console.log('case2')
//         break;
//     default:
//         console.log('Default case')
// }
// console.log("Hi, I am out of statement");
// jump keywords: break, continue, return


// let day = 11; 
// let dayName;
// switch (day) {
//     case 1:
//         dayName = 'Monday';
//         break;
//     case 2:
//         dayName = 'Tuesday';
//         break;
//     case 3:
//         dayName = 'Wednesday';
//         break;
//     case 4:
//         dayName = 'Thursday';
//         break;
//     case 5:
//         dayName = 'Friday';
//         break;
//     case 6:
//         dayName = 'Saturday';
//         break;
//     case 7:
//         dayName = 'Sunday';
//         break;
//     default:
//         dayName = 'Invalid day';
// }
// console.log(`Today is ${dayName}`);

// get days from user (use prompt)

switch (0) {
    case "0": console.log("hi")
    case 0: console.log("hi") // 0 // strict comparision(===)
}

// for case not able to use condition here, required direct expression to match expression

