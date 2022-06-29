(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if ( false || !router) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  _s();

  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( true ? "\nOpen your browser's console to view the Component stack trace." : 0));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( true ? " \nOpen your browser's console to view the Component stack trace." : 0));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

_s(Link, "PYHstBoZE4p1pf5wc1Vw4fTzvCU=", true);

_c = Link;
var _default = Link;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Link");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  _s();

  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

_s(useIntersection, "Z6jj7qx+KE6gD9CpC9WlQTha45o=");

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_components_Footer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/components/Footer.module.css */ "./src/styles/components/Footer.module.css");
/* harmony import */ var styles_components_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styles_components_Footer_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\dvlprjw\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\works\\Blog\\frontend\\blog-ssr\\src\\components\\Footer\\Footer.js";




function Footer() {
  // Email 복사
  const copyEmail = () => {
    const textarea = document.createElement("textarea");
    textarea.value = "dvlprjw@gmail.com";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Copied!");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (styles_components_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().Footer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (styles_components_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().Footer__github),
      children: ["Github : ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        href: "https://github.com/ParkJeongwoong",
        children: "ParkJeongwoong"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 18
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (styles_components_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().Footer__email),
      children: ["Contact : ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        onClick: copyEmail,
        children: "dvlprjw@gmail.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 19
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/components/Header.module.css */ "./src/styles/components/Header.module.css");
/* harmony import */ var styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\dvlprjw\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\works\\Blog\\frontend\\blog-ssr\\src\\components\\Header\\Header.js",
    _s = $RefreshSig$();






function Header() {
  _s();

  const {
    0: onMove,
    1: setOnMove
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  function logoAnimation(event) {
    if (!onMove) {
      setOnMove(true);
      const element = event.target;
      const animationType = parseInt(Math.random() * 1000 % 10) % 3;

      function endAnimation() {
        element.className = `${(styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo)}`;
      }

      if (animationType) {
        if (animationType === 1) {
          element.className = `${(styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().slideOutLeft)}`;
          element.addEventListener("animationend", endAnimation);
        } else {
          element.className = `${(styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().hinge)}`;
          element.addEventListener("animationend", endAnimation);
        }

        setTimeout(() => {
          element.className = `${(styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().zoomInDown)}`;
          element.addEventListener("animationend", endAnimation);
        }, 900);
      } else {
        element.className = `${(styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().bounce)}`;
        element.addEventListener("animationend", endAnimation);
      }

      setOnMove(false);
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().Header),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().Header__styling),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        src: "/myLogo_transp.png",
        alt: "logo",
        onClick: logoAnimation
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        className: (styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().Header__word),
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/profile",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        className: (styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().Header__word),
        children: "Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/articles",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        className: (styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().Header__word),
        children: "Articles"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/archives",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        className: (styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().Header__word),
        children: "Archives"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().Header__styling_Reverse)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

_s(Header, "Qsk9Uuxbv53hyzEgjR7U/zddqwc=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_dvlprjw_OneDrive_works_Blog_frontend_blog_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/store */ "./src/store/store.js");
/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\dvlprjw\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\works\\Blog\\frontend\\blog-ssr\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_dvlprjw_OneDrive_works_Blog_frontend_blog_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(store_store__WEBPACK_IMPORTED_MODULE_3__.StateProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "App",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "App__Content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(components_Header_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/store/archive_data.js":
/*!***********************************!*\
  !*** ./src/store/archive_data.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
const archives = [// Github Blog
{
  id: 0,
  title: "Github Blog",
  details: [{
    id: 0,
    date: "2021-08-24",
    images: ["/archives/blog/1-1.png", "/archives/blog/1-2.png"],
    content: "블로그 개발 시작\n사용 기술: React js"
  }, {
    id: 1,
    date: "2021-08-25",
    images: ["/archives/blog/2-1.png", "/archives/blog/2-2.png", "/archives/blog/2-3.png"],
    content: "Home, Archives 정리 및 Footer 위치 조정"
  }, {
    id: 2,
    date: "2021-08-25",
    images: ["/archives/blog/3-1.png", "/archives/blog/3-2.png", "/archives/blog/3-3.png", "/archives/blog/3-4.png"],
    content: "Articles 구현\nLocal의 Markdown File을 불러와서 출력하는 방식 사용"
  }, {
    id: 3,
    date: "2021-08-30",
    images: [],
    content: "GitHub 배포 시 url 접근이 안 되는 문제 해결\n참조: https://iamsjy17.github.io/react/2018/11/04/githubpage-SPA.html\nhttps://github.com/rafgraph/spa-github-pages"
  }, {
    id: 4,
    date: "2021-09-20",
    images: ["/archives/blog/5-1.png", "/archives/blog/5-2.png", "/archives/blog/5-3.png", "/archives/blog/5-4.png"],
    content: "디자인 정리 및 반응형 웹 구현"
  }, {
    id: 5,
    date: "2021-09-29",
    images: ["/archives/blog/6-1.png"],
    content: "로고 제작"
  }, {
    id: 6,
    date: "2021-10-04",
    images: ["/archives/blog/7-1.png"],
    content: "Google Search Console 등록"
  }, {
    id: 7,
    date: "2021-10-10",
    images: ["/archives/blog/8-1.jpg"],
    content: "Next.js 전환 완료"
  }, {
    id: 8,
    date: "2021-12-11",
    images: ["/archives/blog/9-1.jpg", "/archives/blog/9-2.jpg", "/archives/blog/9-3.jpg", "/archives/blog/9-4.jpg"],
    content: "Header 및 Articles 페이지 Layout 수정 (뒤의 사진 2장이 구버전)"
  }, {
    id: 9,
    date: "2021-12-12",
    images: ["/archives/blog/10-1.jpg"],
    content: "폰트 변경"
  }, {
    id: 10,
    date: "2021-12-13",
    images: ["/archives/blog/11-1.jpg", "/archives/blog/11-2.jpg"],
    content: "모바일 버전 카테고리 메뉴 토글 기능 추가"
  }, {
    id: 11,
    date: "2022-02-08",
    images: ["/archives/blog/12-1.jpg"],
    content: "EC2 Web Application Server와 연결 성공"
  }, {
    id: 12,
    date: "2022-02-12",
    images: ["/archives/blog/13-1.jpg"],
    content: "Articles의 카테고리 안에 서브 카테고리 추가"
  }, {
    id: 13,
    date: "2022-02-14",
    images: ["/archives/blog/14-1.jpg"],
    content: "페이지네이션 기능 추가\n페이지네이션 기능 추가 후 검색 기능의 필요성을 느낌 (더이상 Ctrl+f를 통한 글 검색이 불가능)"
  }, {
    id: 14,
    date: "2022-04-04",
    images: ["/archives/blog/15-1.jpg", "/archives/blog/15-2.jpg"],
    content: "인덱스 기능 추가 (실시간 위치 표시 / 해당 위치로 이동)"
  }]
}, // BITZ
{
  id: 1,
  title: "BITZ",
  details: [{
    id: 0,
    date: "2021-07.05 ~ 2021-08-16",
    images: ["/archives/bitz/0.jpg", "/archives/bitz/1.jpg"],
    content: "농구 픽업 게임 플랫폼 BITZ 제작"
  }]
} // // DAOU Internship
// {
//   id: 2,
//   title: "Internship",
//   details: [
//     {
//       id: 0,
//       date: "2021-08.17 ~ 2021-09-10",
//       images: [],
//       content: "다우기술 금융개발 직무 (키움증권) 인턴\n",
//     },
//   ],
// },
];
/* harmony default export */ __webpack_exports__["default"] = (archives);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/store/article_data.js":
/*!***********************************!*\
  !*** ./src/store/article_data.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _article_data_CS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article_data/CS.js */ "./src/store/article_data/CS.js");
/* harmony import */ var _article_data_Develop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article_data/Develop.js */ "./src/store/article_data/Develop.js");
/* harmony import */ var _article_data_Web_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article_data/Web.js */ "./src/store/article_data/Web.js");
/* harmony import */ var _article_data_BlockChain_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article_data/BlockChain.js */ "./src/store/article_data/BlockChain.js");
/* harmony import */ var _article_data_Failure_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article_data/Failure.js */ "./src/store/article_data/Failure.js");
/* harmony import */ var _article_data_Studied_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article_data/Studied.js */ "./src/store/article_data/Studied.js");
/* harmony import */ var _article_data_Algorithm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article_data/Algorithm.js */ "./src/store/article_data/Algorithm.js");
/* module decorator */ module = __webpack_require__.hmd(module);







const articles = {
  categoryId: -1,
  subCategoryId: -1,
  categoryList: [{
    id: 0,
    category: "Develop",
    subCategory: _article_data_CS_js__WEBPACK_IMPORTED_MODULE_0__.CS_SubCategory,
    itemList: _article_data_Develop_js__WEBPACK_IMPORTED_MODULE_1__.Develop
  }, {
    id: 1,
    category: "CS",
    subCategory: _article_data_Develop_js__WEBPACK_IMPORTED_MODULE_1__.Develop_SubCategory,
    itemList: _article_data_CS_js__WEBPACK_IMPORTED_MODULE_0__.CS
  }, {
    id: 2,
    category: "Web",
    subCategory: _article_data_Web_js__WEBPACK_IMPORTED_MODULE_2__.Web_SubCategory,
    itemList: _article_data_Web_js__WEBPACK_IMPORTED_MODULE_2__.Web
  }, {
    id: 3,
    category: "BlockChain",
    subCategory: _article_data_BlockChain_js__WEBPACK_IMPORTED_MODULE_3__.BlockChain_SubCategory,
    itemList: _article_data_BlockChain_js__WEBPACK_IMPORTED_MODULE_3__.BlockChain
  }, {
    id: 4,
    category: "Algorithm",
    subCategory: _article_data_Algorithm_js__WEBPACK_IMPORTED_MODULE_6__.Algorithm_SubCategory,
    itemList: _article_data_Algorithm_js__WEBPACK_IMPORTED_MODULE_6__.Algorithm
  }, {
    id: 5,
    category: "Studied",
    subCategory: _article_data_Studied_js__WEBPACK_IMPORTED_MODULE_5__.Studied_SubCategory,
    itemList: _article_data_Studied_js__WEBPACK_IMPORTED_MODULE_5__.Studied
  }, {
    id: 6,
    category: "Failure",
    subCategory: _article_data_Failure_js__WEBPACK_IMPORTED_MODULE_4__.Failure_SubCategory,
    itemList: _article_data_Failure_js__WEBPACK_IMPORTED_MODULE_4__.Failure
  }],
  page_from: 0,
  page_to: 10
};
/* harmony default export */ __webpack_exports__["default"] = (articles);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/store/article_data/Algorithm.js":
/*!*********************************************!*\
  !*** ./src/store/article_data/Algorithm.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Algorithm": function() { return /* binding */ Algorithm; },
/* harmony export */   "Algorithm_SubCategory": function() { return /* binding */ Algorithm_SubCategory; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
const Algorithm = [{
  category: "Algorithm",
  subCategory: "",
  id: 0,
  title: "알고리즘 & 자료구조 정리",
  date: new Date("2022-03-31"),
  content: "store/article_data/Algorithm/20220331_Algorithm_and_Data_Structure.md"
}, {
  category: "Algorithm",
  subCategory: "",
  id: 1,
  title: "유형별 알고리즘 문제 정리 (목차)",
  date: new Date("2022-04-01"),
  content: "store/article_data/Algorithm/20220401_Algorithm_Index.md"
}, {
  category: "Algorithm",
  subCategory: "",
  id: 2,
  title: "Dynamic Programming 유형",
  date: new Date("2022-04-02"),
  content: "store/article_data/Algorithm/20220402_Algorithm_DP.md"
}, {
  category: "Algorithm",
  subCategory: "",
  id: 3,
  title: "DFS & BFS 유형",
  date: new Date("2022-04-29"),
  content: "store/article_data/Algorithm/20220429_Algorithm_DFS_BFS.md"
}, {
  category: "Algorithm",
  subCategory: "",
  id: 4,
  title: "그리디 유형",
  date: new Date("2022-05-05"),
  content: "store/article_data/Algorithm/20220505_Algorithm_Greedy.md"
}, {
  category: "Algorithm",
  subCategory: "",
  id: 5,
  title: "이분 탐색 유형",
  date: new Date("2022-05-15"),
  content: "store/article_data/Algorithm/20220515_Algorithm_Binary_Search.md"
}];
const Algorithm_SubCategory = [];


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/store/article_data/BlockChain.js":
/*!**********************************************!*\
  !*** ./src/store/article_data/BlockChain.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockChain": function() { return /* binding */ BlockChain; },
/* harmony export */   "BlockChain_SubCategory": function() { return /* binding */ BlockChain_SubCategory; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
const BlockChain = [{
  category: "BlockChain",
  subCategory: "",
  id: 0,
  title: "블록체인을 공부하기로 마음먹은 계기",
  date: new Date("2021-11-27"),
  content: "store/article_data/BlockChain/20211127_BlockChain_Intro.md"
}, {
  category: "BlockChain",
  subCategory: "",
  id: 1,
  title: "[블록체인] 개념정리",
  date: new Date("2021-11-29"),
  content: "store/article_data/BlockChain/20211129_BlockChain_Concept.md"
}, {
  category: "BlockChain",
  subCategory: "",
  id: 2,
  title: "[블록체인] 작업증명",
  date: new Date("2021-12-02"),
  content: "store/article_data/BlockChain/20211202_BlockChain_POW.md"
}, {
  category: "BlockChain",
  subCategory: "",
  id: 3,
  title: "[블록체인] 지분증명",
  date: new Date("2021-12-07"),
  content: "store/article_data/BlockChain/20211207_BlockChain_POS.md"
}];
const BlockChain_SubCategory = [];


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/store/article_data/CS.js":
/*!**************************************!*\
  !*** ./src/store/article_data/CS.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CS": function() { return /* binding */ CS; },
/* harmony export */   "CS_SubCategory": function() { return /* binding */ CS_SubCategory; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
const CS = [{
  category: "CS",
  subCategory: "",
  id: 0,
  title: "Data Link Control",
  date: new Date("2021-09-02"),
  content: "store/article_data/CS/20210902_Data_Link_Control.md"
}, {
  category: "CS",
  subCategory: "",
  id: 1,
  title: "High-level Data Link Control (HDLC)",
  date: new Date("2021-09-04"),
  content: "store/article_data/CS/20210904_HDLC.md"
}];
const CS_SubCategory = [];


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/store/article_data/Develop.js":
/*!*******************************************!*\
  !*** ./src/store/article_data/Develop.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Develop": function() { return /* binding */ Develop; },
/* harmony export */   "Develop_SubCategory": function() { return /* binding */ Develop_SubCategory; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
const Develop = [{
  category: "Develop",
  subCategory: "",
  id: 0,
  title: "마크다운 테스트",
  date: new Date("2021-08-25"),
  content: "store/article_data/Develop/20210825_markdown_test.md"
}, {
  category: "Develop",
  subCategory: "",
  id: 1,
  title: "[GitHub Blog 개발기] 정리할 내용 목록",
  date: new Date("2021-09-01"),
  content: "store/article_data/Develop/20210901_GitHubBlog.md"
}, {
  category: "Develop",
  subCategory: "",
  id: 2,
  title: "[GitHub Blog 개발기] 개발일지",
  date: new Date("2021-09-27"),
  content: "store/article_data/Develop/20210927_GitHubBlog.md"
}, {
  category: "Develop",
  subCategory: "",
  id: 3,
  title: "[GitHub Blog 개발기] Markdown 적용 및 Require 함수",
  date: new Date("2021-09-28"),
  content: "store/article_data/Develop/20210928_GitHubBlog.md"
}, {
  category: "Develop",
  subCategory: "",
  id: 4,
  title: "[GitHub Blog 개발기] 구글 검색 등록 & SEO 구현(1)",
  date: new Date("2021-10-05"),
  content: "store/article_data/Develop/20211005_GitHubBlog_seo_1.md"
}, {
  category: "Develop",
  subCategory: "",
  id: 5,
  title: "[GitHub Blog 개발기] SEO 구현(2) - Next.js app",
  date: new Date("2021-10-06"),
  content: "store/article_data/Develop/20211006_GitHubBlog_seo_2.md"
}, {
  category: "Develop",
  subCategory: "",
  id: 6,
  title: "[GitHub Blog 개발기] SEO 구현(3) - Next.js app",
  date: new Date("2021-10-07"),
  content: "store/article_data/Develop/20211007_GitHubBlog_seo_3.md"
}, {
  category: "Develop",
  subCategory: "",
  id: 7,
  title: "[GitHub Blog 개발기] sitemap, 게시글 등록 자동화 (Shell Script)",
  date: new Date("2021-10-28"),
  content: "store/article_data/Develop/20211028_GitHubBlog_auto_script.md"
}, {
  category: "Develop",
  subCategory: "",
  id: 8,
  title: "[GitHub Blog 개발기] Markdown Index 구현 (TOC)",
  date: new Date("2022-04-05"),
  content: "store/article_data/Develop/20220405_GitHubBlog_Index.md"
}, {
  category: "Develop",
  subCategory: "",
  id: 9,
  title: "구글 사이트맵 갱신하기",
  date: new Date("2022-05-06"),
  content: "store/article_data/Develop/20220506_Sitemap_Renew.md"
}, {
  category: "Develop",
  subCategory: "",
  id: 10,
  title: "[GitHub Blog 개발기] 서버 마이그레이션 (AWS => 라즈베리파이 => 오라클 클라우드)",
  date: new Date("2022-05-20"),
  content: "store/article_data/Develop/20220520_GitHubBlog_Server_Migration.md"
}];
const Develop_SubCategory = [];


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/store/article_data/Failure.js":
/*!*******************************************!*\
  !*** ./src/store/article_data/Failure.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Failure": function() { return /* binding */ Failure; },
/* harmony export */   "Failure_SubCategory": function() { return /* binding */ Failure_SubCategory; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
const Failure = [{
  category: "Failure",
  subCategory: "",
  id: 0,
  title: "[Spring Boot 프로젝트] HTTPS 설정 실패",
  date: new Date("2022-02-02"),
  content: "store/article_data/Failure/20220202_Failure_HTTPS_AWS.md"
}, {
  category: "Failure",
  subCategory: "",
  id: 1,
  title: "[Spring Boot] JPA에서 Group By 후 null값 문제 해결",
  date: new Date("2022-04-23"),
  content: "store/article_data/Failure/20220423_Failure_JPA_NativeQuery_JPQL.md"
}, {
  category: "Failure",
  subCategory: "",
  id: 2,
  title: "Certbot 갱신 (ERR_CERT_DATE_INVALID)",
  date: new Date("2022-05-09"),
  content: "store/article_data/Failure/20220509_Failure_Certbot_Renew.md"
}];
const Failure_SubCategory = [];


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/store/article_data/Studied.js":
/*!*******************************************!*\
  !*** ./src/store/article_data/Studied.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Studied": function() { return /* binding */ Studied; },
/* harmony export */   "Studied_SubCategory": function() { return /* binding */ Studied_SubCategory; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
const Studied = [{
  category: "Studied",
  subCategory: "CleanCode",
  id: 0,
  title: "[CleanCode] 네이밍",
  date: new Date("2022-02-12"),
  content: "store/article_data/Studied/CleanCode/20220212_CleanCode_Naming.md"
}, {
  category: "Studied",
  subCategory: "CleanCode",
  id: 1,
  title: "[CleanCode] 함수",
  date: new Date("2022-02-22"),
  content: "store/article_data/Studied/CleanCode/20220222_CleanCode_Function.md"
}, {
  category: "Studied",
  subCategory: "CleanCode",
  id: 2,
  title: "[CleanCode] 주석",
  date: new Date("2022-03-02"),
  content: "store/article_data/Studied/CleanCode/20220302_CleanCode_Annotation.md"
}, {
  category: "Studied",
  subCategory: "CleanCode",
  id: 3,
  title: "[CleanCode] 형식 (Formatting)",
  date: new Date("2022-04-21"),
  content: "store/article_data/Studied/CleanCode/20220421_CleanCode_Formatting.md"
}, {
  category: "Studied",
  subCategory: "CleanCode",
  id: 4,
  title: "[CleanCode] 객체와 자료구조",
  date: new Date("2022-06-04"),
  content: "store/article_data/Studied/CleanCode/20220604_CleanCode_Object_and_Structure.md"
}, {
  category: "Studied",
  subCategory: "CleanCode",
  id: 5,
  title: "[CleanCode] 오류 처리",
  date: new Date("2022-06-28"),
  content: "store/article_data/Studied/CleanCode/20220628_CleanCode_Error_Handling.md"
}];
const Studied_SubCategory = ["CleanCode"];


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/store/article_data/Web.js":
/*!***************************************!*\
  !*** ./src/store/article_data/Web.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Web": function() { return /* binding */ Web; },
