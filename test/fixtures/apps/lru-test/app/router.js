'use strict';

const mockKey = 'cache';
const mockValue = 'cache data';

module.exports = app => {
  app.get('/', function* () {
    this.body = 'hi, ' + app.plugins.lru.name;
  });
  app.get('/set', function* () {
    app.lru.set(mockKey, mockValue);
    this.body = `cache set : ${mockKey}=${mockValue}`;
  });
  app.get('/get', function* () {
    const data = app.lru.get(mockKey);
    this.body = data;
  });
};
