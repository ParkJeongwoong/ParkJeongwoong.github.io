(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[347],{4567:function(e,t,r){"use strict";var n=r(9669),a=r.n(n),o="https://dvlprjw.kro.kr",i={apiTest1:function(e,t,r){return function(e,t,r){a()({method:"get",url:o+"/hello",params:e}).then(t).catch(r)}(e,t,r)},apiTest2:function(e,t,r){return function(e,t,r){a()({method:"get",url:o+"/hello/dto",params:e}).then(t).catch(r)}(e,t,r)},visited:function(e){}};t.Z=i},5219:function(e,t,r){"use strict";var n=r(7294),a=r(7903),o=r(1163),i=r(2187),c=r.n(i),l=r(5893);t.Z=function(e){var t=e.moveList,r=(0,o.useRouter)(),i=(0,n.useContext)(a.h),d=i.value,s=i.dispatch,_=d.articles,u=function(e){t?t(!0):r.push({pathname:"/articles"});var n=e.target.getAttribute("value").split("_");s({type:"SELECT_CATEGORY",value:n}),s({type:"SELECT_PAGE",value:0})};return(0,l.jsxs)("div",{className:c().Articles__Category,id:"Article_Category",children:[(0,l.jsx)("h1",{children:"Articles"}),(0,l.jsx)("div",{className:c().Category__Mobile,onClick:function(){var e,t,r=document.querySelectorAll("#Article_Category > div");r[0].style["font-weight"]?(e="",t="none"):(e="bold",t="inline"),r[0].style["font-weight"]=e;for(var n=1;n<r.length;n++)r[n].style.display=t},children:-1==_.categoryId?"\uc804\uccb4\ubcf4\uae30":-1==_.subCategoryId?_.categoryList[Number(_.categoryId)].category:_.categoryList[Number(_.categoryId)].subCategory[_.subCategoryId]}),(0,l.jsx)("div",{className:c().Category__Div,children:(0,l.jsx)("div",{className:c().Category__Button,onClick:u,value:"-1",children:"\uc804\uccb4\ubcf4\uae30"})}),_.categoryList.map((function(e,t){return(0,l.jsxs)("div",{className:c().Category__Div,children:[(0,l.jsx)("div",{className:c().Category__Button,onClick:u,value:e.id,children:e.category}),e.subCategory.map((function(t,r){return(0,l.jsx)("div",{className:c().SubCategory__Button,onClick:u,value:"".concat(e.id,"_").concat(r),children:t},r)}))]},t)}))]})}},9026:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(9008),a=r(5893);function o(e){var t=e.description,r=e.title,o=e.siteTitle;return(0,a.jsxs)(n.default,{children:[(0,a.jsx)("title",{children:"".concat(r," | ").concat(o)}),(0,a.jsx)("meta",{name:"description",content:t}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:title",content:r}),(0,a.jsx)("meta",{property:"og:description",content:t}),(0,a.jsx)("meta",{property:"og:site_name",content:o}),(0,a.jsx)("link",{rel:"icon",href:"/myLogo_transp.png"})]})}},3354:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return Z},default:function(){return E}});var n=r(5523),a=r(7294),o=r(5219),i=r(2809),c=r(219),l=r(4245),d=r(6767),s=r(3961),_=r(3992),u=r(545),g=r.n(u),p=r(4578),y=r.n(p),x=r(5893),h=["node","inline","className","children"],f=["node","children"],v=["node"];function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e){var t=e.markdown,r=(0,a.useState)(!0),n=r[0],o=r[1];return(0,a.useEffect)((function(){t&&o(!1)}),[t]),(0,x.jsx)("div",{children:n?(0,x.jsx)("div",{className:g().loader,children:(0,x.jsx)("span",{className:g().loader_text,children:"Loading..."})}):(0,x.jsx)("div",{className:y().MarkdownRenderer,children:(0,x.jsx)(l.Z,{remarkPlugins:[d.Z],components:{code:function(e){e.node;var t=e.inline,r=e.className,n=e.children,a=(0,c.Z)(e,h),o=/language-(\w+)/.exec(r||"");return t?(0,x.jsx)("code",w(w({style:{background:"linear-gradient( to right, var(--sub-highlight-color) 15%, var(--highlight-color) 85%, var(--sub-highlight-color) )",padding:"2px",borderRadius:"3px"}},a),{},{children:n})):o?(0,x.jsx)(s.Z,w(w({style:_.Z,language:o[1],PreTag:"div"},a),{},{children:String(n).replace(/\n$/,"")})):(0,x.jsx)(s.Z,w(w({style:_.Z,language:"textile",PreTag:"div"},a),{},{children:String(n).replace(/\n$/,"")}))},blockquote:function(e){e.node;var t=e.children,r=(0,c.Z)(e,f);return(0,x.jsx)("div",w(w({style:{background:"#f0f0f0",padding:"1px 15px",borderRadius:"10px"}},r),{},{children:t}))},img:function(e){e.node;var t=(0,c.Z)(e,v);return(0,x.jsx)("img",{style:{maxWidth:"60vw"},src:t.src.replace("../../../../public/","/"),alt:"MarkdownRenderer__Image"})}},children:t.replace(/\n\s\n\s/gi,"\n\n&nbsp;\n\n").replace(/\*\*/gi,"@$_%!^").replace(/\**\*/gi,"/").replace(/@\$_%!\^/gi,"**").replace(/<\/?u>/gi,"*")})})})},b=r(7831),j=r.n(b);var C=function(e){var t=e.index,r=(0,a.useState)(!1),n=r[0],o=r[1],i=(0,a.useState)([]),c=i[0],l=i[1],d=1,s=0,_=0,u=0,g=0;(0,a.useEffect)((function(){if(Object.keys(t).length){var e=[];t.forEach((function(t){switch(t.type){case"type1":e.push(d),d++;break;case"type2":e.push(s),s++;break;case"type3":e.push(_),_++;break;case"type4":e.push(u),u++;break;case"type5":e.push(g),g++}})),l(e)}}),[t]);var p=function(e){var r=e.target.getAttribute("value"),n=t[r].type,a=c[r],o=null;switch(n){case"type1":o=document.querySelectorAll("h1")[a];break;case"type2":o=document.querySelectorAll("h2")[a];break;case"type3":o=document.querySelectorAll("h3")[a];break;case"type4":o=document.querySelectorAll("h4")[a];break;case"type5":o=document.querySelectorAll("h5")[a]}var i=o.offsetTop-80;window.scrollTo({top:i,behavior:"smooth"})};return(0,x.jsxs)("div",{className:j().MarkdownIndex,children:[(0,x.jsx)("div",{className:j().MarkdownIndex_Button,onClick:function(e){o(!n);var t=document.querySelector("#index_box");n?(e.target.style["font-weight"]="normal",e.target.style["background-color"]="var(--main-color-dark)",t.style.display="none"):(e.target.style["font-weight"]="bold",e.target.style["background-color"]="var(--main-color-deep-dark)",t.style.display="block")},children:"Index"}),(0,x.jsx)("div",{className:j().MarkdownIndex_Box,id:"index_box",children:(0,x.jsx)("div",{className:j().MarkdownIndex_ContentBox,children:t.map((function(e,t){return(0,x.jsx)("div",{value:t,className:j()["MarkdownIndex_".concat(e.type)],onClick:p,children:e.data},t)}))})})]})},M=r(9026),I=r(7903),A=r(8013),N=r.n(A),S=r(1163),D=r(4567);var Z=!0,E=function(e){var t=e.markdown,r=e.documentTitle,i=e.index,c=(0,S.useRouter)(),l=(0,a.useContext)(I.h),d=l.value,s=l.dispatch;(0,n.Z)(d);var _=(0,a.useState)(!0),u=_[0],p=_[1];return(0,a.useEffect)((function(){s({type:"GET_ARTICLES"}),p(!1),D.Z.visited({url:"https://parkjeongwoong.github.io"+c.asPath})}),[s,c.asPath]),(0,a.useEffect)((function(){!u&&window.innerWidth>960&&setTimeout((function(){var e=document.querySelector("#ArticleDetail_left"),t=document.querySelector("#Article_Category");e.style.width="13%",t.style.width="10%"}),100)}),[u]),(0,x.jsxs)("div",{children:[(0,x.jsx)(M.Z,{description:t,title:r,siteTitle:"\uc6c5's \ube14\ub85c\uadf8"}),(0,x.jsx)("main",{children:u?(0,x.jsx)("div",{className:g().loader,children:(0,x.jsx)("span",{className:g().loader_text,children:"Loading..."})}):(0,x.jsxs)("div",{className:N().ArticleDetail,children:[(0,x.jsx)("div",{className:N().ArticleDetail__left,id:"ArticleDetail_left",children:(0,x.jsx)(o.Z,{})}),(0,x.jsxs)("div",{className:N().ArticleDetail__right,id:"ArticleDetail_right",children:[(0,x.jsx)(m,{markdown:t}),(0,x.jsx)(C,{index:i})]})]})})]})}},5238:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/[articleCategory]/[articleId]",function(){return r(3354)}])},2187:function(e){e.exports={Articles__Category:"Articles__Category_Articles__Category__1_NlT",Category__Mobile:"Articles__Category_Category__Mobile__1pUPc",Category__Button:"Articles__Category_Category__Button__3V-jx",SubCategory__Button:"Articles__Category_SubCategory__Button__2yT_1",Category__Div:"Articles__Category_Category__Div__1BHtl"}},7831:function(e){e.exports={MarkdownIndex:"MarkdownIndex_MarkdownIndex__2Vihz",MarkdownIndex_Button:"MarkdownIndex_MarkdownIndex_Button__3zf6D",MarkdownIndex_Box:"MarkdownIndex_MarkdownIndex_Box__3ZB1r",MarkdownIndex_ContentBox:"MarkdownIndex_MarkdownIndex_ContentBox__3BohT",MarkdownIndex_type1:"MarkdownIndex_MarkdownIndex_type1__2lgJH",MarkdownIndex_type2:"MarkdownIndex_MarkdownIndex_type2__1bPgx",MarkdownIndex_type3:"MarkdownIndex_MarkdownIndex_type3__1fgZZ",MarkdownIndex_type4:"MarkdownIndex_MarkdownIndex_type4__Z8QSl",MarkdownIndex_type5:"MarkdownIndex_MarkdownIndex_type5__2txCx"}},4578:function(e){e.exports={MarkdownRenderer:"MarkdownRenderer_MarkdownRenderer__16VJX",MarkdownRenderer__Title:"MarkdownRenderer_MarkdownRenderer__Title__1fEEN"}},545:function(e){e.exports={link_tag:"globalStyles_link_tag__1lrYr",loader:"globalStyles_loader__29zgS"}},8013:function(e){e.exports={ArticleDetail:"ArticleDetail_ArticleDetail__DcZO6",ArticleDetail__left:"ArticleDetail_ArticleDetail__left__3Z0gG",ArticleDetail__right:"ArticleDetail_ArticleDetail__right__21F5z"}}},function(e){e.O(0,[774,862,15,888,179],(function(){return t=5238,e(e.s=t);var t}));var t=e.O();_N_E=t}]);