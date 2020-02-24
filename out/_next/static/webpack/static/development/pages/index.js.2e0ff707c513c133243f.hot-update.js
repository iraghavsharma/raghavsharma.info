webpackHotUpdate("static/development/pages/index.js",{

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

var _jsxFileName = "/Users/raghav/repos/raghavsharma.info/components/navLinks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var NavLinks = function NavLinks(props) {
  var list = props["for"] ? _assets_json_navlinks_json__WEBPACK_IMPORTED_MODULE_2__[props["for"]] : _assets_json_navlinks_json__WEBPACK_IMPORTED_MODULE_2__;
  var link_list = list.map(function (list) {
    if (list.type == "link") {
      __jsx(AtomLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, list, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }));
    } else if (list.type == "button") {
      __jsx(AtomButton, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, list, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }));
    }
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "foobar");
};

/* harmony default export */ __webpack_exports__["default"] = (NavLinks);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=index.js.2e0ff707c513c133243f.hot-update.js.map