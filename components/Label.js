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

var _theme = _interopRequireDefault(require("./theme"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 10px;\n  letter-spacing: 0.2px;\n  display: block;\n  width: 100%;\n  margin: 0;\n\n  ", " ", " ", " ", ";\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var nowrap = function nowrap(props) {
  return props.nowrap ? {
    whiteSpace: 'nowrap'
  } : null;
};

var accessiblyHide = function accessiblyHide(props) {
  return props.hidden ? {
    position: 'absolute',
    width: '1px',
    height: '1px',
    clip: 'rect(1px, 1px, 1px, 1px)'
  } : null;
};

var Label = _styledComponents.default.label(_templateObject(), _styledSystem.space, _styledSystem.fontSize, _styledSystem.color, _styledSystem.fontWeight, nowrap, accessiblyHide);

Label.propTypes = (0, _objectSpread2.default)({}, _styledSystem.space.propTypes, _styledSystem.fontSize.propTypes, _styledSystem.color.propTypes, _styledSystem.fontWeight.propTypes);
Label.defaultProps = {
  fontSize: '10px',
  fontWeight: 'bold',
  color: 'gray',
  theme: _theme.default
};
Label.displayName = 'Label';
Label.isLabel = true;
var _default = Label;
exports.default = _default;