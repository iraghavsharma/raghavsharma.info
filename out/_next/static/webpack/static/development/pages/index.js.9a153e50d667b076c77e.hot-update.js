webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/socialLinks.js":
/*!***********************************!*\
  !*** ./components/socialLinks.js ***!
  \***********************************/
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

var _jsxFileName = "/Users/raghav/repos/raghavsharma.info/components/socialLinks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var SocialLinks = function SocialLinks(props) {
  var list = props["for"] ? _assets_json_socialLinks_json__WEBPACK_IMPORTED_MODULE_2__[props["for"]] : _assets_json_socialLinks_json__WEBPACK_IMPORTED_MODULE_2__;
  var link_list = list.map(function (list) {
    return __jsx(_atoms_link__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      id: list.id
    }, list, {
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

/***/ })

})
//# sourceMappingURL=index.js.9a153e50d667b076c77e.hot-update.js.map