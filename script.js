// Basic UI interactions: theme, typing, reveal, mobile nav
document.addEventListener('DOMContentLoaded', () => {
  // YEAR
  document.getElementById('year').textContent = new Date().getFullYear();

  // THEME
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') root.setAttribute('data-theme','dark');
  themeToggle?.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    root.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  });

  // MOBILE NAV
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  navToggle?.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // SMOOTH SCROLL for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
        if (nav.classList.contains('open')) nav.classList.remove('open');
      }
    });
  });

  // TYPING EFFECT (simple)
  const words = ['CSS Enthusiast','Frontend Developer','Pixel-perfect layouts','Learning JavaScript'];
  const el = document.getElementById('typing');
  let i=0, j=0, forward=true;
  function type(){
    if (!el) return;
    el.textContent = words[i].slice(0,j);
    if (forward) {
      j++;
      if (j > words[i].length) { forward=false; setTimeout(type,800); return; }
    } else {
      j--;
      if (j < 0) { forward=true; i = (i+1)%words.length; j=0; }
    }
    setTimeout(type, 80);
  }
  type();

  // REVEAL ON SCROLL (IntersectionObserver)
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('revealed');
        obs.unobserve(en.target);
      }
    });
  }, {threshold:0.12});
  document.querySelectorAll('.reveal').forEach(s => obs.observe(s));
});

