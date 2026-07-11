// Navbar behaviour: mobile menu toggle + auto-highlight the active link.
(function () {
  // ----- Mobile menu toggle -----
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      menuBtn.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  let path = location.pathname;
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
  let file = (path.split('/').pop() || '').toLowerCase();
  file = file.replace(/\.html$/, '');

  let current = 'home';
  if (file === '' || file === 'index') current = 'home';
  else if (file === 'cars') current = 'cars';
  else if (file === 'about') current = 'about';
  else if (file === 'contact') current = 'contact';
  else current = 'cars'; // car detail pages belong to the Cars section

  document.querySelectorAll('[data-nav]').forEach((link) => {
    if (link.dataset.nav === current) {
      link.classList.add('text-primary', 'font-semibold');
      link.classList.remove('text-gray-600', 'dark:text-gray-300');
      link.setAttribute('aria-current', 'page');
    }
  });
})();
