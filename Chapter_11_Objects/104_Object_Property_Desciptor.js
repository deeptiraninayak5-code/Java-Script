let obj = { name: "Login"}
console.log(Object.getOwnPropertyDescriptor(obj, "name"))

// {
// value: "login"
// writable: true, <-can change the value
// enumerable: true, <- shows in for...in / Object.keys()
// cofigurable: true <- can delete or redefine
// }