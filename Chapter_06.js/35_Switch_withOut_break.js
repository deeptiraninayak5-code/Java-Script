// switch -> sun - 0, mon - 1, ...., sat - 6
let day =2
switch(day){
    case 0 :
        console.log("Sunday, rest day")
    case 1 :
        console.log("Monday, Spring Planning")
    case 2 :
        console.log("tuesday, Development ")
    case 3 :
        console.log("Wednesday, code Review ")
    case 4 :
        console.log("Thursday, Testing")
    case 5 :
        console.log("Friday, deployment and retro ")
    case 6 :
        console.log("Saturday, retest day. ")
    default :
        console.log("Invalid day value")
}