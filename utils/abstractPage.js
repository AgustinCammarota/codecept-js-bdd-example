const Helper = require('@codeceptjs/helper');

class AbstractPage extends Helper {

  // before/after hooks
  /**
   * @protected
   */
  async _before() {
    this.helpers['Puppeteer'].page.on('domcontentloaded', async () => {
      await this.helpers['MockRequestHelper'].startMocking();
    });
  }

  async _beforeStep() {

  }

  async _afterStep() {
  }


  /**
   * @protected
   */
  async _after() {
    await this.helpers['MockRequestHelper'].stopMocking();
  }

  async getCurrentContext() {
    const helper = this.helpers['Puppeteer'];
    const url = await helper.page.url();
    const lastSegment = url.split('/').filter(seg => seg !== '').pop();
    return lastSegment.replace(/[^a-zA-Z]/g, '');
  }

}

module.exports = AbstractPage;