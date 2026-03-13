
// Issue: resolution
// date object methods

/* 
# Date object Methods :
    1. toString()
    2. toLocalString(locales, options)
    3. toDateString()
    4. toLocaleDateString()
    5. toTimeString()
    6. toLocaleTimeString()

* Action : converting date object into string in more readable formate &   able to configure it
* Return : string

# configurable object :
* local aurguments :
    - `"en-US"`: English (United States)
    - `"en-GB"`: English (United Kingdom)
    - `"fr-FR"`: French (France)
    - `"de-DE"`: German (Germany)
    - `"zh-CN"`: Chinese (Simplified, China)

* optional aurguments object values:
    - Date Options:
        - `weekday`: `"long"`, `"short"`, `"narrow"`
        - `year`: `"numeric"`, `"2-digit"`
        - `month`: `"numeric"`, `"2-digit"`, `"long"`, `"short"`, `"narrow"`
        - `day`: `"numeric"`, `"2-digit"`
    - Time Options:
        - `hour`: `"numeric"`, `"2-digit"`
        - `minute`: `"numeric"`, `"2-digit"`
        - `second`: `"numeric"`, `"2-digit"`
        - `timeZoneName`: `"short"`, `"long"`
    - Other Options:
        - `timeZone`: `"UTC"` or an IANA time zone name like `"America/New_York"`
        - `hour12`: `true` for 12-hour time (AM/PM), `false` for 24-hour time

  toLocalString('default', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'UTC' });
  
  toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  
  toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' });
*/


let time = new Date();
console.log(time); // 2026-03-13T15:09:09.200Z

console.log(time.toString()); // Fri Mar 13 2026 20:40:11 GMT+0530 (India Standard Time)

console.log(time.toDateString()); // Fri Mar 13 2026

console.log(time.toTimeString()); // 20:42:06 GMT+0530 (India Standard Time)

let a = time.toLocaleString('default', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'UTC' });
console.log(a); // 13/03/2026, 15:15:46

let dateString = time.toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
console.log(dateString);  // Friday 13 March, 2026

let timeString = time.toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'long' });
console.log(timeString);  // 08:49:09 pm India Standard Time
