const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

// Add the published installer URLs here when Flowd has its first release.
const DOWNLOADS = {
  windows: '',
  linux: ''
};

document.querySelectorAll('[data-download]').forEach(button => {
  const platform = button.dataset.download;
  if (DOWNLOADS[platform]) {
    button.href = DOWNLOADS[platform];
    button.setAttribute('download', '');
  } else {
    button.addEventListener('click', event => {
      event.preventDefault();
      document.getElementById('download-status').textContent =
        'The ' + (platform === 'windows' ? 'Windows' : 'Linux') +
        ' download is not published yet. Check back when the first release is available.';
    });
  }
});


// Reveal sections gently as they enter the viewport.
const revealTargets = document.querySelectorAll(
  '.section-heading, .feature-card, .statement > *, .download-panel, .trust-strip > div'
);
revealTargets.forEach(element => element.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(element => revealObserver.observe(element));
} else {
  revealTargets.forEach(element => element.classList.add('is-visible'));
}
