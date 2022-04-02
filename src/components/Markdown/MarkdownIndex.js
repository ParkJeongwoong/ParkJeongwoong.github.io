import React, { useEffect, useState } from "react";
import styles from "styles/components/MarkdownIndex.module.css";

function MarkdownIndex({ index }) {
  const [isShowIndex, setIsShowIndex] = useState(false);
  const [indexMap, setIndexMap] = useState([]);
  let countType1 = 1; // 카테고리의 Articles가 0번째 H1
  let countType2 = 0;
  let countType3 = 0;
  let countType4 = 0;
  let countType5 = 0;

  useEffect(() => {
    if (Object.keys(index).length) {
      const newIndexMap = [];
      index.forEach(subject => {
        switch (subject.type) {
          case "type1":
            newIndexMap.push(countType1);
            countType1++;
            break;
          case "type2":
            newIndexMap.push(countType2);
            countType2++;
            break;
          case "type3":
            newIndexMap.push(countType3);
            countType3++;
            break;
          case "type4":
            newIndexMap.push(countType4);
            countType4++;
            break;
          case "type5":
            newIndexMap.push(countType5);
            countType5++;
            break;
        }
      });
      setIndexMap(newIndexMap);
    }
  }, [index]);

  const showIndex = event => {
    setIsShowIndex(!isShowIndex);
    const index_box = document.querySelector("#index_box");

    if (!isShowIndex) {
      event.target.style["font-weight"] = "bold";
      event.target.style["background-color"] = "var(--main-color-deep-dark)";
      index_box.style["display"] = "block";
    } else {
      event.target.style["font-weight"] = "normal";
      event.target.style["background-color"] = "var(--main-color-dark)";
      index_box.style["display"] = "none";
    }
  };

  const moveScroll = event => {
    const targetIdx = event.target.getAttribute("value");
    const targetType = index[targetIdx].type;
    const typeIdx = indexMap[targetIdx];
    let target = null;
    // const target = document.querySelectorAll()
    // console.log(event.target.offsetTop);
    switch (targetType) {
      case "type1":
        target = document.querySelectorAll("h1")[typeIdx];
        break;
      case "type2":
        target = document.querySelectorAll("h2")[typeIdx];
        break;
      case "type3":
        target = document.querySelectorAll("h3")[typeIdx];
        break;
      case "type4":
        target = document.querySelectorAll("h4")[typeIdx];
        break;
      case "type5":
        target = document.querySelectorAll("h5")[typeIdx];
        break;
    }

    const location = target.offsetTop - 80;
    window.scrollTo({ top: location, behavior: "smooth" });
  };

  return (
    <div className={styles.MarkdownIndex}>
      <div className={styles.MarkdownIndex_Button} onClick={showIndex}>
        Index
      </div>
      <div className={styles.MarkdownIndex_Box} id="index_box">
        {index.map((subject, idx) => (
          <div
            key={idx}
            value={idx}
            className={styles[`MarkdownIndex_${subject.type}`]}
            onClick={moveScroll}
          >
            {subject.data}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarkdownIndex;
