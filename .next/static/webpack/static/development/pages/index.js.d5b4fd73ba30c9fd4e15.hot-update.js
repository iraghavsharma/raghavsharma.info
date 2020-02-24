webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/atoms/link.js":
/*!**********************************!*\
  !*** ./components/atoms/link.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/raghav/repos/raghavsharma.info/components/atoms/link.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var AtomLink = function AtomLink(props) {
  console.log("Atom Link Props", props);
  return __jsx("div", {
    className: "link link-container__".concat(prop.sid),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("a", {
    id: props.id,
    href: props.href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_json_navlinks_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/json/navlinks.json */ "./assets/json/navlinks.json");
var _assets_json_navlinks_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/json/navlinks.json */ "./assets/json/navlinks.json", 1);
/* harmony import */ var _atoms_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atoms/link */ "./components/atoms/link.js");

var _jsxFileName = "/Users/raghav/repos/raghavsharma.info/components/navLinks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var NavLinks = function NavLinks(props) {
  var list = props["for"] ? _assets_json_navlinks_json__WEBPACK_IMPORTED_MODULE_2__[props["for"]] : _assets_json_navlinks_json__WEBPACK_IMPORTED_MODULE_2__;
  var link_list = list.map(function (list) {
    if (list.type == "link") {
      return __jsx(_atoms_link__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, list, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }));
    }
    /*else if(list.type =="button"){
        <AtomButton {...list} />
    }*/

  });
  return __jsx("div", {
    className: "nav-links link-for__".concat(props["for"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, link_list);
};

/* harmony default export */ __webpack_exports__["default"] = (NavLinks);

/***/ })

})
//# sourceMappingURL=index.js.d5b4fd73ba30c9fd4e15.hot-update.js.map