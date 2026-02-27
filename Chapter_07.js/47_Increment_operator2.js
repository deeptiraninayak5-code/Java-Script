// let a = 10
// let b = ++a
// console.log(a)
// console.log(b)

// Expectation and result table 
// Line No. | a | b |
//     1    |10 | NA|
//     2    |11 | 11|
//     3    |11 | NA| //Print a
//     4    |NA | 11| //Print b

// let a = 10
// console.log(a++ + a)
// A+B->A-> a++ (exp -10, a-> 11)
// +
// B->11,a->11
// Exp A + ExpB -> 10 + 11

// ERT
// Line No. | a | Exp 
//     13   | 10 | NA|
//     14   | 11 | 21|

// let a = 10
// console.log(++a + ++a)
// console.log(a)

// A + B
// Exp -> 10, a -> 11
// +
// ExpB -> 12, a -> 12
// ExpA + ExpB -> 10+12-> 22
// a -> 12

// let a = 10
// console.log(++a + ++a)
// console.log(a)

let a = 10
let r = a--
console.log(r)
let r2 = --a
console.log(r2)


