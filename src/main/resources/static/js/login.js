// Get Elements
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const error = document.getElementById("error");
const togglePassword = document.getElementById("togglePassword");
const studentPortalBtn = document.getElementById("studentPortalBtn");

// Login
loginBtn.addEventListener("click", function () {

    const user = username.value.trim();
    const pass = password.value.trim();

    // Admin Login
    if (user === "admin" && pass === "1234") {

        window.location.href = "/admin-dashboard";
        return;

    }

    // Get all registered users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const foundUser = users.find(
        u => u.username === user && u.password === pass
    );

    if (foundUser) {

        window.location.href = "/user-dashboard";

    } else {

        error.innerHTML = "Invalid Username or Password";

    }

});

// Show / Hide Password
togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");

    } else {

        password.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");

    }

});

// Student Portal Button
studentPortalBtn.addEventListener("click", function () {
    window.location.href = "/student-login";
});