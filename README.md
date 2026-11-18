# Hush Till Six (Молчи до шести)

Бесплатная интерактивная хоррор-игра в браузере: https://yompix.github.io

Файлы копируются из `public/games/nightshift` репозитория office-dreams скриптом `tools/games-pages.sh` — правки делать там.

## Сайт студии: /studio/

https://yompix.github.io/studio/ — страница всех проектов Yompix Games (игры, Minecraft, Telegram, инструменты) и способы поддержки.
Тексты, ссылки и адреса — `studio/data.js`; файлы для скачивания — `studio/dl/` (каждый меньше 100 МБ).

**Важно:** `games/hush-till-six/tools/games-pages.sh` в office-dreams перед копированием игры удаляет всё, кроме `.git` и `README.md`.
Чтобы не стереть сайт, в строке с `find "$DST" -mindepth 1 -maxdepth 1 ...` должно быть `! -name studio`
(до правки скрипта: перед запуском сохранить папку `studio` и вернуть после).
