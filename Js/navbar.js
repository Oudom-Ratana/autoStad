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

  // ----- Active link highlighting -----
  // Each nav link carries data-nav="home|cars|about|contact".
  // The active key is derived from the file name so identical nav markup
  // works on every page with no hand-editing of the active state.
  const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  let current = 'home';
  if (file === '' || file === 'index.html') current = 'home';
  else if (file === 'cars.html') current = 'cars';
  else if (file === 'about.html') current = 'about';
  else if (file === 'contact.html') current = 'contact';
  else current = 'cars'; // car detail pages belong to the Cars section

  document.querySelectorAll('[data-nav]').forEach((link) => {
    if (link.dataset.nav === current) {
      link.classList.add('text-primary', 'font-semibold');
      link.classList.remove('text-gray-600', 'dark:text-gray-300');
      link.setAttribute('aria-current', 'page');
    }
  });
})();
