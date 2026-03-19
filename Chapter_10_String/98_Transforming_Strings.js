// Transforming Strings

let str = " Hello, World! "
console.log(str.toUpperCase()) //  HELLO, WORLD! 
console.log(str.toLowerCase()) //  hello, world! 

// Trime whitespace
console.log(str.trim()) //Hello, World!

str.trimStart()
str.trimEnd()

// Replace
let msg = "Test: FAIL. Retry: FAIL."
msg.replace("FAIL", "PASS") // "Test: PASS. Retry: FAIL." (only replace 1st)
msg.replaceAll("FAIL", "PASS")
msg.replace(/FAIL/g, "PASS") // replace all with Regex

// Concatenation
"Hello" + " " + "World"
"Hello".concat(" ", "World")
`${"Hello"} ${"world"}`

let url = "https://app.vwo.con?app=promod"
console.log(url.replace(/app/g, "qa"))

// Splitting & Joining
"pass,fail,skip".split(",") //["pass", "fail", "skip"]
"hello".split("") // ["h", "e", "l", "l", "o"]

"test_login_pass".split("_").join("") // "test login pass"

// Template literal (joining with format)
let parts = ["2024", "03", "07"]
let date = parts.join("-")
console.log(date)