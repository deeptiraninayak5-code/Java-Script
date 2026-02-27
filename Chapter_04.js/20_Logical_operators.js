// && -> AND Gate
/* 
   A | B | Z
   0 | 0 | 0
   0 | 1 | 0
   1 | 0 | 0
   1 | 1 | 1
 */

// || -> Or Gate
/* 
   A | B | Z
   0 | 0 | 0
   0 | 1 | 1
   1 | 0 | 1
   1 | 1 | 1
 */

let a = true, b = false

console.log(a && b) //false
console.log(a || b) //true
console.log(!a) //false
console.log(!b) //true
