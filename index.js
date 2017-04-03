'use strict';

var Filter = require('broccoli-filter');
var md = require('html-md');

function HtmlFilter(inputTree, options) {
  if (!(this instanceof HtmlFilter)) {
    return new HtmlFilter(inputTree, options);
  }
  this.inputTree = inputTree;
}

HtmlFilter.prototype = Object.create(Filter.prototype);
HtmlFilter.prototype.constructor = HtmlFilter;

HtmlFilter.prototype.extensions = ['html'];
HtmlFilter.prototype.targetExtension = 'md';

HtmlFilter.prototype.processString = function(str) {
  return md(str);
}

module.exports = HtmlFilter;
