module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/json/navLinks.json":
/*!***********************************!*\
  !*** ./assets/json/navLinks.json ***!
  \***********************************/
/*! exports provided: homepage, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"homepage\":[{\"id\":\"hp-profile\",\"name\":\"Profile\",\"href\":\"/profile\",\"type\":\"link\"},{\"id\":\"hp-portfolio\",\"name\":\"Portfolio\",\"href\":\"/portfolio\",\"type\":\"link\"},{\"id\":\"hp-blog\",\"name\":\"Blog\",\"href\":\"/blog\",\"type\":\"link\"},{\"id\":\"hp-connect\",\"name\":\"Connect\",\"href\":\"/connect\",\"type\":\"link\"}]}");

/***/ }),

/***/ "./assets/json/socialLinks.json":
/*!**************************************!*\
  !*** ./assets/json/socialLinks.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"twitter\",\"name\":\"Twitter\",\"href\":\"https://mobile.twitter.com/irraghav\",\"type\":\"link\"},{\"id\":\"instagram\",\"name\":\"Instagram\",\"href\":\"https://www.instagram.com/irraghav/\",\"type\":\"link\"},{\"id\":\"linkedin\",\"name\":\"LinkedIn\",\"href\":\"https://ca.linkedin.com/in/raghav-sharma-80633452\",\"type\":\"link\"}]");

/***/ }),

/***/ "./assets/styles/homepage.css":
/*!************************************!*\
  !*** ./assets/styles/homepage.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/atoms/button.js":
/*!************************************!*\
  !*** ./components/atoms/button.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/raghav/repos/raghavsharma.info/components/atoms/button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AtomButton = props => {
  return __jsx("div", {
    className: `button-container__${props.id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("button", {
    className: "button",
    id: props.id,
    href: props.href,
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, props.name));
};

/* harmony default export */ __webpack_exports__["default"] = (AtomButton);

/***/ }),

/***/ "./components/atoms/link.js":
/*!**********************************!*\
  !*** ./components/atoms/link.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/raghav/repos/raghavsharma.info/components/atoms/link.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AtomLink = props => {
  return __jsx("div", {
    className: `link-container__${props.id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("a", {
    className: "link",
    id: props.id,
    href: props.href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, props.name));
};

/* harmony default export */ __webpack_exports__["default"] = (AtomLink);

/***/ }),

/***/ "./components/navLinks.js":
/*!********************************!*\
  !*** ./components/navLinks.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_json_navLinks_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/json/navLinks.json */ "./assets/json/navLinks.json");
var _assets_json_navLinks_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/json/navLinks.json */ "./assets/json/navLinks.json", 1);
/* harmony import */ var _atoms_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./atoms/link */ "./components/atoms/link.js");
/* harmony import */ var _atoms_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atoms/button */ "./components/atoms/button.js");
var _jsxFileName = "/Users/raghav/repos/raghavsharma.info/components/navLinks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const NavLinks = props => {
  let list = props.for ? _assets_json_navLinks_json__WEBPACK_IMPORTED_MODULE_1__[props.for] : _assets_json_navLinks_json__WEBPACK_IMPORTED_MODULE_1__;
  let link_list = list.map(list => {
    if (list.type == "link") {
      return __jsx(_atoms_link__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        key: list.id
      }, list, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: undefined
      }));
    } else if (list.type == "button") {
      return __jsx(_atoms_button__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
        key: list.id
      }, list, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: undefined
      }));
    }
  });
  return __jsx("div", {
    className: `nav-links links-for__${props.for}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, link_list);
};

/* harmony default export */ __webpack_exports__["default"] = (NavLinks);

/***/ }),

/***/ "./components/socialLinksTray.js":
/*!***************************************!*\
  !*** ./components/socialLinksTray.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_json_socialLinks_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/json/socialLinks.json */ "./assets/json/socialLinks.json");
var _assets_json_socialLinks_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/json/socialLinks.json */ "./assets/json/socialLinks.json", 1);
/* harmony import */ var _atoms_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./atoms/link */ "./components/atoms/link.js");
/* harmony import */ var _atoms_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atoms/button */ "./components/atoms/button.js");
var _jsxFileName = "/Users/raghav/repos/raghavsharma.info/components/socialLinksTray.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class SocialLinksTray extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    let link_list = _assets_json_socialLinks_json__WEBPACK_IMPORTED_MODULE_1__.map(links => {
      return __jsx(_atoms_link__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        key: links.id
      }, links, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }));
    });

    if (this.state.show) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
        className: `social-links-tray link-for__social-overlay-tray`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, link_list), __jsx(_atoms_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "Click me",
        onClick: this.toggleState,
        id: "social-overlay-tray__button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }));
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_atoms_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "Click me",
        onClick: this.toggleState,
        id: "social-overlay-tray__button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }));
    }
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (SocialLinksTray);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_styles_homepage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/homepage.css */ "./assets/styles/homepage.css");
/* harmony import */ var _assets_styles_homepage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_homepage_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_navLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navLinks */ "./components/navLinks.js");
/* harmony import */ var _components_socialLinksTray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/socialLinksTray */ "./components/socialLinksTray.js");
var _jsxFileName = "/Users/raghav/repos/raghavsharma.info/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Index = () => {
  let roles = ["Frontend Developer", "Backend Developer", "Data Analyst", "Web Analytics Implementor", "Continous Learner"];
  let role = roles[Math.floor(Math.random() * roles.length)];
  return __jsx("div", {
    className: "page-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("main", {
    className: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("section", {
    className: "name-introduction__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Raghav Sharma"), __jsx("div", {
    className: "role",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "I am ", role)), __jsx("section", {
    className: "nav-links__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_components_navLinks__WEBPACK_IMPORTED_MODULE_2__["default"], {
    for: "homepage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }))), __jsx("nav", {
    className: "social-overlay-tray__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(_components_socialLinksTray__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raghav/repos/raghavsharma.info/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map