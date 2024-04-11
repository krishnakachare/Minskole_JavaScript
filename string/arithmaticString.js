/* Strings and Mathematical Operators
With string + is used for concatenation. For example, ‘JS is’ + ‘ fun’; results in‘JS is fun’. We can say String + String = String but what will happen if we have different data types, for example, number?

String + Number = String

 ’12' + 12;       // '1212'
 13 + '1';        // '131'
 12.34 + '34';    // "12.3434"
In JavaScript, if it finds a string with + it converts the other parameter to string. This applies to objects as well.

 '23' + [];    // '23'
 '12' + {};    // '12[object Object]'
Here, [] becomes empty string and {} is [object Object]because

 [].toString();   // ''
 const obj = {};
 obj.toString();  // '[object Object]'
Hence, String + Object = String.

But what about other operations?

 '12' - 10;     // 2
 '90.10' - 10;  // 80.10
 '12' * 12;     // 144
 '12' * '12';   // 144
 '12' / '12';   // 1
It is because these operations perform toNumber() conversion on strings. We can say, String (- * /) String = Number & String (- * /) Number = Number, provided toNumber() returns a valid number.

 'we' - 2;   // NaN
 ':(' * 2;   // NaN
 '&9' / 2;   // NaN
At this point, if we got it then let us play around a little bit more. For the + operator to behave as an addition in case of String + Number will be to convert the string to a number.

 // We have seen this
 '10' + 10;   // '1010'
 // But
 +'10' + 10;  // 20
Here the + before '12' is a unary operator which precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.

 +'10';   // 10
 +'';    // 0
To conclude let us verify the last two examples

 10 + '0' - 30;             // 70
 (12 * '12' - 10) / '10';   // 13.4
We can have a lot more complicated examples and they can get hard to debug in a plethora of code. It is important to type check the variables before performing operations.

It is important to type check the variables before performing operations. We can make use of built-in methods like typeof, isNaN(), isInteger and more options available in JavaScript or create our own functions to fit our needs.  */

console.log("1"-"-1")