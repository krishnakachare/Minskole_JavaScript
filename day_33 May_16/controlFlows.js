/* 
** Js code running line by line---> But,
    1. Want to run some block code as per the contion/requirement
    2. Want to Repeat the code of block as per the contion/requirement
-Solution : Use JS control flows.

** Conrol Flows in JS:
    1. Conditional satements --> if-else, switch case
    2. Loops --> for, while, do-while, for-in, for-of 

What? Why? How?
    subject/Topic : JS
    what is the JS ? --> Programming lang.
    Why JS ?  --> Multiple use
    How JS works ? --> 

*Use of JS :
 - App development (front end, backend)
   - web apps 
   - mobile apps --> android, ios
   - Desktop apps --> VSC --> JS
   - App Testing --> Cypress, playwright
 - Gamming develoment
 - Data visualization.
 - IOT
 
** How JS works/ concepts/ topics -->
   Topic in JS: Conrol Flows in JS:
     1. Conditional satements --> if-else, switch case
     Based on condition code executing  

--------------------------
1. if statement:

    if(condition){
        // Block of code
    }

        Finally condition output --> Boolen true/false
        Condition true --> Then execute the if condition block
        Condition false --> Then dont execute the if condition block
*/

    // console.log("Code Before the if statement...")

    // if (true) {
    //     let a = 10
    //     console.log('if condition becoms true :', a)
    // };

    // console.log("Code After the if statement...")

    // console.log("Code Before the if statement...")

    // if (false) {
    //     let a = 10
    //     console.log('if condition becoms true :', a)
    // };

    // console.log("Code After the if statement...")

    // conditions --> true/false, conditions, values

// 2. if-else statement:

    // if (condition) {
    //     // if Block of code for true condition
    // } else {
    //     // else Block of code for false condition
    // }

    // console.log("Code Before the if statement...")
    // if (true) {
    //     console.log('if block of code executing for true condition')
    // } else {
    //     console.log('else block of code executing for false condition/default')
    // }
    // console.log("Code After the if statement...")

// 3. if else-if statement:

    console.log("Code Before the if statement...")
    if (true) {
        console.log('if block of code executing for first true condition')
    } else if (true) {
        console.log('else-if block of code executing for second true condition')
    } else {
        console.log('else block of code executing for false condition/default')
    }
    console.log("Code After the if statement...")