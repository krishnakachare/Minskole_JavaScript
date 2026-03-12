/* 
- JavaScript stores dates as number of milliseconds since January 01, 1970.
# Ways of Creating Date Objects :
    1. new Date()
    2. new Date(milliseconds)
    3. new Date(date string)
        e.g : new Date("2023-03-28")
    4. new Date(year,month,day,hours,minutes,seconds,ms)
        JavaScript counts months from 0 (January) to 11 (December).
*/

// Time/clock create in js:

let timeObj = new Date();
console.log(timeObj); //  2026-03-12T15:27:15.288Z

timeObj = new Date(1000);
console.log(timeObj); //  1970-01-01T00:00:01.000Z

timeObj = new Date("2028-01-01");
console.log(timeObj); //  2028-01-01T00:00:00.000Z

timeObj = new Date(2029, 1, 25, 23, 30, 20, 10);
console.log(timeObj); //  2029-02-25T18:00:20.010Z


// Issue: resolution
// date object methods

// get date --> retrive date

// set date --> update date