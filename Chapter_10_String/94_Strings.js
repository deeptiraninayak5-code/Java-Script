// Strings

let url = "https://app.vwo.com"
let status = 'pass'
let message = `Test complected in ${320}ms` //template literal

//Single quotes
let a = 'hello'

// Double quotes
let b = "world"

//temple literals (backticks) - allow expressions & multiline 
let name1 = "Alice"
let msg = `Hello, ${name1}! 2 + 2 = ${2 + 2}`
console.log(msg) //Hello, Alice! 2 + 2 = 4

//multiline
let report = `
    Test: Login
    Status: Pass
    Duration: 320ms
    `

//string() construction (converts other types)
consolw.log(string(200))
string(true) // "true"
string(null) // "null"
string([1, 2]) // "[1, 2]"