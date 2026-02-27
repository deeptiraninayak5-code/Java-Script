// switch -> sun - 0, mon - 1, ...., sat - 6
let day = 10
switch(day){
    case 0 :
        console.log("Sunday, rest day")
        break
    case 1 :
        console.log("Monday, Spring Planning")
        break
    case 2 :
        console.log("tuesday, Development ")
        break
    case 3 :
        console.log("Wednesday, code Review ")
        break
    case 4 :
        console.log("Thursday, Testing")
        break
    case 5 :
        console.log("Friday, deployment and retro ")
        break
    case 6 :
        console.log("Saturday, retest day. ")
        break
    default :
        console.log("Invalid day value")
}