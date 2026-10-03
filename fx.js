/* ============================================================
   TechSpecsGW — fx.js
   Motor de efeitos: aurora, partículas, barra de progresso,
   spotlight nos cartões e revelação ao fazer scroll.
   Respeita prefers-reduced-motion e funciona sem JavaScript
   (o site continua legível e completo sem ele).
   ============================================================ */
(function () {
  'use strict';
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ——— Deteção de tema: só injeta camadas visuais se o CSS ativo as suportar
     (temas sem .fx-aurora definidas continuam a funcionar, sem artefactos) ——— */
  function themeSupportsFx(){
    if (!window.getComputedStyle) return false;
    var probe = document.createElement('div');
    probe.className = 'fx-aurora';
    document.body.appendChild(probe);
    var ok = getComputedStyle(probe).position === 'fixed';
    if (probe.parentNode) probe.parentNode.removeChild(probe);
    return ok;
  }
  var fxLayers = themeSupportsFx();

  /* ——— Aurora giratória ——— */
  if (!reduced && fxLayers) {
    var aurora = document.createElement('div');
    aurora.className = 'fx-aurora';
    aurora.setAttribute('aria-hidden', 'true');
    document.body.appendChild(aurora);
  }

  /* ——— Barra de progresso de scroll ——— */
  var bar = document.createElement('div');
  bar.className = 'fx-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    bar.style.transform = 'scaleX(' + (max > 0 ? h.scrollTop / max : 0) + ')';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ——— Campo de partículas (constelação) ——— */
  if (!reduced && fxLayers) {
    var canvas = document.createElement('canvas');
    canvas.className = 'fx-particles';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var w = 0, h = 0, pts = [], raf = null;

    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = Math.floor(window.innerWidth * dpr);
      h = canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      var n = Math.min(85, Math.max(30, Math.floor(window.innerWidth / 18)));
      pts = [];
      for (var i = 0; i < n; i++) {
        pts.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.22 * dpr,
          vy: (Math.random() - 0.5) * 0.22 * dpr,
          r: (Math.random() * 1.3 + 0.6) * dpr
        });
      }
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);
      var link = 130 * (window.devicePixelRatio || 1);
      var i, j, a, b, dx, dy, d;
      for (i = 0; i < pts.length; i++) {
        a = pts[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(150,210,255,0.5)';
        ctx.fill();
      }
      for (i = 0; i < pts.length; i++) {
        for (j = i + 1; j < pts.length; j++) {
          a = pts[i]; b = pts[j];
          dx = a.x - b.x; dy = a.y - b.y;
          d = Math.sqrt(dx * dx + dy * dy);
          if (d < link) {
            ctx.strokeStyle = 'rgba(103,232,249,' + ((1 - d / link) * 0.13).toFixed(3) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    }

    var run = document.visibilityState === 'visible';
    resize();
    if (run) tick();
    window.addEventListener('resize', function () {
      resize();
      if (run) { cancelAnimationFrame(raf); tick(); }
    });
    document.addEventListener('visibilitychange', function () {
      run = document.visibilityState === 'visible';
      if (run) tick(); else if (raf) cancelAnimationFrame(raf);
    });
  }

  /* ——— Spotlight que segue o rato ——— */
  document.addEventListener('pointermove', function (e) {
    var el = e.target.closest ? e.target.closest('.card, .featured-card, .comparador-box') : null;
    if (!el) return;
    var r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    el.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }, { passive: true });

  /* ——— Revelação ao fazer scroll ——— */
  if (reduced || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('fx-ready');

  function arm(el) {
    if (el.hasAttribute('data-fx')) return;
    el.setAttribute('data-fx', '');
    if (el.querySelectorAll && el.querySelectorAll('h2, h3').length) {
      el.querySelectorAll('h2, h3').forEach(function (c) { c.setAttribute('data-fx', ''); });
    }
  }
  function armAll(root) {
    root.querySelectorAll('section, .card, .featured-card, .comparador-box, .result, .table-compare, .empty-note').forEach(arm);
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add('fx-in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -36px 0px' });

  function watch(el) { if (el.hasAttribute('data-fx') && !el.classList.contains('fx-in')) io.observe(el); }

  armAll(document);
  document.querySelectorAll('[data-fx]').forEach(watch);

  /* Re-arma elementos criados dinamicamente (filtros, comparador) */
  var mo = new MutationObserver(function (muts) {
    var touched = false;
    muts.forEach(function (m) {
      m.addedNodes.forEach(function (n) {
        if (n.nodeType !== 1) return;
        if (n.hasAttribute && n.hasAttribute('data-fx')) { watch(n); return; }
        var host = n.closest ? n.closest('.grid, .result, main') : null;
        if (host) { armAll(host); host.querySelectorAll('[data-fx]:not(.fx-in)').forEach(watch); touched = true; }
      });
    });
    if (touched) io.disconnect();
    armAll(document);
    document.querySelectorAll('[data-fx]:not(.fx-in)').forEach(watch);
  });
  mo.observe(document.body, { childList: true, subtree: true });
})();