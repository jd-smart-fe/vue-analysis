#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git config user.name 'xieyankun1'
git config user.email 'xieyankun1@jd.com'
git add -A
git commit -m 'deploy'

git push -f git@github.com:jd-smart-fe/vue-analysis.git master:gh-pages

cd -