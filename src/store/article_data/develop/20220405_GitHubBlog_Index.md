# [GitHub Blog 개발기] Markdown Index 구현 (TOC)

블로그에 길이가 긴 글들이 생기면서 "목차"의 필요성을 느꼈다.

특히 [알고리즘 정리 글](https://parkjeongwoong.github.io/articles/Algorithm/0)은 워낙 양이 많아 반드시 목차가 필요했다.

(글에선 Markdown Index라고 표현했는데, 나중에 검색을 해보니 이런 목차를 Table Of  Content, TOC라고 부른다는 것을 알았다)



인덱스 기능을 추가하면서 단순한 목차에서 그치지 않고, <u>실시간으로 위치를 표시</u>하고 언제든 <u>원하는 위치로 이동</u> 할 수 있는 기능을 추가했다.



## 동작 방식

인덱스 기능을 구상하면서 생각했던 동작 방식은 다음과 같다.

```
1. 마크다운 파일에서 목차 데이터를 추출한다.
2. 추출한 목차 데이터로 목차를 만든다.
3. 글을 렌더링한 이후 각 항목의 위치를 찾고 목차와 연결한다.
4. 기능 구현
    4-1. 목차의 항목을 클릭하면 해당 위치로 이동
    4-2. 스크롤을 할 때마다 이벤트를 발생시키고 현재 위치와 각 항목의 위치를 비교
```



## 구현

### 1. 목차 데이터 추출

이미  마크다운 파일을 렌더링하기 위해 파일을 읽어 문자열로 만든 변수를 가지고 있었기 때문에 쉽게 구현할 수 있었다.

```react
// markdown 은 이전에 만든 마크다운 파일 문자열

const index_raw = markdown.split("\r\n");
let code_line = false;

index_raw.forEach(line => {
  // 코드 라인의 주석표시(#) 무시 - 예시 코드에 있는 주석 표시들이 목차로 분류되는 문제 해결
  if (/^(```)/.test(line)) {
    code_line = !code_line;
  }

  if (!code_line) {
    if (/^#####/.test(line)) {
      index.push({
        type: "type5",
        data: line.replace("#####", "").replace(/`/gi, "").replace(/\*/gi, ""),
      });
    } else if (/^####/.test(line)) {
      index.push({
        type: "type4",
        data: line.replace("####", "").replace(/`/gi, "").replace(/\*/gi, ""),
      });
    } else if (/^###/.test(line)) {
      index.push({
        type: "type3",
        data: line
          .replace("###", "").replace(/`/gi, "").replace(/\*/gi, ""),
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
```

([소스](https://github.com/ParkJeongwoong/ParkJeongwoong.github.io/blob/master/src/pages/articles/%5BarticleCategory%5D/index.js))

### 2. 목차 생성

생성된 목차를 바탕으로 화면 오른쪽에 고정된 목차를 만들었다.

```react
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
```

([소스](https://github.com/ParkJeongwoong/ParkJeongwoong.github.io/blob/master/src/components/Markdown/MarkdownIndex.js))

### 3. 위치 정보 연결

이 부분에서 처음 애를 먹었다.

렌더링이 먼저 된 이후 요쇼의 위치를 목차의 항목과 연결하고 싶었는데, 자꾸 렌더링이 되기 전에 코드가 실행됐다.



고민 끝에 찾은 방법은 **실제로 사용될 때 코드를 실행**하는 것이었다.

글을 넓게 보고 싶은 마음에 인덱스를 항상 고정시키는 것이 아니라 버튼을 클릭하면 보이도록 만들었는데,

이렇게 되면 페이지가 처음 렌더링된 시점에서 인덱스가 보이지 않으므로 굳이 화면의 요소들과 연결할 필요가 없었다.

이를 이용해 [인덱스 - 화면] 연결은 <u>인덱스 버튼을 클릭</u>하는 시점에 하도록 만들었다.

```react
// 버튼의 onClick 이벤트인 showIndex
const showIndex = event => {
  // 인덱스 토글
  const index_box = document.querySelector("#index_box");
  index_box.style["display"] = isShowIndex ? "none" : "block";
  setIsShowIndex(!isShowIndex);
    
  // 버튼 토글
  event.target.style["font-weight"] = isShowIndex ? "normal" : "bold";
  event.target.style["background-color"] = isShowIndex
    ? "var(--main-color-dark)"
    : "var(--main-color-deep-dark)";
    
  // 1. subjectMap 생성 - 렌더링 된 요소들을 모두 찾음
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

// 2. index, subjectMap -> subjectPosition(위치 정보) 생성
useEffect(() => {
  if (!subjectPosition.length && Object.keys(subjectMap).length) {
    const newSubjectPosition = index.map((subject, idx) => {
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
```

([소스](https://github.com/ParkJeongwoong/ParkJeongwoong.github.io/blob/master/src/components/Markdown/MarkdownIndex.js))

### 4. 기능 추가

#### 4-1. 클릭 이벤트

```react
const moveScroll = event => {
  const targetIdx = event.target.getAttribute("value");
  const location = subjectPosition[Number(targetIdx)] - 80;
  window.scrollTo({ top: location, behavior: "smooth" });
};
```

([소스](https://github.com/ParkJeongwoong/ParkJeongwoong.github.io/blob/master/src/components/Markdown/MarkdownIndex.js))



#### 4-2. 현재 위치 실시간 확인

```react
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

// 스크롤 위치가 인덱스의 어느 항목에 있는지 체크
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
```

([소스](https://github.com/ParkJeongwoong/ParkJeongwoong.github.io/blob/master/src/components/Markdown/MarkdownIndex.js))
