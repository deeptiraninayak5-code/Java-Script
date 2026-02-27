// app.vwo.com -> viewer, Editer or Admin 
// Viewer = Limited view 
// Editer = Can edit and view 
// Admin = Can do all the things. 

let isLoggedIn = true;
let userRole = "Editer";

if(isLoggedIn){
    if( userRole === "Admin"){
        console.log("Admin can do all the things.");
    }else if( userRole === "Editer"){
        console.log("Welcome Editer, Edit Access Granted.");
    }else if( userRole === "Viewer"){
        console.log("Welcome Viewer, Read Only Access");
    }else{
        console.log("No idea which role you are!");
    }
}else{
    console.log("You are not logged in.");
}

