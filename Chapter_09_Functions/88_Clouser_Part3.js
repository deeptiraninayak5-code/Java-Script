function makeRetryTracker(max){
    let attemps = 0
    function tryAgain(testName){
        attemps++
        if (attemps > max){
            return `${testName} exceeded max retries (${max})`
        }
        return `Attempt ${attemps}/${max} for ${testName}`
    }
    return tryAgain
}

let retry = makeRetryTracker(3)
console.log(retry("Login")) //Attempt 1/3 for Login
console.log(retry("Login")) //Attempt 2/3 for Login
console.log(retry("Login")) //Attempt 3/3 for Login
console.log(retry("Login")) //Login exceeded max retries (3)