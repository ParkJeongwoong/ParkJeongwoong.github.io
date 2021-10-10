(() => {
var exports = {};
exports.id = 347;
exports.ids = [347];
exports.modules = {

/***/ 5738:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3703);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7964);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7424);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1762);
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styles_globalStyles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3124);
/* harmony import */ var styles_globalStyles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_globalStyles_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styles_components_MarkdownRenderer_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2544);
/* harmony import */ var styles_components_MarkdownRenderer_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styles_components_MarkdownRenderer_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark_gfm__WEBPACK_IMPORTED_MODULE_2__, react_markdown__WEBPACK_IMPORTED_MODULE_1__]);
([remark_gfm__WEBPACK_IMPORTED_MODULE_2__, react_markdown__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
const _excluded = ["node", "inline", "className", "children"],
      _excluded2 = ["node", "children"],
      _excluded3 = ["node"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











function MarkdownRenderer({
  documentTitle,
  markdown
}) {
  // Loading
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (markdown) {
      setIsLoading(false);
    }
  }, [markdown]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    children: isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: (styles_globalStyles_module_css__WEBPACK_IMPORTED_MODULE_6___default().loader),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
        className: (styles_globalStyles_module_css__WEBPACK_IMPORTED_MODULE_6___default().loader_text),
        children: "Loading..."
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: (styles_components_MarkdownRenderer_module_css__WEBPACK_IMPORTED_MODULE_7___default().MarkdownRenderer),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h1", {
        className: (styles_components_MarkdownRenderer_module_css__WEBPACK_IMPORTED_MODULE_7___default().MarkdownRenderer__Title),
        children: documentTitle
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1__.default, {
        remarkPlugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_2__.default],
        components: {
          code(_ref) {
            let {
              node,
              inline,
              className,
              children
            } = _ref,
                props = _objectWithoutProperties(_ref, _excluded);

            const match = /language-(\w+)/.exec(className || "");
            return inline ?
            /*#__PURE__*/
            // 강조 (``)
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("code", _objectSpread(_objectSpread({
              style: {
                background: "var(--highlight-color)",
                padding: "2px"
              }
            }, props), {}, {
              children: children
            })) : match ?
            /*#__PURE__*/
            // 코드 (```)
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.Prism, _objectSpread(_objectSpread({
              style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_4__.nord,
              language: match[1],
              PreTag: "div"
            }, props), {}, {
              children: String(children).replace(/\n$/, "")
            })) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.Prism, _objectSpread(_objectSpread({
              style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_4__.nord,
              language: "textile",
              PreTag: "div"
            }, props), {}, {
              children: String(children).replace(/\n$/, "")
            }));
          },

          // 인용문 (>)
          blockquote(_ref2) {
            let {
              node,
              children
            } = _ref2,
                props = _objectWithoutProperties(_ref2, _excluded2);

            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", _objectSpread(_objectSpread({
              style: {
                background: "#f0f0f0",
                padding: "1px 15px",
                borderRadius: "10px"
              }
            }, props), {}, {
              children: children
            }));
          },

          img(_ref3) {
            let {
              node
            } = _ref3,
                props = _objectWithoutProperties(_ref3, _excluded3);

            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
              style: {
                maxWidth: "60vw"
              },
              src: props.src.replace("../../../../public/", "/"),
              alt: "MarkdownRenderer__Image"
            });
          }

        },
        children: markdown.replace(/\n\s\n\s/gi, "\n\n&nbsp;\n\n").replace(/\*\*/gi, "@$_%!^").replace(/\**\*/gi, "/").replace(/@\$_%!\^/gi, "**").replace(/<\/?u>/gi, "*")
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkdownRenderer);
});

/***/ }),

/***/ 3528:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Articles_Articles_Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5219);
/* harmony import */ var components_Markdown_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5738);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9026);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6645);
/* harmony import */ var styles_globalStyles_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3124);
/* harmony import */ var styles_globalStyles_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styles_globalStyles_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styles_pages_ArticleDetail_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4666);
/* harmony import */ var styles_pages_ArticleDetail_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styles_pages_ArticleDetail_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var store_article_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6437);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Markdown_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_2__]);
components_Markdown_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];











function ArticleDetail({
  markdown,
  documentTitle
}) {
  // 전역 상태 관리 (store)
  const globalState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(store_store__WEBPACK_IMPORTED_MODULE_4__/* .store */ .h);
  const {
    value,
    dispatch
  } = globalState;
  const {
    articles
  } = value; // Loading

  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch({
      type: "GET_ARTICLES"
    });
  }, [dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch({
      type: "GET_ARTICLES"
    });
    setIsLoading(false);
  }, [dispatch]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      description: markdown,
      title: documentTitle,
      siteTitle: "\uC6C5's \uBE14\uB85C\uADF8"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("main", {
      children: isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: (styles_globalStyles_module_css__WEBPACK_IMPORTED_MODULE_7___default().loader),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          className: (styles_globalStyles_module_css__WEBPACK_IMPORTED_MODULE_7___default().loader_text),
          children: "Loading..."
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: (styles_pages_ArticleDetail_module_css__WEBPACK_IMPORTED_MODULE_8___default().ArticleDetail),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: (styles_pages_ArticleDetail_module_css__WEBPACK_IMPORTED_MODULE_8___default().ArticleDetail__left),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_Articles_Articles_Category__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: (styles_pages_ArticleDetail_module_css__WEBPACK_IMPORTED_MODULE_8___default().ArticleDetail__right),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_Markdown_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
            documentTitle: documentTitle,
            markdown: markdown
          })
        })]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleDetail);
async function getStaticPaths() {
  const paths = [];
  store_article_data__WEBPACK_IMPORTED_MODULE_5__/* .default.categoryList.forEach */ .Z.categoryList.forEach(category => category.itemList.forEach(article => paths.push({
    params: {
      articleCategory: article.category,
      articleId: article.id.toString()
    }
  })));
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps(context) {
  // 변수
  let path = "";
  let documentTitle = "";
  let markdown = ""; // 파일 주소 찾기

  if (store_article_data__WEBPACK_IMPORTED_MODULE_5__/* .default.categoryList */ .Z.categoryList) {
    store_article_data__WEBPACK_IMPORTED_MODULE_5__/* .default.categoryList.forEach */ .Z.categoryList.forEach(categoryElement => {
      if (categoryElement.category === context.params.articleCategory) {
        categoryElement.itemList.forEach(articleElement => {
          if (articleElement.id === parseInt(context.params.articleId)) {
            path = articleElement.content;
            documentTitle = articleElement.title;
          }
        });
      }
    });
  }

  if (path) {
    const readmePath = __webpack_require__(5165)(`./${path.split("/")[2]}/${path.split("/")[3]}`);

    markdown = readmePath.default;
  }

  return {
    props: {
      markdown,
      documentTitle
    }
  };
}
});

/***/ }),

/***/ 2544:
/***/ ((module) => {

// Exports
module.exports = {
	"MarkdownRenderer": "MarkdownRenderer_MarkdownRenderer__16VJX",
	"MarkdownRenderer__Title": "MarkdownRenderer_MarkdownRenderer__Title__1fEEN"
};


/***/ }),

