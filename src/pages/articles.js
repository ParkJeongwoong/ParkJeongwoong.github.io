import React, { useContext, useEffect, useState } from "react";
import ArticleCategory from "components/Articles/Articles__Category";
import ArticlesList from "components/Articles/Articles__List";
import SEO from "components/seo";
import { store } from "store/store";
import globalStyles from "styles/globalStyles.module.css";
import styles from "styles/pages/Articles.module.css";

function Articles() {
  // 전역 상태 관리 (store)
  const globalState = useContext(store);
  const { dispatch } = globalState;

  // Loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch({ type: "GET_ARTICLES" });
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    moveList();
  }, [isLoading]);

  function moveList(refresh) {
    if (!isLoading && window.innerWidth > 960) {
      const articleDetail_left = document.querySelector("#ArticleDetail_left");
      const articleCategory = document.querySelector("#Article_Category");
      const articlesList = document.querySelector("#ArticlesList");

      if (refresh) {
        articleDetail_left.style.transition = "0s";
        articleCategory.style.transition = "0s";
      }
      articleDetail_left.style.width = "13%";
      articleCategory.style.width = "10%";

      setTimeout(function () {
        articleDetail_left.style.transition = "1s";
        articleCategory.style.transition = "1s";

        articleDetail_left.style.width = "20%";
        articleCategory.style.width = "12%";
        articlesList.style.padding = "20px 50px";
      }, 100);
    }
  }

  return (
    <div>
      <SEO
        description="안녕하세요. 개발자 박정웅의 블로그입니다. Hi! This is Park Jeongwoong's GitHub Blog."
        title="Articles"
        siteTitle="웅's 블로그"
      />

      <main>
        {isLoading ? (
          <div className={globalStyles.loader}>
            <span className={globalStyles.loader_text}>Loading...</span>
          </div>
        ) : (
          <div className={styles.Articles}>
            {/* 왼쪽 */}
            <div className={styles.Articles__left} id="ArticleDetail_left">
              <ArticleCategory moveList={moveList} />
            </div>
            {/* 오른쪽 */}
            <div className={styles.Articles__right}>
              <ArticlesList />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Articles;
