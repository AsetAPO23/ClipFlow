
document.addEventListener('DOMContentLoaded', () => {
  const likeBtn = document.querySelector('.like-btn');
  const likeCount = document.getElementById('like-count');
  const commentForm = document.getElementById('comment-form');
  const commentList = document.getElementById('comment-list');
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

 
  likeBtn.addEventListener('click', () => {
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
  });

 
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = document.getElementById('comment-input');
    const comment = input.value.trim();
    if (comment !== '') {
      const li = document.createElement('li');
      li.textContent = comment;
      commentList.appendChild(li);
      input.value = '';
    }
  });
});


