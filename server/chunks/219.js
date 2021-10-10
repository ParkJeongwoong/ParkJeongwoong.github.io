exports.id = 219;
exports.ids = [219];
exports.modules = {

/***/ 5219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6645);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styles_components_Articles_Category_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1143);
/* harmony import */ var styles_components_Articles_Category_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_components_Articles_Category_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







function Article__Category() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(); // 전역 상태 관리 (store)

  const globalState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(store_store__WEBPACK_IMPORTED_MODULE_1__/* .store */ .h);
  const {
    value,
    dispatch
  } = globalState;
  const {
    articles
  } = value;

  const selectCategory = event => {
    if (router.pathname !== "/articles") {
      router.push({
        pathname: "/articles"
      });
    }

    dispatch({
      type: "SELECT_CATEGORY",
      value: parseInt(event.target.getAttribute("value"))
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: (styles_components_Articles_Category_module_css__WEBPACK_IMPORTED_MODULE_4___default().Articles__Category),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
      children: "Articles"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (styles_components_Articles_Category_module_css__WEBPACK_IMPORTED_MODULE_4___default().Category__Button),
      onClick: selectCategory,
      value: "-1",
      children: "\uC804\uCCB4\uBCF4\uAE30"
    }), articles.categoryList.map((article_type, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (styles_components_Articles_Category_module_css__WEBPACK_IMPORTED_MODULE_4___default().Category__Button),
      onClick: selectCategory,
      value: article_type.id,
      children: article_type.category
    }, idx))]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article__Category);

/***/ }),

/***/ 1143:
/***/ ((module) => {

// Exports
module.exports = {
	"Articles__Category": "Articles__Category_Articles__Category__1_NlT",
	"Category__Button": "Articles__Category_Category__Button__3V-jx"
};


/***/ })

};
;