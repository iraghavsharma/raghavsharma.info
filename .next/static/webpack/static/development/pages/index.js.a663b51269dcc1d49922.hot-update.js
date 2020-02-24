webpackHotUpdate("static/development/pages/index.js",{

/***/ "./assets/json/socialLinks.json":
/*!**************************************!*\
  !*** ./assets/json/socialLinks.json ***!
  \**************************************/
/*! exports provided: overlay, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"overlay\":[{\"id\":\"hp-profile\",\"name\":\"Profile\",\"href\":\"/profile\",\"type\":\"link\"},{\"id\":\"hp-portfolio\",\"name\":\"Portfolio\",\"href\":\"/portfolio\",\"type\":\"link\"},{\"id\":\"hp-blog\",\"name\":\"Blog\",\"href\":\"/blog\",\"type\":\"link\"},{\"id\":\"hp-connect\",\"name\":\"Connect\",\"href\":\"/connect\",\"type\":\"link\"}]}");

/***/ }),

/***/ "./components/socialOverlay.js":
/*!*************************************!*\
  !*** ./components/socialOverlay.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_json_socialLinks_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/json/socialLinks.json */ "./assets/json/socialLinks.json");
var _assets_json_socialLinks_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/json/socialLinks.json */ "./assets/json/socialLinks.json", 1);
/* harmony import */ var _atoms_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atoms/link */ "./components/atoms/link.js");

var _jsxFileName = "/Users/raghav/repos/raghavsharma.info/components/socialOverlay.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var SocialLinks = function SocialLinks(props) {
  var list = props["for"] ? _assets_json_socialLinks_json__WEBPACK_IMPORTED_MODULE_2__[props["for"]] : _assets_json_socialLinks_json__WEBPACK_IMPORTED_MODULE_2__;
  var link_list = list.map(function (list) {
    return __jsx(_atoms_link__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, list, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }));
    /*else if(list.type =="button"){
        <AtomButton {...list} />
    }*/
  });
  return __jsx("div", {
    className: "social-links link-for__".concat(props["for"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, link_list);
};

/* harmony default export */ __webpack_exports__["default"] = (SocialLinks);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_styles_homepage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/homepage.css */ "./assets/styles/homepage.css");
/* harmony import */ var _assets_styles_homepage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_homepage_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_navLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navLinks */ "./components/navLinks.js");
/* harmony import */ var _components_socialOverlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/socialOverlay */ "./components/socialOverlay.js");
var _jsxFileName = "/Users/raghav/repos/raghavsharma.info/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Index = function Index() {
  var roles = ["Frontend Developer", "Backend Developer", "Data Analyst", "Web Analytics Implementor", "Continous Learner"];
  var role = roles[Math.floor(Math.random() * roles.length)];
  return __jsx("main", {
    className: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "name-introduction",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Raghav Sharma"), __jsx("div", {
    className: "role",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "I am ", role)), __jsx("div", {
    className: "nav-links-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_components_navLinks__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "for": "homepage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("div", {
    className: "social-overlay-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_components_socialOverlay__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "for": "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.a663b51269dcc1d49922.hot-update.js.map