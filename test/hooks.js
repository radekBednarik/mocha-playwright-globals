const chromium = require("playwright").chromium;

exports.mochaHooks = {
  async beforeAll() {
    global.browser = await chromium.launch({ headless: false });
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
  },

  async afterAll() {
    await global.browser.close();
  },
};
