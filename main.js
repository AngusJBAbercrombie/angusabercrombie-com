// === THANK YOU POPUP ===
const popup = document.getElementById('thankyouPopup');
const closeBtn = document.getElementById('popupClose');
const dismissBtn = document.getElementById('popupDismiss');

function closePopup() {
  popup.classList.add('hidden');
  document.body.style.overflow = '';
}

document.body.style.overflow = 'hidden';
closeBtn.addEventListener('click', closePopup);
dismissBtn.addEventListener('click', closePopup);
popup.addEventListener('click', (e) => {
  if (e.target === popup) closePopup();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePopup();
});

// === MOBILE MENU ===
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.site-nav');

hamburger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// === SCROLL FADE-IN ===
const fadeEls = document.querySelectorAll('.section, .priority-item, .record-item');
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

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  fadeEls.forEach(el => el.classList.add('visible'));
}
