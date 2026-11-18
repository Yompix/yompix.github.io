/* Сайт Yompix Games: витрина, библиотека проектов, страница проекта, поддержка и живые спонсоры. */
(() => {
  /* Язык по стране (часовой пояс устройства, без запросов в интернет):
     Украина — русский и украинский на выбор; Россия и русскоязычные страны — только русский; остальные — только английский.
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
    if (UA_TZ.includes(tz)) return 'ua';
    if (RU_TZ.includes(tz)) return 'ru';
    if (tz) return 'en';
    const l = (navigator.language || 'en').slice(0, 2);   // часового пояса нет — по языку браузера
    return l === 'uk' ? 'ua' : ['ru', 'be', 'kk', 'ky', 'tg', 'uz', 'hy', 'az'].includes(l) ? 'ru' : 'en';
  }
  const REGION = region();
  const LANGS = REGION === 'ua' ? [['uk', 'UA'], ['ru', 'RU']] : REGION === 'ru' ? [['ru', 'RU']] : [['en', 'EN']];
  const saved = localStorage.getItem('yg_lang');
  const navUk = (navigator.languages || [navigator.language || '']).some((x) => String(x).startsWith('uk'));
  let lang = LANGS.some(([k]) => k === saved) ? saved : REGION === 'ua' ? (navUk ? 'uk' : 'ru') : LANGS[0][0];
  let cat = 'all';
  let slide = 0;
  let timer = null;
  let sponsors = null;
  const $ = (s, el = document) => el.querySelector(s);
  const T = (o) => (o && typeof o === 'object' && !Array.isArray(o) ? (o[lang] ?? o.en ?? '') : o ?? '');
  const t = (k) => T(UI[k]);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const P = (id) => PROJECTS.find((p) => p.id === id);
  const DL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14"/></svg>';
  const GO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7m0 0H8m9 0v9"/></svg>';

  function art(kind) {
    if (kind === 'novograd') {
      const h = [38, 62, 48, 80, 55, 92, 66, 44, 74, 58, 86, 50, 70, 40];
      return `<div class="art art-novograd"><div class="sky"></div><div class="city">${h.map((x) => `<i style="height:${x}%"></i>`).join('')}</div>
        <div class="siren"></div><div class="water"></div><div class="rain"></div>
        <div class="neon">${lang === 'en' ? 'Novograd' : 'Новоград'}<small>${lang === 'en' ? 'dark streets' : lang === 'uk' ? 'темні вулиці' : 'тёмные улицы'}</small></div></div>`;
    }
    if (kind === 'vpn') {
      return `<div class="art art-vpn"><div class="globe"></div><svg viewBox="0 0 100 120" fill="none"><path d="M50 4 92 20v34c0 30-19 51-42 62C27 105 8 84 8 54V20Z" fill="#0d3a35" stroke="#3fd1c0" stroke-width="3"/><path d="M33 60l12 12 24-26" stroke="#eafffb" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`;
    }
    if (kind === 'boost') {
      return `<div class="art art-boost"><div class="fps"><span>FPS</span><b>57</b><s>24</s></div><div class="tr">"New Game" → <em>"Новая игра"</em></div></div>`;
    }
    return '';
  }
  const media = (p, cls = 'bgimg') => (p.key ? `<img class="${cls}" src="${p.key}" alt="${esc(T(p.name))}">` : art(p.art));
  const status = (p) => `<span class="pill ${p.status}"><i class="dot"></i>${esc(t(p.status))}</span>`;
  const btns = (p, glass) => (p.links || []).map((l, i) =>
    `<a class="btn ${i === 0 && !glass ? 'btn-acc' : 'btn-glass'}" href="${l.url}" ${l.url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} ${l.dl ? 'download' : ''}>${l.dl ? DL : GO}${esc(T(l.t))}${l.size ? ` <small>${l.size}</small>` : ''}</a>`).join('');

  /* ---------- витрина ---------- */
  function renderHero() {
    const feat = PROJECTS.filter((p) => p.featured);
    $('#hero').innerHTML = feat.map((p, i) => `
      <div class="slide${i === slide ? ' on' : ''}" style="--acc:${p.accent}">
        ${p.frame ? `<div class="framebg" style="background-image:url(${p.key})"></div><img class="framed" src="${p.key}" alt="">` : media(p)}
        <div class="slide-in">
          <div class="pill-row"><span class="pill acc">${esc(T(p.type))}</span>${status(p)}${p.age ? `<span class="pill age">${p.age}</span>` : ''}</div>
          <h1>${esc(T(p.name))}</h1>
          <p class="hook">${esc(T(p.hook))}</p>
          <div class="cta">${btns({ links: (p.links || []).slice(0, 1) })}<button class="btn btn-glass" data-open="${p.id}">${t('more')}</button></div>
        </div>
      </div>`).join('') +
      `<div class="thumbs">${feat.map((p, i) => `<button class="thumb${i === slide ? ' on' : ''}" data-slide="${i}" style="--acc:${p.accent}">
        <div class="tmini">${p.key ? `<img src="${p.key}" alt="">` : `<div class="art art-${p.art}"></div>`}</div>
        <div><b>${esc(T(p.name))}</b><span>${esc(T(p.type)).split(' · ')[0]}</span></div><i class="bar"></i></button>`).join('')}</div>`;
    clearTimeout(timer);
    timer = setTimeout(() => go(slide + 1), 7000);
  }
  function go(i) {
    const n = PROJECTS.filter((p) => p.featured).length;
    slide = (i + n) % n;
    document.querySelectorAll('.slide').forEach((s, k) => s.classList.toggle('on', k === slide));
    document.querySelectorAll('.thumb').forEach((s, k) => { s.classList.remove('on'); void s.offsetWidth; s.classList.toggle('on', k === slide); });
    clearTimeout(timer);
    timer = setTimeout(() => go(slide + 1), 7000);
  }

  /* ---------- библиотека ---------- */
  function renderGrid() {
    $('#chips').innerHTML = CATS.map((c) => `<button class="${c === cat ? 'on' : ''}" data-cat="${c}">${t('cat_' + c)}</button>`).join('');
    $('#grid').innerHTML = PROJECTS.map((p) => `
      <article class="tile${cat !== 'all' && p.cat !== cat ? ' hide' : ''}" data-open="${p.id}" style="--acc:${p.accent}" tabindex="0">
        <div class="tile-media">${media(p, '')}<div class="pill-row">${status(p)}</div></div>
        <div class="tile-body">
          <div class="tile-type">${esc(T(p.type))}</div>
          <h3>${esc(T(p.name))}</h3>
          <p>${esc(T(p.hook))}</p>
          <div class="tile-foot"><span>${t('version')} <span class="ver">${p.version}</span></span><span class="go">${t('more')} →</span></div>
        </div>
      </article>`).join('');
  }

  /* ---------- страница проекта ---------- */
  function openSheet(id, push = true) {
    const p = P(id);
    if (!p) return;
    const shots = p.shots && p.shots.length ? p.shots : null;
    const card = $('#sheetcard');
    card.style.setProperty('--acc', p.accent);
    card.innerHTML = `
      <button class="sheet-x" data-close aria-label="${t('close')}">×</button>
      <div class="sh-top">
        <div class="gal">
          <div class="gal-main" id="galmain">${shots ? `<img src="${shots[0]}" alt="">` : media(p)}</div>
          ${shots && shots.length > 1 ? `<div class="gal-row">${shots.map((s, i) => `<button class="${i ? '' : 'on'}" data-shot="${s}"><img src="${s}" alt=""></button>`).join('')}</div>` : ''}
        </div>
        <div class="sh-info">
          <div class="type">${esc(T(p.type))}</div>
          <h2>${esc(T(p.name))}</h2>
          <p class="hook">${esc(T(p.hook))}</p>
          <p class="about">${esc(T(p.about))}</p>
          <div class="meta">
            <div><small>${t('version')}</small><b>${p.version}</b></div>
            <div><small>${t('platforms')}</small><b>${esc(T(p.platforms))}</b></div>
          </div>
          <div class="cta">${btns(p)}</div>
        </div>
      </div>
      <div class="sh-bottom">
        <div><h4>${t('features')}</h4><ul class="feat">${(T(p.features) || []).map((f) => `<li>${esc(f)}</li>`).join('')}</ul></div>
        <div><h4>${t('how')}</h4><p>${esc(T(p.how))}</p></div>
      </div>`;
    $('#sheet').hidden = false;
    document.body.classList.add('lock');
    card.scrollTop = 0;
    if (push) history.replaceState(null, '', '#' + id);
  }
  function closeSheet() {
    $('#sheet').hidden = true;
    document.body.classList.remove('lock');
    if (P(location.hash.slice(1))) history.replaceState(null, '', location.pathname);
  }

  /* ---------- поддержка ---------- */
  function renderSupport() {
    const w = [];
    if (SUPPORT.stars) w.push(`<a class="way main" href="${SUPPORT.stars}" target="_blank" rel="noopener"><div class="ic">⭐</div><div><b>${t('w_stars')}</b><span>${t('w_stars_d')}</span></div><div class="arr">→</div></a>`);
    if (SUPPORT.mono) w.push(`<a class="way" href="${SUPPORT.mono}" target="_blank" rel="noopener"><div class="ic">💳</div><div><b>${t('w_mono')}</b><span>${t('w_mono_d')}</span></div><div class="arr">→</div></a>`);
    const wallets = [['USDT · TRC20', SUPPORT.usdt_trc20], ['TON', SUPPORT.usdt_ton], ['SOL', SUPPORT.sol]].filter((x) => x[1]);
    if (wallets.length) w.push(`<div class="way crypto"><div class="ic">◈</div><div><b>${t('w_crypto')}</b><span>${t('w_crypto_d')}</span></div>
      <div class="addr">${wallets.map(([n, a]) => `<div><em>${n}</em><code title="${esc(a)}">${esc(a)}</code><button data-copy="${esc(a)}">${t('copy')}</button></div>`).join('')}</div></div>`);
    w.push(`<a class="way" href="${SUPPORT.channel}" target="_blank" rel="noopener"><div class="ic">✈</div><div><b>${t('w_free')}</b><span>${t('w_free_d')}</span></div><div class="arr">→</div></a>`);
    $('#ways').innerHTML = w.join('');
  }
  function renderWall() {
    const list = sponsors && sponsors.list ? sponsors.list : [];
    $('#walltotal').textContent = sponsors && sponsors.count ? t('wall_total').replace('%n', sponsors.count).replace('%s', sponsors.total) : '';
    const items = list.map((s) => `<span class="n">${esc(s.name)}<i>${s.stars} ⭐</i></span>`).join('') + `<span class="n you">${t('wall_you')}</span>`;
    let once = items;
    while (once.length < 1200 && list.length) once += items;   // лента должна быть длиннее экрана
    $('#wall').innerHTML = `<div class="run">${once}${once}</div>`;
  }
  function loadSponsors() {
    const ctl = new AbortController();
    setTimeout(() => ctl.abort(), 8000);
    fetch(SUPPORT.sponsorsApi, { signal: ctl.signal }).then((r) => r.json())
      .then((j) => { if (j && j.ok) { sponsors = j; if (j.donate) SUPPORT.stars = j.donate; } })
      .catch(() => {}).finally(() => { renderSupport(); renderWall(); });
  }

  function render() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-t]').forEach((el) => { el.textContent = t(el.dataset.t); });
    $('#langs').innerHTML = LANGS.length > 1 ? LANGS.map(([k, n]) => `<button class="${k === lang ? 'on' : ''}" data-l="${k}">${n}</button>`).join('') : '';
    $('#langs').hidden = LANGS.length < 2;
    renderHero();
    renderGrid();
    renderSupport();
    renderWall();
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
    if (g('[data-slide]')) { go(+g('[data-slide]').dataset.slide); return; }
    if (g('[data-cat]')) { cat = g('[data-cat]').dataset.cat; renderGrid(); return; }
    if (g('[data-close]')) { closeSheet(); return; }
    if (g('[data-shot]')) {
      const b = g('[data-shot]');
      $('#galmain').innerHTML = `<img src="${b.dataset.shot}" alt="">`;
      b.parentElement.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b));
      return;
    }
    if (g('[data-copy]')) {
      const v = g('[data-copy]').dataset.copy;
      (navigator.clipboard ? navigator.clipboard.writeText(v) : Promise.reject()).then(() => toast(t('copied')), () => {
        const ta = document.createElement('textarea'); ta.value = v; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); toast(t('copied'));
      });
      return;
    }
    if (g('[data-open]') && !g('a')) { openSheet(g('[data-open]').dataset.open); }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !$('#sheet').hidden) closeSheet();
    if (e.key === 'Enter' && e.target.matches('.tile')) openSheet(e.target.dataset.open);
  });
  addEventListener('scroll', () => $('#topbar').classList.toggle('solid', scrollY > 40), { passive: true });
  $('#year').textContent = new Date().getFullYear();
  render();
  loadSponsors();
  if (P(location.hash.slice(1))) openSheet(location.hash.slice(1), false);
})();
