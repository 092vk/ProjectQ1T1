document.querySelector('.toggle-btn').addEventListener('click', function() {
    const signInForm = document.querySelector('.sign_in');
    const signUpForm = document.querySelector('.sign_up');

    if (signInForm.style.display === 'block' || signInForm.style.display === '') {
        signInForm.style.display = 'none';
        signUpForm.style.display = 'block';
        this.textContent = 'Switch to Sign In';
    } 
    else {
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
        this.textContent = 'Switch to Sign Up';
    }
});
