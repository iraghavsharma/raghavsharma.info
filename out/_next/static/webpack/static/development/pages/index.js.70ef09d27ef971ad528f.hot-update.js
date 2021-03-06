webpackHotUpdate("static/development/pages/index.js",{

/***/ "./assets/json/navLinks.json":
/*!***********************************!*\
  !*** ./assets/json/navLinks.json ***!
  \***********************************/
/*! exports provided: homepage, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"homepage\":[{\"id\":\"hp-profile\",\"name\":\"Profile\",\"href\":\"/profile\",\"type\":\"link\"},{\"id\":\"hp-portfolio\",\"name\":\"Portfolio\",\"href\":\"/portfolio\",\"type\":\"link\"},{\"id\":\"hp-blog\",\"name\":\"Blog\",\"href\":\"/blog\",\"type\":\"link\"},{\"id\":\"hp-connect\",\"name\":\"Connect\",\"href\":\"/connect\",\"type\":\"link\"}]}");

/***/ }),

/***/ "./assets/json/navlinks.json":
false,

/***/ "./components/navLinks.js":
/*!********************************!*\
  !*** ./components/navLinks.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_json_navLinks_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/json/navLinks.json */ "./assets/json/navLinks.json");
var _assets_json_navLinks_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/json/navLinks.json */ "./assets/json/navLinks.json", 1);
/* harmony import */ var _atoms_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atoms/link */ "./components/atoms/link.js");
/* harmony import */ var _atoms_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./atoms/button */ "./components/atoms/button.js");

var _jsxFileName = "/Users/raghav/repos/raghavsharma.info/components/navLinks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var NavLinks = function NavLinks(props) {
  var list = props["for"] ? _assets_json_navLinks_json__WEBPACK_IMPORTED_MODULE_2__[props["for"]] : _assets_json_navLinks_json__WEBPACK_IMPORTED_MODULE_2__;
  var link_list = list.map(function (list) {
    if (list.type == "link") {
      return __jsx(_atoms_link__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, list, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }));
    } else if (list.type == "button") {
      __jsx(_atoms_button__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, list, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }));
    }
  });
  return __jsx("div", {
    className: "nav-links link-for__".concat(props["for"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, link_list);
};

/* harmony default export */ __webpack_exports__["default"] = (NavLinks);

/***/ })

})
//# sourceMappingURL=index.js.70ef09d27ef971ad528f.hot-update.js.map