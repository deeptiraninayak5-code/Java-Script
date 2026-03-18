//Rest Parameters
function logResult(suitName, ...results){
    console.log(`Suite: ${suitName}`) // Suite: Auth Suite
    console.log(`Results: ${results.join(", ")}`) // Results : pass, fail, pass, skip
}

logResult("Auth Suite", "Pass", "fail", "Pass", "skip")
// Suite: Auth Suite
// Results: Pass, fail, Pass, skip

function add(a, b, c){
    return a + b + c
}