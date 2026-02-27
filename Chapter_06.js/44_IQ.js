let testScore = 85

switch(true){
    case(testScore >= 90):
        console.log("Outstanding, Top Performer")
        brake
    case(testScore >= 80):
        console.log("Excellent, above expectations. ")
        break
    case(testScore >= 70):
        console.log("Good, meets expectations")
        break
    case(testScore >= 60):
        console.log("Average")
        break
    case(testScore >= 50):
        console.log("Needs Improvement")
        break
    default:
        console.log("Unsatisfied required training")
}