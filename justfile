start:
  bundle exec jekyll serve --livereload --open-url --port 4001

install:
  bundle install

deploy:
  git push
