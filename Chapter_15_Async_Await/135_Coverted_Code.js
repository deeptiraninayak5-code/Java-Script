function openBrowser(){
    return new Promise(function (resolve){
        resolve("Browser opened!")
    });
}

function goToLogin(){
    return new Promise(function (resolve){
        resolve("Login page loaded")
    });
}

function enterCredentials(){
    return new Promise(function (resolve){
        resolve("Credentials entered")
    });    
}
function clicklogin(){
    return new Promise(function (resolve){
        resolve("Logged in successfully")
    });
}

// openBrowser()
//     .then(function (msg){
//         console.log("Step1:", msg)
//         return goToLogin()
//     }).then(function (msg){
//         console.log("Step2:", msg)
//         return enterCredentials()
//     }).then(function (msg){
//         console.log("Step3:", msg)
//         return clicklogin()
//     }).then(function (msg){
//         console.log("Step4:", msg)
//     }).catch(function (msg){
//         console.log("Error:", error)
//     }).finally(function (){
//         console.log("Done execution!")
//     });

async function runLoginFlow(){
    let msg1 = await openBrowser();
    console.log("Step1:", msg1)

    let msg2 = await goToLogin();
    console.log("Step2:", msg2)

    let msg3 = await enterCredentials();
    console.log("Step3:", msg3)

    let msg4 = await clicklogin()
    console.log("Step4:", msg4)
}

runLoginFlow();
