0 == "" //True (Both convert to 0 )
0 == "0" //True ("0"-> 0)
0 == False //True
null == undefined //True
"\t\n" ==0 //True

//Rule Breaker all below are false. 
null == 0 //False
null == ""//False
null == false //False
undefined == 0 //False 
undefined == "" //False 
undefined == false //False 
NaN == NaN // False 

console.log("" === false); //False
console.log("" == false); //True.
console.log(null == undefined); //True
console.log(null === undefined); //False
console.log(0 === false); //False
console.log(0 == false); //True
console.log("" == 0); //False

let name = null;
let age;

name = "Depti"

// var p = Null;
//p = p +10;

let a2;
console.log(a2);

let a3 = null;
console.log(a3);

let red = "#880808";

let intputAge = "true";

if(inputAge == false){
    console.log("Age is empty/invalid"); //wWRONG! "0" == false is true
}