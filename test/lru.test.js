'use strict';

const mm = require('egg-mock');

t('lru-test-single');
t('lru-test-multi');

function t(appName) {
  describe(`test/lru.test.js ${appName}`, () => {
    describe('basic', () => {
      let app;
      before(() => {
        app = mm.app({
          baseDir: `apps/${appName}`,
        });
        return app.ready();
      });

      after(() => app.close());

      afterEach(mm.restore);

      it('should GET /', () => {
        return app.httpRequest()
          .get('/')
          .expect('hi, lru')
          .expect(200);
      });

      it('should get null before set cache', () => {
        return app.httpRequest()
          .get('/get')
          .expect('')
          .expect(204);
      });

      it('set cache should work well', () => {
        return app.httpRequest()
          .get('/set')
          .expect(/cache=cache data/)
          .expect(200);
      });

      it('get cache should work well after set', () => {
        return app.httpRequest()
          .get('/get')
          .expect(/cache data/)
          .expect(200);
      });
    });

    describe('maxAge', () => {
      let app;
      before(() => {
        app = mm.app({
          baseDir: `apps/${appName}`,
        });
        return app.ready();
      });

      after(() => app.close());
      beforeEach(done => {
        setTimeout(done, 2500);
      });
      afterEach(mm.restore);

      it('should work well', () => {
        return app.httpRequest()
          .get('/set')
          .expect(/cache=cache data/)
          .expect(200);
      });

      it('should get null after 2 s', () => {
        return app.httpRequest()
          .get('/get')
          .expect('')
          .expect(204);
      });
    });

    describe('stat', () => {
      let app;
      before(() => {
        app = mm.app({
          baseDir: `apps/${appName}`,
        });
        return app.ready();
      });

      after(() => app.close());
      beforeEach(done => {
        setTimeout(done, 2500);
      });
      afterEach(mm.restore);

      it('should work well', () => {
        return app.httpRequest()
          .get('/set')
          .expect(/cache=cache data/)
          .expect(200);
      });

      it('should get null after 2 s', () => {
        return app.httpRequest()
          .get('/get')
          .expect('')
          .expect(204);
      });
    });
  });
}
