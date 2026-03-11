class classThree {
    // Private property: #
    #mobNo

    constructor(para1, para2) {
        this.name = para1
        this.#mobNo = para2
    }

    // getter method: Retrive data
    // pName() {
    //     console.log("My Name is", this.name);
    // }

    get pName() {
        console.log("My Name is", this.name);
    }

    // setter method: update data
    // uName(para3) {
    //     this.name = para3;
    // }

    set uName(para3) {
        this.name = para3;
    }
}

let obj2 = new classThree("JS", 1234567890);
console.log(obj2)

// obj2.pName(); // My Name is JS
obj2.pName; // My Name is JS

// obj2.uName("TS");
obj2.uName = "TS";
obj2.pName;  // My Name is TS