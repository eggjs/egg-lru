'use strict';

const LRU = require('lru-cache');

module.exports = app => {
  if (app.config.lru.app) {
    app.addSingleton('lru', config => new LRU(config));
  }
};
