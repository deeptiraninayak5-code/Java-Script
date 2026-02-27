let ststus = 0
switch(ststus){
    case false:
        console.log("False matched")
        break
    case 0:
        console.log("0 matched")
        break
}
// Output: "0 matched" (0 === 0, Not 0 === false)