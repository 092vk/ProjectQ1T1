
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signin-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "vivekkumar" && password === "961103") {
            window.location.href = "./home.html"; 
        } else {
            alert("Invalid username or password . Please try again.");
        }
    });
});
