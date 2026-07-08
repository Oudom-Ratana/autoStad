// Shared dark-mode toggle logic.
// Pairs with the small inline pre-paint snippet in each page's <head>
// (that inline snippet must stay inline so the dark class is set before
// first paint / before this file has a chance to load).
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
