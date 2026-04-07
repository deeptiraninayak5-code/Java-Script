class TestRunner {
    static totalTest = 0;
    static passCount = 0;

    constructor(name, passed){
        this.name = name;
        TestRunner.totalTests++; //1
        if (passed){
            TestRunner.passCount++; //1
        }
    }
    non_static_display(){
        return this.name;
    }
    static summary(){
        return TestRunner.passCount + "/" + TestRunner.totalTests + "passed";
    }
}
// Flow of the Amazon website
new TestRunner("Login", true);
new TestRunner("Signup", flase);
new TestRunner("Cart", true);
new TestRunner("Checkout", true);

console.log(TestRunner.summary());

// You call static with ClassName.method(), Not object.method().