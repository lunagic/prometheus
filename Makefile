.PHONY: full clean lint lint-npm fix fix-npm test test-npm build watch

SHELL=/bin/bash -o pipefail
$(shell git config core.hooksPath ops/git-hooks)

full: clean lint test build

## Clean the project of temporary files
clean:
	git clean -Xdff --exclude="!.env.local" --exclude="!.env.*.local"

## Lint the project
lint: lint-npm

lint-npm:
	npm install
	npm run lint

## Fix the project
fix: fix-npm

fix-npm:
	npm install
	npm run fix

## Test the project
test: test-npm

test-npm:
	npm install
	npm run test

## Build the project
build:

## Watch the project
watch:
