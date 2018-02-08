'use strict';

exports.lru = {
  app: true,
  agent: false,
  default: {
    stat: true, // enable statistic
    statInterval: 300000, // output statistic interval
  },
};
