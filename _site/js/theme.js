// Theme toggle — persists via localStorage
(function () {
  const root = document.documentElement;
  const btn  = document.getElementById('theme-toggle');
  const key  = 'pc-theme';

  // Apply saved or system preference on load
  const saved = localStorage.getItem(key);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === 'dark' || (!saved && prefersDark)) {
    root.setAttribute('data-theme', 'dark');
  }

  if (btn) {
    btn.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      root.setAttribute('data-theme', isDark ? 'light' : 'dark');
      localStorage.setItem(key, isDark ? 'light' : 'dark');
    });
  }
})();
