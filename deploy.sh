#!/usr/bin/env sh

set -e

npm run build

# переход в каталог сборки
cd public

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:andrey-fanin/vuelance.git master:gh-pages

cd -