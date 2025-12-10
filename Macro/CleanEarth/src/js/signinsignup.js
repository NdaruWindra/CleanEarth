// Import our custom CSS
import "../scss/signinsignup.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// Handle Sign In Form
const signinForm = document.getElementById('signin-form');
if (signinForm) {
    signinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add sign in logic here
        window.location.href = 'berandalogin.html';
    });
}

// Handle Sign Up Form
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add sign up logic here
        window.location.href = 'signIn.html';
    });
}