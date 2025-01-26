function validateForm() {
    // Clear any previous error messages
    document.getElementById('emailError').textContent = '';
    document.getElementById("passwordError").textContent = "";

    // Get the email value
    const email = document.getElementById('email').value;
    const password = document.getElementById("password").value

    // Check if the email field is empty
    if (email === '' || password === '') {
        document.getElementById('emailError').textContent = 'Email is required!';
        document.getElementById("passwordError").textContent = "Password is required";
        return false; // Prevent form submission
    }

    // Basic email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
    if (!emailPattern.test(email) || !passwordPattern.test(password)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        document.getElementById('passwordError').textContent = 'Please enter a valid password address.';
        return false; // Prevent form submission
    }

    // If everything is fine, return true to submit the form
    return true;
}

// Take me login page
function goToLogin() {
    window.location.href = "/theLog/login.html";
}

// Take me Register page
function goToRegister() {
    window.location.href = "/theReg/register.html";
}

