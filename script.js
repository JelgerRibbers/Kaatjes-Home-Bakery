const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

function closeMenu() {
  nav?.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
  if (toggle) toggle.textContent = '☰';
}

function openMenu() {
  nav?.classList.add('open');
  toggle?.setAttribute('aria-expanded', 'true');
  if (toggle) toggle.textContent = '×';
}

toggle?.addEventListener('click', () => {
  const isOpen = nav?.classList.contains('open');
  isOpen ? closeMenu() : openMenu();
});

document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
