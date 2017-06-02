'use strict';

module.exports = {
  write: true,
  prefix: '^',
  plugin: 'autod-egg',
  test: [
    'test',
    'benchmark',
  ],
  dep: [
    'lru-cache'
  ],
  devdep: [
    'debug',
    'egg',
    'egg-ci',
    'egg-bin',
    'autod',
    'autod-egg',
    'eslint',
    'eslint-config-egg',
    'supertest',
    'webstorm-disable-index',
  ],
  exclude: [
    './test/fixtures',
    './docs',
    './coverage',
  ],
};
