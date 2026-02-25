console.log(greeating); // undefined
var greeating = "Hello_World!"; // global scope
console.log(greeating); // changes to "Hello, World!"

// Behind the seenes, the JavaScript engine processes the code in two phases: memory creation and code execution.

// --- phase 1: memory creation ---
// var greeating; // undefined  

// --- phase 2: code execution ---
// console.log(greeating); // undefined
// greeating = "Hello, World!"; // global scope (assignment happens during code execution)
// console.log(greeating); // changes to "Hello, World!"

