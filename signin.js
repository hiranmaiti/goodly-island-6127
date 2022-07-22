let form = document.querySelector("form");
let signupLS = JSON.parse(localStorage.getItem("signup"))||[];

form.addEventListener("submit",
function(event) {
    event.preventDefault();
    if ( signupLS.length == 0 ) {
        alert("No User Exist");
        return;
    }

    let signinObj = {
        email : form.email.value,
        password : form.password.value,
    }

    let isSignedin = false;
    signupLS.forEach(function(elem) {
        if( elem.email == signinObj.email && elem.password == signinObj.password ) {
            isSignedin = true;
            alert("Signin Succesfull");
            localStorage.setItem("signin", JSON.stringify(elem));
            window.location.href = "index.html";
        }
    })
    if ( isSignedin == false ) {
        alert("User doesn't Exist")
    }
})