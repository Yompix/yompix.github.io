/* Содержимое сайта Yompix Games: тексты на трёх языках, проекты, способы поддержки.
   Чтобы поменять текст или ссылку — правьте только этот файл. */

const REL = 'https://github.com/Yompix/yompix.github.io/releases/download/';

/* Способы поддержки. Пустое значение — карточка не показывается. Только публичные адреса! */
const SUPPORT = {
  stars: 'https://t.me/officedream1_bot?start=games',
  sponsorsApi: 'https://office-dreams-production.up.railway.app/api/games/sponsors',
  sol: '8oqrJrimPonh7F83C6pU3gxQjhV9qo5sVScbrLsWZVw1',
  usdt_trc20: '',   // адрес USDT в сети TRON (TRC20)
  usdt_ton: '',     // адрес USDT/TON в сети TON
  mono: '',         // ссылка на банку Monobank: https://send.monobank.ua/jar/...
  channel: 'https://t.me/yompixgames',
};

const UI = {
  nav_games: { ru: 'Игры', uk: 'Ігри', en: 'Games' },
  nav_mc: { ru: 'Minecraft', uk: 'Minecraft', en: 'Minecraft' },
  nav_tg: { ru: 'Telegram', uk: 'Telegram', en: 'Telegram' },
  nav_tools: { ru: 'Инструменты', uk: 'Інструменти', en: 'Tools' },
  nav_support: { ru: 'Поддержать', uk: 'Підтримати', en: 'Support' },
  hero_eyebrow: { ru: 'Инди-студия одного человека · Украина', uk: 'Інді-студія однієї людини · Україна', en: 'A one-person indie studio · Ukraine' },
  hero_lead: {
    ru: 'Сюжетные хорроры, большие моды для Minecraft, игры и боты в Telegram, полезные утилиты. Всё придумываю, пишу и собираю сам — без издателя и без команды.',
    uk: 'Сюжетні горори, великі моди для Minecraft, ігри та боти в Telegram, корисні утиліти. Усе вигадую, пишу й збираю сам — без видавця і без команди.',
    en: 'Story-driven horror, huge Minecraft mods, games and bots on Telegram, handy utilities. I design, write and build all of it myself — no publisher, no team.' },
  hero_cta_play: { ru: 'Смотреть проекты', uk: 'Дивитися проєкти', en: 'See the projects' },
  hero_cta_support: { ru: 'Поддержать', uk: 'Підтримати', en: 'Support me' },
  what: { ru: 'Что это', uk: 'Що це', en: 'What it is' },
  who: { ru: 'Для кого', uk: 'Для кого', en: 'Who it’s for' },
  how: { ru: 'Как начать', uk: 'Як почати', en: 'How to start' },
  st_live: { ru: 'Работает', uk: 'Працює', en: 'Live' },
  st_playtest: { ru: 'Плейтест', uk: 'Плейтест', en: 'Playtest' },
  st_download: { ru: 'Можно скачать', uk: 'Можна завантажити', en: 'Download' },
  sup_title: { ru: 'Поддержать разработчика', uk: 'Підтримати розробника', en: 'Support the developer' },
  sup_lead: {
    ru: 'Я делаю всё это один и из Украины. Каждая поддержка — это новые главы, озвучка, сервера и время на то, чтобы доделать игры до Steam и Google Play. Спасибо, что вы здесь.',
    uk: 'Я роблю все це сам і з України. Кожна підтримка — це нові розділи, озвучка, сервери й час, щоб доробити ігри до Steam і Google Play. Дякую, що ви тут.',
    en: 'I make all of this alone, from Ukraine. Every bit of support means new chapters, voice acting, servers and the time to bring the games to Steam and Google Play. Thank you for being here.' },
  stars_t: { ru: 'Звёзды Telegram', uk: 'Зірки Telegram', en: 'Telegram Stars' },
  stars_d: {
    ru: 'Самый простой способ: от 50 ⭐ прямо в Telegram. Ваше имя появится в игре — в списке спонсоров на экране концовки — и здесь, на стене ниже.',
    uk: 'Найпростіший спосіб: від 50 ⭐ просто в Telegram. Ваше ім’я з’явиться в грі — у списку спонсорів на екрані кінцівки — і тут, на стіні нижче.',
    en: 'The easiest way: from 50 ⭐ right inside Telegram. Your name goes into the game’s sponsor list on the ending screen — and onto the wall below.' },
  stars_b: { ru: 'Поддержать звёздами', uk: 'Підтримати зірками', en: 'Support with Stars' },
  crypto_t: { ru: 'Криптовалюта', uk: 'Криптовалюта', en: 'Crypto' },
  crypto_d: {
    ru: 'Переводите только в той сети, что указана у адреса, — иначе перевод потеряется.',
    uk: 'Надсилайте лише в тій мережі, що вказана біля адреси, — інакше переказ загубиться.',
    en: 'Only send on the network shown next to the address — otherwise the transfer will be lost.' },
  copy: { ru: 'Скопировать', uk: 'Скопіювати', en: 'Copy' },
  copied: { ru: 'Адрес скопирован', uk: 'Адресу скопійовано', en: 'Address copied' },
  mono_t: { ru: 'Банка Monobank', uk: 'Банка Monobank', en: 'Monobank jar' },
  mono_d: { ru: 'Картой любого банка, в гривнах или в другой валюте.', uk: 'Карткою будь-якого банку, у гривнях чи іншій валюті.', en: 'Any bank card, in hryvnias or another currency.' },
  mono_b: { ru: 'Открыть банку', uk: 'Відкрити банку', en: 'Open the jar' },
  free_t: { ru: 'Бесплатно, но очень важно', uk: 'Безкоштовно, але дуже важливо', en: 'Free, but it matters a lot' },
  free_d: {
    ru: 'Подпишитесь на канал — там новости, обновления и розыгрыши ключей. Расскажите о проекте другу. Оставьте отзыв. Для одного разработчика это значит больше, чем кажется.',
    uk: 'Підпишіться на канал — там новини, оновлення й розіграші ключів. Розкажіть про проєкт другові. Залиште відгук. Для одного розробника це важить більше, ніж здається.',
    en: 'Follow the channel — news, updates and key giveaways live there. Tell a friend. Leave a review. For a solo developer this means more than you’d think.' },
  free_b: { ru: 'Канал @yompixgames', uk: 'Канал @yompixgames', en: '@yompixgames channel' },
  wall_title: { ru: 'Стена спонсоров', uk: 'Стіна спонсорів', en: 'Sponsor wall' },
  wall_total: { ru: 'Уже поддержали: %n · всего %s ⭐', uk: 'Вже підтримали: %n · усього %s ⭐', en: 'Supporters so far: %n · %s ⭐ in total' },
  wall_empty: { ru: 'Здесь будет ваше имя.', uk: 'Тут буде ваше ім’я.', en: 'Your name could be here.' },
  wall_off: { ru: 'Список спонсоров сейчас не загрузился — загляните чуть позже.', uk: 'Список спонсорів зараз не завантажився — зазирніть трохи пізніше.', en: 'The sponsor list didn’t load just now — check back a little later.' },
  foot_text: {
    ru: 'Все игры, моды и приложения на этой странице сделаны одним человеком. Новости — в Telegram.',
    uk: 'Усі ігри, моди й застосунки на цій сторінці зроблені однією людиною. Новини — у Telegram.',
    en: 'Every game, mod and app on this page was made by one person. News lives on Telegram.' },
  foot_contact: { ru: 'Написать мне', uk: 'Написати мені', en: 'Contact me' },
  foot_fonts: { ru: 'Шрифты Oswald и Inter (SIL OFL)', uk: 'Шрифти Oswald та Inter (SIL OFL)', en: 'Fonts: Oswald and Inter (SIL OFL)' },
  age18: { ru: '18+', uk: '18+', en: '18+' },
};

