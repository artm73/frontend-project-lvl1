install:
	npm ci

brain-games:
	node bin/brain-games.js
brain-even:
	node src/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
