// Sign-in (Login) page behaviour.
(function () {
  document.querySelectorAll('[data-toggle-password]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.togglePassword);
      if (input) input.type = input.type === 'password' ? 'text' : 'password';
    });
  });

  const form = document.getElementById('login-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Demo only — connect this to your backend.');
    });
  }
})();
