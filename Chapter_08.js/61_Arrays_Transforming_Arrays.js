let scores = [45, 82, 91, 60, 73]

// map - transforms every element, return NEW array
let grades = scores.map(s => s > 70 ? "Pass" : "Fail")
console.log(grades) //[ 'Fail', 'Pass', 'Pass', 'Fail', 'Pass' ]

//filter - keps elements that pass a test
let passing = scores.filter(s => s >= 70)
console.log(passing) //[ 82, 91, 73 ]

//reduce - accumulats to a single value
let total = scores.reduce((sum, s) => sum + s, 0); //351
console.log(total) //351

//flat - flattens nested arrays
let nested = [[1,2], [3,4], [5]]
console.log(nested.flat()) //[ 1, 2, 3, 4, 5 ]
