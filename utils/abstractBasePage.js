const _utlils =  require("./utlils");
const AbstractPage = require("./AbstractPage");

class AbstractBasePage extends AbstractPage {

  constructor({ elements = {}, root, requiredElements}) {
    super();
    _utlils.mergeAndCreateComponent(elements, root, this);
  }
}

module.exports = AbstractBasePage;