"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("./Box"));

var _theme = _interopRequireDefault(require("./theme"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: inline;\n  box-shadow: ", ";\n  font-size: ", "px;\n  position: absolute;\n  border-radius: ", "px;\n  box-sizing: border-box;\n  background: ", ";\n  text-align: center;\n\n  ", " ", " &::after {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-width: 5px;\n    border-style: solid;\n    border-color: transparent transparent ", "\n      ", ";\n\n    ", " ", " ", " ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var arrowShadow = function arrowShadow(props) {
  return props.top ? {
    'box-shadow': '-9.66px 9.66px 8px 0 rgba(0,0,0,0.04), -4px 4px 4px 0 rgba(0,0,0,0.08)'
  } : {
    'box-shadow': '-1.41px 1.41px 1px 0 rgba(0,0,0,0.01), -3.66px 3.66px 8px 0 rgba(0,0,0,0.04)'
  };
};

var arrowAlign = function arrowAlign(props) {
  return props.left ? {
    left: '16px',
    'margin-left': props.top ? 0 : '15px'
  } : props.center ? {
    left: '50%',
    'margin-left': props.top ? '-7px' : '7px'
  } : {
    right: '16px',
    'margin-right': props.top ? '5px' : '-10px'
  };
};

var arrowPosition = function arrowPosition(props) {
  return props.top ? {
    'transform-origin': '0 0',
    transform: 'rotate(-45deg)',
    bottom: '-10px'
  } : {
    'transform-origin': '0 0',
    transform: 'rotate(-225deg)',
    top: '0'
  };
};

var arrow = function arrow(props) {
  return props.top ? {
    'transform-origin': '0 0',
    transform: 'rotate(-45deg)'
  } : {
    'transform-origin': '0 0',
    transform: 'rotate(-225deg)'
  };
};

var tooltipPosition = function tooltipPosition(props) {
  return props.top ? {
    bottom: '-8px'
  } : {
    top: 0
  };
};

var tooltipAlign = function tooltipAlign(props) {
  return props.right ? {
    right: 0
  } : props.center ? {
    left: '50%',
    width: 'auto',
    transform: 'translateX(-50%)'
  } : null;
};

var TooltipContent = (0, _styledComponents.default)(_Box.default)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.boxShadows[1];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes[0];
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.radii[1];
}, function (_ref4) {
  var theme = _ref4.theme,
      bg = _ref4.bg;
  return theme.colors[bg];
}, tooltipPosition, tooltipAlign, function (_ref5) {
  var theme = _ref5.theme,
      bg = _ref5.bg;
  return theme.colors[bg];
}, function (_ref6) {
  var theme = _ref6.theme,
      bg = _ref6.bg;
  return theme.colors[bg];
}, arrow, arrowPosition, arrowAlign, arrowShadow);
var propTypes = {
  children: _propTypes.default.any.isRequired,
  bg: _propTypes.default.string,
  color: _propTypes.default.string,
  bottom: _propTypes.default.bool,
  top: _propTypes.default.bool,
  center: _propTypes.default.bool,
  left: _propTypes.default.bool,
  right: _propTypes.default.bool,
  zIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
var defaultProps = {
  position: 'bottom',
  color: 'text',
  bg: 'white',
  theme: _theme.default,
  zIndex: 'auto'
};

var Tooltip = function Tooltip(_ref7) {
  var children = _ref7.children,
      props = (0, _objectWithoutProperties2.default)(_ref7, ["children"]);
  return _react.default.createElement("div", {
    style: {
      position: 'relative',
      zIndex: props.zIndex
    }
  }, _react.default.createElement(TooltipContent, (0, _extends2.default)({
    p: 2,
    mb: 3,
    mt: 2
  }, props), children));
};

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
var _default = Tooltip;
exports.default = _default;