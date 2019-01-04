[![Build Status](https://travis-ci.org/nakatuddesuzan/stackoverflow-front-end.svg?branch=develop)](https://travis-ci.org/nakatuddesuzan/stackoverflow-front-end)

[![Test Coverage](https://api.codeclimate.com/v1/badges/acee7db680894e9ef3fa/test_coverage)](https://codeclimate.com/github/nakatuddesuzan/stackoverflow-front-end/test_coverage)

<h1 align="center">Stackoverflow-lite</h1>

## About stackoverflow-lite


This is a platform where people can ask questions and provide answers..


## Prerequisites

Ensure that you have the following tools available on your machine;

- [Git](https://git-scm.com/) A distributed version control system
- [Nodejs](https://nodejs.org/en/) A JavaScript runtime built on Chrome's V8 JavaScript engine.
- One of the package managers [Yarn](https://yarnpkg.com/en/) or [Npm](https://www.npmjs.com/)

## Installing

While in your preferred terminal;

Start by cloning the repository to your local machine

```bash
git clone https://github.com/nakatuddesuzan/stackoverflow-front-end.git

cd stackoverflow-front-end/
```

Install the package dependencies by running

```bash
npm install  # for npm users

yarn  # for yarn users

```

## Serving the application

```bash
  yarn start # For a local development server
  yarn build # For a production build
```

## Running the tests

```bash
yarn test

yarn run test:coverage # test with coverage

```

## Linting files

This project uses [eslint](https://eslint.org/), a static analysis javascript tool frequently used to find problematic patterns or code that doesn’t adhere to certain style guidelines.

You can lint your files by running the command below

```bash
yarn lint
```
