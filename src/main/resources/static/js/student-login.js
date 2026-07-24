const username = document.getElementById("username");

const password = document.getElementById("password");

const loginBtn = document.getElementById("loginBtn");

const error = document.getElementById("error");

const togglePassword = document.getElementById("togglePassword");

const backBtn = document.getElementById("backBtn");


// Student Login
loginBtn.addEventListener("click", function () {

    const user = username.value.trim();

    const pass = password.value.trim();

    if(user === "student" && pass === "1234"){

        window.location.href="/student-portal";

    }

    else{

        error.innerHTML="Invalid Username or Password";

    }

});


// Show Password

togglePassword.addEventListener("click",function(){

    if(password.type==="password"){

        password.type="text";

        togglePassword.classList.replace("fa-eye","fa-eye-slash");

    }

    else{

        password.type="password";

        togglePassword.classList.replace("fa-eye-slash","fa-eye");

    }

});


// Back Button

backBtn.addEventListener("click",function(){

    window.location.href="/";

});