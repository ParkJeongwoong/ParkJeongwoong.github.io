(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{4567:function(t,e,r){"use strict";var i=r(9669),a=r.n(i),n="https://dvlprjw.kro.kr",c={apiTest1:function(t,e,r){return function(t,e,r){a()({method:"get",url:n+"/hello",params:t}).then(e).catch(r)}(t,e,r)},apiTest2:function(t,e,r){return function(t,e,r){a()({method:"get",url:n+"/hello/dto",params:t}).then(e).catch(r)}(t,e,r)},visited:function(t){return function(t){RegExp(/^(itsme)/).test(t.who)?console.log("Welcome tester!"):a()({method:"post",url:n+"/blog-api/visited",data:t}).then().catch((function(t){return console.log(t)}))}(t)}};e.Z=c},5219:function(t,e,r){"use strict";var i=r(7294),a=r(7903),n=r(1163),c=r(2187),s=r.n(c),o=r(5893);e.Z=function(t){var e=t.moveList,r=(0,n.useRouter)(),c=(0,i.useContext)(a.h),l=c.value,_=c.dispatch,u=l.articles,d=function(t){e?e(!0):r.push({pathname:"/articles"});var i=t.target.getAttribute("value").split("_");_({type:"SELECT_CATEGORY",value:i}),_({type:"SELECT_PAGE",value:0})};return(0,o.jsxs)("div",{className:s().Articles__Category,id:"Article_Category",children:[(0,o.jsx)("h1",{children:"Articles"}),(0,o.jsx)("div",{className:s().Category__Mobile,onClick:function(){var t,e,r=document.querySelectorAll("#Article_Category > div");r[0].style["font-weight"]?(t="",e="none"):(t="bold",e="inline"),r[0].style["font-weight"]=t;for(var i=1;i<r.length;i++)r[i].style.display=e},children:-1==u.categoryId?"\uc804\uccb4\ubcf4\uae30":-1==u.subCategoryId?u.categoryList[Number(u.categoryId)].category:u.categoryList[Number(u.categoryId)].subCategory[u.subCategoryId]}),(0,o.jsx)("div",{className:s().Category__Div,children:(0,o.jsx)("div",{className:s().Category__Button,onClick:d,value:"-1",children:"\uc804\uccb4\ubcf4\uae30"})}),u.categoryList.map((function(t,e){return(0,o.jsxs)("div",{className:s().Category__Div,children:[(0,o.jsx)("div",{className:s().Category__Button,onClick:d,value:t.id,children:t.category}),t.subCategory.map((function(e,r){return(0,o.jsx)("div",{className:s().SubCategory__Button,onClick:d,value:"".concat(t.id,"_").concat(r),children:e},r)}))]},e)}))]})}},9026:function(t,e,r){"use strict";r.d(e,{Z:function(){return n}});var i=r(9008),a=r(5893);function n(t){var e=t.description,r=t.title,n=t.siteTitle;return(0,a.jsxs)(i.default,{children:[(0,a.jsx)("title",{children:"".concat(r," | ").concat(n)}),(0,a.jsx)("meta",{name:"description",content:e}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:title",content:r}),(0,a.jsx)("meta",{property:"og:description",content:e}),(0,a.jsx)("meta",{property:"og:site_name",content:n}),(0,a.jsx)("link",{rel:"icon",href:"/myLogo_transp.png"})]})}},2753:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return x}});var i=r(7294),a=r(5219);function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function c(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=r(7903),o=r(1163),l=r(4765),_=r.n(l),u=r(9098),d=r.n(u),g=r(5893);var y=function(t){var e=t.article_count,r=(0,i.useContext)(s.h).dispatch,a=function(t){var e=t.target.getAttribute("value");r({type:"SELECT_PAGE",value:e})};return(0,g.jsx)("div",{className:d().Pagination__List,children:function(t){for(var e=[(0,g.jsx)("div",{className:d().Pagination__DefaultPage,onClick:a,id:"page0",value:0,children:"1"},"0")],r=1;10*r<t;r++)e.push((0,g.jsx)("div",{className:d().Pagination__Page,onClick:a,id:"page".concat(r),value:r,children:r+1},r));return e}(e)})};var h=function(){var t=(0,o.useRouter)(),e=(0,i.useContext)(s.h).value.articles,r=(0,i.useState)("\uc804\uccb4\ubcf4\uae30"),a=r[0],n=r[1],l=(0,i.useState)([]),u=l[0],d=l[1];(0,i.useEffect)((function(){if(-1===e.categoryId)n("\uc804\uccb4\ubcf4\uae30"),d(e.categoryList.reduce((function(t,e){return t.push.apply(t,c(e.itemList)),t}),[]).sort((function(t,e){return t.date>e.date?1:-1})));else{var t=e.categoryList.filter((function(t){return t.id===e.categoryId}));-1===e.subCategoryId?(n(t[0].category),d(t[0].itemList)):(n(t[0].subCategory[e.subCategoryId]),d(t[0].itemList.filter((function(r){return r.subCategory===t[0].subCategory[e.subCategoryId]}))))}}),[e.categoryId,e.subCategoryId,e.categoryList,e.page_from]);var h=function(e){var r=e.target.getAttribute("value");t.push({pathname:"/articles/".concat(r)})};return(0,g.jsxs)("div",{className:_().Articles__List,id:"ArticlesList",children:[(0,g.jsx)("div",{className:_().Articles__List__Selected,children:a}),u[0]?(0,g.jsx)("div",{children:u.slice(0).reverse().map((function(t,r){return e.page_from<=r&&r<e.page_to?(0,g.jsxs)("div",{className:_().Articles__List__Article,onClick:h,value:"".concat(t.category,"/").concat(t.id),children:[(0,g.jsx)("div",{className:_().Article_SubCategory,children:t.subCategory}),(0,g.jsx)("div",{className:_().Article__Title,value:"".concat(t.category,"/").concat(t.id),children:(0,g.jsx)("h2",{value:"".concat(t.category,"/").concat(t.id),children:t.title})}),(0,g.jsxs)("div",{className:_().Article__Category_Date,value:"".concat(t.category,"/").concat(t.id),children:[(0,g.jsx)("div",{className:_().Article__Category,value:"".concat(t.category,"/").concat(t.id),children:t.category}),(0,g.jsx)("div",{className:_().Article__Date,value:"".concat(t.category,"/").concat(t.id),children:"\n                      ".concat(t.date.getFullYear(),"\ub144\n                      ").concat(t.date.getMonth()+1,"\uc6d4\n                      ").concat(t.date.getDate(),"\uc77c\n                    ")})]})]},r):""}))}):(0,g.jsx)("div",{children:"\uac8c\uc2dc\uae00\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."}),(0,g.jsx)(y,{article_count:u.length})]})},f=r(9026),v=r(545),A=r.n(v),p=r(2e3),m=r.n(p),C=r(4567);var x=function(){var t=(0,o.useRouter)(),e=(0,i.useContext)(s.h).dispatch,r=(0,i.useState)(!0),n=r[0],c=r[1],l=i.useCallback((function(t){if(!n&&window.innerWidth>960){var e=document.querySelector("#ArticleDetail_left"),r=document.querySelector("#Article_Category"),i=document.querySelector("#ArticlesList");t&&(e.style.transition="0s",r.style.transition="0s"),e.style.width="13%",r.style.width="10%",setTimeout((function(){e.style.transition="1s",r.style.transition="1s",e.style.width="20%",r.style.width="12%",i.style.padding="20px 50px"}),100)}}),[n]);return(0,i.useEffect)((function(){e({type:"GET_ARTICLES"}),c(!1),C.Z.visited({url:"https://parkjeongwoong.github.io"+t.asPath,who:t.asPath.split("who=")[1]})}),[e,t.asPath]),(0,i.useEffect)((function(){l()}),[l]),(0,g.jsxs)("div",{children:[(0,g.jsx)(f.Z,{description:"\uc548\ub155\ud558\uc138\uc694. \uac1c\ubc1c\uc790 \ubc15\uc815\uc6c5\uc758 \ube14\ub85c\uadf8\uc785\ub2c8\ub2e4. Hi! This is Park Jeongwoong's GitHub Blog.",title:"Articles",siteTitle:"\uc6c5's \ube14\ub85c\uadf8"}),(0,g.jsx)("main",{children:n?(0,g.jsx)("div",{className:A().loader,children:(0,g.jsx)("span",{className:A().loader_text,children:"Loading..."})}):(0,g.jsxs)("div",{className:m().Articles,children:[(0,g.jsx)("div",{className:m().Articles__left,id:"ArticleDetail_left",children:(0,g.jsx)(a.Z,{moveList:l})}),(0,g.jsx)("div",{className:m().Articles__right,children:(0,g.jsx)(h,{})})]})})]})}},6203:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles",function(){return r(2753)}])},9098:function(t){t.exports={Pagination__List:"Article__Pagination_Pagination__List__3CC6n",Pagination__DefaultPage:"Article__Pagination_Pagination__DefaultPage__Hrk26",Pagination__Page:"Article__Pagination_Pagination__Page__2Fmwn"}},2187:function(t){t.exports={Articles__Category:"Articles__Category_Articles__Category__1_NlT",Category__Mobile:"Articles__Category_Category__Mobile__1pUPc",Category__Button:"Articles__Category_Category__Button__3V-jx",SubCategory__Button:"Articles__Category_SubCategory__Button__2yT_1",Category__Div:"Articles__Category_Category__Div__1BHtl"}},4765:function(t){t.exports={Articles__List:"Articles__List_Articles__List__2kDaU",Articles__List__Selected:"Articles__List_Articles__List__Selected__3uc9r",Articles__List__Article:"Articles__List_Articles__List__Article__20nrI",Article__Category_Date:"Articles__List_Article__Category_Date__1AVcd",Article_SubCategory:"Articles__List_Article_SubCategory__1D0Tp",Article__Date:"Articles__List_Article__Date__3MvIL",Article__Title:"Articles__List_Article__Title__36lUc",Article__Category:"Articles__List_Article__Category__1pIR8"}},545:function(t){t.exports={link_tag:"globalStyles_link_tag__1lrYr",loader:"globalStyles_loader__29zgS"}},2e3:function(t){t.exports={Articles:"Articles_Articles__1wA5T",Articles__left:"Articles_Articles__left__2MxIY",Articles__right:"Articles_Articles__right__1r7J-"}}},function(t){t.O(0,[862,774,888,179],(function(){return e=6203,t(t.s=e);var e}));var e=t.O();_N_E=e}]);