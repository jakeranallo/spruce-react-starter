"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deprecatedPropType = exports.mapProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var mapProps = function mapProps(map) {
  return function (Component) {
    return (0, _hoistNonReactStatics.default)(function (props) {
      return _react.default.createElement(Component, map(props));
    }, Component);
  };
}; // Use this to mark props as deprecated


exports.mapProps = mapProps;

var deprecatedPropType = function deprecatedPropType(replacement) {
  return function (props, propName, componentName) {
    if (props[propName]) {
      return new Error("The `".concat(propName, "` prop is deprecated and will be removed in a future release. Please use `").concat(replacement, "` instead."));
    }
  };
};

exports.deprecatedPropType = deprecatedPropType;