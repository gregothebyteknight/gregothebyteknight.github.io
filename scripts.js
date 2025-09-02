document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');

  // 1. Detect system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // 2. Set initial mode based on system preference
  if (prefersDark) {
    document.documentElement.classList.add('dark-mode');
    icon.src = 'icons/sun.svg';
  } else {
    document.documentElement.classList.add('light-mode');
    icon.src = 'icons/moon.svg';
  }

  // 3. Toggle between dark and light mode
  toggleBtn.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark-mode')) {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
      icon.src = 'icons/moon.svg';
    } else {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
      icon.src = 'icons/sun.svg';
    }
  });
});