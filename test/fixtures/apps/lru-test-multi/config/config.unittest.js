'use strict';

exports.keys = '123456';

exports.lru = {
  clients: {
    lru1: {
      max: 1000,
      maxAge: 1000 * 2, // 2 s cache
    },
  }
};
