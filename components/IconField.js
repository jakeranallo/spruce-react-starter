"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _Flex = _interopRequireDefault(require("./Flex"));

var IconField = function IconField(props) {
  var children = _react.default.Children.toArray(props.children).filter(function (child) {
    return child.type.isField || child.type.isIcon;
  });

  var styledChildren = children.map(function (child, i) {
    if (child.type.isIcon) {
      return _react.default.cloneElement(child, {
        style: (0, _objectSpread2.default)({}, child.props.style, {
          flex: 'none',
          alignSelf: 'center',
          pointerEvents: 'none',
          marginLeft: i === 0 ? 8 : -32,
          marginRight: i === 0 ? -32 : 8
        })
      });
    }

    return _react.default.cloneElement(child, {
      style: (0, _objectSpread2.default)({}, child.props.style, {
        paddingLeft: i === 0 ? undefined : 40,
        paddingRight: i === children.length - 1 ? undefined : 40
      })
    });
  });
  return _react.default.createElement(_Flex.default, null, styledChildren);
};

var _default = IconField;
exports.default = _default;