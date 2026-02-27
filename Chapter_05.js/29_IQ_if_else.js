// True
if("hello") 
    console.log("string is truthy") // "hello" = truthy
if (42)
    console.log("Number is truthy")
if ({})
    console.log("Empty Object is truthy")
if ([])
    console.log("Empty array is truthy")

// False 
if ("")
    console.log("won't print") //"" -> Falsy result. 
if (null)
    console.log("won't print")
if (undefined)
    console.log("won't print")
if (NaN)
    console.log("won't print")
if (0)
    console.log("won't print")

