"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Base = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _theme = _interopRequireDefault(require("./theme"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-family: ", ";\n  line-height: ", ";\n  font-weight: ", ";\n\n  * {\n    box-sizing: border-box;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Base = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.font;
}, function (props) {
  return props.theme.lineHeights.standard;
}, function (props) {
  return props.theme.fontWeights.medium;
});

exports.Base = Base;

var ThemeProvider = function ThemeProvider(_ref) {
  var customBreakpoints = _ref.customBreakpoints,
      props = (0, _objectWithoutProperties2.default)(_ref, ["customBreakpoints"]);
  var breakpoints = customBreakpoints || _theme.default.breakpoints;
  var theme = (0, _objectSpread2.default)({}, _theme.default, {
    breakpoints: breakpoints
  });
  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: theme
  }, _react.default.createElement(Base, props));
};

ThemeProvider.propTypes = {
  /** Array of pixel values for custom breakpoint overrides */
  customBreakpoints: _propTypes.default.arrayOf(_propTypes.default.number)
};
var _default = ThemeProvider;
exports.default = _default;