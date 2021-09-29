# [GitHub Blog 개발기] Markdown 적용 및 Require 함수

자주 업데이트 되는 Articles 항목은 Markdown으로 작성하기로 결정했다.



Local에 있는 Markdown 파일을 화면에 출력하는 방법은 다음과 같다.



## 1. Markdown 파일을 <u>가져오기</u>

> [요약]
>
> - JavaScript의 Require 함수를 이용해서 Local에 있는 Markdown 파일의 내용을 저장



**Local에 있는 Markdown 파일을 가져오기 위해서 JavaScript의 Require 함수를 사용했다.**



### JavaScript `Require`

**Require()** : <u>모듈을 가져오는 함수</u> (정확히는 Modules의 exports를 가져오는 함수)

=> 이 Require()를 이용해서 `Markdown 파일의 Text 정보`를 가져올 수 있다.



#### 순서 1

`require()`를 통해 content data에 담겨있는 path 정보를 이용해서 파일의 정보를 가져온다.

```javascript
const readmePath = require(`store/article_data/${path.split("/")[2]}/${
      path.split("/")[3]
    }`);
```



#### 순서 2

`fetch() - then() - text()` 과정을 통해 text 정보를 읽는다.

```javascript
fetch(readmePath.default)
    .then(r => r.text())
    .then(text => {
      setMarkdown(text);
    });
```



#### Require란?

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





## 2. Markdown 형식으로 <u>출력하기</u>

> [요약]
>
> - react-markdown 을 사용
> - markdown -> html 으로 변환된 코드에 대한 styling
> - JavaScript를 변화시켜 줌으로써 추가 styling



### react-markdown

#### 설치

먼저 React에서Markdown 형식으로 출력을 시켜줄 `react-markdown`을 설치 (공식문서 : https://www.npmjs.com/package/react-markdown)

```bash
npm install react-markdown
```



#### 사용

(위에서 setMarkdown(text)으로 저장한 markdown 변수를 markdown으로 출력하는 방법)

**`<ReactMarkdown> 태그를 Return 함으로써 출력`**

```react
<ReactMarkdown children={markdown} />
```



이렇게만 해도 어느정도 Markdown 형태가 잡힌다.



**하지만! <u>이렇게 두면 엉망진창의 예쁘지 않은 글이 된다</u>**



그럼 입맛대로 꾸미는 법을 알아보자!



### remark-gfm

#### 설치

공식문서에 소개된 것처럼 `remark-gfm`을 설치하면 link, table, checklist 등의 형식을 표현할 수 있다.

```bash
npm install remark-gfm
```



#### 사용

ReactMarkdown 태그 안에 Plugin 형태로 추가하면 끝!

```react
<ReactMarkdown remarkPlugins={[remarkGfm]} children={markdown} />



### 커스터마이즈 (react-syntax-highlighter)

강조 표시, 인용 표시, 코드 인용을 위해서는 추가적인 작업이 필요하다.

#### 설치

그 중 코드 인용은 `react-syntax-highlighter`를 통해 표시가 가능하다.

​```bash
npm install react-syntax-highlighter
```



#### 사용

1. 먼저 components 속성을 ReactMardown 태그 안에 추가한다.
2. 수정하고 싶은 태그를 적고 수정된 결과물을 return에 넣는다.

```react
<ReactMarkdown remarkPlugins={[remarkGfm]} children={markdown}
    components={
        %%%수정할 태그%%%({ node, inline, className, children, ...props }) { return %%%수정된 태그%%% }
    }
    />
```

>  **! github 페이지에선 중괄호( `{}` )를 중첩해서 사용하면 에러가 나기 때문에 중괄호를 하나만 사용했다.**
>
> **실제로는 component={ } 에서 중괄호를 두 번 작성해야 한다.**
>
> ( 소스코드 참고 : https://github.com/ParkJeongwoong/ParkJeongwoong.github.io/blob/master/src/components/Markdown/MarkdownRenderer.js )



위 components 속성은 다음과 같이 작동한다.

1. ReactMarkdown이 html화 시킨 코드를 하나씩 읽는다.
2. components 안에 속하는 태그를 찾는다.
3. **조건문**을 통해 커스텀을 하는 조건을 선택한다.
4. 조건을 만족했을 때 **수정된 태그** 를 반환한다.



#### 예시

- `인용 표시`

인용문은 <blockquote> 형태로 출력되기 때문에 인용문을 바꾸고 싶다면 다음과 같이 적으면 된다.

```react
components={
            // 인용문
            blockquote({ node, children, ...props }) {
                return (
                  <div
                    style={{
                      background: "#f0f0f0",
                      padding: "1px 15px",
                      borderRadius: "10px",
                    }}
                    {...props}
                  >
                    {children}
                  </div>
                );
              }
           }
```

>  **! github 페이지에선 중괄호( `{}` )를 중첩해서 사용하면 에러가 나기 때문에 중괄호를 하나만 사용했다.**
>
> **실제로는 component={ } 에서 중괄호를 두 번 작성해야 한다.**
>
> ( 소스코드 참고 : https://github.com/ParkJeongwoong/ParkJeongwoong.github.io/blob/master/src/components/Markdown/MarkdownRenderer.js )



- `강조 표시` 과 `코드 인용`

강조 표시와 코드 인용은 모두 <code> 형태로 출력된다.

이 때 차이점은 **강조문**은 `inline 속성`을 가지고 있으며 (줄바꿈이 안 일어난다)

**코드 인용**은 `block 속성`을 가지고 있다는 것이다. (줄바꿈이 일어난다)



그리고 코드 인용에서 `match 속성`은 사용 언어를 뜻한다. (언어가 설정되지 않은 코드 인용 구문은 match 값이 false가 된다)



따라서 강조 표시와 코드 인용은 다음과 같이 적으면 된다.

```react
components={
            code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return inline ? (
                  // 강조
                  <code
                    style={{
                      background: "var(--highlight-color)",
                      padding: "2px",
                    }}
                    {...props}
                  >
                    {children}
                  </code>
                ) : match ? (
                  // 코드
                  // 언어가 선택됨
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={nord}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  // 언어가 선택되지 않음
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={nord}
                    language="textile"
                    PreTag="div"
                    {...props}
                  />
                );
              }
           }
```

>  **! github 페이지에선 중괄호( `{}` )를 중첩해서 사용하면 에러가 나기 때문에 중괄호를 하나만 사용했다.**
>
> **실제로는 component={ } 에서 중괄호를 두 번 작성해야 한다.**
>
> ( 소스코드 참고 : https://github.com/ParkJeongwoong/ParkJeongwoong.github.io/blob/master/src/components/Markdown/MarkdownRenderer.js )



### react-markdown 사용 시 `공백 줄` 문제

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



### react-markdown 사용 시 <u>`밑줄`</u> 문제

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



