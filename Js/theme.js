
(function () {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const moonIcon = document.getElementById('theme-icon-moon');
  const sunIcon = document.getElementById('theme-icon-sun');

  function applyTheme(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
    if (moonIcon) moonIcon.classList.toggle('hidden', isDark);
    if (sunIcon) sunIcon.classList.toggle('hidden', !isDark);
  }

  applyTheme(document.documentElement.classList.contains('dark'));

  themeToggle.addEventListener('click', () => {
    const isDark = !document.documentElement.classList.contains('dark');
    applyTheme(isDark);
    localStorage.setItem('autostad-theme', isDark ? 'dark' : 'light');
  });
})();
