
document.getElementById('signup').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('confirm-passwordError');


  emailError.textContent = '';
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';

  let isValid = true;


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      emailError.textContent = "Enter a valid email address.";
      isValid = false;
  }


  const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/g;
  if (password.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters long.';
      isValid = false;
  } else if (!specialCharPattern.test(password)) {
      passwordError.textContent = 'Password must contain at least one special character.';
      isValid = false;
  }
  
  if (password !== confirmPassword) {
      confirmPasswordError.textContent = 'Passwords do not match.';
      isValid = false;
  }


  if (isValid) {
      alert('Form submitted successfully!');
      document.getElementById('signup').submit();
  }
});
