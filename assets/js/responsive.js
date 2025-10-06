/* === RESPONSIVE: FLAGS === */
(() => {
  const m1000 = matchMedia('(max-width:1000px)');
  const m700  = matchMedia('(max-width:700px)');
  const apply = () => {
    const c = document.documentElement.classList;
    m1000.matches ? c.add('is-1000') : c.remove('is-1000');
    m700.matches  ? c.add('is-700')  : c.remove('is-700');
  };
  m1000.addEventListener('change', apply);
  m700.addEventListener('change', apply);
  apply();
})();
