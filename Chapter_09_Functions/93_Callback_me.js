function deepti_doing_work(worker, callback){
    console.log("Started the class PW")

    // 
    console.log("Fineshed the class PW")
    callback()
}

function callMom(){
    console.log("call mom when done")
}
deepti_doing_work(`PW class`, callMom)
