// You are working on API validation. 
// Response Code 200, 401, 403, 404 

let ResponseCode = 404

switch (ResponseCode){
    case 200:
        console.log("200, ok")
        break
    case 404:
        console.log("404, Not found!")
        break
    default :
        console.log("Status Code not match")
}