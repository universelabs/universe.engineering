<div align="center">
  <h3 align="center">copyright-update</h3>
  <p align="center">
    A simple Reactjs component that updates copyright year.
  </p>
  <p align="center">
    <a href="https://github.com/guylepage3/copyright-update/issues/new?labels=&template=bug_report.md" alt="Report a Bug (copyright-update)">
      Report bug
    </a>
    &middot;
    <a href="https://github.com/guylepage3/copyright-update/issues/new?labels=&template=feature_request.md" alt="Request feature (copyright-update)">
      Request feature
    </a>
  </p>
</div>
<br/>


## Table of contents

- [Quick Start](#quick-start)
- [Status](#status)
- [What's included](#whats-included)
- [Usage](#usage)
- [Quick links](#quick-links)
- [Maintainers](#maintainers)
- [License](#license)


## Quick start

A couple quick start options are available:

- Install with [npm](https://www.npmjs.com/): `npm i copyright-update`.
- Install with [yarn](https://yarnpkg.com/): `yarn add copyright-update`.


## Status

[![copyright-update version](https://img.shields.io/badge/dynamic/json.svg?label=copyright-update+version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fguylepage3%2Fcopyright-update%2Fmaster%2Fpackage.json&query=%24.version&colorA=%23212121&colorB=%2300BB00)](https://github.com/guylepage3/copyright-update)
[![dependencies status](https://img.shields.io/david/guylepage3/copyright-update.svg?label=dependencies&colorA=%23212121)](https://david-dm.org/guylepage3/copyright-update)
[![devDependencies status](https://img.shields.io/david/dev/guylepage3/copyright-update.svg?label=devDependencies&colorA=%23212121)](https://david-dm.org/guylepage3/copyright-update?type=dev)
[![npm version](https://img.shields.io/npm/v/copyright-update.svg?colorA=%23212121&colorB=%23007BFF)](https://www.npmjs.com/package/copyright-update)


## What's included

`copyright-update` is a simple Reactjs component. Within the download you'll find the following directories and files:

```text
copyright-update
└── src/
    └── index.js
```


## Usage

Install the package.

```
npm i copyright-update
```

In the example below, we are going to `import` the `copyright-update` component into a Footer.

```
import React, { Component } from 'react';

class CopyrightUpdate extends Component {
  render() {
    return (
      <div 
        className={`copyright-update ${this.props.className}`}
        style={this.props.style}
        >
        &copy; {new Date().getFullYear()}
      </div>
    );
  }
}
export default CopyrightUpdate;
```

Now simply style the component using the provided CSS classname `.copyright-update`.

```
.copyright-update {
  display: inline-block;
  margin-left: .5rem;
}
```


## Quick links

- Go to [`copyright-update` on GitHub](https://github.com/guylepage3/copyright-update)
- Go to [`copyright-update` on NPM](https://www.npmjs.com/package/copyright-update)


## Maintainers

**Guy Lepage**

[![Follow on Twitter](https://img.shields.io/badge/Twitter-@guylepage3-blue.svg?colorA=212121&colorB=007BFF)](https://twitter.com/intent/follow?screen_name=guylepage3)
[![Github](https://img.shields.io/badge/GitHub-guylepage3-blue.svg?colorA=212121&colorB=007BFF)](https://github.com/guylepage3)
[![npm](https://img.shields.io/badge/npm-~guylepage3-red.svg?colorA=212121&colorB=FF0000)](https://www.npmjs.com/~guylepage3)
[![Medium](https://img.shields.io/badge/Medium-@guylepage3-green.svg?colorA=212121&colorB=00BB00)](https://medium.com/@guylepage3)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-in/guylepage/-blue.svg?colorA=212121&colorB=007BFF)](https://www.linkedin.com/in/guylepage/)

- <https://twitter.com/guylepage3>
- <https://github.com/guylepage3>


## License

By contributing your code, you agree to license your contribution under the [
MIT License](LICENSE).
