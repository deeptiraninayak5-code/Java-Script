//  Error Handling - try/catch

//  With Promises tou use .chatch().
//  With async / await you use try/catch - exactly like regular JavaScript error handlinh.

async function testAPI(){
    try{
        let result = await Promise.reject("503 Service Unavailable")
        console.log('Result', result)
    } catch (error){
        console.log('Error', error)
    }  finally {
        console.log("Clean up!")
    }
}

testAPI();

// try/catch/finally maos directly to .then()/.catch()/.finally() - same logic, cleaner syntax.