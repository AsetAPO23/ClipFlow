document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('register-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');

  function sanitize(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
  }

  function validateEmail(email) {
    const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    emailError.textContent = '';
    passwordError.textContent = '';

    const email = sanitize(emailInput.value);
    const password = sanitize(passwordInput.value);

    if (!validateEmail(email)) {
      emailError.textContent = 'Неверный email';
      return;
    }

    if (password.length < 6 || password.includes('<') || password.includes('>') || password.toLowerCase().includes('script')) {
      passwordError.textContent = 'Пароль слишком короткий или содержит недопустимые символы';
      return;
    }

    alert('Регистрация прошла успешно');
  });
});
