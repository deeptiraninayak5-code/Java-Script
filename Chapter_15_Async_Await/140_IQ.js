// async function sayHello(){
//     return "Hello, QA!"
// }

// sayHello().then(function (msg){
//     console.log(msg);
// })

// async function getStatus(){
//     let ststus = await Promise.resolve(200)
//     console.log("Status code:", status)
// }

// getStatus();

// async function testFlow(){
//     let step1 = await removeEventListener.resolve("Opened browser");
//     console.log(step1)

//     let step2 = await Promise.resolve("Clicked login")
//     console.log(step2)

//     let step3 = await Promise.resolve("Verified dashboard")
//     console.log(step3)
// }

// testFlow()


// async function riskyTest(){
//     try{
//         let data = await Promise.reject("Element not found")
//         console.log(data)
//     } catch (err){
//         console.log("Test failed:", err)
//     }
// }

// riskyTest();


// async function apiTest(){
//     try{
//         let response = await Promise.resolve({ status: 201, body: "Creayed" });
//         console.log("Status:", response.status);
//         console.log("Body:", response.body)
//     } catch (err){
//         console.log("Error:", err);
//     } finally {
//         console.log("Test complect");
//     }
// }

// apiTest();

// console.log("A")


// async function test(){
//     console.log("B")
//     await Promise.resolve();
//     console.log("C")
// }

// test();
//     console.log("D")

// async function runAll(){
//     let [a, b, c] = await Promise.all([
//         Promise.resolve("Login: OK"),
//         Promise.resolve("Cart: OK"),
//         Promise.resolve("Checkout: OK")
//     ]);

//     console.log(a)
//     console.log(b)
//     console.log(c)

// }

// runAll();

// async function healthCheck(){
//     let results = await Promise.allSettled([
//         Promise.resolve("Auth: Up"),
//         Promise.reject("DB: DOWN"),
//         Promise.resolve("Cache: UP")
//     ]);

//     results.forEach(function (r) {
//         let status = r.status === "fulfilled" ? "✅" : "❌";
//         let msg = r.value || r.reason;
//         console.log(status + " " + msg);
//     });
// }

// healthCheck();

// async function checkEndpoints() {
//     let endpoints = ["/login", "/user", "/orders"];

//     for (let i = 0; i < endpoints.length; i++){
//         let result = await Promise.resolve(endpoints[i] + " -> 200");
//         console.log(result)
//     }

//     console.log("ALL checks done");
// }

// checkEndpoints();

// Async IIFE(Immediately Invoked)

// (async function (){
//     let msg = await Promise.resolve("Quick async test")
//     console.log(msg)
// })();

// console.log("Outside");

async function add(a, b){
    return a + b;
}

async function main(){
    let result = await add(10, 20)
    console.log("Sun:", result)

    let result2 = await add(result, 30)
    console.log("Total:", result2)
}

main();