/* Разделы и проекты. img — картинка, art — нарисованная обложка, если скриншота нет. */
const SECTIONS = [
  {
    id: 'games', no: '01', nav: 'nav_games',
    title: { ru: 'Игры', uk: 'Ігри', en: 'Games' },
    lead: { ru: 'Сюжетные игры, в которые хочется вернуться.', uk: 'Сюжетні ігри, до яких хочеться повернутися.', en: 'Story games you’ll want to come back to.' },
    items: [
      {
        id: 'hts', big: true, name: 'Hush Till Six', img: 'img/hush-till-six.webp', status: 'st_playtest', age: true,
        tag: { ru: 'Интерактивный хоррор', uk: 'Інтерактивний горор', en: 'Interactive horror' },
        hook: { ru: 'Не отвечай. Не открывай. Дождись шести.', uk: 'Не відповідай. Не відчиняй. Дочекайся шостої.', en: 'Don’t answer. Don’t open. Wait till six.' },
        what: {
          ru: 'Ночная смена охранника в бизнес-центре «Горизонт». Три правила — и всё, что происходит, когда их нарушаешь. Камеры, лифт, который едет на несуществующий этаж, и голоса за дверью.',
          uk: 'Нічна зміна охоронця в бізнес-центрі «Горизонт». Три правила — і все, що стається, коли їх порушуєш. Камери, ліфт, що їде на неіснуючий поверх, і голоси за дверима.',
          en: 'A night guard’s shift at the Horizon business centre. Three rules — and everything that happens when you break them. Cameras, an elevator to a floor that doesn’t exist, voices behind the door.' },
        who: {
          ru: 'Для тех, кто любит короткие сюжетные хорроры на один вечер: страшно от правил и тишины, а не от громких скримеров.',
          uk: 'Для тих, хто любить короткі сюжетні горори на один вечір: страшно від правил і тиші, а не від гучних скримерів.',
          en: 'For fans of short story-driven horror for one evening — the fear comes from rules and silence, not from loud jump scares.' },
        facts: {
          ru: ['14 смертей', '4 концовки', '13 языков', 'Озвучка', 'ПК, телефон, ТВ-приставка'],
          uk: ['14 смертей', '4 кінцівки', '13 мов', 'Озвучка', 'ПК, телефон, ТВ-приставка'],
          en: ['14 deaths', '4 endings', '13 languages', 'Voice acting', 'PC, phone, Android TV'] },
        how: {
          ru: 'Плейтест прямо в браузере, без установки. Скоро в Google Play и Steam.',
          uk: 'Плейтест просто в браузері, без встановлення. Скоро в Google Play і Steam.',
          en: 'Playtest right in your browser, nothing to install. Coming to Google Play and Steam.' },
        links: [
          { t: { ru: 'Играть в браузере', uk: 'Грати в браузері', en: 'Play in browser' }, url: 'https://yompix.github.io/', main: true },
          { t: { ru: 'Страница на itch.io', uk: 'Сторінка на itch.io', en: 'itch.io page' }, url: 'https://yompix-games.itch.io/hush-till-six' },
        ],
      },
    ],
  },
  {
    id: 'minecraft', no: '02', nav: 'nav_mc',
    title: { ru: 'Minecraft', uk: 'Minecraft', en: 'Minecraft' },
    lead: { ru: 'Моды и приложения, которые превращают Minecraft в другую игру.', uk: 'Моди й застосунки, що перетворюють Minecraft на іншу гру.', en: 'Mods and apps that turn Minecraft into a different game.' },
    items: [
      {
        id: 'novograd', big: true, name: { ru: 'Новоград: Тёмные улицы', uk: 'Новоград: Темні вулиці', en: 'Novograd: Dark Streets' }, art: 'novograd', status: 'st_download',
        tag: { ru: 'Мод · Minecraft Java 1.21.1 · Fabric', uk: 'Мод · Minecraft Java 1.21.1 · Fabric', en: 'Mod · Minecraft Java 1.21.1 · Fabric' },
        hook: { ru: 'Криминальная история в открытом мире — прямо внутри Minecraft.', uk: 'Кримінальна історія у відкритому світі — просто всередині Minecraft.', en: 'An open-world crime story — right inside Minecraft.' },
        what: {
          ru: 'Огромный мод в духе классических игр про город и улицы. Остров 4×4 км с деловым центром, портом, аэродромом и курортом Ривьера. Сюжет с озвучкой и кат-сценами, звонки героев, розыск со звёздами, ограбления, бизнесы, машины, навыки, времена года.',
          uk: 'Величезний мод у дусі класичних ігор про місто й вулиці. Острів 4×4 км із діловим центром, портом, аеродромом і курортом Рив’єра. Сюжет з озвучкою й кат-сценами, дзвінки героїв, розшук із зірками, пограбування, бізнеси, машини, навички, пори року.',
          en: 'A huge mod in the spirit of classic city-and-streets games. A 4×4 km island with a downtown, a port, an airfield and the Riviera resort. A voiced story with cutscenes, calls from characters, a wanted-star system, heists, businesses, cars, skills, seasons.' },
        who: {
          ru: 'Для тех, кому мало «просто строить»: хочется сюжета, миссий и живого города. Можно играть одному или с друзьями — есть режим «Полицейские и воры» на 2–8 игроков.',
          uk: 'Для тих, кому замало «просто будувати»: хочеться сюжету, місій і живого міста. Можна грати самому чи з друзями — є режим «Поліцейські й злодії» на 2–8 гравців.',
          en: 'For players who want more than building: a story, missions and a living city. Play solo or with friends — there’s a 2–8 player Cops & Robbers mode.' },
        facts: {
          ru: ['40+ сюжетных миссий', '122 побочных задания', 'Озвучка', '20 видов машин', 'Сезоны и праздники'],
          uk: ['40+ сюжетних місій', '122 побічних завдання', 'Озвучка', '20 видів машин', 'Сезони та свята'],
          en: ['40+ story missions', '122 side jobs', 'Voice acting', '20 vehicle types', 'Seasons and holidays'] },
        how: {
          ru: 'Скачайте архив и запустите установщик — он поставит Fabric и всё нужное. Потом: Новый мир → Ещё → Тип мира «Новоград: Город».',
          uk: 'Завантажте архів і запустіть установник — він поставить Fabric і все потрібне. Потім: Новий світ → Ще → Тип світу «Новоград: Місто».',
          en: 'Download the archive and run the installer — it sets up Fabric and everything else. Then: New World → More → World Type “Novograd: City”.' },
        links: [],   // заполняется ниже (DOWNLOADS)
      },
      {
        id: 'lantern', name: 'LANTERN', img: 'img/lantern.webp', icon: true, status: 'st_download',
        tag: { ru: 'Приложение · Windows и Android', uk: 'Застосунок · Windows і Android', en: 'App · Windows and Android' },
        hook: { ru: 'Играть в Minecraft с друзьями без своего сервера.', uk: 'Грати в Minecraft із друзями без власного сервера.', en: 'Play Minecraft with friends — no server of your own.' },
        what: {
          ru: 'Создаёте мир — получаете ссылку-приглашение. Друг нажимает её и заходит к вам, даже если вы в разных городах. Работает с Java и Bedrock (телефон, консоль). В одной Wi-Fi сети соединяет напрямую, без задержек.',
          uk: 'Створюєте світ — отримуєте посилання-запрошення. Друг натискає його й заходить до вас, навіть якщо ви в різних містах. Працює з Java і Bedrock (телефон, консоль). В одній мережі Wi-Fi з’єднує напряму, без затримок.',
          en: 'Create a world, get an invite link. Your friend taps it and joins you, even from another city. Works with Java and Bedrock (phone, console). On the same Wi-Fi it connects directly, with no lag.' },
        who: { ru: 'Для друзей, которые хотят играть вместе, но не хотят возиться с серверами, портами и IP-адресами.', uk: 'Для друзів, які хочуть грати разом, але не хочуть морочитися із серверами, портами й IP-адресами.', en: 'For friends who want to play together without fiddling with servers, ports and IP addresses.' },
        facts: { ru: ['Java и Bedrock', 'Ссылка-приглашение', 'Защита мира', 'Версия 1.8'], uk: ['Java і Bedrock', 'Посилання-запрошення', 'Захист світу', 'Версія 1.8'], en: ['Java and Bedrock', 'Invite links', 'World protection', 'Version 1.8'] },
        how: { ru: 'Скачайте версию для своего устройства, нажмите «Создать» и отправьте другу ссылку.', uk: 'Завантажте версію для свого пристрою, натисніть «Створити» й надішліть другові посилання.', en: 'Download the version for your device, tap “Create” and send your friend the link.' },
        links: [],
      },
    ],
  },
  {
    id: 'telegram', no: '03', nav: 'nav_tg',
    title: { ru: 'Telegram', uk: 'Telegram', en: 'Telegram' },
    lead: { ru: 'Игры и сервисы, которые открываются прямо в мессенджере.', uk: 'Ігри та сервіси, що відкриваються просто в месенджері.', en: 'Games and services that open right inside the messenger.' },
    items: [
      {
        id: 'od', big: true, name: 'Office Dreams', img: 'img/office-dreams.webp', status: 'st_live',
        tag: { ru: 'Игра + крипто-проект · Telegram', uk: 'Гра + крипто-проєкт · Telegram', en: 'Game + crypto project · Telegram' },
        hook: { ru: 'Построй игровую студию мечты — и получи за это токены.', uk: 'Збудуй ігрову студію мрії — і отримай за це токени.', en: 'Build your dream game studio — and earn tokens for it.' },
        what: {
          ru: 'Неоновый пиксельный тайкун: нанимаете команду, выпускаете игры, открываете этажи башни, выходите на IPO, сражаетесь в «Битве студий». За настоящий прогресс начисляются очки аирдропа токена OFFX в сети Solana.',
          uk: 'Неоновий піксельний тайкун: наймаєте команду, випускаєте ігри, відкриваєте поверхи вежі, виходите на IPO, змагаєтеся в «Битві студій». За справжній прогрес нараховуються бали аірдропу токена OFFX у мережі Solana.',
          en: 'A neon pixel tycoon: hire a team, ship games, unlock tower floors, go public with an IPO, fight in Studio Battles. Real progress earns airdrop points for the OFFX token on Solana.' },
        who: {
          ru: 'Для тех, кто любит тайкуны и хочет, чтобы время в игре чего-то стоило. Играешь — получаешь очки. Когда фонд проекта соберёт $5000, игрокам раздадут токены: кто больше играл, тому больше.',
          uk: 'Для тих, хто любить тайкуни й хоче, щоб час у грі чогось вартував. Граєш — отримуєш бали. Коли фонд проєкту збере $5000, гравцям роздадуть токени: хто більше грав, тому більше.',
          en: 'For tycoon fans who want their play time to count. Play and earn points. When the project fund reaches $5,000, tokens are distributed to players — the more you played, the more you get.' },
        facts: { ru: ['Русский, украинский, английский', 'Битва студий', 'Защита от ботов', 'Токен OFFX · Solana'], uk: ['Російська, українська, англійська', 'Битва студій', 'Захист від ботів', 'Токен OFFX · Solana'], en: ['English, Ukrainian, Russian', 'Studio Battles', 'Anti-bot protection', 'OFFX token · Solana'] },
        how: { ru: 'Откройте бота в Telegram и нажмите «Играть». Ничего устанавливать не нужно.', uk: 'Відкрийте бота в Telegram і натисніть «Грати». Нічого встановлювати не потрібно.', en: 'Open the bot in Telegram and tap “Play”. Nothing to install.' },
        links: [{ t: { ru: 'Играть в Telegram', uk: 'Грати в Telegram', en: 'Play on Telegram' }, url: 'https://t.me/officedream1_bot/play', main: true }],
      },
      {
        id: 'vpn', name: 'YURK VPN', art: 'vpn', status: 'st_live',
        tag: { ru: 'VPN-бот · Telegram', uk: 'VPN-бот · Telegram', en: 'VPN bot · Telegram' },
        hook: { ru: 'Быстрый VPN, который покупается в два касания.', uk: 'Швидкий VPN, що купується у два дотики.', en: 'A fast VPN you buy in two taps.' },
        what: {
          ru: 'Бот выдаёт ссылку-подписку — её вставляют в бесплатное приложение (Happ, Hiddify, v2RayTun, Streisand, v2rayNG), и все сервера подтягиваются сами. Современные протоколы VLESS Reality и Hysteria2: быстро даже на мобильном интернете.',
          uk: 'Бот видає посилання-підписку — його вставляють у безкоштовний застосунок (Happ, Hiddify, v2RayTun, Streisand, v2rayNG), і всі сервери підтягуються самі. Сучасні протоколи VLESS Reality та Hysteria2: швидко навіть на мобільному інтернеті.',
          en: 'The bot gives you a subscription link — paste it into a free app (Happ, Hiddify, v2RayTun, Streisand, v2rayNG) and all servers load automatically. Modern VLESS Reality and Hysteria2 protocols: fast even on mobile data.' },
        who: { ru: 'Для тех, кому нужен простой VPN без регистраций на сайтах: оплата звёздами прямо в Telegram, есть пробный период.', uk: 'Для тих, кому потрібен простий VPN без реєстрацій на сайтах: оплата зірками просто в Telegram, є пробний період.', en: 'For anyone who wants a simple VPN with no website sign-ups: pay with Stars right in Telegram, with a free trial.' },
        facts: { ru: ['Пробный период', 'Оплата звёздами', 'VLESS Reality + Hysteria2', '+7 дней за друга'], uk: ['Пробний період', 'Оплата зірками', 'VLESS Reality + Hysteria2', '+7 днів за друга'], en: ['Free trial', 'Pay with Stars', 'VLESS Reality + Hysteria2', '+7 days per friend'] },
        how: { ru: 'Откройте бота, заберите пробный период и вставьте ссылку в приложение.', uk: 'Відкрийте бота, заберіть пробний період і вставте посилання в застосунок.', en: 'Open the bot, claim the trial and paste the link into the app.' },
        links: [{ t: { ru: 'Открыть @yurkvpn_bot', uk: 'Відкрити @yurkvpn_bot', en: 'Open @yurkvpn_bot' }, url: 'https://t.me/yurkvpn_bot', main: true }],
      },
    ],
  },
  {
    id: 'tools', no: '04', nav: 'nav_tools',
    title: { ru: 'Инструменты', uk: 'Інструменти', en: 'Tools' },
    lead: { ru: 'То, что я сделал для себя, а потом выложил для всех.', uk: 'Те, що я зробив для себе, а потім виклав для всіх.', en: 'Things I built for myself, then shared with everyone.' },
    items: [
      {
        id: 'ub', name: 'Unity Boost RU', art: 'boost', status: 'st_download',
        tag: { ru: 'Утилита · Windows', uk: 'Утиліта · Windows', en: 'Utility · Windows' },
        hook: { ru: 'Unity-игры меньше лагают на слабом ноутбуке — и говорят по-русски.', uk: 'Unity-ігри менше лагають на слабкому ноутбуці — і говорять російською.', en: 'Unity games lag less on weak laptops — and speak Russian.' },
        what: {
          ru: 'Ставится в одиночную игру на движке Unity. Упрощает тени, текстуры и сглаживание, ограничивает FPS и снижает разрешение — игра идёт плавнее. Английский текст меню и диалогов прямо во время игры переводится на русский и запоминается.',
          uk: 'Ставиться в одиночну гру на рушії Unity. Спрощує тіні, текстури й згладжування, обмежує FPS і знижує роздільність — гра йде плавніше. Англійський текст меню й діалогів просто під час гри перекладається російською та запам’ятовується.',
          en: 'Installs into single-player Unity games. Simplifies shadows, textures and anti-aliasing, caps FPS and lowers resolution so the game runs smoother. English menu and dialogue text is translated to Russian on the fly and remembered.' },
        who: {
          ru: 'Для владельцев слабых ноутбуков и тех, кто хочет поиграть в игру без русского языка. Только для одиночных игр — в онлайн-играх с античитом не используйте.',
          uk: 'Для власників слабких ноутбуків і тих, хто хоче пограти в гру без російської мови. Лише для одиночних ігор — в онлайн-іграх з античитом не використовуйте.',
          en: 'For people with weak laptops and anyone who wants to play a game that has no Russian. Single-player only — never use it in online games with anti-cheat.' },
        facts: { ru: ['Пресеты качества', 'F9 / F10 на лету', 'Автоперевод EN → RU', 'Установщик в один клик'], uk: ['Пресети якості', 'F9 / F10 на льоту', 'Автопереклад EN → RU', 'Установник в один клік'], en: ['Quality presets', 'F9 / F10 on the fly', 'Auto-translate EN → RU', 'One-click installer'] },
        how: { ru: 'Распакуйте архив, запустите «Установить.bat» и выберите .exe игры.', uk: 'Розпакуйте архів, запустіть «Установить.bat» і виберіть .exe гри.', en: 'Unzip, run “Установить.bat” and pick the game’s .exe.' },
        links: [],
      },
    ],
  },
];

