(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[623],{4567:function(e,t,r){"use strict";var i=r(9669),c=r.n(i),n={apiTest1:function(e){function t(t,r,i){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t,r){return apiTest1(e,t,r)})),apiTest2:function(e){function t(t,r,i){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t,r){return apiTest2(e,t,r)})),visited:function(e){return function(e){RegExp(/^(itsme)/).test(e.who)?console.log("Welcome tester!"):c()({method:"post",url:"http://localhost:8080/blog-api/visited",data:e}).then().catch((function(e){return console.log(e)}))}(e)}};t.Z=n},9026:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var i=r(9008),c=r(5893);function n(e){var t=e.description,r=e.title,n=e.siteTitle;return(0,c.jsxs)(i.default,{children:[(0,c.jsx)("title",{children:"".concat(r," | ").concat(n)}),(0,c.jsx)("meta",{name:"description",content:t}),(0,c.jsx)("meta",{property:"og:type",content:"website"}),(0,c.jsx)("meta",{property:"og:title",content:r}),(0,c.jsx)("meta",{property:"og:description",content:t}),(0,c.jsx)("meta",{property:"og:site_name",content:n}),(0,c.jsx)("link",{rel:"icon",href:"/myLogo_transp.png"})]})}},5294:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return A}});var i=r(7294),c=r(1091),n=r.n(c),a=r(6336),s=r.n(a),o=r(5893);function l(e){var t=e.images,r=e.archiveId,c=e.itemIdx,n=(0,i.useState)(0),a=n[0],l=n[1];return(0,i.useEffect)((function(){document.querySelectorAll("#archive_".concat(r,"_").concat(c," > div > div > img")).forEach((function(e){e.style.left="".concat(a,"vw")}));var e=document.querySelector("#archive_".concat(r,"_").concat(c,"_leftArrow")),i=document.querySelector("#archive_".concat(r,"_").concat(c,"_rightArrow"));t.length>1?a>=0?(e.style.display="none",i.style.display="inline"):a<=-70*(t.length-1)?(i.style.display="none",e.style.display="inline"):(e.style.display="inline",i.style.display="inline"):(e.style.display="none",i.style.display="none")}),[a,t.length,r,c]),(0,o.jsxs)("div",{className:s().ArchivedItem__ImgCarousel,children:[(0,o.jsx)("div",{className:s().ImgCarousel_images,children:t.map((function(e,t){return(0,o.jsx)("img",{className:s().ImgCarousel_image,src:e,alt:"archive_img"},t)}))}),(0,o.jsx)("img",{className:"".concat(s().carouselArrow," ").concat(s().carouselArrow__left),src:"/images/left-arrow.png",alt:"left_arrow",onClick:function(){a<0&&l(a+70)},id:"archive_".concat(r,"_").concat(c,"_leftArrow")}),(0,o.jsx)("img",{className:"".concat(s().carouselArrow," ").concat(s().carouselArrow__right),src:"/images/right-arrow.png",alt:"right_arrow",onClick:function(){a>-70*(t.length-1)&&l(a-70)},id:"archive_".concat(r,"_").concat(c,"_rightArrow")})]})}var _=function(e){var t=e.archive;return(0,o.jsxs)("div",{className:n().Archived_item,id:"archive_".concat(t.id),children:[(0,o.jsxs)("h3",{className:n().Archived_item__title,onClick:function(e){var t=e.target.getAttribute("value"),r=Array.from(document.querySelectorAll("#".concat(t," > div > div"))).reduce((function(e,t){return e+t.scrollHeight+5}),0),i=document.querySelector("#".concat(t," > div")).style.height;document.querySelector("#".concat(t," > div")).style.height=i?null:"".concat(r+1,"px")},value:"archive_".concat(t.id),children:["- ",t.title]}),(0,o.jsx)("div",{className:n().Archived_item__show,children:t.details.map((function(e,r){return(0,o.jsxs)("div",{className:n().Archived_item__detail,id:"archive_".concat(t.id,"_").concat(r),children:[(0,o.jsx)("div",{className:n().Archived_item__date,children:e.date}),(0,o.jsx)(l,{images:e.images,archiveId:t.id,itemIdx:r}),(0,o.jsx)("div",{className:n().Archived_item__content,children:e.content.split("\n").map((function(e,t){return(0,o.jsx)("div",{children:e},t)}))}),(0,o.jsx)("hr",{})]},r)}))})]})},u=r(9026),d=r(7903),h=r(545),m=r.n(h),v=r(1),g=r.n(v),p=r(4567),f=r(1163);var A=function(){var e=(0,f.useRouter)(),t=(0,i.useContext)(d.h),r=t.value,c=t.dispatch,n=r.archives,a=r.pageData,s=(0,i.useState)(!0),l=s[0],h=s[1];return(0,i.useEffect)((function(){c({type:"GET_ARCHIVES"}),l&&(p.Z.visited({url:"https://parkjeongwoong.github.io"+e.asPath,who:e.asPath.split("who=")[1],lastPage:a.currentPage}),c({type:"SET_PAGE",value:e.asPath})),h(!1)}),[c,e.asPath,a.currentPage]),(0,o.jsxs)("div",{children:[(0,o.jsx)(u.Z,{description:"Archives : Github \ube14\ub85c\uadf8 \uac1c\ubc1c\uae30, \ub18d\uad6c \ud53d\uc5c5\uac8c\uc784 \ud50c\ub7ab\ud3fc BITZ \uac1c\ubc1c \ud504\ub85c\uc81d\ud2b8 \uc778\ud134 \uacbd\ud5d8",title:"Archives",siteTitle:"\uc6c5's \ube14\ub85c\uadf8"}),(0,o.jsx)("main",{children:l?(0,o.jsx)("div",{className:m().loader,children:(0,o.jsx)("span",{className:m().loader_text,children:"Loading..."})}):(0,o.jsxs)("div",{className:g().Archives,children:[(0,o.jsx)("h1",{children:"Archives"}),(0,o.jsx)("div",{className:g().Archives__List,children:n.map((function(e,t){return(0,o.jsx)("div",{children:(0,o.jsx)(_,{archive:e})},t)}))})]})})]})}},4393:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/archives",function(){return r(5294)}])},1091:function(e){e.exports={Archived_item__detail:"ArchivedItem_Archived_item__detail__3sQNt",Archived_item__title:"ArchivedItem_Archived_item__title__1F8jw",Archived_item:"ArchivedItem_Archived_item__UKHYx",Archived_item__show:"ArchivedItem_Archived_item__show__1O8Sg"}},6336:function(e){e.exports={ArchivedItem__ImgCarousel:"ArchivedItem__ImgCarousel_ArchivedItem__ImgCarousel__1vj6M",ImgCarousel_images:"ArchivedItem__ImgCarousel_ImgCarousel_images__2s9hG",carouselArrow:"ArchivedItem__ImgCarousel_carouselArrow__3GIkA",carouselArrow__left:"ArchivedItem__ImgCarousel_carouselArrow__left__FVZmu",carouselArrow__right:"ArchivedItem__ImgCarousel_carouselArrow__right__23pMg"}},545:function(e){e.exports={link_tag:"globalStyles_link_tag__1lrYr",loader:"globalStyles_loader__29zgS"}},1:function(e){e.exports={Archives:"Archives_Archives__jeMar"}}},function(e){e.O(0,[862,774,888,179],(function(){return t=4393,e(e.s=t);var t}));var t=e.O();_N_E=t}]);