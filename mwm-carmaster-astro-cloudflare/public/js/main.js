
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-email').forEach((el) => {
    const user = el.getAttribute('data-user');
    const domain = el.getAttribute('data-domain');
    if (!user || !domain) return;
    const address = user + '@' + domain;
    el.setAttribute('href', 'mailto:' + address);
    el.textContent = address;
  });
});
