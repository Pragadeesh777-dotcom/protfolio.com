document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const feedback = document.getElementById("feedback").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const feedbackError = document.getElementById("feedbackError");

    let valid = true;

    // Name Validation
    if (!name) {
        nameError.textContent = "Name is required.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Feedback Validation
    if (!feedback) {
        feedbackError.textContent = "Feedback cannot be empty.";
        valid = false;
    } else {
        feedbackError.textContent = "";
    }

    // If all fields are valid
    if (valid) {
        alert("Thank you for your feedback!");
        document.getElementById("feedbackForm").reset();
    }
});