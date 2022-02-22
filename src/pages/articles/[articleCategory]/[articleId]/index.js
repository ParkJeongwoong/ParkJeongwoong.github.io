import React, { useContext, useEffect, useState } from "react";
import ArticleCategory from "components/Articles/Articles__Category";
import MarkdownRenderer from "components/Markdown/MarkdownRenderer";
import SEO from "components/seo";
import { store } from "store/store";
import globalStyles from "styles/globalStyles.module.css";
import styles from "styles/pages/ArticleDetail.module.css";
import articles from "store/article_data";

function ArticleDetail({ markdown, documentTitle }) {
  // 전역 상태 관리 (store)
  const globalState = useContext(store);
  const { value, dispatch } = globalState;
  const {} = value;

  // Loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch({ type: "GET_ARTICLES" });
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading && window.innerWidth > 960) {
      setTimeout(function () {
        const articleDetail_left = document.querySelector(
          "#ArticleDetail_left"
        );
        const articleCategory = document.querySelector("#Article_Category");

        articleDetail_left.style.width = "13%";
        articleCategory.style.width = "10%";
      }, 100);
    }
  }, [isLoading]);

  return (
    <div>
      <SEO
        description={markdown}
        title={documentTitle}
        siteTitle="웅's 블로그"
      />

      <main>
        {isLoading ? (
          <div className={globalStyles.loader}>
            <span className={globalStyles.loader_text}>Loading...</span>
          </div>
        ) : (
          <div className={styles.ArticleDetail}>
            {/* 왼쪽 */}
            <div className={styles.ArticleDetail__left} id="ArticleDetail_left">
              <ArticleCategory />
            </div>
            {/* 오른쪽 */}
            <div
              className={styles.ArticleDetail__right}
              id="ArticleDetail_right"
            >
              <MarkdownRenderer
                documentTitle={documentTitle}
                markdown={markdown}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default ArticleDetail;

export async function getStaticPaths() {
  const paths = [];
  articles.categoryList.forEach(category =>
    category.itemList.forEach(article =>
      paths.push({
        params: {
          articleCategory: article.category,
          articleId: article.id.toString(),
        },
      })
    )
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // 변수
  let path = "";
  let documentTitle = "";
  let markdown = "";
  let has_SubCategory = false;

  // 파일 주소 찾기
  if (articles.categoryList) {
    articles.categoryList.find(categoryElement => {
      if (categoryElement.category === context.params.articleCategory) {
        categoryElement.itemList.find(articleElement => {
          if (articleElement.id === parseInt(context.params.articleId)) {
            path = articleElement.content;
            documentTitle = articleElement.title;
            has_SubCategory = articleElement.subCategory ? true : false;
          }
        });
      }
    });
  }

  if (path) {
    let readmePath;
    if (!has_SubCategory) {
      readmePath = require(`store/article_data/${path.split("/")[2]}/${
        path.split("/")[3]
      }`);
    } else {
      readmePath = require(`store/article_data/${path.split("/")[2]}/${
        path.split("/")[3]
      }/${path.split("/")[4]}`);
    }

    markdown = readmePath.default;
  }

  return {
    props: {
      markdown,
      documentTitle,
    },
  };
}
