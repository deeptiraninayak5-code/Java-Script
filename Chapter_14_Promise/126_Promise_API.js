let apiCall = new Promise(function (resolve, reject){
    resolve({status: 200, body: "User Data" });
});

apiCall.then(function (response){
    console.log(response);
    console.log(response.status);
    console.log(resolve.body);
})

// .then() runs ONLY when the promise resolves successfully.