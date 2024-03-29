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



## `CSS, JS 파일이 동작하지 않는 문제`

![image-20211009102133216](../../../../public/assets/image-20211009102133216.png)



모든 준비를 끝내고 Github에 Push를 했더니 위와 같은 페이지가 나왔다...

분명히 Local에서 npm run dev로 실행했을 땐 제대로 페이지가 나왔었는데 Github에서만 이상하게 동작을 했다.



알고보니 원인은 단순했다.

1. `.nojekyll` 파일의 존재를 몰랐던 것.
   1. GitHub Pages는 jekyll 기반으로 동작
   2. .nojekyll 파일이 root에 없으면 _로 시작하는 폴더를 읽지 못함
   3. JS, CSS 파일은 _next 폴더 안에 있기 때문에 JS, CSS 파일에 접근 X
   4. 웹페이지가 제대로 동작 X

2. 위의 문제를 파악하지 못하고 `next.config.js` 파일에 `assetPrefix: "./"`를 사용해서 문제를 해결하려고 함
   1. 나중에 .nojekyll을 추가
   2. Dynamic Routing을 하는 ROOT/articles/[articleCategory]/[articleId].html 파일들은 Root에서 2 Depth를 더 들어가야 존재
   3. 이 페이지들의 JS, CSS도 _next 폴더에 존재하는데 prefix가 "./"으로 되어 있어 Root 폴더에서 _next 폴더를 찾는 게 아니라 페이지의 html이 존재하는 ROOT/articles/[articleCategory]/에서 _next 폴더를 찾음



이유를 알고나니 해결책은 간단했다.

1. `.nojekyll` 파일 추가
2. `next.config.js` 에서 assetPrefix 제거



## .nojekyll 파일 gh-pages 실행 시 GitHub에 Push되지 않는 문제

**원인** : out 폴더에 .nojekyll 파일을 넣어 두더라도, **gh-pages -d out** 실행 시, Dot File (.으로 시작하는 파일)은 Push 하지 않으며 기존의 저장소와 비교하여 쓸모 없는 파일은 제거 하는 과정을 거치고 Push 한다.



**해결책** : 옵션 --add와 --dotfiles 을 명령어 뒤에 붙여준다.

```bash
gh-pages --add --dotfiles -d build
(--add는 최초에만 필요)
```

- --add : 기존의 저장소와 비교 후 쓸모없는 파일을 지우지 않음 (최초로 Push할 때 필요)
- --dotfiles : .으로 시작하는 파일을 Push 함



---

출처 : https://imestory.tistory.com/entry/gh-pages%EC%99%80-Github-Pages-%EC%BB%A4%EC%8A%A4%ED%85%80-%EB%8F%84%EB%A9%94%EC%9D%B8-%EC%84%A4%EC%A0%95-%EB%B0%8F-%EC%82%BD%EC%A7%88%EA%B8%B0



## next/image 사용 문제

next/image는 다음과 같은 장점이 있다.



- 더 적은 용량으로 이미지 최적화

- 레이지 로딩 기능 내장



따라서 next js 자체적으로 img가 아닌 next/image에서 가져온 Image 태그를 사용할 것을 권장하고 있다.

(실제로 매번 build를 할 때마다 경고문이 뜬다)



나 역시 next/image를 사용해보려고 시도를 하다 아주 큰 문제점(?)을 발견했는데,

`next/image는 이미지 파일을 항상 고정된 크기로 미리 설정해야 한다` 는 것이다.



Image 태그 안에는 **반드시** 1. src / 2. width / 3. height 가 들어가야 하는데, 문제는 이 값이 <u>Pixel 형식</u>이어야 한다.

이를 조금이나마 해결할 수 있는 방법이 2가지가 있는데, **layout = "fill"** 을 사용하거나 **layout = "response" 와 width = {가로 비율}, height = {세로 비율}** 을 사용하는 것이다.

layout="fill"은 무조건 relative 속성 + height, width 가 부모 요소 크기의 100%로 고정되어 버리는데(HTML 태그 안 style 속성으로 지정되기 때문에 CSS 파일이 적용 우선순위에서 밀려나서 기능을 상실한다) 부모 요소인 div를 동적으로 조정하여 자식 img 태그의 이미지 크기를 조정하는 것은 굉장히 번거롭거나 경우에 따라서 불가능하다.

layout="response"는 가로세로 비율을 고정시키기 때문에 가로세로 비율이 다른 이미지들을 함께 사용할 수 없어진다.



고정된 크기의 사진을 올리거나 특정 포맷 안에서 사진을 올린다면 괜찮겠지만, 블로그는 크기가 다양한 사진을 올리기 때문에 next/image를 적용하지 못했다.

---

대신 차선책으로 `경고문을 제거`하는 방식을 사용했는데,

`.eslintrc.json`에서 아래의 코드를 추가하면 build를 할 때 더이상 경고문이 뜨지 않는다.

```json
"rules": {
    // "next/image"로 인한 경고 제거
    "@next/next/no-img-element": "off"
  }
```





## 남은 개선 사항

- 서버 개발 및 연결