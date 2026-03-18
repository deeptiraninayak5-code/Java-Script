// type 2 Functions
// so with argument/parameter but no return type

function greetByName(name){ //parameter
    console.log("Hi", name)
}

greetByName("Sarmistra") //argument //Hi Sarmistra
greetByName("Nayak") //Hi Nayak

function begger(money){
    console.log("thanks", money) //thanks 100
}

let returnMesomething = begger(100)
console.log(returnMesomething) //undefined

let name1 = greetByName("Liza")//Hi Liza
console.log(name1)//undefined