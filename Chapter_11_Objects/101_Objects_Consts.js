const user = {
    name: "John",
    age: 30,
    email: "john5@xyz.com"
}

console.log(user) //{ name: 'John', age: 30, email: 'john5@xyz.com' }

// Accessing properties
console.log(user.name) //John
console.log(user.age) //30

// Dynamic property access
const key = "email" 
console.log(user[key]) //john5@xyz.com

// Adding/modify properties
user.city = "NYC"
user.age = 25
console.log(user) //{ name: 'John', age: 25, email: 'john5@xyz.com', city: 'NYC' }
