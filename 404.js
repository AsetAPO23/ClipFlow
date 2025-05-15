
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark-theme') {
    body.classList.add('dark-theme');
  } else {
    body.classList.add('light-theme');
  }
});
