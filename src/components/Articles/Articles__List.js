import React, { useContext, useEffect, useState } from "react";
import { store } from "store/store";
import { useRouter } from "next/router";
import styles from "styles/components/Articles__List.module.css";
import Article__Pagination from "components/Articles/Article__Pagination";
import Api from "api/api";

function Articles__List() {
  // router 사용
  const router = useRouter();
  // 전역 상태 관리 (store)
  const globalState = useContext(store);
  const { value, dispatch } = globalState;
  const { articles } = value;

  const [selectedCategory, setSelectedCategory] = useState("전체보기");
  const [articleList, setArticleList] = useState([]);
  const [postSearch, setPostSearch] = useState(0);
  const [preSearch, setPreSearch] = useState(0);

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
    } else if (articles.categoryId === -2) {
      if (articles.searchedArticleList && articles.searchedArticleList.length) {
        const searchedArticles = articles.searchedArticleList
          .splice(0, 10)
          .map(article => {
            return {
              ...article,
              id: article.categoryId,
              date: new Date(
                article.date.substr(0, 4) +
                  "-" +
                  article.date.substr(4, 2) +
                  "-" +
                  article.date.substr(6, 2)
              ),
            };
          });

        for (let i = 0; i < searchedArticles.length; i++) {
          searchedArticles[i]["matchedContent"] = [];
          let lastBool = searchedArticles[i].matchWords[0];
          let start_index = 0;
          for (let j = 1; j < searchedArticles[i].matchWords.length; j++) {
            if (lastBool && !searchedArticles[i].matchWords[j]) {
              searchedArticles[i].matchedContent.push({
                matched: true,
                content: searchedArticles[i].content.slice(start_index, j),
              });
              start_index = j;
            } else if (!lastBool && searchedArticles[i].matchWords[j]) {
              searchedArticles[i].matchedContent.push({
                matched: false,
                content: searchedArticles[i].content.slice(start_index, j),
              });
              start_index = j;
            }
            lastBool = searchedArticles[i].matchWords[j];
          }
          searchedArticles[i].matchedContent.push({
            matched: lastBool,
            content: searchedArticles[i].content.slice(
              start_index,
              searchedArticles[i].matchWords.length
            ),
          });
        }

        setArticleList(searchedArticles);
        setSelectedCategory('"' + articles.searchedWord + '" 검색결과');
        setPostSearch(
          articles.searchedArticleList.length ? postSearch + 10 : 0
        );
      }
    } else {
      const selectedArticles = articles.categoryList.filter(
        category => category.id === articles.categoryId
      );
      if (articles.subCategoryId === -1) {
        setSelectedCategory(selectedArticles[0].category);
        setArticleList(selectedArticles[0].itemList);
      } else {
        setSelectedCategory(
          selectedArticles[0].subCategory[articles.subCategoryId]
        );
        setArticleList(
          selectedArticles[0].itemList.filter(
            article =>
              article.subCategory ===
              selectedArticles[0].subCategory[articles.subCategoryId]
          )
        );
      }
    }
  }, [
    articles.categoryId,
    articles.subCategoryId,
    articles.categoryList,
    articles.page_from,
    articles.searchedWord,
    articles.searchedArticleList,
  ]);

  // 글 선택
  const selectArticle = event => {
    const path = event.target.getAttribute("value");
    router.push({ pathname: `/articles/${path}` });
  };

  const searchLastArticle = () => {
    const word = articles.searchedWord;
    Api.searchArticle(
      { word: word + "/" + (preSearch - 10) },
      res => {
        setPreSearch(preSearch - 10);
        setPostSearch(preSearch - 10);
        dispatch({
          type: "SEARCH_ARTICLES",
          value: { word, articleList: res.data },
        });
      },
      err => console.log(err)
    );
  };

  const searchNextArticle = () => {
    const word = articles.searchedWord;
    Api.searchArticle(
      { word: word + "/" + postSearch },
      res => {
        setPreSearch(postSearch);
        dispatch({
          type: "SEARCH_ARTICLES",
          value: { word, articleList: res.data },
        });
      },
      err => console.log(err)
    );
  };

  return (
    <div className={styles.Articles__List} id="ArticlesList">
      <div className={styles.Articles__List__Selected}>{selectedCategory}</div>
      {articleList[0] ? (
        <div>
          {articleList
            .slice(0)
            .reverse()
            .map((article, idx) =>
              articles.page_from <= idx && idx < articles.page_to ? (
                <div
                  key={idx}
                  className={styles.Articles__List__Article}
                  onClick={selectArticle}
                  value={`${article.category}/${article.id}`}
                >
                  {articles.categoryId == -2 && article.matchedContent ? (
                    <div
                      className={styles.Article__SearchResult}
                      value={`${article.category}/${article.id}`}
                    >
                      <h3 value={`${article.category}/${article.id}`}>
                        {article.title}
                      </h3>
                      <div
                        className={styles.Article__SearchResult_Content}
                        value={`${article.category}/${article.id}`}
                      >
                        {article.matchedContent ? (
                          <div>
                            {article.matchedContent.map(
                              ({ matched, content }, idx) =>
                                matched ? (
                                  <b key={idx}>{content}</b>
                                ) : (
                                  <span key={idx}>{content}</span>
                                )
                            )}
                          </div>
                        ) : (
                          <div>{article.content}</div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div
                      className={styles.Article__Title}
                      value={`${article.category}/${article.id}`}
                    >
                      <h2 value={`${article.category}/${article.id}`}>
                        {article.title}
                      </h2>
                    </div>
                  )}
                  <div className={styles.Article_SubCategory}>
                    {article.subCategory}
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
              ) : (
                ""
              )
            )}
        </div>
      ) : (
        <div>게시글이 없습니다.</div>
      )}
      {articles.categoryId == -2 ? (
        <div className={styles.Article__SearchAgain}>
          <div>
            {preSearch ? (
              <span className={styles.working} onClick={searchLastArticle}>
                이전 검색
              </span>
            ) : (
              <span className={styles.not_working}>이전 검색</span>
            )}
          </div>
          <div>
            {postSearch ? (
              <span className={styles.working} onClick={searchNextArticle}>
                다음 검색
              </span>
            ) : (
              <span className={styles.not_working}>다음 검색</span>
            )}
          </div>
        </div>
      ) : (
        <Article__Pagination article_count={articleList.length} />
      )}
    </div>
  );
}

export default Articles__List;
