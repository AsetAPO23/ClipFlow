document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle');

  themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
  });

  const contactForm = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = contactForm.querySelectorAll('input, textarea');
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
      }
    });

    if (valid) {
      successMessage.style.display = 'block';
      errorMessage.style.display = 'none';
      contactForm.reset();
    } else {
      errorMessage.style.display = 'block';
      successMessage.style.display = 'none';
    }
  });
});


