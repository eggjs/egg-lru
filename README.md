# egg-lru

[![NPM version][npm-image]][npm-url]
[![appveyor build status][appveyor-image]][appveyor-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-lru.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-lru
[appveyor-image]: https://ci.appveyor.com/api/projects/status/1yiixar5v0mhh92d?svg=true
[appveyor-url]: https://ci.appveyor.com/project/eggjs/egg-lru
[travis-image]: https://api.travis-ci.org/eggjs/egg-lru.svg?branch=master
[travis-url]: https://travis-ci.org/eggjs/egg-lru
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-lru.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-lru?branch=master
[snyk-image]: https://snyk.io/test/npm/egg-lru/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-lru
[download-image]: https://img.shields.io/npm/dm/egg-lru.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-lru

> egg lru-cache plugin

## Install

```bash
$ npm i egg-lru --save
```

## Configuration

```js
// {app_root}/config/plugin.js
exports.lru = {
  client: {
    enable: true,
    package: 'egg-lru',
  },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

### Simple lru instance

```js
// {app_root}/config/config.default.js
exports.lru = {
  client: {
    // all lru cache config available here
    max: 1000,
    maxAge: 1000 * 60 * 60, // 60 min cache
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};
```

Usage:
```js
// you can access to simple lru instance by using app.lru
app.lru.set('test', 'aaa') ;
app.lru.get('test');
```

### Multiple lru instance
```js
// {app_root}/config/config.default.js
exports.lru = {
  clients: {
    long: {
      max: 1000,
      maxAge: 1000 * 60 * 60, // 60 min cache
    },
    moment: {
      max: 1000,
      maxAge: 1000, // 1 second cache
    },
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};
```
Usage:
```js
const long = app.lru.get('long');
long.set('test', 'aaa') ;
long.get('test');

const moment = app.lru.get('moment');
moment.set('test', 'aaa') ;
moment.get('test');
```

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
