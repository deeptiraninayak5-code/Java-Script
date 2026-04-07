class TestCase {
    constructor(name, status, priority){
        this.name = name;
        this.status = status;
        this.priority = priority;
    }
    display(){
        console.log(this.name + "->" + this.status + "->" + this.priority);
    }
}

let loginTest_ref = new TestCase("Login test", "PASS", "PO");
let signupTest_ref = new TestCase("Signup Test", "FAIL", "P1")

loginTest_ref.display();

// P0 - Learn
// P1 - Practice
// P2 - Test / Implement
// P3 - Follow your hobbies  

// Function VS Method
// Method is function but inside the class :)