let a = "Deepti";
if (true){
    console.log(a);    //local variable, TDZ - Temporal Dead Zone
    let a = "temp";
    console.log(a);
}


// let b = 20;
// if(true){
//     console.log(b); //20
//     let a =30;
//     console.log(a); //30
//  }