//  Write a function makRateLimiter(Limit) that returns a function.
// Each call to the returned functon should track usage and return true if under limit
// , false when limit is exceeded

function makeRateLimiter(limit){
    let call = 0
    function check(){
        call++
        return call <= limit
    }
    return check
}

let limiter = makeRateLimiter(3)
console.log(limiter())//true
console.log(limiter())//true
console.log(limiter())//true
console.log(limiter())//false