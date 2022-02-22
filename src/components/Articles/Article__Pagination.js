import React, { useContext } from "react";
import { store } from "store/store";
import styles from "styles/components/Article__Pagination.module.css";

function Article__Pagination({ article_count }) {
  // 전역 상태 관리 (store)
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const selectPage = event => {
    const page = event.target.getAttribute("value");
    dispatch({
      type: "SELECT_PAGE",
      value: page,
    });
  };

  function getPageList(article_count) {
    const pageList = [
      <div
        key="0"
        className={styles.Pagination__DefaultPage}
        onClick={selectPage}
        id="page0"
        value={0}
      >
        1
      </div>,
    ];
    for (let i = 1; i * 10 < article_count; i++) {
      pageList.push(
        <div
          key={i}
          className={styles.Pagination__Page}
          onClick={selectPage}
          id={`page${i}`}
          value={i}
        >
          {i + 1}
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
