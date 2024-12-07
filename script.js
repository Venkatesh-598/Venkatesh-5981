document.addEventListener("DOMContentLoaded", function() {
    // Handle Contact Us form submission
    const contactForm = document.getElementById('contact-us-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert("Your message has been sent successfully!");
        });
    }

    // Handle Log In form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert("You have logged in successfully!");
            // Redirect user to home page or dashboard
            window.location.href = "index.html";
        });
    }

    // Handle Meal Plan form submission
    const mealForm = document.getElementById('meal-plan-form');
    if (mealForm) {
        mealForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert("Meal Plan Created Successfully!");
        });
    }
});
