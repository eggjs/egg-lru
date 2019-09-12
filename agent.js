'use strict';

const LRU = require('./lib/lru-cache');

module.exports = agent => {
  if (agent.config.lru.agent) {
    const timers = [];
    agent.addSingleton('lru', config => {
      const lru = new LRU(config);
      if (config.stat) {
        timers.push(setInterval(() => {
          const stat = lru.stat();
          agent.logger.info(`[egg-lru] pid: ${process.pid}, ` +
          `name: ${config.name || 'unknown'}, hit: ${stat.hit}, miss: ${stat.miss}, hitRate: ${stat.hitRate}, length: ${stat.length}`);
        }, config.statInterval || 300000));
      }
      return lru;
    });
    agent.on('close', () => {
      timers.forEach(clearInterval);
    });
  }
};
