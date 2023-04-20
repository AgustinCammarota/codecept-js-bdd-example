const _utlils = require("./utlils");
const AbstractPage = require("./AbstractPage");

class AbstractBaseComponent extends AbstractPage{

  constructor({ elements = {}, name, requiredElements}) {
    super();
    _utlils.mergeAndCreateComponent(elements, name, this);
  }
}

module.exports = AbstractBaseComponent;