/***/ 4666:
/***/ ((module) => {

// Exports
module.exports = {
	"ArticleDetail": "ArticleDetail_ArticleDetail__DcZO6",
	"ArticleDetail__left": "ArticleDetail_ArticleDetail__left__3Z0gG",
	"ArticleDetail__right": "ArticleDetail_ArticleDetail__right__21F5z"
};


/***/ }),

/***/ 9274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("http://www.kocw.net/home/search/kemView.do?kemId=299067\r\n\r\n# Data Link Control\r\n\r\n> framing, flow control, error control, protocols\r\n\r\n라우터 : 신호를 다른 컴퓨터로 연결하는 장치 (일종의 컴퓨터)\r\n\r\n=> End System(실제 우리가 다루는 컴퓨터) 사이에 전송되는 Data를 관리하는 기술이 `Data Link Control`\r\n\r\n\r\n\r\n## Data Link Layer의 역할\r\n\r\n- Frame synchronization\r\n  \tFrame: 데이터 덩어리 / Data는 여러 조각(blcoks)으로 분리해서 보낸다\r\n  \t그리고 보내는 쪽과 받는 쪽은 이 데이터 조각이 동기화가 돼야 한다\r\n\r\n- Flow control\r\n  \treceiver가 sender의 data를 통제하는 것 (너무 많은 데이터가 한 번에 오지 않도록)\r\n\r\n- **Error control** (굉장히 중요)\r\n\r\n  ​\t통신 중 발생하는 error를 조정하는 것\r\n\r\n- Physical addressing\r\n\r\n  ​\t통신을 할 대상을 특정하는 물리적 주소 (식별자)\r\n\r\n- Access control\r\n\r\n  ​\t여러 장치가 같은 link에 연결되어 있을 때, 어떤 장치가 연결될 지 결정하는 것\r\n\r\n### 결론\r\n\r\n- Data Link Layer의 역할\r\n  1. `Line discipline` (access control) - 누가?\r\n  2. `flow control` - 얼마나 많이?\r\n  3. **`error control` - detect, correct errors**\r\n\r\n\r\n\r\n## Poll / Select\r\n\r\n`multidrop`(=`multipoint`)를 사용하면 transmission line costs를 줄일 수 있다\r\n\r\n​\t=> 여러 터미널이 선 하나를 공유하는 것\r\n\r\n- 이 때 <u>한 번에 message block 하나</u>만 보낼 수 있다.\r\n\r\n  => 지금은 많이 사용하지 않는 방식\r\n\r\n  [Primary computer와 Secondary computer로 나뉘던 옛날 컴퓨터에서 많이 사용]\r\n\r\n  - `Polling`: secondary가 send할 때 사용\r\n    - `Roll-call Polling`: primary가 하나씩 다 물어보는 것\r\n    - `Hub Polling`: poll command를 secondary에게 주고 secondary가 서로 command를 돌리며 poll을 결정하는 것 \r\n  - `Select`: primary가 send할 때 사용\r\n\r\n\r\n\r\n## Framing\r\n\r\n> Data Link Layer는 bits를 frame에 넣어 보낸다 => 각각 구분될 수 있는 frame에 넣음으로 써 data를 구분\r\n\r\n만약 message가 매우 큰 frame 하나에 담겨져 보내진다면 하나의 error가 전체 데이터에 큰 영향을 끼침\r\n\r\n(Error가 발생하면 해당 frame을 재전송하는데, frame이 크면 error가 발생할 때마다 큰 데이터를 다시 받아와야 함)\r\n\r\n");

/***/ }),

/***/ 9804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("http://www.kocw.net/home/search/kemView.do?kemId=299067\r\n\r\n# HDLC\r\n\r\nData Link Control을 지원하는 Protocol은 2가지가 있음\r\n\r\n1. **Character-oriented protocol** (=Byte-oriented protocol)\r\n2. **Bit-oriented protocol**\r\n\r\n데이터를 잘게 쪼갠 것 = Frame -> 이 Frame을 Bit 단위로 쪼개 볼거냐, Byte 단위로 쪼개 볼 거냐를 구분 짓는 게 위 2개의 protocol\r\n\r\n\r\n\r\n## Character-oriented protocols\r\n\r\n> Frame을 문자(혹은 byte)의 나열로 해석하는 것\r\n>\r\n> 1 Character = 8bit = 1byte\r\n\r\n- 현재는 많이 사용하지 않음\r\n  - 대부분 Bit-oriented protocol 사용\r\n\r\n\r\n\r\n❗ 구조\r\n\r\n[Flag]<Header> `[Characters]` <Trailer>[Flag]\r\n\r\n> Flag : Frame의 시작과 끝을 구분지음\r\n>\r\n> Header, Trailer : Data 외의 추가적인 정보\r\n\r\n\r\n\r\n❓만약 Data에 Flag 신호와 똑같은 Byte가 들어간다면..??\r\n\r\n[`투명성 문제`] (Transparency Problem)\r\n\r\n- **byte-stuffing**\r\n\r\n  이를 해결하기 위해 `escape character (ESC)`를 추가한다\r\n\r\n  - ESC를 넣는 위치\r\n    1. **Flag와 동일**한 신호 앞\r\n    2. **ESC와 동일**한 신호 앞\r\n\r\n\r\n\r\n## Bit-oriented protocols\r\n\r\n> Frame을 bit의 나열로 해석하는 것\r\n\r\n- 오늘날 대부분의 경우 사용하는 protocol\r\n\r\n- 대부분의 protocol을 **`01111110`**이라는 8-bit pattern을 flag로 사용\r\n\r\n\r\n\r\n❗ 구조\r\n\r\n[01111110] <Header> `[Bits]` <Trailer> [01111110]\r\n\r\n\r\n\r\n❓만약 Data에 Flag 신호와 똑같은 Bit가 들어간다면..??\r\n\r\n- **Bit-stuffing**\r\n\r\n  data에 1이 연속으로 6개가 나오는 것을 방지하기 위해\r\n\r\n  **1이 5개가 연속으로 나오면 extra 0를 붙인다**\r\n\r\n\r\n\r\n---\r\n\r\n## Flow and Error Control\r\n\r\n### Flow control\r\n\r\n> 수신자 측에서, 데이터의 양을 조절하는 것\r\n\r\n- `acknowledgement`를 이용해 제어\r\n\r\n- 기법\r\n  1. **XON/XOFF** : Start or Stop transmission\r\n  2. **Stop-and-wait** : send <u>one frame</u> at a time\r\n  3. **Sliding window** : send <u>several frames</u> at a time\r\n\r\n\r\n\r\n#### XON/XOFF\r\n\r\n> Serial terminal에서 많이 사용됨 (프린터, 복사기 등)\r\n\r\n- 더 이상 데이터를 받을 수 없을 때 Xoff 신호를 보냄 / *프린터의 메모리(버퍼)가 어느정도 차면 신호를 보냄*\r\n\r\n- 다시 작업이 가능해지면 Xon 신호를 보냄\r\n\r\n\r\n\r\n#### Stop-and-wait\r\n\r\n- 한 번에 **하나의 frame**을 보냄 -> 잘 받으면 **acknowledgment**를 회신 -> 다시 한 **frame** 송신\r\n- 간단하다는 장점 / 비효율적이라는 단점\r\n\r\n\r\n\r\n#### Sliding window\r\n\r\n- **Window size** : 한 번에 보내는 frame의 개수 = **# of outstanding frame**(=unacknowledged frame)\r\n- frame의 Header 부분에 frame 번호가 들어감 (보통 3비트를 사용)\r\n\r\n\r\n\r\n- 한 번에 **여러 개의 frame**을 보냄 (window size 만큼) -> **acknowledgment**를 회신 -> **window size 갱신** -> 다시 **frame** 송신\r\n\r\n\r\n\r\n### Error Control\r\n\r\n- 받은 데이터가 손상되었는지 확인, 복원\r\n  1. Error Detection\r\n  2. Error Correction\r\n\r\n- 기법\r\n  1. **Discarding the errors** : 무시 (복구 X), 꽤 많이 씀\r\n  2. **Forward Error Correction (FEC)** : 수신 측에서 Error **복구**\r\n  3. **Automatic repeat request (ARQ)** : 가장 많이 사용됨. Error 발생시 **재전송**\r\n\r\n\r\n\r\n- Error의 종류\r\n  - frame의 소실 (도착 X)\r\n  - frame의 손상");

