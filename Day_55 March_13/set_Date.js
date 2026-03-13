/* 

# Set Methods ==> we can custmize date & time
  Two Ways:
    A. Use Get method + increment/Decrement Pass it to set methods
    B. Using set methods :

        1. setFullYear()	   Set the year (optionally month and day)
        2. setMonth()	   Set the month (0-11)
        3. setDate()	   Set the day as a number (1-31)
        4. setHours()	   Set the hour (0-23)
        5. setMinutes()	   Set the minutes (0-59)
        6. setSeconds()      Set the seconds (0-59)

*/

let time = new Date();
// console.log(time.setFullYear(2030))
console.log(time); // 2030-03-13T15:34:24.327Z

// Date:
// time.setFullYear(2030, 0, 20)
console.log(time); // 2030-01-20T15:35:13.139Z

time.setMonth(0)
console.log(time); // 2026-01-13T15:37:46.585Z

time.setMonth(0, 20)
console.log(time); // 2026-01-20T15:38:16.650Z

time.setDate(22)
console.log(time); // 2026-01-22T15:38:53.554Z

// time:
time.setHours(1)
console.log(time.toLocaleTimeString()); // 1:10:41 am

time.setMinutes(1); // 1:01:09 am
console.log(time.toLocaleTimeString());

time.setSeconds(50);
console.log(time.toLocaleTimeString()); // 1:01:50 am