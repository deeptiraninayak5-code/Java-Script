// Callback
function placeOrder(item, callback){
    console.log("Placing order")
    callback() //function call
}

// Define
function print(){
    console.log("Normal Fn - Done with the order")
}

// First way
placeOrder("Burger", print)

// Second way Anoy
placeOrder("Burger", function(){
    console.log("Anoy Fn, I am also a function without name!")
});

// Third way - Arrow Fn
placeOrder("Burger", () => {
    console.log("Arrow Fn, I am also a function without name!")
});

// test('has title', async({page}) => {

// });

function test(text, callback){
    console.log("Hi, this is test")
    callback()
}

test("Verify that the login page is working", async (page) => {
    console.log("Running TC1")
});

// test('has title', async ({ page }) => {

// });

