import React, { useContext, useEffect, useState } from "react";
import ArchivedItem from "components/Archives/ArchivedItem";
import SEO from "components/seo";
import { store } from "store/store";
import globalStyles from "styles/globalStyles.module.css";
import styles from "styles/pages/Archives.module.css";
import Api from "api/api";
import { useRouter } from "next/router";

function Archives() {
  const router = useRouter();
  // 전역 상태 관리 (store)
  const globalState = useContext(store);
  const { value, dispatch } = globalState;
  const { archives, pageData } = value;

  // Loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch({ type: "GET_ARCHIVES" });

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
  }, [dispatch, router.asPath, pageData.currentPage]);

  return (
    <div>
      <SEO
        description="Archives : Github 블로그 개발기, 농구 픽업게임 플랫폼 BITZ 개발 프로젝트 인턴 경험"
        title="Archives"
        siteTitle="웅's 블로그"
      />

      <main>
        {isLoading ? (
          <div className={globalStyles.loader}>
            <span className={globalStyles.loader_text}>Loading...</span>
          </div>
        ) : (
          <div className={styles.Archives}>
            <h1>Archives</h1>
            <div className={styles.Archives__List}>
              {archives.map((archive, idx) => (
                <div key={idx}>
                  <ArchivedItem archive={archive} />
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Archives;
