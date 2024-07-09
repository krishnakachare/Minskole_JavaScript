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
let dateObj = new Date();
console.log(dateObj)
// Date :
// dateObj.setFullYear(2026)
// dateObj.setFullYear(2026, 1, 10)
// dateObj.setMonth(1)
// dateObj.setMonth(-3)
// dateObj.setMonth(15)
// dateObj.setDate(9)
dateObj.setDate(dateObj.getDate() + 4) // dynamic

// Time :
dateObj.setHours(11)
dateObj.setMinutes(10)
dateObj.setSeconds(50)
console.log(dateObj)





