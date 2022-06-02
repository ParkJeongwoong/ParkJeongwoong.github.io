# [GitHub Blog 개발기] 개발일지

블로그를 운영하기로 결정하고서 어떤 식으로 만들어야 할 지 고민을 많이 했다.

티스토리나 Velog를 사용할 지, 아니면 Jekyll을 이용한 Github 블로그를 만들어야 할 지..

고민 끝에 직접 블로그를 만들어보기로 결심했고, **Jekyll 없이 Github 블로그를 만들기로 결정**했다.



블로그는 다음과 같은 형태로 만들 계획이다.

- **No Template**
  - Jekyll Theme 없이 직접 구현 (완)
  - 게시글 등록 자동화 (완)
- **React**
  - Redux 없이 Context API와 Hook을 이용하여 전역 상태 관리 (완)
  - Next.js 전환 (완)
- **Sping Boot**
  - 프론트엔드(Github / Next.js) - 백엔드(EC2, RDS / Spring Boot, MariaDB) 연결 (완)
  - Data는 Github이 아니라 AWS에 보관할 (→서버 업데이트 항목)
  - 게시글 등록 자동화와 연결 (→서버 업데이트 항목)
- **Markdown 기반**
  - Articles에 작성되는 게시글들은 마크다운 파일을 ReactMarkdown을 이용하여 마크다운 형식으로 출력 (완)
  - TOC 구현 (완)
- **서버 업데이트**
  - 업로드 기능 완성 (이미지 저장까지)
  - 글작성 화면 완성
  - Redis 활용
  - Spring Batch 활용
  - 데이터 통계 화면
  - Spring Cloud 공부
  - 서버 구조도 정리해서 만들기
  - 글검색 검색 구현
