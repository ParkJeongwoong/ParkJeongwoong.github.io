(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9917:function(e,t,n){"use strict";var r=n(3848),o=n(3115);var a=d(n(7294)),i=d(n(639)),c=n(8997),s=n(5809),l=n(7426);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}var g=new Set;var p=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,a=new URL("".concat(t).concat(D(n))),i=a.searchParams;i.set("auto",i.get("auto")||"format"),i.set("fit",i.get("fit")||"max"),i.set("w",i.get("w")||r.toString()),o&&i.set("q",o.toString());return a.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,a=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(D(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(D(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function v(e){return void 0!==e.default}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://noop/",loader:"imgix"}||s.imageConfigDefault,m=h.deviceSizes,_=h.imageSizes,b=h.loader,y=h.path,w=(h.domains,[].concat(o(m),o(_)));function j(e){var t=e.src,n=e.unoptimized,r=e.layout,a=e.width,i=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,a=/(^|\s)(1?\d?\d)vw/g,i=[];r=a.exec(n);r)i.push(parseInt(r[2]));if(i.length){var c=.01*Math.min.apply(Math,i);return{widths:w.filter((function(e){return e>=m[0]*c})),kind:"w"}}return{widths:w,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:m,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return w.find((function(t){return t>=e}))||w[w.length-1]})))),kind:"x"}}(a,r,c),u=l.widths,d=l.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,n){return"".concat(s({src:t,quality:i,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:s({src:t,quality:i,width:u[f]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function E(e){var t=p.get(b);if(t)return t(f({root:y},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(b))}function D(e){return"/"===e[0]?e.slice(1):e}m.sort((function(e,t){return e-t})),w.sort((function(e,t){return e-t}))},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(1063),c=n(4651),s=n(7426);var l={};function u(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),d=a.default.useMemo((function(){var t=i.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?i.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),f=d.href,g=d.as,p=e.children,v=e.replace,h=e.shallow,m=e.scroll,_=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var b=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,y=s.useIntersection({rootMargin:"200px"}),w=r(y,2),j=w[0],O=w[1],E=a.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);a.default.useEffect((function(){var e=O&&n&&i.isLocalURL(f),t="undefined"!==typeof _?_:o&&o.locale,r=l[f+"%"+g+(t?"%"+t:"")];e&&!r&&u(o,f,g,{locale:t})}),[g,f,O,_,n,o]);var D={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:c}))}(e,o,f,g,v,h,m,_)},onMouseEnter:function(e){i.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,f,g,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof _?_:o&&o.locale,H=o&&o.isLocaleDomain&&i.getDomainLocale(g,S,o&&o.locales,o&&o.domainLocales);D.href=H||i.addBasePath(i.addLocale(g,S,o&&o.defaultLocale))}return a.default.cloneElement(t,D)};t.default=d},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=o.useRef(),l=o.useState(!1),u=r(l,2),d=u[0],f=u[1],g=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return o.useEffect((function(){if(!i&&!d){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),[g,d]};var o=n(7294),a=n(3447),i="undefined"!==typeof IntersectionObserver;var c=new Map},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},1553:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(2809),o=n(7294),a=n(1664),i=(n(5675),n(6379)),c=n.n(i),s=n(5893);var l=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1];return(0,s.jsxs)("div",{className:c().Header,children:[(0,s.jsx)("div",{className:c().Header__styling,children:(0,s.jsx)("img",{src:"/myLogo_transp.png",alt:"logo",onClick:function(e){if(!t){var r=function(){o.className="".concat(c().logo)};n(!0);var o=e.target,a=parseInt(1e3*Math.random()%10)%3;a?(1===a?(o.className="".concat(c().slideOutLeft),o.addEventListener("animationend",r)):(o.className="".concat(c().hinge),o.addEventListener("animationend",r)),setTimeout((function(){o.className="".concat(c().zoomInDown),o.addEventListener("animationend",r)}),900)):(o.className="".concat(c().bounce),o.addEventListener("animationend",r)),n(!1)}}})}),(0,s.jsx)(a.default,{href:"/",children:(0,s.jsx)("a",{className:c().Header__word,children:"Home"})}),(0,s.jsx)(a.default,{href:"/profile",children:(0,s.jsx)("a",{className:c().Header__word,children:"Profile"})}),(0,s.jsx)(a.default,{href:"/articles",children:(0,s.jsx)("a",{className:c().Header__word,children:"Articles"})}),(0,s.jsx)(a.default,{href:"/archives",children:(0,s.jsx)("a",{className:c().Header__word,children:"Archives"})}),(0,s.jsx)("div",{className:c().Header__styling_Reverse})]})},u=n(3117),d=n.n(u);var f=function(){return(0,s.jsxs)("div",{className:d().Footer,children:[(0,s.jsxs)("div",{className:d().Footer__github,children:["Github : ",(0,s.jsx)("a",{href:"https://github.com/ParkJeongwoong",children:"ParkJeongwoong"})]}),(0,s.jsxs)("div",{className:d().Footer__email,children:["Contact : ",(0,s.jsx)("span",{onClick:function(){var e=document.createElement("textarea");e.value="dvlprjw@gmail.com",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),alert("Copied!")},children:"dvlprjw@gmail.com"})]})]})},g=n(5502);n(162);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=e.Component,n=e.pageProps;return(0,s.jsx)(g.X,{children:(0,s.jsxs)("div",{className:"App",children:[(0,s.jsxs)("div",{className:"App__Content",children:[(0,s.jsx)(l,{}),(0,s.jsx)(t,v({},n))]}),(0,s.jsx)(f,{})]})})}},5502:function(e,t,n){"use strict";n.d(t,{X:function(){return h},h:function(){return p}});var r=n(2809),o=n(7294),a={profile_img:"/images/profile1.jpg",summary:"Yonsei Univ.\n\tMaterial Science & Engineering\nKATUSA, USFK\n\tUnited States Forces Korea\nSK Hynix\n\tNAND Flash CMP Engineering\nSSAFY\n\tSamsung SW Academy For Youth\nDAOU Tech.\n: KIWOOM Securities\n\tFinancial SW Developer",welcome_word:"\uc548\ub155\ud558\uc138\uc694! \uae08\uc735 IT \uac1c\ubc1c\uc790 \ubc15\uc815\uc6c5\uc785\ub2c8\ub2e4!",introduction:"\uacf5\ubd80\ud55c \ub0b4\uc6a9\uc744 \uae30\ub85d\ud558\uace0 \ud3ec\ud2b8\ud3f4\ub9ac\uc624\ub97c \uc815\ub9ac\ud558\ub294 \uac1c\uc778 \ube14\ub85c\uadf8\uc785\ub2c8\ub2e4.\n\ub04a\uc784\uc5c6\uc774 \ubc30\uc6b0\uace0 \uc131\uc7a5\ud558\ub294 \uac83\uc744 \uc990\uaca8 \ubc18\ub3c4\uccb4 \uc5d4\uc9c0\ub2c8\uc5b4\uc5d0\uc11c \uac1c\ubc1c\uc790\ub85c \uc804\uc9c1\ud588\uc2b5\ub2c8\ub2e4.\n\ud6a8\uc728\uc801\uc774\uace0 \uae54\ub054\ud55c \ucf54\ub4dc\uc5d0 \uad00\uc2ec\uc774 \ub9ce\uc2b5\ub2c8\ub2e4.\n\ud53c\uc544\ub178, \uc6b4\ub3d9, \uc5ec\ud589\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4."},i={introduction:"Web \uae30\uc220\uc5d0 \uad00\uc2ec\uc744 \uac00\uc9c0\uace0 \uc788\ub294 \uae08\uc735 IT \uac1c\ubc1c\uc790\uc785\ub2c8\ub2e4.\n\uc2e0\uc18c\uc7ac\uacf5\ud559\uc744 \uc804\uacf5\ud558\uace0 \ubc18\ub3c4\uccb4 \uae30\uc5c5\uc758 \uc5d4\uc9c0\ub2c8\uc5b4\ub85c \uadfc\ubb34\ud588\uc2b5\ub2c8\ub2e4.\n\ubc30\uc6b0\uace0 \uc131\uc7a5\ud558\ub294 \uac83\uc744 \uc990\uaca8 \ubc18\ub3c4\uccb4 \uc5d4\uc9c0\ub2c8\uc5b4\uc5d0\uc11c \uac1c\ubc1c\uc790\ub85c \uc804\uc9c1\ud588\uc2b5\ub2c8\ub2e4.",tech_stack:{frontend:["/tech_stack/javascript.png","/tech_stack/react.png","/tech_stack/vue.png"],backend:["/tech_stack/python.png","/tech_stack/django.png","/tech_stack/java.png"],version_control:["/tech_stack/git.png"],studying:["/tech_stack/spring.png","/tech_stack/mysql.png","/tech_stack/cpp.png"]},career:[{name:"\ub2e4\uc6b0\uae30\uc220 - \ud0a4\uc6c0\uc99d\uad8c",content:"\uae08\uc735\uac1c\ubc1c\uc9c1\ubb34 (2021-\ud604\uc7ac)"},{name:"\uc0bc\uc131 \uccad\ub144 SW \uc544\uce74\ub370\ubbf8",content:"Web \uac1c\ubc1c \uad50\uc721 (2021)"},{name:"SK Hynix",content:"NAND Flash CMP \uacf5\uc815\uae30\uc220\ud300 \uadfc\ubb34 (2019)"},{name:"KATUSA",content:"\uc8fc\ud55c\ubbf8\uad70\uc0ac\ub839\ubd80 \uc791\uc804\ucc38\ubaa8\ubd80 \ubcf5\ubb34 (2015-2017)"},{name:"\uc5f0\uc138\ub300\ud559\uad50",content:"\uc2e0\uc18c\uc7ac\uacf5\ud559 \uc804\uacf5 (2013-2019)"}]},c=[{category:"CS",id:0,title:"Data Link Control",date:new Date("2021-09-02, 20:25"),content:"store/article_data/cs/01_Data Link Control.md"},{category:"CS",id:1,title:"High-level Data Link Control",date:new Date("2021-09-04, 19:15"),content:"store/article_data/cs/02_HDLC.md"}],s={categoryId:-1,categoryList:[{id:0,category:"Develop",itemList:[{category:"Develop",id:0,title:"test",date:new Date("2021-08-25, 20:30"),content:"store/article_data/develop/markdown_test.md"},{category:"Develop",id:1,title:"[GitHub Blog \uac1c\ubc1c\uae30] \uc815\ub9ac\ud560 \ub0b4\uc6a9 \ubaa9\ub85d",date:new Date("2021-09-01, 22:52"),content:"store/article_data/develop/20210901_GitHubBlog.md"},{category:"Develop",id:2,title:"[GitHub Blog \uac1c\ubc1c\uae30] \uac1c\ubc1c\uc77c\uc9c0",date:new Date("2021-09-27, 21:22"),content:"store/article_data/develop/20210927_GitHubBlog.md"},{category:"Develop",id:3,title:"[GitHub Blog \uac1c\ubc1c\uae30] Markdown \uc801\uc6a9 \ubc0f Require \ud568\uc218",date:new Date("2021-09-29, 22:16"),content:"store/article_data/develop/20210928_GitHubBlog.md"},{category:"Develop",id:4,title:"[GitHub Blog \uac1c\ubc1c\uae30] \uad6c\uae00 \uac80\uc0c9 \ub4f1\ub85d & SEO \uad6c\ud604(1)",date:new Date("2021-10-05, 19:38"),content:"store/article_data/develop/20211005_GitHubBlog.md"},{category:"Develop",id:5,title:"[GitHub Blog \uac1c\ubc1c\uae30] SEO \uad6c\ud604(2) - Next.js app",date:new Date("2021-10-06, 13:12"),content:"store/article_data/develop/20211006_GitHubBlog.md"},{category:"Develop",id:6,title:"[GitHub Blog \uac1c\ubc1c\uae30] SEO \uad6c\ud604(3) - Next.js app",date:new Date("2021-10-07, 15:50"),content:"store/article_data/develop/20211007_GitHubBlog.md"}]},{id:1,category:"CS",itemList:c},{id:2,category:"Algorithm",itemList:[]},{id:3,category:"Web",itemList:[]},{id:4,category:"Etc",itemList:[]}]},l=[{id:0,title:"Github Blog",details:[{id:0,date:"2021-08-24",images:["/archives/blog/1-1.png","/archives/blog/1-2.png"],content:"\ube14\ub85c\uadf8 \uac1c\ubc1c \uc2dc\uc791\n\uc0ac\uc6a9 \uae30\uc220: React js"},{id:1,date:"2021-08-25",images:["/archives/blog/2-1.png","/archives/blog/2-2.png","/archives/blog/2-3.png"],content:"Home, Archives \uc815\ub9ac \ubc0f Footer \uc704\uce58 \uc870\uc815"},{id:2,date:"2021-08-25",images:["/archives/blog/3-1.png","/archives/blog/3-2.png","/archives/blog/3-3.png","/archives/blog/3-4.png"],content:"Articles \uad6c\ud604\nLocal\uc758 Markdown File\uc744 \ubd88\ub7ec\uc640\uc11c \ucd9c\ub825\ud558\ub294 \ubc29\uc2dd \uc0ac\uc6a9"},{id:3,date:"2021-08-30",images:[],content:"GitHub \ubc30\ud3ec \uc2dc url \uc811\uadfc\uc774 \uc548 \ub418\ub294 \ubb38\uc81c \ud574\uacb0\n\ucc38\uc870: https://iamsjy17.github.io/react/2018/11/04/githubpage-SPA.html\nhttps://github.com/rafgraph/spa-github-pages"},{id:4,date:"2021-09-20",images:["/archives/blog/5-1.png","/archives/blog/5-2.png","/archives/blog/5-3.png","/archives/blog/5-4.png"],content:"\ub514\uc790\uc778 \uc815\ub9ac \ubc0f \ubc18\uc751\ud615 \uc6f9 \uad6c\ud604"},{id:5,date:"2021-09-29",images:["/archives/blog/6-1.png"],content:"\ub85c\uace0 \uc81c\uc791"},{id:6,date:"2021-10-04",images:["/archives/blog/7-1.png"],content:"Google Search Console \ub4f1\ub85d"}]},{id:1,title:"BITZ",details:[{id:0,date:"2021-07.05 ~ 2021-08-16",images:["/archives/bitz/0.jpg","/archives/bitz/1.jpg"],content:"\ub18d\uad6c \ud53d\uc5c5 \uac8c\uc784 \ud50c\ub7ab\ud3fc BITZ \uc81c\uc791"}]},{id:2,title:"Internship",details:[{id:0,date:"2021-08.17 ~ 2021-09-10",images:[],content:"\ub2e4\uc6b0\uae30\uc220 \uae08\uc735\uac1c\ubc1c \uc9c1\ubb34 (\ud0a4\uc6c0\uc99d\uad8c) \uc778\ud134"}]}],u=n(5893);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={home:{},profile:{},articles:{},archives:[]},p=(0,o.createContext)(g),v=p.Provider,h=function(e){var t=e.children,n=(0,o.useReducer)((function(e,t){switch(t.type){case"GET_HOME":var n=a;return f(f({},e),{},{home:n});case"GET_PROFILE":var r=i;return f(f({},e),{},{profile:r});case"GET_ARTICLES":var o=s;return null!=e.articles.categoryId&&-1!==e.articles.categoryId&&(o.categoryId=e.articles.categoryId),f(f({},e),{},{articles:o});case"GET_ARCHIVES":var c=l;return f(f({},e),{},{archives:c});case"SELECT_CATEGORY":var u=t.value;return f(f({},e),{},{articles:f(f({},e.articles),{},{categoryId:u})});default:throw new Error}}),g),r=n[0],c=n[1];return(0,u.jsx)(v,{value:{value:r,dispatch:c},children:t})}},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1553)}])},3117:function(e){e.exports={Footer:"Footer_Footer__16BK3",Footer__github:"Footer_Footer__github__3FRw-",Footer__email:"Footer_Footer__email__gbWyz"}},6379:function(e){e.exports={Header:"Header_Header__1J9sN",Header__styling:"Header_Header__styling__U361E",Header__styling_Reverse:"Header_Header__styling_Reverse__2G1sc",Header__word:"Header_Header__word__hqgKV",bounce:"Header_bounce__3LAO8",hinge:"Header_hinge__l1KsR",slideOutLeft:"Header_slideOutLeft__21Ld-",zoomInDown:"Header_zoomInDown__zl1oQ",shake:"Header_shake__hOh8F"}},162:function(){},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},5675:function(e,t,n){n(9917)},1664:function(e,t,n){e.exports=n(2167)},2809:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var n=e.O();_N_E=n}]);