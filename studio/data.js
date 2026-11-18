/* Содержимое сайта Yompix Games. Тексты, версии, ссылки — только здесь.
   Версии сверять с проектами в office-dreams (package.json, gradle.properties, export_presets.cfg). */

/* Способы поддержки. Пустое значение — способ не показывается. Только публичные адреса! */
const SUPPORT = {
  stars: 'https://t.me/officedream1_bot?start=games',
  sponsorsApi: 'https://office-dreams-production.up.railway.app/api/games/sponsors',
  sol: '8oqrJrimPonh7F83C6pU3gxQjhV9qo5sVScbrLsWZVw1',
  usdt_trc20: '',   // USDT в сети TRON (TRC20)
  usdt_ton: '',     // USDT / TON в сети TON
  mono: '',         // банка Monobank: https://send.monobank.ua/jar/...
  channel: 'https://t.me/yompixgames',
};

const UI = {
  nav_projects: { ru: 'Проекты', uk: 'Проєкти', en: 'Projects' },
  nav_support: { ru: 'Поддержать', uk: 'Підтримати', en: 'Support' },
  projects_title: { ru: 'Все проекты', uk: 'Усі проєкти', en: 'All projects' },
  cat_all: { ru: 'Все', uk: 'Усі', en: 'All' },
  cat_games: { ru: 'Игры', uk: 'Ігри', en: 'Games' },
  cat_mc: { ru: 'Minecraft', uk: 'Minecraft', en: 'Minecraft' },
  cat_tg: { ru: 'Telegram', uk: 'Telegram', en: 'Telegram' },
  cat_tools: { ru: 'Инструменты', uk: 'Інструменти', en: 'Tools' },
  more: { ru: 'Подробнее', uk: 'Детальніше', en: 'Details' },
  version: { ru: 'Версия', uk: 'Версія', en: 'Version' },
  platforms: { ru: 'Платформы', uk: 'Платформи', en: 'Platforms' },
  features: { ru: 'Что внутри', uk: 'Що всередині', en: 'What’s inside' },
  how: { ru: 'Как начать', uk: 'Як почати', en: 'How to start' },
  st_live: { ru: 'Работает', uk: 'Працює', en: 'Live' },
  st_playtest: { ru: 'Плейтест', uk: 'Плейтест', en: 'Playtest' },
  st_download: { ru: 'Можно скачать', uk: 'Можна завантажити', en: 'Available' },
  close: { ru: 'Закрыть', uk: 'Закрити', en: 'Close' },
  sup_kicker: { ru: 'Инди без издателя', uk: 'Інді без видавця', en: 'Indie, no publisher' },
  sup_title: { ru: 'Помогите выпустить следующую игру', uk: 'Допоможіть випустити наступну гру', en: 'Help ship the next game' },
  sup_lead: {
    ru: 'Все проекты на этой странице делает один человек. Поддержка идёт на озвучку, сервера и время, чтобы довести игры до Steam и Google Play.',
    uk: 'Усі проєкти на цій сторінці робить одна людина. Підтримка йде на озвучку, сервери й час, щоб довести ігри до Steam і Google Play.',
    en: 'Every project on this page is made by one person. Support goes to voice acting, servers and the time to bring the games to Steam and Google Play.' },
  w_stars: { ru: 'Звёзды Telegram', uk: 'Зірки Telegram', en: 'Telegram Stars' },
  w_stars_d: { ru: 'От 50 звёзд. Ваше имя попадёт в титры игры и на стену спонсоров.', uk: 'Від 50 зірок. Ваше ім’я потрапить у титри гри й на стіну спонсорів.', en: 'From 50 Stars. Your name goes into the game credits and onto the sponsor wall.' },
  w_mono: { ru: 'Банка Monobank', uk: 'Банка Monobank', en: 'Monobank jar' },
  w_mono_d: { ru: 'Любой банковской картой.', uk: 'Будь-якою банківською карткою.', en: 'Any bank card.' },
  w_crypto: { ru: 'Криптовалюта', uk: 'Криптовалюта', en: 'Crypto' },
  w_crypto_d: { ru: 'Отправляйте только в указанной сети.', uk: 'Надсилайте лише в зазначеній мережі.', en: 'Only send on the network shown.' },
  w_free: { ru: 'Подписаться на канал', uk: 'Підписатися на канал', en: 'Follow the channel' },
  w_free_d: { ru: 'Новости, обновления и розыгрыши ключей. Это тоже очень помогает.', uk: 'Новини, оновлення й розіграші ключів. Це теж дуже допомагає.', en: 'News, updates and key giveaways. That helps a lot too.' },
  copy: { ru: 'Копировать', uk: 'Копіювати', en: 'Copy' },
  copied: { ru: 'Адрес скопирован', uk: 'Адресу скопійовано', en: 'Address copied' },
  wall_title: { ru: 'Спонсоры', uk: 'Спонсори', en: 'Sponsors' },
  wall_total: { ru: '%n человек · %s ⭐', uk: '%n осіб · %s ⭐', en: '%n people · %s ⭐' },
  wall_you: { ru: 'здесь может быть ваше имя', uk: 'тут може бути ваше ім’я', en: 'your name could be here' },
  foot_contact: { ru: 'Связаться', uk: 'Зв’язатися', en: 'Contact' },
  foot_fonts: { ru: 'шрифты Unbounded и Inter (SIL OFL)', uk: 'шрифти Unbounded та Inter (SIL OFL)', en: 'fonts: Unbounded and Inter (SIL OFL)' },
};

