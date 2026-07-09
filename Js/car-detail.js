// Car detail gallery: click a thumbnail to swap the main image.
(function () {
  const main = document.getElementById('gallery-main');
  if (!main) return;
  document.querySelectorAll('[data-thumb]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const img = btn.querySelector('img');
      if (!img) return;
      const nextSrc = img.getAttribute('src');
      const nextAlt = img.getAttribute('alt');
      main.src = nextSrc;
      main.alt = nextAlt;
      document.querySelectorAll('[data-thumb]').forEach((b) => b.classList.remove('ring-2', 'ring-primary'));
      btn.classList.add('ring-2', 'ring-primary');
    });
  });
})();
