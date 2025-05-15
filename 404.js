// Скрипт для переключения темы и сохранения выбора пользователя
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  // Проверяем сохранённую тему
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark-theme') {
    body.classList.add('dark-theme');
  } else {
    body.classList.add('light-theme');
  }
});
