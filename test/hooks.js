const playwright = require("playwright");

exports.mochaHooks = {
  beforeAll(done) {
    global.playwright = playwright;
    done();
  },
};
