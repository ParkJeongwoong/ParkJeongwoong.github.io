import React, { useContext, useEffect, useState } from "react";
import ArticleCategory from "components/Articles/Articles__Category";
import ArticlesList from "components/Articles/Articles__List";
import SEO from "components/seo";
import { store } from "store/store";
import globalStyles from "styles/globalStyles.module.css";
import styles from "styles/pages/Articles.module.css";
import { useRouter } from "next/router";
import Api from "api/api";

function Articles() {
  const router = useRouter();
  // 전역 상태 관리 (store)
  const globalState = useContext(store);
  const { value, dispatch } = globalState;
  const { pageData } = value;

  // Loading
  const [isLoading, setIsLoading] = useState(true);

  // 글 목록 이동 함수 (Refresh 효과)
  const moveList = React.useCallback(
    refresh => {
      if (!isLoading && window.innerWidth > 960) {
        const articleDetail_left = document.querySelector(
          "#ArticleDetail_left"
        );
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
    },
    [isLoading]
  );

  useEffect(() => {
    dispatch({ type: "GET_ARTICLES" });

    if (isLoading) {
      // 방문 확인
      const { referrer } = document;
      Api.visited({
        url: "https://parkjeongwoong.github.io" + router.asPath,
        who: router.asPath.split("who=")[1],
        lastPage: pageData.currentPage,
        referrer,
      });
      dispatch({ type: "SET_PAGE", value: router.asPath });
    }

    setIsLoading(false);
  }, [dispatch, router.asPath, pageData.currentPage, isLoading]);

  useEffect(() => {
    moveList();
  }, [moveList]);

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
