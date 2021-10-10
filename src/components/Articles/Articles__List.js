import React, { useContext, useEffect, useState } from "react";
import { store } from "store/store";
import { useRouter } from "next/router";
import styles from "styles/components/Articles__List.module.css";

function Articles__List() {
  // router 사용
  const router = useRouter();
  // 전역 상태 관리 (store)
  const globalState = useContext(store);
  const { value } = globalState;
  const { articles } = value;

  const [selectedCategory, setSelectedCategory] = useState("전체보기");
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    if (articles.categoryId === -1) {
      setSelectedCategory("전체보기");
      setArticleList(
        articles.categoryList
          .reduce((acc, curr) => {
            acc.push(...curr.itemList);
            return acc;
          }, [])
          .sort(function (a, b) {
            if (a.date > b.date) {
              return 1;
            } else {
              return -1;
            }
          })
      );
    } else {
      const selectedArticles = articles.categoryList.filter(
        category => category.id === articles.categoryId
      );
      setSelectedCategory(selectedArticles[0].category);
      setArticleList(selectedArticles[0].itemList);
    }
  }, [articles.categoryId, articles.categoryList]);

  // 글 선택
  const selectArticle = event => {
    const path = event.target.getAttribute("value");
    router.push({ pathname: `/articles/${path}` });
  };

  return (
    <div className={styles.Articles__List}>
      <div className={styles.Articles__List__Selected}>{selectedCategory}</div>
      {articleList[0] ? (
        <div>
          {articleList
            .slice(0)
            .reverse()
            .map((article, idx) => (
              <div
                key={idx}
                className={styles.Articles__List__Article}
                onClick={selectArticle}
                value={`${article.category}/${article.id}`}
              >
                <div
                  className={styles.Article__Title}
                  value={`${article.category}/${article.id}`}
                >
                  <h2 value={`${article.category}/${article.id}`}>
                    {article.title}
                  </h2>
                </div>
                <div
                  className={styles.Article__Category_Date}
                  value={`${article.category}/${article.id}`}
                >
                  <div
                    className={styles.Article__Category}
                    value={`${article.category}/${article.id}`}
                  >
                    {article.category}
                  </div>
                  <div
                    className={styles.Article__Date}
                    value={`${article.category}/${article.id}`}
                  >
                    {`
                ${article.date.getFullYear()}년
                ${article.date.getMonth() + 1}월
                ${article.date.getDate()}일
              `}
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div>게시글이 없습니다.</div>
      )}
    </div>
  );
}

export default Articles__List;
