webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/socialLinksTray.js":
/*!***************************************!*\
  !*** ./components/socialLinksTray.js ***!
  \***************************************/
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

var _jsxFileName = "/Users/raghav/repos/raghavsharma.info/components/socialLinksTray.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var SocialLinksTray = function SocialLinksTray(props) {
  var link_list = _assets_json_socialLinks_json__WEBPACK_IMPORTED_MODULE_2__.map(function (links) {
    return __jsx(_atoms_link__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: links.id
    }, links, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }));
  });
  return __jsx("div", {
    className: "social-links-tray link-for__social-overlay-tray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, link_list);
};

/* harmony default export */ __webpack_exports__["default"] = (SocialLinksTray);

/***/ })

})
//# sourceMappingURL=index.js.2799fcfbcb0232a8b01e.hot-update.js.map