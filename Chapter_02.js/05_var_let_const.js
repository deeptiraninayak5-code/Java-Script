// var, let, const
// var - function scope

// var a = 10; // global scope
// console.log(a); // 10

//declation of the function
function print_Hello(){
    console.log("Hello theTestingAcademy!");
    var a = 20; // local scope
    console.log(a); // 20
    if(true){
        var a = 30; // local scope
        console.log(a); // 30
    }
    console.log("F->",a); // 30
}

// calling the function
print_Hello();

// var also allows re-declaration:
var a = 40; // global scope
var a = 50; // no error Re-declaration is allowed. 
console.log(a); // 50

// let - block scope

let b = 10; //global scope
console.log(b); // 10

// Declaration of the function 

function printHello(){
    console.log("Hello theTestingAcademy!");
    let b = 20; // local scope
    console.log(b); // 20
    if(true){
        let b = 5; // block scope
        console.log(b); // 5
    }
}
// calling the function
printHello();

// let does not allow re-declaration
// let b = 30; // SyntaxError: Identifier 'b' has already been declared 
// let a = 10;
// let a = 10;
let a = 10;
a = 20;
console.log(a); // 20

// var nn = "Deepti"
// let nn = "Deepti" // SyntaxError: Identifier 'nn' has already been declared

const pi = 3.14; // global scope
console.log(pi); // 3.14
pi = 3.14159; // TypeError: Assignment to constant variable.
