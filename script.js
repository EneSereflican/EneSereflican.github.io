/* ============================================
   ENES — minimal JS
   - tema değiştirici (localStorage ile hatırlar)
   - console easter egg
   ============================================ */

(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const STORAGE_KEY = 'enes-theme';

  // Varsayılan dark; kullanıcı toggle yaparsa tercih hatırlanır
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'light' || saved === 'dark') {
    root.setAttribute('data-theme', saved);
  }
  // saved yoksa HTML'deki data-theme="dark" geçerli kalır

  // Toggle butonu
  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY, next);
  });
})();

/* ============================================
   CONSOLE EASTER EGG
   ============================================ */
(function () {
  const styles = {
    title:  'color: #f0a500; font-size: 16px; font-weight: bold; font-family: monospace;',
    label:  'color: #8b949e; font-family: monospace;',
    value:  'color: #e6edf3; font-family: monospace;',
    accent: 'color: #f0a500; font-family: monospace;',
    dim:    'color: #6e7681; font-style: italic; font-family: monospace;',
  };

  console.log('%c$ whoami', styles.title);
  console.log('%c> Enes Ahmet Şereflican', styles.value);
  console.log('%c> Burayı açtığına göre meraklı birisin. İyi bir özellik.', styles.dim);
  console.log(' ');
  console.log('%cstack       %cTypeScript · Next.js · Supabase · Java · C', styles.label, styles.value);
  console.log('%chedef       %cGömülü sistem mühendisliği · savunma sanayi', styles.label, styles.value);
  console.log('%ciletişim    %ceasereflican@gmail.com', styles.label, styles.accent);
  console.log(' ');
  console.log('%c// hocam buraya da baktıysanız selamlar 👋', styles.dim);
})();
