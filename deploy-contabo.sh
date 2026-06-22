#!/bin/sh
# Ручной деплой промо-сайта TypeRIGHTing на Contabo → https://typefree.pro
# (рядом с psy-games.pro, тот же сервер 5.189.130.76, user psygames).
# Доступы: ~/.sdt_secrets/psygames_contabo.json. Обычно деплоит CI по push в main,
# этот скрипт — для ручной заливки без коммита.
set -e
cd "$(dirname "$0")"

echo "▸ build (base='/', site=typefree.pro)…"
npm run build

echo "▸ rsync dist → Contabo typefree.pro…"
SSHPASS=$(python3 -c "import json;print(json.load(open('$HOME/.sdt_secrets/psygames_contabo.json'))['pass'])")
export SSHPASS
rsync -az --delete -e "sshpass -e ssh -o StrictHostKeyChecking=no" \
  dist/ psygames@5.189.130.76:web/typefree.pro/public_html/

echo "✅ https://typefree.pro обновлён"
