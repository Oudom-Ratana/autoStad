// Footer-specific behaviour: newsletter signup (demo only).
(function () {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
    alert('Subscribed! (demo only)');
  });
})();
