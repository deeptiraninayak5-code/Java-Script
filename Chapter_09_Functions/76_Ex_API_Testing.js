// if (ourStatusCode >= 200 && ourStatusCode < 300)
function validateStatusCode(status){
    if (status >= 200 && status <= 300){
        console.log("Request is fine!")
    }
}

const validateStatusCode_Exp = function (status){
    if (status >= 200 && status <= 300 ){
        console.log("Request is fine!")
    }
}

const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300){
        console.log("Request is fine!")
    }
}

validateStatusCode(200)//Request is final
validateStatusCode_Exp(200)//Request is final
validateStatusCode_Arrow(200)//Request is final