function outer(){
    let mssage = "hello"
    console.log("outer called")

    function inner(){
        console.log(message)
    }
    return inner
}

let fn_inner = outer()
fn_inner()

// inner() not allowed!