/***/ }),

/***/ 5487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("# [GitHub Blog 개발기] 정리할 내용 목록\r\n\r\n- Context API, Hook으로 만든 전역 변수 관리\r\n- ~~Markdown 연동~~\r\n- GitHub Blog 주소 새로고침 문제\r\n- 구글 검색 등록\r\n  - ~~Google Search Console~~\r\n  - SEO - SSR\r\n- 글 자동 등록/배포 (sitemap.xml 반영 포함)\r\n\r\n");

/***/ }),

/***/ 4520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("# [GitHub Blog 개발기] 개발일지\r\n\r\n블로그를 운영하기로 결정하고서 어떤 식으로 만들어야 할 지 고민을 많이 했다.\r\n\r\nTistory나 Velog를 사용할 지, 아니면 Jekyll을 이용한 Github 블로그를 만들어야 할 지..\r\n\r\n고민 끝에 직접 블로그를 만들어보기로 결심했고, **Jekyll Theme 없이 Github 블로그를 만들기로 결정**했다.\r\n\r\n\r\n\r\n블로그는 다음과 같은 형태로 만들 계획이다.\r\n\r\n- **No Template**\r\n  - Jekyll Theme 없이 직접 구현 / <u>게시글 등록 자동화</u>\r\n  \r\n- **React**\r\n  - Redux 없이 Context API와 Hook을 이용하여 전역 상태 관리\r\n\r\n- **Sping Boot** (추후 구현 예정)\r\n  - Data는 Github이 아니라 AWS에 보관할 예정\r\n  - 추후 게시글 등록 자동화와 연결\r\n- **Markdown 기반**\r\n  \r\n  - Articles에 작성되는 게시글들은 마크다운 파일을 ReactMarkdown을 이용하여 마크다운 형식으로 출력\r\n\r\n");

/***/ }),

