.DEFAULT_GOAL := all

format:
	eslint --ext tsx --fix src

m := Updates
push:
	git add .
	git commit -m "$(m)"
	git push origin master

run start: format
	npm start

deploy:
	npm run deploy

all: format deploy push