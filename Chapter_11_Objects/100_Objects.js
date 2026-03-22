// Objects
// Key and value

let student1 = { name: "Amit", age: 65 }
let student2 = { name: "Deepti"}
let student3 = { name: "Deepti", age: 23, phone: 9876543210}

// Key will not be in double qutes
// blow key in double is actually JSON
let JSON_student4 = { "name": "Deepti", "age": 24, "phone": 9876543210 }

// ------

let a = { status: "pass"}
console.log(a.status) //pass
console.log(a["status"]) //pass

let a1 = { status: 'pass'}
console.log(a.status) //pass

let b = a // b copies the REFERENCE, not the object
b.status = "fail"
console.log(a.status) //fail

// Two separate objects - different memory
let c = { status: "pass"}
let d = { status: "pass"}
console.log(c === d) //false