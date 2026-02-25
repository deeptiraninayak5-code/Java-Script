// console.log(a); // undefined
// var a = "Deepti"; // global scope
// console.log(a); // "Deepti"

// --- phase 1: memory creation ---
// var a; // undefined
// var b; // undefined

// --- phase 2: code execution ---
console.log(a); // undefined
var a = "Deepti"; // global scope
console.log(a); // changes to "Deepti"

// Hoisting does not physically move your code.
// it is a mental process that happens during the compilation phase of the JavaScript engine.