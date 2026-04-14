// ============================================================
// shared.js — Runs on every page
// ============================================================

// Nav scroll behaviour
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Hamburger toggle
const hamburger = document.querySelector('.nav-hamburger');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('menu-open');
  });
}
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('nav');
    if (nav) nav.classList.remove('menu-open');
  });
});

// Scroll-reveal IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal, .stagger').forEach(el => io.observe(el));
});
