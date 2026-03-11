/* 
OOPS: 
  2. Encapsulation: Hide IMP data
     #, get, set

  3. Abstraction: Hide method logic
*/

class bankAccount {
    // data base
    // Encapsulation:
    #pin
    constructor(para1, para2) {
        this.name = para1
        this.#pin = para2
    }

    // Abstraction
    transitions(pin, ammount) {
        if (pin === this.#pin) {
            console.log("Pin correct, can withdraw", ammount);
        } else {
            console.log("Pin incorrect...!!!");
        }
    }
}

let acc = new bankAccount("Ram", 2026);
// Encapsulation:
console.log(acc); // bankAccount { name: 'Ram' }
// pin not visible and not retrive
// console.log(acc.#pin); // SyntaxError: Private field '#pin' must be declared in an enclosing class

// Abstraction:
acc.transitions(123, 100); // Pin incorrect...!!!
acc.transitions(2026, 100); // Pin correct, can withdraw 100
