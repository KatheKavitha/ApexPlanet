document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent actual form submission

  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let subject = document.getElementById('subject').value.trim();
  let message = document.getElementById('message').value.trim();
  let errorDiv = document.getElementById('error');

  if (!name || !email || !subject || !message) {
    errorDiv.textContent = "Please fill in all fields.";
    return;
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    errorDiv.textContent = "Please enter a valid email address.";
    return;
  }

  errorDiv.style.color = 'green';
  errorDiv.textContent = "Form submitted successfully!";
});
