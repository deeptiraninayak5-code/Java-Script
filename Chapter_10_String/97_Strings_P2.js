// EXtracting Substrings

let str = "Login_Test_Pass_001"

// slice(start(included), end(excluded)) - negative indexes supported
console.log(str.slice(0, 5)) // Login
console.log(str.slice(11)) // Pass_001
console.log(str.slice(-3)) // 001
let testNumber = Str.slice(-3)

//  substring(start, end) -no negatives (treats as 0)
str.substring(6, 10)

// at() for single chars
str.at(0) // "L"
str.at(-1) //"1"
