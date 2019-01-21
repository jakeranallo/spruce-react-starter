"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("./Box"));

var _theme = _interopRequireDefault(require("./theme"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", " ", " ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var boxShadow = function boxShadow(props) {
  var boxShadows = {
    sm: {
      'box-shadow': props.theme.boxShadows[0]
    },
    md: {
      'box-shadow': props.theme.boxShadows[1]
    },
    lg: {
      'box-shadow': props.theme.boxShadows[2]
    },
    xl: {
      'box-shadow': props.theme.boxShadows[3]
    }
  };
  return boxShadows[props.boxShadowSize];
};

var boxBorder = function boxBorder(props) {
  return {
    border: "".concat(props.borderWidth, "px solid ").concat(props.theme.colors[props.borderColor])
  };
};

var Card = (0, _styledComponents.default)(_Box.default)(_templateObject(), boxShadow, boxBorder, _styledSystem.borderRadius);
Card.propTypes = (0, _objectSpread2.default)({
  boxShadowSize: _propTypes.default.oneOf(['sm', 'md', 'lg', 'xl']),
  borderColor: _propTypes.default.string
}, _styledSystem.borderRadius.propTypes, {
  borderWidth: _propTypes.default.oneOf([1, 2])
});
Card.defaultProps = {
  borderColor: 'borderGray',
  borderRadius: 1,
  borderWidth: 1,
  theme: _theme.default
};
Card.displayName = 'Card';
var _default = Card;
exports.default = _default;