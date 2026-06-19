/* Shared behaviours — load AFTER components.js (needs the injected header).
   Handles the sticky-nav colour swap, mobile menu, and reveal-on-scroll.
   Page scripts that inject .reveal content should call SITE.observeReveals()
   afterwards so newly added elements animate in too. */
(function () {
  var nav = document.getElementById('nav');
  var links = document.getElementById('navlinks');

  function navScroll() {
    var logoWhite = document.getElementById('logoWhite');
    var logoNavy = document.getElementById('logoNavy');
    var scrolled = window.scrollY > 60;
    if (nav) nav.classList.toggle('bg-ivory/95', scrolled);
    if (nav) nav.classList.toggle('backdrop-blur', scrolled);
    if (nav) nav.classList.toggle('shadow-sm', scrolled);
    if (logoWhite) logoWhite.classList.toggle('hidden', scrolled);
    if (logoNavy) logoNavy.classList.toggle('hidden', !scrolled);
    if (links) links.querySelectorAll('a').forEach(function (a) {
      if (a.id === 'navcta') return;
      a.classList.toggle('text-ivory/80', !scrolled);
      a.classList.toggle('text-navy/70', scrolled);
    });
  }
  window.addEventListener('scroll', navScroll, { passive: true });
  navScroll();

  var burger = document.getElementById('burger');
  if (burger) burger.addEventListener('click', function () {
    var m = document.getElementById('mobilemenu');
    if (m) m.classList.toggle('hidden');
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });

  function observeReveals() {
    document.querySelectorAll('.reveal:not([data-rev])').forEach(function (el) {
      el.setAttribute('data-rev', '1');
      io.observe(el);
    });
  }
  observeReveals();

  window.SITE = { observeReveals: observeReveals };
})();
