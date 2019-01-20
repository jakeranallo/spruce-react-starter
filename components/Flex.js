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
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  ", " ", " ", " ", " ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Flex = (0, _utils.mapProps)(function (_ref) {
  var wrap = _ref.wrap,
      align = _ref.align,
      justify = _ref.justify,
      props = (0, _objectWithoutProperties2.default)(_ref, ["wrap", "align", "justify"]);
  return (0, _objectSpread2.default)({
    flexWrap: wrap ? 'wrap' : undefined,
    alignItems: align,
    justifyContent: justify
  }, props);
})(_styledComponents.default.div(_templateObject(), _styledSystem.space, _styledSystem.width, _styledSystem.color, _styledSystem.alignItems, _styledSystem.justifyContent, _styledSystem.flexDirection, _styledSystem.flexWrap));
Flex.defaultProps = {
  theme: _theme.default
};
Flex.propTypes = (0, _objectSpread2.default)({}, _styledSystem.space.propTypes, _styledSystem.width.propTypes, _styledSystem.color.propTypes, _styledSystem.alignItems.propTypes, _styledSystem.justifyContent.propTypes, _styledSystem.flexWrap.propTypes, _styledSystem.flexDirection.propTypes, {
  // deprecated
  wrap: (0, _utils.deprecatedPropType)('flexWrap'),
  align: (0, _utils.deprecatedPropType)('alignItems'),
  justify: (0, _utils.deprecatedPropType)('justifyContent')
});
Flex.displayName = 'Flex';
var _default = Flex;
exports.default = _default;