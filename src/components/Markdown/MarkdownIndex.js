import React, { useEffect, useState } from "react";
import styles from "styles/components/MarkdownIndex.module.css";
import classNames from "classnames";

function MarkdownIndex({ index }) {
  const [isShowIndex, setIsShowIndex] = useState(false);
  const [subjectMap, setSubjectMap] = useState({});
  const [subjectPosition, setSubjectPosition] = useState([]);
  const [lastSubject, setLastSubject] = useState(0);
  let countType1 = 1; // 카테고리의 Articles가 0번째 H1
  let countType2 = 0;
  let countType3 = 0;
  let countType4 = 0;
  let countType5 = 0;
  // 스크롤 이벤트
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setScroll({ y: window.scrollY, x: window.scrollX });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (subjectPosition.length) {
      let i;
      for (i = 1; i < subjectPosition.length; i++) {
        if (scroll.y + 85 < subjectPosition[i]) {
          break;
        }
      }
      if (scroll.y + 85 >= subjectPosition[subjectPosition.length - 1]) {
        i = subjectPosition.length;
      }
      if (scroll.y + window.innerHeight >= document.body.offsetHeight) {
        i = subjectPosition.length;
      }

      if (i - 1 != lastSubject) {
        setLastSubject(i - 1);
      }
    }
  }, [scroll, lastSubject, subjectPosition]);

  // 2. index, subjectMap -> subjectPosition(위치 정보) 생성
  useEffect(() => {
    if (!subjectPosition.length && Object.keys(subjectMap).length) {
      const newSubjectPosition = index.map(subject => {
        switch (subject.type) {
          case "type1":
            return subjectMap[subject.type][countType1++].offsetTop;
          case "type2":
            return subjectMap[subject.type][countType2++].offsetTop;
          case "type3":
            return subjectMap[subject.type][countType3++].offsetTop;
          case "type4":
            return subjectMap[subject.type][countType4++].offsetTop;
          case "type5":
            return subjectMap[subject.type][countType5++].offsetTop;
        }
      });
      setSubjectPosition(newSubjectPosition);
    }
  }, [
    subjectMap,
    index,
    subjectPosition.length,
    countType1,
    countType2,
    countType3,
    countType4,
    countType5,
  ]);

  const showIndex = event => {
    const index_box = document.querySelector("#index_box");
    index_box.style["display"] = isShowIndex ? "none" : "block";
    setIsShowIndex(!isShowIndex);

    event.target.style["font-weight"] = isShowIndex ? "normal" : "bold";
    event.target.style["background-color"] = isShowIndex
      ? "var(--main-color-dark)"
      : "var(--main-color-deep-dark)";

    // 1. subjectMap 생성
    if (!Object.keys(subjectMap).length) {
      setSubjectMap({
        type1: document.querySelectorAll("h1"),
        type2: document.querySelectorAll("h2"),
        type3: document.querySelectorAll("h3"),
        type4: document.querySelectorAll("h4"),
        type5: document.querySelectorAll("h5"),
      });
    }
  };

  const moveScroll = event => {
    const targetIdx = event.target.getAttribute("value");
    const location = subjectPosition[Number(targetIdx)] - 80;
    window.scrollTo({ top: location, behavior: "smooth" });
  };

  return (
    <div className={styles.MarkdownIndex}>
      <div className={styles.MarkdownIndex_Button} onClick={showIndex}>
        Index
      </div>
      <div className={styles.MarkdownIndex_Box} id="index_box">
        <div className={styles.MarkdownIndex_ContentBox}>
          {index.map((subject, idx) => (
            <div key={idx}>
              <div className={styles[`offset_${subject.type}`]}></div>
              <div
                id={`index${idx}`}
                value={idx}
                className={classNames({
                  [styles[`MarkdownIndex_${subject.type}`]]: true,
                  [styles.MarkdownIndex_hover]: lastSubject != idx,
                  [styles.MarkdownIndex_selected]: lastSubject == idx,
                })}
                onClick={moveScroll}
              >
                {subject.data}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarkdownIndex;
