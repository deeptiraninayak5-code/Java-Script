// Arrow Function (ES6)

const greet = function (name1){
    return`Hello, ${name1}!`
}

// if you want to make a normal function to arrow function
// Remove the Keyword function, remove the keyword return, remove the curly braces, and use the =>

const greet1 = (name2) => `hello, ${name2}!`

console.log(greet("Deepti"))//Hello, Deepti!
console.log(greet1("Deepti"))//hello, Deepti!

// arrow functions only generally works whenever you have a single line
const doubleIt = n => n *2
console.log(doubleIt(10))//20

// no params - parens required
const getEnv = () => "staging"
console.log(getEnv())//staging

// suppose we have a muti-line. Can we use arrow function everywhere?
// Multi-line - needs curly braces + return
const getResult = (Score) => {
    if (Score >= 70 )return "pass"
    return "fail"
}
console.log(getResult("80"))//pass