// CallBack Functions
// A callback is a function passed as an argument to another function, to be called later

function runTest(testName, callack){
    let result = "pass"
    // 100 lines
    callack(testName, result)
}

function onComplete(name, result){
    console.log(`${name} finished with: ${result}`) //loginTest finished with: pass
}

runTest("loginTest",onComplete) 
