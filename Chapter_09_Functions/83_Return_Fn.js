// Return Values

function getStatus(code){
    if (code >= 200 && code < 300) return "success"
    if (code >= 400 && code < 500) return "client error"
    if (code >= 500) return "server error"
}

console.log(getStatus(200))//success
console.log(getStatus(400))//client error
console.log(getStatus(500))//server error

// Return nothing -> undefine
function logTest(name){
    console.log(`Running: ${name}`)
    // no return statement
}

logTest("Hi this is a log")

//Return multiple value via array or object

function aaa(){
    return [2, 2, 3, 5, 4]
    // return {"name : promod"} - object
}