/***/ 2661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("# [GitHub Blog 개발기] Markdown 적용 및 Require 함수\r\n\r\n자주 업데이트 되는 Articles 항목은 Markdown으로 작성하기로 결정했다.\r\n\r\n\r\n\r\nLocal에 있는 Markdown 파일을 화면에 출력하는 방법은 다음과 같다.\r\n\r\n\r\n\r\n## 1. Markdown 파일을 <u>가져오기</u>\r\n\r\n> [요약]\r\n>\r\n> - JavaScript의 Require 함수를 이용해서 Local에 있는 Markdown 파일의 내용을 저장\r\n\r\n\r\n\r\n**Local에 있는 Markdown 파일을 가져오기 위해서 JavaScript의 Require 함수를 사용했다.**\r\n\r\n\r\n\r\n### JavaScript `Require`\r\n\r\n**Require()** : <u>모듈을 가져오는 함수</u> (정확히는 Modules의 exports를 가져오는 함수)\r\n\r\n=> 이 Require()를 이용해서 `Markdown 파일의 Text 정보`를 가져올 수 있다.\r\n\r\n\r\n\r\n#### 순서 1\r\n\r\n`require()`를 통해 content data에 담겨있는 path 정보를 이용해서 파일의 정보를 가져온다.\r\n\r\n```javascript\r\nconst readmePath = require(`store/article_data/${path.split(\"/\")[2]}/${\r\n      path.split(\"/\")[3]\r\n    }`);\r\n```\r\n\r\n\r\n\r\n#### 순서 2\r\n\r\n`fetch() - then() - text()` 과정을 통해 text 정보를 읽는다.\r\n\r\n```javascript\r\nfetch(readmePath.default)\r\n    .then(r => r.text())\r\n    .then(text => {\r\n      setMarkdown(text);\r\n    });\r\n```\r\n\r\n\r\n\r\n#### Require란?\r\n\r\n만약 Javascript 파일을 읽는다면 exports 정보들을, **.default** 를 이용하면 default 값을, **.변수** 를 이용하면 해당 파일에서 exports 된 변수 값을 읽을 수 있다.\r\n\r\n\r\n\r\nImport와 상당히 유사하다.\r\n\r\n그렇다면 차이점은 무엇일까?\r\n\r\n- require()\r\n  - node.js문\r\n  - 어디서나 호출 가능\r\n  - 파일 전체를 사용\r\n\r\n\r\n\r\n- import()\r\n  - ES6문\r\n  - 시작 부분에서만 호출 가능\r\n  - 필요한 부분만 선택 가능 => <u>성능이 우수하고 메모리를 절약</u>\r\n\r\n\r\n\r\n=> 그럼 import가 성능이 더 좋은데 왜 require를 썼는가?\r\n\r\n**import는 최상단에서만 호출 가능하여 조건문에 따라 호출이 불가능 하기 때문**\r\n\r\n\r\n\r\n\r\n\r\n## 2. Markdown 형식으로 <u>출력하기</u>\r\n\r\n> [요약]\r\n>\r\n> - react-markdown 을 사용\r\n> - markdown -> html 으로 변환된 코드에 대한 styling\r\n> - JavaScript를 변화시켜 줌으로써 추가 styling\r\n\r\n\r\n\r\n### react-markdown\r\n\r\n#### 설치\r\n\r\n먼저 React에서Markdown 형식으로 출력을 시켜줄 `react-markdown`을 설치 (공식문서 : https://www.npmjs.com/package/react-markdown)\r\n\r\n```bash\r\nnpm install react-markdown\r\n```\r\n\r\n\r\n\r\n#### 사용\r\n\r\n(위에서 setMarkdown(text)으로 저장한 markdown 변수를 markdown으로 출력하는 방법)\r\n\r\n**`<ReactMarkdown> 태그를 Return 함으로써 출력`**\r\n\r\n```react\r\n<ReactMarkdown children={markdown} />\r\n```\r\n\r\n\r\n\r\n이렇게만 해도 어느정도 Markdown 형태가 잡힌다.\r\n\r\n\r\n\r\n**하지만! <u>이렇게 두면 엉망진창의 예쁘지 않은 글이 된다</u>**\r\n\r\n\r\n\r\n그럼 입맛대로 꾸미는 법을 알아보자!\r\n\r\n\r\n\r\n### remark-gfm\r\n\r\n#### 설치\r\n\r\n공식문서에 소개된 것처럼 `remark-gfm`을 설치하면 link, table, checklist 등의 형식을 표현할 수 있다.\r\n\r\n```bash\r\nnpm install remark-gfm\r\n```\r\n\r\n\r\n\r\n#### 사용\r\n\r\nReactMarkdown 태그 안에 Plugin 형태로 추가하면 끝!\r\n\r\n```react\r\n<ReactMarkdown remarkPlugins={[remarkGfm]} children={markdown} />\r\n\r\n\r\n\r\n### 커스터마이즈 (react-syntax-highlighter)\r\n\r\n강조 표시, 인용 표시, 코드 인용을 위해서는 추가적인 작업이 필요하다.\r\n\r\n#### 설치\r\n\r\n그 중 코드 인용은 `react-syntax-highlighter`를 통해 표시가 가능하다.\r\n\r\n​```bash\r\nnpm install react-syntax-highlighter\r\n```\r\n\r\n\r\n\r\n#### 사용\r\n\r\n1. 먼저 components 속성을 ReactMardown 태그 안에 추가한다.\r\n2. 수정하고 싶은 태그를 적고 수정된 결과물을 return에 넣는다.\r\n\r\n```react\r\n<ReactMarkdown remarkPlugins={[remarkGfm]} children={markdown}\r\n    components={\r\n        %%%수정할 태그%%%({ node, inline, className, children, ...props }) { return %%%수정된 태그%%% }\r\n    }\r\n    />\r\n```\r\n\r\n>  **! github 페이지에선 중괄호( `{}` )를 중첩해서 사용하면 에러가 나기 때문에 중괄호를 하나만 사용했다.**\r\n>\r\n> **실제로는 component={ } 에서 중괄호를 두 번 작성해야 한다.**\r\n>\r\n> ( 소스코드 참고 : https://github.com/ParkJeongwoong/ParkJeongwoong.github.io/blob/master/src/components/Markdown/MarkdownRenderer.js )\r\n\r\n\r\n\r\n위 components 속성은 다음과 같이 작동한다.\r\n\r\n1. ReactMarkdown이 html화 시킨 코드를 하나씩 읽는다.\r\n2. components 안에 속하는 태그를 찾는다.\r\n3. **조건문**을 통해 커스텀을 하는 조건을 선택한다.\r\n4. 조건을 만족했을 때 **수정된 태그** 를 반환한다.\r\n\r\n\r\n\r\n#### 예시\r\n\r\n- `인용 표시`\r\n\r\n인용문은 <blockquote> 형태로 출력되기 때문에 인용문을 바꾸고 싶다면 다음과 같이 적으면 된다.\r\n\r\n```react\r\ncomponents={\r\n            // 인용문\r\n            blockquote({ node, children, ...props }) {\r\n                return (\r\n                  <div\r\n                    style={{\r\n                      background: \"#f0f0f0\",\r\n                      padding: \"1px 15px\",\r\n                      borderRadius: \"10px\",\r\n                    }}\r\n                    {...props}\r\n                  >\r\n                    {children}\r\n                  </div>\r\n                );\r\n              }\r\n           }\r\n```\r\n\r\n>  **! github 페이지에선 중괄호( `{}` )를 중첩해서 사용하면 에러가 나기 때문에 중괄호를 하나만 사용했다.**\r\n>\r\n> **실제로는 component={ } 에서 중괄호를 두 번 작성해야 한다.**\r\n>\r\n> ( 소스코드 참고 : https://github.com/ParkJeongwoong/ParkJeongwoong.github.io/blob/master/src/components/Markdown/MarkdownRenderer.js )\r\n\r\n\r\n\r\n- `강조 표시` 과 `코드 인용`\r\n\r\n강조 표시와 코드 인용은 모두 <code> 형태로 출력된다.\r\n\r\n이 때 차이점은 **강조문**은 `inline 속성`을 가지고 있으며 (줄바꿈이 안 일어난다)\r\n\r\n**코드 인용**은 `block 속성`을 가지고 있다는 것이다. (줄바꿈이 일어난다)\r\n\r\n\r\n\r\n그리고 코드 인용에서 `match 속성`은 사용 언어를 뜻한다. (언어가 설정되지 않은 코드 인용 구문은 match 값이 false가 된다)\r\n\r\n\r\n\r\n따라서 강조 표시와 코드 인용은 다음과 같이 적으면 된다.\r\n\r\n```react\r\ncomponents={\r\n            code({ node, inline, className, children, ...props }) {\r\n                const match = /language-(\\w+)/.exec(className || \"\");\r\n                return inline ? (\r\n                  // 강조\r\n                  <code\r\n                    style={{\r\n                      background: \"var(--highlight-color)\",\r\n                      padding: \"2px\",\r\n                    }}\r\n                    {...props}\r\n                  >\r\n                    {children}\r\n                  </code>\r\n                ) : match ? (\r\n                  // 코드\r\n                  // 언어가 선택됨\r\n                  <SyntaxHighlighter\r\n                    children={String(children).replace(/\\n$/, \"\")}\r\n                    style={nord}\r\n                    language={match[1]}\r\n                    PreTag=\"div\"\r\n                    {...props}\r\n                  />\r\n                ) : (\r\n                  // 언어가 선택되지 않음\r\n                  <SyntaxHighlighter\r\n                    children={String(children).replace(/\\n$/, \"\")}\r\n                    style={nord}\r\n                    language=\"textile\"\r\n                    PreTag=\"div\"\r\n                    {...props}\r\n                  />\r\n                );\r\n              }\r\n           }\r\n```\r\n\r\n>  **! github 페이지에선 중괄호( `{}` )를 중첩해서 사용하면 에러가 나기 때문에 중괄호를 하나만 사용했다.**\r\n>\r\n> **실제로는 component={ } 에서 중괄호를 두 번 작성해야 한다.**\r\n>\r\n> ( 소스코드 참고 : https://github.com/ParkJeongwoong/ParkJeongwoong.github.io/blob/master/src/components/Markdown/MarkdownRenderer.js )\r\n\r\n\r\n\r\n### react-markdown 사용 시 `공백 줄` 문제\r\n\r\n- 현상 : react-markdown에서는 공백인 줄이 표현 X\r\n\r\n\r\n\r\n- 해결\r\n\r\n```javascript\r\nmarkdown.replace(/\\n\\s\\n\\s/gi, \"\\n\\n&nbsp;\\n\\n\")\r\n```\r\n\r\n마크다운 파일의 텍스트를 위와 같이 바꿔 줌으로 써 해결\r\n\r\n**이 때! 정확한 원인은 모르겠지만 Local에선 `\\n\\n &nbsp;`로도 줄바꿈이 가능하지만 Github에 업로드 하면 줄바꿈이 되지 않는 문제 발생**\r\n\r\n**인코딩 상의 문제인지 \\n을 두 번 해줘야 줄바꿈이 됨 => `\\n\\n&nbsp;\\n\\n`로 바꿔야 함**\r\n\r\n\r\n\r\n마크다운 파일에서 `기본 줄바꿈`은 `엔터 두 번`\r\n\r\n`공백이 있는 줄`은 `엔터 네 번`으로 변환\r\n\r\n\r\n\r\n엔터 뒤에는 공백이 하나 있기 때문에 `\\n\\s\\n\\s`를 정규표현식으로 찾아서 변환해야 한다.\r\n\r\n\r\n\r\n### react-markdown 사용 시 <u>`밑줄`</u> 문제\r\n\r\n- 현상 : react-markdown에서는 밑줄이 표현 X\r\n\r\n\r\n\r\n- 해결\r\n\r\n`먼저 em 태그의 css를 밑줄로 변경`\r\n\r\n```javascript\r\nmarkdown\r\n    .replace(/\\n\\s\\n\\s/gi, \"\\n\\n&nbsp;\\n\\n\")\r\n    .replace(/\\*\\*/gi, \"@$_%!\\^\")\r\n    .replace(/\\**\\*/gi, \"/\")\r\n    .replace(/@\\$_%!\\^/gi, \"**\")\r\n    .replace(/<\\/?u>/gi, \"*\")\r\n```\r\n\r\n1. 우선 <u>강조 표시</u>를 `사용하지 않는 특수문자 묶음`으로 변환 (위 세 번째 줄(@$_%!\\^)에서 ^앞의 \\는 자동 변환을 막기 위해 추가 ; 이게 없으면 파싱 중 자동으로 **로 변환됨)\r\n2. <u>이탤릭체</u>를 `슬래쉬`로 변환\r\n3. `강조 표시를 다시 복구`\r\n4. <u>언더 바 태그</u>를 `이탤릭체`로 변환 => <u>**변환된 이탤릭체는 밑줄로 표시**</u>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ 499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("# [GitHub Blog 개발기] 구글 검색 등록 & SEO 구현(1)\r\n\r\n> [요약]\r\n>\r\n> - Google Search Console\r\n>\r\n> - React - SPA\r\n>   - SPA는 HTML 문서 한 장\r\n> - CSR - SSR\r\n>   - Helmet\r\n>   - Next.js\r\n\r\n\r\n\r\n## Google Search Console\r\n\r\nGoogle Search Console에 내 사이트를 등록해서 검색 결과에 노출하는 방법은 다음과 같다.\r\n\r\n\r\n\r\n1. [구글 웹마스터 도구](https://search.google.com/search-console/about) 에 접속 -> (로그인) -> `URL 접두어` 부분에 블로그 주소 입력 (https://parkjeongwoong.github.io/)\r\n2. 소유권 확인을 위한 HTML 파일을 다운로드 후 GitHub Blog Repository의 Root 폴더에 업로드\r\n   - <u>이 때 gh-pages를 통해 랜더링한다면 gh-pages 브랜치에 업로드 되어야 한다.</u>\r\n3. 소유권이 확인되면 `sitemap.xml` 파일과 `robots.txt` 파일을 만든다.\r\n   - 이 두 파일 역시 실제로 랜더링하는 브랜치의 Root 폴더에 있어야 한다.\r\n\r\n[**robots.txt**]\r\n\r\n```\r\nUser-agent: *\r\nAllow: /\r\n\r\nSitemap: https://parkjeongwoong.github.io/sitemap.xml\r\n```\r\n\r\n[**sitemap.xml**]\r\n\r\n```xml\r\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<urlset xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\" xsi:schemaLocation=\"http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd\">\r\n\r\n<!-- 메뉴 -->\r\n    <url>\r\n        <loc>https://parkjeongwoong.github.io/</loc>\r\n        <changefreq>monthly</changefreq>\r\n    </url>\r\n    <url>\r\n        <loc>https://parkjeongwoong.github.io/profile</loc>\r\n        <changefreq>monthly</changefreq>\r\n    </url>\r\n    <url>\r\n        <loc>https://parkjeongwoong.github.io/articles</loc>\r\n        <changefreq>weekly</changefreq>\r\n    </url>\r\n    <url>\r\n        <loc>https://parkjeongwoong.github.io/archives</loc>\r\n        <changefreq>monthly</changefreq>\r\n    </url>\r\n\r\n<!-- Develop -->\r\n    <url>\r\n        <loc>https://parkjeongwoong.github.io/articles/Develop/1</loc>\r\n        <changefreq>weekly</changefreq>\r\n    </url>\r\n    <url>\r\n        <loc>https://parkjeongwoong.github.io/articles/Develop/2</loc>\r\n        <changefreq>weekly</changefreq>\r\n    </url>\r\n    <url>\r\n        <loc>https://parkjeongwoong.github.io/articles/Develop/3</loc>\r\n        <changefreq>weekly</changefreq>\r\n    </url>\r\n    <url>\r\n        <loc>https://parkjeongwoong.github.io/articles/Develop/4</loc>\r\n        <changefreq>weekly</changefreq>\r\n    </url>\r\n\r\n<!-- CS -->\r\n    <url>\r\n        <loc>https://parkjeongwoong.github.io/articles/CS/0</loc>\r\n        <changefreq>weekly</changefreq>\r\n    </url>\r\n    <url>\r\n        <loc>https://parkjeongwoong.github.io/articles/CS/1</loc>\r\n        <changefreq>weekly</changefreq>\r\n    </url>\r\n\r\n</urlset>\r\n```\r\n\r\n4. [구글 웹마스터 도구](https://search.google.com/search-console/about) 의 [**색인**] - [**Sitemaps**] 에서 [**새 사이트맵 추가**]에 `sitemap.xml`을 적고 제출한다.\r\n   - 만약 Sitemap을 읽지 못하는 문제가 발생한다면 **.xml** 을 제외한 `sitemap` 만 입력하여 제출하면 해결될 때가 있다.\r\n5. **npm run build** 를 통해 매번 build를 할 때마다 [소유권 인증 html 파일], [robots.txt], [sitemap.xml] 이 초기화되는 것을 방지하기 위해 `package.json` 의 `scripts-predeploy` 부분에 추가적인 script를 작성함으로써 문제를 해결했다.\r\n\r\n```shell\r\nnpm run build && cp ./google74bbd1bb0c2ee4ad.html ./build/google74bbd1bb0c2ee4ad.html && cp ./robots.txt ./build/robots.txt && cp ./sitemap.xml ./build/sitemap.xml\r\n```\r\n\r\n\r\n\r\n이렇게 하면 Google 검색 결과에 블로그가 노출된다.\r\n\r\n반영에는 시간이 꽤 걸리니 천천히 기다려보자.\r\n\r\n\r\n\r\n> 결과물 : [검색결과](https://www.google.com/search?q=welcome+to+jw%27s+blog)\r\n\r\n\r\n\r\n## SEO (Search Engine Optimization)\r\n\r\n위와 같이 등록을 마치고 나면 url (https://parkjeongwoong.github.io/)을 통해 내 블로그가 검색됨을 알 수 있다.\r\n\r\n그런데 이상하게 'Home'만 표시가 된다.\r\n\r\n\r\n\r\n**이는 React와 같은 Single Page Application (SPA)는 Index.html 이라는 하나의 html 파일에서 컴포넌트의 렌더링만 바꿔가며 화면을 바꾸기 때문.**\r\n\r\n=> `즉, title이나 content와 같이 head 부분에 들어가는 meta 정보가 하나 뿐이다.`\r\n\r\n\r\n\r\n이를 해결하기 위해 **React-Helmet** 을 사용할 수도 있지만 근본적으로는 Server-Side-Rendering을 구현해야 한다.\r\n\r\n\r\n\r\n직접 구현할 수도 있지만,\r\n\r\nReact의 경우 **Next.js** 를 사용하여 비교적 간단하게 SSR이 구현 가능하기 때문에 Next.js 를 활용한 SSR을 구현하기로 결정했다.");

/***/ }),

