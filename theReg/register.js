document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    let isValid = true;
  
    const email = document.getElementById('email');
    const password = document.getElementById('password');
  
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
  
    emailError.textContent = '';
    passwordError.textContent = '';
  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.value || !emailPattern.test(email.value)) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }
  
    if (!password.value) {
      passwordError.textContent = 'Password is required.';
      isValid = false;
    } else if (password.value.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters.';
      isValid = false;
    }
  
    if (isValid) {
      alert('Form Submitted Successfully!');
    }
  });
  