'use strict';

const LRU = require('lru-cache');
const debug = require('debug')('egg-lru');

const CACHE = Symbol('Application#cache');

module.exports = {
  get lru() {
    if (!this[CACHE]) {
      debug('[egg-lru] create lru');
      this[CACHE] = LRU(this.config.lru);
    }
    return this[CACHE];
  },
};
