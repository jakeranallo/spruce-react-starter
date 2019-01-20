'use strict'

Object.defineProperty(exports, '__esModule', {
	value: true
})
exports.default = exports.duration = exports.boxShadows = exports.maxContainerWidth = exports.radius = exports.radii = exports.colorStyles = exports.colors = exports.textStyles = exports.lineHeights = exports.fontWeights = exports.regular = exports.bold = exports.medium = exports.fontSizes = exports.font = exports.space = exports.mediaQueries = exports.breakpoints = void 0

var createMediaQuery = function createMediaQuery(n) {
	return '@media screen and (min-width:'.concat(n, ')')
}

var addAliases = function addAliases(arr, aliases) {
	return aliases.forEach(function(key, i) {
		return Object.defineProperty(arr, key, {
			enumerable: false,
			get: function get() {
				return this[i]
			}
		})
	})
}

var breakpoints = [32, 40, 48, 64].map(function(n) {
	return n + 'em'
})
exports.breakpoints = breakpoints
var mediaQueries = breakpoints.map(createMediaQuery)
exports.mediaQueries = mediaQueries
var aliases = ['sm', 'md', 'lg', 'xl']
addAliases(breakpoints, aliases)
addAliases(mediaQueries, aliases)
var space = [0, 4, 8, 16, 32, 64, 128]
exports.space = space
var font = "'Rubik','Helvetica Neue',Helvetica,Arial,sans-serif"
exports.font = font
var fontSizes = [12, 14, 16, 20, 24, 32, 40, 56, 72]
exports.fontSizes = fontSizes
var medium = 500
exports.medium = medium
var bold = 700 // alias

exports.bold = bold
var regular = medium // styled-system's `fontWeight` function can hook into the `fontWeights` object

exports.regular = regular
var fontWeights = {
	medium: medium,
	bold: bold,
	// alias
	regular: regular
}
exports.fontWeights = fontWeights
var lineHeights = {
	standard: 1.5,
	display: 1.25
}
exports.lineHeights = lineHeights
var letterSpacings = {
	normal: 'normal',
	caps: '0.025em'
}
var textStyles = {
	display8: {
		fontSize: fontSizes[8] + 'px',
		fontWeight: fontWeights.bold,
		lineHeight: lineHeights.display
	},
	display7: {
		fontSize: fontSizes[7] + 'px',
		fontWeight: fontWeights.bold,
		lineHeight: lineHeights.display
	},
	display6: {
		fontSize: fontSizes[6] + 'px',
		fontWeight: fontWeights.bold,
		lineHeight: lineHeights.display
	},
	display5: {
		fontSize: fontSizes[5] + 'px',
		fontWeight: fontWeights.bold,
		lineHeight: lineHeights.display
	},
	display4: {
		fontSize: fontSizes[4] + 'px',
		fontWeight: fontWeights.bold,
		lineHeight: lineHeights.display
	},
	display3: {
		fontSize: fontSizes[3] + 'px',
		fontWeight: fontWeights.bold,
		lineHeight: lineHeights.display
	},
	display2: {
		fontSize: fontSizes[2] + 'px',
		fontWeight: fontWeights.bold,
		lineHeight: lineHeights.display
	},
	display1: {
		fontSize: fontSizes[1] + 'px',
		fontWeight: fontWeights.bold,
		lineHeight: lineHeights.display
	},
	display0: {
		fontSize: fontSizes[0] + 'px',
		fontWeight: fontWeights.bold,
		lineHeight: lineHeights.display,
		letterSpacing: letterSpacings.caps,
		textTransform: 'uppercase'
	},
	body2: {
		fontSize: fontSizes[2] + 'px',
		fontWeight: fontWeights.medium,
		lineHeight: lineHeights.standard
	},
	body1: {
		fontSize: fontSizes[1] + 'px',
		fontWeight: fontWeights.medium,
		lineHeight: lineHeights.standard
	},
	body0: {
		fontSize: fontSizes[0] + 'px',
		fontWeight: fontWeights.medium,
		lineHeight: lineHeights.standard
	} // color palette
}
exports.textStyles = textStyles
var black = '#000'
var white = '#fff'
var text = '#001833'
var lightBlue = '#e8f2ff'
var blue = '#007aff'
var darkBlue = '#049'
var lightGray = '#f4f6f8'
var borderGray = '#c0cad5'
var gray = '#4f6f8f'
var darkGray = '#364049'
var lightGreen = '#ecf7ec'
var green = '#0a0'
var darkGreen = '#060'
var lightRed = '#fbebeb'
var red = '#c00'
var darkRed = '#800'
var orange = '#f68013'
var darkOrange = '#f06f20'
var lightPurple = '#f5ebfa'
var purple = '#70b'
var lightYellow = '#fedc2a'
var yellow = '#fff3c0' // deprecated aliases

