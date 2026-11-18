/* Сайт Yompix Games: язык, отрисовка разделов из data.js, поддержка, живая стена спонсоров. */
(() => {
  const LANGS = [['ru', 'RU'], ['uk', 'UA'], ['en', 'EN']];
  const saved = localStorage.getItem('yg_lang');
  const nav = (navigator.language || 'en').slice(0, 2);
  let lang = saved || (nav === 'uk' ? 'uk' : nav === 'ru' || nav === 'be' || nav === 'kk' ? 'ru' : 'en');
  const $ = (s, el = document) => el.querySelector(s);
  const T = (o) => (o && typeof o === 'object' && !Array.isArray(o) ? (o[lang] ?? o.en ?? '') : o ?? '');
  const t = (k) => T(UI[k]);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  let sponsors = null;

  function art(kind) {
    if (kind === 'novograd') {
      const city = Array.from({ length: 12 }, (_, i) => `<i style="height:${30 + ((i * 37) % 65)}%"></i>`).join('');
      return `<div class="art art-novograd"><div class="city">${city}</div><div class="sign">${lang === 'en' ? 'Novograd' : 'Новоград'}<small>${lang === 'en' ? 'dark streets' : lang === 'uk' ? 'темні вулиці' : 'тёмные улицы'}</small></div></div>`;
    }
    if (kind === 'vpn') {
      return `<div class="art art-vpn"><svg viewBox="0 0 100 120" fill="none"><path d="M50 4 92 20v34c0 30-19 51-42 62C27 105 8 84 8 54V20Z" fill="#0f3b38" stroke="#5fb7b0" stroke-width="3"/><path d="M33 60l12 12 24-26" stroke="#e8fffb" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`;
    }
    if (kind === 'boost') {
      return `<div class="art art-boost"><pre><span class="dim">[UnityBoost]</span> preset: <span class="hi">LAPTOP</span>
<span class="dim">[UnityBoost]</span> shadows  high → low
<span class="dim">[UnityBoost]</span> textures full → half
<span class="dim">[UnityBoost]</span> fps cap  <span class="hi">60</span>
<span class="dim">[Translator]</span> "Continue" → "Продолжить"
<span class="dim">[Translator]</span> "New Game" → "Новая игра"
<span class="dim">[UnityBoost]</span> FPS 24 → <span class="hi">57</span> ✓</pre></div>`;
    }
    return '';
  }

  function card(p, i, small) {
    const st = { st_live: 'live', st_download: 'download', st_playtest: 'playtest' }[p.status] || '';
    const badges = `<div class="badges"><span class="badge ${st}">${esc(t(p.status))}</span>${p.age ? `<span class="badge age">${t('age18')}</span>` : ''}</div>`;
    const inner = p.img ? `<img src="${p.img}" alt="${esc(T(p.name))}" loading="lazy">` : art(p.art);
    const media = `<div class="card-media${p.icon ? ' icon' : ''}">${inner}${badges}</div>`;
    const links = [...(p.links || []), ...(DOWNLOADS[p.id] || [])];
    const linkHtml = links.map((l, k) =>
      `<a class="btn ${l.main || (k === 0 && !links.some((x) => x.main)) ? 'btn-amber' : 'btn-ghost'}" href="${l.url}" ${l.url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} ${l.dl ? 'download' : ''}>${esc(T(l.t))}${l.size ? ` <small>${l.size}</small>` : ''}</a>`).join('');
    return `<article class="card ${!small && i % 2 ? 'flip' : ''}" id="p-${p.id}">
      ${media}
      <div class="card-body">
        <p class="tag">${esc(T(p.tag))}</p>
        <h3>${esc(T(p.name))}</h3>
        <p class="hook">${esc(T(p.hook))}</p>
        <div class="qa">
          <div><b>${t('what')}</b><p>${esc(T(p.what))}</p></div>
          <div><b>${t('who')}</b><p>${esc(T(p.who))}</p></div>
          <div><b>${t('how')}</b><p>${esc(T(p.how))}</p></div>
        </div>
        <ul class="facts">${(T(p.facts) || []).map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
        <div class="links">${linkHtml}</div>
      </div>
    </article>`;
  }

  function render() {
    document.documentElement.lang = lang === 'uk' ? 'uk' : lang;
    document.querySelectorAll('[data-t]').forEach((el) => { el.textContent = t(el.dataset.t); });
    $('#nav').innerHTML = SECTIONS.map((s) => `<a href="#${s.id}">${t(s.nav)}</a>`).join('') + `<a class="nav-sup" href="#support">${t('nav_support')}</a>`;
    $('#langs').innerHTML = LANGS.map(([k, n]) => `<button class="${k === lang ? 'on' : ''}" data-l="${k}">${n}</button>`).join('');
    $('#sections').innerHTML = SECTIONS.map((s) => {
      const big = s.items.filter((p) => p.big);
      const small = s.items.filter((p) => !p.big);
      return `<section class="sec" id="${s.id}">
        <div class="sec-head"><span class="sec-no">${s.no}</span><h2>${esc(T(s.title))}</h2><p class="sec-lead">${esc(T(s.lead))}</p></div>
        ${big.map((p, i) => card(p, i, false)).join('')}
        ${small.length === 1 ? card(small[0], big.length, false) : small.length ? `<div class="row">${small.map((p, i) => card(p, i, true)).join('')}</div>` : ''}
      </section>`;
    }).join('');
    renderSupport();
    renderWall();
    reveal();
  }

  function renderSupport() {
    const c = [];
    if (SUPPORT.stars) c.push(`<div class="sup main"><div class="ico">⭐</div><h3>${t('stars_t')}</h3><p>${t('stars_d')}</p>
      <a class="btn btn-amber" href="${SUPPORT.stars}" target="_blank" rel="noopener">${t('stars_b')}</a></div>`);
    const wallets = [['USDT · TRON (TRC20)', SUPPORT.usdt_trc20], ['USDT / TON · TON', SUPPORT.usdt_ton], ['SOL · Solana', SUPPORT.sol]].filter((w) => w[1]);
    if (wallets.length) c.push(`<div class="sup"><div class="ico">◈</div><h3>${t('crypto_t')}</h3><p>${t('crypto_d')}</p>
      <div class="addr">${wallets.map(([n, a]) => `<div><b>${n}</b><code>${esc(a)}</code><button data-copy="${esc(a)}">${t('copy')}</button></div>`).join('')}</div></div>`);
    if (SUPPORT.mono) c.push(`<div class="sup"><div class="ico">🐈‍⬛</div><h3>${t('mono_t')}</h3><p>${t('mono_d')}</p>
      <a class="btn btn-ghost" href="${SUPPORT.mono}" target="_blank" rel="noopener">${t('mono_b')}</a></div>`);
    c.push(`<div class="sup"><div class="ico">✦</div><h3>${t('free_t')}</h3><p>${t('free_d')}</p>
      <a class="btn btn-ghost" href="${SUPPORT.channel}" target="_blank" rel="noopener">${t('free_b')}</a></div>`);
    $('#supgrid').innerHTML = c.join('');
  }

  function renderWall() {
    const ul = $('#wall');
    if (sponsors === null) { ul.innerHTML = ''; $('#walltotal').textContent = ''; return; }
    if (sponsors === false) { ul.innerHTML = `<li class="empty">${t('wall_off')}</li>`; $('#walltotal').textContent = ''; return; }
    $('#walltotal').textContent = sponsors.count ? t('wall_total').replace('%n', sponsors.count).replace('%s', sponsors.total) : '';
    ul.innerHTML = sponsors.list.map((s) => `<li>${esc(s.name)}<span>${s.stars} ⭐</span></li>`).join('') + `<li class="empty">${t('wall_empty')}</li>`;
  }

  function loadSponsors() {
    if (!SUPPORT.sponsorsApi) return;
    const ctl = new AbortController();
    setTimeout(() => ctl.abort(), 8000);
    fetch(SUPPORT.sponsorsApi, { signal: ctl.signal })
      .then((r) => r.json())
      .then((j) => { sponsors = j && j.ok ? j : false; if (j && j.donate) SUPPORT.stars = j.donate; })
      .catch(() => { sponsors = false; })
      .finally(() => { renderSupport(); renderWall(); });
  }

  function strip() {
    const pick = ['img/hush-till-six.webp', 'img/office-dreams.webp', 'img/office-dreams-street.webp'];
    const col = (o) => { const a = []; for (let i = 0; i < 6; i++) a.push(pick[(i + o) % pick.length]); return `<div class="col">${a.concat(a).map((s) => `<img src="${s}" alt="">`).join('')}</div>`; };
    $('#strip').innerHTML = [0, 1, 2, 1].map(col).join('');
  }

  let io;
  function reveal() {
    io && io.disconnect();
    io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
    document.querySelectorAll('.card').forEach((c) => io.observe(c));
  }

  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('on');
    clearTimeout(toast.t);
    toast.t = setTimeout(() => el.classList.remove('on'), 1800);
  }

  document.addEventListener('click', (e) => {
    const l = e.target.closest('[data-l]');
    if (l) { lang = l.dataset.l; localStorage.setItem('yg_lang', lang); render(); return; }
    const cp = e.target.closest('[data-copy]');
    if (cp) {
      const v = cp.dataset.copy;
      (navigator.clipboard ? navigator.clipboard.writeText(v) : Promise.reject()).then(() => toast(t('copied')), () => {
        const ta = document.createElement('textarea'); ta.value = v; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); toast(t('copied'));
      });
    }
  });
  addEventListener('scroll', () => $('.top').classList.toggle('scrolled', scrollY > 20), { passive: true });
  $('#year').textContent = new Date().getFullYear();
  strip();
  render();
  loadSponsors();
})();
