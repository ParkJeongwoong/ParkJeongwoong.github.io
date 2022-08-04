# GitHub 개인 블로그

[할 일]

- 업로드 기능 완성 (이미지 저장까지)
- 글작성 화면 완성
- Redis 활용
- Spring Batch 활용
- 데이터 통계 화면
- Spring Cloud 공부
- 서버 구조도 정리해서 만들기
- 글검색 검색 구현
- Index 구현 (완료)
- Webpack 공부



---

[계획]

- 업로드 계횐
1. WS는 이미지를 호출할 때 WAS에 이미지를 요청하는 방식
2. WAS는 이미지를 응답하는 API 준비
3. 업로드 시 이미지 주소에 WAS의 이미지 반환 URI를 사용



---

[정보]

- MarkDown Rendering
  - https://www.npmjs.com/package/react-markdown
  - https://velog.io/@alskt0419/React-markdown-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%8B%9C%EC%BC%9C%EB%B3%B4%EA%B8%B0
  - https://github.com/remarkjs/react-markdown#node-types



---

[업로드]

- Articles
  - 글 작성
    1. Markdown 파일 작성
    2. article_data의 해당 카테고리 js 파일에 등록
  - 새로운 카테고리 등록
    1. article_data js 파일에 등록
    2. 동명의 디렉토리(`/article_data`)에 해당 카테고리 경로를 생성
- Archives
  1. archive_data js 파일에 등록
     - 모듈화 필요..?



---

주소 : https://parkjeongwoong.github.io/

배포 : `npm run deploy`

개발 : `npm run dev`
