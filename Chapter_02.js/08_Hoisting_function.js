// step 1 - Declare a function
function getUserStatus(){
    // var status_code = undefined; - not show to you.
    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);
}

// step 2 - Calling the functions
getUserStatus();

// note: var is function-scoped, so status is hoisted to
// the top of getUserStatus(),Not the global scope