(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4567:function(e,t,n){"use strict";var i=n(9669),r=n.n(i),o={apiTest1:function(e){function t(t,n,i){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t,n){return apiTest1(e,t,n)})),apiTest2:function(e){function t(t,n,i){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t,n){return apiTest2(e,t,n)})),visited:function(e){return function(e){RegExp(/^(itsme)/).test(e.who)?console.log("Welcome tester!"):r()({method:"post",url:"https://dvlprjw.kro.kr/blog-api/visited",data:e}).then().catch((function(e){return console.log(e)}))}(e)}};t.Z=o},9026:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(9008),r=n(5893);function o(e){var t=e.description,n=e.title,o=e.siteTitle;return(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"".concat(n," | ").concat(o)}),(0,r.jsx)("meta",{name:"description",content:t}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:description",content:t}),(0,r.jsx)("meta",{property:"og:site_name",content:o}),(0,r.jsx)("link",{rel:"icon",href:"/myLogo_transp.png"})]})}},9666:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var i=n(7294),r=n(9026),o=n(7903),s=n(1664),l=n(545),c=n.n(l),_=n(8453),a=n.n(_),u=n(1163),d=n(4567),m=n(5893);function p(){var e=(0,u.useRouter)(),t=(0,i.useContext)(o.h),n=t.value,l=t.dispatch,_=n.home,p=n.pageData,h=(0,i.useState)(!0),f=h[0],g=h[1];return(0,i.useEffect)((function(){l({type:"GET_HOME"}),f&&(d.Z.visited({url:"https://parkjeongwoong.github.io"+e.asPath,who:e.asPath.split("who=")[1],lastPage:p.currentPage}),l({type:"SET_PAGE",value:e.asPath})),g(!1)}),[l,e.asPath,p.currentPage]),(0,m.jsxs)("div",{children:[(0,m.jsx)(r.Z,{description:"\uc548\ub155\ud558\uc138\uc694! \uae08\uc735 IT \uac1c\ubc1c\uc790 \ubc15\uc815\uc6c5\uc785\ub2c8\ub2e4!\r \uacf5\ubd80\ud55c \ub0b4\uc6a9\uc744 \uae30\ub85d\ud558\uace0 \ud3ec\ud2b8\ud3f4\ub9ac\uc624\ub97c \uc815\ub9ac\ud558\ub294 \uac1c\uc778 \ube14\ub85c\uadf8\uc785\ub2c8\ub2e4.\r \ub04a\uc784\uc5c6\uc774 \ubc30\uc6b0\uace0 \uc131\uc7a5\ud558\ub294 \uac83\uc744 \uc990\uaca8 \ubc18\ub3c4\uccb4 \uc5d4\uc9c0\ub2c8\uc5b4\uc5d0\uc11c \uac1c\ubc1c\uc790\ub85c \uc804\uc9c1\ud588\uc2b5\ub2c8\ub2e4.\r \ud6a8\uc728\uc801\uc774\uace0 \uae54\ub054\ud55c \ucf54\ub4dc\uc5d0 \uad00\uc2ec\uc774 \ub9ce\uc2b5\ub2c8\ub2e4.        \r \ud53c\uc544\ub178, \uc6b4\ub3d9, \uc5ec\ud589\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4.        \r Yonsei Univ.\r Material Science & Engineering\r KATUSA, USFK\r United States Forces Korea\r SK Hynix\r NAND Flash CMP Engineering\r SSAFY\r Samsung SW Academy For Youth\r DAOU Tech.\r : KIWOOM Securities\r Financial SW Developer",title:"Home",siteTitle:"\uc6c5's \ube14\ub85c\uadf8"}),(0,m.jsx)("main",{children:f?(0,m.jsx)("div",{className:c().loader,children:(0,m.jsx)("span",{className:c().loader_text,children:"Loading..."})}):(0,m.jsxs)("div",{className:a().Home,children:[(0,m.jsx)("div",{className:a().Home__left,children:(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:a().Home__profile_img,children:(0,m.jsx)("img",{src:_.profile_img,alt:"profile"})}),(0,m.jsxs)("div",{className:a().Home__profile_content,children:[(0,m.jsx)("h3",{children:"\ubc15\uc815\uc6c5"}),(0,m.jsx)("div",{children:_.summary.split("\n").map((function(e,t){return"\t"===e[0]?(0,m.jsx)("div",{className:a().Home__profile_content_detail,children:e},t):(0,m.jsx)("div",{className:a().Home__profile_content_list,children:e},t)}))})]})]})}),(0,m.jsx)("div",{className:a().Home__right,children:(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{children:(0,m.jsx)("strong",{children:_.welcome_word})}),(0,m.jsx)("hr",{className:a().Horizontal_Line}),(0,m.jsx)("p",{children:(0,m.jsx)("strong",{children:"\uc18c\uac1c\uae00"})}),(0,m.jsx)("div",{children:_.introduction.split("\n").map((function(e,t){return(0,m.jsx)("p",{children:e},t)}))}),(0,m.jsx)("hr",{className:a().Horizontal_Line}),(0,m.jsx)("div",{children:(0,m.jsx)(s.default,{href:"/profile",children:(0,m.jsx)("a",{className:c().link_tag,children:"\uc790\uc138\ud788 \ubcf4\ub7ec\uac00\uae30"})})})]})})]})})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9666)}])},545:function(e){e.exports={link_tag:"globalStyles_link_tag__1lrYr",loader:"globalStyles_loader__29zgS"}},8453:function(e){e.exports={Home:"Home_Home__EEpLM",Home__left:"Home_Home__left__1lFTx",Home__right:"Home_Home__right__2B8om",Home__profile_img:"Home_Home__profile_img__3PmOJ",Home__profile_content:"Home_Home__profile_content__YunAv",Home__profile_content_list:"Home_Home__profile_content_list__1DrUw",Home__profile_content_detail:"Home_Home__profile_content_detail__qWFoe",Horizontal_Line:"Home_Horizontal_Line__23F2Z"}}},function(e){e.O(0,[862,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);