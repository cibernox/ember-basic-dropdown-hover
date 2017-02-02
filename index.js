/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-basic-dropdown-hover',

  contentFor(type, config) {
    let emberBasicDropdown = this.addons.find((a) => a.name === 'ember-basic-dropdown');
    return emberBasicDropdown.contentFor(type, config);
  }
};
