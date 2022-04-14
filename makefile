
m := Updates
push:
	git add .
	git commit -m "$(m)"
	git push origin master

start:
	npm start

deploy:
	npm run deploy