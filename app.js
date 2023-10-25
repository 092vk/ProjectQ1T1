// document.querySelector('.toggle-btn').addEventListener('click', function() {
//     const signInForm = document.querySelector('.sign_in');
//     const signUpForm = document.querySelector('.sign_up');

//     if (signInForm.style.display === 'block' || signInForm.style.display === '') {
//         signInForm.style.display = 'none';
//         signUpForm.style.display = 'block';
//         this.textContent = 'Switch to Sign In';
//     } 
//     else {
//         signInForm.style.display = 'block';
//         signUpForm.style.display = 'none';
//         this.textContent = 'Switch to Sign Up';
//     }
// });

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
