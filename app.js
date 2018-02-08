'use strict';

const LRU = require('./lib/lru-cache');

module.exports = app => {
  if (app.config.lru.app) {
    const timers = [];
    app.addSingleton('lru', config => {
      const lru = new LRU(config);
      if (config.stat) {
        timers.push(setInterval(() => {
          const stat = lru.stat();
          app.logger.info(`[egg-lru] pid: ${process.pid}, ` +
          `name: ${config.name || 'unknown'}, hit: ${stat.hit}, miss: ${stat.miss}, hitRate: ${stat.hitRate}, length: ${stat.length}`);
        }, config.statInterval || 300000));
      }
      return lru;
    });
    app.on('close', () => {
      timers.forEach(clearInterval);
    });
  }
};
