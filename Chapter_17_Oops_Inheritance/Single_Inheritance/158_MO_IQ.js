class BaseTest {

    setup() {
        console.log("Base: open browser");
    }
    teardown(){
        console.log("Base: close browser");
    }

}

class UITrest extends BaseTest {

    setup() {
        super.setup(); //UITest will help you to call your parent function. super() - Constructor, super.fname() - functions name
        console.log("UI: maximiza window");
    }
    teardown(){
        console.log("UI: take screenshort");
        super.tardown();
    }

}

let test = new UITrest();
test.setup();
console.log("---");
test.teardown();
