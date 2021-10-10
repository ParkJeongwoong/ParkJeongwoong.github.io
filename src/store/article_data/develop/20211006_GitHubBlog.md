# [GitHub Blog 개발기] SEO 구현(2) - Next.js app

Next.js를 이용한 SSR 환경 구축 방법

---

[참조]

https://nextjs.org/



## 앞서 알아보기

> `Next.js는 React.js의 Framework`로 **React.js app에서 SSR 구현을 편리하게 가능하게 만들어 주는 도구이다.** 
>
> 즉, Next.js app은 React.js app을 대체한다.



Next.js의 존재를 알게 된 후 계속 헷갈렸던 개념은 <u>Server Side Rendering에서 Server가 무엇이냐는 것</u>이었다.

처음에는 Backend 코드가 돌아가는 Web Application Server라고 착각하고 기존의 React.js app과 Next.js로 만든 app을 분리해야 한다고 생각했었다.



하지만 알고 보니 SSR에서의 Server는 Frontend Server, 즉 Web Server를 뜻하는 것이었다.

**CSR**의 경우,

Client는 최초 접속 시 Frontend Server(Github)와 통신하여 HTML과 함께 화면을 그리는 코드를 받아오고, 이후에는 Backend Server와 통신하며 Data만 받아온다.

반면 **SSR**의 경우,

Client는 지속적으로 Frontend Server(Github)와 통신하며 HTML 파일을 받아오고, 그 과정에서 필요한 Data는 Frontend Server가 Backend Server에 요청하여 채워 넣는다.



**따라서 Next.js app이 구현하는 SSR에서의 Server는 Frontend Server를 뜻하고,**

<u>React.js app을 그대로 두고 Next.js app을 만드는 것이 아니라,</u>

1) **`React.js app을 Next.js로 전환`시키거나** 

2) **`React.js를 대체하는 Next.js app`을 새로 만들어야 한다.**



이미 어느정도 React app을 만들어 놓은 상태이므로 React app에서 Next app으로 전환하는 방법을 사용하기로 했다.

(실패한다면 수고롭지만 새로 Next app을 만들 생각이다.)

---

[참조]

https://lemontia.tistory.com/938



## 새로운 Next.js App 생성

```bash
npx create-next-app blog-ssr --use-npm
```

- Next.js Project 생성

```bash
npm run dev
```

- Next.js Project 개발 서버 실행



기존에 있는 React.js App을 Next.js로 전환하는 방법을 선택했으므로 이 글에는 처음부터 새로 만드는 자세한 방법을 기술하지 않았습니다.



- Link 태그는 내부에 a 태그가 있어야 동작한다.

---

[참조]

[[공식 튜토리얼](https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website)

[공식 튜토리얼 (번역)](https://brunch.co.kr/@hee072794/81)

[Velog Next.js 글](https://velog.io/@ansrjsdn/series/Next)



## 기존 React.js App 전환

### 1) Script와 Dependency 업데이트

- `react-scripts` 패키지 **제거** 후 `next` 패키지 **설치**
  - 이제 script를 **react-scripts** 가 아니라 **next** 로 읽는다.

```bash
npm uninstall --save react-scripts
npm install --save next
```



- `react-router-dom` 패키지 **제거**
  - Next js는 **React Router** 를 이용해 Page를 이동하지 않는다.

```bash
npm uninstall --save react-router-dom
```



- `package.json` 에서 **react-scripts** 를 사용하는 구문을 **next** 로 변경

```json
...
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
...
```



- `.gitignore`에 **.next** 추가



### 2) Route 와 Link

Next.js는 `pages` 라는 개념을 통해 페이지를 이동한다. ([참고](https://nextjs.org/docs/basic-features/pages))

- `pages` 라는 폴더를 만든다.
- `index.js` 라는 파일을 pages 폴더 안에 생성한다.
- **Route (본 블로그의 경우 Views) Components**를 pages 폴더에 적절히 변환하여 넣는다.
- 동적 URL의 경우 **:** 대신 `[]` 를 사용해서 구현한다.



- `Link` 태그를 이용하여 페이지 간 이동을 구현한다.

```javascript
import Link from 'next/link'

...
<Link href="/">
  <a>Home</a>
</Link>
...
```



### 3) Style

Next.js는 `CSS Modules` 를 통해 CSS를 관리한다. ([참고](https://nextjs.org/docs/basic-features/built-in-css-support))

- pages 폴더 내에 `_app.js` 파일을 만들어 전역 Styling을 할 수 있다.

  ```javascript
  import '../styles/globals.css'
  
  export default function App({ Component, pageProps }) {
     return <Component className="App" {...pageProps} />
  }
  ```

- `[name].module.css`를 통해 Component용 CSS 파일을 만들 수 있다.

  ```javascript
  import styles from './Button.module.css'
  
  export function Button() {
    return (
      <button
        type="button"
        // Note how the "error" class is accessed as a property on the imported
        // `styles` object.
        className={styles.error}
      >
        Destroy
      </button>
    )
  }
  ```

  

### 4) React 파일 정리

필요없는 **src** 폴더의 React 파일을 정리한다.

- `App.js` , `App.test.js` , `index.js` , `index.css` , `serviceWorker.js`
  - 이 파일들이 하던 역할은 Next.js 프레임워크가 대신 하게 될 예정이다.



### 5) 이미지 출력

- **next/image**에서 제공하는 `Image` Component가 **img 태그를 대체**

  ```javascript
  import Image from 'next/image'
  import profilePic from '../public/me.png'
  
  function Home() {
    return (
      <>
        <h1>My Homepage</h1>
        <Image src={profilePic} alt="Picture of the author" />
        <p>Welcome to my homepage!</p>
      </>
    )
  }
  
  export default Home
  ```



### 6) SEO를 위한 Head 설정

- react-helmet에서 제공하는 meta data 설정 기능을 **next/head** 의 `Head` 로 대체

```javascript
// src/components/seo.js

import Head from 'next/head'

export default function SEO({ description, title, siteTitle }) {
  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Head>
  )
}
```

이 컴포넌트를 각 page에 사용하여 SEO를 위한 meta data 설정



## 부가 정보

- `window` , `localStorage` , `navigator` 같은 **Web API**들은 CSR에서 사용 가능 => Next.js는 Pre-Rendering을 하기 때문에 바로 useEffect를 사용하는 방법 등을 활용해서 Client 측에서만 위 기능이 사용되도록 설정해야 함
- 환경변수 - `.env` 변수를 지원하지만 접두사로 쓰인 `REACT_APP_` 를 모두 `NEXT_PUBLIC_` 로 바꿔야 함



---

[참조]

https://nextjs.org/docs/migrating/from-create-react-app

https://nextjs.org/docs/migrating/from-react-router

https://blog.logrocket.com/how-to-adopt-next-js-into-your-existing-application/