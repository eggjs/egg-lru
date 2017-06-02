'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/lru.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/lru-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', function* () {
    yield request(app.callback())
      .get('/')
      .expect('hi, lru')
      .expect(200);
  });

  it('should get null before set cache', function* () {
    yield request(app.callback())
      .get('/get')
      .expect('')
      .expect(204);
  });

  it('set cache should work well', function* () {
    yield request(app.callback())
      .get('/set')
      .expect(/cache=cache data/)
      .expect(200);
  });

  it('get cache should work well after set', function* () {
    yield request(app.callback())
      .get('/get')
      .expect(/cache data/)
      .expect(200);
  });
});

describe('maxAge', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/lru-test',
    });
    return app.ready();
  });

  after(() => app.close());
  beforeEach(done => {
    setTimeout(done, 2500);
  });
  afterEach(mm.restore);

  it('should work well', function* () {
    yield request(app.callback())
      .get('/set')
      .expect(/cache=cache data/)
      .expect(200);
  });

  it('should get null after 2 s', function* () {
    yield request(app.callback())
      .get('/get')
      .expect('')
      .expect(204);
  });
});