/* Проекты. key — главная картинка (или art — нарисованная обложка), shots — галерея. */
const PROJECTS = [
  {
    id: 'hts', cat: 'games', featured: true, accent: '#f5c518',
    name: 'Hush Till Six', version: '1.2.11', status: 'st_playtest', age: '18+',
    key: 'img/hts-key.webp', shots: ['img/hts-1.webp', 'img/hts-2.webp', 'img/hts-3.webp'],
    type: { ru: 'Интерактивный хоррор', uk: 'Інтерактивний горор', en: 'Interactive horror' },
    hook: { ru: 'Не отвечай. Не открывай. Дождись шести.', uk: 'Не відповідай. Не відчиняй. Дочекайся шостої.', en: 'Don’t answer. Don’t open. Wait till six.' },
    about: {
      ru: 'Первая ночная смена охранника в бизнес-центре «Горизонт». Три правила, камеры наблюдения — и то, что происходит, когда правило нарушено.',
      uk: 'Перша нічна зміна охоронця в бізнес-центрі «Горизонт». Три правила, камери спостереження — і те, що стається, коли правило порушено.',
      en: 'A night guard’s first shift at the Horizon business centre. Three rules, security cameras — and what happens when a rule is broken.' },
    features: { ru: ['14 смертей', '4 концовки', 'Озвучка', '13 языков'], uk: ['14 смертей', '4 кінцівки', 'Озвучка', '13 мов'], en: ['14 deaths', '4 endings', 'Voice acting', '13 languages'] },
    platforms: { ru: 'Браузер · Android · Windows', uk: 'Браузер · Android · Windows', en: 'Browser · Android · Windows' },
    how: { ru: 'Плейтест прямо в браузере. Скоро в Google Play и Steam.', uk: 'Плейтест просто в браузері. Скоро в Google Play і Steam.', en: 'Playtest right in your browser. Coming to Google Play and Steam.' },
    links: [
      { t: { ru: 'Играть в браузере', uk: 'Грати в браузері', en: 'Play in browser' }, url: 'https://yompix.github.io/' },
      { t: { ru: 'itch.io', uk: 'itch.io', en: 'itch.io' }, url: 'https://yompix-games.itch.io/hush-till-six' },
    ],
  },
  {
    id: 'novograd', cat: 'mc', featured: true, accent: '#ff4fa0',
    name: { ru: 'Новоград: Тёмные улицы', uk: 'Новоград: Темні вулиці', en: 'Novograd: Dark Streets' }, version: '0.6.4', status: 'st_download',
    art: 'novograd',
    type: { ru: 'Мод · Minecraft Java 1.21.1 · Fabric', uk: 'Мод · Minecraft Java 1.21.1 · Fabric', en: 'Mod · Minecraft Java 1.21.1 · Fabric' },
    hook: { ru: 'Криминальная история в открытом мире — внутри Minecraft.', uk: 'Кримінальна історія у відкритому світі — всередині Minecraft.', en: 'An open-world crime story — inside Minecraft.' },
    about: {
      ru: 'Остров с городом Новоград и курортом Ривьера. Сюжетные миссии с озвучкой и кат-сценами, звонки героев, розыск, машины, ограбления и свободная игра между миссиями.',
      uk: 'Острів із містом Новоград і курортом Рив’єра. Сюжетні місії з озвучкою й кат-сценами, дзвінки героїв, розшук, машини, пограбування й вільна гра між місіями.',
      en: 'An island with the city of Novograd and the Riviera resort. Voiced story missions with cutscenes, calls from characters, a wanted system, cars, heists and free roam between missions.' },
    features: { ru: ['Сюжет с озвучкой', 'Побочные задания', 'Розыск и погони', 'Машины', 'Копы и воры по сети'], uk: ['Сюжет з озвучкою', 'Побічні завдання', 'Розшук і погоні', 'Машини', 'Копи й злодії по мережі'], en: ['Voiced story', 'Side jobs', 'Wanted level and chases', 'Cars', 'Online cops & robbers'] },
    platforms: { ru: 'Minecraft Java 1.21.1 (Fabric)', uk: 'Minecraft Java 1.21.1 (Fabric)', en: 'Minecraft Java 1.21.1 (Fabric)' },
    how: { ru: 'Скачайте архив и запустите установщик. Затем: Новый мир → Ещё → Тип мира «Новоград: Город».', uk: 'Завантажте архів і запустіть установник. Потім: Новий світ → Ще → Тип світу «Новоград: Місто».', en: 'Download the archive and run the installer. Then: New World → More → World Type “Novograd: City”.' },
    links: [
      { t: { ru: 'Скачать для TLauncher', uk: 'Завантажити для TLauncher', en: 'Download for TLauncher' }, url: 'dl/Novograd-Kino-TLauncher-0.6.4.zip', size: '81 MB', dl: true },
      { t: { ru: 'Modrinth / Prism (.mrpack)', uk: 'Modrinth / Prism (.mrpack)', en: 'Modrinth / Prism (.mrpack)' }, url: 'dl/Novograd-Kino-0.6.4.mrpack', size: '81 MB', dl: true },
    ],
  },
  {
    id: 'lantern', cat: 'mc', featured: true, frame: true, accent: '#ffa33a',
    name: 'LANTERN', version: '1.8.2', status: 'st_download',
    key: 'img/lantern-1.webp', shots: ['img/lantern-1.webp', 'img/lantern-2.webp', 'img/lantern-3.webp', 'img/lantern-4.webp'],
    type: { ru: 'Приложение для Minecraft', uk: 'Застосунок для Minecraft', en: 'Minecraft companion app' },
    hook: { ru: 'Играйте в Minecraft с друзьями без своего сервера.', uk: 'Грайте в Minecraft із друзями без власного сервера.', en: 'Play Minecraft with friends — no server needed.' },
    about: {
      ru: 'Создайте мир — друг зайдёт по коду или QR-коду, даже из другого города. Java и Bedrock, друзья и чат, копии миров. В одной Wi-Fi сети — прямое соединение.',
      uk: 'Створіть світ — друг зайде за кодом або QR-кодом, навіть з іншого міста. Java і Bedrock, друзі й чат, копії світів. В одній мережі Wi-Fi — пряме з’єднання.',
      en: 'Create a world and your friend joins with a code or QR code, even from another city. Java and Bedrock, friends and chat, world backups. Direct connection on the same Wi-Fi.' },
    features: { ru: ['Java и Bedrock', 'Код и QR-код', 'Друзья и чат', 'Копии миров'], uk: ['Java і Bedrock', 'Код і QR-код', 'Друзі й чат', 'Копії світів'], en: ['Java and Bedrock', 'Code and QR', 'Friends and chat', 'World backups'] },
    platforms: { ru: 'Windows · Android', uk: 'Windows · Android', en: 'Windows · Android' },
    how: { ru: 'Установите на своё устройство, нажмите «Создать игру» и отправьте другу код.', uk: 'Встановіть на свій пристрій, натисніть «Створити гру» й надішліть другові код.', en: 'Install it, tap “Create game” and send your friend the code.' },
    links: [
      { t: { ru: 'Windows', uk: 'Windows', en: 'Windows' }, url: 'dl/LANTERN-1.8.2-Windows.zip', size: '38 MB', dl: true },
      { t: { ru: 'Android', uk: 'Android', en: 'Android' }, url: 'dl/LANTERN-1.8.2.apk', size: '62 MB', dl: true },
    ],
  },
  {
    id: 'od', cat: 'tg', featured: true, accent: '#9b6bff',
    name: 'Office Dreams', version: '1.4.0', status: 'st_live',
    key: 'img/od-key.webp', shots: ['img/od-2.webp', 'img/od-ph-office.webp', 'img/od-ph-team.webp', 'img/od-ph-tower.webp', 'img/od-ph-city.webp'],
    type: { ru: 'Игра в Telegram · крипто-проект', uk: 'Гра в Telegram · крипто-проєкт', en: 'Telegram game · crypto project' },
    hook: { ru: 'Неоновый тайкун игровой студии прямо в Telegram.', uk: 'Неоновий тайкун ігрової студії просто в Telegram.', en: 'A neon game-studio tycoon right inside Telegram.' },
    about: {
      ru: 'Нанимайте команду, выпускайте игры, открывайте этажи башни, выходите на IPO и сражайтесь в «Битве студий». За настоящий прогресс начисляются очки аирдропа токена OFFX в сети Solana.',
      uk: 'Наймайте команду, випускайте ігри, відкривайте поверхи вежі, виходьте на IPO й змагайтеся в «Битві студій». За справжній прогрес нараховуються бали аірдропу токена OFFX у мережі Solana.',
      en: 'Hire a team, ship games, unlock tower floors, go public and fight in Studio Battles. Real progress earns airdrop points for the OFFX token on Solana.' },
    features: { ru: ['Команда и проекты', 'Этажи и IPO', 'Битва студий', 'Токен OFFX'], uk: ['Команда й проєкти', 'Поверхи та IPO', 'Битва студій', 'Токен OFFX'], en: ['Team and projects', 'Floors and IPO', 'Studio Battles', 'OFFX token'] },
    platforms: { ru: 'Telegram', uk: 'Telegram', en: 'Telegram' },
    how: { ru: 'Откройте бота и нажмите «Играть» — ничего устанавливать не нужно.', uk: 'Відкрийте бота й натисніть «Грати» — нічого встановлювати не треба.', en: 'Open the bot and tap “Play” — nothing to install.' },
    links: [{ t: { ru: 'Играть в Telegram', uk: 'Грати в Telegram', en: 'Play on Telegram' }, url: 'https://t.me/officedream1_bot/play' }],
  },
  {
    id: 'vpn', cat: 'tg', accent: '#3fd1c0',
    name: 'YURK VPN', version: '0.1.0', status: 'st_live',
    art: 'vpn',
    type: { ru: 'VPN-бот в Telegram', uk: 'VPN-бот у Telegram', en: 'VPN bot on Telegram' },
    hook: { ru: 'VPN, который покупается в два касания.', uk: 'VPN, що купується у два дотики.', en: 'A VPN you buy in two taps.' },
    about: {
      ru: 'Бот выдаёт ссылку-подписку: вставьте её в бесплатное приложение (Happ, Hiddify, v2RayTun и другие) — сервера подтянутся сами. Протоколы VLESS Reality и Hysteria2.',
      uk: 'Бот видає посилання-підписку: вставте його в безкоштовний застосунок (Happ, Hiddify, v2RayTun та інші) — сервери підтягнуться самі. Протоколи VLESS Reality та Hysteria2.',
      en: 'The bot gives you a subscription link: paste it into a free app (Happ, Hiddify, v2RayTun and others) and the servers load automatically. VLESS Reality and Hysteria2 protocols.' },
    features: { ru: ['Пробный период', 'Оплата звёздами', 'VLESS Reality', 'Hysteria2'], uk: ['Пробний період', 'Оплата зірками', 'VLESS Reality', 'Hysteria2'], en: ['Free trial', 'Pay with Stars', 'VLESS Reality', 'Hysteria2'] },
    platforms: { ru: 'Telegram · любые устройства', uk: 'Telegram · будь-які пристрої', en: 'Telegram · any device' },
    how: { ru: 'Откройте бота, заберите пробный период и вставьте ссылку в приложение.', uk: 'Відкрийте бота, заберіть пробний період і вставте посилання в застосунок.', en: 'Open the bot, claim the trial and paste the link into the app.' },
    links: [{ t: { ru: 'Открыть бота', uk: 'Відкрити бота', en: 'Open the bot' }, url: 'https://t.me/yurkvpn_bot' }],
  },
  {
    id: 'ub', cat: 'tools', accent: '#7be08f',
    name: 'Unity Boost RU', version: '1.0.0', status: 'st_download',
    art: 'boost',
    type: { ru: 'Утилита для Windows', uk: 'Утиліта для Windows', en: 'Windows utility' },
    hook: { ru: 'Unity-игры меньше лагают и говорят по-русски.', uk: 'Unity-ігри менше лагають і говорять російською.', en: 'Unity games lag less — and speak Russian.' },
    about: {
      ru: 'Ставится в одиночную игру на Unity. Упрощает графику, чтобы игра шла плавнее на слабом ноутбуке, и прямо во время игры переводит английский текст на русский.',
      uk: 'Ставиться в одиночну гру на Unity. Спрощує графіку, щоб гра йшла плавніше на слабкому ноутбуці, і просто під час гри перекладає англійський текст російською.',
      en: 'Installs into a single-player Unity game. Simplifies graphics so it runs smoother on a weak laptop, and translates English text to Russian on the fly.' },
    features: { ru: ['Пресеты качества', 'Переключение F9 / F10', 'Автоперевод EN → RU', 'Только одиночные игры'], uk: ['Пресети якості', 'Перемикання F9 / F10', 'Автопереклад EN → RU', 'Лише одиночні ігри'], en: ['Quality presets', 'F9 / F10 toggles', 'Auto-translate EN → RU', 'Single-player only'] },
    platforms: { ru: 'Windows', uk: 'Windows', en: 'Windows' },
    how: { ru: 'Распакуйте архив, запустите «Установить.bat» и выберите .exe игры. Не используйте в онлайн-играх с античитом.', uk: 'Розпакуйте архів, запустіть «Установить.bat» і виберіть .exe гри. Не використовуйте в онлайн-іграх з античитом.', en: 'Unzip, run “Установить.bat” and pick the game’s .exe. Never use it in online games with anti-cheat.' },
    links: [{ t: { ru: 'Скачать для Windows', uk: 'Завантажити для Windows', en: 'Download for Windows' }, url: 'dl/UnityBoostRU.zip', size: '65 MB', dl: true }],
  },
];

const CATS = ['all', 'games', 'mc', 'tg', 'tools'];
