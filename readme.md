<p align="center">
<h3 align="center">Spruce React Starter</h3></p>
</p>

## Contents

- [Installation](#installation)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)

### Installation
Clone repo: 
```sh
git clone https://github.com/ooade/NextSimpleStarter.git
cd NextSimpleStarter
```

Make it your own:
```sh
rm -rf .git && git init && yarn init
```
> :information_source: This re-initializes the repo and sets up your project.

Install the dependencies:

```sh
yarn install
```
or
```sh
npm install
```

### Development Workflow
Start a live-reload development server:
```sh
yarn dev
```
or
```sh
npm run dev
```

Generate a production build:
```sh
yarn build
```
or
```sh
npm run build
```
### Deployment
[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/ooade/NextSimpleStarter)

<details>
	<summary>heroku</summary>
	Just follow <a href="https://github.com/mars/heroku-nextjs">Mars's Guide</a> and you're good to go :clap:
</details>

### License
MIT