var darkPurple = purple
var lightOrange = orange
var colors = {
	black: black,
	white: white,
	text: text,
	blue: blue,
	lightBlue: lightBlue,
	darkBlue: darkBlue,
	gray: gray,
	lightGray: lightGray,
	borderGray: borderGray,
	darkGray: darkGray,
	green: green,
	lightGreen: lightGreen,
	darkGreen: darkGreen,
	red: red,
	lightRed: lightRed,
	darkRed: darkRed,
	orange: orange,
	darkOrange: darkOrange,
	purple: purple,
	lightPurple: lightPurple,
	// deprecated
	lightOrange: lightOrange,
	darkPurple: darkPurple
}
exports.colors = colors
var colorStyles = {
	whiteOnText: {
		color: colors.white,
		backgroundColor: colors.text
	},
	whiteOnGray: {
		color: colors.white,
		backgroundColor: colors.gray
	},
	textOnLightGray: {
		color: colors.text,
		backgroundColor: colors.lightGray
	},
	whiteOnBlue: {
		color: colors.white,
		backgroundColor: colors.blue
	},
	blueOnLightBlue: {
		color: colors.blue,
		backgroundColor: colors.lightBlue
	},
	whiteOnGreen: {
		color: colors.white,
		backgroundColor: colors.green
	},
	greenOnLightGreen: {
		color: colors.green,
		backgroundColor: colors.lightGreen
	},
	whiteOnRed: {
		color: colors.white,
		backgroundColor: colors.red
	},
	redOnLightRed: {
		color: colors.red,
		backgroundColor: colors.lightRed
	},
	textOnOrange: {
		color: colors.text,
		backgroundColor: colors.orange
	},
	whiteOnPurple: {
		color: colors.white,
		backgroundColor: colors.purple
	},
	purpleOnLightPurple: {
		color: colors.purple,
		backgroundColor: colors.lightPurple
	},
	textOnWhite: {
		color: colors.text,
		backgroundColor: colors.white
	},
	grayOnWhite: {
		color: colors.gray,
		backgroundColor: colors.white
	},
	blueOnWhite: {
		color: colors.blue,
		backgroundColor: colors.white
	},
	greenOnWhite: {
		color: colors.green,
		backgroundColor: colors.white
	},
	redOnWhite: {
		color: colors.red,
		backgroundColor: colors.white
	},
	purpleOnWhite: {
		color: colors.purple,
		backgroundColor: colors.white
	},
	whiteOnDarkOrange: {
		color: colors.white,
		backgroundColor: colors.darkOrange
	}
}
exports.colorStyles = colorStyles
colorStyles.info = colorStyles.textOnLightGray
colorStyles.success = colorStyles.whiteOnGreen
colorStyles.warning = colorStyles.textOnOrange
colorStyles.danger = colorStyles.whiteOnRed // styled-system's `borderRadius` function can hook into the `radii` object/array

var radii = [0, 2, 6]
exports.radii = radii
var radius = '2px'
exports.radius = radius
var maxContainerWidth = '1280px' // boxShadows

exports.maxContainerWidth = maxContainerWidth
var boxShadows = [
	'0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)',
	'0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)',
	'0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)',
	'0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)'
] // animation duration

exports.boxShadows = boxShadows
var duration = {
	fast: '150ms',
	normal: '300ms',
	slow: '450ms',
	slowest: '600ms' // animation easing curves
}
exports.duration = duration
var easeInOut = 'cubic-bezier(0.5, 0, 0.25, 1)'
var easeOut = 'cubic-bezier(0, 0, 0.25, 1)'
var easeIn = 'cubic-bezier(0.5, 0, 1, 1)'
var timingFunctions = {
	easeInOut: easeInOut,
	easeOut: easeOut,
	easeIn: easeIn // animation delay
}
var transitionDelays = {
	small: '60ms',
	medium: '160ms',
	large: '260ms',
	xLarge: '360ms'
}
var theme = {
	breakpoints: breakpoints,
	mediaQueries: mediaQueries,
	space: space,
	font: font,
	fontSizes: fontSizes,
	fontWeights: fontWeights,
	lineHeights: lineHeights,
	letterSpacings: letterSpacings,
	regular: regular,
	bold: bold,
	textStyles: textStyles,
	colors: colors,
	colorStyles: colorStyles,
	radii: radii,
	radius: radius,
	boxShadows: boxShadows,
	maxContainerWidth: maxContainerWidth,
	duration: duration,
	timingFunctions: timingFunctions,
	transitionDelays: transitionDelays
}
var _default = theme
exports.default = _default
