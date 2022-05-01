import React, { createContext, useReducer } from "react";
import home_data from "./home_data";
import profile_data from "./profile_data";
import article_data from "./article_data";
import archive_data from "./archive_data";

// Store - (1) 초기값 설정 *****
const initialState = {
  home: {},
  profile: {},
  articles: {},
  archives: [],
  pageData: {},
};
// Store - (2) 초기값을 넣은 Context 생성 *****
const store = createContext(initialState);

// Store - (3) 위의 Context와 관련된 Provider 생성 : Index.js 용도 (모든 컴포넌트에서 Store 접근 가능하게 만드는 역할)
const { Provider } = store;

// Store - (4) 위에서 만든 Provider를 Return하는 React Component : React 관련 내용물은 항상 React Component 형식이 필요
const StateProvider = ({ children }) => {
  // Store - (5) useReducer를 사용해 value와 value를 업데이트하는 dispatch 생성 *****
  const [value, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      // Home Data 가져오기
      case "GET_HOME":
        const home = home_data;
        return { ...state, home };
      // Profile Data 가져오기
      case "GET_PROFILE":
        const profile = profile_data;
        return { ...state, profile };
      // Article Data 가져오기
      case "GET_ARTICLES":
        const articles = article_data;
        if (
          state.articles.categoryId != null &&
          state.articles.categoryId !== -1
        ) {
          articles.categoryId = state.articles.categoryId;
        }
        return { ...state, articles };
      // Archive Data 가져오기
      case "GET_ARCHIVES":
        const archives = archive_data;
        return { ...state, archives };
      // Article - Choose Article Category
      case "SELECT_CATEGORY":
        const parsedIdList = action.value;
        const categoryId = parseInt(parsedIdList[0]);
        let subCategoryId = -1;

        if (parsedIdList.length == 2) {
          subCategoryId = parseInt(parsedIdList[1]);
        }

        return {
          ...state,
          articles: { ...state.articles, categoryId, subCategoryId },
        };
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

        return {
          ...state,
          articles: {
            ...state.articles,
            page_from,
            page_to,
          },
        };

      case "SET_PAGE":
        const pageData = { currentPage: action.value };
        return { ...state, pageData };

      default:
        throw new Error();
    }
  }, initialState);

  // Store - (6) Context의 Return 형식 (Context는 항상 이렇게 내려보내야 해서 Provider 형식으로 Return 해 줌)
  return <Provider value={{ value, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
