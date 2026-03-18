// Higher-order Functions
// A function that takes a function as argument or returns a function

function runWithLogging(testfn, testName){
    console.log(`Starting : ${testName}`) //Starting : login Test
    let result = testfn()
    console.log(`Finished: ${testName} -> ${result}`) //Finished: login Test -> pass
    return result;
}

function loginTest(){
    return "pass"
}

function loginTestFAILED(){
    return "fail"
}

runWithLogging(loginTest, "login Test")
runWithLogging(loginTestFAILED, "Dashboard Failed Test")
// Starting : Dashboard Failed Test
// Finished: Dashboard Failed Test -> fail