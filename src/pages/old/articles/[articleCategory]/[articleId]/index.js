import React, { useContext, useEffect, useState } from "react";
import ArticleCategory from "components/Articles/Articles__Category";
import MarkdownRenderer from "components/Markdown/MarkdownRenderer";
import MarkdownIndex from "components/Markdown/MarkdownIndex";
import SEO from "components/seo";
import { store } from "store/store";
import globalStyles from "styles/globalStyles.module.css";
import styles from "styles/pages/ArticleDetail.module.css";
import articles from "store/article_data";
import { useRouter } from "next/router";
import Api from "api/api";

function ArticleDetail({ markdown, documentTitle, index }) {
  const router = useRouter();
  // 전역 상태 관리 (store)
  const globalState = useContext(store);
  const { value, dispatch } = globalState;
  const { pageData } = value;

  // Loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch({ type: "GET_ARTICLES" });

    if (isLoading) {
      // // 방문 확인
      // Api.visited({
      //   url: "https://parkjeongwoong.github.io" + router.asPath,
      //   who: router.asPath.split("who=")[1],
      //   lastPage: pageData.currentPage,
      // });
      dispatch({ type: "SET_PAGE", value: router.asPath });
    }

    setIsLoading(false);
  }, [dispatch, router.asPath, pageData.currentPage, isLoading]);

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
              <MarkdownRenderer markdown={markdown} />
              <MarkdownIndex index={index} />
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
  let index = [];
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

    const index_raw = markdown.split("\r\n");
    let code_line = false;

    index_raw.forEach(line => {
      // 코드 라인의 주석표시(#) 무시
      if (/^(```)/.test(line)) {
        code_line = !code_line;
      }

      if (!code_line) {
        if (/^#####/.test(line)) {
          index.push({
            type: "type5",
            data: line
              .replace("#####", "")
              .replace(/`/gi, "")
              .replace(/\*/gi, ""),
          });
        } else if (/^####/.test(line)) {
          index.push({
            type: "type4",
            data: line
              .replace("####", "")
              .replace(/`/gi, "")
              .replace(/\*/gi, ""),
          });
        } else if (/^###/.test(line)) {
          index.push({
            type: "type3",
            data: line
              .replace("###", "")
              .replace(/`/gi, "")
              .replace(/\*/gi, ""),
          });
        } else if (/^##/.test(line)) {
          index.push({
            type: "type2",
            data: line.replace("##", "").replace(/`/gi, "").replace(/\*/gi, ""),
          });
        } else if (/^#/.test(line)) {
          index.push({
            type: "type1",
            data: line.replace("#", "").replace(/`/gi, "").replace(/\*/gi, ""),
          });
        }
      }
    });
  }

  return {
    props: {
      markdown,
      documentTitle,
      index,
    },
  };
}
