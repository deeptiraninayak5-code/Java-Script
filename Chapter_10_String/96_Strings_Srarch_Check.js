// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true"

// includes()
url.includes("staging") //true
url.includes("production") //false

// startsWith / endsWith 
url.startsWith("https") //true
url.startsWith("https://") //fasle
url.endsWith("true") //true

// indexOf / lastIndexOf
console.timeLog(url.indexOf("a"))
console.log(url.lastIndexOf("a"))
console.log(url.indexOf("nothere"))

// search() - accepts regex, return index
// Search basically works in a way that is searches with regex
console.log(url.search(/login/)) //regex

url.search(/\d+/)