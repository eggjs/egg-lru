/*
 * lrucache
 */

'use strict';

const LRU = require('lru-cache');
const assert = require('assert');

class LRUCache extends LRU {
  constructor(options) {
    super(options);

    this.options = options;
    if (this.options.stat) {
      this.stat();
    }
  }

  stat() {
    assert(!!this.options.stat);
    const empty = {
      hit: 0,
      miss: 0,
    };
    const statSymbol = Symbol.for('stat');
    this[statSymbol] = this[statSymbol] || empty;
    const total = this[statSymbol].hit + this[statSymbol].miss;
    const stat = {
      hit: this[statSymbol].hit,
      miss: this[statSymbol].miss,
      hitRate: Math.floor(this[statSymbol].hit / (total === 0 ? 1 : total) * 100),
      length: this.length,
    };
    this[statSymbol] = empty;
    return stat;
  }

  get(key) {
    const value = super.get(key);
    if (this.options.stat) {
      const statSymbol = Symbol.for('stat');
      if (value === undefined) {
        this[statSymbol].miss++;
      } else {
        this[statSymbol].hit++;
      }
    }
    return value;
  }

  peek(key) {
    const value = super.peek(key);
    if (this.options.stat) {
      const statSymbol = Symbol.for('stat');
      if (value === undefined) {
        this[statSymbol].miss++;
      } else {
        this[statSymbol].hit++;
      }
    }
    return value;
  }

  has(key) {
    const exist = super.has(key);
    if (this.options.stat) {
      const statSymbol = Symbol.for('stat');
      if (!exist) {
        this[statSymbol].miss++;
      } else {
        this[statSymbol].hit++;
      }
    }
    return exist;
  }
}

module.exports = LRUCache;
