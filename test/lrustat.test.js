'use strict';

const mm = require('egg-mock');

describe('test/lrustat.test.js', () => {
  describe('stat', () => {
    let app;
    before(() => {
      app = mm.app({
        baseDir: 'apps/lru-test-stat',
      });
      return app.ready();
    });

    after(() => app.close());

    afterEach(mm.restore);

    it('should log stat', cb => {
      mm(app.logger, 'info', text => {
        if (text.includes('name: unknown, hit: 0, miss: 0, hitRate: 0, length: 0')) {
          cb();
        }
      });
    });
  });
});
