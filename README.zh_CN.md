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

> egg 框架的 lru cache 插件

## 依赖说明

### 依赖的 egg 版本

egg-lru 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

## 开启插件

```js
// config/plugin.js
exports.lru = {
  enable: true,
  package: 'egg-lru',
};
```

## 配置插件

### 单实例

```js
// {app_root}/config/config.default.js
exports.lru = {
  client: {
    // name: 'HTML', name for output stat
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

### 多实例
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

## 状态日志
使用 LRU 的开发者都应该关注 LRU 的使用情况，egg-lru 内置了统计功能，每隔 `statInterval` 的时间就会向日志中写入如

```
[egg-lru] pid: ${process.pid}, name: ${config.name || 'unknown'}, hit: ${stat.hit}, miss: ${stat.miss}, hitRate: ${stat.hitRate}, length: ${stat.length}
```

格式的统计信息

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