/* harmony export */   "Web_SubCategory": function() { return /* binding */ Web_SubCategory; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
const Web = [{
  category: "Web",
  subCategory: "",
  id: 0,
  title: "[Spring] Bean이란?",
  date: new Date("2021-10-13"),
  content: "store/article_data/Web/20211013_Spring_Bean.md"
}, {
  category: "Web",
  subCategory: "",
  id: 1,
  title: "[Spring] 의존 객체 자동 주입이란?",
  date: new Date("2021-10-17"),
  content: "store/article_data/Web/20211017_Spring_Automatic_Dependency_Injection.md"
}, {
  category: "Web",
  subCategory: "",
  id: 2,
  title: "[TIP] a 태그 줄바꿈 문제",
  date: new Date("2021-10-18"),
  content: "store/article_data/Web/20211018_a_tag_word_break.md"
}, {
  category: "Web",
  subCategory: "",
  id: 3,
  title: "[Spring Boot 프로젝트] 프로젝트 생성하기 (Eclipse)",
  date: new Date("2021-10-29"),
  content: "store/article_data/Web/20211029_SpringBoot_AWS.md"
}, {
  category: "Web",
  subCategory: "",
  id: 4,
  title: "[Spring] 생명주기 (Life Cycle)",
  date: new Date("2021-11-04"),
  content: "store/article_data/Web/20211104_Spring_Life_Cycle.md"
}, {
  category: "Web",
  subCategory: "",
  id: 5,
  title: "[Spring] Spring 설정 - Java Config",
  date: new Date("2021-11-09"),
  content: "store/article_data/Web/20211109_Spring_Setting_w_Annotation.md"
}, {
  category: "Web",
  subCategory: "",
  id: 6,
  title: "[Spring] Spring Project 시작",
  date: new Date("2021-11-14"),
  content: "store/article_data/Web/20211114_Spring_Web_Service.md"
}, {
  category: "Web",
  subCategory: "",
  id: 7,
  title: "[Spring] Spring Project 구조",
  date: new Date("2021-11-15"),
  content: "store/article_data/Web/20211115_Spring_Project_Structure.md"
}, {
  category: "Web",
  subCategory: "",
  id: 8,
  title: "[Spring] UTF-8 한글 인코딩 설정, Service 객체",
  date: new Date("2021-11-19"),
  content: "store/article_data/Web/20211119_Spring_Encofing_Service_Dao.md"
}, {
  category: "Web",
  subCategory: "",
  id: 9,
  title: "[Spring] Controller 객체",
  date: new Date("2021-11-30"),
  content: "store/article_data/Web/20211130_Spring_Controller.md"
}, {
  category: "Web",
  subCategory: "",
  id: 10,
  title: "[Spring] 세션 & 쿠키",
  date: new Date("2021-12-16"),
  content: "store/article_data/Web/20211216_Spring_Session_Cookie.md"
}, {
  category: "Web",
  subCategory: "",
  id: 11,
  title: "[Spring] 리다이렉트 & 인터셉터",
  date: new Date("2021-12-18"),
  content: "store/article_data/Web/20211218_Spring_Redirect_Intercept.md"
}, {
  category: "Web",
  subCategory: "",
  id: 12,
  title: "[Spring] Controller, Service, DAO, DTO, Domain",
  date: new Date("2021-12-21"),
  content: "store/article_data/Web/20211221_Spring_Controller_Service_Dao_Dto_Domain.md"
}, {
  category: "Web",
  subCategory: "",
  id: 13,
  title: "[Spring] Database",
  date: new Date("2021-12-26"),
  content: "store/article_data/Web/20211226_Spring_Database.md"
}, {
  category: "Web",
  subCategory: "",
  id: 14,
  title: "[Spring] JDBC",
  date: new Date("2021-12-28"),
  content: "store/article_data/Web/20211228_Spring_JDBC.md"
}, {
  category: "Web",
  subCategory: "",
  id: 15,
  title: "[Spring] Connection Pool과 JDBC Template",
  date: new Date("2022-01-02"),
  content: "store/article_data/Web/20220102_Spring_JDBC_Template_DBCP.md"
}, {
  category: "Web",
  subCategory: "",
  id: 16,
  title: "[Spring] Build : Maven과 Gradle",
  date: new Date("2022-01-04"),
  content: "store/article_data/Web/20220104_Spring_Build.md"
}, {
  category: "Web",
  subCategory: "",
  id: 17,
  title: "[AWS] AWS Route53 호스팅 영역 요금",
  date: new Date("2022-02-08"),
  content: "store/article_data/Web/20220208_AWS_Route53_Hosting.md"
}, {
  category: "Web",
  subCategory: "",
  id: 18,
  title: "[Spring] JNDI",
  date: new Date("2022-03-09"),
  content: "store/article_data/Web/20220309_Spring_JNDI.md"
}, {
  category: "Web",
  subCategory: "",
  id: 19,
  title: "비밀번호",
  date: new Date("2022-03-24"),
  content: "store/article_data/Web/20220324_Secure_Password.md"
}, {
  category: "Web",
  subCategory: "",
  id: 20,
  title: "[Spring Boot 프로젝트] 스프링 코드 구조 알아보기",
  date: new Date("2022-04-17"),
  content: "store/article_data/Web/20220417_SpringBoot_AWS_Structure.md"
}, {
  category: "Web",
  subCategory: "",
  id: 21,
  title: "클린 아키텍처 연습 (SpringBoot)",
  date: new Date("2022-06-14"),
  content: "store/article_data/Web/20220614_Clean_Architecture.md"
}];
const Web_SubCategory = [];


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/store/home_data.js":
/*!********************************!*\
  !*** ./src/store/home_data.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
const home = {
  profile_img: "/images/profile2.jpg",
  summary: "Yonsei Univ.\n\tMaterial Science & Engineering\nKATUSA, USFK\n\tUnited States Forces Korea\nSK Hynix\n\tNAND Flash CMP Engineering\nSSAFY\n\tSamsung SW Academy For Youth\nDAOU Tech.\n: KIWOOM Securities\n\tFinancial SW Developer",
  welcome_word: "안녕하세요! 금융 IT 개발자 박정웅입니다!",
  introduction: "공부한 내용을 기록하고 포트폴리오를 정리하는 개인 블로그입니다.\n끊임없이 배우고 성장하는 것을 즐겨 반도체 엔지니어에서 개발자로 전직했습니다.\n효율적이고 깔끔한 코드에 관심이 많습니다.\n피아노, 운동, 여행을 좋아합니다."
};
/* harmony default export */ __webpack_exports__["default"] = (home);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/store/profile_data.js":
/*!***********************************!*\
  !*** ./src/store/profile_data.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
const profile = {
  introduction: "Web 기술에 관심을 가지고 있는 금융 IT 개발자입니다.\n신소재공학을 전공하고 반도체 기업의 엔지니어로 근무했습니다.\n배우고 성장하는 것을 즐겨 반도체 엔지니어에서 개발자로 전직했습니다.",
  tech_stack: {
    frontend: ["/tech_stack/javascript.png", "/tech_stack/react.png", "/tech_stack/vue.png", "/tech_stack/nextjs.png"],
    backend: ["/tech_stack/python.png", "/tech_stack/django.png", "/tech_stack/java.png", "/tech_stack/spring.png", "/tech_stack/c.png", "/tech_stack/oracle.png"],
    version_control: ["/tech_stack/git.png"],
    studying: ["/tech_stack/mysql.png", "/tech_stack/cpp.png"]
  },
  career: [{
    name: "다우기술 - 키움증권",
    content: "금융개발직무 (2021-현재)\n- 영웅문S# 개발 참여\n- 매매운영팀"
  }, {
    name: "삼성 청년 SW 아카데미",
    content: "Web 개발 교육 (2021)"
  }, {
    name: "SK Hynix",
    content: "NAND Flash CMP 공정기술팀 근무 (2019)"
  }, {
    name: "KATUSA",
    content: "주한미군사령부 작전참모부 복무 (2015-2017)"
  }, {
    name: "연세대학교",
    content: "신소재공학 전공 (2013-2019)"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (profile);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; },
/* harmony export */   "StateProvider": function() { return /* binding */ StateProvider; }
/* harmony export */ });
/* harmony import */ var C_Users_dvlprjw_OneDrive_works_Blog_frontend_blog_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home_data */ "./src/store/home_data.js");
/* harmony import */ var _profile_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile_data */ "./src/store/profile_data.js");
/* harmony import */ var _article_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article_data */ "./src/store/article_data.js");
/* harmony import */ var _archive_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./archive_data */ "./src/store/archive_data.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\dvlprjw\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\works\\Blog\\frontend\\blog-ssr\\src\\store\\store.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_dvlprjw_OneDrive_works_Blog_frontend_blog_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 // Store - (1) 초기값 설정 *****


const initialState = {
  home: {},
  profile: {},
  articles: {},
  archives: [],
  pageData: {}
}; // Store - (2) 초기값을 넣은 Context 생성 *****

const store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState); // Store - (3) 위의 Context와 관련된 Provider 생성 : Index.js 용도 (모든 컴포넌트에서 Store 접근 가능하게 만드는 역할)

const {
  Provider
} = store; // Store - (4) 위에서 만든 Provider를 Return하는 React Component : React 관련 내용물은 항상 React Component 형식이 필요

const StateProvider = ({
  children
}) => {
  _s();

  // Store - (5) useReducer를 사용해 value와 value를 업데이트하는 dispatch 생성 *****
  const {
    0: value,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)((state, action) => {
    switch (action.type) {
      // Home Data 가져오기
      case "GET_HOME":
        const home = _home_data__WEBPACK_IMPORTED_MODULE_2__.default;
        return _objectSpread(_objectSpread({}, state), {}, {
          home
        });
      // Profile Data 가져오기

      case "GET_PROFILE":
        const profile = _profile_data__WEBPACK_IMPORTED_MODULE_3__.default;
        return _objectSpread(_objectSpread({}, state), {}, {
          profile
        });
      // Article Data 가져오기

      case "GET_ARTICLES":
        const articles = _article_data__WEBPACK_IMPORTED_MODULE_4__.default;

        if (state.articles.categoryId != null && state.articles.categoryId !== -1) {
          articles.categoryId = state.articles.categoryId;
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          articles
        });
      // Archive Data 가져오기

      case "GET_ARCHIVES":
        const archives = _archive_data__WEBPACK_IMPORTED_MODULE_5__.default;
        return _objectSpread(_objectSpread({}, state), {}, {
          archives
        });
      // Article - Choose Article Category

      case "SELECT_CATEGORY":
        const parsedIdList = action.value;
        const categoryId = parseInt(parsedIdList[0]);
        let subCategoryId = -1;

        if (parsedIdList.length == 2) {
          subCategoryId = parseInt(parsedIdList[1]);
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          articles: _objectSpread(_objectSpread({}, state.articles), {}, {
            categoryId,
            subCategoryId
          })
        });

      case "SELECT_PAGE":
        const last_page = parseInt(state.articles.page_from / 10);
        const page = action.value;
        const page_from = page * 10;
        const page_to = page_from + 10;
        const last_page_DIV = document.querySelector(`#page${last_page}`);
        const selected_page_DIV = document.querySelector(`#page${page}`);

        if (last_page_DIV) {
          last_page_DIV.style["font-size"] = "var(--mid-font-size)";
          last_page_DIV.style["color"] = "black";
          last_page_DIV.style["font-weight"] = "normal";
        }

        if (selected_page_DIV) {
          selected_page_DIV.style["font-size"] = "var(--large-font-size)";
          selected_page_DIV.style["color"] = "var(--main-color-deep-dark)";
          selected_page_DIV.style["font-weight"] = "bold";
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          articles: _objectSpread(_objectSpread({}, state.articles), {}, {
            page_from,
            page_to
          })
        });

      case "SET_PAGE":
        const pageData = {
          currentPage: action.value
        };
        return _objectSpread(_objectSpread({}, state), {}, {
          pageData
        });

      default:
        throw new Error();
    }
  }, initialState); // Store - (6) Context의 Return 형식 (Context는 항상 이렇게 내려보내야 해서 Provider 형식으로 Return 해 줌)

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Provider, {
    value: {
      value,
      dispatch
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 10
  }, undefined);
};

_s(StateProvider, "+gOi+JbeVx7Ffsxr5su+U7BpkeE=");

_c = StateProvider;


var _c;

$RefreshReg$(_c, "StateProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app!":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app! ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app */ "./src/pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./src/styles/components/Footer.module.css":
/*!*************************************************!*\
  !*** ./src/styles/components/Footer.module.css ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Footer.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./src/styles/components/Footer.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Footer.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./src/styles/components/Footer.module.css",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Footer.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./src/styles/components/Footer.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/styles/components/Header.module.css":
/*!*************************************************!*\
  !*** ./src/styles/components/Header.module.css ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Header.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./src/styles/components/Header.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Header.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./src/styles/components/Header.module.css",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./Header.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./src/styles/components/Header.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./globals.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./src/styles/globals.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./globals.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./src/styles/globals.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./globals.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./src/styles/globals.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const isOldIE = function isOldIE1() {
    let memo;
    return function memorize() {
        if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
        }
        return memo;
    };
}();
const getTarget = function getTarget1() {
    const memo = {
    };
    return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
            let styleTarget = document.querySelector(target);
            // Special case to return head of iframe instead of iframe itself
            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                    // This will throw an exception if access to iframe is blocked
                    // due to cross-origin restrictions
                    styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                    // istanbul ignore next
                    styleTarget = null;
                }
            }
            memo[target] = styleTarget;
        }
        return memo[target];
    };
}();
const stylesInDom = [];
function getIndexByIdentifier(identifier) {
    let result = -1;
    for(let i = 0; i < stylesInDom.length; i++){
        if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
        }
    }
    return result;
}
function modulesToDom(list, options) {
    const idCountMap = {
    };
    const identifiers = [];
    for(let i = 0; i < list.length; i++){
        const item = list[i];
        const id = options.base ? item[0] + options.base : item[0];
        const count = idCountMap[id] || 0;
        const identifier = id + ' ' + count.toString();
        idCountMap[id] = count + 1;
        const index = getIndexByIdentifier(identifier);
        const obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
        };
        if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
        } else {
            stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1
            });
        }
        identifiers.push(identifier);
    }
    return identifiers;
}
function insertStyleElement(options) {
    const style = document.createElement('style');
    const attributes = options.attributes || {
    };
    if (typeof attributes.nonce === 'undefined') {
        const nonce = // eslint-disable-next-line no-undef
         true ? __webpack_require__.nc : 0;
        if (nonce) {
            attributes.nonce = nonce;
        }
    }
    Object.keys(attributes).forEach(function(key) {
        style.setAttribute(key, attributes[key]);
    });
    if (typeof options.insert === 'function') {
        options.insert(style);
    } else {
        const target = getTarget(options.insert || 'head');
        if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        target.appendChild(style);
    }
    return style;
}
function removeStyleElement(style) {
    // istanbul ignore if
    if (style.parentNode === null) {
        return false;
    }
    style.parentNode.removeChild(style);
}
/* istanbul ignore next  */ const replaceText = function replaceText1() {
    const textStore = [];
    return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
    };
}();
function applyToSingletonTag(style, index, remove, obj) {
    const css = remove ? '' : obj.media ? '@media ' + obj.media + ' {' + obj.css + '}' : obj.css;
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
    } else {
        const cssNode = document.createTextNode(css);
        const childNodes = style.childNodes;
        if (childNodes[index]) {
            style.removeChild(childNodes[index]);
        }
        if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
        } else {
            style.appendChild(cssNode);
        }
    }
}
function applyToTag(style, options, obj) {
    let css = obj.css;
    const media = obj.media;
    const sourceMap = obj.sourceMap;
    if (media) {
        style.setAttribute('media', media);
    } else {
        style.removeAttribute('media');
    }
    if (sourceMap && typeof btoa !== 'undefined') {
        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
    }
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        while(style.firstChild){
            style.removeChild(style.firstChild);
        }
        style.appendChild(document.createTextNode(css));
    }
}
let singleton = null;
let singletonCounter = 0;
function addStyle(obj, options) {
    let style;
    let update;
    let remove;
    if (options.singleton) {
        const styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
    } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);
        remove = function() {
            removeStyleElement(style);
        };
    }
    update(obj);
    return function updateStyle(newObj) {
        if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
            }
            update(obj = newObj);
        } else {
            remove();
        }
    };
}
module.exports = function(list, options) {
    options = options || {
    };
    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
    }
    list = list || [];
    let lastIdentifiers = modulesToDom(list, options);
    return function update(newList) {
        newList = newList || [];
        if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
        }
        for(let i = 0; i < lastIdentifiers.length; i++){
            const identifier = lastIdentifiers[i];
            const index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
        }
        const newLastIdentifiers = modulesToDom(newList, options);
        for(let i1 = 0; i1 < lastIdentifiers.length; i1++){
            const identifier = lastIdentifiers[i1];
            const index = getIndexByIdentifier(identifier);
            if (stylesInDom[index].references === 0) {
                stylesInDom[index].updater();
                stylesInDom.splice(index, 1);
            }
        }
        lastIdentifiers = newLastIdentifiers;
    };
};

