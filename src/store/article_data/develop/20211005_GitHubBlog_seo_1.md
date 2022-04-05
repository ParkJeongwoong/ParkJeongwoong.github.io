# [GitHub Blog 개발기] 구글 검색 등록 & SEO 구현(1)

> [요약]
>
> - Google Search Console
>
> - React - SPA
>   - SPA는 HTML 문서 한 장
> - CSR - SSR
>   - Helmet
>   - Next.js



## Google Search Console

Google Search Console에 내 사이트를 등록해서 검색 결과에 노출하는 방법은 다음과 같다.



1. [구글 웹마스터 도구](https://search.google.com/search-console/about) 에 접속 -> (로그인) -> `URL 접두어` 부분에 블로그 주소 입력 (https://parkjeongwoong.github.io/)
2. 소유권 확인을 위한 HTML 파일을 다운로드 후 GitHub Blog Repository의 Root 폴더에 업로드
   - <u>이 때 gh-pages를 통해 랜더링한다면 gh-pages 브랜치에 업로드 되어야 한다.</u>
3. 소유권이 확인되면 `sitemap.xml` 파일과 `robots.txt` 파일을 만든다.
   - 이 두 파일 역시 실제로 랜더링하는 브랜치의 Root 폴더에 있어야 한다.

[**robots.txt**]

```
User-agent: *
Allow: /

Sitemap: https://parkjeongwoong.github.io/sitemap.xml
```

[**sitemap.xml**]

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

<!-- 메뉴 -->
    <url>
        <loc>https://parkjeongwoong.github.io/</loc>
        <changefreq>monthly</changefreq>
    </url>
    <url>
        <loc>https://parkjeongwoong.github.io/profile</loc>
        <changefreq>monthly</changefreq>
    </url>
    <url>
        <loc>https://parkjeongwoong.github.io/articles</loc>
        <changefreq>weekly</changefreq>
    </url>
    <url>
        <loc>https://parkjeongwoong.github.io/archives</loc>
        <changefreq>monthly</changefreq>
    </url>

<!-- Develop -->
    <url>
        <loc>https://parkjeongwoong.github.io/articles/Develop/1</loc>
        <changefreq>weekly</changefreq>
    </url>
    <url>
        <loc>https://parkjeongwoong.github.io/articles/Develop/2</loc>
        <changefreq>weekly</changefreq>
    </url>
    <url>
        <loc>https://parkjeongwoong.github.io/articles/Develop/3</loc>
        <changefreq>weekly</changefreq>
    </url>
    <url>
        <loc>https://parkjeongwoong.github.io/articles/Develop/4</loc>
        <changefreq>weekly</changefreq>
    </url>

<!-- CS -->
    <url>
        <loc>https://parkjeongwoong.github.io/articles/CS/0</loc>
        <changefreq>weekly</changefreq>
    </url>
    <url>
        <loc>https://parkjeongwoong.github.io/articles/CS/1</loc>
        <changefreq>weekly</changefreq>
    </url>

</urlset>
```

4. [구글 웹마스터 도구](https://search.google.com/search-console/about) 의 [**색인**] - [**Sitemaps**] 에서 [**새 사이트맵 추가**]에 `sitemap.xml`을 적고 제출한다.
   - 만약 Sitemap을 읽지 못하는 문제가 발생한다면 **.xml** 을 제외한 `sitemap` 만 입력하여 제출하면 해결될 때가 있다.
5. **npm run build** 를 통해 매번 build를 할 때마다 [소유권 인증 html 파일], [robots.txt], [sitemap.xml] 이 초기화되는 것을 방지하기 위해 `package.json` 의 `scripts-predeploy` 부분에 추가적인 script를 작성함으로써 문제를 해결했다.

```shell
npm run build && cp ./google74bbd1bb0c2ee4ad.html ./build/google74bbd1bb0c2ee4ad.html && cp ./robots.txt ./build/robots.txt && cp ./sitemap.xml ./build/sitemap.xml
```



이렇게 하면 Google 검색 결과에 블로그가 노출된다.

반영에는 시간이 꽤 걸리니 천천히 기다려보자.



> 결과물 : [검색결과](https://www.google.com/search?q=welcome+to+jw%27s+blog)



## SEO (Search Engine Optimization)

위와 같이 등록을 마치고 나면 url (https://parkjeongwoong.github.io/)을 통해 내 블로그가 검색됨을 알 수 있다.

그런데 이상하게 'Home'만 표시가 된다.



**이는 React와 같은 Single Page Application (SPA)는 Index.html 이라는 하나의 html 파일에서 컴포넌트의 렌더링만 바꿔가며 화면을 바꾸기 때문.**

=> `즉, title이나 content와 같이 head 부분에 들어가는 meta 정보가 하나 뿐이다.`



이를 해결하기 위해 **React-Helmet** 을 사용할 수도 있지만 근본적으로는 Server-Side-Rendering을 구현해야 한다.



직접 구현할 수도 있지만,

React의 경우 **Next.js** 를 사용하여 비교적 간단하게 SSR이 구현 가능하기 때문에 Next.js 를 활용한 SSR을 구현하기로 결정했다.