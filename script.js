// year stamp
document.getElementById('year').textContent = new Date().getFullYear();

// simple mobile menu
const btn = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (btn) {
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    menu.style.display = open ? 'none' : 'flex';
    menu.style.flexDirection = 'column';
    menu.style.gap = '0.75rem';
  });
}
