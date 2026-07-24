// Logout Button

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function () {

    const logout = confirm("Are you sure you want to logout?");

    if (logout) {

        window.location.href = "/login";

    }

});


// Sidebar Active Menu

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {

    item.addEventListener("click", function () {

        menuItems.forEach(menu => {
            menu.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// Welcome Message

window.addEventListener("load", function () {

    const hour = new Date().getHours();

    let message = "";

    if (hour < 12) {

        message = "Good Morning 🌞";

    } else if (hour < 17) {

        message = "Good Afternoon ☀️";

    } else {

        message = "Good Evening 🌙";

    }

    document.querySelector(".banner h2").innerHTML = message + ", Student!";

});


// Card Hover Animation

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "translateY(0)";

    });

});


// Profile Button

const profileBtn = document.querySelector(".profile button");

profileBtn.addEventListener("click", function () {

    alert("Edit Profile feature will be added soon.");

});