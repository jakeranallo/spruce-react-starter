"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

var _theme = _interopRequireDefault(require("./theme"));

var _utils = require("../utils/utils");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n transition: all .3s ease-out;\n  text-decoration: none;\n  font-family: inherit;\n  font-weight: 600;\n  line-height: 1.5;\n  cursor: pointer;\n  border-radius: ", ";\n  background-color: ", ";\n  color: ", ";\n  border-width: 0;\n  border-style: solid;\n\n  &:disabled {\n    opacity: 0.25;\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  ", " ", " ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var size = function size(props) {
  switch (props.size) {
    case 'small':
      return {
        fontSize: "".concat(props.theme.fontSizes[0], "px"),
        padding: '7px 12px'
      };

    case 'medium':
      return {
        fontSize: "".concat(props.theme.fontSizes[1], "px"),
        padding: '9.5px 18px'
      };

    case 'large':
      return {
        fontSize: "".concat(props.theme.fontSizes[2], "px"),
        padding: '12px 22px'
      };

    default:
      return {
        fontSize: "".concat(props.theme.fontSizes[1], "px"),
        padding: '9.5px 18px'
      };
  }
};

var Button = (0, _utils.mapProps)(function (_ref) {
  var fullWidth = _ref.fullWidth,
      props = (0, _objectWithoutProperties2.default)(_ref, ["fullWidth"]);
  return (0, _objectSpread2.default)({
    width: fullWidth ? 1 : undefined
  }, props);
})(_styledComponents.default.button(_templateObject(), function (props) {
  return props.theme.radius;
}, function (props) {
  return props.theme.colors.blue;
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.disabled ? null : props.theme.colors.darkBlue;
}, _styledSystem.width, size, _styledSystem.space));
Button.propTypes = (0, _objectSpread2.default)({
  size: _propTypes.default.oneOf(['small', 'medium', 'large'])
}, _styledSystem.width.propTypes, _styledSystem.space.propTypes, {
  fullWidth: (0, _utils.deprecatedPropType)('width')
});
Button.defaultProps = {
  theme: _theme.default
};
Button.displayName = 'Button';
var _default = Button;
exports.default = _default;