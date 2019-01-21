"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Flex = _interopRequireDefault(require("./Flex"));

var _IconField = _interopRequireDefault(require("./IconField"));

var FormField = function FormField(props) {
  var iconBefore = false;

  var children = _react.default.Children.toArray(props.children);

  var _children$filter = children.filter(function (child) {
    return child.type.isField;
  }),
      _children$filter2 = (0, _slicedToArray2.default)(_children$filter, 1),
      field = _children$filter2[0];

  var _children$filter3 = children.filter(function (child) {
    return child.type.isLabel;
  }),
      _children$filter4 = (0, _slicedToArray2.default)(_children$filter3, 1),
      label = _children$filter4[0];

  var showLabel = label && !label.props.autoHide || field && !!field.props.value;
  var id = field && (field.props.id || field.props.name);
  var styled = children.map(function (child, i, arr) {
    if (child.type.isField && arr[i - 1] && arr[i - 1].type.isIcon) {
      iconBefore = true;
    }

    if (child === field) {
      return _react.default.cloneElement(child, {
        id: id,
        style: (0, _objectSpread2.default)({}, child.props.style, {
          transitionProperty: 'padding-top, padding-bottom',
          transitionDuration: '.1s',
          paddingTop: showLabel ? 20 : 14,
          paddingBottom: showLabel ? 8 : 14
        })
      });
    }

    return child;
  });

  var styledLabel = label && _react.default.cloneElement(label, {
    htmlFor: label.props.htmlFor || id,
    fontSize: 10,
    ml: iconBefore ? '40px' : '12px',
    pt: '6px',
    mb: '-20px',
    style: (0, _objectSpread2.default)({}, label.props.style, {
      height: 20,
      transitionProperty: 'opacity',
      transitionDuration: '.1s',
      opacity: showLabel ? 1 : 0
    })
  });

  return _react.default.createElement("div", null, styledLabel, _react.default.createElement(_IconField.default, null, styled));
};

var childrenPropType = function childrenPropType(props, propName, componentName) {
  var children = _react.default.Children.toArray(props.children);

  var _children$filter5 = children.filter(function (child) {
    return child.type.isLabel;
  }),
      _children$filter6 = (0, _slicedToArray2.default)(_children$filter5, 1),
      label = _children$filter6[0];

  var _children$filter7 = children.filter(function (child) {
    return child.type.isField;
  }),
      _children$filter8 = (0, _slicedToArray2.default)(_children$filter7, 1),
      field = _children$filter8[0];

  if (!field) {
    return new Error("No form field found for ".concat(componentName, ". Please include an Input, Select, or other form field as a child."));
  }

  if (!label) {
    return new Error("No label found for ".concat(componentName, ". Please include a Label as a child."));
  }
};

FormField.propTypes = {
  children: childrenPropType
};
FormField.displayName = 'FormField';
var _default = FormField;
exports.default = _default;