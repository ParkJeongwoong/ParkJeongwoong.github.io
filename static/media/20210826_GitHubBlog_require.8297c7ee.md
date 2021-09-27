# [GitHub Blog 개발기] Markdown 적용 및 Require 사용(20210826)

블로그에 올리는 글을 Markdown 형식으로 업로드 하면 정리도 쉽고

다른 곳에서 활용하기도 좋을 거라고 생각하여

Articles 항목을 Markdown으로 작성하기로 했다. 



아래의 방식대로 따라하면 Local에 있는 Markdown 파일을 화면에 띄울 수 있다!



## react-markdown 사용 시 `공백 줄` 문제

- 현상 : react-markdown에서는 공백인 줄이 표현 X



- 해결

```javascript
markdown.replace(/\n\s\n\s/gi, "\n\n&nbsp;\n\n")
```

마크다운 파일의 텍스트를 위와 같이 바꿔 줌으로 써 해결

**이 때! 정확한 원인은 모르겠지만 Local에선 `\n\n &nbsp;`로도 줄바꿈이 가능하지만 Github에 업로드 하면 줄바꿈이 되지 않는 문제 발생**

**인코딩 상의 문제인지 \n을 두 번 해줘야 줄바꿈이 됨 => `\n\n&nbsp;\n\n`로 바꿔야 함**



마크다운 파일에서 `기본 줄바꿈`은 `엔터 두 번`

`공백이 있는 줄`은 `엔터 네 번`으로 변환



엔터 뒤에는 공백이 하나 있기 때문에 `\n\s\n\s`를 정규표현식으로 찾아서 변환해야 한다.



## react-markdown 사용 시 <u>`밑줄`</u> 문제

- 현상 : react-markdown에서는 밑줄이 표현 X



- 해결

`먼저 em 태그의 css를 밑줄로 변경`

```javascript
markdown
    .replace(/\n\s\n\s/gi, "\n\n&nbsp;\n\n")
    .replace(/\*\*/gi, "@$_%!\^")
    .replace(/\**\*/gi, "/")
    .replace(/@\$_%!\^/gi, "**")
    .replace(/<\/?u>/gi, "*")
```

1. 우선 <u>강조 표시</u>를 `사용하지 않는 특수문자 묶음`으로 변환 (위 세 번째 줄(@$_%!\^)에서 ^앞의 \는 자동 변환을 막기 위해 추가 ; 이게 없으면 파싱 중 자동으로 **로 변환됨)
2. <u>이탤릭체</u>를 `슬래쉬`로 변환
3. `강조 표시를 다시 복구`
4. <u>언더 바 태그</u>를 `이탤릭체`로 변환 => <u>**변환된 이탤릭체는 밑줄로 표시**</u>



## JavaScript `Require`

**Require()** : <u>모듈을 가져오는 함수</u> (정확히는 Modules의 exports를 가져오는 함수)

=> 이 Require()를 이용해서 `Markdown 파일의 Text 정보`를 가져올 수 있다.



### 순서 1

`require()`를 통해 content data에 담겨있는 path 정보를 이용해서 파일의 정보를 가져온다.

```javascript
const readmePath = require(`store/article_data/${path.split("/")[2]}/${
      path.split("/")[3]
    }`);
```



### 순서 2

`fetch() - then() - text()` 과정을 통해 text 정보를 추출한다.

```javascript
fetch(readmePath.default)
    .then(r => r.text())
    .then(text => {
      setMarkdown(text);
    });
```



### Require란?

만약 Javascript 파일을 읽는다면 exports 정보들을, **.default** 를 이용하면 default 값을, **.변수** 를 이용하면 해당 파일에서 exports 된 변수 값을 읽을 수 있다.



Import와 상당히 유사하다.

그렇다면 차이점은 무엇일까?

- require()
  - node.js문
  - 어디서나 호출 가능
  - 파일 전체를 사용



- import()
  - ES6문
  - 시작 부분에서만 호출 가능
  - 필요한 부분만 선택 가능 => <u>성능이 우수하고 메모리를 절약</u>



=> 그럼 import가 성능이 더 좋은데 왜 require를 썼는가?

**import는 최상단에서만 호출 가능하여 조건문에 따라 호출이 불가능 하기 때문**