/***/ 5092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("# [GitHub Blog 개발기] SEO 구현(2) - Next.js app\r\n\r\nNext.js를 이용한 SSR 환경 구축 방법\r\n\r\n---\r\n\r\n[참조]\r\n\r\nhttps://nextjs.org/\r\n\r\n\r\n\r\n## 앞서 알아보기\r\n\r\n> `Next.js는 React.js의 Framework`로 **React.js app에서 SSR 구현을 편리하게 가능하게 만들어 주는 도구이다.** \r\n>\r\n> 즉, Next.js app은 React.js app을 대체한다.\r\n\r\n\r\n\r\nNext.js의 존재를 알게 된 후 계속 헷갈렸던 개념은 <u>Server Side Rendering에서 Server가 무엇이냐는 것</u>이었다.\r\n\r\n처음에는 Backend 코드가 돌아가는 Web Application Server라고 착각하고 기존의 React.js app과 Next.js로 만든 app을 분리해야 한다고 생각했었다.\r\n\r\n\r\n\r\n하지만 알고 보니 SSR에서의 Server는 Frontend Server, 즉 Web Server를 뜻하는 것이었다.\r\n\r\n**CSR**의 경우,\r\n\r\nClient는 최초 접속 시 Frontend Server(Github)와 통신하여 HTML과 함께 화면을 그리는 코드를 받아오고, 이후에는 Backend Server와 통신하며 Data만 받아온다.\r\n\r\n반면 **SSR**의 경우,\r\n\r\nClient는 지속적으로 Frontend Server(Github)와 통신하며 HTML 파일을 받아오고, 그 과정에서 필요한 Data는 Frontend Server가 Backend Server에 요청하여 채워 넣는다.\r\n\r\n\r\n\r\n**따라서 Next.js app이 구현하는 SSR에서의 Server는 Frontend Server를 뜻하고,**\r\n\r\n<u>React.js app을 그대로 두고 Next.js app을 만드는 것이 아니라,</u>\r\n\r\n1) **`React.js app을 Next.js로 전환`시키거나** \r\n\r\n2) **`React.js를 대체하는 Next.js app`을 새로 만들어야 한다.**\r\n\r\n\r\n\r\n이미 어느정도 React app을 만들어 놓은 상태이므로 React app에서 Next app으로 전환하는 방법을 사용하기로 했다.\r\n\r\n(실패한다면 수고롭지만 새로 Next app을 만들 생각이다.)\r\n\r\n---\r\n\r\n[참조]\r\n\r\nhttps://lemontia.tistory.com/938\r\n\r\n\r\n\r\n## 새로운 Next.js App 생성\r\n\r\n```bash\r\nnpx create-next-app blog-ssr --use-npm\r\n```\r\n\r\n- Next.js Project 생성\r\n\r\n```bash\r\nnpm run dev\r\n```\r\n\r\n- Next.js Project 개발 서버 실행\r\n\r\n\r\n\r\n기존에 있는 React.js App을 Next.js로 전환하는 방법을 선택했으므로 이 글에는 처음부터 새로 만드는 자세한 방법을 기술하지 않았습니다.\r\n\r\n\r\n\r\n- Link 태그는 내부에 a 태그가 있어야 동작한다.\r\n\r\n---\r\n\r\n[참조]\r\n\r\n[[공식 튜토리얼](https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website)\r\n\r\n[공식 튜토리얼 (번역)](https://brunch.co.kr/@hee072794/81)\r\n\r\n[Velog Next.js 글](https://velog.io/@ansrjsdn/series/Next)\r\n\r\n\r\n\r\n## 기존 React.js App 전환\r\n\r\n### 1) Script와 Dependency 업데이트\r\n\r\n- `react-scripts` 패키지 **제거** 후 `next` 패키지 **설치**\r\n  - 이제 script를 **react-scripts** 가 아니라 **next** 로 읽는다.\r\n\r\n```bash\r\nnpm uninstall --save react-scripts\r\nnpm install --save next\r\n```\r\n\r\n\r\n\r\n- `react-router-dom` 패키지 **제거**\r\n  - Next js는 **React Router** 를 이용해 Page를 이동하지 않는다.\r\n\r\n```bash\r\nnpm uninstall --save react-router-dom\r\n```\r\n\r\n\r\n\r\n- `package.json` 에서 **react-scripts** 를 사용하는 구문을 **next** 로 변경\r\n\r\n```json\r\n...\r\n\"scripts\": {\r\n    \"dev\": \"next dev\",\r\n    \"build\": \"next build\",\r\n    \"start\": \"next start\"\r\n  },\r\n...\r\n```\r\n\r\n\r\n\r\n- `.gitignore`에 **.next** 추가\r\n\r\n\r\n\r\n### 2) Route 와 Link\r\n\r\nNext.js는 `pages` 라는 개념을 통해 페이지를 이동한다. ([참고](https://nextjs.org/docs/basic-features/pages))\r\n\r\n- `pages` 라는 폴더를 만든다.\r\n- `index.js` 라는 파일을 pages 폴더 안에 생성한다.\r\n- **Route (본 블로그의 경우 Views) Components**를 pages 폴더에 적절히 변환하여 넣는다.\r\n- 동적 URL의 경우 **:** 대신 `[]` 를 사용해서 구현한다.\r\n\r\n\r\n\r\n- `Link` 태그를 이용하여 페이지 간 이동을 구현한다.\r\n\r\n```javascript\r\nimport Link from 'next/link'\r\n\r\n...\r\n<Link href=\"/\">\r\n  <a>Home</a>\r\n</Link>\r\n...\r\n```\r\n\r\n\r\n\r\n### 3) Style\r\n\r\nNext.js는 `CSS Modules` 를 통해 CSS를 관리한다. ([참고](https://nextjs.org/docs/basic-features/built-in-css-support))\r\n\r\n- pages 폴더 내에 `_app.js` 파일을 만들어 전역 Styling을 할 수 있다.\r\n\r\n  ```javascript\r\n  import '../styles/globals.css'\r\n  \r\n  export default function App({ Component, pageProps }) {\r\n     return <Component className=\"App\" {...pageProps} />\r\n  }\r\n  ```\r\n\r\n- `[name].module.css`를 통해 Component용 CSS 파일을 만들 수 있다.\r\n\r\n  ```javascript\r\n  import styles from './Button.module.css'\r\n  \r\n  export function Button() {\r\n    return (\r\n      <button\r\n        type=\"button\"\r\n        // Note how the \"error\" class is accessed as a property on the imported\r\n        // `styles` object.\r\n        className={styles.error}\r\n      >\r\n        Destroy\r\n      </button>\r\n    )\r\n  }\r\n  ```\r\n\r\n  \r\n\r\n### 4) React 파일 정리\r\n\r\n필요없는 **src** 폴더의 React 파일을 정리한다.\r\n\r\n- `App.js` , `App.test.js` , `index.js` , `index.css` , `serviceWorker.js`\r\n  - 이 파일들이 하던 역할은 Next.js 프레임워크가 대신 하게 될 예정이다.\r\n\r\n\r\n\r\n### 5) 이미지 출력\r\n\r\n- **next/image**에서 제공하는 `Image` Component가 **img 태그를 대체**\r\n\r\n  ```javascript\r\n  import Image from 'next/image'\r\n  import profilePic from '../public/me.png'\r\n  \r\n  function Home() {\r\n    return (\r\n      <>\r\n        <h1>My Homepage</h1>\r\n        <Image src={profilePic} alt=\"Picture of the author\" />\r\n        <p>Welcome to my homepage!</p>\r\n      </>\r\n    )\r\n  }\r\n  \r\n  export default Home\r\n  ```\r\n\r\n\r\n\r\n### 6) SEO를 위한 Head 설정\r\n\r\n- react-helmet에서 제공하는 meta data 설정 기능을 **next/head** 의 `Head` 로 대체\r\n\r\n```javascript\r\n// src/components/seo.js\r\n\r\nimport Head from 'next/head'\r\n\r\nexport default function SEO({ description, title, siteTitle }) {\r\n  return (\r\n    <Head>\r\n      <title>{`${title} | ${siteTitle}`}</title>\r\n      <meta name=\"description\" content={description} />\r\n      <meta property=\"og:type\" content=\"website\" />\r\n      <meta property=\"og:title\" content={title} />\r\n      <meta property=\"og:description\" content={description} />\r\n      <meta property=\"og:site_name\" content={siteTitle} />\r\n      <meta property=\"twitter:card\" content=\"summary\" />\r\n      <meta property=\"twitter:creator\" content={config.social.twitter} />\r\n      <meta property=\"twitter:title\" content={title} />\r\n      <meta property=\"twitter:description\" content={description} />\r\n    </Head>\r\n  )\r\n}\r\n```\r\n\r\n이 컴포넌트를 각 page에 사용하여 SEO를 위한 meta data 설정\r\n\r\n\r\n\r\n## 부가 정보\r\n\r\n- `window` , `localStorage` , `navigator` 같은 **Web API**들은 CSR에서 사용 가능 => Next.js는 Pre-Rendering을 하기 때문에 바로 useEffect를 사용하는 방법 등을 활용해서 Client 측에서만 위 기능이 사용되도록 설정해야 함\r\n- 환경변수 - `.env` 변수를 지원하지만 접두사로 쓰인 `REACT_APP_` 를 모두 `NEXT_PUBLIC_` 로 바꿔야 함\r\n\r\n\r\n\r\n---\r\n\r\n[참조]\r\n\r\nhttps://nextjs.org/docs/migrating/from-create-react-app\r\n\r\nhttps://nextjs.org/docs/migrating/from-react-router\r\n\r\nhttps://blog.logrocket.com/how-to-adopt-next-js-into-your-existing-application/");

