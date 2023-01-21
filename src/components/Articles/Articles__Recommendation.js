import React, { useState, useEffect } from "react";
import styles from "styles/components/Article__Recommendation.module.css";
import Api from "api/api";

function Article__Recommendation({ documentId }) {
  const [recommendedArticle, setRecommendedArticle] = useState([]);

  useEffect(() => {
    if (documentId != null) {
      Api.getRecommendedArticle(
        { documentId },
        res => setRecommendedArticle(res.data),
        err => console.log(err)
      );
    }
  }, [documentId]);

  const selectArticle = event => {
    const path = event.target.getAttribute("value");
    document.location.href = `/articles/${path}`; // useRouter를 쓰면 새로고침이 안 됨
  };

  return (
    <div>
      {recommendedArticle.length ? (
        <div className={styles.Article__Recommendation}>
          <div>이 글과 비슷한 글</div>
          <div className={styles.Article__Recommendation_ArticleBox}>
            {recommendedArticle.map((article, idx) => (
              <div
                key={idx}
                onClick={selectArticle}
                value={`${article.category}/${article.categoryId}`}
              >
                <div
                  className={styles.Article__Recommendation_title}
                  value={`${article.category}/${article.categoryId}`}
                >
                  {article.title}
                </div>
                <div
                  className={styles.Article__Recommendation_info}
                  value={`${article.category}/${article.categoryId}`}
                >
                  <div
                    className={styles.Article__Recommendation_info_category}
                    value={`${article.category}/${article.categoryId}`}
                  >
                    {article.category}
                  </div>
                  <div
                    className={styles.Article__Recommendation_info_date}
                    value={`${article.category}/${article.categoryId}`}
                  >
                    <span>{`${article.date.substr(0, 4)}년`}</span>
                    <span>{`${article.date.substr(4, 2)}월`}</span>
                    <span>{`${article.date.substr(6, 2)}일`}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Article__Recommendation;