/* Файлы для скачивания (GitHub Releases этого репозитория). */
const DOWNLOADS = {
  novograd: [
    { t: { ru: 'Скачать для TLauncher', uk: 'Завантажити для TLauncher', en: 'Download for TLauncher' }, url: 'dl/Novograd-Kino-TLauncher-0.6.4.zip', size: '81 MB', dl: true, main: true },
    { t: { ru: 'Для Modrinth / Prism (.mrpack)', uk: 'Для Modrinth / Prism (.mrpack)', en: 'For Modrinth / Prism (.mrpack)' }, url: 'dl/Novograd-Kino-0.6.4.mrpack', size: '81 MB', dl: true },
  ],
  lantern: [
    { t: { ru: 'Windows', uk: 'Windows', en: 'Windows' }, url: 'dl/LANTERN-1.8.2-Windows.zip', size: '38 MB', dl: true, main: true },
    { t: { ru: 'Android', uk: 'Android', en: 'Android' }, url: 'dl/LANTERN-1.8.2.apk', size: '62 MB', dl: true },
  ],
  ub: [
    { t: { ru: 'Скачать для Windows', uk: 'Завантажити для Windows', en: 'Download for Windows' }, url: 'dl/UnityBoostRU.zip', size: '65 MB', dl: true, main: true },
  ],
};
