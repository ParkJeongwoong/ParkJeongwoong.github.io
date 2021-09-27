# [GitHub Blog 개발기] Markdown 적용 및 Require 사용(20210826)

블로그에 올리는 글을 Markdown 형식으로 업로드 하면 정리도 쉽고

다른 곳에서 활용하기도 좋을 거라고 생각하여

Articles 항목을 Markdown으로 작성하기로 했다. 



아래의 방식대로 따라하면 Local에 있는 Markdown 파일을 화면에 띄울 수 있다!



## react-markdown 사용 시 `공백 줄` 문제

- 현상 : react-markdown에서는 공백인 줄이 표현 X



- 해결

```javascript
markdown.replace(/\n\s\n\s/gi, "\n\n &nbsp;")
```

마크다운 파일의 텍스트를 위와 같이 바꿔 줌으로 써 해결



마크다운 파일에서 `기본 줄바꿈`은 `엔터 두 번`

`공백이 있는 줄`은 `엔터 네 번`으로 변환



엔터 뒤에는 공백이 하나 있기 때문에 `\n\s\n\s`를 정규표현식으로 찾아서 변환해야 한다.



## react-markdown 사용 시 <u>`밑줄`</u> 문제

- 현상 : react-markdown에서는 밑줄이 표현 X



- 해결

`먼저 em 태그의 css를 밑줄로 변경`

```javascript
markdown
    .replace(/\n\s\n\s/gi, "\n\n &nbsp;")
    .replace(/\*\*/gi, "@$_%!\^")
    .replace(/\**\*/gi, "/")
    .replace(/@\$_%!\^/gi, "**")
    .replace(/<\/?u>/gi, "*")
```

1. 우선 <u>강조 표시</u>를 `사용하지 않는 특수문자 묶음`으로 변환 (위 세 번째 줄(@$_%!\^)에서 ^앞의 \는 자동 변환을 막기 위해 추가 ; 이게 없으면 파싱 중 자동으로 **로 변환됨)
2. <u>이탤릭체</u>를 `슬래쉬`로 변환
3. `강조 표시를 다시 복구`
4. <u>언더 바 태그</u>를 `이탤릭체`로 변환 => <u>**변환된 이탤릭체는 밑줄로 표시**</u>

