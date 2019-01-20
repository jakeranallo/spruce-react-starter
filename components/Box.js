"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = _interopRequireDefault(require("./theme"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", " ", " ", " ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Box = _styledComponents.default.div(_templateObject(), _styledSystem.space, _styledSystem.width, _styledSystem.color, _styledSystem.textAlign);

Box.displayName = 'Box';
Box.defaultProps = {
  theme: _theme.default
};
Box.propTypes = (0, _objectSpread2.default)({}, _styledSystem.space.propTypes, _styledSystem.width.propTypes, _styledSystem.color.propTypes, _styledSystem.textAlign.propTypes);
var _default = Box;
exports.default = _default;