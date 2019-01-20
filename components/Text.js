"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.bold = exports.regular = exports.caps = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

var _theme = _interopRequireDefault(require("./theme"));

var _utils = require("../utils/utils");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var caps = function caps(props) {
  return props.caps ? {
    textTransform: 'uppercase'
  } : null;
};

exports.caps = caps;

var regular = function regular(props) {
  return props.regular ? {
    fontWeight: props.theme.regular
  } : null;
};

exports.regular = regular;

var bold = function bold(props) {
  return props.bold ? {
    fontWeight: props.theme.bold
  } : null;
};

exports.bold = bold;
var Text = (0, _utils.mapProps)(function (_ref) {
  var align = _ref.align,
      props = (0, _objectWithoutProperties2.default)(_ref, ["align"]);
  return (0, _objectSpread2.default)({
    textAlign: align
  }, props);
})(_styledComponents.default.div(_templateObject(), _styledSystem.textStyle, _styledSystem.fontSize, _styledSystem.fontWeight, _styledSystem.textAlign, _styledSystem.lineHeight, _styledSystem.space, _styledSystem.color, caps, regular, bold));
Text.displayName = 'Text';
Text.propTypes = (0, _objectSpread2.default)({}, _styledSystem.textStyle.propTypes, _styledSystem.fontSize.propTypes, _styledSystem.fontWeight.propTypes, _styledSystem.textAlign.propTypes, _styledSystem.lineHeight.propTypes, _styledSystem.space.propTypes, _styledSystem.color.propTypes, {
  caps: _propTypes.default.bool,
  regular: _propTypes.default.bool,
  bold: _propTypes.default.bool,
  align: (0, _utils.deprecatedPropType)('textAlign')
});
Text.defaultProps = {
  theme: _theme.default
};
Text.span = Text.withComponent('span');
Text.p = Text.withComponent('p');
Text.s = Text.withComponent('s');
var _default = Text;
exports.default = _default;