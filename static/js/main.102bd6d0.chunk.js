(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){var i={"./cs":33,"./cs.js":33,"./develop":34,"./develop.js":34,"./develop/20210826_GitHubBlog_require.md":108,"./develop/20210901_GitHubBlog.md":109,"./develop/markdown_test.md":110};function a(e){var t=r(e);return c(t)}function r(e){if(!c.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=r,e.exports=a,a.id=107},108:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/20210826_GitHubBlog_require.7ffe9642.md"},109:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/20210901_GitHubBlog.70e20085.md"},110:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/markdown_test.defbec95.md"},33:function(e,t,c){"use strict";c.r(t);t.default=[]},34:function(e,t,c){"use strict";c.r(t);var i=[{category:"Develop",id:0,title:"test",date:Date("2021-08-25,20:30"),content:"store/article_data/develop/markdown_test.md"},{category:"Develop",id:1,title:"[GitHub Blog \uac1c\ubc1c\uae30]Markdown \uc801\uc6a9 \ubc0f Require \uc0ac\uc6a9(20210826)",date:Date("2021-08-26,01:16"),content:"store/article_data/develop/20210826_GitHubBlog_require.md"},{category:"Develop",id:2,title:"[GitHub Blog \uac1c\ubc1c\uae30]\uc815\ub9ac\ud560 \ub0b4\uc6a9 \ubaa9\ub85d(20210901)",date:Date("2021-09-01,22:52"),content:"store/article_data/develop/20210901_GitHubBlog.md"}];t.default=i},381:function(e,t,c){},382:function(e,t,c){},383:function(e,t,c){"use strict";c.r(t);var i=c(2),a=c.n(i),r=c(68),n=c.n(r),s=(c(87),c(88),c(20)),l=c(9),o=(c(89),c(1));var d=function(){return Object(o.jsxs)("div",{className:"Footer",children:[Object(o.jsxs)("div",{className:"Footer__github",children:["Github : ",Object(o.jsx)("a",{href:"https://github.com/ParkJeongwoong",children:"ParkJeongwoong"})]}),Object(o.jsxs)("div",{className:"Footer__email",children:["Contact : ",Object(o.jsx)("span",{onClick:function(){var e=document.createElement("textarea");e.value="dvlprjw@gmail.com",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),alert("Copied!")},children:"dvlprjw@gmail.com"})]})]})};c(91);var j=function(){return Object(o.jsxs)("div",{className:"Header",children:[Object(o.jsx)(s.b,{to:"/",children:"Home"}),Object(o.jsx)(s.b,{to:"/profile",children:"Profile"}),Object(o.jsx)(s.b,{to:"/articles",children:"Articles"}),Object(o.jsx)(s.b,{to:"/archives",children:"Archives"})]})},u=c(11);c(99),c(100);function b(e){var t=e.images,c=e.archiveId,a=e.itemIdx,r=Object(i.useState)(0),n=Object(u.a)(r,2),s=n[0],l=n[1];return Object(i.useEffect)((function(){document.querySelectorAll("#archive_".concat(c,"_").concat(a," .ImgCarousel-image")).forEach((function(e){e.style.left="".concat(s,"vw")}));var e=document.querySelector("#archive_".concat(c,"_").concat(a," .carouselArrow__right")),i=document.querySelector("#archive_".concat(c,"_").concat(a," .carouselArrow__left"));t.length>1?s>=0?(i.style.display="none",e.style.display="inline"):s<=-70*(t.length-1)?(e.style.display="none",i.style.display="inline"):(e.style.display="inline",i.style.display="inline"):(e.style.display="none",i.style.display="none")}),[s,t.length,c,a]),Object(o.jsxs)("div",{className:"ArchivedItem__ImgCarousel",children:[Object(o.jsx)("div",{className:"ImgCarousel-images",children:t.map((function(e,t){return Object(o.jsx)("img",{className:"ImgCarousel-image",src:e,alt:"archive_img"},t)}))}),Object(o.jsx)("img",{className:"carouselArrow carouselArrow__left",src:"/images/left-arrow.png",alt:"left_arrow",onClick:function(){s<0&&l(s+70)}}),Object(o.jsx)("img",{className:"carouselArrow carouselArrow__right",src:"/images/right-arrow.png",alt:"right_arrow",onClick:function(){s>-70*(t.length-1)&&l(s-70)}})]})}var h=function(e){var t=e.archive;return Object(o.jsxs)("div",{className:"Archived-item",id:"archive_".concat(t.id),children:[Object(o.jsxs)("h3",{className:"Archived-item__title",onClick:function(e){var t=e.target.getAttribute("value"),c=Array.from(document.querySelectorAll("#".concat(t," .Archived-item__detail"))).reduce((function(e,t){return e+t.scrollHeight+5}),0),i=document.querySelector(".Archived-item--show").style.height;document.querySelector("#".concat(t," .Archived-item--show")).style.height=i?null:"".concat(c+1,"px")},value:"archive_".concat(t.id),children:["- ",t.title]}),Object(o.jsx)("div",{className:"Archived-item--show",children:t.details.map((function(e,c){return Object(o.jsxs)("div",{className:"Archived-item__detail",id:"archive_".concat(t.id,"_").concat(c),children:[Object(o.jsx)("div",{className:"Archived-item__date",children:e.date}),Object(o.jsx)(b,{images:e.images,archiveId:t.id,itemIdx:c}),Object(o.jsx)("div",{className:"Archived-item__content",children:e.content.split("\n").map((function(e,t){return Object(o.jsx)("div",{children:e},t)}))}),Object(o.jsx)("hr",{})]},c)}))})]})},v=(c(101),c(8)),m={profile_img:"/images/profile.jpg",summary:"Yonsei Univ\nSK Hynix\nSSAFY"},O=c(33),g={categoryId:-1,categoryList:[{id:0,category:"Develop",itemList:c(34).default},{id:1,category:"CS",itemList:O.default},{id:2,category:"Algorithm",itemList:[]},{id:3,category:"Web",itemList:[]},{id:4,category:"Etc",itemList:[]}]},f=[{id:0,title:"Github Blog",details:[{id:0,date:"2021-08-24",images:["/archives/blog/0.png","/archives/blog/1.png"],content:"\ube14\ub85c\uadf8 \uac1c\ubc1c \uc2dc\uc791\n\uc0ac\uc6a9 \uae30\uc220: React js"},{id:1,date:"2021-08-25",images:["/archives/blog/2.png","/archives/blog/3.png","/archives/blog/4.png"],content:"Home, Archives \uc815\ub9ac \ubc0f Footer \uc704\uce58 \uc870\uc815"},{id:2,date:"2021-08-25",images:["/archives/blog/5.png","/archives/blog/6.png","/archives/blog/7.png","/archives/blog/8.png"],content:"Articles \uad6c\ud604\nLocal\uc758 Markdown File\uc744 \ubd88\ub7ec\uc640\uc11c \ucd9c\ub825\ud558\ub294 \ubc29\uc2dd \uc0ac\uc6a9"},{id:3,date:"2021-08-30",images:[],content:"GitHub \ubc30\ud3ec \uc2dc url \uc811\uadfc\uc774 \uc548 \ub418\ub294 \ubb38\uc81c \ud574\uacb0\n\ucc38\uc870: https://iamsjy17.github.io/react/2018/11/04/githubpage-SPA.html\nhttps://github.com/rafgraph/spa-github-pages"}]},{id:1,title:"BITZ",details:[{id:0,date:"2021-07.05 ~ 2021-08-16",images:["/archives/bitz/0.jpg","/archives/bitz/1.jpg"],content:"\ub18d\uad6c \ud53d\uc5c5 \uac8c\uc784 \ud50c\ub7ab\ud3fc BITZ \uc81c\uc791"}]},{id:1,title:"Intern",details:[{id:0,date:"2021-08.17 ~ 2021-09-10",images:[],content:"\ub2e4\uc6b0\uae30\uc220 \uae08\uc735\uac1c\ubc1c \uc9c1\ubb34 (\ud0a4\uc6c0\uc99d\uad8c) \uc778\ud134"}]}],x={home:{},profile:{},articles:{},archives:[]},p=Object(i.createContext)(x),_=p.Provider,y=function(e){var t=e.children,c=Object(i.useReducer)((function(e,t){switch(t.type){case"GET_HOME":var c=m;return Object(v.a)(Object(v.a)({},e),{},{home:c});case"GET_PROFILE":return Object(v.a)(Object(v.a)({},e),{},{profile:{test2:"\uc5c5\ub370\uc774\ud2b8"}});case"GET_ARTICLES":var i=g;return Object(v.a)(Object(v.a)({},e),{},{articles:i});case"GET_ARCHIVES":var a=f;return Object(v.a)(Object(v.a)({},e),{},{archives:a});case"SELECT_CATEGORY":var r=t.value;return Object(v.a)(Object(v.a)({},e),{},{articles:Object(v.a)(Object(v.a)({},e.articles),{},{categoryId:r})});default:throw new Error}}),x),a=Object(u.a)(c,2),r=a[0],n=a[1];return Object(o.jsx)(_,{value:{value:r,dispatch:n},children:t})};var A=function(){var e=Object(i.useContext)(p),t=e.value,c=e.dispatch,a=t.archives,r=Object(i.useState)(!0),n=Object(u.a)(r,2),s=n[0],l=n[1];return Object(i.useEffect)((function(){c({type:"GET_ARCHIVES"}),l(!1)}),[c]),Object(o.jsx)("div",{children:s?Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(o.jsxs)("div",{className:"Archives",children:[Object(o.jsx)("h1",{children:"Archives"}),Object(o.jsx)("div",{className:"Archives__List",children:a.map((function(e,t){return Object(o.jsx)("div",{children:Object(o.jsx)(h,{archive:e})},t)}))})]})})};c(102),c(103);var N=function(){var e=Object(i.useContext)(p),t=e.value,c=e.dispatch,a=t.articles,r=function(e){c({type:"SELECT_CATEGORY",value:parseInt(e.target.getAttribute("value"))})};return Object(o.jsxs)("div",{className:"Articles__Category",children:[Object(o.jsx)("div",{className:"Category__Button",onClick:r,value:"-1",children:"\uc804\uccb4\ubcf4\uae30"}),a.categoryList.map((function(e,t){return Object(o.jsx)("div",{className:"Category__Button",onClick:r,value:e.id,children:e.category},t)}))]})},C=c(7);c(104);var E=function(){var e=Object(l.useHistory)(),t=Object(i.useContext)(p).value.articles,c=Object(i.useState)("\uc804\uccb4\ubcf4\uae30"),a=Object(u.a)(c,2),r=a[0],n=a[1],s=Object(i.useState)([]),d=Object(u.a)(s,2),j=d[0],b=d[1];Object(i.useEffect)((function(){if(-1===t.categoryId)n("\uc804\uccb4\ubcf4\uae30"),b(t.categoryList.reduce((function(e,t){return e.push.apply(e,Object(C.a)(t.itemList)),e}),[]));else{var e=t.categoryList.filter((function(e){return e.id===t.categoryId}));n(e[0].category),b(e[0].itemList)}}),[t.categoryId,t.categoryList]);var h=function(t){var c=t.target.getAttribute("value");e.push("/articles/".concat(c))};return Object(o.jsxs)("div",{className:"Articles__List",children:[Object(o.jsx)("div",{className:"Articles__List--Selected",children:r}),j[0]?Object(o.jsx)("div",{children:j.map((function(e,t){return Object(o.jsxs)("div",{className:"Articles__List--Article",onClick:h,value:"".concat(e.category,"/").concat(e.id),children:[Object(o.jsx)("div",{className:"Article__Title",value:"".concat(e.category,"/").concat(e.id),children:Object(o.jsx)("h1",{value:"".concat(e.category,"/").concat(e.id),children:e.title})}),Object(o.jsxs)("div",{className:"Article__Category-Date",value:"".concat(e.category,"/").concat(e.id),children:[Object(o.jsx)("div",{className:"Article__Category",value:"".concat(e.category,"/").concat(e.id),children:e.category}),Object(o.jsxs)("div",{className:"Article__Date",children:["value=","".concat(e.category,"/").concat(e.id),"\n                ".concat(e.date.split(" ")[2],"\n                ").concat(e.date.split(" ")[1],"\n                ").concat(e.date.split(" ")[3],"\n              ")]})]})]},t)}))}):Object(o.jsx)("div",{children:"\uac8c\uc2dc\uae00\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})]})};var w=function(){var e=Object(i.useContext)(p).dispatch,t=Object(i.useState)(!0),c=Object(u.a)(t,2),a=c[0],r=c[1];return Object(i.useEffect)((function(){e({type:"GET_ARTICLES"}),r(!1)}),[e]),Object(o.jsx)("div",{children:a?Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(o.jsxs)("div",{className:"Articles",children:[Object(o.jsxs)("div",{className:"Articles__left",children:[Object(o.jsx)("h1",{children:"Articles"}),Object(o.jsx)(N,{})]}),Object(o.jsx)("div",{className:"Articles__right",children:Object(o.jsx)(E,{})})]})})},L=(c(105),c(54)),S=c(79),I=c(80),k=c(394),H=c(393),T=(c(106),["node","inline","className","children"]),G=["node","children"];var R=function(e){var t=e.category,a=e.articleId,r=Object(i.useContext)(p),n=r.value,s=r.dispatch,l=n.articles,d=Object(i.useState)(!0),j=Object(u.a)(d,2),b=j[0],h=j[1],m=Object(i.useState)(""),O=Object(u.a)(m,2),g=O[0],f=O[1],x=Object(i.useState)(""),_=Object(u.a)(x,2),y=_[0],A=_[1];return Object(i.useEffect)((function(){s({type:"GET_ARTICLES"})}),[s]),Object(i.useEffect)((function(){l.categoryList.forEach((function(e){e.category===t&&e.itemList.forEach((function(e){e.id===parseInt(a)&&A(e.content)}))}))}),[l.categoryList,a,t]),Object(i.useEffect)((function(){if(y){var e=c(107)("./".concat(y.split("/")[2],"/").concat(y.split("/")[3]));fetch(e.default).then((function(e){return e.text()})).then((function(e){f(e)})),h(!1)}}),[g,y]),Object(o.jsx)("div",{children:b?Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(o.jsx)("div",{className:"MarkdownRenderer",children:Object(o.jsx)(S.a,{remarkPlugins:[I.a],children:g,components:{code:function(e){e.node;var t=e.inline,c=e.className,i=e.children,a=Object(L.a)(e,T),r=/language-(\w+)/.exec(c||"");return t?Object(o.jsx)("code",Object(v.a)(Object(v.a)({style:{background:"yellow"}},a),{},{children:i})):r?Object(o.jsx)(k.a,Object(v.a)({children:String(i).replace(/\n$/,""),style:H.a,language:r[1],PreTag:"div"},a)):Object(o.jsx)(k.a,Object(v.a)({children:String(i).replace(/\n$/,""),style:H.a,language:"textile",PreTag:"div"},a))},blockquote:function(e){e.node;var t=e.children,c=Object(L.a)(e,G);return Object(o.jsx)("blockquote",Object(v.a)(Object(v.a)({style:{background:"#f0f0f0"}},c),{},{children:t}))}}})})})};var B=function(e){var t=e.match;return Object(o.jsxs)("div",{className:"ArticleDetail",children:[Object(o.jsxs)("div",{className:"ArticleDetail__left",children:[Object(o.jsx)("h1",{children:"Articles"}),Object(o.jsx)(N,{})]}),Object(o.jsx)("div",{className:"ArticleDetail__right",children:Object(o.jsx)(R,{category:t.url.split("/")[2],articleId:t.url.split("/")[3]})})]})},D=c(78);c(381);var F=function(){var e=Object(i.useContext)(p),t=e.value,c=e.dispatch,a=t.home,r=Object(i.useState)(!0),n=Object(u.a)(r,2),s=n[0],l=n[1];return Object(i.useEffect)((function(){c({type:"GET_HOME"}),l(!1)}),[c]),Object(o.jsx)("div",{children:s?Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(o.jsxs)("div",{className:"Home",children:[Object(o.jsx)("div",{className:"Home__left",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"Home__profile-img",children:Object(o.jsx)("img",{src:a.profile_img,alt:"profile"})}),Object(o.jsxs)("div",{className:"Home__profile-content",children:[Object(o.jsx)("h3",{children:"\ubc15\uc815\uc6c5"}),Object(o.jsx)("div",{children:a.summary.split("\n").map((function(e,t){return Object(o.jsx)("div",{children:e},t)}))})]})]})}),Object(o.jsx)("div",{className:"Home__right",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"\uc548\ub155\ud558\uc138\uc694! \uac1c\ubc1c\uc790 \ubc15\uc815\uc6c5\uc785\ub2c8\ub2e4!"}),Object(o.jsx)("hr",{}),Object(o.jsx)("p",{children:"\uc18c\uac1c\uae00"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"\uacbd\ub825 \uc0ac\ud56d"}),Object(o.jsx)(D.Link,{to:"/profile",children:"\uc790\uc138\ud788 \ubcf4\ub7ec\uac00\uae30"})]})]})})]})})};var P=function(){return Object(o.jsx)("div",{className:"Profile",children:"Profile"})};c(382);var q=function(){return Object(o.jsx)("div",{className:"NotFound",children:"Page Not Found"})};var M=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{className:"App__Content",children:Object(o.jsxs)(s.a,{basename:"/",children:[Object(o.jsx)(j,{}),Object(o.jsxs)(l.Switch,{children:[Object(o.jsx)(l.Route,{path:"/",exact:!0,component:F}),Object(o.jsx)(l.Route,{path:"/profile",exact:!0,component:P}),Object(o.jsx)(l.Route,{path:"/articles",exact:!0,component:w}),Object(o.jsx)(l.Route,{path:"/articles/:category/:articleId",exact:!0,component:B}),Object(o.jsx)(l.Route,{path:"/archives",exact:!0,component:A}),Object(o.jsx)(l.Route,{path:"*",component:q})]})]})}),Object(o.jsx)(d,{})]})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,395)).then((function(t){var c=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),i(e),a(e),r(e),n(e)}))};n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(y,{children:Object(o.jsx)(M,{})})}),document.getElementById("root")),J()},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},91:function(e,t,c){},99:function(e,t,c){}},[[383,1,2]]]);
//# sourceMappingURL=main.102bd6d0.chunk.js.map