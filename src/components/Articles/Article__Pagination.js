import React, { useContext } from "react";
import { store } from "store/store";
import styles from "styles/components/Article__Pagination.module.css";
import Api from "api/api";

function Article__Pagination({
  article_count,
  offset,
  isNextSearch,
  currSearch,
  setCurrSearch,
}) {
  // 전역 상태 관리 (store)
  const globalState = useContext(store);
  const { value, dispatch } = globalState;
  const { articles } = value;

  const selectPage = event => {
    const page = event.target.getAttribute("value");
    dispatch({
      type: "SELECT_PAGE",
      value: page,
    });
  };

  const searchLastArticle = () => {
    const word = articles.searchedWord;
    Api.searchArticle(
      { word: word + "/" + (currSearch - offset) },
      res => {
        setCurrSearch(currSearch - offset);
        dispatch({
          type: "SEARCH_ARTICLES",
          value: { word, articleList: res.data, direction: -1 },
        });
        dispatch({
          type: "SELECT_PAGE",
          value: offset / 10 - 1,
        });
      },
      err => console.log(err)
    );
  };

  const searchNextArticle = () => {
    const word = articles.searchedWord;
    Api.searchArticle(
      { word: word + "/" + (currSearch + offset) },
      res => {
        setCurrSearch(currSearch + offset);
        dispatch({
          type: "SEARCH_ARTICLES",
          value: { word, articleList: res.data, direction: 1 },
        });
        dispatch({
          type: "SELECT_PAGE",
          value: 0,
        });
      },
      err => console.log(err)
    );
  };

  function getPageList(article_count) {
    const pageList = [
      articles.categoryId == -2 ? (
        <div key="-1" className={styles.Article__SearchAgain}>
          {currSearch > 0 ? (
            <span className={styles.working} onClick={searchLastArticle}>
              이전 검색
            </span>
          ) : (
            <span className={styles.not_working}>이전 검색</span>
          )}
        </div>
      ) : (
        <div key="-1"></div>
      ),
      <div
        key="0"
        className={
          articles.searchDirection < 0
            ? styles.Pagination__DefaultPage_Back
            : styles.Pagination__DefaultPage
        }
        onClick={selectPage}
        id="page0"
        value={0}
      >
        {articles.categoryId === -2 ? currSearch / 10 + 1 : 1}
      </div>,
    ];
    for (let i = 1; i * 10 < article_count; i++) {
      pageList.push(
        <div
          key={i}
          className={
            articles.searchDirection < 0 && i * 10 >= offset - 10
              ? styles.Pagination__Page_Back
              : styles.Pagination__Page
          }
          onClick={selectPage}
          id={`page${i}`}
          value={i}
        >
          {articles.categoryId === -2 ? currSearch / 10 + 1 + i : 1 + i}
        </div>
      );
    }
    if (articles.categoryId == -2) {
      pageList.push(
        <div key="-2" className={styles.Article__SearchAgain}>
          {isNextSearch ? (
            <span className={styles.working} onClick={searchNextArticle}>
              다음 검색
            </span>
          ) : (
            <span className={styles.not_working}>다음 검색</span>
          )}
        </div>
      );
    }
    return pageList;
  }

  return (
    <div className={styles.Pagination__List}>{getPageList(article_count)}</div>
  );
}

export default Article__Pagination;
