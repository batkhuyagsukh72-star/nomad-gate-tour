/* Nomad Gate Tour — interactions & motion */
(function () {
  'use strict';
  var D = window.NGT, M = window.NGT_MAP;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var root = document.documentElement, reduce = root.classList.contains('rm');
  var store = { get: function (k, s) { try { return (s ? sessionStorage : localStorage).getItem(k); } catch (e) { return null; } },
                set: function (k, v, s) { try { (s ? sessionStorage : localStorage).setItem(k, v); } catch (e) {} } };
  var hasGsap = function () { return !!(window.gsap && window.ScrollTrigger); };
  var lenis = null;
  var byId = {}; D.tours.forEach(function (t) { byId[t.id] = t; });

  var lang = new URLSearchParams(location.search).get('lang') || store.get('ngt-lang') || 'en';
  if (lang !== 'mn') lang = 'en';
  function t(k) { var v = D.t[lang][k]; return v === undefined ? D.t.en[k] : v; }
  function L(o) { return o ? (o[lang] || o.en) : ''; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function dayWord(n) { return n === 1 ? t('j.day') : t('j.days'); }

  var toastEl = $('#toast'), toastT;
  function toast(m) { toastEl.textContent = m; toastEl.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(function () { toastEl.classList.remove('show'); }, 2400); }

  /* ---------- render: journeys ---------- */
  function routeHTML(r) { return r.map(function (p) { return '<span>' + esc(L(D.places[p])) + '</span>'; }).join('<i></i>'); }
  function renderTours() {
    $('#jTrack').innerHTML = D.tours.map(function (tr) {
      return '<article class="jc" role="listitem">' +
        '<div class="jc-img" data-open="' + tr.id + '"><img src="img/' + tr.img + '.webp" alt="' + esc(L(tr.name)) + '" width="1000" height="1250" loading="lazy" decoding="async">' +
        '<span class="jc-days"><span><b>' + tr.days + '</b><small>' + esc(dayWord(tr.days)) + '</small></span></span></div>' +
        '<div class="jc-body"><p class="jc-meta"><span>' + esc(L(tr.season)) + '</span><span>' + esc(L(tr.style)) + '</span></p>' +
        '<h3 class="jc-name">' + esc(L(tr.name)) + '</h3><p class="jc-route">' + routeHTML(tr.route) + '</p>' +
        '<button class="jc-open" type="button" data-open="' + tr.id + '">' + esc(t('j.view')) + '<svg><use href="#i-arrow"/></svg></button></div></article>';
    }).join('');
  }
  document.addEventListener('click', function (e) { var o = e.target.closest('[data-open]'); if (o) { e.preventDefault(); openTour(o.getAttribute('data-open')); } });

  /* ---------- map ---------- */
  // label offsets in screen px: [dx, dy, anchor]
  var labelPos = { ub: [0, -20, 'middle'], terelj: [12, -11, 'start'], chinggis: [13, 19, 'start'], khustai: [0, -16, 'middle'], family: [0, 27, 'middle'],
                   elsen: [0, -16, 'middle'], kharkhorin: [-13, 5, 'end'], orkhon: [0, 27, 'middle'] };
  function curve(pts) {
    var d = 'M' + pts[0].map(function (v) { return v.toFixed(1); }).join(' ');
    for (var i = 1; i < pts.length; i++) {
      var a = pts[i - 1], b = pts[i], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy) || 1;
      var k = (i % 2 ? 1 : -1) * Math.min(34, len * .2);
      d += ' Q' + (mx - dy / len * k).toFixed(1) + ' ' + (my + dx / len * k).toFixed(1) + ' ' + b[0].toFixed(1) + ' ' + b[1].toFixed(1);
    }
    return d;
  }
  // ids: tours to draw; o.w/o.h: px canvas; o.b: [x1,y1,x2,y2] in map units (auto-fit if omitted)
  function mapSVG(ids, o) {
    o = o || {}; var W = o.w || 800, H = o.h || 360, uid = o.uid || 'm';
    var used = {}; ids.forEach(function (id) { byId[id].route.forEach(function (p) { used[p] = 1; }); });
    var b = o.b;
    if (!b) {
      var xs = [], ys = []; Object.keys(used).forEach(function (p) { xs.push(M.pins[p][0]); ys.push(M.pins[p][1]); });
      var x1 = Math.min.apply(0, xs), x2 = Math.max.apply(0, xs), y1 = Math.min.apply(0, ys), y2 = Math.max.apply(0, ys);
      var k = Math.min((W - 230) / Math.max(1, x2 - x1), (H - 110) / Math.max(1, y2 - y1), 7);
      var cx = (x1 + x2) / 2, cy = (y1 + y2) / 2, hw = W / k / 2, hh = H / k / 2;
      b = [cx - hw, cy - hh, cx + hw, cy + hh];
    }
    var sx = W / (b[2] - b[0]), P = function (p) { var q = M.pins[p]; return [(q[0] - b[0]) * sx, (q[1] - b[1]) * sx]; };
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '"' + (o.fs ? ' style="--fs:' + o.fs + 'px"' : '') + ' role="img" aria-label="' + esc(lang === 'mn' ? 'Төв Монголын аяллын маршрутын газрын зураг' : 'Map of journey routes in central Mongolia') + '"><defs>' +
      '<radialGradient id="glow' + uid + '"><stop offset="0" stop-color="#F1DC9A" stop-opacity=".5"/><stop offset="1" stop-color="#F1DC9A" stop-opacity="0"/></radialGradient>' +
      '<pattern id="dots' + uid + '" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="7" cy="7" r=".9" fill="#C9A04E" fill-opacity=".34"/></pattern>' +
      '<radialGradient id="fade' + uid + '" cx="50%" cy="50%" r="60%"><stop offset=".55" stop-color="#fff"/><stop offset="1" stop-color="#000"/></radialGradient>' +
      '<mask id="mask' + uid + '"><rect width="' + W + '" height="' + H + '" fill="url(#fade' + uid + ')"/></mask></defs>' +
      '<rect class="m-dots" width="' + W + '" height="' + H + '" fill="url(#dots' + uid + ')" mask="url(#mask' + uid + ')"/>';
    ids.forEach(function (id) { s += '<path class="m-route" data-route="' + id + '" d="' + curve(byId[id].route.map(P)) + '"/>'; });
    Object.keys(used).forEach(function (p) {
      var xy = P(p), lp = (o.labels && o.labels[p]) || labelPos[p] || [0, -16, 'middle'], ub = p === 'ub', x = xy[0].toFixed(1), y = xy[1].toFixed(1);
      s += '<g class="m-pin' + (ub ? ' m-ub' : '') + '" data-pin="' + p + '"><circle class="m-glow" cx="' + x + '" cy="' + y + '" r="' + (ub ? 22 : 15) + '" style="fill:url(#glow' + uid + ')"/>' +
        '<circle cx="' + x + '" cy="' + y + '" r="' + (ub ? 6.5 : 5) + '"/>' + (ub ? '' : '<circle class="core" cx="' + x + '" cy="' + y + '" r="2"/>') +
        '<text x="' + (xy[0] + lp[0]).toFixed(1) + '" y="' + (xy[1] + lp[1]).toFixed(1) + '" text-anchor="' + lp[2] + '">' + esc(L(D.places[p])) + '</text></g>';
    });
    s += '</svg>';
    if (o.locator !== false) {
      s += '<svg class="m-loc" viewBox="10 20 1180 580" aria-hidden="true"><path d="' + M.d + '"/><rect x="' + b[0].toFixed(1) + '" y="' + b[1].toFixed(1) + '" width="' + (b[2] - b[0]).toFixed(1) + '" height="' + (b[3] - b[1]).toFixed(1) + '"/></svg>';
    }
    return s;
  }
  var smallMap = matchMedia('(max-width: 640px)');
  function renderMap() {
    var all = D.tours.map(function (x) { return x.id; });
    $('#map-svg').innerHTML = smallMap.matches
      ? mapSVG(all, { uid: 'm', w: 440, h: 236, b: [500, 200, 800, 361], fs: 11, labels: { ub: [-12, 4, 'end'], khustai: [0, 24, 'middle'], chinggis: [0, 23, 'middle'], orkhon: [-8, 24, 'start'], terelj: [10, -10, 'start'] } })
      : mapSVG(all, { uid: 'm', w: 800, h: 360, b: [490, 215, 790, 350] });
    $('#mapList').innerHTML = D.tours.map(function (tr, i) {
      return '<li><button type="button" data-route-btn="' + tr.id + '"><span class="n">0' + (i + 1) + '</span><span class="t">' + esc(L(tr.name)) + '</span><span class="d">' + tr.days + ' ' + esc(dayWord(tr.days)) + '</span></button></li>';
    }).join('');
  }
  function highlight(id) {
    $$('#map-svg .m-route').forEach(function (p) { p.classList.toggle('dim', !!id && p.getAttribute('data-route') !== id); p.classList.toggle('hl', p.getAttribute('data-route') === id); });
    $$('#mapList button').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-route-btn') === id); });
  }
  $('#mapList').addEventListener('mouseover', function (e) { var b = e.target.closest('[data-route-btn]'); if (b) highlight(b.getAttribute('data-route-btn')); });
  $('#mapList').addEventListener('focusin', function (e) { var b = e.target.closest('[data-route-btn]'); if (b) highlight(b.getAttribute('data-route-btn')); });
  $('#mapList').addEventListener('mouseleave', function () { highlight(null); });
  $('#mapList').addEventListener('click', function (e) { var b = e.target.closest('[data-route-btn]'); if (b) openTour(b.getAttribute('data-route-btn')); });

  /* ---------- experiences ---------- */
  function renderExp() {
    $('#expList').innerHTML = D.experiences.map(function (x, i) {
      return '<article class="exp-item" data-i="' + i + '"><img src="img/' + x.img + '.webp" alt="" loading="lazy" width="1000" height="1250"><span class="num">0' + (i + 1) + ' / 0' + D.experiences.length + '</span><h3>' + esc(L(x.t)) + '</h3><p>' + esc(L(x.d)) + '</p></article>';
    }).join('');
    var f = $('#expFrame'); $$('img', f).forEach(function (im) { im.remove(); });
    D.experiences.forEach(function (x, i) { var im = new Image(); im.src = 'img/' + x.img + '.webp'; im.alt = L(x.t); im.loading = 'lazy'; if (i === 0) im.className = 'on'; f.insertBefore(im, f.firstChild); });
    setExp(0);
  }
  var expIdx = 0;
  function setExp(i) {
    expIdx = i;
    $$('.exp-item').forEach(function (el, k) { el.classList.toggle('on', k === i); });
    var imgs = $$('#expFrame img').reverse();
    imgs.forEach(function (im, k) { im.classList.toggle('on', k === i); im.classList.toggle('was', k < i); im.style.zIndex = k; });
  }

  /* ---------- reels ---------- */
  function renderReels() {
    $('#reels').innerHTML = D.reels.map(function (r) {
      return '<figure class="reel"><video muted loop playsinline preload="none" poster="media/' + r + '.jpg"><source src="media/' + r + '.mp4" type="video/mp4"></video><span><svg><use href="#i-play"/></svg>Nomad Gate Tour</span></figure>';
    }).join('');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (ents) { ents.forEach(function (en) { var v = en.target; if (en.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else v.pause(); }); }, { threshold: .35 });
      $$('#reels video').forEach(function (v) { io.observe(v); });
    }
  }

  /* ---------- faq ---------- */
  function renderFaq() {
    $('#faqList').innerHTML = D.faq.map(function (q, i) {
      return '<div class="qa"><button type="button" aria-expanded="false" aria-controls="qa' + i + '">' + esc(L(q.q)) + '<svg><use href="#i-plus"/></svg></button><div class="ans" id="qa' + i + '" role="region"><div><p>' + esc(L(q.a)) + '</p></div></div></div>';
    }).join('');
  }
  $('#faqList').addEventListener('click', function (e) {
    var b = e.target.closest('.qa button'); if (!b) return;
    var qa = b.parentNode, open = !qa.classList.contains('open');
    qa.classList.toggle('open', open); b.setAttribute('aria-expanded', open);
    setTimeout(function () { if (window.ScrollTrigger) ScrollTrigger.refresh(); }, 750);
  });

  /* ---------- selects + form ---------- */
  function fillSelects() {
    var keep = { j: $('#f-journey').value, m: $('#f-month').value, w: $('#f-who').value, s: $('#b-stay').value };
    $('#f-journey').innerHTML = '<option value="">' + esc(t('p.any')) + '</option>' + D.tours.map(function (tr) { return '<option value="' + tr.id + '">' + esc(L(tr.name)) + '</option>'; }).join('');
    $('#f-month').innerHTML = D.months[lang].map(function (m, i) { return '<option value="' + i + '">' + esc(m) + '</option>'; }).join('');
    var w = ''; for (var i = 1; i <= 16; i++) w += '<option value="' + i + '">' + i + ' ' + esc(i === 1 ? t('person') : t('people')) + (i === 16 ? '+' : '') + '</option>';
    $('#f-who').innerHTML = w;
    $('#b-stay').innerHTML = '<option value="shared">' + esc(t('b.stay1')) + '</option><option value="private">' + esc(t('b.stay2')) + '</option>';
    $('#f-journey').value = keep.j || ''; $('#f-month').value = keep.m || '0'; $('#f-who').value = keep.w || '2'; $('#b-stay').value = keep.s || 'shared';
  }
  $('#cform').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target, note = $('#fnote'), name = $('#f-name').value.trim(), contact = $('#f-contact').value.trim();
    if (!name || !contact) { note.textContent = t('p.req'); note.classList.add('err'); (name ? $('#f-contact') : $('#f-name')).focus(); return; }
    note.classList.remove('err');
    var tr = byId[$('#f-journey').value];
    var text = ['Trip request — Nomad Gate Tour', 'Name: ' + name, 'Contact: ' + contact, 'Journey: ' + (tr ? tr.name.en : 'Not sure yet'),
      'Month: ' + D.months.en[+$('#f-month').value], 'Travellers: ' + $('#f-who').value, $('#f-msg').value.trim() ? 'Note: ' + $('#f-msg').value.trim() : ''].filter(Boolean).join('\n');
    try { navigator.clipboard.writeText(text).catch(function () {}); } catch (x) {}
    $('#mailLink').href = 'mailto:' + D.contact.email + '?subject=' + encodeURIComponent('Trip request — ' + name) + '&body=' + encodeURIComponent(text);
    $('#waLink').href = 'https://wa.me/' + D.contact.phoneRaw.replace('+', '') + '?text=' + encodeURIComponent(text);
    note.textContent = t('p.done'); $('#fafter').hidden = false;
  });
  document.addEventListener('click', function (e) {
    var c = e.target.closest('.copy'); if (!c) return;
    var v = c.getAttribute('data-copy');
    try { navigator.clipboard.writeText(v).then(function () { toast(t('c.copied') + ': ' + v); }, function () { toast(v); }); } catch (x) { toast(v); }
  });

  /* ---------- tour detail ---------- */
  var tourEl = $('#tour'), tourOpen = null, lastFocus = null, who = 2;
  function fillTour(tr) {
    $('#tourImg').src = 'img/' + tr.img + '.webp'; $('#tourImg').alt = L(tr.name);
    $('#tourKick').innerHTML = '<svg class="star"><use href="#i-star"/></svg>' + esc(tr.days + ' ' + dayWord(tr.days) + ' · ' + L(tr.season));
    $('#tourName').textContent = L(tr.name); $('#tourLead').textContent = L(tr.lead);
    $('#tourFacts').innerHTML = [[t('d.duration'), tr.days + ' ' + dayWord(tr.days)], [t('d.season'), L(tr.season)], [t('d.style'), L(tr.style)], [t('d.route'), tr.route.length - 1 + ' · ' + L(D.places[tr.route[1]])]]
      .map(function (f) { return '<div><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>'; }).join('');
    $('#tourDays').innerHTML = tr.plan.map(function (d, i) { var x = L(d); return '<li><span class="dn">' + (i + 1) + '</span><div><h4>' + esc(x[0]) + '</h4><p>' + esc(x[1]) + '</p></div></li>'; }).join('');
    $('#tourInc').innerHTML = t('d.inc').map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('');
    $('#tourExc').innerHTML = t('d.exc').map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('');
    var i2 = $('#tourImg2'); if (tr.img2) { i2.src = 'img/' + tr.img2 + '.webp'; i2.alt = ''; i2.hidden = false; } else i2.hidden = true;
    $('#tourMap').innerHTML = (smallMap.matches ? mapSVG([tr.id], { uid: 't', w: 440, h: 250, fs: 11, locator: false, labels: { ub: [0, 26, 'middle'], orkhon: [-8, 24, 'start'], chinggis: [0, 23, 'middle'] } }) : mapSVG([tr.id], { uid: 't', w: 820, h: 330, locator: false, labels: { ub: [0, 28, 'middle'] } }));
  }
  function openTour(id) {
    var tr = byId[id]; if (!tr) return;
    lastFocus = document.activeElement; tourOpen = id; fillTour(tr);
    var d = new Date(); d.setDate(d.getDate() + 14); $('#b-date').min = new Date().toISOString().slice(0, 10); if (!$('#b-date').value) $('#b-date').value = d.toISOString().slice(0, 10);
    tourEl.hidden = false; $('#tourScroll').scrollTop = 0; document.body.style.overflow = 'hidden'; if (lenis) lenis.stop();
    try { history.replaceState(null, '', '#journey-' + id); } catch (x) {}
    if (hasGsap() && !reduce) {
      gsap.fromTo(tourEl, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.05, ease: 'expo.inOut' });
      gsap.fromTo('#tourImg', { scale: 1.25 }, { scale: 1, duration: 1.8, ease: 'expo.out' });
      gsap.fromTo(['#tourKick', '#tourName', '#tourLead'], { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, stagger: .08, ease: 'expo.out', delay: .45 });
      gsap.fromTo('#tourDays li', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .9, stagger: .07, ease: 'power3.out', delay: .7 });
    }
    setTimeout(function () { $('#tourClose').focus({ preventScroll: true }); }, 60);
  }
  function closeTour(cb) {
    if (!tourOpen) return;
    var finish = function () { tourEl.hidden = true; tourOpen = null; document.body.style.overflow = ''; if (lenis) lenis.start(); try { history.replaceState(null, '', location.pathname + location.search); } catch (x) {} if (cb) cb(); else if (lastFocus) lastFocus.focus({ preventScroll: true }); };
    if (hasGsap() && !reduce) gsap.to(tourEl, { clipPath: 'inset(0% 0% 100% 0%)', duration: .8, ease: 'expo.inOut', onComplete: finish }); else finish();
  }
  $('#tourClose').addEventListener('click', function () { closeTour(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { if (tourOpen) closeTour(); else if (!$('#mnav').hidden) setMenu(false); } });
  $('#b-minus').addEventListener('click', function () { who = Math.max(1, who - 1); $('#b-who').textContent = who; });
  $('#b-plus').addEventListener('click', function () { who = Math.min(16, who + 1); $('#b-who').textContent = who; });
  $('#b-send').addEventListener('click', function () {
    var id = tourOpen, date = $('#b-date').value, stay = $('#b-stay').selectedOptions[0].textContent;
    closeTour(function () {
      $('#f-journey').value = id; $('#f-who').value = String(Math.min(16, who));
      if (date) $('#f-month').value = String(new Date(date + 'T00:00:00').getMonth() + 1);
      $('#f-msg').value = (date ? (lang === 'mn' ? 'Эхлэх өдөр: ' : 'Start date: ') + date + '\n' : '') + (lang === 'mn' ? 'Байр: ' : 'Stay: ') + stay;
      goTo('#contact'); setTimeout(function () { $('#f-name').focus({ preventScroll: true }); }, 1200);
    });
  });

  /* ---------- statement words ---------- */
  function splitStatement() {
    var el = $('#stText'), words = t('statement').split(' ');
    var brand = lang === 'mn' ? 'Nomad Gate Tour тэр хаалгыг танд нээнэ.' : 'Nomad Gate Tour opens that door for you.';
    var full = t('statement'), cut = full.indexOf(brand.split(' ')[0]);
    var head = full.slice(0, cut).trim().split(' '), tail = full.slice(cut).trim().split(' ');
    el.innerHTML = head.map(function (w) { return '<span class="w">' + esc(w) + '</span>'; }).join(' ') + ' <span class="gold-text">' + tail.map(function (w) { return '<span class="w">' + esc(w) + '</span>'; }).join(' ') + '</span>';
  }
  function splitH1() {
    var h = $('.hero-h1'); h.setAttribute('aria-label', t('hero.h1').replace('|', ' '));
    h.innerHTML = t('hero.h1').split('|').map(function (line) { return '<span class="hl" aria-hidden="true">' + line.split(' ').map(function (w) { return '<span class="ln"><span>' + esc(w) + '</span></span>'; }).join(' ') + '</span>'; }).join('');
  }

  /* ---------- i18n ---------- */
  function applyLang() {
    root.lang = lang;
    $$('[data-i18n]').forEach(function (el) { var v = t(el.getAttribute('data-i18n')); if (typeof v === 'string') el.textContent = v; });
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang); });
    renderTours(); renderMap(); renderExp(); renderFaq(); fillSelects(); splitStatement(); splitH1();
    if (tourOpen) fillTour(byId[tourOpen]);
  }
  $$('.lang button').forEach(function (b) { b.addEventListener('click', function () { var l = b.getAttribute('data-lang'); if (l === lang) return; lang = l; store.set('ngt-lang', l); applyLang(); if (hasGsap()) { buildScroll(); ScrollTrigger.refresh(); } }); });

  /* ---------- header, menu, nav ---------- */
  var hdr = $('#hdr'), burger = $('.burger'), mnav = $('#mnav');
  window.addEventListener('scroll', function () { hdr.classList.toggle('scrolled', window.scrollY > 40); }, { passive: true });
  function setMenu(open) { burger.setAttribute('aria-expanded', open); mnav.hidden = !open; document.body.style.overflow = open ? 'hidden' : ''; if (lenis) { open ? lenis.stop() : lenis.start(); } }
  burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
  function goTo(sel) { var el = $(sel); if (!el) return; if (lenis) lenis.scrollTo(el, { offset: sel === '#top' ? 0 : -40, duration: 1.6 }); else el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]'); if (!a || a.closest('.tour')) return;
    var id = a.getAttribute('href'); if (id.length < 2 || !$(id)) return;
    e.preventDefault(); setMenu(false); goTo(id);
  });
  if ('IntersectionObserver' in window) {
    var navLinks = $$('.nav a');
    var nio = new IntersectionObserver(function (ents) { ents.forEach(function (en) { if (en.isIntersecting) navLinks.forEach(function (l) { l.classList.toggle('on', l.getAttribute('href') === '#' + en.target.id); }); }); }, { rootMargin: '-45% 0px -50% 0px' });
    ['journeys', 'map', 'experiences', 'road', 'faq'].forEach(function (id) { nio.observe($('#' + id)); });
  }
  $('#yr').textContent = new Date().getFullYear();

  var onSmall = function () { renderMap(); if (tourOpen) fillTour(byId[tourOpen]); if (hasGsap() && !reduce) { buildScroll(); ScrollTrigger.refresh(); } };
  if (smallMap.addEventListener) smallMap.addEventListener('change', onSmall); else if (smallMap.addListener) smallMap.addListener(onSmall);

  /* ---------- first render ---------- */
  applyLang();
  renderReels();

  /* ---------- gate intro ---------- */
  var heroVideo = $('#heroVideo');
  function videoReady() {
    return new Promise(function (res) {
      if (heroVideo.readyState >= 3) return res();
      heroVideo.addEventListener('canplay', res, { once: true }); heroVideo.addEventListener('error', res, { once: true });
      heroVideo.load(); setTimeout(res, 5000);
    });
  }
  function entered() { root.classList.add('entered'); document.body.style.overflow = ''; if (lenis) lenis.start(); store.set('ngt-gate', '1', true); }
  function heroIntro() {
    if (!hasGsap() || reduce) return;
    var tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.fromTo('.hero-video', { scale: 1.18 }, { scale: 1, duration: 2.6, ease: 'power3.out' }, 0)
      .from('.hdr > *', { y: -16, opacity: 0, duration: 1.1, stagger: .08 }, .3)
      .from('.hero-kicker', { y: 20, opacity: 0, duration: 1.1 }, .35)
      .from('.hero-h1 .ln > span', { yPercent: 110, duration: 1.4, stagger: .06 }, .4)
      .from('.hero-sub', { y: 24, opacity: 0, duration: 1.1 }, .8)
      .from('.hero-cta > *', { y: 24, opacity: 0, duration: 1.1, stagger: .08 }, .9)
      .from('.scroll-cue', { opacity: 0, duration: 1 }, 1.2);
  }
  function runGate() {
    var gate = $('#gate'), bg = $('#gateBg'), mark = $('#gateMark'), door = $('#gmDoor'), light = $('.gm-light'), stars = $('.gm-stars'), ger = $('.gm-ger'), word = $('.gate-word'), tag = $('.gate-tag');
    var playVideo = function () { var p = heroVideo.play(); if (p && p.catch) p.catch(function () {}); };
    if (!hasGsap() || reduce) {
      root.classList.add('ready');
      videoReady().then(function () { playVideo(); setTimeout(function () { gate.style.transition = 'opacity .6s'; gate.style.opacity = '0'; setTimeout(entered, 620); }, reduce ? 700 : 1200); });
      return;
    }
    window.scrollTo(0, 0); if (lenis) lenis.stop();
    var quick = store.get('ngt-gate', true) === '1';
    gsap.set([stars, ger, door, word, tag], { opacity: 0 });
    root.classList.add('ready');
    var intro = gsap.timeline();
    if (quick) intro.to([stars, ger, door], { opacity: 1, duration: .5 }, 0);
    else {
      intro.fromTo(stars, { opacity: 0, scale: .8, transformOrigin: '75% 15%' }, { opacity: 1, scale: 1, duration: 1.3, ease: 'expo.out' }, 0)
        .to(stars, { opacity: .55, duration: .18, yoyo: true, repeat: 3, ease: 'sine.inOut' }, .6)
        .fromTo([ger, door], { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out' }, .35)
        .fromTo([word, tag], { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 1.1, stagger: .12, ease: 'expo.out' }, .85)
        .to(light, { opacity: .95, duration: .9, ease: 'power2.inOut' }, 1.5)
        .to(light, { opacity: .45, duration: .5, ease: 'sine.inOut' }, 2.4);
    }
    var minTime = new Promise(function (r) { intro.eventCallback('onComplete', r); });
    Promise.all([minTime, videoReady()]).then(function () {
      playVideo();
      var r = door.getBoundingClientRect(), W = window.innerWidth, H = window.innerHeight;
      var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      var s = Math.max(cx / (r.width / 2), (W - cx) / (r.width / 2), cy / (r.height / 2), (H - cy) / (r.height / 2)) * 1.08;
      var hole = { k: 0 };
      var setHole = function () {
        var hw = r.width / 2 * hole.k, hh = r.height / 2 * hole.k, x1 = cx - hw, x2 = cx + hw, y1 = cy - hh, y2 = cy + hh;
        bg.style.clipPath = 'polygon(evenodd, 0 0, ' + W + 'px 0, ' + W + 'px ' + H + 'px, 0 ' + H + 'px, 0 0, ' + x1 + 'px ' + y1 + 'px, ' + x1 + 'px ' + y2 + 'px, ' + x2 + 'px ' + y2 + 'px, ' + x2 + 'px ' + y1 + 'px, ' + x1 + 'px ' + y1 + 'px)';
      };
      gsap.set(mark, { transformOrigin: '49.65% 86.74%' });
      var out = gsap.timeline({ onComplete: entered });
      out.to([word, tag], { opacity: 0, y: -12, duration: .45, ease: 'power2.in' }, 0)
         .add(function () { hole.k = 1; setHole(); }, .4)
         .to(door, { rotateY: -110, duration: 1.05, ease: 'power3.inOut' }, .4)
         .to(light, { opacity: 0, duration: .5 }, .4)
         .to(hole, { k: s, duration: 1.55, ease: 'expo.inOut', onUpdate: setHole }, 1.15)
         .to(mark, { scale: s, duration: 1.55, ease: 'expo.inOut' }, 1.15)
         .to(stars, { opacity: 0, duration: .4 }, 1.15)
         .add(heroIntro, 1.85)
         .to(gate, { opacity: 0, duration: .3 }, 2.5);
    });
  }

  /* ---------- scroll motion ---------- */
  var mm = null;
  function buildScroll() {
    if (!hasGsap() || reduce) return;
    if (mm) mm.revert();
    mm = gsap.matchMedia();
    mm.add({ desk: '(min-width: 1024px)', mob: '(max-width: 1023.98px)' }, function (ctx) {
      var desk = ctx.conditions.desk;

      // statement words light up
      var words = $$('#stText .w');
      ScrollTrigger.create({ trigger: '#stText', start: 'top 80%', end: 'bottom 45%', scrub: true,
        onUpdate: function (st) { var p = st.progress * (words.length + 2); words.forEach(function (w, i) { w.style.opacity = Math.max(.16, Math.min(1, p - i)).toFixed(2); }); } });
      gsap.fromTo('.st-mark', { y: 30, opacity: 0, rotate: -6 }, { y: 0, opacity: 1, rotate: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: '.statement', start: 'top 70%' } });

      // journeys: horizontal travel on desktop
      if (desk) {
        var track = $('#jTrack');
        var dist = function () { var last = track.lastElementChild; if (!last) return 0; var base = last.offsetParent === track ? track.offsetLeft : 0; return Math.max(0, base + last.offsetLeft + last.offsetWidth + parseFloat(getComputedStyle(track).paddingRight) - window.innerWidth); };
        var tw = gsap.to(track, { x: function () { return -dist(); }, ease: 'none',
          scrollTrigger: { trigger: '#jPin', start: 'top top', end: function () { return '+=' + dist(); }, pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1,
            onUpdate: function (st) { $('#jProg').style.transform = 'scaleX(' + st.progress.toFixed(3) + ')'; } } });
        $$('.jc-img img').forEach(function (im) { gsap.fromTo(im, { xPercent: -5, scale: 1.12 }, { xPercent: 5, scale: 1.12, ease: 'none', scrollTrigger: { trigger: im.parentNode, containerAnimation: tw, start: 'left right', end: 'right left', scrub: true } }); });
      }
      gsap.from('.jc', { y: 80, opacity: 0, duration: 1.3, stagger: .1, ease: 'expo.out', scrollTrigger: { trigger: '#jTrack', start: 'top 85%' } });

      // map: routes draw, pins pop
      $$('#map-svg .m-route').forEach(function (p, i) { var len = p.getTotalLength() + 2; gsap.fromTo(p, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 2.2, delay: i * .18, ease: 'power2.inOut', scrollTrigger: { trigger: '#map-svg', start: 'top 70%' } }); });
      gsap.from('#map-svg .m-pin', { scale: 0, opacity: 0, transformOrigin: '50% 50%', duration: .8, stagger: .06, ease: 'back.out(2.4)', scrollTrigger: { trigger: '#map-svg', start: 'top 70%' } });
      gsap.from('#mapList li', { x: -30, opacity: 0, duration: 1, stagger: .07, ease: 'expo.out', scrollTrigger: { trigger: '#mapList', start: 'top 85%' } });

      // experiences: active item drives the frame
      $$('.exp-item').forEach(function (el, i) { ScrollTrigger.create({ trigger: el, start: 'top 55%', end: 'bottom 55%', onToggle: function (st) { if (st.isActive) setExp(i); } }); });

      // reels
      gsap.from('.reel', { y: 100, opacity: 0, duration: 1.4, stagger: .08, ease: 'expo.out', scrollTrigger: { trigger: '#reels', start: 'top 88%' } });
      if (desk) { var rl = $('#reels'); gsap.fromTo(rl, { x: 0 }, { x: function () { return -Math.max(0, rl.scrollWidth - window.innerWidth); }, ease: 'none', scrollTrigger: { trigger: '.road', start: 'top bottom', end: 'bottom top', scrub: .6, invalidateOnRefresh: true } }); }

      // generic reveals
      $$('[data-reveal]').forEach(function (el) {
        var sibs = $$('[data-reveal]', el.parentNode), i = sibs.indexOf(el);
        gsap.from(el, { y: 36, opacity: 0, duration: 1.2, delay: Math.max(0, i) * .08, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%' } });
      });
      gsap.from('.qa', { y: 24, opacity: 0, duration: 1, stagger: .06, ease: 'expo.out', scrollTrigger: { trigger: '#faqList', start: 'top 85%' } });
      gsap.from('.c-form', { y: 60, opacity: 0, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: '.c-form', start: 'top 88%' } });
      gsap.fromTo('.contact-bg', { scale: 1.15 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.contact', start: 'top bottom', end: 'bottom top', scrub: true } });
      gsap.from('.foot-logo', { y: 40, opacity: 0, scale: .94, duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: '.foot', start: 'top 85%' } });
      gsap.to('.hero-video', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to('.hero-in', { yPercent: -18, opacity: 0, ease: 'none', scrollTrigger: { trigger: '.hero', start: '30% top', end: 'bottom top', scrub: true } });
    });
  }

  /* ---------- cursor + magnetic ---------- */
  function pointerFx() {
    if (!hasGsap() || reduce || !matchMedia('(pointer: fine)').matches) return;
    var c = $('.cursor');
    var qx = gsap.quickTo(c, 'x', { duration: .45, ease: 'power3' }), qy = gsap.quickTo(c, 'y', { duration: .45, ease: 'power3' });
    window.addEventListener('mousemove', function (e) { if (!c.classList.contains('on')) { gsap.set(c, { x: e.clientX, y: e.clientY }); c.classList.add('on'); } qx(e.clientX); qy(e.clientY); });
    document.addEventListener('mouseover', function (e) { c.classList.toggle('hover', !!e.target.closest('a,button,select,input,textarea,[data-open]')); });
    $$('.magnet').forEach(function (b) {
      var bx = gsap.quickTo(b, 'x', { duration: .5, ease: 'power3' }), by = gsap.quickTo(b, 'y', { duration: .5, ease: 'power3' });
      b.addEventListener('mousemove', function (e) { var r = b.getBoundingClientRect(); bx((e.clientX - r.left - r.width / 2) * .25); by((e.clientY - r.top - r.height / 2) * .35); });
      b.addEventListener('mouseleave', function () { bx(0); by(0); });
    });
  }

  /* ---------- boot ---------- */
  function boot() {
    if (hasGsap() && !reduce) {
      gsap.registerPlugin(ScrollTrigger);
      if (window.Lenis) {
        lenis = new Lenis({ lerp: .085, smoothWheel: true, prevent: function (n) { return !!(n.closest && n.closest('.tour')); } });
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add(function (time) { lenis.raf(time * 1000); }); gsap.ticker.lagSmoothing(0);
      }
      buildScroll(); pointerFx();
      window.addEventListener('load', function () { ScrollTrigger.refresh(); });
    }
    runGate();
    var m = location.hash.match(/^#journey-(\w+)/);
    if (m && byId[m[1]]) { var iv = setInterval(function () { if (root.classList.contains('entered')) { clearInterval(iv); openTour(m[1]); } }, 200); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
