const _ = require("lodash");

function mergeAndCreateComponent(elements , name, context) {
  _.forEach(_.keys(elements), (key) => {
    if(_.has(elements[key], 'component')) {
      const ignoreRoot = _.get(elements[key], 'ignoreRoot', false);
      elements[key] = _.mergeWith({}, new elements[key]['component']['ComponentClass']());
      _mergeAndCreateSubComponent(elements[key], name, ignoreRoot);
    } else {
      elements[key] = name.concat(' ').concat(elements[key]);
    }
  });
  _.defaultsDeep(context, elements);
}

function _mergeAndCreateSubComponent(elements, name, ignoreRoot) {
  _.forEach(_.keys(elements), (key) => {
    if (typeof elements[key] === 'object') {
      _mergeAndCreateSubComponent(elements[key], name, ignoreRoot);
    } else {
      elements[key] = ignoreRoot ? elements[key] : name.concat(' ').concat(elements[key]);
    }
  });
}

module.exports = {
  mergeAndCreateComponent
};