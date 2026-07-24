const signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click", function () {

    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    const message = document.getElementById("message");

    if (
        fullName === "" ||
        email === "" ||
        username === "" ||
        password === "" ||
        confirmPassword === ""
    ) {
        message.innerHTML = "Please fill all fields.";
        return;
    }

    if (password !== confirmPassword) {
        message.innerHTML = "Passwords do not match.";
        return;
    }

    // Get existing users or create an empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if username already exists
    const existingUser = users.find(u => u.username === username);

    if (existingUser) {
        message.innerHTML = "Username already exists.";
        return;
    }

    // Create new user
    const newUser = {
        fullName: fullName,
        email: email,
        username: username,
        password: password
    };

    // Add new user to the array
    users.push(newUser);

    // Save updated array
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");

    window.location.href = "/login";

});