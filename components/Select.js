"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _theme = _interopRequireDefault(require("./theme"));

var _Flex = _interopRequireDefault(require("./Flex"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  appearance: none;\n  display: block;\n  width: 100%;\n  font-family: inherit;\n  color: inherit;\n  background-color: transparent;\n  border-radius: ", ";\n  border-width: 1px;\n  border-style: solid;\n  border-color: ", ";\n  ", " ", " &:focus {\n    outline: none;\n    border-color: ", ";\n    box-shadow: 0 0 0 1px ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  pointer-events: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ClickableIcon = (0, _styledComponents.default)(_Icon.default)(_templateObject());

var SelectBase = _styledComponents.default.select(_templateObject2(), (0, _styledSystem.themeGet)('radius'), (0, _styledSystem.themeGet)('colors.borderGray'), _styledSystem.space, _styledSystem.fontSize, (0, _styledSystem.themeGet)('colors.blue'), (0, _styledSystem.themeGet)('colors.blue'));

SelectBase.defaultProps = {
  theme: _theme.default,
  fontSize: 1,
  m: 0,
  pl: 12,
  pr: 32,
  py: 14
};
SelectBase.propTypes = (0, _objectSpread2.default)({}, _styledSystem.space.propTypes, _styledSystem.fontSize.propTypes);
var Select = (0, _styledComponents.default)(function (props) {
  return _react.default.createElement(_Flex.default, {
    width: 1,
    alignItems: "center"
  }, _react.default.createElement(SelectBase, props), _react.default.createElement(ClickableIcon, {
    name: "envelope",
    width: 24
  }));
})(_templateObject3());
Select.isField = true;
var _default = Select;
exports.default = _default;