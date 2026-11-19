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
  discord: 'yompixgames',   // ник в Discord для связи (ссылки на профиль нет — показываем ник с кнопкой «Скопировать»)
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
  st_playtest: { ru: 'Временный тест', uk: 'Тимчасовий тест', en: 'Limited test' },
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
  wall_total: { ru: '%n человек · %s ★', uk: '%n осіб · %s ★', en: '%n people · %s ★' },
  wall_you: { ru: 'здесь может быть ваше имя', uk: 'тут може бути ваше ім’я', en: 'your name could be here' },
  foot_contact: { ru: 'Связь — Discord:', uk: 'Зв’язок — Discord:', en: 'Contact — Discord:' },
  copied_nick: { ru: 'Ник скопирован', uk: 'Нік скопійовано', en: 'Username copied' },
  foot_fonts: { ru: 'шрифты Press Start 2P, Handjet и Inter (SIL OFL)', uk: 'шрифти Press Start 2P, Handjet та Inter (SIL OFL)', en: 'fonts: Press Start 2P, Handjet and Inter (SIL OFL)' },
};

/* Проекты. key — главная картинка (или art — нарисованная обложка), shots — галерея. */
const PROJECTS = [
  {
    id: 'hts', cat: 'games', featured: true, accent: '#f5c518',
    name: 'Hush Till Six', version: '1.2.11', status: 'st_playtest', age: '18+',
    key: 'img/hts-key.webp', shots: ['img/hts-1.webp', 'img/hts-2.webp', 'img/hts-3.webp'],
    type: { ru: 'Хоррор-игра', uk: 'Хорор-гра', en: 'Horror game' },
    hook: { ru: 'Ночная смена, где нельзя отвечать на своё имя.', uk: 'Нічна зміна, де не можна відгукуватися на своє ім’я.', en: 'A night shift where you must never answer to your name.' },
    about: { ru: 'Вы — новый ночной охранник в пустом бизнес-центре «Горизонт». Прежний сторож оставил три правила: не отзываться на имя, никому не открывать дверь и не ходить на зов. Вы следите за зданием через камеры, записываете всё странное и решаете, кому верить, пока за окнами идёт дождь. Каждое решение ведёт к одной из четырёх концовок.', uk: 'Ви — новий нічний охоронець у порожньому бізнес-центрі «Горизонт». Попередній сторож залишив три правила: не відгукуватися на ім’я, нікому не відчиняти двері й не йти на поклик. Ви стежите за будівлею через камери, записуєте все дивне і вирішуєте, кому вірити, поки за вікнами йде дощ. Кожне рішення веде до однієї з чотирьох кінцівок.', en: 'You are the new night guard in the empty Horizon business center. The previous guard left three rules: don’t answer to your name, don’t open the door to anyone, don’t follow the voice. You watch the building through cameras, log everything strange and decide whom to trust while it rains outside. Every choice leads to one of four endings.' },
    features: { ru: ['Четыре концовки и 14 разных смертей — решения правда что-то меняют', 'Все персонажи озвучены живыми голосами', 'Камеры, рация и пульт охраны: вы сами следите за зданием и замечаете странное', 'Каждую ночь аномалии другие, поэтому проходить заново интересно', 'Русский, украинский, английский и ещё 10 языков'], uk: ['Чотири кінцівки й 14 різних смертей — рішення справді щось змінюють', 'Усі персонажі озвучені живими голосами', 'Камери, рація й пульт охорони: ви самі стежите за будівлею і помічаєте дивне', 'Щоночі аномалії інші, тому проходити знову цікаво', 'Українська, російська, англійська та ще 10 мов'], en: ['Four endings and 14 different deaths — your choices really matter', 'Every character is fully voiced', 'Cameras, radio and a security desk: you watch the building yourself', 'The anomalies change every night, so replays stay fresh', 'English, Ukrainian, Russian and 10 more languages'] },
    platforms: { ru: 'Браузер · Android · Windows', uk: 'Браузер · Android · Windows', en: 'Browser · Android · Windows' },
    how: { ru: 'Игра открывается прямо в браузере, ничего устанавливать не нужно. Сейчас идёт временное тестирование: сыграть может любой желающий. Когда игра выйдет в Steam и Google Play, здесь останется только демо.', uk: 'Гра відкривається просто в браузері, нічого встановлювати не треба. Зараз триває тимчасове тестування: зіграти може будь-хто. Коли гра вийде в Steam і Google Play, тут залишиться тільки демо.', en: 'The game runs right in your browser — nothing to install. It’s in a limited test right now, and anyone can join. Once it’s out on Steam and Google Play, only a demo will stay here.' },
    links: [
      { t: { ru: 'Стать тестировщиком', uk: 'Стати тестувальником', en: 'Become a tester' }, url: 'https://yompix.github.io/' },
      { t: { ru: 'itch.io', uk: 'itch.io', en: 'itch.io' }, url: 'https://yompix-games.itch.io/hush-till-six' },
    ],
  },
  {
    id: 'novograd', cat: 'mc', featured: true, accent: '#ff4fa0',
    name: { ru: 'Новоград: Тёмные улицы', uk: 'Новоград: Темні вулиці', en: 'Novograd: Dark Streets' }, version: '0.6.5', status: 'st_download',
    art: 'novograd',
    type: { ru: 'Мод для Minecraft', uk: 'Мод для Minecraft', en: 'Minecraft mod' },
    hook: { ru: 'Своя криминальная история в Minecraft — с городом, машинами и погонями.', uk: 'Власна кримінальна історія в Minecraft — з містом, машинами й погонями.', en: 'A crime story inside Minecraft — with a city, cars and chases.' },
    about: { ru: 'Новоград превращает Minecraft в игру в духе GTA. Вы попадаете на остров с большим городом и курортом Ривьера, проходите сюжет с озвученными героями и кат-сценами, а между миссиями свободно гуляете, ездите на машинах и уходите от полиции.', uk: 'Новоград перетворює Minecraft на гру в дусі GTA. Ви потрапляєте на острів із великим містом і курортом Рив’єра, проходите сюжет з озвученими героями й кат-сценами, а між місіями вільно гуляєте, їздите машинами й тікаєте від поліції.', en: 'Novograd turns Minecraft into a GTA-style game. You arrive on an island with a big city and the Riviera resort, play through a story with voiced characters and cutscenes, and between missions you roam freely, drive cars and run from the police.' },
    features: { ru: ['Сюжет с озвучкой и кат-сценами, как в настоящей игре', 'Побочные задания между сюжетными миссиями', 'Розыск и погони, если нарушаете закон', 'Машины, на которых можно ездить по всему острову', 'Режим «копы и воры», чтобы играть с друзьями по сети'], uk: ['Сюжет з озвучкою і кат-сценами, як у справжній грі', 'Побічні завдання між сюжетними місіями', 'Розшук і погоні, якщо порушуєте закон', 'Машини, якими можна їздити по всьому острову', 'Режим «копи й злодії», щоб грати з друзями по мережі'], en: ['A voiced story with cutscenes, like a real game', 'Side jobs between story missions', 'Wanted level and police chases when you break the law', 'Cars you can drive all over the island', 'Cops and robbers mode to play with friends online'] },
    platforms: { ru: 'Minecraft Java 1.21.1 · любой лаунчер', uk: 'Minecraft Java 1.21.1 · будь-який лаунчер', en: 'Minecraft Java 1.21.1 · any launcher' },
    how: { ru: 'Скачайте архив и запустите «УСТАНОВИТЬ.bat» — он сам поставит всё нужное. Подойдёт любой лаунчер: официальный, TLauncher и другие (для Prism и Modrinth есть отдельный файл .mrpack). В игре создайте новый мир и выберите тип мира «Новоград: Город».', uk: 'Завантажте архів і запустіть «УСТАНОВИТЬ.bat» — він сам поставить усе потрібне. Підійде будь-який лаунчер: офіційний, TLauncher та інші (для Prism і Modrinth є окремий файл .mrpack). У грі створіть новий світ і виберіть тип світу «Новоград: Місто».', en: 'Download the archive and run “УСТАНОВИТЬ.bat” — it installs everything for you. Any launcher works: the official one, TLauncher and others (there’s a separate .mrpack file for Prism and Modrinth). In the game, create a new world and pick the “Novograd: City” world type.' },
    links: [
      { t: { ru: 'Скачать (любой лаунчер)', uk: 'Завантажити (будь-який лаунчер)', en: 'Download (any launcher)' }, url: 'dl/Novograd-0.6.5.zip', size: '81 MB', dl: true },
      { t: { ru: 'Prism / Modrinth (.mrpack)', uk: 'Prism / Modrinth (.mrpack)', en: 'Prism / Modrinth (.mrpack)' }, url: 'dl/Novograd-0.6.5.mrpack', size: '81 MB', dl: true },
    ],
  },
  {
    id: 'lantern', cat: 'mc', featured: true, frame: true, accent: '#ffa33a',
    name: 'LANTERN', version: '1.8.2', status: 'st_download',
    key: 'img/lantern-1.webp', shots: ['img/lantern-1.webp', 'img/lantern-2.webp', 'img/lantern-3.webp', 'img/lantern-4.webp'],
    type: { ru: 'Приложение для Minecraft', uk: 'Застосунок для Minecraft', en: 'Minecraft app' },
    hook: { ru: 'Играйте в Minecraft с друзьями, даже если вы в разных городах.', uk: 'Грайте в Minecraft з друзями, навіть якщо ви в різних містах.', en: 'Play Minecraft with friends, even from different cities.' },
    about: { ru: 'Обычно, чтобы поиграть с другом в своём мире, нужен сервер или сложная настройка сети. С LANTERN достаточно нажать «Создать игру» и отправить другу короткий код — он появится в вашем мире, как будто вы сидите в одной комнате. Работает и на компьютере, и на телефоне.', uk: 'Зазвичай, щоб пограти з другом у своєму світі, потрібен сервер або складне налаштування мережі. З LANTERN досить натиснути «Створити гру» і надіслати другу короткий код — він з’явиться у вашому світі, наче ви сидите в одній кімнаті. Працює і на комп’ютері, і на телефоні.', en: 'Normally, playing in your own world with a friend needs a server or tricky network setup. With LANTERN you press “Create game” and send your friend a short code — they appear in your world as if you were in the same room. Works on both PC and phone.' },
    features: { ru: ['Работает и с Java, и с Bedrock — компьютеры и телефоны вместе', 'Друг заходит по короткому коду или QR-коду', 'Список друзей и чат прямо в приложении', 'Копии миров, чтобы ничего не потерять'], uk: ['Працює і з Java, і з Bedrock — комп’ютери й телефони разом', 'Друг заходить за коротким кодом або QR-кодом', 'Список друзів і чат просто в застосунку', 'Копії світів, щоб нічого не втратити'], en: ['Works with both Java and Bedrock — PCs and phones together', 'Friends join with a short code or a QR code', 'Friends list and chat right in the app', 'World backups so nothing gets lost'] },
    platforms: { ru: 'Windows · Android', uk: 'Windows · Android', en: 'Windows · Android' },
    how: { ru: 'Установите LANTERN на компьютер или телефон, нажмите «Создать игру» и отправьте другу код. Другу нужно установить LANTERN у себя и ввести этот код.', uk: 'Встановіть LANTERN на комп’ютер або телефон, натисніть «Створити гру» і надішліть другу код. Другу треба встановити LANTERN у себе й ввести цей код.', en: 'Install LANTERN on your PC or phone, press “Create game” and send your friend the code. Your friend installs LANTERN too and enters the code.' },
    links: [
      { t: { ru: 'Windows', uk: 'Windows', en: 'Windows' }, url: 'dl/LANTERN-1.8.2-Windows.zip', size: '38 MB', dl: true },
      { t: { ru: 'Android', uk: 'Android', en: 'Android' }, url: 'dl/LANTERN-1.8.2.apk', size: '62 MB', dl: true },
    ],
  },
  {
    id: 'vpn', cat: 'tg', accent: '#3fd1c0',
    name: 'YURK VPN', version: '0.1.0', status: 'st_live',
    art: 'vpn', shotsByLang: { ru: ['img/vpn-ru-1.webp', 'img/vpn-ru-2.webp', 'img/vpn-ru-3.webp'], en: ['img/vpn-en-1.webp', 'img/vpn-en-2.webp', 'img/vpn-en-3.webp'] },
    type: { ru: 'VPN в Telegram', uk: 'VPN у Telegram', en: 'VPN in Telegram' },
    hook: { ru: 'Быстрый VPN, который покупается прямо в Telegram.', uk: 'Швидкий VPN, який купується просто в Telegram.', en: 'A fast VPN you buy right in Telegram.' },
    about: { ru: 'Бот выдаёт вам ссылку-подписку. Её нужно один раз вставить в бесплатное приложение для VPN (Happ, Hiddify, v2RayTun или другое) — все серверы появятся сами. Мы используем современные способы подключения, которые работают быстро и которые сложно заблокировать.', uk: 'Бот видає вам посилання-підписку. Його треба один раз вставити в безкоштовний застосунок для VPN (Happ, Hiddify, v2RayTun або інший) — усі сервери з’являться самі. Ми використовуємо сучасні способи підключення, які працюють швидко і які складно заблокувати.', en: 'The bot gives you a subscription link. Paste it once into a free VPN app (Happ, Hiddify, v2RayTun or another) and all servers appear on their own. We use modern connection methods that are fast and hard to block.' },
    features: { ru: ['Можно бесплатно попробовать перед покупкой', 'Оплата звёздами прямо в Telegram', 'Протоколы VLESS Reality и Hysteria2 — быстро и устойчиво к блокировкам', 'Работает на телефонах и компьютерах'], uk: ['Можна безкоштовно спробувати перед купівлею', 'Оплата зірками просто в Telegram', 'Протоколи VLESS Reality і Hysteria2 — швидко і стійко до блокувань', 'Працює на телефонах і комп’ютерах'], en: ['Try it for free before you buy', 'Pay with Stars right in Telegram', 'VLESS Reality and Hysteria2 protocols — fast and resistant to blocking', 'Works on phones and computers'] },
    platforms: { ru: 'Telegram · любые устройства', uk: 'Telegram · будь-які пристрої', en: 'Telegram · any device' },
    how: { ru: 'Откройте бота, возьмите пробный период и вставьте полученную ссылку в приложение для VPN.', uk: 'Відкрийте бота, візьміть пробний період і вставте отримане посилання в застосунок для VPN.', en: 'Open the bot, take the free trial and paste the link you get into a VPN app.' },
    links: [{ t: { ru: 'Открыть бота', uk: 'Відкрити бота', en: 'Open the bot' }, url: 'https://t.me/yurkvpn_bot' }],
  },
  {
    id: 'babelframe', cat: 'tools', featured: true, frame: true, accent: '#f0eee6',
    name: 'BABELFRAME', version: '0.6.5', status: 'st_download',
    key: 'img/bf2-ru-3.webp', shotsByLang: { ru: ['img/bf2-ru-3.webp', 'img/bf2-ru-1.webp', 'img/bf2-ru-2.webp'], en: ['img/bf2-en-3.webp', 'img/bf2-en-1.webp', 'img/bf2-en-2.webp'] },
    type: { ru: 'Программа для Windows', uk: 'Програма для Windows', en: 'Windows app' },
    hook: { ru: 'Любая игра работает быстрее и говорит на вашем языке.', uk: 'Будь-яка гра працює швидше й говорить вашою мовою.', en: 'Any game runs faster and speaks your language.' },
    about: { ru: 'Вы добавляете игру, а BABELFRAME сам понимает, на чём она сделана, и подбирает настройки, чтобы она меньше тормозила. Если игры нет на вашем языке, программа переводит её с помощью ИИ, который понимает весь разговор: кто говорит, с кем и о ком. Поэтому героиня говорит «я пришла», а не «я пришёл», а мат остаётся матом. Любые изменения можно отменить одной кнопкой.', uk: 'Ви додаєте гру, а BABELFRAME сам розуміє, на чому вона зроблена, і підбирає налаштування, щоб вона менше гальмувала. Якщо гри немає вашою мовою, програма перекладає її за допомогою ШІ, який розуміє всю розмову: хто говорить, з ким і про кого. Тому героїня каже «я прийшла», а не «я прийшов», а лайка лишається лайкою. Будь-які зміни можна скасувати однією кнопкою.', en: 'You add a game, and BABELFRAME figures out what it’s built on and picks settings so it runs smoother. If the game isn’t in your language, the app translates it with AI that follows the whole conversation — who is speaking, to whom and about whom — so grammar, gender and tone come out right. Every change can be undone with one button.' },
    features: { ru: ['Сама узнаёт движок игры: Unity, Unreal, Godot, Ren’Py, RPG Maker и другие', 'Ускоряет игру настройками Windows и самого движка', 'Переводит с помощью ИИ, который понимает весь диалог и правильный род', 'Может показывать перевод прямо поверх любой игры', 'Все изменения отменяются одной кнопкой'], uk: ['Сама впізнає рушій гри: Unity, Unreal, Godot, Ren’Py, RPG Maker та інші', 'Прискорює гру налаштуваннями Windows і самого рушія', 'Перекладає за допомогою ШІ, який розуміє весь діалог і правильний рід', 'Може показувати переклад просто поверх будь-якої гри', 'Усі зміни скасовуються однією кнопкою'], en: ['Detects the game engine by itself: Unity, Unreal, Godot, Ren’Py, RPG Maker and more', 'Speeds games up through Windows and engine settings', 'Translates with AI that follows the whole conversation and gets gender right', 'Can show the translation right on top of any game', 'Every change is undone with one button'] },
    platforms: { ru: 'Windows 10 / 11', uk: 'Windows 10 / 11', en: 'Windows 10 / 11' },
    how: { ru: 'Распакуйте архив и запустите BabelFrame.exe — устанавливать ничего не нужно. Нажмите «Добавить игру», выберите файл игры, укажите, кто главный герой, и нажмите «Играть». Чтобы перевод работал даже без интернета, один раз нажмите в настройках «Скачать» в разделе «Свой ИИ на компьютере». Не используйте программу в онлайн-играх с античитом: если она его найдёт, то сама отключит всё, что меняет игру.', uk: 'Розпакуйте архів і запустіть BabelFrame.exe — встановлювати нічого не треба. Натисніть «Додати гру», виберіть файл гри, вкажіть, хто головний герой, і натисніть «Грати». Щоб переклад працював навіть без інтернету, один раз натисніть у налаштуваннях «Завантажити» в розділі «Свій ШІ на комп’ютері». Не використовуйте програму в онлайн-іграх з античитом: якщо вона його знайде, то сама вимкне все, що змінює гру.', en: 'Unzip the archive and run BabelFrame.exe — no installation needed. Press “Add game”, pick the game file, say who the main character is and press “Play”. To translate even offline, press “Download” once under “Own AI on this PC” in the settings. Don’t use it in online games with anti-cheat: if it finds one, it turns off everything that changes the game.' },
    links: [{ t: { ru: 'Скачать для Windows', uk: 'Завантажити для Windows', en: 'Download for Windows' }, url: 'dl/BABELFRAME-0.6.5.zip', size: '26 MB', dl: true }],
  },
  {
    id: 'ub', cat: 'tools', accent: '#7be08f',
    name: 'Unity Boost', version: '1.1.0', status: 'st_download',
    art: 'boost',
    type: { ru: 'Утилита для Unity-игр', uk: 'Утиліта для Unity-ігор', en: 'Utility for Unity games' },
    hook: { ru: 'Unity-игры меньше тормозят и говорят на вашем языке.', uk: 'Unity-ігри менше гальмують і говорять вашою мовою.', en: 'Unity games stutter less and speak your language.' },
    about: { ru: 'Unity Boost ставится в одиночную игру на движке Unity. Он упрощает графику, чтобы игра шла плавнее на слабом ноутбуке, и прямо во время игры переводит текст на выбранный язык. Это наш первый, более простой инструмент — всё то же самое и больше умеет BABELFRAME.', uk: 'Unity Boost ставиться в одиночну гру на рушії Unity. Він спрощує графіку, щоб гра йшла плавніше на слабкому ноутбуці, і просто під час гри перекладає текст обраною мовою. Це наш перший, простіший інструмент — усе те саме й більше вміє BABELFRAME.', en: 'Unity Boost installs into a single-player Unity game. It simplifies graphics so the game runs smoother on a weak laptop and translates the text into your language while you play. It’s our first, simpler tool — BABELFRAME does all of this and more.' },
    features: { ru: ['Готовые режимы качества — от красивого до самого быстрого', 'Клавиша F9 меняет режим прямо в игре, F10 показывает FPS', 'Переводит игру на любой из 20 с лишним языков', 'Перевод через Google бесплатно или через DeepL качественнее'], uk: ['Готові режими якості — від гарного до найшвидшого', 'Клавіша F9 змінює режим просто в грі, F10 показує FPS', 'Перекладає гру будь-якою з понад 20 мов', 'Переклад через Google безкоштовно або через DeepL якісніше'], en: ['Ready-made quality modes, from pretty to fastest', 'F9 switches the mode in game, F10 shows FPS', 'Translates the game into any of 20+ languages', 'Google translation for free or DeepL for better quality'] },
    platforms: { ru: 'Windows', uk: 'Windows', en: 'Windows' },
    how: { ru: 'Распакуйте архив и запустите «Установить.bat». Выберите файл игры, язык игры и язык перевода. Поменять язык потом можно через «Сменить язык перевода.bat». Не используйте в онлайн-играх с античитом.', uk: 'Розпакуйте архів і запустіть «Установить.bat». Виберіть файл гри, мову гри й мову перекладу. Змінити мову потім можна через «Сменить язык перевода.bat». Не використовуйте в онлайн-іграх з античитом.', en: 'Unzip the archive and run “Установить.bat”. Pick the game file, the game’s language and the language to translate into. To change the language later, run “Сменить язык перевода.bat”. Don’t use it in online games with anti-cheat.' },
    links: [{ t: { ru: 'Скачать для Windows', uk: 'Завантажити для Windows', en: 'Download for Windows' }, url: 'dl/UnityBoost.zip', size: '65 MB', dl: true }],
  },
];

const CATS = ['all', 'games', 'mc', 'tg', 'tools'];