/***/ }),

/***/ 2086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("# [GitHub Blog 개발기] SEO 구현(3) - Next.js app\r\n\r\n현재 블로그를 Next.js 로의 전환하는 과정을 진행 중이다.\r\n\r\n다음은 실제로 전환하는 과정에서 생겼던 예상치 못한 이슈들과 해결 방법이다.\r\n\r\n\r\n\r\n## Dynamic Routing 방법\r\n\r\n각 페이지가 HTML인 형식\r\n\r\n대괄호([])로 감싼 폴더 => 슬래쉬(/) 역할\r\n\r\n\r\n\r\n## Markdown file Parsing 문제\r\n\r\nhttps://growd.tistory.com/78\r\n\r\n\r\n\r\n[수정내역]\r\n\r\n- Before\r\n\r\n```javascript\r\nuseEffect(() => {\r\n  if (path) {\r\n    const readmePath = require(`store/article_data/${path.split(\"/\")[2]}/${\r\n      path.split(\"/\")[3]\r\n    }`);\r\n\r\n    // 파일 가져오기\r\n    fetch(readmePath.default)\r\n      .then(r => r.text())\r\n      .then(text => {\r\n        setMarkdown(text);\r\n      });\r\n    setIsLoading(false);\r\n  }\r\n}, [markdown, path]);\r\n```\r\n\r\n\r\n\r\n- After\r\n\r\n```javascript\r\nuseEffect(() => {\r\n  if (path) {\r\n    const readmePath = require(`store/article_data/${path.split(\"/\")[2]}/${\r\n      path.split(\"/\")[3]\r\n    }`);\r\n\r\n    // 파일 가져오기\r\n    setMarkdown(readmePath.default);\r\n    setIsLoading(false);\r\n  }\r\n}, [markdown, path]);\r\n```\r\n\r\n\r\n\r\n## `CSS, JS 파일이 동작하지 않는 문제`\r\n\r\n![image-20211009102133216](../../../../public/assets/image-20211009102133216.png)\r\n\r\n\r\n\r\n모든 준비를 끝내고 Github에 Push를 했더니 위와 같은 페이지가 나왔다...\r\n\r\n분명히 Local에서 npm run dev로 실행했을 땐 제대로 페이지가 나왔었는데 Github에서만 이상하게 동작을 했다.\r\n\r\n\r\n\r\n알고보니 원인은 단순했다.\r\n\r\n1. `.nojekyll` 파일의 존재를 몰랐던 것.\r\n   1. GitHub Pages는 jekyll 기반으로 동작\r\n   2. .nojekyll 파일이 root에 없으면 _로 시작하는 폴더를 읽지 못함\r\n   3. JS, CSS 파일은 _next 폴더 안에 있기 때문에 JS, CSS 파일에 접근 X\r\n   4. 웹페이지가 제대로 동작 X\r\n\r\n2. 위의 문제를 파악하지 못하고 `next.config.js` 파일에 `assetPrefix: \"./\"`를 사용\r\n   1. 나중에 .nojekyll을 추가\r\n   2. Dynamic Routing을 하는 /articles/[articleCategory]/[articleId] 의 파일들은 Build - Out 시 Root에서 2 Depth를 더 들어가야 존재\r\n   3. Dynamic Routing을 하는 페이지들도 _next 폴더에서 JS, CSS를 찾아야 하는데 prefix가 \"./\"으로 되어 있어 Root 폴더가 아닌 Root에서 2 Depth를 들어간 상태에서 _next 폴더에 대한 접근을 시도\r\n\r\n\r\n\r\n해결책은 간단했다.\r\n\r\n1. `.nojekyll` 파일 추가\r\n2. `next.config.js` 에서 assetPrefix 제거\r\n\r\n\r\n\r\n## .nojekyll 파일 gh-pages 실행 시 GitHub에 Push되지 않는 문제\r\n\r\n**원인** : out 폴더에 .nojekyll 파일을 넣어 두더라도, **gh-pages -d out** 실행 시, Dot File (.으로 시작하는 파일)은 Push 하지 않으며 기존의 저장소와 비교하여 쓸모 없는 파일은 제거 하는 과정을 거치고 Push 한다.\r\n\r\n\r\n\r\n**해결책** : 옵션 --add와 --dotfiles 을 명령어 뒤에 붙여준다.\r\n\r\n```bash\r\ngh-pages --add --dotfiles -d build\r\n(--add는 최초에만 필요)\r\n```\r\n\r\n- --add : 기존의 저장소와 비교 후 쓸모없는 파일을 지우지 않음 (최초로 Push할 때 필요)\r\n- --dotfiles : .으로 시작하는 파일을 Push 함\r\n\r\n\r\n\r\n---\r\n\r\n출처 : https://imestory.tistory.com/entry/gh-pages%EC%99%80-Github-Pages-%EC%BB%A4%EC%8A%A4%ED%85%80-%EB%8F%84%EB%A9%94%EC%9D%B8-%EC%84%A4%EC%A0%95-%EB%B0%8F-%EC%82%BD%EC%A7%88%EA%B8%B0\r\n\r\n\r\n\r\n## next/image 사용 문제\r\n\r\nnext/image는 다음과 같은 장점이 있다.\r\n\r\n\r\n\r\n- 더 적은 용량으로 이미지 최적화\r\n\r\n- 레이지 로딩 기능 내장\r\n\r\n\r\n\r\n따라서 next js 자체적으로 img가 아닌 next/image에서 가져온 Image 태그를 사용할 것을 권장하고 있다.\r\n\r\n(실제로 매번 build를 할 때마다 경고문이 뜬다)\r\n\r\n\r\n\r\n나 역시 next/image를 사용해보려고 시도를 하다 아주 큰 문제점(?)을 발견했는데,\r\n\r\n`next/image는 이미지 파일을 항상 고정된 크기로 미리 설정해야 한다` 는 것이다.\r\n\r\n\r\n\r\nImage 태그 안에는 **반드시** 1. src / 2. width / 3. height 가 들어가야 하는데, 문제는 이 값이 <u>Pixel 형식</u>이어야 한다.\r\n\r\n이를 조금이나마 해결할 수 있는 방법이 2가지가 있는데, **layout = \"fill\"** 을 사용하거나 **layout = \"response\" 와 width = {가로 비율}, height = {세로 비율}** 을 사용하는 것이다.\r\n\r\nlayout=\"fill\"은 무조건 relative 속성 + height, width 가 부모 요소 크기의 100%로 고정되어 버리는데(HTML 태그 안데 style 속성으로 지정되기 때문에 CSS 파일이 적용 우선순위에서 밀려나서 기능을 상실한다) 부모 요소인 div를 동적으로 조정하여 자식 img 태그의 이미지 크기를 조정하는 것은 굉장히 번거롭거나 경우에 따라서 불가능하다.\r\n\r\nlayout=\"response\"는 가로세로 비율을 고정시키기 때문에 가로세로 비율이 다른 이미지들을 함께 사용할 수 없어진다.\r\n\r\n\r\n\r\n고정된 크기의 사진을 올리거나 특정 포맷 안에서 사진을 올린다면 괜찮겠지만, 블로그는 크기가 다양한 사진을 올리기 때문에 next/image를 적용하지 못했다.\r\n\r\n---\r\n\r\n대신 차선책으로 `경고문을 제거`하는 방식을 사용했는데,\r\n\r\n`.eslintrc.json`에서 아래의 코드를 추가하면 build를 할 때 더이상 경고문이 뜨지 않는다.\r\n\r\n```json\r\n\"rules\": {\r\n    // \"next/image\"로 인한 경고 제거\r\n    \"@next/next/no-img-element\": \"off\"\r\n  }\r\n```\r\n\r\n\r\n\r\n\r\n\r\n## 남은 개선 사항\r\n\r\n- 서버 개발 및 연결");

