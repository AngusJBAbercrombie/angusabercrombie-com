// Mobile menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.site-nav');

hamburger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close menu on nav link click
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Scroll fade-in
const fadeEls = document.querySelectorAll('.section, .priority-card, .record-item');
fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));

// Respect reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  fadeEls.forEach(el => el.classList.add('visible'));
}
