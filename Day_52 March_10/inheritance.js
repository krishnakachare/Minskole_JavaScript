// class inheritance:

// class classOne {
//     a = 10
// }
// // instance

// class classTwo extends classOne {
//     b = 10
// }
// // instance 

// class inheritance with class constructor:
// super() --> calling super constructor

class classOne {
    // super/ father constructor
    constructor(para1, para2) {
        this.name = para1
        this.lastName = para2
    }
}

// this is hold obj as value
// let obj = new classOne("kk", "kk1");
// console.log(obj);

class classTwo extends classOne {
    // child constructor
    constructor(para1, para2, para3, para4) {
        // Calling super/ father constructor
        super(para1, para2)
        this.name2 = para3
        this.lastName2 = para4
    }
}

// let obj = new classTwo("kk", "kk1");
/* 
classTwo {
  name: undefined,
  lastName: undefined,
  name2: 'kk',
  lastName2: 'kk1'
}
*/
let obj = new classTwo("abc", "abc2", "kk", "kk1");
console.log(obj)