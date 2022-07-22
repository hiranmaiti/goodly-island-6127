let form = document.querySelector("form");
let signupLS = JSON.parse(localStorage.getItem("signup"))||[];

form.addEventListener("submit",
function(event) {
    event.preventDefault();
    let signupObj = {
        name : form.name.value,
        email : form.email.value,
        password : form.password.value,
    }
    if (signupObj.name == "" || signupObj.email == "" || signupObj.password == "" ) {
        alert("Field Empty");
        return
    } else {
        //console.log(signupObj)
        signupLS.push(signupObj);
        localStorage.setItem("signup", JSON.stringify(signupLS));
        alert("Signup Successful")
        window.location.href = "signin.html"
    }
})