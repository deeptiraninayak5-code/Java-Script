const greet = function (name) {
    return `hello, ${name}!`
}

// type 4 Function
function greet1(name1){
    return `hello, ${name1}!`
}

// Functions as Expression 
const greet2 = function(name1){
    return `hello, ${name1}!`
}

// console.log(greet("Bob"))
console.log(greet1("Bob1")) //hello, Bob1!
console.log(greet2("Bob2")) //hello, Bob2!