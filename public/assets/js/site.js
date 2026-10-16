/* Lesotho Stone — progressive enhancement.
   Every page works without this file; it adds the sticky header state,
   mobile menu, scroll reveals, parallax, image fallbacks, project
   filters + lightbox and the mailto form handler. */
(function () {
  'use strict';
  var doc = document.documentElement;
  doc.classList.add('js');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Header: turn solid after 40px of scroll */
  var header = document.querySelector('.site-header');
  function onScroll() { if (header) header.classList.toggle('is-solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  var toggle = document.querySelector('.nav-toggle');
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
      document.body.classList.toggle('nav-locked', open);
    });
  }

  /* Image fallback: stone strata panel labelled with the file name */
  function failFrame(img) {
    var f = img.closest('.frame');
    if (f) f.classList.add('is-failed');
  }
  document.querySelectorAll('.frame img').forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) failFrame(img);
    img.addEventListener('error', function () { failFrame(img); });
  });

  /* Scroll reveals */
  var reveals = document.querySelectorAll('.reveal');
  if (!reduced && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* Parallax */
  var layers = Array.prototype.slice.call(document.querySelectorAll('.parallax'));
  if (!reduced && layers.length) {
    var ticking = false;
    var update = function () {
      var vh = window.innerHeight;
      layers.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        var speed = parseFloat(el.getAttribute('data-speed') || '0.15');
        var c = r.top + r.height / 2 - vh / 2;
        el.firstElementChild.style.transform = 'translate3d(0,' + (-c * speed).toFixed(1) + 'px,0)';
      });
      ticking = false;
    };
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* Project grids: filters + lightbox */
  var lightbox = document.querySelector('.lightbox');
  var lbImg, lbTitle, lbMeta, lbCount, lbItems = [], lbIndex = 0, lastFocus = null;
  if (lightbox) {
    lbImg = lightbox.querySelector('.lightbox__stage img');
    lbTitle = lightbox.querySelector('.lightbox__title');
    lbMeta = lightbox.querySelector('.lightbox__meta');
    lbCount = lightbox.querySelector('.lightbox__count');
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLb(); });
    lightbox.querySelector('[data-lb="prev"]').addEventListener('click', function () { stepLb(-1); });
    lightbox.querySelector('[data-lb="next"]').addEventListener('click', function () { stepLb(1); });
    lightbox.querySelector('[data-lb="close"]').addEventListener('click', closeLb);
    document.addEventListener('keydown', function (e) {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowRight') stepLb(1);
      if (e.key === 'ArrowLeft') stepLb(-1);
    });
  }
  function showLb() {
    var b = lbItems[lbIndex];
    lbImg.src = b.getAttribute('data-full');
    lbImg.alt = b.getAttribute('data-title');
    lbTitle.textContent = b.getAttribute('data-title');
    lbMeta.textContent = b.getAttribute('data-meta');
    lbCount.textContent = (lbIndex + 1) + ' - ' + lbItems.length;
  }
  function openLb(grid, btn) {
    lbItems = Array.prototype.filter.call(grid.querySelectorAll('.project-card__link'), function (b) {
      return !b.closest('.project-card').classList.contains('is-hidden');
    });
    lbIndex = Math.max(0, lbItems.indexOf(btn));
    lastFocus = btn;
    showLb();
    lightbox.hidden = false;
    document.body.classList.add('nav-locked');
    lightbox.querySelector('[data-lb="close"]').focus();
  }
  function stepLb(d) { lbIndex = (lbIndex + d + lbItems.length) % lbItems.length; showLb(); }
  function closeLb() {
    lightbox.hidden = true;
    document.body.classList.remove('nav-locked');
    if (lastFocus) lastFocus.focus();
  }

  document.querySelectorAll('.project-grid').forEach(function (grid) {
    grid.querySelectorAll('.project-card__link').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        if (!lightbox) return;
        e.preventDefault();
        openLb(grid, btn);
      });
    });
  });

  var tabs = document.querySelector('.filter-tabs');
  if (tabs) {
    var grid = document.getElementById(tabs.getAttribute('data-grid'));
    tabs.addEventListener('click', function (e) {
      var t = e.target.closest('button');
      if (!t) return;
      var cat = t.getAttribute('data-filter');
      tabs.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', String(b === t)); });
      var n = 0;
      grid.querySelectorAll('.project-card').forEach(function (card) {
        var show = cat === 'All' || card.getAttribute('data-cat') === cat;
        card.classList.toggle('is-hidden', !show);
        card.className = card.className.replace(/\bg[1-7]\b/g, '').trim();
        if (show) {
          card.classList.add('g' + ((n % 7) + 1));
          card.style.setProperty('--delay', ((n % 3) * 90) + 'ms');
          card.classList.remove('is-in');
          n++;
        }
      });
      requestAnimationFrame(function () {
        grid.querySelectorAll('.project-card:not(.is-hidden)').forEach(function (c) { c.classList.add('is-in'); });
      });
    });
  }

  /* Forms: no server on a static site, so compose an email to the company */
  document.querySelectorAll('form[data-mailto]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var lines = [];
      Array.prototype.forEach.call(form.elements, function (el) {
        if (!el.name) return;
        lines.push((el.getAttribute('data-label') || el.name) + ': ' + el.value);
      });
      var href = 'mailto:' + form.getAttribute('data-mailto') +
        '?subject=' + encodeURIComponent(form.getAttribute('data-subject') || 'Website enquiry') +
        '&body=' + encodeURIComponent(lines.join('\n'));
      window.location.href = href;
      var sent = form.parentNode.querySelector('.form__sent');
      if (sent) { form.hidden = true; sent.hidden = false; }
    });
  });
})();
