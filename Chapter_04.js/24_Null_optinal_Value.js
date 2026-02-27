let Amul = null
let V1 = Amul ?? "nandini milk"
let V2 = null ?? "default" // "default" (?? returns right side if left side is left is null/undefined)

// Modern JS - Typescript.

V1 = "which milk? -> " + V1
console.log(V1)
// very useful in test data handling.