//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./src/styles/components/Footer.module.css":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./src/styles/components/Footer.module.css ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Footer_Footer__16BK3 {\r\n  position: relative;\r\n  bottom: 0;\r\n  margin-top: -80px;\r\n\r\n  display: -webkit-flex;\r\n\r\n  display: -moz-box;\r\n\r\n  display: flex;\r\n  -webkit-justify-content: space-evenly;\r\n     -moz-box-pack: space-evenly;\r\n          justify-content: space-evenly;\r\n  -webkit-align-items: center;\r\n     -moz-box-align: center;\r\n          align-items: center;\r\n  \r\n  width: 100%;\r\n  height: 80px;\r\n\r\n  color: aliceblue;\r\n  background-color: rgb(70, 70, 70);\r\n}\r\n\r\n.Footer_Footer__github__3FRw- > a {\r\n  color: rgb(211, 234, 255);\r\n}\r\n\r\n.Footer_Footer__email__gbWyz > span {\r\n  cursor: pointer;\r\n  color: rgb(211, 234, 255);\r\n}\r\n\r\n\r\n/* 반응형 웹 디자인 */\r\n@media (max-width: 960px) {\r\n  .Footer_Footer__16BK3 {\r\n    -webkit-flex-direction: column;\r\n       -moz-box-orient: vertical;\r\n       -moz-box-direction: normal;\r\n            flex-direction: column;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://src/styles/components/Footer.module.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,SAAS;EACT,iBAAiB;;EAEjB,qBAAa;;EAAb,iBAAa;;EAAb,aAAa;EACb,qCAA6B;KAA7B,2BAA6B;UAA7B,6BAA6B;EAC7B,2BAAmB;KAAnB,sBAAmB;UAAnB,mBAAmB;;EAEnB,WAAW;EACX,YAAY;;EAEZ,gBAAgB;EAChB,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;;AAGA,cAAc;AACd;EACE;IACE,8BAAsB;OAAtB,yBAAsB;OAAtB,0BAAsB;YAAtB,sBAAsB;EACxB;AACF","sourcesContent":[".Footer {\r\n  position: relative;\r\n  bottom: 0;\r\n  margin-top: -80px;\r\n\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  \r\n  width: 100%;\r\n  height: 80px;\r\n\r\n  color: aliceblue;\r\n  background-color: rgb(70, 70, 70);\r\n}\r\n\r\n.Footer__github > a {\r\n  color: rgb(211, 234, 255);\r\n}\r\n\r\n.Footer__email > span {\r\n  cursor: pointer;\r\n  color: rgb(211, 234, 255);\r\n}\r\n\r\n\r\n/* 반응형 웹 디자인 */\r\n@media (max-width: 960px) {\r\n  .Footer {\r\n    flex-direction: column;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Footer": "Footer_Footer__16BK3",
	"Footer__github": "Footer_Footer__github__3FRw-",
	"Footer__email": "Footer_Footer__email__gbWyz"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./src/styles/components/Header.module.css":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./src/styles/components/Header.module.css ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Header_Header__1J9sN {\r\n  display: -webkit-flex;\r\n  display: -moz-box;\r\n  display: flex;\r\n  -webkit-justify-content: space-between;\r\n     -moz-box-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-align-items: center;\r\n     -moz-box-align: center;\r\n          align-items: center;\r\n  \r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 2;\r\n\r\n  height: 70px;\r\n  width: 100%;\r\n  \r\n  background-color: var(--main-color);\r\n  -webkit-box-shadow: 0px 0.1px 5px 1px var(--grey);\r\n          box-shadow: 0px 0.1px 5px 1px var(--grey);\r\n}\r\n\r\n.Header_Header__styling__U361E {\r\n  display: -webkit-flex;\r\n  display: -moz-box;\r\n  display: flex;\r\n  -webkit-align-items: center;\r\n     -moz-box-align: center;\r\n          align-items: center;\r\n\r\n  height: 100%;\r\n  width: 10%;\r\n\r\n  background: linear-gradient(-45deg, var(--main-color) 50%, var(--sub-color) 50%);\r\n}\r\n\r\n.Header_Header__styling__U361E > img {\r\n  margin-left: 2vw; \r\n  width: 4vw;\r\n}\r\n\r\n.Header_Header__styling_Reverse__2G1sc {\r\n  height: 100%;\r\n  width: 10%;\r\n\r\n  background: linear-gradient(-45deg, var(--sub-color) 50%, var(--main-color) 50%);\r\n}\r\n\r\n.Header_Header__word__hqgKV {\r\n  font-size: var(--xlarge-font-size);\r\n  font-weight: bold;\r\n  color: black;\r\n}\r\n\r\n\r\n/* 애니메이션 */\r\n@-webkit-keyframes Header_bounce__3LAO8 {\r\n  0%, 100%, 20%, 53%, 80% {\r\n    -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);\r\n            transition-timing-function: cubic-bezier(0.215, .61, .355, 1);\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0)\r\n  }\r\n  40%,\r\n  43% {\r\n    -webkit-transition-timing-function: cubic-bezier(0.755, .050, .855, .060);\r\n            transition-timing-function: cubic-bezier(0.755, .050, .855, .060);\r\n    -webkit-transform: translate3d(0, -30px, 0);\r\n            transform: translate3d(0, -30px, 0)\r\n  }\r\n  70% {\r\n    -webkit-transition-timing-function: cubic-bezier(0.755, .050, .855, .060);\r\n            transition-timing-function: cubic-bezier(0.755, .050, .855, .060);\r\n    -webkit-transform: translate3d(0, -15px, 0);\r\n            transform: translate3d(0, -15px, 0)\r\n  }\r\n  90% {\r\n    -webkit-transform: translate3d(0, -4px, 0);\r\n            transform: translate3d(0, -4px, 0)\r\n  }\r\n}\r\n@keyframes Header_bounce__3LAO8 {\r\n  0%, 100%, 20%, 53%, 80% {\r\n    -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);\r\n            transition-timing-function: cubic-bezier(0.215, .61, .355, 1);\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0)\r\n  }\r\n  40%,\r\n  43% {\r\n    -webkit-transition-timing-function: cubic-bezier(0.755, .050, .855, .060);\r\n            transition-timing-function: cubic-bezier(0.755, .050, .855, .060);\r\n    -webkit-transform: translate3d(0, -30px, 0);\r\n            transform: translate3d(0, -30px, 0)\r\n  }\r\n  70% {\r\n    -webkit-transition-timing-function: cubic-bezier(0.755, .050, .855, .060);\r\n            transition-timing-function: cubic-bezier(0.755, .050, .855, .060);\r\n    -webkit-transform: translate3d(0, -15px, 0);\r\n            transform: translate3d(0, -15px, 0)\r\n  }\r\n  90% {\r\n    -webkit-transform: translate3d(0, -4px, 0);\r\n            transform: translate3d(0, -4px, 0)\r\n  }\r\n}\r\n\r\n.Header_bounce__3LAO8 {\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n  -webkit-animation-name: Header_bounce__3LAO8;\r\n          animation-name: Header_bounce__3LAO8;\r\n  -webkit-transform-origin: center bottom;\r\n          transform-origin: center bottom\r\n}\r\n\r\n@-webkit-keyframes Header_slideOutLeft__21Ld- {\r\n  0% {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0)\r\n  }\r\n  100% {\r\n    visibility: hidden;\r\n    -webkit-transform: translate3d(-150%, 0, 0);\r\n            transform: translate3d(-150%, 0, 0)\r\n  }\r\n}\r\n\r\n@keyframes Header_slideOutLeft__21Ld- {\r\n  0% {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0)\r\n  }\r\n  100% {\r\n    visibility: hidden;\r\n    -webkit-transform: translate3d(-150%, 0, 0);\r\n            transform: translate3d(-150%, 0, 0)\r\n  }\r\n}\r\n\r\n@-webkit-keyframes Header_hinge__l1KsR {\r\n  0% {\r\n    -webkit-transform-origin: top left;\r\n            transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out\r\n  }\r\n  20%,\r\n  60% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\r\n            transform: rotate3d(0, 0, 1, 80deg);\r\n    -webkit-transform-origin: top left;\r\n            transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out\r\n  }\r\n  40%,\r\n  80% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\r\n            transform: rotate3d(0, 0, 1, 60deg);\r\n    -webkit-transform-origin: top left;\r\n            transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out;\r\n    opacity: 1\r\n  }\r\n  100% {\r\n    -webkit-transform: translate3d(0, 150vh, 0);\r\n            transform: translate3d(0, 150vh, 0);\r\n    opacity: 0\r\n  }\r\n}\r\n\r\n@keyframes Header_hinge__l1KsR {\r\n  0% {\r\n    -webkit-transform-origin: top left;\r\n            transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out\r\n  }\r\n  20%,\r\n  60% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\r\n            transform: rotate3d(0, 0, 1, 80deg);\r\n    -webkit-transform-origin: top left;\r\n            transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out\r\n  }\r\n  40%,\r\n  80% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\r\n            transform: rotate3d(0, 0, 1, 60deg);\r\n    -webkit-transform-origin: top left;\r\n            transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out;\r\n    opacity: 1\r\n  }\r\n  100% {\r\n    -webkit-transform: translate3d(0, 150vh, 0);\r\n            transform: translate3d(0, 150vh, 0);\r\n    opacity: 0\r\n  }\r\n}\r\n\r\n.Header_hinge__l1KsR {\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n  -webkit-animation-name: Header_hinge__l1KsR;\r\n          animation-name: Header_hinge__l1KsR\r\n}\r\n\r\n@-webkit-keyframes Header_shake__hOh8F {\r\n  0%, 100% {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0)\r\n  }\r\n  10%,\r\n  30%,\r\n  50%,\r\n  70%,\r\n  90% {\r\n    -webkit-transform: translate3d(-10px, 0, 0);\r\n            transform: translate3d(-10px, 0, 0)\r\n  }\r\n  20%,\r\n  40%,\r\n  60%,\r\n  80% {\r\n    -webkit-transform: translate3d(10px, 0, 0);\r\n            transform: translate3d(10px, 0, 0)\r\n  }\r\n}\r\n\r\n@keyframes Header_shake__hOh8F {\r\n  0%, 100% {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0)\r\n  }\r\n  10%,\r\n  30%,\r\n  50%,\r\n  70%,\r\n  90% {\r\n    -webkit-transform: translate3d(-10px, 0, 0);\r\n            transform: translate3d(-10px, 0, 0)\r\n  }\r\n  20%,\r\n  40%,\r\n  60%,\r\n  80% {\r\n    -webkit-transform: translate3d(10px, 0, 0);\r\n            transform: translate3d(10px, 0, 0)\r\n  }\r\n}\r\n\r\n.Header_slideOutLeft__21Ld- {\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n  -webkit-animation-name: Header_slideOutLeft__21Ld-;\r\n          animation-name: Header_slideOutLeft__21Ld-\r\n}\r\n\r\n@-webkit-keyframes Header_zoomInDown__zl1oQ {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\r\n            transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.55, .055, .675, .19);\r\n            animation-timing-function: cubic-bezier(0.55, .055, .675, .19)\r\n  }\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n            transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, .885, .32, 1);\r\n            animation-timing-function: cubic-bezier(0.175, .885, .32, 1)\r\n  }\r\n}\r\n\r\n@keyframes Header_zoomInDown__zl1oQ {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\r\n            transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.55, .055, .675, .19);\r\n            animation-timing-function: cubic-bezier(0.55, .055, .675, .19)\r\n  }\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n            transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, .885, .32, 1);\r\n            animation-timing-function: cubic-bezier(0.175, .885, .32, 1)\r\n  }\r\n}\r\n\r\n.Header_zoomInDown__zl1oQ {\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n  -webkit-animation-name: Header_zoomInDown__zl1oQ;\r\n          animation-name: Header_zoomInDown__zl1oQ\r\n}\r\n\r\n\r\n/* 반응형 웹 디자인 */\r\n@media (max-width: 960px) {\r\n  .Header_Header__styling__U361E > img {\r\n    opacity: 0;\r\n  }\r\n  .Header_Header__styling__U361E > img:hover {\r\n    opacity: 1;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://src/styles/components/Header.module.css"],"names":[],"mappings":"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","sourcesContent":[".Header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  \r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 2;\r\n\r\n  height: 70px;\r\n  width: 100%;\r\n  \r\n  background-color: var(--main-color);\r\n  box-shadow: 0px 0.1px 5px 1px var(--grey);\r\n}\r\n\r\n.Header__styling {\r\n  display: flex;\r\n  align-items: center;\r\n\r\n  height: 100%;\r\n  width: 10%;\r\n\r\n  background: linear-gradient(-45deg, var(--main-color) 50%, var(--sub-color) 50%);\r\n}\r\n\r\n.Header__styling > img {\r\n  margin-left: 2vw; \r\n  width: 4vw;\r\n}\r\n\r\n.Header__styling_Reverse {\r\n  height: 100%;\r\n  width: 10%;\r\n\r\n  background: linear-gradient(-45deg, var(--sub-color) 50%, var(--main-color) 50%);\r\n}\r\n\r\n.Header__word {\r\n  font-size: var(--xlarge-font-size);\r\n  font-weight: bold;\r\n  color: black;\r\n}\r\n\r\n\r\n/* 애니메이션 */\r\n@keyframes bounce {\r\n  0%, 100%, 20%, 53%, 80% {\r\n    transition-timing-function: cubic-bezier(0.215, .61, .355, 1);\r\n    transform: translate3d(0, 0, 0)\r\n  }\r\n  40%,\r\n  43% {\r\n    transition-timing-function: cubic-bezier(0.755, .050, .855, .060);\r\n    transform: translate3d(0, -30px, 0)\r\n  }\r\n  70% {\r\n    transition-timing-function: cubic-bezier(0.755, .050, .855, .060);\r\n    transform: translate3d(0, -15px, 0)\r\n  }\r\n  90% {\r\n    transform: translate3d(0, -4px, 0)\r\n  }\r\n}\r\n\r\n.bounce {\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n  animation-name: bounce;\r\n  transform-origin: center bottom\r\n}\r\n\r\n@keyframes slideOutLeft {\r\n  0% {\r\n    transform: translate3d(0, 0, 0)\r\n  }\r\n  100% {\r\n    visibility: hidden;\r\n    transform: translate3d(-150%, 0, 0)\r\n  }\r\n}\r\n\r\n@keyframes hinge {\r\n  0% {\r\n    transform-origin: top left;\r\n    animation-timing-function: ease-in-out\r\n  }\r\n  20%,\r\n  60% {\r\n    transform: rotate3d(0, 0, 1, 80deg);\r\n    transform-origin: top left;\r\n    animation-timing-function: ease-in-out\r\n  }\r\n  40%,\r\n  80% {\r\n    transform: rotate3d(0, 0, 1, 60deg);\r\n    transform-origin: top left;\r\n    animation-timing-function: ease-in-out;\r\n    opacity: 1\r\n  }\r\n  100% {\r\n    transform: translate3d(0, 150vh, 0);\r\n    opacity: 0\r\n  }\r\n}\r\n\r\n.hinge {\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n  animation-name: hinge\r\n}\r\n\r\n@keyframes shake {\r\n  0%, 100% {\r\n    transform: translate3d(0, 0, 0)\r\n  }\r\n  10%,\r\n  30%,\r\n  50%,\r\n  70%,\r\n  90% {\r\n    transform: translate3d(-10px, 0, 0)\r\n  }\r\n  20%,\r\n  40%,\r\n  60%,\r\n  80% {\r\n    transform: translate3d(10px, 0, 0)\r\n  }\r\n}\r\n\r\n.slideOutLeft {\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n  animation-name: slideOutLeft\r\n}\r\n\r\n@keyframes zoomInDown {\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\r\n    animation-timing-function: cubic-bezier(0.55, .055, .675, .19)\r\n  }\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\r\n    animation-timing-function: cubic-bezier(0.175, .885, .32, 1)\r\n  }\r\n}\r\n\r\n.zoomInDown {\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n  animation-name: zoomInDown\r\n}\r\n\r\n\r\n/* 반응형 웹 디자인 */\r\n@media (max-width: 960px) {\r\n  .Header__styling > img {\r\n    opacity: 0;\r\n  }\r\n  .Header__styling > img:hover {\r\n    opacity: 1;\r\n    transition: 1s;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Header": "Header_Header__1J9sN",
	"Header__styling": "Header_Header__styling__U361E",
	"Header__styling_Reverse": "Header_Header__styling_Reverse__2G1sc",
	"Header__word": "Header_Header__word__hqgKV",
	"bounce": "Header_bounce__3LAO8",
	"hinge": "Header_hinge__l1KsR",
	"slideOutLeft": "Header_slideOutLeft__21Ld-",
	"zoomInDown": "Header_zoomInDown__zl1oQ",
	"shake": "Header_shake__hOh8F"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./src/styles/globals.css":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./src/styles/globals.css ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Gowun Batang', 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\na {\n  text-decoration: none;\n}\n\np {\n  line-height: 28px;\n}\n\n:root {\n  /* 색상 정보 */\n  --main-color: #e7f0f3;\n  --main-color-dark: #a0c4cf;\n  --main-color-deep-dark: #627f88;\n  --sub-color: #f9faf8fd;\n  --sub-color-dark: #e3e6e1fd;\n  --sub-color-opacity: rgba(249,250,248,0.8);\n  --sub-color-dark-opacity: rgba(227,230,225,0.8);\n  --orange: #FF7A00;\n  --red: #FF4842;\n  --yellow: #FFC107;\n  --blue: #1890FF;\n  --grey: #CACACA;\n  --bright-grey: #F2F2F2;\n  --link-color: #00AB55;\n  --highlight-color: #b8ffdc;\n  --sub-highlight-color: #dfffef;\n  \n\n  /* 폰트 사이트 */\n  --small-font-size: 12px;\n  --main-font-size: 14px;\n  --mid-font-size: 16px;\n  --large-font-size: 18px;\n  --xlarge-font-size: 21px;\n  --xxlarge-font-size: 24px;\n  --huge-font-size: 28px;\n\n  /* margin, padding */\n  --small-margin-size: 12px;\n  --main-margin-size: 16px;\n  --mid-margin-size: 21px;\n  --large-margin-size: 36px;\n  --xlarge-margin-size: 48px;\n\n  /* 버튼 크기 */\n  --btn-height: 30px;\n\n  /* 사진 크기 */\n  --small-picture: 20px;\n  --logo-width: 300px;\n}\n\n.App {\n  min-height: 100vh;\n}\n\n.App__Content {\n  padding-top: 70px;\n  padding-bottom: 80px;\n  min-height: 100vh;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box\n}", "",{"version":3,"sources":["webpack://src/styles/globals.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,qBAAqB;EACrB,0BAA0B;EAC1B,+BAA+B;EAC/B,sBAAsB;EACtB,2BAA2B;EAC3B,0CAA0C;EAC1C,+CAA+C;EAC/C,iBAAiB;EACjB,cAAc;EACd,iBAAiB;EACjB,eAAe;EACf,eAAe;EACf,sBAAsB;EACtB,qBAAqB;EACrB,0BAA0B;EAC1B,8BAA8B;;;EAG9B,WAAW;EACX,uBAAuB;EACvB,sBAAsB;EACtB,qBAAqB;EACrB,uBAAuB;EACvB,wBAAwB;EACxB,yBAAyB;EACzB,sBAAsB;;EAEtB,oBAAoB;EACpB,yBAAyB;EACzB,wBAAwB;EACxB,uBAAuB;EACvB,yBAAyB;EACzB,0BAA0B;;EAE1B,UAAU;EACV,kBAAkB;;EAElB,UAAU;EACV,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,iBAAiB;EACjB,8BAAqB;KAArB,2BAAqB;UAArB;AACF","sourcesContent":["body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Gowun Batang', 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\na {\n  text-decoration: none;\n}\n\np {\n  line-height: 28px;\n}\n\n:root {\n  /* 색상 정보 */\n  --main-color: #e7f0f3;\n  --main-color-dark: #a0c4cf;\n  --main-color-deep-dark: #627f88;\n  --sub-color: #f9faf8fd;\n  --sub-color-dark: #e3e6e1fd;\n  --sub-color-opacity: rgba(249,250,248,0.8);\n  --sub-color-dark-opacity: rgba(227,230,225,0.8);\n  --orange: #FF7A00;\n  --red: #FF4842;\n  --yellow: #FFC107;\n  --blue: #1890FF;\n  --grey: #CACACA;\n  --bright-grey: #F2F2F2;\n  --link-color: #00AB55;\n  --highlight-color: #b8ffdc;\n  --sub-highlight-color: #dfffef;\n  \n\n  /* 폰트 사이트 */\n  --small-font-size: 12px;\n  --main-font-size: 14px;\n  --mid-font-size: 16px;\n  --large-font-size: 18px;\n  --xlarge-font-size: 21px;\n  --xxlarge-font-size: 24px;\n  --huge-font-size: 28px;\n\n  /* margin, padding */\n  --small-margin-size: 12px;\n  --main-margin-size: 16px;\n  --mid-margin-size: 21px;\n  --large-margin-size: 36px;\n  --xlarge-margin-size: 48px;\n\n  /* 버튼 크기 */\n  --btn-height: 30px;\n\n  /* 사진 크기 */\n  --small-picture: 20px;\n  --logo-width: 300px;\n}\n\n.App {\n  min-height: 100vh;\n}\n\n.App__Content {\n  padding-top: 70px;\n  padding-bottom: 80px;\n  min-height: 100vh;\n  box-sizing: border-box\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssU0FBUyxZQUFZLE1BQU0sS0FBSyxRQUFRLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFNBQVMsWUFBWSxNQUFNLEtBQUssUUFBUSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sa0NBQWtDLG9CQUFvQixxQ0FBcUMsMEJBQTBCLDRCQUE0QixhQUFhLGlCQUFpQix1QkFBdUIsa0JBQWtCLGdEQUFnRCxnREFBZ0QsS0FBSywwQkFBMEIsb0JBQW9CLDBCQUEwQix1QkFBdUIsaUJBQWlCLDJGQUEyRixLQUFLLGdDQUFnQyx3QkFBd0IsaUJBQWlCLEtBQUssa0NBQWtDLG1CQUFtQixpQkFBaUIsMkZBQTJGLEtBQUssdUJBQXVCLHlDQUF5Qyx3QkFBd0IsbUJBQW1CLEtBQUssOENBQThDLCtCQUErQixzRUFBc0UsOENBQThDLHFCQUFxQiwwRUFBMEUsa0RBQWtELFdBQVcsMEVBQTBFLGtEQUFrRCxXQUFXLGlEQUFpRCxLQUFLLGlCQUFpQixxQ0FBcUMsNkJBQTZCLHdDQUF3QyxnQ0FBZ0MsNkJBQTZCLDBDQUEwQyxpQ0FBaUMsVUFBVSw4Q0FBOEMsWUFBWSwyQkFBMkIsa0RBQWtELEtBQUssMEJBQTBCLFVBQVUsbUNBQW1DLHFEQUFxRCxxQkFBcUIsNENBQTRDLG1DQUFtQyxxREFBcUQscUJBQXFCLDRDQUE0QyxtQ0FBbUMsK0NBQStDLHlCQUF5QixZQUFZLDRDQUE0Qyx5QkFBeUIsS0FBSyxnQkFBZ0IscUNBQXFDLDZCQUE2Qix3Q0FBd0MsZ0NBQWdDLGdDQUFnQywwQkFBMEIsZ0JBQWdCLDhDQUE4QyxtREFBbUQsa0RBQWtELHlDQUF5QyxpREFBaUQsS0FBSyx1QkFBdUIscUNBQXFDLDZCQUE2Qix3Q0FBd0MsZ0NBQWdDLHVDQUF1QywrQkFBK0IsVUFBVSxtQkFBbUIsa0VBQWtFLDZFQUE2RSxXQUFXLG1CQUFtQixxRUFBcUUsMkVBQTJFLEtBQUsscUJBQXFCLHFDQUFxQyw2QkFBNkIsd0NBQXdDLGdDQUFnQyxxQ0FBcUMsMERBQTBELDhCQUE4QixtQkFBbUIsT0FBTyxvQ0FBb0MsbUJBQW1CLHVCQUF1QixPQUFPLEtBQUssbUJBQW1CO0FBQzN0Z0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNrRztBQUNsRyw4QkFBOEIseUZBQTJCO0FBQ3pEO0FBQ0EsZ0RBQWdELGNBQWMsNkxBQTZMLHdDQUF3Qyx1Q0FBdUMsR0FBRyxVQUFVLHlGQUF5RixHQUFHLE9BQU8sMEJBQTBCLEdBQUcsT0FBTyxzQkFBc0IsR0FBRyxXQUFXLHlDQUF5QywrQkFBK0Isb0NBQW9DLDJCQUEyQixnQ0FBZ0MsK0NBQStDLG9EQUFvRCxzQkFBc0IsbUJBQW1CLHNCQUFzQixvQkFBb0Isb0JBQW9CLDJCQUEyQiwwQkFBMEIsK0JBQStCLG1DQUFtQyxrREFBa0QsMkJBQTJCLDBCQUEwQiw0QkFBNEIsNkJBQTZCLDhCQUE4QiwyQkFBMkIseURBQXlELDZCQUE2Qiw0QkFBNEIsOEJBQThCLCtCQUErQix3Q0FBd0MsMkNBQTJDLHdCQUF3QixHQUFHLFVBQVUsc0JBQXNCLEdBQUcsbUJBQW1CLHNCQUFzQix5QkFBeUIsc0JBQXNCLG1DQUFtQyxtQ0FBbUMscUNBQXFDLE9BQU8sdUZBQXVGLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGVBQWUsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sK0JBQStCLGNBQWMsNkxBQTZMLHdDQUF3Qyx1Q0FBdUMsR0FBRyxVQUFVLHlGQUF5RixHQUFHLE9BQU8sMEJBQTBCLEdBQUcsT0FBTyxzQkFBc0IsR0FBRyxXQUFXLHlDQUF5QywrQkFBK0Isb0NBQW9DLDJCQUEyQixnQ0FBZ0MsK0NBQStDLG9EQUFvRCxzQkFBc0IsbUJBQW1CLHNCQUFzQixvQkFBb0Isb0JBQW9CLDJCQUEyQiwwQkFBMEIsK0JBQStCLG1DQUFtQyxrREFBa0QsMkJBQTJCLDBCQUEwQiw0QkFBNEIsNkJBQTZCLDhCQUE4QiwyQkFBMkIseURBQXlELDZCQUE2Qiw0QkFBNEIsOEJBQThCLCtCQUErQix3Q0FBd0MsMkNBQTJDLHdCQUF3QixHQUFHLFVBQVUsc0JBQXNCLEdBQUcsbUJBQW1CLHNCQUFzQix5QkFBeUIsc0JBQXNCLDZCQUE2QixtQkFBbUI7QUFDMWtJO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDTnZDLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBLFlBQVksbUJBQU8sQ0FBQyw0Q0FBTztBQUMzQixjQUFjLG1CQUFPLENBQUMsZ0ZBQWU7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdCQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwrRkFBK0YsZUFBZTtBQUM5RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssR0FBRzs7QUFFUixrREFBa0Q7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCxrQ0FBa0M7QUFDbEM7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJEOztBQUUzRDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7O0FBR2xCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkhBQTJIO0FBQzNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0VBQW9FOztBQUVwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFdBQVcsR0FBRztBQUNkLFdBQVcsR0FBRztBQUNkLFdBQVcsZUFBZTtBQUMxQixXQUFXLEdBQUc7QUFDZCxXQUFXLEdBQUc7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwREFBMEQ7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBLGNBQWM7QUFDZCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2xyQ2E7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDLENBQUM7QUFDRixFQUFFLHVKQUFzRTtBQUN4RTs7Ozs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9hcmNoaXZlX2RhdGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9hcnRpY2xlX2RhdGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9hcnRpY2xlX2RhdGEvQWxnb3JpdGhtLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvYXJ0aWNsZV9kYXRhL0Jsb2NrQ2hhaW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9hcnRpY2xlX2RhdGEvQ1MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9hcnRpY2xlX2RhdGEvRGV2ZWxvcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2FydGljbGVfZGF0YS9GYWlsdXJlLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvYXJ0aWNsZV9kYXRhL1N0dWRpZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9hcnRpY2xlX2RhdGEvV2ViLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvaG9tZV9kYXRhLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvcHJvZmlsZV9kYXRhLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8iLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Gb290ZXIubW9kdWxlLmNzcz84NDk5Iiwid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvSGVhZGVyLm1vZHVsZS5jc3M/Yzk2NSIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcz9jZmNlIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0Zvb3Rlci5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvSGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpO1xudmFyIF9yb3V0ZXIxID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgcHJlZmV0Y2hlZCA9IHtcbn07XG5mdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVybjtcbiAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjdXJMb2NhbGUgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWU7XG59XG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMjtcbn1cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKSB7XG4gICAgY29uc3QgeyBub2RlTmFtZSAgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xuICAgICAgICBzY3JvbGwgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICAgIHNoYWxsb3csXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgc2Nyb2xsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGhyZWY6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wcyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7XG4gICAgICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGFzOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHMgPSBPYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO1xuICAgICAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmVwbGFjZScgfHwga2V5ID09PSAnc2Nyb2xsJyB8fCBrZXkgPT09ICdzaGFsbG93JyB8fCBrZXkgPT09ICdwYXNzSHJlZicgfHwga2V5ID09PSAncHJlZmV0Y2gnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgaGFzV2FybmVkID0gX3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2U7XG4gICAgY29uc3Qgcm91dGVyID0gKDAsIF9yb3V0ZXIxKS51c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGhyZWYgLCBhcyAgfSA9IF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcbiAgICAgICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGFzOiBwcm9wcy5hcyA/ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICByb3V0ZXIsXG4gICAgICAgIHByb3BzLmhyZWYsXG4gICAgICAgIHByb3BzLmFzXG4gICAgXSk7XG4gICAgbGV0IHsgY2hpbGRyZW4gLCByZXBsYWNlICwgc2hhbGxvdyAsIHNjcm9sbCAsIGxvY2FsZSAgfSA9IHByb3BzO1xuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGxldCBjaGlsZDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiIFxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcbiAgICB9KTtcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgY2hpbGRSZWYsXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxuICAgIF0pO1xuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgYXMsXG4gICAgICAgIGhyZWYsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgICByZWY6IHNldFJlZixcbiAgICAgICAgb25DbGljazogKGUpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcbiAgICB9XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XG59XG52YXIgX2RlZmF1bHQgPSBMaW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcInN0eWxlcy9jb21wb25lbnRzL0Zvb3Rlci5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgLy8gRW1haWwg67O17IKsXHJcbiAgY29uc3QgY29weUVtYWlsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICB0ZXh0YXJlYS52YWx1ZSA9IFwiZHZscHJqd0BnbWFpbC5jb21cIjtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xyXG5cclxuICAgIHRleHRhcmVhLnNlbGVjdCgpO1xyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXh0YXJlYSk7XHJcbiAgICBhbGVydChcIkNvcGllZCFcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRm9vdGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Gb290ZXJfX2dpdGh1Yn0+XHJcbiAgICAgICAgR2l0aHViIDogPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9QYXJrSmVvbmd3b29uZ1wiPlBhcmtKZW9uZ3dvb25nPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Gb290ZXJfX2VtYWlsfT5cclxuICAgICAgICBDb250YWN0IDogPHNwYW4gb25DbGljaz17Y29weUVtYWlsfT5kdmxwcmp3QGdtYWlsLmNvbTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcInN0eWxlcy9jb21wb25lbnRzL0hlYWRlci5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW29uTW92ZSwgc2V0T25Nb3ZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gbG9nb0FuaW1hdGlvbihldmVudCkge1xyXG4gICAgaWYgKCFvbk1vdmUpIHtcclxuICAgICAgc2V0T25Nb3ZlKHRydWUpO1xyXG5cclxuICAgICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgY29uc3QgYW5pbWF0aW9uVHlwZSA9IHBhcnNlSW50KChNYXRoLnJhbmRvbSgpICogMTAwMCkgJSAxMCkgJSAzO1xyXG4gICAgICBmdW5jdGlvbiBlbmRBbmltYXRpb24oKSB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBgJHtzdHlsZXMubG9nb31gO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoYW5pbWF0aW9uVHlwZSkge1xyXG4gICAgICAgIGlmIChhbmltYXRpb25UeXBlID09PSAxKSB7XHJcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGAke3N0eWxlcy5zbGlkZU91dExlZnR9YDtcclxuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBlbmRBbmltYXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGAke3N0eWxlcy5oaW5nZX1gO1xyXG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGVuZEFuaW1hdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gYCR7c3R5bGVzLnpvb21JbkRvd259YDtcclxuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBlbmRBbmltYXRpb24pO1xyXG4gICAgICAgIH0sIDkwMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBgJHtzdHlsZXMuYm91bmNlfWA7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGVuZEFuaW1hdGlvbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldE9uTW92ZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRlcl9fc3R5bGluZ30+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvbXlMb2dvX3RyYW5zcC5wbmdcIiBhbHQ9XCJsb2dvXCIgb25DbGljaz17bG9nb0FuaW1hdGlvbn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGVyX193b3JkfT5Ib21lPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLkhlYWRlcl9fd29yZH0+UHJvZmlsZTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPVwiL2FydGljbGVzXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGVyX193b3JkfT5BcnRpY2xlczwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPVwiL2FyY2hpdmVzXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGVyX193b3JkfT5BcmNoaXZlczwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRlcl9fc3R5bGluZ19SZXZlcnNlfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL0hlYWRlci9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyXCI7XHJcbmltcG9ydCB7IFN0YXRlUHJvdmlkZXIgfSBmcm9tIFwic3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IFwic3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0YXRlUHJvdmlkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBfX0NvbnRlbnRcIj5cclxuICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TdGF0ZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJjb25zdCBhcmNoaXZlcyA9IFtcclxuICAvLyBHaXRodWIgQmxvZ1xyXG4gIHtcclxuICAgIGlkOiAwLFxyXG4gICAgdGl0bGU6IFwiR2l0aHViIEJsb2dcIixcclxuICAgIGRldGFpbHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAwLFxyXG4gICAgICAgIGRhdGU6IFwiMjAyMS0wOC0yNFwiLFxyXG4gICAgICAgIGltYWdlczogW1wiL2FyY2hpdmVzL2Jsb2cvMS0xLnBuZ1wiLCBcIi9hcmNoaXZlcy9ibG9nLzEtMi5wbmdcIl0sXHJcbiAgICAgICAgY29udGVudDogXCLruJTroZzqt7gg6rCc67CcIOyLnOyekVxcbuyCrOyaqSDquLDsiKA6IFJlYWN0IGpzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBkYXRlOiBcIjIwMjEtMDgtMjVcIixcclxuICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgIFwiL2FyY2hpdmVzL2Jsb2cvMi0xLnBuZ1wiLFxyXG4gICAgICAgICAgXCIvYXJjaGl2ZXMvYmxvZy8yLTIucG5nXCIsXHJcbiAgICAgICAgICBcIi9hcmNoaXZlcy9ibG9nLzItMy5wbmdcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiSG9tZSwgQXJjaGl2ZXMg7KCV66asIOuwjyBGb290ZXIg7JyE7LmYIOyhsOyglVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgZGF0ZTogXCIyMDIxLTA4LTI1XCIsXHJcbiAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICBcIi9hcmNoaXZlcy9ibG9nLzMtMS5wbmdcIixcclxuICAgICAgICAgIFwiL2FyY2hpdmVzL2Jsb2cvMy0yLnBuZ1wiLFxyXG4gICAgICAgICAgXCIvYXJjaGl2ZXMvYmxvZy8zLTMucG5nXCIsXHJcbiAgICAgICAgICBcIi9hcmNoaXZlcy9ibG9nLzMtNC5wbmdcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICBcIkFydGljbGVzIOq1rO2YhFxcbkxvY2Fs7J2YIE1hcmtkb3duIEZpbGXsnYQg67aI65+s7JmA7IScIOy2nOugpe2VmOuKlCDrsKnsi50g7IKs7JqpXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBkYXRlOiBcIjIwMjEtMDgtMzBcIixcclxuICAgICAgICBpbWFnZXM6IFtdLFxyXG4gICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICBcIkdpdEh1YiDrsLDtj6wg7IucIHVybCDsoJHqt7zsnbQg7JWIIOuQmOuKlCDrrLjsoJwg7ZW06rKwXFxu7LC47KGwOiBodHRwczovL2lhbXNqeTE3LmdpdGh1Yi5pby9yZWFjdC8yMDE4LzExLzA0L2dpdGh1YnBhZ2UtU1BBLmh0bWxcXG5odHRwczovL2dpdGh1Yi5jb20vcmFmZ3JhcGgvc3BhLWdpdGh1Yi1wYWdlc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgZGF0ZTogXCIyMDIxLTA5LTIwXCIsXHJcbiAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICBcIi9hcmNoaXZlcy9ibG9nLzUtMS5wbmdcIixcclxuICAgICAgICAgIFwiL2FyY2hpdmVzL2Jsb2cvNS0yLnBuZ1wiLFxyXG4gICAgICAgICAgXCIvYXJjaGl2ZXMvYmxvZy81LTMucG5nXCIsXHJcbiAgICAgICAgICBcIi9hcmNoaXZlcy9ibG9nLzUtNC5wbmdcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwi65SU7J6Q7J24IOygleumrCDrsI8g67CY7J2R7ZiVIOybuSDqtaztmIRcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA1LFxyXG4gICAgICAgIGRhdGU6IFwiMjAyMS0wOS0yOVwiLFxyXG4gICAgICAgIGltYWdlczogW1wiL2FyY2hpdmVzL2Jsb2cvNi0xLnBuZ1wiXSxcclxuICAgICAgICBjb250ZW50OiBcIuuhnOqzoCDsoJzsnpFcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA2LFxyXG4gICAgICAgIGRhdGU6IFwiMjAyMS0xMC0wNFwiLFxyXG4gICAgICAgIGltYWdlczogW1wiL2FyY2hpdmVzL2Jsb2cvNy0xLnBuZ1wiXSxcclxuICAgICAgICBjb250ZW50OiBcIkdvb2dsZSBTZWFyY2ggQ29uc29sZSDrk7HroZ1cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA3LFxyXG4gICAgICAgIGRhdGU6IFwiMjAyMS0xMC0xMFwiLFxyXG4gICAgICAgIGltYWdlczogW1wiL2FyY2hpdmVzL2Jsb2cvOC0xLmpwZ1wiXSxcclxuICAgICAgICBjb250ZW50OiBcIk5leHQuanMg7KCE7ZmYIOyZhOujjFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDgsXHJcbiAgICAgICAgZGF0ZTogXCIyMDIxLTEyLTExXCIsXHJcbiAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICBcIi9hcmNoaXZlcy9ibG9nLzktMS5qcGdcIixcclxuICAgICAgICAgIFwiL2FyY2hpdmVzL2Jsb2cvOS0yLmpwZ1wiLFxyXG4gICAgICAgICAgXCIvYXJjaGl2ZXMvYmxvZy85LTMuanBnXCIsXHJcbiAgICAgICAgICBcIi9hcmNoaXZlcy9ibG9nLzktNC5qcGdcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICBcIkhlYWRlciDrsI8gQXJ0aWNsZXMg7Y6Y7J207KeAIExheW91dCDsiJjsoJUgKOuSpOydmCDsgqzsp4QgMuyepeydtCDqtazrsoTsoIQpXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogOSxcclxuICAgICAgICBkYXRlOiBcIjIwMjEtMTItMTJcIixcclxuICAgICAgICBpbWFnZXM6IFtcIi9hcmNoaXZlcy9ibG9nLzEwLTEuanBnXCJdLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwi7Y+w7Yq4IOuzgOqyvVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEwLFxyXG4gICAgICAgIGRhdGU6IFwiMjAyMS0xMi0xM1wiLFxyXG4gICAgICAgIGltYWdlczogW1wiL2FyY2hpdmVzL2Jsb2cvMTEtMS5qcGdcIiwgXCIvYXJjaGl2ZXMvYmxvZy8xMS0yLmpwZ1wiXSxcclxuICAgICAgICBjb250ZW50OiBcIuuqqOuwlOydvCDrsoTsoIQg7Lm07YWM6rOg66asIOuplOuJtCDthqDquIAg6riw64qlIOy2lOqwgFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDExLFxyXG4gICAgICAgIGRhdGU6IFwiMjAyMi0wMi0wOFwiLFxyXG4gICAgICAgIGltYWdlczogW1wiL2FyY2hpdmVzL2Jsb2cvMTItMS5qcGdcIl0sXHJcbiAgICAgICAgY29udGVudDogXCJFQzIgV2ViIEFwcGxpY2F0aW9uIFNlcnZlcuyZgCDsl7DqsrAg7ISx6rO1XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMTIsXHJcbiAgICAgICAgZGF0ZTogXCIyMDIyLTAyLTEyXCIsXHJcbiAgICAgICAgaW1hZ2VzOiBbXCIvYXJjaGl2ZXMvYmxvZy8xMy0xLmpwZ1wiXSxcclxuICAgICAgICBjb250ZW50OiBcIkFydGljbGVz7J2YIOy5tO2FjOqzoOumrCDslYjsl5Ag7ISc67iMIOy5tO2FjOqzoOumrCDstpTqsIBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxMyxcclxuICAgICAgICBkYXRlOiBcIjIwMjItMDItMTRcIixcclxuICAgICAgICBpbWFnZXM6IFtcIi9hcmNoaXZlcy9ibG9nLzE0LTEuanBnXCJdLFxyXG4gICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICBcIu2OmOydtOyngOuEpOydtOyFmCDquLDriqUg7LaU6rCAXFxu7Y6Y7J207KeA64Sk7J207IWYIOq4sOuKpSDstpTqsIAg7ZuEIOqygOyDiSDquLDriqXsnZgg7ZWE7JqU7ISx7J2EIOuKkOuCjCAo642U7J207IOBIEN0cmwrZuulvCDthrXtlZwg6riAIOqygOyDieydtCDrtojqsIDriqUpXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMTQsXHJcbiAgICAgICAgZGF0ZTogXCIyMDIyLTA0LTA0XCIsXHJcbiAgICAgICAgaW1hZ2VzOiBbXCIvYXJjaGl2ZXMvYmxvZy8xNS0xLmpwZ1wiLCBcIi9hcmNoaXZlcy9ibG9nLzE1LTIuanBnXCJdLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwi7J24642x7IqkIOq4sOuKpSDstpTqsIAgKOyLpOyLnOqwhCDsnITsuZgg7ZGc7IucIC8g7ZW064u5IOychOy5mOuhnCDsnbTrj5kpXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcblxyXG4gIC8vIEJJVFpcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiBcIkJJVFpcIixcclxuICAgIGRldGFpbHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAwLFxyXG4gICAgICAgIGRhdGU6IFwiMjAyMS0wNy4wNSB+IDIwMjEtMDgtMTZcIixcclxuICAgICAgICBpbWFnZXM6IFtcIi9hcmNoaXZlcy9iaXR6LzAuanBnXCIsIFwiL2FyY2hpdmVzL2JpdHovMS5qcGdcIl0sXHJcbiAgICAgICAgY29udGVudDogXCLrho3qtawg7ZS97JeFIOqyjOyehCDtlIzrnqvtj7wgQklUWiDsoJzsnpFcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAgLy8gLy8gREFPVSBJbnRlcm5zaGlwXHJcbiAgLy8ge1xyXG4gIC8vICAgaWQ6IDIsXHJcbiAgLy8gICB0aXRsZTogXCJJbnRlcm5zaGlwXCIsXHJcbiAgLy8gICBkZXRhaWxzOiBbXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICBpZDogMCxcclxuICAvLyAgICAgICBkYXRlOiBcIjIwMjEtMDguMTcgfiAyMDIxLTA5LTEwXCIsXHJcbiAgLy8gICAgICAgaW1hZ2VzOiBbXSxcclxuICAvLyAgICAgICBjb250ZW50OiBcIuuLpOyasOq4sOyIoCDquIjsnLXqsJzrsJwg7KeB66y0ICjtgqTsm4Dspp3qtowpIOyduO2EtFxcblwiLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgXSxcclxuICAvLyB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXJjaGl2ZXM7XHJcbiIsImltcG9ydCB7IENTLCBDU19TdWJDYXRlZ29yeSB9IGZyb20gXCIuL2FydGljbGVfZGF0YS9DUy5qc1wiO1xyXG5pbXBvcnQgeyBEZXZlbG9wLCBEZXZlbG9wX1N1YkNhdGVnb3J5IH0gZnJvbSBcIi4vYXJ0aWNsZV9kYXRhL0RldmVsb3AuanNcIjtcclxuaW1wb3J0IHsgV2ViLCBXZWJfU3ViQ2F0ZWdvcnkgfSBmcm9tIFwiLi9hcnRpY2xlX2RhdGEvV2ViLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgQmxvY2tDaGFpbixcclxuICBCbG9ja0NoYWluX1N1YkNhdGVnb3J5LFxyXG59IGZyb20gXCIuL2FydGljbGVfZGF0YS9CbG9ja0NoYWluLmpzXCI7XHJcbmltcG9ydCB7IEZhaWx1cmUsIEZhaWx1cmVfU3ViQ2F0ZWdvcnkgfSBmcm9tIFwiLi9hcnRpY2xlX2RhdGEvRmFpbHVyZS5qc1wiO1xyXG5pbXBvcnQgeyBTdHVkaWVkLCBTdHVkaWVkX1N1YkNhdGVnb3J5IH0gZnJvbSBcIi4vYXJ0aWNsZV9kYXRhL1N0dWRpZWQuanNcIjtcclxuaW1wb3J0IHsgQWxnb3JpdGhtLCBBbGdvcml0aG1fU3ViQ2F0ZWdvcnkgfSBmcm9tIFwiLi9hcnRpY2xlX2RhdGEvQWxnb3JpdGhtLmpzXCI7XHJcblxyXG5jb25zdCBhcnRpY2xlcyA9IHtcclxuICBjYXRlZ29yeUlkOiAtMSxcclxuICBzdWJDYXRlZ29yeUlkOiAtMSxcclxuICBjYXRlZ29yeUxpc3Q6IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDAsXHJcbiAgICAgIGNhdGVnb3J5OiBcIkRldmVsb3BcIixcclxuICAgICAgc3ViQ2F0ZWdvcnk6IENTX1N1YkNhdGVnb3J5LFxyXG4gICAgICBpdGVtTGlzdDogRGV2ZWxvcCxcclxuICAgIH0sXHJcbiAgICB7IGlkOiAxLCBjYXRlZ29yeTogXCJDU1wiLCBzdWJDYXRlZ29yeTogRGV2ZWxvcF9TdWJDYXRlZ29yeSwgaXRlbUxpc3Q6IENTIH0sXHJcbiAgICB7IGlkOiAyLCBjYXRlZ29yeTogXCJXZWJcIiwgc3ViQ2F0ZWdvcnk6IFdlYl9TdWJDYXRlZ29yeSwgaXRlbUxpc3Q6IFdlYiB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgY2F0ZWdvcnk6IFwiQmxvY2tDaGFpblwiLFxyXG4gICAgICBzdWJDYXRlZ29yeTogQmxvY2tDaGFpbl9TdWJDYXRlZ29yeSxcclxuICAgICAgaXRlbUxpc3Q6IEJsb2NrQ2hhaW4sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNCxcclxuICAgICAgY2F0ZWdvcnk6IFwiQWxnb3JpdGhtXCIsXHJcbiAgICAgIHN1YkNhdGVnb3J5OiBBbGdvcml0aG1fU3ViQ2F0ZWdvcnksXHJcbiAgICAgIGl0ZW1MaXN0OiBBbGdvcml0aG0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNSxcclxuICAgICAgY2F0ZWdvcnk6IFwiU3R1ZGllZFwiLFxyXG4gICAgICBzdWJDYXRlZ29yeTogU3R1ZGllZF9TdWJDYXRlZ29yeSxcclxuICAgICAgaXRlbUxpc3Q6IFN0dWRpZWQsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNixcclxuICAgICAgY2F0ZWdvcnk6IFwiRmFpbHVyZVwiLFxyXG4gICAgICBzdWJDYXRlZ29yeTogRmFpbHVyZV9TdWJDYXRlZ29yeSxcclxuICAgICAgaXRlbUxpc3Q6IEZhaWx1cmUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgcGFnZV9mcm9tOiAwLFxyXG4gIHBhZ2VfdG86IDEwLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXJ0aWNsZXM7XHJcbiIsImNvbnN0IEFsZ29yaXRobSA9IFtcbiAge1xuICAgIGNhdGVnb3J5OiBcIkFsZ29yaXRobVwiLFxuICAgIHN1YkNhdGVnb3J5OiBcIlwiLFxuICAgIGlkOiAwLFxuICAgIHRpdGxlOiBcIuyVjOqzoOumrOymmCAmIOyekOujjOq1rOyhsCDsoJXrpqxcIixcbiAgICBkYXRlOiBuZXcgRGF0ZShcIjIwMjItMDMtMzFcIiksXG4gICAgY29udGVudDogXCJzdG9yZS9hcnRpY2xlX2RhdGEvQWxnb3JpdGhtLzIwMjIwMzMxX0FsZ29yaXRobV9hbmRfRGF0YV9TdHJ1Y3R1cmUubWRcIixcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIkFsZ29yaXRobVwiLFxuICAgIHN1YkNhdGVnb3J5OiBcIlwiLFxuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIuycoO2YleuzhCDslYzqs6Drpqzsppgg66y47KCcIOygleumrCAo66qp7LCoKVwiLFxuICAgIGRhdGU6IG5ldyBEYXRlKFwiMjAyMi0wNC0wMVwiKSxcbiAgICBjb250ZW50OiBcInN0b3JlL2FydGljbGVfZGF0YS9BbGdvcml0aG0vMjAyMjA0MDFfQWxnb3JpdGhtX0luZGV4Lm1kXCIsXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJBbGdvcml0aG1cIixcbiAgICBzdWJDYXRlZ29yeTogXCJcIixcbiAgICBpZDogMixcbiAgICB0aXRsZTogXCJEeW5hbWljIFByb2dyYW1taW5nIOycoO2YlVwiLFxuICAgIGRhdGU6IG5ldyBEYXRlKFwiMjAyMi0wNC0wMlwiKSxcbiAgICBjb250ZW50OiBcInN0b3JlL2FydGljbGVfZGF0YS9BbGdvcml0aG0vMjAyMjA0MDJfQWxnb3JpdGhtX0RQLm1kXCIsXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJBbGdvcml0aG1cIixcbiAgICBzdWJDYXRlZ29yeTogXCJcIixcbiAgICBpZDogMyxcbiAgICB0aXRsZTogXCJERlMgJiBCRlMg7Jyg7ZiVXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIyLTA0LTI5XCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL0FsZ29yaXRobS8yMDIyMDQyOV9BbGdvcml0aG1fREZTX0JGUy5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiQWxnb3JpdGhtXCIsXG4gICAgc3ViQ2F0ZWdvcnk6IFwiXCIsXG4gICAgaWQ6IDQsXG4gICAgdGl0bGU6IFwi6re466as65SUIOycoO2YlVwiLFxuICAgIGRhdGU6IG5ldyBEYXRlKFwiMjAyMi0wNS0wNVwiKSxcbiAgICBjb250ZW50OiBcInN0b3JlL2FydGljbGVfZGF0YS9BbGdvcml0aG0vMjAyMjA1MDVfQWxnb3JpdGhtX0dyZWVkeS5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiQWxnb3JpdGhtXCIsXG4gICAgc3ViQ2F0ZWdvcnk6IFwiXCIsXG4gICAgaWQ6IDUsXG4gICAgdGl0bGU6IFwi7J2067aEIO2DkOyDiSDsnKDtmJVcIixcbiAgICBkYXRlOiBuZXcgRGF0ZShcIjIwMjItMDUtMTVcIiksXG4gICAgY29udGVudDogXCJzdG9yZS9hcnRpY2xlX2RhdGEvQWxnb3JpdGhtLzIwMjIwNTE1X0FsZ29yaXRobV9CaW5hcnlfU2VhcmNoLm1kXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBBbGdvcml0aG1fU3ViQ2F0ZWdvcnkgPSBbXTtcblxuZXhwb3J0IHsgQWxnb3JpdGhtLCAgQWxnb3JpdGhtX1N1YkNhdGVnb3J5IH07XG5cbiIsImNvbnN0IEJsb2NrQ2hhaW4gPSBbXG4gIHtcbiAgICBjYXRlZ29yeTogXCJCbG9ja0NoYWluXCIsXG4gICAgc3ViQ2F0ZWdvcnk6IFwiXCIsXG4gICAgaWQ6IDAsXG4gICAgdGl0bGU6IFwi67iU66Gd7LK07J247J2EIOqzteu2gO2VmOq4sOuhnCDrp4jsnYzrqLnsnYAg6rOE6riwXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIxLTExLTI3XCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL0Jsb2NrQ2hhaW4vMjAyMTExMjdfQmxvY2tDaGFpbl9JbnRyby5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiQmxvY2tDaGFpblwiLFxuICAgIHN1YkNhdGVnb3J5OiBcIlwiLFxuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIlvruJTroZ3ssrTsnbhdIOqwnOuFkOygleumrFwiLFxuICAgIGRhdGU6IG5ldyBEYXRlKFwiMjAyMS0xMS0yOVwiKSxcbiAgICBjb250ZW50OiBcInN0b3JlL2FydGljbGVfZGF0YS9CbG9ja0NoYWluLzIwMjExMTI5X0Jsb2NrQ2hhaW5fQ29uY2VwdC5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiQmxvY2tDaGFpblwiLFxuICAgIHN1YkNhdGVnb3J5OiBcIlwiLFxuICAgIGlkOiAyLFxuICAgIHRpdGxlOiBcIlvruJTroZ3ssrTsnbhdIOyekeyXheymneuqhVwiLFxuICAgIGRhdGU6IG5ldyBEYXRlKFwiMjAyMS0xMi0wMlwiKSxcbiAgICBjb250ZW50OiBcInN0b3JlL2FydGljbGVfZGF0YS9CbG9ja0NoYWluLzIwMjExMjAyX0Jsb2NrQ2hhaW5fUE9XLm1kXCIsXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJCbG9ja0NoYWluXCIsXG4gICAgc3ViQ2F0ZWdvcnk6IFwiXCIsXG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6IFwiW+u4lOuhneyytOyduF0g7KeA67aE7Kad66qFXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIxLTEyLTA3XCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL0Jsb2NrQ2hhaW4vMjAyMTEyMDdfQmxvY2tDaGFpbl9QT1MubWRcIixcbiAgfSxcbl07XG5cbmNvbnN0IEJsb2NrQ2hhaW5fU3ViQ2F0ZWdvcnkgPSBbXTtcblxuZXhwb3J0IHsgQmxvY2tDaGFpbiwgIEJsb2NrQ2hhaW5fU3ViQ2F0ZWdvcnkgfTtcblxuIiwiY29uc3QgQ1MgPSBbXG4gIHtcbiAgICBjYXRlZ29yeTogXCJDU1wiLFxuICAgIHN1YkNhdGVnb3J5OiBcIlwiLFxuICAgIGlkOiAwLFxuICAgIHRpdGxlOiBcIkRhdGEgTGluayBDb250cm9sXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIxLTA5LTAyXCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL0NTLzIwMjEwOTAyX0RhdGFfTGlua19Db250cm9sLm1kXCIsXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJDU1wiLFxuICAgIHN1YkNhdGVnb3J5OiBcIlwiLFxuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIkhpZ2gtbGV2ZWwgRGF0YSBMaW5rIENvbnRyb2wgKEhETEMpXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIxLTA5LTA0XCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL0NTLzIwMjEwOTA0X0hETEMubWRcIixcbiAgfSxcbl07XG5cbmNvbnN0IENTX1N1YkNhdGVnb3J5ID0gW107XG5cbmV4cG9ydCB7IENTLCAgQ1NfU3ViQ2F0ZWdvcnkgfTtcblxuIiwiY29uc3QgRGV2ZWxvcCA9IFtcbiAge1xuICAgIGNhdGVnb3J5OiBcIkRldmVsb3BcIixcbiAgICBzdWJDYXRlZ29yeTogXCJcIixcbiAgICBpZDogMCxcbiAgICB0aXRsZTogXCLrp4jtgazri6TsmrQg7YWM7Iqk7Yq4XCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIxLTA4LTI1XCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL0RldmVsb3AvMjAyMTA4MjVfbWFya2Rvd25fdGVzdC5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiRGV2ZWxvcFwiLFxuICAgIHN1YkNhdGVnb3J5OiBcIlwiLFxuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIltHaXRIdWIgQmxvZyDqsJzrsJzquLBdIOygleumrO2VoCDrgrTsmqkg66qp66GdXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIxLTA5LTAxXCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL0RldmVsb3AvMjAyMTA5MDFfR2l0SHViQmxvZy5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiRGV2ZWxvcFwiLFxuICAgIHN1YkNhdGVnb3J5OiBcIlwiLFxuICAgIGlkOiAyLFxuICAgIHRpdGxlOiBcIltHaXRIdWIgQmxvZyDqsJzrsJzquLBdIOqwnOuwnOydvOyngFwiLFxuICAgIGRhdGU6IG5ldyBEYXRlKFwiMjAyMS0wOS0yN1wiKSxcbiAgICBjb250ZW50OiBcInN0b3JlL2FydGljbGVfZGF0YS9EZXZlbG9wLzIwMjEwOTI3X0dpdEh1YkJsb2cubWRcIixcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIkRldmVsb3BcIixcbiAgICBzdWJDYXRlZ29yeTogXCJcIixcbiAgICBpZDogMyxcbiAgICB0aXRsZTogXCJbR2l0SHViIEJsb2cg6rCc67Cc6riwXSBNYXJrZG93biDsoIHsmqkg67CPIFJlcXVpcmUg7ZWo7IiYXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIxLTA5LTI4XCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL0RldmVsb3AvMjAyMTA5MjhfR2l0SHViQmxvZy5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiRGV2ZWxvcFwiLFxuICAgIHN1YkNhdGVnb3J5OiBcIlwiLFxuICAgIGlkOiA0LFxuICAgIHRpdGxlOiBcIltHaXRIdWIgQmxvZyDqsJzrsJzquLBdIOq1rOq4gCDqsoDsg4kg65Ox66GdICYgU0VPIOq1rO2YhCgxKVwiLFxuICAgIGRhdGU6IG5ldyBEYXRlKFwiMjAyMS0xMC0wNVwiKSxcbiAgICBjb250ZW50OiBcInN0b3JlL2FydGljbGVfZGF0YS9EZXZlbG9wLzIwMjExMDA1X0dpdEh1YkJsb2dfc2VvXzEubWRcIixcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIkRldmVsb3BcIixcbiAgICBzdWJDYXRlZ29yeTogXCJcIixcbiAgICBpZDogNSxcbiAgICB0aXRsZTogXCJbR2l0SHViIEJsb2cg6rCc67Cc6riwXSBTRU8g6rWs7ZiEKDIpIC0gTmV4dC5qcyBhcHBcIixcbiAgICBkYXRlOiBuZXcgRGF0ZShcIjIwMjEtMTAtMDZcIiksXG4gICAgY29udGVudDogXCJzdG9yZS9hcnRpY2xlX2RhdGEvRGV2ZWxvcC8yMDIxMTAwNl9HaXRIdWJCbG9nX3Nlb18yLm1kXCIsXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJEZXZlbG9wXCIsXG4gICAgc3ViQ2F0ZWdvcnk6IFwiXCIsXG4gICAgaWQ6IDYsXG4gICAgdGl0bGU6IFwiW0dpdEh1YiBCbG9nIOqwnOuwnOq4sF0gU0VPIOq1rO2YhCgzKSAtIE5leHQuanMgYXBwXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIxLTEwLTA3XCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL0RldmVsb3AvMjAyMTEwMDdfR2l0SHViQmxvZ19zZW9fMy5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiRGV2ZWxvcFwiLFxuICAgIHN1YkNhdGVnb3J5OiBcIlwiLFxuICAgIGlkOiA3LFxuICAgIHRpdGxlOiBcIltHaXRIdWIgQmxvZyDqsJzrsJzquLBdIHNpdGVtYXAsIOqyjOyLnOq4gCDrk7HroZ0g7J6Q64+Z7ZmUIChTaGVsbCBTY3JpcHQpXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIxLTEwLTI4XCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL0RldmVsb3AvMjAyMTEwMjhfR2l0SHViQmxvZ19hdXRvX3NjcmlwdC5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiRGV2ZWxvcFwiLFxuICAgIHN1YkNhdGVnb3J5OiBcIlwiLFxuICAgIGlkOiA4LFxuICAgIHRpdGxlOiBcIltHaXRIdWIgQmxvZyDqsJzrsJzquLBdIE1hcmtkb3duIEluZGV4IOq1rO2YhCAoVE9DKVwiLFxuICAgIGRhdGU6IG5ldyBEYXRlKFwiMjAyMi0wNC0wNVwiKSxcbiAgICBjb250ZW50OiBcInN0b3JlL2FydGljbGVfZGF0YS9EZXZlbG9wLzIwMjIwNDA1X0dpdEh1YkJsb2dfSW5kZXgubWRcIixcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIkRldmVsb3BcIixcbiAgICBzdWJDYXRlZ29yeTogXCJcIixcbiAgICBpZDogOSxcbiAgICB0aXRsZTogXCLqtazquIAg7IKs7J207Yq466e1IOqwseyLoO2VmOq4sFwiLFxuICAgIGRhdGU6IG5ldyBEYXRlKFwiMjAyMi0wNS0wNlwiKSxcbiAgICBjb250ZW50OiBcInN0b3JlL2FydGljbGVfZGF0YS9EZXZlbG9wLzIwMjIwNTA2X1NpdGVtYXBfUmVuZXcubWRcIixcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIkRldmVsb3BcIixcbiAgICBzdWJDYXRlZ29yeTogXCJcIixcbiAgICBpZDogMTAsXG4gICAgdGl0bGU6IFwiW0dpdEh1YiBCbG9nIOqwnOuwnOq4sF0g7ISc67KEIOuniOydtOq3uOugiOydtOyFmCAoQVdTID0+IOudvOymiOuyoOumrO2MjOydtCA9PiDsmKTrnbztgbQg7YG065287Jqw65OcKVwiLFxuICAgIGRhdGU6IG5ldyBEYXRlKFwiMjAyMi0wNS0yMFwiKSxcbiAgICBjb250ZW50OiBcInN0b3JlL2FydGljbGVfZGF0YS9EZXZlbG9wLzIwMjIwNTIwX0dpdEh1YkJsb2dfU2VydmVyX01pZ3JhdGlvbi5tZFwiLFxuICB9LFxuXTtcblxuY29uc3QgRGV2ZWxvcF9TdWJDYXRlZ29yeSA9IFtdO1xuXG5leHBvcnQgeyBEZXZlbG9wLCAgRGV2ZWxvcF9TdWJDYXRlZ29yeSB9O1xuXG4iLCJjb25zdCBGYWlsdXJlID0gW1xuICB7XG4gICAgY2F0ZWdvcnk6IFwiRmFpbHVyZVwiLFxuICAgIHN1YkNhdGVnb3J5OiBcIlwiLFxuICAgIGlkOiAwLFxuICAgIHRpdGxlOiBcIltTcHJpbmcgQm9vdCDtlITroZzsoJ3tirhdIEhUVFBTIOyEpOyglSDsi6TtjKhcIixcbiAgICBkYXRlOiBuZXcgRGF0ZShcIjIwMjItMDItMDJcIiksXG4gICAgY29udGVudDogXCJzdG9yZS9hcnRpY2xlX2RhdGEvRmFpbHVyZS8yMDIyMDIwMl9GYWlsdXJlX0hUVFBTX0FXUy5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiRmFpbHVyZVwiLFxuICAgIHN1YkNhdGVnb3J5OiBcIlwiLFxuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIltTcHJpbmcgQm9vdF0gSlBB7JeQ7IScIEdyb3VwIEJ5IO2bhCBudWxs6rCSIOusuOygnCDtlbTqsrBcIixcbiAgICBkYXRlOiBuZXcgRGF0ZShcIjIwMjItMDQtMjNcIiksXG4gICAgY29udGVudDogXCJzdG9yZS9hcnRpY2xlX2RhdGEvRmFpbHVyZS8yMDIyMDQyM19GYWlsdXJlX0pQQV9OYXRpdmVRdWVyeV9KUFFMLm1kXCIsXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJGYWlsdXJlXCIsXG4gICAgc3ViQ2F0ZWdvcnk6IFwiXCIsXG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6IFwiQ2VydGJvdCDqsLHsi6AgKEVSUl9DRVJUX0RBVEVfSU5WQUxJRClcIixcbiAgICBkYXRlOiBuZXcgRGF0ZShcIjIwMjItMDUtMDlcIiksXG4gICAgY29udGVudDogXCJzdG9yZS9hcnRpY2xlX2RhdGEvRmFpbHVyZS8yMDIyMDUwOV9GYWlsdXJlX0NlcnRib3RfUmVuZXcubWRcIixcbiAgfSxcbl07XG5cbmNvbnN0IEZhaWx1cmVfU3ViQ2F0ZWdvcnkgPSBbXTtcblxuZXhwb3J0IHsgRmFpbHVyZSwgIEZhaWx1cmVfU3ViQ2F0ZWdvcnkgfTtcblxuIiwiY29uc3QgU3R1ZGllZCA9IFtcbiAge1xuICAgIGNhdGVnb3J5OiBcIlN0dWRpZWRcIixcbiAgICBzdWJDYXRlZ29yeTogXCJDbGVhbkNvZGVcIixcbiAgICBpZDogMCxcbiAgICB0aXRsZTogXCJbQ2xlYW5Db2RlXSDrhKTsnbTrsI1cIixcbiAgICBkYXRlOiBuZXcgRGF0ZShcIjIwMjItMDItMTJcIiksXG4gICAgY29udGVudDogXCJzdG9yZS9hcnRpY2xlX2RhdGEvU3R1ZGllZC9DbGVhbkNvZGUvMjAyMjAyMTJfQ2xlYW5Db2RlX05hbWluZy5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiU3R1ZGllZFwiLFxuICAgIHN1YkNhdGVnb3J5OiBcIkNsZWFuQ29kZVwiLFxuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIltDbGVhbkNvZGVdIO2VqOyImFwiLFxuICAgIGRhdGU6IG5ldyBEYXRlKFwiMjAyMi0wMi0yMlwiKSxcbiAgICBjb250ZW50OiBcInN0b3JlL2FydGljbGVfZGF0YS9TdHVkaWVkL0NsZWFuQ29kZS8yMDIyMDIyMl9DbGVhbkNvZGVfRnVuY3Rpb24ubWRcIixcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIlN0dWRpZWRcIixcbiAgICBzdWJDYXRlZ29yeTogXCJDbGVhbkNvZGVcIixcbiAgICBpZDogMixcbiAgICB0aXRsZTogXCJbQ2xlYW5Db2RlXSDso7zshJ1cIixcbiAgICBkYXRlOiBuZXcgRGF0ZShcIjIwMjItMDMtMDJcIiksXG4gICAgY29udGVudDogXCJzdG9yZS9hcnRpY2xlX2RhdGEvU3R1ZGllZC9DbGVhbkNvZGUvMjAyMjAzMDJfQ2xlYW5Db2RlX0Fubm90YXRpb24ubWRcIixcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIlN0dWRpZWRcIixcbiAgICBzdWJDYXRlZ29yeTogXCJDbGVhbkNvZGVcIixcbiAgICBpZDogMyxcbiAgICB0aXRsZTogXCJbQ2xlYW5Db2RlXSDtmJXsi50gKEZvcm1hdHRpbmcpXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIyLTA0LTIxXCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL1N0dWRpZWQvQ2xlYW5Db2RlLzIwMjIwNDIxX0NsZWFuQ29kZV9Gb3JtYXR0aW5nLm1kXCIsXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJTdHVkaWVkXCIsXG4gICAgc3ViQ2F0ZWdvcnk6IFwiQ2xlYW5Db2RlXCIsXG4gICAgaWQ6IDQsXG4gICAgdGl0bGU6IFwiW0NsZWFuQ29kZV0g6rCd7LK07JmAIOyekOujjOq1rOyhsFwiLFxuICAgIGRhdGU6IG5ldyBEYXRlKFwiMjAyMi0wNi0wNFwiKSxcbiAgICBjb250ZW50OiBcInN0b3JlL2FydGljbGVfZGF0YS9TdHVkaWVkL0NsZWFuQ29kZS8yMDIyMDYwNF9DbGVhbkNvZGVfT2JqZWN0X2FuZF9TdHJ1Y3R1cmUubWRcIixcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIlN0dWRpZWRcIixcbiAgICBzdWJDYXRlZ29yeTogXCJDbGVhbkNvZGVcIixcbiAgICBpZDogNSxcbiAgICB0aXRsZTogXCJbQ2xlYW5Db2RlXSDsmKTrpZgg7LKY66asXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIyLTA2LTI4XCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL1N0dWRpZWQvQ2xlYW5Db2RlLzIwMjIwNjI4X0NsZWFuQ29kZV9FcnJvcl9IYW5kbGluZy5tZFwiLFxuICB9LFxuXTtcblxuY29uc3QgU3R1ZGllZF9TdWJDYXRlZ29yeSA9IFtcIkNsZWFuQ29kZVwiLF07XG5cbmV4cG9ydCB7IFN0dWRpZWQsICBTdHVkaWVkX1N1YkNhdGVnb3J5IH07XG5cbiIsImNvbnN0IFdlYiA9IFtcbiAge1xuICAgIGNhdGVnb3J5OiBcIldlYlwiLFxuICAgIHN1YkNhdGVnb3J5OiBcIlwiLFxuICAgIGlkOiAwLFxuICAgIHRpdGxlOiBcIltTcHJpbmddIEJlYW7snbTrnoA/XCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIxLTEwLTEzXCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL1dlYi8yMDIxMTAxM19TcHJpbmdfQmVhbi5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiV2ViXCIsXG4gICAgc3ViQ2F0ZWdvcnk6IFwiXCIsXG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6IFwiW1NwcmluZ10g7J2Y7KG0IOqwneyytCDsnpDrj5kg7KO87J6F7J20656AP1wiLFxuICAgIGRhdGU6IG5ldyBEYXRlKFwiMjAyMS0xMC0xN1wiKSxcbiAgICBjb250ZW50OiBcInN0b3JlL2FydGljbGVfZGF0YS9XZWIvMjAyMTEwMTdfU3ByaW5nX0F1dG9tYXRpY19EZXBlbmRlbmN5X0luamVjdGlvbi5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiV2ViXCIsXG4gICAgc3ViQ2F0ZWdvcnk6IFwiXCIsXG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6IFwiW1RJUF0gYSDtg5zqt7gg7KSE67CU6r+IIOusuOygnFwiLFxuICAgIGRhdGU6IG5ldyBEYXRlKFwiMjAyMS0xMC0xOFwiKSxcbiAgICBjb250ZW50OiBcInN0b3JlL2FydGljbGVfZGF0YS9XZWIvMjAyMTEwMThfYV90YWdfd29yZF9icmVhay5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiV2ViXCIsXG4gICAgc3ViQ2F0ZWdvcnk6IFwiXCIsXG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6IFwiW1NwcmluZyBCb290IO2UhOuhnOygne2KuF0g7ZSE66Gc7KCd7Yq4IOyDneyEse2VmOq4sCAoRWNsaXBzZSlcIixcbiAgICBkYXRlOiBuZXcgRGF0ZShcIjIwMjEtMTAtMjlcIiksXG4gICAgY29udGVudDogXCJzdG9yZS9hcnRpY2xlX2RhdGEvV2ViLzIwMjExMDI5X1NwcmluZ0Jvb3RfQVdTLm1kXCIsXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJXZWJcIixcbiAgICBzdWJDYXRlZ29yeTogXCJcIixcbiAgICBpZDogNCxcbiAgICB0aXRsZTogXCJbU3ByaW5nXSDsg53rqoXso7zquLAgKExpZmUgQ3ljbGUpXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIxLTExLTA0XCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL1dlYi8yMDIxMTEwNF9TcHJpbmdfTGlmZV9DeWNsZS5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiV2ViXCIsXG4gICAgc3ViQ2F0ZWdvcnk6IFwiXCIsXG4gICAgaWQ6IDUsXG4gICAgdGl0bGU6IFwiW1NwcmluZ10gU3ByaW5nIOyEpOyglSAtIEphdmEgQ29uZmlnXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIxLTExLTA5XCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL1dlYi8yMDIxMTEwOV9TcHJpbmdfU2V0dGluZ193X0Fubm90YXRpb24ubWRcIixcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIldlYlwiLFxuICAgIHN1YkNhdGVnb3J5OiBcIlwiLFxuICAgIGlkOiA2LFxuICAgIHRpdGxlOiBcIltTcHJpbmddIFNwcmluZyBQcm9qZWN0IOyLnOyekVwiLFxuICAgIGRhdGU6IG5ldyBEYXRlKFwiMjAyMS0xMS0xNFwiKSxcbiAgICBjb250ZW50OiBcInN0b3JlL2FydGljbGVfZGF0YS9XZWIvMjAyMTExMTRfU3ByaW5nX1dlYl9TZXJ2aWNlLm1kXCIsXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJXZWJcIixcbiAgICBzdWJDYXRlZ29yeTogXCJcIixcbiAgICBpZDogNyxcbiAgICB0aXRsZTogXCJbU3ByaW5nXSBTcHJpbmcgUHJvamVjdCDqtazsobBcIixcbiAgICBkYXRlOiBuZXcgRGF0ZShcIjIwMjEtMTEtMTVcIiksXG4gICAgY29udGVudDogXCJzdG9yZS9hcnRpY2xlX2RhdGEvV2ViLzIwMjExMTE1X1NwcmluZ19Qcm9qZWN0X1N0cnVjdHVyZS5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiV2ViXCIsXG4gICAgc3ViQ2F0ZWdvcnk6IFwiXCIsXG4gICAgaWQ6IDgsXG4gICAgdGl0bGU6IFwiW1NwcmluZ10gVVRGLTgg7ZWc6riAIOyduOy9lOuUqSDshKTsoJUsIFNlcnZpY2Ug6rCd7LK0XCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIxLTExLTE5XCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL1dlYi8yMDIxMTExOV9TcHJpbmdfRW5jb2ZpbmdfU2VydmljZV9EYW8ubWRcIixcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIldlYlwiLFxuICAgIHN1YkNhdGVnb3J5OiBcIlwiLFxuICAgIGlkOiA5LFxuICAgIHRpdGxlOiBcIltTcHJpbmddIENvbnRyb2xsZXIg6rCd7LK0XCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIxLTExLTMwXCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL1dlYi8yMDIxMTEzMF9TcHJpbmdfQ29udHJvbGxlci5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiV2ViXCIsXG4gICAgc3ViQ2F0ZWdvcnk6IFwiXCIsXG4gICAgaWQ6IDEwLFxuICAgIHRpdGxlOiBcIltTcHJpbmddIOyEuOyFmCAmIOy/oO2CpFwiLFxuICAgIGRhdGU6IG5ldyBEYXRlKFwiMjAyMS0xMi0xNlwiKSxcbiAgICBjb250ZW50OiBcInN0b3JlL2FydGljbGVfZGF0YS9XZWIvMjAyMTEyMTZfU3ByaW5nX1Nlc3Npb25fQ29va2llLm1kXCIsXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJXZWJcIixcbiAgICBzdWJDYXRlZ29yeTogXCJcIixcbiAgICBpZDogMTEsXG4gICAgdGl0bGU6IFwiW1NwcmluZ10g66as64uk7J2066CJ7Yq4ICYg7J247YSw7IWJ7YSwXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIxLTEyLTE4XCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL1dlYi8yMDIxMTIxOF9TcHJpbmdfUmVkaXJlY3RfSW50ZXJjZXB0Lm1kXCIsXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJXZWJcIixcbiAgICBzdWJDYXRlZ29yeTogXCJcIixcbiAgICBpZDogMTIsXG4gICAgdGl0bGU6IFwiW1NwcmluZ10gQ29udHJvbGxlciwgU2VydmljZSwgREFPLCBEVE8sIERvbWFpblwiLFxuICAgIGRhdGU6IG5ldyBEYXRlKFwiMjAyMS0xMi0yMVwiKSxcbiAgICBjb250ZW50OiBcInN0b3JlL2FydGljbGVfZGF0YS9XZWIvMjAyMTEyMjFfU3ByaW5nX0NvbnRyb2xsZXJfU2VydmljZV9EYW9fRHRvX0RvbWFpbi5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiV2ViXCIsXG4gICAgc3ViQ2F0ZWdvcnk6IFwiXCIsXG4gICAgaWQ6IDEzLFxuICAgIHRpdGxlOiBcIltTcHJpbmddIERhdGFiYXNlXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIxLTEyLTI2XCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL1dlYi8yMDIxMTIyNl9TcHJpbmdfRGF0YWJhc2UubWRcIixcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIldlYlwiLFxuICAgIHN1YkNhdGVnb3J5OiBcIlwiLFxuICAgIGlkOiAxNCxcbiAgICB0aXRsZTogXCJbU3ByaW5nXSBKREJDXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIxLTEyLTI4XCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL1dlYi8yMDIxMTIyOF9TcHJpbmdfSkRCQy5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiV2ViXCIsXG4gICAgc3ViQ2F0ZWdvcnk6IFwiXCIsXG4gICAgaWQ6IDE1LFxuICAgIHRpdGxlOiBcIltTcHJpbmddIENvbm5lY3Rpb24gUG9vbOqzvCBKREJDIFRlbXBsYXRlXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIyLTAxLTAyXCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL1dlYi8yMDIyMDEwMl9TcHJpbmdfSkRCQ19UZW1wbGF0ZV9EQkNQLm1kXCIsXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJXZWJcIixcbiAgICBzdWJDYXRlZ29yeTogXCJcIixcbiAgICBpZDogMTYsXG4gICAgdGl0bGU6IFwiW1NwcmluZ10gQnVpbGQgOiBNYXZlbuqzvCBHcmFkbGVcIixcbiAgICBkYXRlOiBuZXcgRGF0ZShcIjIwMjItMDEtMDRcIiksXG4gICAgY29udGVudDogXCJzdG9yZS9hcnRpY2xlX2RhdGEvV2ViLzIwMjIwMTA0X1NwcmluZ19CdWlsZC5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiV2ViXCIsXG4gICAgc3ViQ2F0ZWdvcnk6IFwiXCIsXG4gICAgaWQ6IDE3LFxuICAgIHRpdGxlOiBcIltBV1NdIEFXUyBSb3V0ZTUzIO2YuOyKpO2MhSDsmIHsl60g7JqU6riIXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIyLTAyLTA4XCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL1dlYi8yMDIyMDIwOF9BV1NfUm91dGU1M19Ib3N0aW5nLm1kXCIsXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJXZWJcIixcbiAgICBzdWJDYXRlZ29yeTogXCJcIixcbiAgICBpZDogMTgsXG4gICAgdGl0bGU6IFwiW1NwcmluZ10gSk5ESVwiLFxuICAgIGRhdGU6IG5ldyBEYXRlKFwiMjAyMi0wMy0wOVwiKSxcbiAgICBjb250ZW50OiBcInN0b3JlL2FydGljbGVfZGF0YS9XZWIvMjAyMjAzMDlfU3ByaW5nX0pOREkubWRcIixcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIldlYlwiLFxuICAgIHN1YkNhdGVnb3J5OiBcIlwiLFxuICAgIGlkOiAxOSxcbiAgICB0aXRsZTogXCLruYTrsIDrsojtmLhcIixcbiAgICBkYXRlOiBuZXcgRGF0ZShcIjIwMjItMDMtMjRcIiksXG4gICAgY29udGVudDogXCJzdG9yZS9hcnRpY2xlX2RhdGEvV2ViLzIwMjIwMzI0X1NlY3VyZV9QYXNzd29yZC5tZFwiLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiV2ViXCIsXG4gICAgc3ViQ2F0ZWdvcnk6IFwiXCIsXG4gICAgaWQ6IDIwLFxuICAgIHRpdGxlOiBcIltTcHJpbmcgQm9vdCDtlITroZzsoJ3tirhdIOyKpO2UhOungSDsvZTrk5wg6rWs7KGwIOyVjOyVhOuztOq4sFwiLFxuICAgIGRhdGU6IG5ldyBEYXRlKFwiMjAyMi0wNC0xN1wiKSxcbiAgICBjb250ZW50OiBcInN0b3JlL2FydGljbGVfZGF0YS9XZWIvMjAyMjA0MTdfU3ByaW5nQm9vdF9BV1NfU3RydWN0dXJlLm1kXCIsXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJXZWJcIixcbiAgICBzdWJDYXRlZ29yeTogXCJcIixcbiAgICBpZDogMjEsXG4gICAgdGl0bGU6IFwi7YG066awIOyVhO2CpO2FjeyymCDsl7DsirUgKFNwcmluZ0Jvb3QpXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoXCIyMDIyLTA2LTE0XCIpLFxuICAgIGNvbnRlbnQ6IFwic3RvcmUvYXJ0aWNsZV9kYXRhL1dlYi8yMDIyMDYxNF9DbGVhbl9BcmNoaXRlY3R1cmUubWRcIixcbiAgfSxcbl07XG5cbmNvbnN0IFdlYl9TdWJDYXRlZ29yeSA9IFtdO1xuXG5leHBvcnQgeyBXZWIsICBXZWJfU3ViQ2F0ZWdvcnkgfTtcblxuIiwiY29uc3QgaG9tZSA9IHtcclxuICBwcm9maWxlX2ltZzogXCIvaW1hZ2VzL3Byb2ZpbGUyLmpwZ1wiLFxyXG4gIHN1bW1hcnk6XHJcbiAgICBcIllvbnNlaSBVbml2LlxcblxcdE1hdGVyaWFsIFNjaWVuY2UgJiBFbmdpbmVlcmluZ1xcbktBVFVTQSwgVVNGS1xcblxcdFVuaXRlZCBTdGF0ZXMgRm9yY2VzIEtvcmVhXFxuU0sgSHluaXhcXG5cXHROQU5EIEZsYXNoIENNUCBFbmdpbmVlcmluZ1xcblNTQUZZXFxuXFx0U2Ftc3VuZyBTVyBBY2FkZW15IEZvciBZb3V0aFxcbkRBT1UgVGVjaC5cXG46IEtJV09PTSBTZWN1cml0aWVzXFxuXFx0RmluYW5jaWFsIFNXIERldmVsb3BlclwiLFxyXG4gIHdlbGNvbWVfd29yZDogXCLslYjrhZXtlZjshLjsmpQhIOq4iOyctSBJVCDqsJzrsJzsnpAg67CV7KCV7JuF7J6F64uI64ukIVwiLFxyXG4gIGludHJvZHVjdGlvbjpcclxuICAgIFwi6rO167aA7ZWcIOuCtOyaqeydhCDquLDroZ3tlZjqs6Ag7Y+s7Yq47Y+066as7Jik66W8IOygleumrO2VmOuKlCDqsJzsnbgg67iU66Gc6re47J6F64uI64ukLlxcbuuBiuyehOyXhuydtCDrsLDsmrDqs6Ag7ISx7J6l7ZWY64qUIOqyg+ydhCDsppDqsqgg67CY64+E7LK0IOyXlOyngOuLiOyWtOyXkOyEnCDqsJzrsJzsnpDroZwg7KCE7KeB7ZaI7Iq164uI64ukLlxcbu2aqOycqOyggeydtOqzoCDquZTrgZTtlZwg7L2U65Oc7JeQIOq0gOyLrOydtCDrp47sirXri4jri6QuXFxu7ZS87JWE64W4LCDsmrTrj5ksIOyXrO2WieydhCDsoovslYTtlanri4jri6QuXCIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lO1xyXG4iLCJjb25zdCBwcm9maWxlID0ge1xyXG4gIGludHJvZHVjdGlvbjpcclxuICAgIFwiV2ViIOq4sOyIoOyXkCDqtIDsi6zsnYQg6rCA7KeA6rOgIOyeiOuKlCDquIjsnLUgSVQg6rCc67Cc7J6Q7J6F64uI64ukLlxcbuyLoOyGjOyerOqzte2VmeydhCDsoITqs7XtlZjqs6Ag67CY64+E7LK0IOq4sOyXheydmCDsl5Tsp4Dri4jslrTroZwg6re866y07ZaI7Iq164uI64ukLlxcbuuwsOyasOqzoCDshLHsnqXtlZjripQg6rKD7J2EIOymkOqyqCDrsJjrj4TssrQg7JeU7KeA64uI7Ja07JeQ7IScIOqwnOuwnOyekOuhnCDsoITsp4HtlojsirXri4jri6QuXCIsXHJcbiAgdGVjaF9zdGFjazoge1xyXG4gICAgZnJvbnRlbmQ6IFtcclxuICAgICAgXCIvdGVjaF9zdGFjay9qYXZhc2NyaXB0LnBuZ1wiLFxyXG4gICAgICBcIi90ZWNoX3N0YWNrL3JlYWN0LnBuZ1wiLFxyXG4gICAgICBcIi90ZWNoX3N0YWNrL3Z1ZS5wbmdcIixcclxuICAgICAgXCIvdGVjaF9zdGFjay9uZXh0anMucG5nXCIsXHJcbiAgICBdLFxyXG4gICAgYmFja2VuZDogW1xyXG4gICAgICBcIi90ZWNoX3N0YWNrL3B5dGhvbi5wbmdcIixcclxuICAgICAgXCIvdGVjaF9zdGFjay9kamFuZ28ucG5nXCIsXHJcbiAgICAgIFwiL3RlY2hfc3RhY2svamF2YS5wbmdcIixcclxuICAgICAgXCIvdGVjaF9zdGFjay9zcHJpbmcucG5nXCIsXHJcbiAgICAgIFwiL3RlY2hfc3RhY2svYy5wbmdcIixcclxuICAgICAgXCIvdGVjaF9zdGFjay9vcmFjbGUucG5nXCIsXHJcbiAgICBdLFxyXG4gICAgdmVyc2lvbl9jb250cm9sOiBbXCIvdGVjaF9zdGFjay9naXQucG5nXCJdLFxyXG4gICAgc3R1ZHlpbmc6IFtcIi90ZWNoX3N0YWNrL215c3FsLnBuZ1wiLCBcIi90ZWNoX3N0YWNrL2NwcC5wbmdcIl0sXHJcbiAgfSxcclxuICBjYXJlZXI6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLri6TsmrDquLDsiKAgLSDtgqTsm4Dspp3qtoxcIixcclxuICAgICAgY29udGVudDogXCLquIjsnLXqsJzrsJzsp4HrrLQgKDIwMjEt7ZiE7J6sKVxcbi0g7JiB7JuF66y4UyMg6rCc67CcIOywuOyXrFxcbi0g66ek66ek7Jq07JiB7YyAXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIuyCvOyEsSDssq3rhYQgU1cg7JWE7Lm0642w66+4XCIsXHJcbiAgICAgIGNvbnRlbnQ6IFwiV2ViIOqwnOuwnCDqtZDsnKEgKDIwMjEpXCIsXHJcbiAgICB9LFxyXG4gICAgeyBuYW1lOiBcIlNLIEh5bml4XCIsIGNvbnRlbnQ6IFwiTkFORCBGbGFzaCBDTVAg6rO17KCV6riw7Iig7YyAIOq3vOustCAoMjAxOSlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIktBVFVTQVwiLCBjb250ZW50OiBcIuyjvO2VnOuvuOq1sOyCrOugueu2gCDsnpHsoITssLjrqqjrtoAg67O166y0ICgyMDE1LTIwMTcpXCIgfSxcclxuICAgIHsgbmFtZTogXCLsl7DshLjrjIDtlZnqtZBcIiwgY29udGVudDogXCLsi6Dshozsnqzqs7XtlZkg7KCE6rO1ICgyMDEzLTIwMTkpXCIgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZmlsZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGhvbWVfZGF0YSBmcm9tIFwiLi9ob21lX2RhdGFcIjtcclxuaW1wb3J0IHByb2ZpbGVfZGF0YSBmcm9tIFwiLi9wcm9maWxlX2RhdGFcIjtcclxuaW1wb3J0IGFydGljbGVfZGF0YSBmcm9tIFwiLi9hcnRpY2xlX2RhdGFcIjtcclxuaW1wb3J0IGFyY2hpdmVfZGF0YSBmcm9tIFwiLi9hcmNoaXZlX2RhdGFcIjtcclxuXHJcbi8vIFN0b3JlIC0gKDEpIOy0iOq4sOqwkiDshKTsoJUgKioqKipcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGhvbWU6IHt9LFxyXG4gIHByb2ZpbGU6IHt9LFxyXG4gIGFydGljbGVzOiB7fSxcclxuICBhcmNoaXZlczogW10sXHJcbiAgcGFnZURhdGE6IHt9LFxyXG59O1xyXG4vLyBTdG9yZSAtICgyKSDstIjquLDqsJLsnYQg64Sj7J2AIENvbnRleHQg7IOd7ISxICoqKioqXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUpO1xyXG5cclxuLy8gU3RvcmUgLSAoMykg7JyE7J2YIENvbnRleHTsmYAg6rSA66Co65CcIFByb3ZpZGVyIOyDneyEsSA6IEluZGV4LmpzIOyaqeuPhCAo66qo65OgIOy7tO2PrOuEjO2KuOyXkOyEnCBTdG9yZSDsoJHqt7wg6rCA64ql7ZWY6rKMIOunjOuTnOuKlCDsl63tlaApXHJcbmNvbnN0IHsgUHJvdmlkZXIgfSA9IHN0b3JlO1xyXG5cclxuLy8gU3RvcmUgLSAoNCkg7JyE7JeQ7IScIOunjOuToCBQcm92aWRlcuulvCBSZXR1cm7tlZjripQgUmVhY3QgQ29tcG9uZW50IDogUmVhY3Qg6rSA66CoIOuCtOyaqeusvOydgCDtla3sg4EgUmVhY3QgQ29tcG9uZW50IO2YleyLneydtCDtlYTsmpRcclxuY29uc3QgU3RhdGVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAvLyBTdG9yZSAtICg1KSB1c2VSZWR1Y2Vy66W8IOyCrOyaqe2VtCB2YWx1ZeyZgCB2YWx1ZeulvCDsl4XrjbDsnbTtirjtlZjripQgZGlzcGF0Y2gg7IOd7ISxICoqKioqXHJcbiAgY29uc3QgW3ZhbHVlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIC8vIEhvbWUgRGF0YSDqsIDsoLjsmKTquLBcclxuICAgICAgY2FzZSBcIkdFVF9IT01FXCI6XHJcbiAgICAgICAgY29uc3QgaG9tZSA9IGhvbWVfZGF0YTtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaG9tZSB9O1xyXG4gICAgICAvLyBQcm9maWxlIERhdGEg6rCA7KC47Jik6riwXHJcbiAgICAgIGNhc2UgXCJHRVRfUFJPRklMRVwiOlxyXG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSBwcm9maWxlX2RhdGE7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2ZpbGUgfTtcclxuICAgICAgLy8gQXJ0aWNsZSBEYXRhIOqwgOyguOyYpOq4sFxyXG4gICAgICBjYXNlIFwiR0VUX0FSVElDTEVTXCI6XHJcbiAgICAgICAgY29uc3QgYXJ0aWNsZXMgPSBhcnRpY2xlX2RhdGE7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgc3RhdGUuYXJ0aWNsZXMuY2F0ZWdvcnlJZCAhPSBudWxsICYmXHJcbiAgICAgICAgICBzdGF0ZS5hcnRpY2xlcy5jYXRlZ29yeUlkICE9PSAtMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgYXJ0aWNsZXMuY2F0ZWdvcnlJZCA9IHN0YXRlLmFydGljbGVzLmNhdGVnb3J5SWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhcnRpY2xlcyB9O1xyXG4gICAgICAvLyBBcmNoaXZlIERhdGEg6rCA7KC47Jik6riwXHJcbiAgICAgIGNhc2UgXCJHRVRfQVJDSElWRVNcIjpcclxuICAgICAgICBjb25zdCBhcmNoaXZlcyA9IGFyY2hpdmVfZGF0YTtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXJjaGl2ZXMgfTtcclxuICAgICAgLy8gQXJ0aWNsZSAtIENob29zZSBBcnRpY2xlIENhdGVnb3J5XHJcbiAgICAgIGNhc2UgXCJTRUxFQ1RfQ0FURUdPUllcIjpcclxuICAgICAgICBjb25zdCBwYXJzZWRJZExpc3QgPSBhY3Rpb24udmFsdWU7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IHBhcnNlSW50KHBhcnNlZElkTGlzdFswXSk7XHJcbiAgICAgICAgbGV0IHN1YkNhdGVnb3J5SWQgPSAtMTtcclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZElkTGlzdC5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgc3ViQ2F0ZWdvcnlJZCA9IHBhcnNlSW50KHBhcnNlZElkTGlzdFsxXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBhcnRpY2xlczogeyAuLi5zdGF0ZS5hcnRpY2xlcywgY2F0ZWdvcnlJZCwgc3ViQ2F0ZWdvcnlJZCB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgIGNhc2UgXCJTRUxFQ1RfUEFHRVwiOlxyXG4gICAgICAgIGNvbnN0IGxhc3RfcGFnZSA9IHBhcnNlSW50KHN0YXRlLmFydGljbGVzLnBhZ2VfZnJvbSAvIDEwKTtcclxuICAgICAgICBjb25zdCBwYWdlID0gYWN0aW9uLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHBhZ2VfZnJvbSA9IHBhZ2UgKiAxMDtcclxuICAgICAgICBjb25zdCBwYWdlX3RvID0gcGFnZV9mcm9tICsgMTA7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhc3RfcGFnZV9ESVYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcGFnZSR7bGFzdF9wYWdlfWApO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkX3BhZ2VfRElWID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BhZ2Uke3BhZ2V9YCk7XHJcblxyXG4gICAgICAgIGlmIChsYXN0X3BhZ2VfRElWKSB7XHJcbiAgICAgICAgICBsYXN0X3BhZ2VfRElWLnN0eWxlW1wiZm9udC1zaXplXCJdID0gXCJ2YXIoLS1taWQtZm9udC1zaXplKVwiO1xyXG4gICAgICAgICAgbGFzdF9wYWdlX0RJVi5zdHlsZVtcImNvbG9yXCJdID0gXCJibGFja1wiO1xyXG4gICAgICAgICAgbGFzdF9wYWdlX0RJVi5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gXCJub3JtYWxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkX3BhZ2VfRElWKSB7XHJcbiAgICAgICAgICBzZWxlY3RlZF9wYWdlX0RJVi5zdHlsZVtcImZvbnQtc2l6ZVwiXSA9IFwidmFyKC0tbGFyZ2UtZm9udC1zaXplKVwiO1xyXG4gICAgICAgICAgc2VsZWN0ZWRfcGFnZV9ESVYuc3R5bGVbXCJjb2xvclwiXSA9IFwidmFyKC0tbWFpbi1jb2xvci1kZWVwLWRhcmspXCI7XHJcbiAgICAgICAgICBzZWxlY3RlZF9wYWdlX0RJVi5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gXCJib2xkXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBhcnRpY2xlczoge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZS5hcnRpY2xlcyxcclxuICAgICAgICAgICAgcGFnZV9mcm9tLFxyXG4gICAgICAgICAgICBwYWdlX3RvLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgY2FzZSBcIlNFVF9QQUdFXCI6XHJcbiAgICAgICAgY29uc3QgcGFnZURhdGEgPSB7IGN1cnJlbnRQYWdlOiBhY3Rpb24udmFsdWUgfTtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcGFnZURhdGEgfTtcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9XHJcbiAgfSwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgLy8gU3RvcmUgLSAoNikgQ29udGV4dOydmCBSZXR1cm4g7ZiV7IudIChDb250ZXh064qUIO2VreyDgSDsnbTroIfqsowg64K066Ck67O064K07JW8IO2VtOyEnCBQcm92aWRlciDtmJXsi53snLzroZwgUmV0dXJuIO2VtCDspIwpXHJcbiAgcmV0dXJuIDxQcm92aWRlciB2YWx1ZT17eyB2YWx1ZSwgZGlzcGF0Y2ggfX0+e2NoaWxkcmVufTwvUHJvdmlkZXI+O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgc3RvcmUsIFN0YXRlUHJvdmlkZXIgfTtcclxuIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fYXBwXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHBcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9Gb290ZXIubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vRm9vdGVyLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL0Zvb3Rlci5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMl0hLi9IZWFkZXIubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzJdIS4vSGVhZGVyLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL0hlYWRlci5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls2XS51c2VbMl0hLi9nbG9iYWxzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNl0udXNlWzJdIS4vZ2xvYmFscy5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzZdLnVzZVsyXSEuL2dsb2JhbHMuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUxKCkge1xuICAgIGxldCBtZW1vO1xuICAgIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgICAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgICAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgICAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICAgICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgfTtcbn0oKTtcbmNvbnN0IGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldDEoKSB7XG4gICAgY29uc3QgbWVtbyA9IHtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBsZXQgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgICAgICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgICB9O1xufSgpO1xuY29uc3Qgc3R5bGVzSW5Eb20gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgICBsZXQgcmVzdWx0ID0gLTE7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZENvdW50TWFwID0ge1xuICAgIH07XG4gICAgY29uc3QgaWRlbnRpZmllcnMgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBsaXN0W2ldO1xuICAgICAgICBjb25zdCBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgICAgICBjb25zdCBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBpZCArICcgJyArIGNvdW50LnRvU3RyaW5nKCk7XG4gICAgICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICAgICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgICAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgICAgICB9O1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgICAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICAgIH1cbiAgICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHtcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3Qgbm9uY2UgPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gICAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gICAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqLyBjb25zdCByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0MSgpIHtcbiAgICBjb25zdCB0ZXh0U3RvcmUgPSBbXTtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICAgICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgICAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgICB9O1xufSgpO1xuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gICAgY29uc3QgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyAnQG1lZGlhICcgKyBvYmoubWVkaWEgKyAnIHsnICsgb2JqLmNzcyArICd9JyA6IG9iai5jc3M7XG4gICAgLy8gRm9yIG9sZCBJRVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi8gaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuICAgICAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICAgIGxldCBjc3MgPSBvYmouY3NzO1xuICAgIGNvbnN0IG1lZGlhID0gb2JqLm1lZGlhO1xuICAgIGNvbnN0IHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICAgIH1cbiAgICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJztcbiAgICB9XG4gICAgLy8gRm9yIG9sZCBJRVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi8gaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxufVxubGV0IHNpbmdsZXRvbiA9IG51bGw7XG5sZXQgc2luZ2xldG9uQ291bnRlciA9IDA7XG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgICBsZXQgc3R5bGU7XG4gICAgbGV0IHVwZGF0ZTtcbiAgICBsZXQgcmVtb3ZlO1xuICAgIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgICAgICBjb25zdCBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgICAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICAgICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG4gICAgICAgIHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdXBkYXRlKG9iaik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgICAgICBpZiAobmV3T2JqKSB7XG4gICAgICAgICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7XG4gICAgfTtcbiAgICAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG4gICAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgICAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgICB9XG4gICAgbGlzdCA9IGxpc3QgfHwgW107XG4gICAgbGV0IGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICAgICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICAgIGZvcihsZXQgaTEgPSAwOyBpMSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkxKyspe1xuICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpMV07XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgICAgICAgaWYgKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgICB9O1xufTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezc2MjpmdW5jdGlvbihuKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIHQ9W107dC50b1N0cmluZz1mdW5jdGlvbiB0b1N0cmluZygpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXt2YXIgcj1jc3NXaXRoTWFwcGluZ1RvU3RyaW5nKHQsbik7aWYodFsyXSl7cmV0dXJuXCJAbWVkaWEgXCIuY29uY2F0KHRbMl0sXCIge1wiKS5jb25jYXQocixcIn1cIil9cmV0dXJuIHJ9KS5qb2luKFwiXCIpfTt0Lmk9ZnVuY3Rpb24obixyLG8pe2lmKHR5cGVvZiBuPT09XCJzdHJpbmdcIil7bj1bW251bGwsbixcIlwiXV19dmFyIGU9e307aWYobyl7Zm9yKHZhciBhPTA7YTx0aGlzLmxlbmd0aDthKyspe3ZhciBjPXRoaXNbYV1bMF07aWYoYyE9bnVsbCl7ZVtjXT10cnVlfX19Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciB1PVtdLmNvbmNhdChuW2ldKTtpZihvJiZlW3VbMF1dKXtjb250aW51ZX1pZihyKXtpZighdVsyXSl7dVsyXT1yfWVsc2V7dVsyXT1cIlwiLmNvbmNhdChyLFwiIGFuZCBcIikuY29uY2F0KHVbMl0pfX10LnB1c2godSl9fTtyZXR1cm4gdH07ZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhuLHQpe3ZhciByPW5bMV18fFwiXCI7dmFyIG89blszXTtpZighbyl7cmV0dXJuIHJ9aWYodCYmdHlwZW9mIGJ0b2E9PT1cImZ1bmN0aW9uXCIpe3ZhciBlPXRvQ29tbWVudChvKTt2YXIgYT1vLnNvdXJjZXMubWFwKGZ1bmN0aW9uKG4pe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoby5zb3VyY2VSb290fHxcIlwiKS5jb25jYXQobixcIiAqL1wiKX0pO3JldHVybltyXS5jb25jYXQoYSkuY29uY2F0KFtlXSkuam9pbihcIlxcblwiKX1yZXR1cm5bcl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiB0b0NvbW1lbnQobil7dmFyIHQ9YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7dmFyIHI9XCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQodCk7cmV0dXJuXCIvKiMgXCIuY29uY2F0KHIsXCIgKi9cIil9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXtpZih0W3JdKXtyZXR1cm4gdFtyXS5leHBvcnRzfXZhciBvPXRbcl09e2V4cG9ydHM6e319O3ZhciBlPXRydWU7dHJ5e25bcl0obyxvLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7ZT1mYWxzZX1maW5hbGx5e2lmKGUpZGVsZXRlIHRbcl19cmV0dXJuIG8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg3NjIpfSgpOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Gb290ZXJfRm9vdGVyX18xNkJLMyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBtYXJnaW4tdG9wOiAtODBweDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgICAtbW96LWJveC1wYWNrOiBzcGFjZS1ldmVubHk7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIFxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuXFxyXFxuICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA3MCwgNzApO1xcclxcbn1cXHJcXG5cXHJcXG4uRm9vdGVyX0Zvb3Rlcl9fZ2l0aHViX18zRlJ3LSA+IGEge1xcclxcbiAgY29sb3I6IHJnYigyMTEsIDIzNCwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLkZvb3Rlcl9Gb290ZXJfX2VtYWlsX19nYld5eiA+IHNwYW4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHJnYigyMTEsIDIzNCwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyog67CY7J2R7ZiVIOybuSDrlJTsnpDsnbggKi9cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcXHJcXG4gIC5Gb290ZXJfRm9vdGVyX18xNkJLMyB7XFxyXFxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXHJcXG4gICAgICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Gb290ZXIubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsaUJBQWlCOztFQUVqQixxQkFBYTs7RUFBYixpQkFBYTs7RUFBYixhQUFhO0VBQ2IscUNBQTZCO0tBQTdCLDJCQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IsMkJBQW1CO0tBQW5CLHNCQUFtQjtVQUFuQixtQkFBbUI7O0VBRW5CLFdBQVc7RUFDWCxZQUFZOztFQUVaLGdCQUFnQjtFQUNoQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOzs7QUFHQSxjQUFjO0FBQ2Q7RUFDRTtJQUNFLDhCQUFzQjtPQUF0Qix5QkFBc0I7T0FBdEIsMEJBQXNCO1lBQXRCLHNCQUFzQjtFQUN4QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5Gb290ZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbWFyZ2luLXRvcDogLTgwcHg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG5cXHJcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XFxyXFxufVxcclxcblxcclxcbi5Gb290ZXJfX2dpdGh1YiA+IGEge1xcclxcbiAgY29sb3I6IHJnYigyMTEsIDIzNCwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLkZvb3Rlcl9fZW1haWwgPiBzcGFuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiByZ2IoMjExLCAyMzQsIDI1NSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIOuwmOydke2YlSDsm7kg65SU7J6Q7J24ICovXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxyXFxuICAuRm9vdGVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiRm9vdGVyXCI6IFwiRm9vdGVyX0Zvb3Rlcl9fMTZCSzNcIixcblx0XCJGb290ZXJfX2dpdGh1YlwiOiBcIkZvb3Rlcl9Gb290ZXJfX2dpdGh1Yl9fM0ZSdy1cIixcblx0XCJGb290ZXJfX2VtYWlsXCI6IFwiRm9vdGVyX0Zvb3Rlcl9fZW1haWxfX2diV3l6XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkhlYWRlcl9IZWFkZXJfXzFKOXNOIHtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcXHJcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIFxcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG5cXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDAuMXB4IDVweCAxcHggdmFyKC0tZ3JleSk7XFxyXFxuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwLjFweCA1cHggMXB4IHZhcigtLWdyZXkpO1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyX0hlYWRlcl9fc3R5bGluZ19fVTM2MUUge1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgZGlzcGxheTogLW1vei1ib3g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMCU7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCB2YXIoLS1tYWluLWNvbG9yKSA1MCUsIHZhcigtLXN1Yi1jb2xvcikgNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlcl9IZWFkZXJfX3N0eWxpbmdfX1UzNjFFID4gaW1nIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAydnc7IFxcclxcbiAgd2lkdGg6IDR2dztcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlcl9IZWFkZXJfX3N0eWxpbmdfUmV2ZXJzZV9fMkcxc2Mge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwJTtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHZhcigtLXN1Yi1jb2xvcikgNTAlLCB2YXIoLS1tYWluLWNvbG9yKSA1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyX0hlYWRlcl9fd29yZF9faHFnS1Yge1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS14bGFyZ2UtZm9udC1zaXplKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiDslaDri4jrqZTsnbTshZggKi9cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgSGVhZGVyX2JvdW5jZV9fM0xBTzgge1xcclxcbiAgMCUsIDEwMCUsIDIwJSwgNTMlLCA4MCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIC42MSwgLjM1NSwgMSk7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgLjYxLCAuMzU1LCAxKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMClcXHJcXG4gIH1cXHJcXG4gIDQwJSxcXHJcXG4gIDQzJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgLjA1MCwgLjg1NSwgLjA2MCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgLjA1MCwgLjg1NSwgLjA2MCk7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzBweCwgMClcXHJcXG4gIH1cXHJcXG4gIDcwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgLjA1MCwgLjg1NSwgLjA2MCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgLjA1MCwgLjg1NSwgLjA2MCk7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTVweCwgMCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTVweCwgMClcXHJcXG4gIH1cXHJcXG4gIDkwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNHB4LCAwKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC00cHgsIDApXFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgSGVhZGVyX2JvdW5jZV9fM0xBTzgge1xcclxcbiAgMCUsIDEwMCUsIDIwJSwgNTMlLCA4MCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIC42MSwgLjM1NSwgMSk7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgLjYxLCAuMzU1LCAxKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMClcXHJcXG4gIH1cXHJcXG4gIDQwJSxcXHJcXG4gIDQzJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgLjA1MCwgLjg1NSwgLjA2MCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgLjA1MCwgLjg1NSwgLjA2MCk7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzBweCwgMClcXHJcXG4gIH1cXHJcXG4gIDcwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgLjA1MCwgLjg1NSwgLjA2MCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgLjA1MCwgLjg1NSwgLjA2MCk7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTVweCwgMCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTVweCwgMClcXHJcXG4gIH1cXHJcXG4gIDkwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNHB4LCAwKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC00cHgsIDApXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJfYm91bmNlX18zTEFPOCB7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IEhlYWRlcl9ib3VuY2VfXzNMQU84O1xcclxcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogSGVhZGVyX2JvdW5jZV9fM0xBTzg7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b21cXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIEhlYWRlcl9zbGlkZU91dExlZnRfXzIxTGQtIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMClcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUwJSwgMCwgMCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUwJSwgMCwgMClcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBIZWFkZXJfc2xpZGVPdXRMZWZ0X18yMUxkLSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApXFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1MCUsIDAsIDApO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1MCUsIDAsIDApXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBIZWFkZXJfaGluZ2VfX2wxS3NSIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dFxcclxcbiAgfVxcclxcbiAgMjAlLFxcclxcbiAgNjAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDgwZGVnKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDgwZGVnKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dFxcclxcbiAgfVxcclxcbiAgNDAlLFxcclxcbiAgODAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDYwZGVnKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDYwZGVnKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXHJcXG4gICAgb3BhY2l0eTogMVxcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxNTB2aCwgMCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxNTB2aCwgMCk7XFxyXFxuICAgIG9wYWNpdHk6IDBcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBIZWFkZXJfaGluZ2VfX2wxS3NSIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dFxcclxcbiAgfVxcclxcbiAgMjAlLFxcclxcbiAgNjAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDgwZGVnKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDgwZGVnKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dFxcclxcbiAgfVxcclxcbiAgNDAlLFxcclxcbiAgODAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDYwZGVnKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDYwZGVnKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXHJcXG4gICAgb3BhY2l0eTogMVxcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxNTB2aCwgMCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxNTB2aCwgMCk7XFxyXFxuICAgIG9wYWNpdHk6IDBcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlcl9oaW5nZV9fbDFLc1Ige1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBIZWFkZXJfaGluZ2VfX2wxS3NSO1xcclxcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogSGVhZGVyX2hpbmdlX19sMUtzUlxcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgSGVhZGVyX3NoYWtlX19oT2g4RiB7XFxyXFxuICAwJSwgMTAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApXFxyXFxuICB9XFxyXFxuICAxMCUsXFxyXFxuICAzMCUsXFxyXFxuICA1MCUsXFxyXFxuICA3MCUsXFxyXFxuICA5MCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApXFxyXFxuICB9XFxyXFxuICAyMCUsXFxyXFxuICA0MCUsXFxyXFxuICA2MCUsXFxyXFxuICA4MCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIEhlYWRlcl9zaGFrZV9faE9oOEYge1xcclxcbiAgMCUsIDEwMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKVxcclxcbiAgfVxcclxcbiAgMTAlLFxcclxcbiAgMzAlLFxcclxcbiAgNTAlLFxcclxcbiAgNzAlLFxcclxcbiAgOTAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKVxcclxcbiAgfVxcclxcbiAgMjAlLFxcclxcbiAgNDAlLFxcclxcbiAgNjAlLFxcclxcbiAgODAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMClcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlcl9zbGlkZU91dExlZnRfXzIxTGQtIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogSGVhZGVyX3NsaWRlT3V0TGVmdF9fMjFMZC07XFxyXFxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBIZWFkZXJfc2xpZGVPdXRMZWZ0X18yMUxkLVxcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgSGVhZGVyX3pvb21JbkRvd25fX3psMW9RIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMCwgLTEwMDBweCwgMCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4xLCAuMSwgLjEpIHRyYW5zbGF0ZTNkKDAsIC0xMDAwcHgsIDApO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAuMDU1LCAuNjc1LCAuMTkpO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAuMDU1LCAuNjc1LCAuMTkpXFxyXFxuICB9XFxyXFxuICA2MCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoMCwgNjBweCwgMCk7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAuODg1LCAuMzIsIDEpO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgLjg4NSwgLjMyLCAxKVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIEhlYWRlcl96b29tSW5Eb3duX196bDFvUSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC4xLCAuMSwgLjEpIHRyYW5zbGF0ZTNkKDAsIC0xMDAwcHgsIDApO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgwLCAtMTAwMHB4LCAwKTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgLjA1NSwgLjY3NSwgLjE5KTtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgLjA1NSwgLjY3NSwgLjE5KVxcclxcbiAgfVxcclxcbiAgNjAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoMCwgNjBweCwgMCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgLjg4NSwgLjMyLCAxKTtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIC44ODUsIC4zMiwgMSlcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlcl96b29tSW5Eb3duX196bDFvUSB7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IEhlYWRlcl96b29tSW5Eb3duX196bDFvUTtcXHJcXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IEhlYWRlcl96b29tSW5Eb3duX196bDFvUVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiDrsJjsnZHtmJUg7Ju5IOuUlOyekOyduCAqL1xcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkge1xcclxcbiAgLkhlYWRlcl9IZWFkZXJfX3N0eWxpbmdfX1UzNjFFID4gaW1nIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIC5IZWFkZXJfSGVhZGVyX19zdHlsaW5nX19VMzYxRSA+IGltZzpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMXM7XFxyXFxuICAgIHRyYW5zaXRpb246IDFzO1xcclxcbiAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9jb21wb25lbnRzL0hlYWRlci5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQWE7RUFBYixpQkFBYTtFQUFiLGFBQWE7RUFDYixzQ0FBOEI7S0FBOUIsc0JBQThCO1VBQTlCLDhCQUE4QjtFQUM5QiwyQkFBbUI7S0FBbkIsc0JBQW1CO1VBQW5CLG1CQUFtQjs7RUFFbkIsZUFBZTtFQUNmLE1BQU07RUFDTixVQUFVOztFQUVWLFlBQVk7RUFDWixXQUFXOztFQUVYLG1DQUFtQztFQUNuQyxpREFBeUM7VUFBekMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UscUJBQWE7RUFBYixpQkFBYTtFQUFiLGFBQWE7RUFDYiwyQkFBbUI7S0FBbkIsc0JBQW1CO1VBQW5CLG1CQUFtQjs7RUFFbkIsWUFBWTtFQUNaLFVBQVU7O0VB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SUFDekQsc0VBQTZEO1lBQTdEO0VBQ0Y7RUFDQTtJQUNFLFVBQVU7SUFDVixvRUFBNEQ7WUFBNUQsNERBQTREO0lBQzVELG9FQUEyRDtZQUEzRDtFQUNGO0FBQ0Y7O0FBWEE7RUFDRTtJQUNFLFVBQVU7SUFDVixpRUFBeUQ7WUFBekQseURBQXlEO0lBQ3pELHNFQUE2RDtZQUE3RDtFQUNGO0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysb0VBQTREO1lBQTVELDREQUE0RDtJQUM1RCxvRUFBMkQ7WUFBM0Q7RUFDRjtBQUNGOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLGdEQUF5QjtVQUF6QjtBQUNGOzs7QUFHQSxjQUFjO0FBQ2Q7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtJQUNWLHNCQUFjO0lBQWQsY0FBYztFQUNoQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5IZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuXFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIFxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMC4xcHggNXB4IDFweCB2YXIoLS1ncmV5KTtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlcl9fc3R5bGluZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMCU7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCB2YXIoLS1tYWluLWNvbG9yKSA1MCUsIHZhcigtLXN1Yi1jb2xvcikgNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlcl9fc3R5bGluZyA+IGltZyB7XFxyXFxuICBtYXJnaW4tbGVmdDogMnZ3OyBcXHJcXG4gIHdpZHRoOiA0dnc7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJfX3N0eWxpbmdfUmV2ZXJzZSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAlO1xcclxcblxcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgdmFyKC0tc3ViLWNvbG9yKSA1MCUsIHZhcigtLW1haW4tY29sb3IpIDUwJSk7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJfX3dvcmQge1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS14bGFyZ2UtZm9udC1zaXplKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiDslaDri4jrqZTsnbTshZggKi9cXHJcXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XFxyXFxuICAwJSwgMTAwJSwgMjAlLCA1MyUsIDgwJSB7XFxyXFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIC42MSwgLjM1NSwgMSk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMClcXHJcXG4gIH1cXHJcXG4gIDQwJSxcXHJcXG4gIDQzJSB7XFxyXFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIC4wNTAsIC44NTUsIC4wNjApO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKVxcclxcbiAgfVxcclxcbiAgNzAlIHtcXHJcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgLjA1MCwgLjg1NSwgLjA2MCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApXFxyXFxuICB9XFxyXFxuICA5MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC00cHgsIDApXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5ib3VuY2Uge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxuICBhbmltYXRpb24tbmFtZTogYm91bmNlO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0TGVmdCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMClcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1MCUsIDAsIDApXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgaGluZ2Uge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXRcXHJcXG4gIH1cXHJcXG4gIDIwJSxcXHJcXG4gIDYwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgODBkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXRcXHJcXG4gIH1cXHJcXG4gIDQwJSxcXHJcXG4gIDgwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNjBkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxyXFxuICAgIG9wYWNpdHk6IDFcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDE1MHZoLCAwKTtcXHJcXG4gICAgb3BhY2l0eTogMFxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGluZ2Uge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxuICBhbmltYXRpb24tbmFtZTogaGluZ2VcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxyXFxuICAwJSwgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMClcXHJcXG4gIH1cXHJcXG4gIDEwJSxcXHJcXG4gIDMwJSxcXHJcXG4gIDUwJSxcXHJcXG4gIDcwJSxcXHJcXG4gIDkwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApXFxyXFxuICB9XFxyXFxuICAyMCUsXFxyXFxuICA0MCUsXFxyXFxuICA2MCUsXFxyXFxuICA4MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zbGlkZU91dExlZnQge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxuICBhbmltYXRpb24tbmFtZTogc2xpZGVPdXRMZWZ0XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgem9vbUluRG93biB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgwLCAtMTAwMHB4LCAwKTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIC4wNTUsIC42NzUsIC4xOSlcXHJcXG4gIH1cXHJcXG4gIDYwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAuODg1LCAuMzIsIDEpXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi56b29tSW5Eb3duIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21JbkRvd25cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyog67CY7J2R7ZiVIOybuSDrlJTsnpDsnbggKi9cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcXHJcXG4gIC5IZWFkZXJfX3N0eWxpbmcgPiBpbWcge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgLkhlYWRlcl9fc3R5bGluZyA+IGltZzpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zaXRpb246IDFzO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJIZWFkZXJcIjogXCJIZWFkZXJfSGVhZGVyX18xSjlzTlwiLFxuXHRcIkhlYWRlcl9fc3R5bGluZ1wiOiBcIkhlYWRlcl9IZWFkZXJfX3N0eWxpbmdfX1UzNjFFXCIsXG5cdFwiSGVhZGVyX19zdHlsaW5nX1JldmVyc2VcIjogXCJIZWFkZXJfSGVhZGVyX19zdHlsaW5nX1JldmVyc2VfXzJHMXNjXCIsXG5cdFwiSGVhZGVyX193b3JkXCI6IFwiSGVhZGVyX0hlYWRlcl9fd29yZF9faHFnS1ZcIixcblx0XCJib3VuY2VcIjogXCJIZWFkZXJfYm91bmNlX18zTEFPOFwiLFxuXHRcImhpbmdlXCI6IFwiSGVhZGVyX2hpbmdlX19sMUtzUlwiLFxuXHRcInNsaWRlT3V0TGVmdFwiOiBcIkhlYWRlcl9zbGlkZU91dExlZnRfXzIxTGQtXCIsXG5cdFwiem9vbUluRG93blwiOiBcIkhlYWRlcl96b29tSW5Eb3duX196bDFvUVwiLFxuXHRcInNoYWtlXCI6IFwiSGVhZGVyX3NoYWtlX19oT2g4RlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ0dvd3VuIEJhdGFuZycsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJyxcXG4gICAgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG5jb2RlIHtcXG4gIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnQ291cmllciBOZXcnLFxcbiAgICBtb25vc3BhY2U7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5wIHtcXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbn1cXG5cXG46cm9vdCB7XFxuICAvKiDsg4nsg4Eg7KCV67O0ICovXFxuICAtLW1haW4tY29sb3I6ICNlN2YwZjM7XFxuICAtLW1haW4tY29sb3ItZGFyazogI2EwYzRjZjtcXG4gIC0tbWFpbi1jb2xvci1kZWVwLWRhcms6ICM2MjdmODg7XFxuICAtLXN1Yi1jb2xvcjogI2Y5ZmFmOGZkO1xcbiAgLS1zdWItY29sb3ItZGFyazogI2UzZTZlMWZkO1xcbiAgLS1zdWItY29sb3Itb3BhY2l0eTogcmdiYSgyNDksMjUwLDI0OCwwLjgpO1xcbiAgLS1zdWItY29sb3ItZGFyay1vcGFjaXR5OiByZ2JhKDIyNywyMzAsMjI1LDAuOCk7XFxuICAtLW9yYW5nZTogI0ZGN0EwMDtcXG4gIC0tcmVkOiAjRkY0ODQyO1xcbiAgLS15ZWxsb3c6ICNGRkMxMDc7XFxuICAtLWJsdWU6ICMxODkwRkY7XFxuICAtLWdyZXk6ICNDQUNBQ0E7XFxuICAtLWJyaWdodC1ncmV5OiAjRjJGMkYyO1xcbiAgLS1saW5rLWNvbG9yOiAjMDBBQjU1O1xcbiAgLS1oaWdobGlnaHQtY29sb3I6ICNiOGZmZGM7XFxuICAtLXN1Yi1oaWdobGlnaHQtY29sb3I6ICNkZmZmZWY7XFxuICBcXG5cXG4gIC8qIO2PsO2KuCDsgqzsnbTtirggKi9cXG4gIC0tc21hbGwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1tYWluLWZvbnQtc2l6ZTogMTRweDtcXG4gIC0tbWlkLWZvbnQtc2l6ZTogMTZweDtcXG4gIC0tbGFyZ2UtZm9udC1zaXplOiAxOHB4O1xcbiAgLS14bGFyZ2UtZm9udC1zaXplOiAyMXB4O1xcbiAgLS14eGxhcmdlLWZvbnQtc2l6ZTogMjRweDtcXG4gIC0taHVnZS1mb250LXNpemU6IDI4cHg7XFxuXFxuICAvKiBtYXJnaW4sIHBhZGRpbmcgKi9cXG4gIC0tc21hbGwtbWFyZ2luLXNpemU6IDEycHg7XFxuICAtLW1haW4tbWFyZ2luLXNpemU6IDE2cHg7XFxuICAtLW1pZC1tYXJnaW4tc2l6ZTogMjFweDtcXG4gIC0tbGFyZ2UtbWFyZ2luLXNpemU6IDM2cHg7XFxuICAtLXhsYXJnZS1tYXJnaW4tc2l6ZTogNDhweDtcXG5cXG4gIC8qIOuyhO2KvCDtgazquLAgKi9cXG4gIC0tYnRuLWhlaWdodDogMzBweDtcXG5cXG4gIC8qIOyCrOynhCDtgazquLAgKi9cXG4gIC0tc21hbGwtcGljdHVyZTogMjBweDtcXG4gIC0tbG9nby13aWR0aDogMzAwcHg7XFxufVxcblxcbi5BcHAge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5BcHBfX0NvbnRlbnQge1xcbiAgcGFkZGluZy10b3A6IDcwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNUOztjQUVZO0VBQ1osbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFO2FBQ1c7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDBDQUEwQztFQUMxQywrQ0FBK0M7RUFDL0MsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiw4QkFBOEI7OztFQUc5QixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsc0JBQXNCOztFQUV0QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLDBCQUEwQjs7RUFFMUIsVUFBVTtFQUNWLGtCQUFrQjs7RUFFbEIsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQiw4QkFBcUI7S0FBckIsMkJBQXFCO1VBQXJCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnR293dW4gQmF0YW5nJywgJ1NlZ29lIFVJJywgJ1JvYm90bycsICdPeHlnZW4nLFxcbiAgICAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsXFxuICAgIHNhbnMtc2VyaWY7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbmNvZGUge1xcbiAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdDb3VyaWVyIE5ldycsXFxuICAgIG1vbm9zcGFjZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnAge1xcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxufVxcblxcbjpyb290IHtcXG4gIC8qIOyDieyDgSDsoJXrs7QgKi9cXG4gIC0tbWFpbi1jb2xvcjogI2U3ZjBmMztcXG4gIC0tbWFpbi1jb2xvci1kYXJrOiAjYTBjNGNmO1xcbiAgLS1tYWluLWNvbG9yLWRlZXAtZGFyazogIzYyN2Y4ODtcXG4gIC0tc3ViLWNvbG9yOiAjZjlmYWY4ZmQ7XFxuICAtLXN1Yi1jb2xvci1kYXJrOiAjZTNlNmUxZmQ7XFxuICAtLXN1Yi1jb2xvci1vcGFjaXR5OiByZ2JhKDI0OSwyNTAsMjQ4LDAuOCk7XFxuICAtLXN1Yi1jb2xvci1kYXJrLW9wYWNpdHk6IHJnYmEoMjI3LDIzMCwyMjUsMC44KTtcXG4gIC0tb3JhbmdlOiAjRkY3QTAwO1xcbiAgLS1yZWQ6ICNGRjQ4NDI7XFxuICAtLXllbGxvdzogI0ZGQzEwNztcXG4gIC0tYmx1ZTogIzE4OTBGRjtcXG4gIC0tZ3JleTogI0NBQ0FDQTtcXG4gIC0tYnJpZ2h0LWdyZXk6ICNGMkYyRjI7XFxuICAtLWxpbmstY29sb3I6ICMwMEFCNTU7XFxuICAtLWhpZ2hsaWdodC1jb2xvcjogI2I4ZmZkYztcXG4gIC0tc3ViLWhpZ2hsaWdodC1jb2xvcjogI2RmZmZlZjtcXG4gIFxcblxcbiAgLyog7Y+w7Yq4IOyCrOydtO2KuCAqL1xcbiAgLS1zbWFsbC1mb250LXNpemU6IDEycHg7XFxuICAtLW1haW4tZm9udC1zaXplOiAxNHB4O1xcbiAgLS1taWQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1sYXJnZS1mb250LXNpemU6IDE4cHg7XFxuICAtLXhsYXJnZS1mb250LXNpemU6IDIxcHg7XFxuICAtLXh4bGFyZ2UtZm9udC1zaXplOiAyNHB4O1xcbiAgLS1odWdlLWZvbnQtc2l6ZTogMjhweDtcXG5cXG4gIC8qIG1hcmdpbiwgcGFkZGluZyAqL1xcbiAgLS1zbWFsbC1tYXJnaW4tc2l6ZTogMTJweDtcXG4gIC0tbWFpbi1tYXJnaW4tc2l6ZTogMTZweDtcXG4gIC0tbWlkLW1hcmdpbi1zaXplOiAyMXB4O1xcbiAgLS1sYXJnZS1tYXJnaW4tc2l6ZTogMzZweDtcXG4gIC0teGxhcmdlLW1hcmdpbi1zaXplOiA0OHB4O1xcblxcbiAgLyog67KE7Yq8IO2BrOq4sCAqL1xcbiAgLS1idG4taGVpZ2h0OiAzMHB4O1xcblxcbiAgLyog7IKs7KeEIO2BrOq4sCAqL1xcbiAgLS1zbWFsbC1waWN0dXJlOiAyMHB4O1xcbiAgLS1sb2dvLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLkFwcCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLkFwcF9fQ29udGVudCB7XFxuICBwYWRkaW5nLXRvcDogNzBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG5cbnZhciBqc3hERVYkMSA9ICBqc3hXaXRoVmFsaWRhdGlvbiA7XG5cbmV4cG9ydHMuanN4REVWID0ganN4REVWJDE7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59Il0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwiX3VzZUludGVyc2VjdGlvbiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJocmVmIiwiYXMiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImNhdGNoIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiTGluayIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZVJlZiIsImN1cnJlbnQiLCJjb25zb2xlIiwid2FybiIsInAiLCJ1c2VSb3V0ZXIiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsInR5cGUiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwiaWQiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJzZXQiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsIk1hcCIsImluc3RhbmNlIiwiZ2V0IiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIlJlYWN0Iiwic3R5bGVzIiwiRm9vdGVyIiwiY29weUVtYWlsIiwidGV4dGFyZWEiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlQ2hpbGQiLCJhbGVydCIsIkZvb3Rlcl9fZ2l0aHViIiwiRm9vdGVyX19lbWFpbCIsIkhlYWRlciIsIm9uTW92ZSIsInNldE9uTW92ZSIsImxvZ29BbmltYXRpb24iLCJhbmltYXRpb25UeXBlIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwiZW5kQW5pbWF0aW9uIiwiY2xhc3NOYW1lIiwibG9nbyIsInNsaWRlT3V0TGVmdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaW5nZSIsInNldFRpbWVvdXQiLCJ6b29tSW5Eb3duIiwiYm91bmNlIiwiSGVhZGVyX19zdHlsaW5nIiwiSGVhZGVyX193b3JkIiwiSGVhZGVyX19zdHlsaW5nX1JldmVyc2UiLCJTdGF0ZVByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcmNoaXZlcyIsInRpdGxlIiwiZGV0YWlscyIsImRhdGUiLCJpbWFnZXMiLCJjb250ZW50IiwiQ1MiLCJDU19TdWJDYXRlZ29yeSIsIkRldmVsb3AiLCJEZXZlbG9wX1N1YkNhdGVnb3J5IiwiV2ViIiwiV2ViX1N1YkNhdGVnb3J5IiwiQmxvY2tDaGFpbiIsIkJsb2NrQ2hhaW5fU3ViQ2F0ZWdvcnkiLCJGYWlsdXJlIiwiRmFpbHVyZV9TdWJDYXRlZ29yeSIsIlN0dWRpZWQiLCJTdHVkaWVkX1N1YkNhdGVnb3J5IiwiQWxnb3JpdGhtIiwiQWxnb3JpdGhtX1N1YkNhdGVnb3J5IiwiYXJ0aWNsZXMiLCJjYXRlZ29yeUlkIiwic3ViQ2F0ZWdvcnlJZCIsImNhdGVnb3J5TGlzdCIsImNhdGVnb3J5Iiwic3ViQ2F0ZWdvcnkiLCJpdGVtTGlzdCIsInBhZ2VfZnJvbSIsInBhZ2VfdG8iLCJEYXRlIiwiaG9tZSIsInByb2ZpbGVfaW1nIiwic3VtbWFyeSIsIndlbGNvbWVfd29yZCIsImludHJvZHVjdGlvbiIsInByb2ZpbGUiLCJ0ZWNoX3N0YWNrIiwiZnJvbnRlbmQiLCJiYWNrZW5kIiwidmVyc2lvbl9jb250cm9sIiwic3R1ZHlpbmciLCJjYXJlZXIiLCJuYW1lIiwiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJob21lX2RhdGEiLCJwcm9maWxlX2RhdGEiLCJhcnRpY2xlX2RhdGEiLCJhcmNoaXZlX2RhdGEiLCJpbml0aWFsU3RhdGUiLCJwYWdlRGF0YSIsInN0b3JlIiwiUHJvdmlkZXIiLCJkaXNwYXRjaCIsInN0YXRlIiwiYWN0aW9uIiwicGFyc2VkSWRMaXN0IiwibGVuZ3RoIiwibGFzdF9wYWdlIiwicGFnZSIsImxhc3RfcGFnZV9ESVYiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0ZWRfcGFnZV9ESVYiLCJzdHlsZSIsImN1cnJlbnRQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==