(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/styles/components/Header.module.css
var Header_module = __webpack_require__(8764);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/Header/Header.js






function Header() {
  const {
    0: onMove,
    1: setOnMove
  } = (0,external_react_.useState)(false);

  function logoAnimation(event) {
    if (!onMove) {
      setOnMove(true);
      const element = event.target;
      const animationType = parseInt(Math.random() * 1000 % 10) % 3;

      function endAnimation() {
        element.className = `${(Header_module_default()).logo}`;
      }

      if (animationType) {
        if (animationType === 1) {
          element.className = `${(Header_module_default()).slideOutLeft}`;
          element.addEventListener("animationend", endAnimation);
        } else {
          element.className = `${(Header_module_default()).hinge}`;
          element.addEventListener("animationend", endAnimation);
        }

        setTimeout(() => {
          element.className = `${(Header_module_default()).zoomInDown}`;
          element.addEventListener("animationend", endAnimation);
        }, 900);
      } else {
        element.className = `${(Header_module_default()).bounce}`;
        element.addEventListener("animationend", endAnimation);
      }

      setOnMove(false);
    }
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Header_module_default()).Header,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Header_module_default()).Header__styling,
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/myLogo_transp.png",
        alt: "logo",
        onClick: logoAnimation
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: (Header_module_default()).Header__word,
        children: "Home"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/profile",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: (Header_module_default()).Header__word,
        children: "Profile"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/articles",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: (Header_module_default()).Header__word,
        children: "Articles"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/archives",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: (Header_module_default()).Header__word,
        children: "Archives"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Header_module_default()).Header__styling_Reverse
    })]
  });
}

/* harmony default export */ const Header_Header = (Header);
// EXTERNAL MODULE: ./src/styles/components/Footer.module.css
var Footer_module = __webpack_require__(5878);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.js





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

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Footer_module_default()).Footer,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Footer_module_default()).Footer__github,
      children: ["Github : ", /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://github.com/ParkJeongwoong",
        children: "ParkJeongwoong"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Footer_module_default()).Footer__email,
      children: ["Contact : ", /*#__PURE__*/jsx_runtime_.jsx("span", {
        onClick: copyEmail,
        children: "dvlprjw@gmail.com"
      })]
    })]
  });
}

/* harmony default export */ const Footer_Footer = (Footer);
// EXTERNAL MODULE: ./src/store/store.js + 3 modules
var store = __webpack_require__(6645);
;// CONCATENATED MODULE: ./src/pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(store/* StateProvider */.X, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "App",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "App__Content",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Header_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
      }), /*#__PURE__*/jsx_runtime_.jsx(Footer_Footer, {})]
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 5878:
/***/ ((module) => {

// Exports
module.exports = {
	"Footer": "Footer_Footer__16BK3",
	"Footer__github": "Footer_Footer__github__3FRw-",
	"Footer__email": "Footer_Footer__email__gbWyz"
};


/***/ }),

/***/ 8764:
/***/ ((module) => {

// Exports
module.exports = {
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


/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,645], () => (__webpack_exec__(1553)));
module.exports = __webpack_exports__;

})();