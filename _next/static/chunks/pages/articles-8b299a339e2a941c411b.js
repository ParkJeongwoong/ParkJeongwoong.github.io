(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{5219:function(t,e,r){"use strict";var i=r(7294),n=r(46),c=r(1163),a=r(2187),s=r.n(a),o=r(4567),l=r(5893);e.Z=function(t){var e=t.moveList,r=(0,c.useRouter)(),a=(0,i.useContext)(n.h),_=a.value,u=a.dispatch,d=_.articles,g=function(t){e?e(!0):r.push({pathname:"/articles"});var i=t.target.getAttribute("value").split("_");u({type:"SELECT_CATEGORY",value:i}),u({type:"SELECT_PAGE",value:0}),h("OnlyClose")},h=function(t){var e,r,i=document.querySelectorAll("#Article_Category > div");i[i.length-1].style["font-weight"]?(e="",r="none"):"OnlyClose"!=t&&(e="bold",r="inline"),i[i.length-1].style["font-weight"]=e;for(var n=0;n<i.length-1;n++)i[n].style.display=r},y=function(){var t=document.querySelector("#Search_Input").value;e?e(!0):r.push({pathname:"/articles"}),t.length?(o.Z.searchArticle({word:t},(function(e){u({type:"SEARCH_ARTICLES",value:{word:t,articleList:e.data}})}),(function(t){return console.log(t)})),u({type:"SELECT_CATEGORY",value:["-2"]})):(u({type:"SELECT_CATEGORY",value:["-1"]}),u({type:"SELECT_PAGE",value:0})),h("OnlyClose")},A=function(t){"Enter"==t.key&&y()};return(0,l.jsxs)("div",{className:s().Articles__Category,id:"Article_Category",children:[(0,l.jsx)("h1",{children:"Articles"}),(0,l.jsxs)("form",{className:s().Search__Form,onSubmit:A,children:[(0,l.jsx)("input",{type:"text",id:"Search_Input",placeholder:"search",className:s().Search__Input,onKeyPress:A}),(0,l.jsx)("input",{className:s().dummy}),(0,l.jsx)("button",{type:"button",className:s().Search__Button,onClick:y})]}),(0,l.jsx)("div",{className:s().Category__Div,children:(0,l.jsx)("div",{className:s().Category__Button,onClick:g,value:"-1",children:"\uc804\uccb4\ubcf4\uae30"})}),d.categoryList.map((function(t,e){return(0,l.jsxs)("div",{className:s().Category__Div,children:[(0,l.jsx)("div",{className:s().Category__Button,onClick:g,value:t.id,children:t.category}),t.subCategory.map((function(e,r){return(0,l.jsx)("div",{className:s().SubCategory__Button,onClick:g,value:"".concat(t.id,"_").concat(r),children:e},r)}))]},e)})),(0,l.jsx)("div",{className:s().Category__Mobile,onClick:h,children:"-"})]})}},9026:function(t,e,r){"use strict";r.d(e,{Z:function(){return c}});var i=r(9008),n=r(5893);function c(t){var e=t.description,r=t.title,c=t.siteTitle;return(0,n.jsxs)(i.default,{children:[(0,n.jsx)("title",{children:"".concat(r," | ").concat(c)}),(0,n.jsx)("meta",{name:"description",content:e}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:title",content:r}),(0,n.jsx)("meta",{property:"og:description",content:e}),(0,n.jsx)("meta",{property:"og:site_name",content:c}),(0,n.jsx)("link",{rel:"icon",href:"/myLogo_transp.png"})]})}},2753:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return b}});var i=r(7294),n=r(5219),c=r(2809);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function s(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=r(46),l=r(1163),_=r(4765),u=r.n(_),d=r(9098),g=r.n(d),h=r(5893);var y=function(t){var e=t.article_count,r=(0,i.useContext)(o.h).dispatch,n=function(t){var e=t.target.getAttribute("value");r({type:"SELECT_PAGE",value:e})};return(0,h.jsx)("div",{className:g().Pagination__List,children:function(t){for(var e=[(0,h.jsx)("div",{className:g().Pagination__DefaultPage,onClick:n,id:"page0",value:0,children:"1"},"0")],r=1;10*r<t;r++)e.push((0,h.jsx)("div",{className:g().Pagination__Page,onClick:n,id:"page".concat(r),value:r,children:r+1},r));return e}(e)})},A=r(4567);function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){(0,c.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v=function(){var t=(0,l.useRouter)(),e=(0,i.useContext)(o.h),r=e.value,n=e.dispatch,c=r.articles,a=(0,i.useState)("\uc804\uccb4\ubcf4\uae30"),_=a[0],d=a[1],g=(0,i.useState)([]),p=g[0],v=g[1],m=(0,i.useState)(!1),C=m[0],x=m[1],j=(0,i.useState)(0),S=j[0],b=j[1];(0,i.useEffect)((function(){if(-1===c.categoryId)d("\uc804\uccb4\ubcf4\uae30"),v(c.categoryList.reduce((function(t,e){return t.push.apply(t,s(e.itemList)),t}),[]).sort((function(t,e){return t.date>e.date?1:-1})));else if(-2!==c.categoryId){var t=c.categoryList.filter((function(t){return t.id===c.categoryId}));-1===c.subCategoryId?(d(t[0].category),v(t[0].itemList)):(d(t[0].subCategory[c.subCategoryId]),v(t[0].itemList.filter((function(e){return e.subCategory===t[0].subCategory[c.subCategoryId]}))))}}),[c.categoryId,c.subCategoryId,c.categoryList,c.page_from]),(0,i.useEffect)((function(){if(-2===c.categoryId){if(c.searchedArticleList&&c.searchedArticleList.length){for(var t=c.searchedArticleList.splice(0,100).map((function(t){return f(f({},t),{},{id:t.categoryId,date:new Date(t.date.substr(0,4)+"-"+t.date.substr(4,2)+"-"+t.date.substr(6,2))})})),e=0;e<t.length;e++){t[e].matchedContent=[];for(var r=t[e].matchWords[0],i=0,n=1;n<t[e].matchWords.length;n++)r&&!t[e].matchWords[n]?(t[e].matchedContent.push({matched:!0,content:t[e].content.slice(i,n)}),i=n):!r&&t[e].matchWords[n]&&(t[e].matchedContent.push({matched:!1,content:t[e].content.slice(i,n)}),i=n),r=t[e].matchWords[n];t[e].matchedContent.push({matched:r,content:t[e].content.slice(i,t[e].matchWords.length)})}v(t),x(!!c.searchedArticleList.length)}else v([]);d('"'+c.searchedWord+'" \uac80\uc0c9\uacb0\uacfc')}}),[c.searchedWord,c.searchedArticleList]);var L=function(e){var r=e.target.getAttribute("value");t.push({pathname:"/articles/".concat(r)})};return(0,h.jsxs)("div",{className:u().Articles__List,id:"ArticlesList",children:[(0,h.jsx)("div",{className:u().Articles__List__Selected,children:_}),p[0]?(0,h.jsx)("div",{children:p.slice(0).reverse().map((function(t,e){return c.page_from<=e&&e<c.page_to?(0,h.jsxs)("div",{className:u().Articles__List__Article,onClick:L,value:"".concat(t.category,"/").concat(t.id),children:[-2==c.categoryId&&t.matchedContent?(0,h.jsxs)("div",{className:u().Article__SearchResult,value:"".concat(t.category,"/").concat(t.id),children:[(0,h.jsx)("h3",{value:"".concat(t.category,"/").concat(t.id),children:t.title}),(0,h.jsx)("div",{className:u().Article__SearchResult_Content,value:"".concat(t.category,"/").concat(t.id),children:t.matchedContent?(0,h.jsx)("div",{children:t.matchedContent.map((function(t,e){var r=t.matched,i=t.content;return r?(0,h.jsx)("b",{children:i},e):(0,h.jsx)("span",{children:i},e)}))}):(0,h.jsx)("div",{children:t.content})})]}):(0,h.jsx)("div",{className:u().Article__Title,value:"".concat(t.category,"/").concat(t.id),children:(0,h.jsx)("h2",{value:"".concat(t.category,"/").concat(t.id),children:t.title})}),(0,h.jsx)("div",{className:u().Article_SubCategory,children:t.subCategory}),(0,h.jsxs)("div",{className:u().Article__Category_Date,value:"".concat(t.category,"/").concat(t.id),children:[(0,h.jsx)("div",{className:u().Article__Category,value:"".concat(t.category,"/").concat(t.id),children:t.category}),(0,h.jsx)("div",{className:u().Article__Date,value:"".concat(t.category,"/").concat(t.id),children:"\n                      ".concat(t.date.getFullYear(),"\ub144\n                      ").concat(t.date.getMonth()+1,"\uc6d4\n                      ").concat(t.date.getDate(),"\uc77c\n                    ")})]})]},e):""}))}):(0,h.jsx)("div",{children:"\uac8c\uc2dc\uae00\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."}),(0,h.jsx)(y,{article_count:p.length}),-2==c.categoryId?(0,h.jsxs)("div",{className:u().Article__SearchAgain,children:[(0,h.jsx)("div",{children:S>0?(0,h.jsx)("span",{className:u().working,onClick:function(){var t=c.searchedWord;A.Z.searchArticle({word:t+"/"+(S-100)},(function(e){b(S-100),n({type:"SEARCH_ARTICLES",value:{word:t,articleList:e.data}})}),(function(t){return console.log(t)}))},children:"\uc774\uc804 \uac80\uc0c9"}):(0,h.jsx)("span",{className:u().not_working,children:"\uc774\uc804 \uac80\uc0c9"})}),(0,h.jsx)("div",{children:C?(0,h.jsx)("span",{className:u().working,onClick:function(){var t=c.searchedWord;A.Z.searchArticle({word:t+"/"+(S+100)},(function(e){b(S+100),n({type:"SEARCH_ARTICLES",value:{word:t,articleList:e.data}})}),(function(t){return console.log(t)}))},children:"\ub2e4\uc74c \uac80\uc0c9"}):(0,h.jsx)("span",{className:u().not_working,children:"\ub2e4\uc74c \uac80\uc0c9"})})]}):(0,h.jsx)("div",{})]})},m=r(9026),C=r(545),x=r.n(C),j=r(2e3),S=r.n(j);var b=function(){var t=(0,l.useRouter)(),e=(0,i.useContext)(o.h),r=e.value,c=e.dispatch,a=r.pageData,s=(0,i.useState)(!0),_=s[0],u=s[1],d=i.useCallback((function(t){if(!_&&window.innerWidth>960){var e=document.querySelector("#ArticleDetail_left"),r=document.querySelector("#Article_Category"),i=document.querySelector("#ArticlesList");t&&(e.style.transition="0s",r.style.transition="0s"),e.style.width="13%",r.style.width="10%",setTimeout((function(){e.style.transition="1s",r.style.transition="1s",e.style.width="20%",r.style.width="12%",i.style.padding="20px 50px"}),100)}}),[_]);return(0,i.useEffect)((function(){c({type:"GET_ARTICLES"}),_&&(A.Z.visited({url:"https://parkjeongwoong.github.io"+t.asPath,who:t.asPath.split("who=")[1],lastPage:a.currentPage}),c({type:"SET_PAGE",value:t.asPath})),u(!1)}),[c,t.asPath,a.currentPage]),(0,i.useEffect)((function(){d()}),[d]),(0,h.jsxs)("div",{children:[(0,h.jsx)(m.Z,{description:"\uc548\ub155\ud558\uc138\uc694. \uac1c\ubc1c\uc790 \ubc15\uc815\uc6c5\uc758 \ube14\ub85c\uadf8\uc785\ub2c8\ub2e4. Hi! This is Park Jeongwoong's GitHub Blog.",title:"Articles",siteTitle:"\uc6c5's \ube14\ub85c\uadf8"}),(0,h.jsx)("main",{children:_?(0,h.jsx)("div",{className:x().loader,children:(0,h.jsx)("span",{className:x().loader_text,children:"Loading..."})}):(0,h.jsxs)("div",{className:S().Articles,children:[(0,h.jsx)("div",{className:S().Articles__left,id:"ArticleDetail_left",children:(0,h.jsx)(n.Z,{moveList:d})}),(0,h.jsx)("div",{className:S().Articles__right,children:(0,h.jsx)(v,{})})]})})]})}},6203:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles",function(){return r(2753)}])},9098:function(t){t.exports={Pagination__List:"Article__Pagination_Pagination__List__3CC6n",Pagination__DefaultPage:"Article__Pagination_Pagination__DefaultPage__Hrk26",Pagination__Page:"Article__Pagination_Pagination__Page__2Fmwn"}},2187:function(t){t.exports={Articles__Category:"Articles__Category_Articles__Category__1_NlT",Category__Mobile:"Articles__Category_Category__Mobile__1pUPc",Category__Button:"Articles__Category_Category__Button__3V-jx",SubCategory__Button:"Articles__Category_SubCategory__Button__2yT_1",Search__Form:"Articles__Category_Search__Form__3bzQT",Search__Input:"Articles__Category_Search__Input__3s6WC",Search__Button:"Articles__Category_Search__Button__15TWj",dummy:"Articles__Category_dummy__1pJ_m",Category__Div:"Articles__Category_Category__Div__1BHtl"}},4765:function(t){t.exports={Articles__List:"Articles__List_Articles__List__2kDaU",Articles__List__Selected:"Articles__List_Articles__List__Selected__3uc9r",Articles__List__Article:"Articles__List_Articles__List__Article__20nrI",Article__Category_Date:"Articles__List_Article__Category_Date__1AVcd",Article_SubCategory:"Articles__List_Article_SubCategory__1D0Tp",Article__Date:"Articles__List_Article__Date__3MvIL",Article__SearchResult:"Articles__List_Article__SearchResult__3MVq4",Article__SearchAgain:"Articles__List_Article__SearchAgain__2BKko",working:"Articles__List_working__1Yn7x",not_working:"Articles__List_not_working__1ufLi",Article__Title:"Articles__List_Article__Title__36lUc",Article__Category:"Articles__List_Article__Category__1pIR8",Article__SearchResult_Content:"Articles__List_Article__SearchResult_Content__29RYO"}},545:function(t){t.exports={link_tag:"globalStyles_link_tag__1lrYr",loader:"globalStyles_loader__29zgS",content_origin:"globalStyles_content_origin__2Hy_x"}},2e3:function(t){t.exports={Articles:"Articles_Articles__1wA5T",Articles__left:"Articles_Articles__left__2MxIY",Articles__right:"Articles_Articles__right__1r7J-"}},9008:function(t,e,r){t.exports=r(639)},1163:function(t,e,r){t.exports=r(4651)}},function(t){t.O(0,[774,888,179],(function(){return e=6203,t(t.s=e);var e}));var e=t.O();_N_E=e}]);