/***/ }),

/***/ 4152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("# 마크다운 테스트\r\n\r\n링크: https://reactjs.com\r\n\r\n\r\n\r\n## 샾 2개\r\n\r\n\r\n\r\n**굵게**\r\n\r\n\r\n\r\n*기울이기*  => 슬래쉬로 변환\r\n\r\n\r\n\r\n```\r\n\r\n코드블럭\r\n\r\na=1\r\n\r\nb=2\r\n\r\nprint(a+b)\r\n\r\n오늘은 2021년 8월 25일\r\n\r\n```\r\n\r\n\r\n\r\n글자 `배경색`\r\n\r\n\r\n\r\n> 인용문\r\n\r\n\r\n\r\n![Fullstack React](https://dzxbosgk90qga.cloudfront.net/fit-in/504x658/n/20190131015240478_fullstack-react-cover-medium%402x.png)\r\n\r\n\r\n\r\n### 링크2\r\n\r\n- [Naver](https://naver.com)\r\n- [_**Google**_](http://www.google.com)\r\n- [_*Google*_](http://www.google.com)\r\n\r\n\r\n\r\n\r\n\r\n## Autolink literals\r\n\r\n\r\n\r\nwww.example.com, https://example.com, and contact@example.com.\r\n\r\n\r\n\r\n## Strikethrough\r\n\r\n\r\n\r\n~one~ or ~~two~~ tildes.\r\n\r\n\r\n\r\n## Table\r\n\r\n\r\n\r\n| a | b | c | d |\r\n| - | :- | -: | :-: |\r\n\r\n\r\n\r\n## Tasklist\r\n\r\n\r\n\r\n* [ ] to do\r\n\r\n* [x] done\r\n\r\n\r\n\r\n\r\n\r\n## Code\r\n\r\n```python\r\n\r\na = 1\r\n\r\nprint(a+2)\r\n\r\n```");

/***/ }),

/***/ 5165:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./cs/01_Data Link Control.md": 9274,
	"./cs/02_HDLC.md": 9804,
	"./develop/20210901_GitHubBlog.md": 5487,
	"./develop/20210927_GitHubBlog.md": 4520,
	"./develop/20210928_GitHubBlog.md": 2661,
	"./develop/20211005_GitHubBlog.md": 499,
	"./develop/20211006_GitHubBlog.md": 5092,
	"./develop/20211007_GitHubBlog.md": 2086,
	"./develop/markdown_test.md": 4152
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 5165;

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 3703:
/***/ ((module) => {

"use strict";
module.exports = import("react-markdown");;

/***/ }),

/***/ 7424:
/***/ ((module) => {

"use strict";
module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ 1762:
/***/ ((module) => {

"use strict";
module.exports = require("react-syntax-highlighter/dist/esm/styles/prism");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7964:
/***/ ((module) => {

"use strict";
module.exports = import("remark-gfm");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [645,192,219], () => (__webpack_exec__(3528)));
module.exports = __webpack_exports__;

})();