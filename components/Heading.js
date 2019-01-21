"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Text = _interopRequireDefault(require("./Text"));

var _theme = _interopRequireDefault(require("./theme"));

var Heading = _Text.default.withComponent('h3');

Heading.displayName = 'Heading';
Heading.defaultProps = {
  textStyle: 'display4',
  m: 0,
  theme: _theme.default
};
Heading.h1 = Heading.withComponent('h1');
Heading.h2 = Heading.withComponent('h2');
Heading.h3 = Heading.withComponent('h3');
Heading.h4 = Heading.withComponent('h4');
Heading.h5 = Heading.withComponent('h5');
Heading.h6 = Heading.withComponent('h6');
var _default = Heading;
exports.default = _default;