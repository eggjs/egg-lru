# egg-lru

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-lru.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-lru
[travis-image]: https://img.shields.io/travis/zcong1993/egg-lru.svg?style=flat-square
[travis-url]: https://travis-ci.org/zcong1993/egg-lru
[codecov-image]: https://img.shields.io/codecov/c/github/zcong1993/egg-lru.svg?style=flat-square
[codecov-url]: https://codecov.io/github/zcong1993/egg-lru?branch=master
[david-image]: https://img.shields.io/david/zcong1993/egg-lru.svg?style=flat-square
[david-url]: https://david-dm.org/zcong1993/egg-lru
[snyk-image]: https://snyk.io/test/npm/egg-lru/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-lru
[download-image]: https://img.shields.io/npm/dm/egg-lru.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-lru

> egg lru-cache plugin

## Install

```bash
$ npm i egg-lru --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.lru = {
  enable: true,
  package: 'egg-lru',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.lru = {
  // all lru cache config available here
  max: 1000,
  maxAge: 1000 * 60 * 60, // 60 min cache
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
