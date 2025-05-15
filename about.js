
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

 
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    toggleBtn.textContent = 'Сменить тему';
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});


function toggleInfo() {
  const info = document.getElementById('hiddenInfo');
  info.style.display = info.style.display === 'block' ? 'none' : 'block';
}

