// Pure Functions
// A pure function always return the same output for the same input and has no side effects

// ✅ Pure — no side effects, predictable output
function calculatePassRate(total, passed){
    return((passed/total)*100).toFixed(2)
}

console.log(calculatePassRate(10, 7)) //70.00
console.log(calculatePassRate(10, 7)) //70.00

// ❌ Impure — depends on external state

function isPassing(score){
    return score >= threshold; //depends on external variable
}
let threshold = 70
console.log(isPassing(threshold)) //true

threshold =50
console.log(isPassing(threshold)) //true