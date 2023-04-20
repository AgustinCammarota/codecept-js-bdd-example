const Helper = require('@codeceptjs/helper');

class AbstractPage extends Helper {

  // before/after hooks
  /**
   * @protected
   */
  _before() {}

  /**
   * @protected
   */
  _after() {}

  async getCurrentContext() {
    const helper = this.helpers['Puppeteer'];
    const url = await helper.page.url();
    const parts = url.split('/');
    const lastPart = parts[parts.length - 1];
    return lastPart;
  }

}

module.exports = AbstractPage;