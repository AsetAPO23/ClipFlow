document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark-theme') {
    body.classList.add('dark-theme');
  } else {
    body.classList.add('light-theme');
  }

  themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark-theme');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      localStorage.setItem('theme', 'light-theme');
    }
  });

  // Настройка графика с помощью Chart.js
  const ctx = document.getElementById('newsChart').getContext('2d');
  const newsChart = new Chart(ctx, {
    type: 'line', // Тип графика (линейный)
    data: {
      labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май'], 
      datasets: [{
        label: 'Популярность новостей', 
        data: [65, 59, 80, 81, 56], 
        borderColor: '#039BE5', 
        backgroundColor: 'rgba(3, 155, 229, 0.2)', 
        tension: 0.1, 
        fill: true, 
      }]
    },
    options: {
      responsive: true, 
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          enabled: true, 
        },
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)',
          }
        },
        y: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)', 
          },
          beginAtZero: true, 
        }
      }
    }
  });
});

