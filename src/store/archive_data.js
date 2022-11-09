const archives = [
  // Github Blog
  {
    id: 0,
    title: "Github Blog",
    details: [
      {
        id: 0,
        date: "2021-08-24",
        images: ["/archives/blog/1-1.png", "/archives/blog/1-2.png"],
        content: "블로그 개발 시작\n사용 기술: React js",
      },
      {
        id: 1,
        date: "2021-08-25",
        images: [
          "/archives/blog/2-1.png",
          "/archives/blog/2-2.png",
          "/archives/blog/2-3.png",
        ],
        content: "Home, Archives 정리 및 Footer 위치 조정",
      },
      {
        id: 2,
        date: "2021-08-25",
        images: [
          "/archives/blog/3-1.png",
          "/archives/blog/3-2.png",
          "/archives/blog/3-3.png",
          "/archives/blog/3-4.png",
        ],
        content:
          "Articles 구현\nLocal의 Markdown File을 불러와서 출력하는 방식 사용",
      },
      {
        id: 3,
        date: "2021-08-30",
        images: [],
        content:
          "GitHub 배포 시 url 접근이 안 되는 문제 해결\n참조: https://iamsjy17.github.io/react/2018/11/04/githubpage-SPA.html\nhttps://github.com/rafgraph/spa-github-pages",
      },
      {
        id: 4,
        date: "2021-09-20",
        images: [
          "/archives/blog/5-1.png",
          "/archives/blog/5-2.png",
          "/archives/blog/5-3.png",
          "/archives/blog/5-4.png",
        ],
        content: "디자인 정리 및 반응형 웹 구현",
      },
      {
        id: 5,
        date: "2021-09-29",
        images: ["/archives/blog/6-1.png"],
        content: "로고 제작",
      },
      {
        id: 6,
        date: "2021-10-04",
        images: ["/archives/blog/7-1.png"],
        content: "Google Search Console 등록",
      },
      {
        id: 7,
        date: "2021-10-10",
        images: ["/archives/blog/8-1.jpg"],
        content: "Next.js 전환 완료",
      },
      {
        id: 8,
        date: "2021-12-11",
        images: [
          "/archives/blog/9-1.jpg",
          "/archives/blog/9-2.jpg",
          "/archives/blog/9-3.jpg",
          "/archives/blog/9-4.jpg",
        ],
        content:
          "Header 및 Articles 페이지 Layout 수정 (뒤의 사진 2장이 구버전)",
      },
      {
        id: 9,
        date: "2021-12-12",
        images: ["/archives/blog/10-1.jpg"],
        content: "폰트 변경",
      },
      {
        id: 10,
        date: "2021-12-13",
        images: ["/archives/blog/11-1.jpg", "/archives/blog/11-2.jpg"],
        content: "모바일 버전 카테고리 메뉴 토글 기능 추가",
      },
      {
        id: 11,
        date: "2022-02-08",
        images: ["/archives/blog/12-1.jpg"],
        content: "EC2 Web Application Server와 연결 성공",
      },
      {
        id: 12,
        date: "2022-02-12",
        images: ["/archives/blog/13-1.jpg"],
        content: "Articles의 카테고리 안에 서브 카테고리 추가",
      },
      {
        id: 13,
        date: "2022-02-14",
        images: ["/archives/blog/14-1.jpg"],
        content:
          "페이지네이션 기능 추가\n페이지네이션 기능 추가 후 검색 기능의 필요성을 느낌 (더이상 Ctrl+f를 통한 글 검색이 불가능)",
      },
      {
        id: 14,
        date: "2022-04-04",
        images: ["/archives/blog/15-1.jpg", "/archives/blog/15-2.jpg"],
        content: "인덱스 기능 추가 (실시간 위치 표시 / 해당 위치로 이동)",
      },
      {
        id: 15,
        date: "2022-10-17",
        images: [
          "/archives/blog/16-1.jpg",
          "/archives/blog/16-2.jpg",
          "/archives/blog/16-3.jpg",
          "/archives/blog/16-4.jpg",
        ],
        content: "검색 기능 추가\n모바일 화면 개선",
      },
      {
        id: 16,
        date: "2022-10-18",
        images: ["/archives/blog/17-1.jpg", "/archives/blog/16-2.jpg"],
        content:
          "검색 결과 개선\n기존의 날짜 순 정렬이 아닌 더 연관성 있는 결과를 상단으로 이동",
      },
    ],
  },

  // BITZ
  {
    id: 1,
    title: "BITZ",
    details: [
      {
        id: 0,
        date: "2021-07.05 ~ 2021-08-16",
        images: ["/archives/bitz/0.jpg", "/archives/bitz/1.jpg"],
        content: "농구 픽업 게임 플랫폼 BITZ 제작",
      },
    ],
  },

  // // DAOU Internship
  // {
  //   id: 2,
  //   title: "Internship",
  //   details: [
  //     {
  //       id: 0,
  //       date: "2021-08.17 ~ 2021-09-10",
  //       images: [],
  //       content: "다우기술 금융개발 직무 (키움증권) 인턴\n",
  //     },
  //   ],
  // },
];

export default archives;
