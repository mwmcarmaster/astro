const COOKIE_KEY = 'mwm_cookie_choice';
const banner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('cookie-accept');
const rejectBtn = document.getElementById('cookie-reject');
const settingsLink = document.getElementById('cookie-settings-link');

function openBanner() {
  if (banner) banner.hidden = false;
}
function closeBanner() {
  if (banner) banner.hidden = true;
}
function applyChoice(choice) {
  localStorage.setItem(COOKIE_KEY, choice);
  if (choice === 'accept' && window.SiteAnalytics) {
    window.SiteAnalytics.loadAnalytics();
  }
  closeBanner();
}

const storedChoice = localStorage.getItem(COOKIE_KEY);
if (!storedChoice) {
  openBanner();
} else if (storedChoice === 'accept' && window.SiteAnalytics) {
  window.SiteAnalytics.loadAnalytics();
}

if (acceptBtn) acceptBtn.addEventListener('click', () => applyChoice('accept'));
if (rejectBtn) rejectBtn.addEventListener('click', () => applyChoice('reject'));
if (settingsLink) {
  settingsLink.addEventListener('click', (e) => {
    e.preventDefault();
    openBanner();
  });
}