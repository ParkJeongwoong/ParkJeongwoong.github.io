(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[347],{4567:function(e,t,r){"use strict";var n=r(9669),i=r.n(n),a="https://dvlprjw.kro.kr",o={apiTest1:function(e,t,r){return function(e,t,r){i()({method:"get",url:a+"/hello",params:e}).then(t).catch(r)}(e,t,r)},apiTest2:function(e,t,r){return function(e,t,r){i()({method:"get",url:a+"/hello/dto",params:e}).then(t).catch(r)}(e,t,r)},visited:function(e,t,r){return function(e,t,r){i()({method:"post",url:a+"/blog-api/visited",data:e}).then(t).catch(r)}(e,t,r)}};t.Z=o},5219:function(e,t,r){"use strict";var n=r(7294),i=r(3080),a=r(1163),o=r(2187),c=r.n(o),l=r(5893);t.Z=function(e){var t=e.moveList,r=(0,a.useRouter)(),o=(0,n.useContext)(i.h),s=o.value,d=o.dispatch,u=s.articles,_=function(e){t?t(!0):r.push({pathname:"/articles"});var n=e.target.getAttribute("value").split("_");d({type:"SELECT_CATEGORY",value:n}),d({type:"SELECT_PAGE",value:0})};return(0,l.jsxs)("div",{className:c().Articles__Category,id:"Article_Category",children:[(0,l.jsx)("h1",{children:"Articles"}),(0,l.jsx)("div",{className:c().Category__Mobile,onClick:function(){var e,t,r=document.querySelectorAll("#Article_Category > div");r[0].style["font-weight"]?(e="",t="none"):(e="bold",t="inline"),r[0].style["font-weight"]=e;for(var n=1;n<r.length;n++)r[n].style.display=t},children:-1==u.categoryId?"\uc804\uccb4\ubcf4\uae30":-1==u.subCategoryId?u.categoryList[Number(u.categoryId)].category:u.categoryList[Number(u.categoryId)].subCategory[u.subCategoryId]}),(0,l.jsx)("div",{className:c().Category__Div,children:(0,l.jsx)("div",{className:c().Category__Button,onClick:_,value:"-1",children:"\uc804\uccb4\ubcf4\uae30"})}),u.categoryList.map((function(e,t){return(0,l.jsxs)("div",{className:c().Category__Div,children:[(0,l.jsx)("div",{className:c().Category__Button,onClick:_,value:e.id,children:e.category}),e.subCategory.map((function(t,r){return(0,l.jsx)("div",{className:c().SubCategory__Button,onClick:_,value:"".concat(e.id,"_").concat(r),children:t},r)}))]},t)}))]})}},9026:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(9008),i=r(5893);function a(e){var t=e.description,r=e.title,a=e.siteTitle;return(0,i.jsxs)(n.default,{children:[(0,i.jsx)("title",{children:"".concat(r," | ").concat(a)}),(0,i.jsx)("meta",{name:"description",content:t}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:title",content:r}),(0,i.jsx)("meta",{property:"og:description",content:t}),(0,i.jsx)("meta",{property:"og:site_name",content:a}),(0,i.jsx)("link",{rel:"icon",href:"/myLogo_transp.png"})]})}},8384:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return O},default:function(){return S}});var n=r(5523),i=r(7294),a=r(5219),o=r(2809),c=r(219),l=r(4245),s=r(6767),d=r(3961),u=r(3992),_=r(545),g=r.n(_),p=r(4578),y=r.n(p),h=r(5893),f=["node","inline","className","children"],v=["node","children"],m=["node"];function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=function(e){e.documentTitle;var t=e.markdown,r=(0,i.useState)(!0),n=r[0],a=r[1];return(0,i.useEffect)((function(){t&&a(!1)}),[t]),(0,h.jsx)("div",{children:n?(0,h.jsx)("div",{className:g().loader,children:(0,h.jsx)("span",{className:g().loader_text,children:"Loading..."})}):(0,h.jsx)("div",{className:y().MarkdownRenderer,children:(0,h.jsx)(l.Z,{remarkPlugins:[s.Z],components:{code:function(e){e.node;var t=e.inline,r=e.className,n=e.children,i=(0,c.Z)(e,f),a=/language-(\w+)/.exec(r||"");return t?(0,h.jsx)("code",j(j({style:{background:"var(--highlight-color)",padding:"2px"}},i),{},{children:n})):a?(0,h.jsx)(d.Z,j(j({style:u.Z,language:a[1],PreTag:"div"},i),{},{children:String(n).replace(/\n$/,"")})):(0,h.jsx)(d.Z,j(j({style:u.Z,language:"textile",PreTag:"div"},i),{},{children:String(n).replace(/\n$/,"")}))},blockquote:function(e){e.node;var t=e.children,r=(0,c.Z)(e,v);return(0,h.jsx)("div",j(j({style:{background:"#f0f0f0",padding:"1px 15px",borderRadius:"10px"}},r),{},{children:t}))},img:function(e){e.node;var t=(0,c.Z)(e,m);return(0,h.jsx)("img",{style:{maxWidth:"60vw"},src:t.src.replace("../../../../public/","/"),alt:"MarkdownRenderer__Image"})}},children:t.replace(/\n\s\n\s/gi,"\n\n&nbsp;\n\n").replace(/\*\*/gi,"@$_%!^").replace(/\**\*/gi,"/").replace(/@\$_%!\^/gi,"**").replace(/<\/?u>/gi,"*")})})})},b=r(9026),w=r(3080),A=r(8013),k=r.n(A),N=r(1163),D=r(4567);var O=!0,S=function(e){var t=e.markdown,r=e.documentTitle,o=(0,N.useRouter)(),c=(0,i.useContext)(w.h),l=c.value,s=c.dispatch;(0,n.Z)(l);var d=(0,i.useState)(!0),u=d[0],_=d[1];return(0,i.useEffect)((function(){s({type:"GET_ARTICLES"}),_(!1),D.Z.visited({url:"https://parkjeongwoong.github.io"+o.asPath},(function(e){console.log(JSON.stringify(e.data)),console.log("!")}),(function(e){return console.log(e)}))}),[s]),(0,i.useEffect)((function(){!u&&window.innerWidth>960&&setTimeout((function(){var e=document.querySelector("#ArticleDetail_left"),t=document.querySelector("#Article_Category");e.style.width="13%",t.style.width="10%"}),100)}),[u]),(0,h.jsxs)("div",{children:[(0,h.jsx)(b.Z,{description:t,title:r,siteTitle:"\uc6c5's \ube14\ub85c\uadf8"}),(0,h.jsx)("main",{children:u?(0,h.jsx)("div",{className:g().loader,children:(0,h.jsx)("span",{className:g().loader_text,children:"Loading..."})}):(0,h.jsxs)("div",{className:k().ArticleDetail,children:[(0,h.jsx)("div",{className:k().ArticleDetail__left,id:"ArticleDetail_left",children:(0,h.jsx)(a.Z,{})}),(0,h.jsx)("div",{className:k().ArticleDetail__right,id:"ArticleDetail_right",children:(0,h.jsx)(C,{documentTitle:r,markdown:t})})]})})]})}},5238:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/[articleCategory]/[articleId]",function(){return r(8384)}])},2187:function(e){e.exports={Articles__Category:"Articles__Category_Articles__Category__1_NlT",Category__Mobile:"Articles__Category_Category__Mobile__1pUPc",Category__Button:"Articles__Category_Category__Button__3V-jx",SubCategory__Button:"Articles__Category_SubCategory__Button__2yT_1",Category__Div:"Articles__Category_Category__Div__1BHtl"}},4578:function(e){e.exports={MarkdownRenderer:"MarkdownRenderer_MarkdownRenderer__16VJX",MarkdownRenderer__Title:"MarkdownRenderer_MarkdownRenderer__Title__1fEEN"}},545:function(e){e.exports={link_tag:"globalStyles_link_tag__1lrYr",loader:"globalStyles_loader__29zgS"}},8013:function(e){e.exports={ArticleDetail:"ArticleDetail_ArticleDetail__DcZO6",ArticleDetail__left:"ArticleDetail_ArticleDetail__left__3Z0gG",ArticleDetail__right:"ArticleDetail_ArticleDetail__right__21F5z"}}},function(e){e.O(0,[774,862,15,888,179],(function(){return t=5238,e(e.s=t);var t}));var t=e.O();_N_E=t}]);