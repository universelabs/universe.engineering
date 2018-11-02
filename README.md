<div align="center">

  <h3>Universe website and web app</h3>

  <p>
    Universe is a blockchain agnostic dApp solutions community
    <br/>
    <a href="https://universe.engineering">
      <strong>universe.engineering</strong>
    </a>
  </p>
  <p>
    <a href="https://github.com/universelabs/universe.engineering/issues/new">
      Report bug
    </a>
    &middot;
    <a href="https://github.com/universelabs/">
      Explore
    </a>
    &middot;
    <a href="https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE">
      Slack
    </a>
    <br/>
    <br/>
    <a href="https://twitter.com/intent/follow?screen_name=universelabs">
      <img src="https://img.shields.io/twitter/url/https/twitter.com/universelabs.svg?style=social&label=Follow%20%40universelabs&logo=twitter" alt="follow on Twitter" />
    </a>
    &middot;
    <a href="https://github.com/universelabs/universe.engineering/stargazers">
      <img src="https://img.shields.io/github/stars/universelabs/universe.engineering.svg?style=social&label=Star&maxAge=2592000" alt="Star Repo" />
    </a>
  </p>
</div>
<br/>
<p align="center">
  <a href="https://universe.engineering">
    <img width="800" alt="universe.engineering-v1.2.6" src="https://user-images.githubusercontent.com/1711854/46487371-d58fe300-c7cd-11e8-8dcd-6dcaaa2038d5.png">
  </a>
</p>

<br/>

This project was bootstrapped with [Create React App `v2.0`](https://github.com/facebookincubator/create-react-app).


## Table of contents

- [Status](#status)
- [Quick Start](#quick-start)
- [Repository maintainers](#repository-maintainers)
- [License](#license)


## Status

- New v1.0.0 web app design and implementation.
- Upgraded to `create-react-app` `v2.0.3`.
- Added Apple Touch icons and favicon.
- Installed Source Map Explorer for analyzing potential code bloat.
- Upgraded to `create-react-app` `v2.0.5`.
- Upgraded to `create-react-app` `v2.1.1` to resolve `merge` security vulnerability.

[![universe.engineering version](https://img.shields.io/badge/universe.engineering-v1.4.0-brightgreen.svg?colorA=212121&colorB=00BB00)](https://github.com/universelabs/universe.engineering)
[![Universe Community](https://img.shields.io/badge/Universe_Community-Slack-purple.svg?colorA=212121&colorB=3f46ad)](https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE)

[![CircleCI](https://circleci.com/gh/universelabs/universe.engineering/tree/master.svg?style=svg&circle-token=5e387d047256349a4ce582587ca0a5f3ab5a9d44)](https://circleci.com/gh/universelabs/universe.engineering/tree/master)
[![ajv version](https://img.shields.io/badge/ajv-v6.5.4-blue.svg?colorA=212121&colorB=007BFF)](https://www.npmjs.com/package/ajv)
[![Bootstrap version](https://img.shields.io/badge/Bootstrap-v4.1.3-blue.svg?colorA=212121&colorB=007BFF)](https://www.npmjs.com/package/bootstrap)
[![jQuery version](https://img.shields.io/badge/jQuery-v3.3.1-blue.svg?colorA=212121&colorB=007BFF)](https://www.npmjs.com/package/jquery)
[![Node Sass version](https://img.shields.io/badge/Node_Sass-v4.9.3-blue.svg?colorA=212121&colorB=007BFF)](https://www.npmjs.com/package/node-sass)
[![npm version](https://img.shields.io/badge/npm-v6.4.1-blue.svg?colorA=212121&colorB=007BFF)](https://www.npmjs.com/package/npm)
[![npm Run All version](https://img.shields.io/badge/npm_Run_All-v4.1.3-blue.svg?colorA=212121&colorB=007BFF)](https://www.npmjs.com/package/npm-run-all)
[![Popper version](https://img.shields.io/badge/Popper.js-v1.14.4-blue.svg?colorA=212121&colorB=007BFF)](https://www.npmjs.com/package/popper.js)
[![px-rem-reference version](https://img.shields.io/badge/PX--REM_Reference-v1.2.2-blue.svg?colorA=212121&colorB=007BFF)](https://www.npmjs.com/package/px-rem-reference)
[![React version](https://img.shields.io/badge/React-v16.5.2-blue.svg?colorA=212121&colorB=007BFF)](https://www.npmjs.com/package/react)
[![ReactDom version](https://img.shields.io/badge/ReactDom-v16.5.2-blue.svg?colorA=212121&colorB=007BFF)](https://www.npmjs.com/package/react-dom)
[![React Scripts version](https://img.shields.io/badge/React_Scripts-v2.0.3-blue.svg?colorA=212121&colorB=007BFF)](https://www.npmjs.com/package/react-scripts)
[![source-map-explorer version](https://img.shields.io/badge/Source_Map_Explorer-v1.6.0-blue.svg?colorA=212121&colorB=007BFF)](https://www.npmjs.com/package/source-map-explorer)


```
universe.engineering
├── .circleci
│  └── config.yml
├── .gitignore
├── package-lock.json
├── package.json
├── public
│  └── favicon.ico
│  └── index.html
│  └── manifest.json
├── README.md
└── src
   └── App.js
   └── App.test.js
   └── components
   │  └── Footer.js
   │  └── Header.js
   │  └── Hero.js
   └── components
   └── index.js
   └── registerServiceWorker.js
   └── styles
      └── App.css
      └── index.css
      └── Universe.scss
```


## Quick start

Quickly start by cloning the repository to your local machine

```
$ git clone git@github.com:universelabs/universe.engineering.git
```

Install [`npm`](https://www.npmjs.com/get-npm). `npm` is installed and comes bundled with [Node.js](https://nodejs.org/en/download/package-manager/)

```
$ brew install node
```

Add dependencies

```
$ npm install
```

Start the local client side server and run the app. The app will automatically open your web browser and navigate to http://localhost:3000/ for you

```
$ npm start
```


## Repository maintainers

**Guy Lepage**
- <https://twitter.com/guylepage3>
- <https://github.com/guylepage3>


## License

By contributing your code, you agree to license your contribution under the [
MIT License](LICENSE.md).

<div align="right">
  <a href="https://opensource.guide/how-to-contribute/#why-contribute-to-open-source">
    <img src="https://badges.frapsoft.com/os/v3/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/" alt="Open Source">
  </a>
</div>