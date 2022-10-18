import React, { useContext } from "react";
import { store } from "store/store";
import { useRouter } from "next/router";
import styles from "styles/components/Articles__Category.module.css";
import Api from "api/api";

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

    toggleCategory("OnlyClose");
  };

  const toggleCategory = toggleType => {
    let categoryList = document.querySelectorAll("#Article_Category > div");
    let font_weight;
    let category_visible;

    if (categoryList[categoryList.length - 1].style["font-weight"]) {
      font_weight = "";
      category_visible = "none";
    } else if (toggleType != "OnlyClose") {
      font_weight = "bold";
      category_visible = "inline";
    }

    categoryList[categoryList.length - 1].style["font-weight"] = font_weight;
    for (let i = 0; i < categoryList.length - 1; i++) {
      categoryList[i].style.display = category_visible;
    }
  };

  const searchArticle = () => {
    const word = document.querySelector("#Search_Input").value;

    if (!moveList) {
      router.push({ pathname: "/articles" });
    } else {
      moveList(true);
    }

    if (word.length) {
      Api.searchArticle(
        { word },
        res => {
          dispatch({
            type: "SEARCH_ARTICLES",
            value: { word, articleList: res.data },
          });
        },
        err => console.log(err)
      );
      dispatch({
        type: "SELECT_CATEGORY",
        value: ["-2"],
      });
    } else {
      // 검색어가 없을 시 전체 결과 조회
      dispatch({
        type: "SELECT_CATEGORY",
        value: ["-1"],
      });
      dispatch({
        type: "SELECT_PAGE",
        value: 0,
      });
    }

    toggleCategory("OnlyClose");
  };

  const onKeyPress = event => {
    if (event.key == "Enter") {
      searchArticle();
    }
  };

  return (
    <div className={styles.Articles__Category} id="Article_Category">
      <h1>Articles</h1>
      <form className={styles.Search__Form} onSubmit={onKeyPress}>
        <input
          type="text"
          id="Search_Input"
          placeholder="search"
          className={styles.Search__Input}
          onKeyPress={onKeyPress}
        />
        <input className={styles.dummy} />
        <button
          type="button"
          className={styles.Search__Button}
          onClick={searchArticle}
        />
      </form>
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
      <div className={styles.Category__Mobile} onClick={toggleCategory}>
        -
      </div>
    </div>
  );
}

export default Article__Category;
