# [GitHub Blog 개발기] SEO 구현(3) - Next.js app

현재 블로그를 Next.js 로의 전환하는 과정을 진행 중이다.

다음은 실제로 전환하는 과정에서 생겼던 예상치 못한 이슈들과 해결 방법이다.



## Dynamic Routing 방법

각 페이지가 HTML인 형식

대괄호([])로 감싼 폴더 => 슬래쉬(/) 역할





## Markdown file Parsing 문제

https://growd.tistory.com/78



[수정내역]

- Before

```javascript
useEffect(() => {
  if (path) {
    const readmePath = require(`store/article_data/${path.split("/")[2]}/${
      path.split("/")[3]
    }`);

    // 파일 가져오기
    fetch(readmePath.default)
      .then(r => r.text())
      .then(text => {
        setMarkdown(text);
      });
    setIsLoading(false);
  }
}, [markdown, path]);
```



- After

```javascript
useEffect(() => {
  if (path) {
    const readmePath = require(`store/article_data/${path.split("/")[2]}/${
      path.split("/")[3]
    }`);

    // 파일 가져오기
    setMarkdown(readmePath.default);
    setIsLoading(false);
  }
}, [markdown, path]);
```

