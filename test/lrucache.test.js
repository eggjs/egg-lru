'use strict';

const LRU = require('../lib/lru-cache');
const assert = require('assert');
const lru = new LRU({
  stat: true,
});

describe('test/lrucache.test.js', () => {
  it('should record hit', function() {
    lru.set('hit', true);
    lru.get('hit');
    lru.peek('hit');
    lru.peek('miss');
    lru.del('hit');
    assert.equal(lru.stat().hit, 2);
  });
  it('should record miss', function() {
    lru.get('miss');
    assert.equal(lru.stat().miss, 1);
  });
  it('should calculate hit rate', function() {
    lru.set('hit', true);
    lru.get('hit');
    lru.get('miss');
    assert.equal(lru.stat().hitRate, 50);
  });
});
