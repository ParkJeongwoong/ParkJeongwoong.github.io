import React, { useContext } from "react";
import { store } from "store/store";
import { useRouter } from "next/router";
import styles from "styles/components/Articles__Category.module.css";

function Article__Category({ moveList }) {
  const router = useRouter();

  // 전역 상태 관리 (store)
  const globalState = useContext(store);
  const { value, dispatch } = globalState;
  const { articles } = value;

  const selectCategory = event => {
    if (!moveList) {
      router.push({ pathname: "/articles" });
    } else {
      moveList(true);
    }

    const parsedIdList = event.target.getAttribute("value").split("_");

    dispatch({
      type: "SELECT_CATEGORY",
      value: parsedIdList,
    });
    dispatch({
      type: "SELECT_PAGE",
      value: 0,
    });
  };

  const toggleCategory = () => {
    let categoryList = document.querySelectorAll("#Article_Category > div");
    let font_weight;
    let category_visible;

    if (categoryList[0].style["font-weight"]) {
      font_weight = "";
      category_visible = "none";
    } else {
      font_weight = "bold";
      category_visible = "inline";
    }

    categoryList[0].style["font-weight"] = font_weight;
    for (let i = 1; i < categoryList.length; i++) {
      categoryList[i].style.display = category_visible;
    }
  };

  return (
    <div className={styles.Articles__Category} id="Article_Category">
      <h1>Articles</h1>
      <div className={styles.Category__Mobile} onClick={toggleCategory}>
        {articles.categoryId == -1
          ? "전체보기"
          : articles.subCategoryId == -1
          ? articles.categoryList[Number(articles.categoryId)].category
          : articles.categoryList[Number(articles.categoryId)].subCategory[
              articles.subCategoryId
            ]}
      </div>
      <div className={styles.Category__Div}>
        <div
          className={styles.Category__Button}
          onClick={selectCategory}
          value="-1"
        >
          전체보기
        </div>
      </div>
      {articles.categoryList.map((article_type, idx) => (
        <div key={idx} className={styles.Category__Div}>
          <div
            className={styles.Category__Button}
            onClick={selectCategory}
            value={article_type.id}
          >
            {article_type.category}
          </div>
          {article_type.subCategory.map((article_sub_type, sidx) => (
            <div
              key={sidx}
              className={styles.SubCategory__Button}
              onClick={selectCategory}
              value={`${article_type.id}_${sidx}`}
            >
              {article_sub_type}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Article__Category;
