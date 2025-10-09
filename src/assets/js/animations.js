document.addEventListener('DOMContentLoaded', () => {
  if (!('IntersectionObserver' in window)) return;

  // Observer #1: one-time reveal
  const io = new IntersectionObserver((entries, obs) => {
    for (const { isIntersecting, target } of entries) {
      if (!isIntersecting) continue;
      target.classList.add('in');
      obs.unobserve(target);
    }
  }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });

  document.querySelectorAll('.reveal, .fx').forEach(el => io.observe(el));

  // Observer #2: live toggle for .fx elements
  const io2 = new IntersectionObserver(entries => {
    for (const { isIntersecting, target } of entries) {
      target.classList.toggle('in', isIntersecting);
    }
  }, { threshold: 0.2 });

  document.querySelectorAll('.fx').forEach(el => io2.observe(el));

  // Parallax progress var
  const sec = document.querySelector('.parallax');
  function progress(el) {
    const r = el.getBoundingClientRect(), vh = innerHeight;
    const start = vh * 0.9, end = vh * 0.1;
    const t = (start - r.top) / (start - end);
    return Math.min(1, Math.max(0, t));
  }
  function update() { if (sec) sec.style.setProperty('--p', progress(sec)); }

  let ticking = false;
  addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { update(); ticking = false; });
  }, { passive: true });

  update();

  // tiny debug so you can see it’s running
  console.log('[animations.js] ready, observed:',
    document.querySelectorAll('.reveal, .fx').length,
    'parallax:', !!sec);
});
