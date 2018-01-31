'use strict';

const mockKey = 'cache';
const mockValue = 'cache data';

module.exports = app => {
  app.get('/', async ctx => {
    ctx.body = 'hi, ' + app.plugins.lru.name;
  });

  app.get('/set', async ctx => {
    app.lru.get('lru1').set(mockKey, mockValue);
    ctx.body = `cache set : ${mockKey}=${mockValue}`;
  });

  app.get('/get', async ctx => {
    ctx.body = app.lru.get('lru1').get(mockKey);
  });
};
