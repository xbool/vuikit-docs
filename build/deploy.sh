cd ../docs
git init
git add -A
git commit -m 'update docs'
git push -f git@github.com:vuikit/vuikit-docs.git master:gh-pages
