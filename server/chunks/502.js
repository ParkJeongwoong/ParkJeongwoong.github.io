"use strict";
exports.id = 502;
exports.ids = [502];
exports.modules = {

/***/ 5502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* binding */ StateProvider),
  "h": () => (/* binding */ store)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/store/home_data.js
const home = {
  profile_img: "/images/profile1.jpg",
  summary: "Yonsei Univ.\n\tMaterial Science & Engineering\nKATUSA, USFK\n\tUnited States Forces Korea\nSK Hynix\n\tNAND Flash CMP Engineering\nSSAFY\n\tSamsung SW Academy For Youth\nDAOU Tech.\n: KIWOOM Securities\n\tFinancial SW Developer",
  welcome_word: "안녕하세요! 금융 IT 개발자 박정웅입니다!",
  introduction: "공부한 내용을 기록하고 포트폴리오를 정리하는 개인 블로그입니다.\n끊임없이 배우고 성장하는 것을 즐겨 반도체 엔지니어에서 개발자로 전직했습니다.\n효율적이고 깔끔한 코드에 관심이 많습니다.\n피아노, 운동, 여행을 좋아합니다."
};
/* harmony default export */ const home_data = (home);
;// CONCATENATED MODULE: ./src/store/profile_data.js
const profile = {
  introduction: "Web 기술에 관심을 가지고 있는 금융 IT 개발자입니다.\n신소재공학을 전공하고 반도체 기업의 엔지니어로 근무했습니다.\n배우고 성장하는 것을 즐겨 반도체 엔지니어에서 개발자로 전직했습니다.",
  tech_stack: {
    frontend: ["/tech_stack/javascript.png", "/tech_stack/react.png", "/tech_stack/vue.png"],
    backend: ["/tech_stack/python.png", "/tech_stack/django.png", "/tech_stack/java.png"],
    version_control: ["/tech_stack/git.png"],
    studying: ["/tech_stack/spring.png", "/tech_stack/mysql.png", "/tech_stack/cpp.png"]
  },
  career: [{
    name: "다우기술 - 키움증권",
    content: "금융개발직무 (2021-현재)"
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
/* harmony default export */ const profile_data = (profile);
;// CONCATENATED MODULE: ./src/store/article_data/cs.js
const cs = [{
  category: "CS",
  id: 0,
  title: "Data Link Control",
  date: new Date("2021-09-02, 20:25"),
  content: "store/article_data/cs/01_Data Link Control.md"
}, {
  category: "CS",
  id: 1,
  title: "High-level Data Link Control",
  date: new Date("2021-09-04, 19:15"),
  content: "store/article_data/cs/02_HDLC.md"
}];
/* harmony default export */ const article_data_cs = (cs);
;// CONCATENATED MODULE: ./src/store/article_data/develop.js
const develop = [{
  category: "Develop",
  id: 0,
  title: "test",
  date: new Date("2021-08-25, 20:30"),
  content: "store/article_data/develop/markdown_test.md"
}, {
  category: "Develop",
  id: 1,
  title: "[GitHub Blog 개발기] 정리할 내용 목록",
  date: new Date("2021-09-01, 22:52"),
  content: "store/article_data/develop/20210901_GitHubBlog.md"
}, {
  category: "Develop",
  id: 2,
  title: "[GitHub Blog 개발기] 개발일지",
  date: new Date("2021-09-27, 21:22"),
  content: "store/article_data/develop/20210927_GitHubBlog.md"
}, {
  category: "Develop",
  id: 3,
  title: "[GitHub Blog 개발기] Markdown 적용 및 Require 함수",
  date: new Date("2021-09-29, 22:16"),
  content: "store/article_data/develop/20210928_GitHubBlog.md"
}, {
  category: "Develop",
  id: 4,
  title: "[GitHub Blog 개발기] 구글 검색 등록 & SEO 구현(1)",
  date: new Date("2021-10-05, 19:38"),
  content: "store/article_data/develop/20211005_GitHubBlog.md"
}, {
  category: "Develop",
  id: 5,
  title: "[GitHub Blog 개발기] SEO 구현(2) - Next.js app",
  date: new Date("2021-10-06, 13:12"),
  content: "store/article_data/develop/20211006_GitHubBlog.md"
}, {
  category: "Develop",
  id: 6,
  title: "[GitHub Blog 개발기] SEO 구현(3) - Next.js app",
  date: new Date("2021-10-07, 15:50"),
  content: "store/article_data/develop/20211007_GitHubBlog.md"
}];
/* harmony default export */ const article_data_develop = (develop);
;// CONCATENATED MODULE: ./src/store/article_data.js


const articles = {
  categoryId: -1,
  categoryList: [{
    id: 0,
    category: "Develop",
    itemList: article_data_develop
  }, {
    id: 1,
    category: "CS",
    itemList: article_data_cs
  }, {
    id: 2,
    category: "Algorithm",
    itemList: []
  }, {
    id: 3,
    category: "Web",
    itemList: []
  }, {
    id: 4,
    category: "Etc",
    itemList: []
  }]
};
/* harmony default export */ const article_data = (articles);
;// CONCATENATED MODULE: ./src/store/archive_data.js
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
}, // DAOU Internship
{
  id: 2,
  title: "Internship",
  details: [{
    id: 0,
    date: "2021-08.17 ~ 2021-09-10",
    images: [],
    content: "다우기술 금융개발 직무 (키움증권) 인턴"
  }]
}];
/* harmony default export */ const archive_data = (archives);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/store/store.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // Store - (1) 초기값 설정 *****


const initialState = {
  home: {},
  profile: {},
  articles: {},
  archives: []
}; // Store - (2) 초기값을 넣은 Context 생성 *****

const store = /*#__PURE__*/(0,external_react_.createContext)(initialState); // Store - (3) 위의 Context와 관련된 Provider 생성 : Index.js 용도 (모든 컴포넌트에서 Store 접근 가능하게 만드는 역할)

const {
  Provider
} = store; // Store - (4) 위에서 만든 Provider를 Return하는 React Component : React 관련 내용물은 항상 React Component 형식이 필요

const StateProvider = ({
  children
}) => {
  // Store - (5) useReducer를 사용해 value와 value를 업데이트하는 dispatch 생성 *****
  const {
    0: value,
    1: dispatch
  } = (0,external_react_.useReducer)((state, action) => {
    switch (action.type) {
      // Home Data 가져오기
      case "GET_HOME":
        const home = home_data;
        return _objectSpread(_objectSpread({}, state), {}, {
          home
        });
      // Profile Data 가져오기

      case "GET_PROFILE":
        const profile = profile_data;
        return _objectSpread(_objectSpread({}, state), {}, {
          profile
        });
      // Article Data 가져오기

      case "GET_ARTICLES":
        const articles = article_data;

        if (state.articles.categoryId != null && state.articles.categoryId !== -1) {
          articles.categoryId = state.articles.categoryId;
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          articles
        });
      // Archive Data 가져오기

      case "GET_ARCHIVES":
        const archives = archive_data;
        return _objectSpread(_objectSpread({}, state), {}, {
          archives
        });
      // Article - Choose Article Category

      case "SELECT_CATEGORY":
        const categoryId = action.value;
        return _objectSpread(_objectSpread({}, state), {}, {
          articles: _objectSpread(_objectSpread({}, state.articles), {}, {
            categoryId
          })
        });

      default:
        throw new Error();
    }
  }, initialState); // Store - (6) Context의 Return 형식 (Context는 항상 이렇게 내려보내야 해서 Provider 형식으로 Return 해 줌)

  return /*#__PURE__*/jsx_runtime_.jsx(Provider, {
    value: {
      value,
      dispatch
    },
    children: children
  });
};



/***/ })

};
;