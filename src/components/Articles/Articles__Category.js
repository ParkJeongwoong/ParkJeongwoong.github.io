import React, { useContext } from "react";
import { store } from "store/store";
import { useRouter } from "next/router";
import styles from "styles/components/Articles__Category.module.css";

function Article__Category() {
  const router = useRouter();

  // 전역 상태 관리 (store)
  const globalState = useContext(store);
  const { value, dispatch } = globalState;
  const { articles } = value;

  const selectCategory = event => {
    if (router.pathname !== "/articles") {
      router.push({ pathname: "/articles" });
    }
    dispatch({
      type: "SELECT_CATEGORY",
      value: parseInt(event.target.getAttribute("value")),
    });
  };

  return (
    <div className={styles.Articles__Category}>
      <h1>Articles</h1>
      <div
        className={styles.Category__Button}
        onClick={selectCategory}
        value="-1"
      >
        전체보기
      </div>
      {articles.categoryList.map((article_type, idx) => (
        <div
          key={idx}
          className={styles.Category__Button}
          onClick={selectCategory}
          value={article_type.id}
        >
          {article_type.category}
        </div>
      ))}
    </div>
  );
}

export default Article__Category;
