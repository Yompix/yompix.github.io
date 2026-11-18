/* Сайт Yompix Games: пиксельный фон, заставка, витрина с пиксельной сменой слайдов, библиотека, страница проекта, поддержка. */
(() => {
  /* ---------- язык по стране (часовой пояс, без запросов в интернет) ----------
     Украина — украинский и русский на выбор; Россия и русскоязычные страны — только русский; остальные — английский.
     Проверка: ?region=ua|ru|en */
  const UA_TZ = ['Europe/Kiev', 'Europe/Kyiv', 'Europe/Uzhgorod', 'Europe/Zaporozhye', 'Europe/Simferopol'];
  const RU_TZ = ['Europe/Moscow', 'Europe/Kaliningrad', 'Europe/Samara', 'Europe/Volgograd', 'Europe/Saratov', 'Europe/Ulyanovsk', 'Europe/Astrakhan',
    'Europe/Kirov', 'Europe/Minsk', 'Europe/Chisinau', 'Asia/Yekaterinburg', 'Asia/Omsk', 'Asia/Novosibirsk', 'Asia/Barnaul', 'Asia/Tomsk',
    'Asia/Novokuznetsk', 'Asia/Krasnoyarsk', 'Asia/Irkutsk', 'Asia/Chita', 'Asia/Yakutsk', 'Asia/Khandyga', 'Asia/Vladivostok', 'Asia/Ust-Nera',
    'Asia/Magadan', 'Asia/Sakhalin', 'Asia/Srednekolymsk', 'Asia/Kamchatka', 'Asia/Anadyr', 'Asia/Almaty', 'Asia/Qostanay', 'Asia/Aqtobe',
    'Asia/Aqtau', 'Asia/Atyrau', 'Asia/Oral', 'Asia/Qyzylorda', 'Asia/Bishkek', 'Asia/Dushanbe', 'Asia/Tashkent', 'Asia/Samarkand',
    'Asia/Ashgabat', 'Asia/Yerevan', 'Asia/Baku'];
  function region() {
    const forced = new URLSearchParams(location.search).get('region');
    if (forced) return forced;
    let tz = '';
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) { /* старый браузер */ }
    if (UA_TZ.indexOf(tz) >= 0) return 'ua';
    if (RU_TZ.indexOf(tz) >= 0) return 'ru';
    if (tz) return 'en';
    const l = (navigator.language || 'en').slice(0, 2);
    return l === 'uk' ? 'ua' : ['ru', 'be', 'kk', 'ky', 'tg', 'uz', 'hy', 'az'].indexOf(l) >= 0 ? 'ru' : 'en';
  }
  const REGION = region();
  const LANGS = REGION === 'ua' ? [['uk', 'UA'], ['ru', 'RU']] : REGION === 'ru' ? [['ru', 'RU']] : [['en', 'EN']];
  const saved = localStorage.getItem('yg_lang');
  const navUk = (navigator.languages || [navigator.language || '']).some((x) => String(x).indexOf('uk') === 0);
  let lang = LANGS.some((x) => x[0] === saved) ? saved : REGION === 'ua' ? (navUk ? 'uk' : 'ru') : LANGS[0][0];

  const REDUCED = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  let cat = 'all';
  let slide = 0;
  let timer = null;
  let sponsors = null;
  const $ = (s, el) => (el || document).querySelector(s);
  const has = (v) => v !== undefined && v !== null;
  const T = (o) => (o && typeof o === 'object' && !Array.isArray(o) ? (has(o[lang]) ? o[lang] : has(o.en) ? o.en : '') : has(o) ? o : '');
  const t = (k) => T(UI[k]);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const P = (id) => PROJECTS.filter((p) => p.id === id)[0];
  const FEAT = PROJECTS.filter((p) => p.featured);
  const pad2 = (n) => (n < 10 ? '0' : '') + n;
  const DL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="square"><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14"/></svg>';
  const GO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="square"><path d="M7 17 17 7m0 0H8m9 0v9"/></svg>';

  /* ---------- нарисованные обложки ---------- */
  function art(kind) {
    if (kind === 'novograd') {
      const h = [38, 62, 48, 80, 55, 92, 66, 44, 74, 58, 86, 50, 70, 40];
      return '<div class="art art-novograd"><div class="city">' + h.map((x) => '<i style="height:' + x + '%"></i>').join('') +
        '</div><div class="water"></div><div class="rain"></div><div class="neon">' + (lang === 'en' ? 'Novograd' : 'Новоград') +
        '<small>' + (lang === 'en' ? 'dark streets' : lang === 'uk' ? 'темні вулиці' : 'тёмные улицы') + '</small></div></div>';
    }
    if (kind === 'vpn') {
      return '<div class="art art-vpn"><div class="globe"></div><svg viewBox="0 0 100 120" fill="none"><path d="M50 4 92 20v34c0 30-19 51-42 62C27 105 8 84 8 54V20Z" fill="#111" stroke="#fff" stroke-width="3"/><path d="M33 60l12 12 24-26" stroke="#fff" stroke-width="7" stroke-linecap="square"/></svg></div>';
    }
    if (kind === 'boost') {
      return '<div class="art art-boost"><div class="fps"><span>FPS</span><b>57</b><s>24</s></div><div class="tr">"New Game" → "Новая игра"</div></div>';
    }
    return '';
  }
  const media = (p) => (p.key ? '<img src="' + p.key + '" alt="' + esc(T(p.name)) + '">' : art(p.art));
  const status = (p) => '<span class="tag"><i class="blink"></i>' + esc(t(p.status)) + '</span>';
  const btns = (p) => (p.links || []).map((l, i) =>
    '<a class="btn ' + (i === 0 ? 'btn-w' : 'btn-o') + '" href="' + l.url + '"' + (l.url.indexOf('http') === 0 ? ' target="_blank" rel="noopener"' : '') +
    (l.dl ? ' download' : '') + '>' + (l.dl ? DL : GO) + esc(T(l.t)) + (l.size ? ' <small>' + l.size + '</small>' : '') + '</a>').join('');

  /* ---------- витрина ---------- */
  function renderHero() {
    $('#slides').innerHTML = FEAT.map((p, i) =>
      '<div class="slide' + (i === slide ? ' on' : '') + '">' +
        '<div class="shot" data-open="' + p.id + '">' + media(p) + '<span class="rec">' + pad2(i + 1) + ' / ' + pad2(FEAT.length) + '</span></div>' +
        '<div class="slide-in">' +
          '<div class="tags"><span class="tag solid">' + esc(T(p.type)) + '</span>' + status(p) + (p.age ? '<span class="tag">' + p.age + '</span>' : '') + '</div>' +
          '<h1>' + esc(T(p.name)) + '</h1>' +
          '<p class="hook">' + esc(T(p.hook)) + '</p>' +
          '<div class="cta">' + btns({ links: (p.links || []).slice(0, 1) }) + '<button class="btn btn-o" data-open="' + p.id + '">' + t('more') + '</button></div>' +
        '</div></div>').join('');
    $('#thumbs').innerHTML = FEAT.map((p, i) =>
      '<button class="thumb' + (i === slide ? ' on' : '') + '" data-slide="' + i + '"><div class="tmini">' + (p.key ? '<img src="' + p.key + '" alt="">' : '<div class="art art-' + p.art + '"></div>') + '</div>' +
      '<div><b>' + esc(T(p.name)) + '</b><span>' + esc(T(p.type)).split(' · ')[0] + '</span></div><i class="bar"></i></button>').join('');
    schedule();
  }
  function schedule() { clearTimeout(timer); timer = setTimeout(() => go(slide + 1), 7000); }
  function setSlide(i) {
    slide = (i + FEAT.length) % FEAT.length;
    document.querySelectorAll('.slide').forEach((s, k) => s.classList.toggle('on', k === slide));
    document.querySelectorAll('.thumb').forEach((s, k) => { s.classList.remove('on'); void s.offsetWidth; s.classList.toggle('on', k === slide); });
  }
  /* смена слайда: экран закрывается пикселями, слайд меняется, пиксели рассыпаются */
  let wiping = false;
  function go(i) {
    schedule();
    if (wiping) return;
    if (REDUCED || document.hidden) { setSlide(i); return; }
    wiping = true;
    pixelWipe($('#wipe'), () => setSlide(i), () => { wiping = false; });
  }
  function pixelWipe(cv, mid, done) {
    const r = cv.getBoundingClientRect();
    const cell = Math.max(28, Math.round(Math.min(r.width, r.height) / 14));
    const cw = Math.ceil(r.width / cell), ch = Math.ceil(r.height / cell);
    cv.width = cw; cv.height = ch;
    cv.style.imageRendering = 'pixelated';
    const ctx = cv.getContext('2d');
    const n = cw * ch;
    const order = [];
    for (let k = 0; k < n; k++) order.push(k);
    const key = order.map((k) => (k % cw) / cw * 0.6 + Math.random() * 0.4);   // волна слева направо + случайность
    order.sort((a, b) => key[a] - key[b]);
    const shade = order.map((c) => 6 + ((c * 37) % 5) * 6);                  // разные оттенки чёрного
    const IN = 420, OUT = 520;
    let t0 = null, swapped = false;
    function frame(ts) {
      if (t0 === null) t0 = ts;
      const e = ts - t0;
      ctx.clearRect(0, 0, cw, ch);
      let a = 0, b = 0;
      if (e < IN) { a = 0; b = Math.floor(n * e / IN); }
      else {
        if (!swapped) { swapped = true; mid(); }
        a = Math.floor(n * Math.min(1, (e - IN) / OUT)); b = n;
      }
      for (let k = a; k < b; k++) {
        const c = order[k], g = shade[k];
        ctx.fillStyle = 'rgb(' + g + ',' + g + ',' + g + ')';
        ctx.fillRect(c % cw, Math.floor(c / cw), 1, 1);
      }
      if (e < IN + OUT) requestAnimationFrame(frame);
      else { ctx.clearRect(0, 0, cw, ch); done(); }
    }
    requestAnimationFrame(frame);
  }

  /* ---------- библиотека ---------- */
  function renderGrid() {
    $('#chips').innerHTML = CATS.map((c) => '<button class="' + (c === cat ? 'on' : '') + '" data-cat="' + c + '">' + t('cat_' + c) + '</button>').join('');
    $('#grid').innerHTML = PROJECTS.map((p) =>
      '<article class="tile reveal' + (cat !== 'all' && p.cat !== cat ? ' hide' : '') + '" data-open="' + p.id + '" tabindex="0">' +
        '<div class="tile-media">' + media(p) + '<div class="tags">' + status(p) + '</div></div>' +
        '<div class="tile-body"><div class="tile-type">' + esc(T(p.type)) + '</div><h3>' + esc(T(p.name)) + '</h3><p>' + esc(T(p.hook)) + '</p>' +
        '<div class="tile-foot"><span>' + t('version') + ' <b>' + p.version + '</b></span><span class="go">' + t('more') + ' →</span></div></div>' +
      '</article>').join('');
  }

  /* ---------- страница проекта ---------- */
  function openSheet(id, push) {
    const p = P(id);
    if (!p) return;
    const shots = p.shots && p.shots.length ? p.shots : null;
    const card = $('#sheetcard');
    card.innerHTML =
      '<button class="sheet-x" data-close aria-label="' + t('close') + '">×</button>' +
      '<div class="sh-top"><div class="gal"><div class="gal-main" id="galmain">' + (shots ? '<img src="' + shots[0] + '" alt="">' : media(p)) + '</div>' +
      (shots && shots.length > 1 ? '<div class="gal-row">' + shots.map((s, i) => '<button class="' + (i ? '' : 'on') + '" data-shot="' + s + '"><img src="' + s + '" alt=""></button>').join('') + '</div>' : '') +
      '</div><div class="sh-info"><div class="type">' + esc(T(p.type)) + '</div><h2>' + esc(T(p.name)) + '</h2><p class="hook">' + esc(T(p.hook)) + '</p><p class="about">' + esc(T(p.about)) + '</p>' +
      '<div class="meta"><div><small>' + t('version') + '</small><b>' + p.version + '</b></div><div><small>' + t('platforms') + '</small><b>' + esc(T(p.platforms)) + '</b></div></div>' +
      '<div class="cta">' + btns(p) + '</div></div></div>' +
      '<div class="sh-bottom"><div><h4>' + t('features') + '</h4><ul class="feat">' + (T(p.features) || []).map((f) => '<li>' + esc(f) + '</li>').join('') + '</ul></div>' +
      '<div><h4>' + t('how') + '</h4><p>' + esc(T(p.how)) + '</p></div></div>';
    $('#sheet').hidden = false;
    document.body.classList.add('lock');
    card.scrollTop = 0;
    if (push !== false) history.replaceState(null, '', '#' + id);
  }
  function closeSheet() {
    $('#sheet').hidden = true;
    document.body.classList.remove('lock');
    if (P(location.hash.slice(1))) history.replaceState(null, '', location.pathname + location.search);
  }

  /* ---------- поддержка ---------- */
  function renderSupport() {
    const w = [];
    if (SUPPORT.stars) w.push('<a class="way main pxc" href="' + SUPPORT.stars + '" target="_blank" rel="noopener"><div class="ic">★</div><div><b>' + t('w_stars') + '</b><span>' + t('w_stars_d') + '</span></div><div class="arr">→</div></a>');
    if (SUPPORT.mono) w.push('<a class="way" href="' + SUPPORT.mono + '" target="_blank" rel="noopener"><div class="ic">₴</div><div><b>' + t('w_mono') + '</b><span>' + t('w_mono_d') + '</span></div><div class="arr">→</div></a>');
    const wallets = [['USDT · TRC20', SUPPORT.usdt_trc20], ['TON', SUPPORT.usdt_ton], ['SOL', SUPPORT.sol]].filter((x) => x[1]);
    if (wallets.length) w.push('<div class="way crypto"><div class="ic">◈</div><div><b>' + t('w_crypto') + '</b><span>' + t('w_crypto_d') + '</span></div><div class="addr">' +
      wallets.map((x) => '<div><em>' + x[0] + '</em><code title="' + esc(x[1]) + '">' + esc(x[1]) + '</code><button data-copy="' + esc(x[1]) + '">' + t('copy') + '</button></div>').join('') + '</div></div>');
    w.push('<a class="way" href="' + SUPPORT.channel + '" target="_blank" rel="noopener"><div class="ic">✈</div><div><b>' + t('w_free') + '</b><span>' + t('w_free_d') + '</span></div><div class="arr">→</div></a>');
    $('#ways').innerHTML = w.join('');
  }
  function renderWall() {
    const list = sponsors && sponsors.list ? sponsors.list : [];
    $('#walltotal').textContent = sponsors && sponsors.count ? t('wall_total').replace('%n', sponsors.count).replace('%s', sponsors.total) : '';
    const items = list.map((s) => '<span class="n">' + esc(s.name) + '<i>' + s.stars + ' ★</i></span>').join('') + '<span class="n you">' + t('wall_you') + '</span>';
    let once = items;
    while (once.length < 1200 && list.length) once += items;
    $('#wall').innerHTML = '<div class="run">' + once + once + '</div>';
  }
  function loadSponsors() {
    if (!window.fetch) return;
    const ctl = window.AbortController ? new AbortController() : null;
    if (ctl) setTimeout(() => ctl.abort(), 8000);
    fetch(SUPPORT.sponsorsApi, ctl ? { signal: ctl.signal } : {}).then((r) => r.json())
      .then((j) => { if (j && j.ok) { sponsors = j; if (j.donate) SUPPORT.stars = j.donate; } })
      .catch(() => {}).then(() => { renderSupport(); renderWall(); });
  }

  /* ---------- появление при прокрутке ---------- */
  let io = null;
  function observe() {
    const els = document.querySelectorAll('.reveal:not(.in)');
    if (!window.IntersectionObserver || REDUCED) { els.forEach((e) => e.classList.add('in')); return; }
    if (!io) {
      io = new IntersectionObserver((es) => es.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const sib = el.classList.contains('tile') ? Array.prototype.indexOf.call(el.parentNode.children, el) % 3 : 0;
        el.style.animationDelay = (sib * 0.12) + 's';
        el.classList.add('in');
        io.unobserve(el);
      }), { threshold: 0.12 });
    }
    els.forEach((e) => io.observe(e));
  }

  /* ---------- живой пиксельный фон ---------- */
  function hash(x, y) { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); }
  function vnoise(x, y) {
    const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
    const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  }
  const fbm = (x, y) => vnoise(x, y) * 0.55 + vnoise(x * 2.1, y * 2.1) * 0.3 + vnoise(x * 4.3, y * 4.3) * 0.15;
  const bg = { cv: null, ctx: null, base: null, W: 0, H: 0, cell: 14, crosses: [], streaks: [], last: 0 };
  function buildBg() {
    const cv = $('#bg');
    const W = innerWidth, H = innerHeight;
    cv.width = W; cv.height = H;
    bg.cv = cv; bg.ctx = cv.getContext('2d'); bg.W = W; bg.H = H;
    bg.cell = W < 700 ? 10 : 14;
    const base = document.createElement('canvas');
    base.width = W; base.height = Math.round(H * 1.5);
    const g = base.getContext('2d');
    g.fillStyle = '#050505'; g.fillRect(0, 0, base.width, base.height);
    const C = bg.cell, cols = Math.ceil(W / C), rows = Math.ceil(base.height / C);
    const asp = Math.min(1.6, W / H);
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const u = x / cols, v = y / rows;
        const n = fbm(x * 0.09, y * 0.09);
        const jag = (hash(x, y) - 0.5) * 0.05 + (n - 0.5) * 0.14;
        const d = u * 0.62 * asp / 1.6 + v;                       // диагональ, как на картинке
        const band1 = Math.exp(-Math.pow((d - 0.2 + jag) / 0.05, 2));          // светлая полоса слева сверху
        const band2 = Math.exp(-Math.pow((d - 1.25 + jag) / 0.07, 2));         // и справа снизу
        const cloud = Math.exp(-(Math.pow((u - 0.52) / 0.3, 2) + Math.pow((v - 0.38) / 0.16, 2))) * n;   // туманность в центре
        let b = (band1 + band2) * (0.55 + 0.65 * n) + cloud * 0.45 + n * 0.05;
        if (hash(x * 3.1, y * 1.7) > 0.986) b += 0.35;          // одиночные светлые пиксели
        b = Math.min(1, b);
        const lv = Math.round(b * 7) / 7;                         // ступени серого
        if (lv < 0.05) continue;
        const c = Math.round(10 + lv * 215);
        g.fillStyle = 'rgb(' + c + ',' + c + ',' + c + ')';
        g.fillRect(x * C, y * C, C, C);
        if (lv > 0.4) {                                            // крошка на светлых пикселях
          g.fillStyle = 'rgba(0,0,0,.45)';
          for (let k = 0; k < 3; k++) if (hash(x + k, y * 7 + k) > 0.6) g.fillRect(x * C + Math.floor(hash(x, k) * C), y * C + Math.floor(hash(k, y) * C), 2, 2);
        }
      }
    }
    // крупные контурные квадраты — как на референсе
    g.strokeStyle = 'rgba(255,255,255,.1)'; g.lineWidth = 3;
    for (let k = 0; k < 9; k++) {
      const x = Math.floor(hash(k, 9) * cols) * C, y = Math.floor(hash(9, k) * rows) * C;
      const w = (4 + Math.floor(hash(k, 3) * 14)) * C, h = (3 + Math.floor(hash(3, k) * 10)) * C;
      g.strokeRect(x + 0.5, y + 0.5, w, h);
    }
    // зерно поверх
    const id = g.getImageData(0, 0, base.width, base.height), dt = id.data;
    for (let i = 0; i < dt.length; i += 4) { const r = (Math.random() - 0.5) * 22; dt[i] += r; dt[i + 1] += r; dt[i + 2] += r; }
    g.putImageData(id, 0, 0);
    bg.base = base;
    bg.crosses = [];
    for (let k = 0; k < (W < 700 ? 12 : 26); k++) bg.crosses.push({ x: Math.random() * W, y: Math.random() * base.height, s: 2 + Math.floor(Math.random() * 3), ph: Math.random() * 6, sp: 0.5 + Math.random() * 1.5 });
  }
  function drawBg(ts) {
    requestAnimationFrame(drawBg);
    if (!bg.base || ts - bg.last < 33) return;   // ~30 кадров в секунду хватает
    bg.last = ts;
    const ctx = bg.ctx, W = bg.W, H = bg.H;
    const maxOff = bg.base.height - H;
    const docH = Math.max(1, document.documentElement.scrollHeight - H);
    const off = Math.round(Math.min(1, scrollY / docH) * maxOff);
    ctx.drawImage(bg.base, 0, -off);
    // мерцающие пиксельные крестики
    ctx.fillStyle = '#e8e8e4';
    bg.crosses.forEach((c) => {
      const a = REDUCED ? 1 : Math.sin(ts / 1000 * c.sp + c.ph);
      if (a < -0.2) return;
      const s = c.s, x = Math.round(c.x), y = Math.round(c.y - off);
      if (y < -20 || y > H + 20) return;
      ctx.globalAlpha = Math.round((0.35 + 0.65 * Math.max(0, a)) * 4) / 4;
      ctx.fillRect(x - s, y - s * 3, s * 2, s * 6);
      ctx.fillRect(x - s * 3, y - s, s * 6, s * 2);
    });
    ctx.globalAlpha = 1;
    // пролетающие диагональные вспышки
    if (!REDUCED && Math.random() < 0.012 && bg.streaks.length < 2) bg.streaks.push({ x: W * (0.4 + Math.random() * 0.7), y: -40 + Math.random() * H * 0.5, life: 0 });
    bg.streaks = bg.streaks.filter((s) => s.life < 1);
    bg.streaks.forEach((s) => {
      s.life += 0.05;
      const len = 160, dx = -Math.cos(0.5) * len, dy = Math.sin(0.5) * len;
      const px = s.x + dx * s.life * 3, py = s.y + dy * s.life * 3;
      const gr = ctx.createLinearGradient(px, py, px - dx, py - dy);
      gr.addColorStop(0, 'rgba(255,255,255,' + (0.7 * (1 - s.life)) + ')');
      gr.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.strokeStyle = gr; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px - dx, py - dy); ctx.stroke();
    });
  }

  /* ---------- заставка: YOMPIX собирается из пикселей ---------- */
  const GLYPH = {
    Y: ['10001', '10001', '01010', '00100', '00100', '00100', '00100'],
    O: ['01110', '10001', '10001', '10001', '10001', '10001', '01110'],
    M: ['10001', '11011', '10101', '10101', '10001', '10001', '10001'],
    P: ['11110', '10001', '10001', '11110', '10000', '10000', '10000'],
    I: ['11111', '00100', '00100', '00100', '00100', '00100', '11111'],
    X: ['10001', '10001', '01010', '00100', '01010', '10001', '10001'],
  };
  function loader() {
    const el = $('#loader');
    let seen = false;
    try { seen = !!sessionStorage.getItem('yg_seen'); sessionStorage.setItem('yg_seen', '1'); } catch (e) { /* приватный режим */ }
    if (REDUCED || seen || /[?&]noloader/.test(location.search)) { el.remove(); return; }
    const cv = $('#loadc'), S = 12, word = 'YOMPIX';
    cv.width = (word.length * 6 - 1) * S; cv.height = 9 * S;
    const ctx = cv.getContext('2d');
    const px = [];
    word.split('').forEach((ch, i) => GLYPH[ch].forEach((row, y) => row.split('').forEach((b, x) => { if (b === '1') px.push({ x: (i * 6 + x) * S, y: (y + 1) * S, d: Math.random() }); })));
    let t0 = null;
    function frame(ts) {
      if (t0 === null) t0 = ts;
      const e = (ts - t0) / 1000;
      ctx.clearRect(0, 0, cv.width, cv.height);
      px.forEach((p) => {
        const on = e < 1.4 ? e * 1.4 > p.d : (e - 1.4) * 2.4 < p.d;   // появиться, подержать, рассыпаться
        if (!on) return;
        const shake = e > 0.9 && e < 1.4 && Math.random() < 0.04 ? (Math.random() - 0.5) * S : 0;
        ctx.fillStyle = Math.random() < 0.03 ? '#777' : '#f1f1ee';
        ctx.fillRect(p.x + shake, p.y, S - 2, S - 2);
      });
      if (e < 1.95) requestAnimationFrame(frame);
      else { el.classList.add('gone'); setTimeout(() => el.remove(), 600); }
    }
    requestAnimationFrame(frame);
  }

  /* ---------- общее ---------- */
  function render() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-t]').forEach((el) => { el.textContent = t(el.dataset.t); });
    $('#langs').innerHTML = LANGS.length > 1 ? LANGS.map((x) => '<button class="' + (x[0] === lang ? 'on' : '') + '" data-l="' + x[0] + '">' + x[1] + '</button>').join('') : '';
    $('#langs').hidden = LANGS.length < 2;
    renderHero();
    renderGrid();
    renderSupport();
    renderWall();
    observe();
    if (!$('#sheet').hidden) openSheet(location.hash.slice(1), false);
  }
  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('on');
    clearTimeout(toast.t);
    toast.t = setTimeout(() => el.classList.remove('on'), 1800);
  }

  document.addEventListener('click', (e) => {
    const g = (s) => e.target.closest(s);
    if (g('[data-l]')) { lang = g('[data-l]').dataset.l; localStorage.setItem('yg_lang', lang); render(); return; }
    if (g('[data-slide]')) { const i = +g('[data-slide]').dataset.slide; if (i !== slide) go(i); return; }
    if (g('[data-cat]')) {
      cat = g('[data-cat]').dataset.cat;
      $('#chips').querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.cat === cat));
      document.querySelectorAll('.tile').forEach((el, k) => {
        const show = cat === 'all' || PROJECTS[k].cat === cat;
        el.classList.toggle('hide', !show);
        if (show) { el.classList.remove('in'); void el.offsetWidth; el.style.animationDelay = '0s'; el.classList.add('in'); }
      });
      return;
    }
    if (g('[data-close]')) { closeSheet(); return; }
    if (g('[data-shot]')) {
      const b = g('[data-shot]');
      $('#galmain').innerHTML = '<img src="' + b.dataset.shot + '" alt="">';
      b.parentElement.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b));
      return;
    }
    if (g('[data-copy]')) {
      const v = g('[data-copy]').dataset.copy;
      const fallback = () => { const ta = document.createElement('textarea'); ta.value = v; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); toast(t('copied')); };
      if (navigator.clipboard) navigator.clipboard.writeText(v).then(() => toast(t('copied')), fallback); else fallback();
      return;
    }
    if (g('[data-open]') && !g('a')) openSheet(g('[data-open]').dataset.open);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !$('#sheet').hidden) closeSheet();
    if (e.key === 'Enter' && e.target.classList && e.target.classList.contains('tile')) openSheet(e.target.dataset.open);
  });
  addEventListener('scroll', () => $('#topbar').classList.toggle('solid', scrollY > 40), { passive: true });
  // иконки на первом экране слегка следуют за мышью
  addEventListener('mousemove', (e) => {
    const x = (e.clientX / innerWidth - 0.5) * 2, y = (e.clientY / innerHeight - 0.5) * 2;
    document.querySelectorAll('.icons svg').forEach((s, k) => { s.style.marginLeft = (x * (8 + k * 4)) + 'px'; s.style.marginTop = (y * (6 + k * 3)) + 'px'; });
  }, { passive: true });
  let rz = null;
  addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(buildBg, 250); });

  $('#year').textContent = new Date().getFullYear();
  buildBg();
  requestAnimationFrame(drawBg);
  render();
  loader();
  loadSponsors();
  if (P(location.hash.slice(1))) openSheet(location.hash.slice(1), false);
})();
