'use strict';

/**
 * egg-lru default config
 * @member Config#lru
 * @property {String} SOME_KEY - some description
 */
exports.lru = {
  max: 1000,
  maxAge: 1000 * 60 * 60, // 60 min cache
};
