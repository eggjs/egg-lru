'use strict';

const LRU = require('lru-cache');

module.exports = agent => {
  if (agent.config.lru.agent) {
    agent.addSingleton('lru', config => new LRU(config));
  }
};
