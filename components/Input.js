"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = _interopRequireDefault(require("./theme"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  appearance: none;\n  display: block;\n  width: 100%;\n  font-family: inherit;\n  font-size: ", "px;\n  color: inherit;\n  background-color: transparent;\n  border-radius: ", ";\n  border-width: 0px;\n  border-style: solid;\n  border-color: ", ";\n\n  padding-top: 14px;\n  padding-bottom: 14px;\n  padding-left: 12px;\n  padding-right: 12px;\n\n  margin: 0;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  ::-ms-clear {\n    display: none;\n  }\n\n  ", " ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var borders = function borders(_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  var borderColor = color ? theme.colors[color] : theme.colors.borderGray;
  var focusColor = color ? borderColor : theme.colors.blue;
  return {
    'border-color': borderColor,
    'box-shadow': "0 0 0 1px ".concat(borderColor),
    ':focus': {
      outline: 0,
      'border-color': focusColor,
      'box-shadow': "0 0 0 2px ".concat(focusColor)
    }
  };
};

var Input = _styledComponents.default.input(_templateObject(), (0, _styledSystem.themeGet)('fontSizes.1'), (0, _styledSystem.themeGet)('radius'), (0, _styledSystem.themeGet)('colors.borderGray'), (0, _styledSystem.themeGet)('colors.gray'), borders, _styledSystem.space);

Input.displayName = 'Input';
Input.isField = true;
Input.propTypes = (0, _objectSpread2.default)({
  id: _propTypes.default.string.isRequired,
  color: _propTypes.default.string
}, borders.propTypes, _styledSystem.space.propTypes);
Input.defaultProps = {
  theme: _theme.default
};
var _default = Input;
exports.default = _default;