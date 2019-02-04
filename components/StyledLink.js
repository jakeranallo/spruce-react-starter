"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

var _theme = _interopRequireDefault(require("./theme"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  cursor: pointer;\n  text-decoration: none;\n  ", " &:hover {\n    text-decoration: underline;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Link = _styledComponents.default.a(_templateObject(), _styledSystem.color);

Link.displayName = 'StyledLink';
Link.propTypes = (0, _objectSpread2.default)({}, _styledSystem.color.propTypes);
Link.defaultProps = {
  color: 'blue',
  theme: _theme.default
};
var _default = Link;
exports.default = _default;