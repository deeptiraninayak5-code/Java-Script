// Iterate - Go from one to another

let tests = ["login", "checkout", "search"]

for(let i = 0; i < tests.length; i++){
    console.log(tests[i])
}

console.log("------------")

//for...of (cleanest for values)
for (let test of tests){
    console.log(test) //value
}
console.log("------------")

//forEach (no return value)
test.forEach((test, index) => {
    console.log(`${index}: ${test}`)
})

console.log("----")
// entries() - index + value

for (let[i, test] of test.entries()){
    console.log(i, test)
}

console.log("------------")

let students = ["Deepti", "Rani", "Nayak", "Pooja"]

for(let student in students){
    console.log(student, "->", students[student]) //index = in
}