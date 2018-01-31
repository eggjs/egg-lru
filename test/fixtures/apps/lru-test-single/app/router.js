'use strict';

const mockKey = 'cache';
const mockValue = 'cache data';

module.exports = app => {
  app.get('/', async (ctx, next) => {
    ctx.body = 'hi, ' + app.plugins.lru.name;
  });

  app.get('/set', async (ctx, next) => {
    app.lru.set(mockKey, mockValue);
    ctx.body = `cache set : ${mockKey}=${mockValue}`;
  });
 
  app.get('/get', async (ctx, next) => {
    ctx.body = app.lru.get(mockKey);
  });
};
