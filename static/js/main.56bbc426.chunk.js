(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){var a={"./cs":33,"./cs.js":33,"./cs/01_Data Link Control.md":108,"./cs/02_HDLC.md":109,"./develop":34,"./develop.js":34,"./develop/20210826_GitHubBlog_require.md":110,"./develop/20210901_GitHubBlog.md":111,"./develop/20210927_GitHubBlog.md":112,"./develop/markdown_test.md":113};function i(e){var t=n(e);return c(t)}function n(e){if(!c.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=n,e.exports=i,i.id=107},108:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/01_Data Link Control.63eff5f2.md"},109:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/02_HDLC.4bf4a7c9.md"},110:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/20210826_GitHubBlog_require.47b346ed.md"},111:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/20210901_GitHubBlog.fb9dae09.md"},112:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/20210927_GitHubBlog.388cd027.md"},113:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/markdown_test.b44a546d.md"},33:function(e,t,c){"use strict";c.r(t);var a=[{category:"CS",id:0,title:"Data Link Control",date:new Date("2021-09-02,20:25"),content:"store/article_data/cs/01_Data Link Control.md"},{category:"CS",id:1,title:"High-level Data Link Control",date:new Date("2021-09-04,19:15"),content:"store/article_data/cs/02_HDLC.md"}];t.default=a},34:function(e,t,c){"use strict";c.r(t);var a=[{category:"Develop",id:0,title:"test",date:new Date("2021-08-25,20:30"),content:"store/article_data/develop/markdown_test.md"},{category:"Develop",id:1,title:"[GitHub Blog \uac1c\ubc1c\uae30] Markdown \uc801\uc6a9 \ubc0f Require \uc0ac\uc6a9(20210826)",date:new Date("2021-08-26,01:16"),content:"store/article_data/develop/20210826_GitHubBlog_require.md"},{category:"Develop",id:2,title:"[GitHub Blog \uac1c\ubc1c\uae30] \uc815\ub9ac\ud560 \ub0b4\uc6a9 \ubaa9\ub85d(20210901)",date:new Date("2021-09-01,22:52"),content:"store/article_data/develop/20210901_GitHubBlog.md"},{category:"Develop",id:3,title:"[GitHub Blog \uac1c\ubc1c\uae30] \uac1c\ubc1c\uc77c\uc9c0(20210927)",date:new Date("2021-09-27,21:22"),content:"store/article_data/develop/20210927_GitHubBlog.md"}];t.default=a},384:function(e,t,c){},385:function(e,t,c){},386:function(e,t,c){},387:function(e,t,c){"use strict";c.r(t);var a=c(2),i=c.n(a),n=c(68),r=c.n(n),s=(c(87),c(88),c(18)),l=c(9),o=(c(89),c(1));var d=function(){return Object(o.jsxs)("div",{className:"Footer",children:[Object(o.jsxs)("div",{className:"Footer__github",children:["Github : ",Object(o.jsx)("a",{href:"https://github.com/ParkJeongwoong",children:"ParkJeongwoong"})]}),Object(o.jsxs)("div",{className:"Footer__email",children:["Contact : ",Object(o.jsx)("span",{onClick:function(){var e=document.createElement("textarea");e.value="dvlprjw@gmail.com",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),alert("Copied!")},children:"dvlprjw@gmail.com"})]})]})};c(91);var j=function(){return Object(o.jsxs)("div",{className:"Header",children:[Object(o.jsx)("div",{className:"Header__styling"}),Object(o.jsx)(s.b,{to:"/",className:"Header__word",children:"Home"}),Object(o.jsx)(s.b,{to:"/profile",className:"Header__word",children:"Profile"}),Object(o.jsx)(s.b,{to:"/articles",className:"Header__word",children:"Articles"}),Object(o.jsx)(s.b,{to:"/archives",className:"Header__word",children:"Archives"}),Object(o.jsx)("div",{className:"Header__styling--Reverse"})]})},u=c(10);c(99),c(100);function h(e){var t=e.images,c=e.archiveId,i=e.itemIdx,n=Object(a.useState)(0),r=Object(u.a)(n,2),s=r[0],l=r[1];return Object(a.useEffect)((function(){document.querySelectorAll("#archive_".concat(c,"_").concat(i," .ImgCarousel-image")).forEach((function(e){e.style.left="".concat(s,"vw")}));var e=document.querySelector("#archive_".concat(c,"_").concat(i," .carouselArrow__right")),a=document.querySelector("#archive_".concat(c,"_").concat(i," .carouselArrow__left"));t.length>1?s>=0?(a.style.display="none",e.style.display="inline"):s<=-70*(t.length-1)?(e.style.display="none",a.style.display="inline"):(e.style.display="inline",a.style.display="inline"):(e.style.display="none",a.style.display="none")}),[s,t.length,c,i]),Object(o.jsxs)("div",{className:"ArchivedItem__ImgCarousel",children:[Object(o.jsx)("div",{className:"ImgCarousel-images",children:t.map((function(e,t){return Object(o.jsx)("img",{className:"ImgCarousel-image",src:e,alt:"archive_img"},t)}))}),Object(o.jsx)("img",{className:"carouselArrow carouselArrow__left",src:"/images/left-arrow.png",alt:"left_arrow",onClick:function(){s<0&&l(s+70)}}),Object(o.jsx)("img",{className:"carouselArrow carouselArrow__right",src:"/images/right-arrow.png",alt:"right_arrow",onClick:function(){s>-70*(t.length-1)&&l(s-70)}})]})}var b=function(e){var t=e.archive;return Object(o.jsxs)("div",{className:"Archived-item",id:"archive_".concat(t.id),children:[Object(o.jsxs)("h3",{className:"Archived-item__title",onClick:function(e){var t=e.target.getAttribute("value"),c=Array.from(document.querySelectorAll("#".concat(t," .Archived-item__detail"))).reduce((function(e,t){return e+t.scrollHeight+5}),0),a=document.querySelector("#".concat(t," .Archived-item--show")).style.height;document.querySelector("#".concat(t," .Archived-item--show")).style.height=a?null:"".concat(c+1,"px")},value:"archive_".concat(t.id),children:["- ",t.title]}),Object(o.jsx)("div",{className:"Archived-item--show",children:t.details.map((function(e,c){return Object(o.jsxs)("div",{className:"Archived-item__detail",id:"archive_".concat(t.id,"_").concat(c),children:[Object(o.jsx)("div",{className:"Archived-item__date",children:e.date}),Object(o.jsx)(h,{images:e.images,archiveId:t.id,itemIdx:c}),Object(o.jsx)("div",{className:"Archived-item__content",children:e.content.split("\n").map((function(e,t){return Object(o.jsx)("div",{children:e},t)}))}),Object(o.jsx)("hr",{})]},c)}))})]})},m=(c(101),c(8)),g={profile_img:"/images/profile1.jpg",summary:"Yonsei Univ.\n\tMaterial Science & Engineering\nKATUSA, USFK\n\tUnited States Forces Korea\nSK Hynix\n\tNAND Flash CMP Engineering\nSSAFY\n\tSamsung SW Academy For Youth\nDAOU Tech.\n: KIWOOM Securities\n\tFinancial SW Developer",welcome_word:"\uc548\ub155\ud558\uc138\uc694! \uae08\uc735 IT \uac1c\ubc1c\uc790 \ubc15\uc815\uc6c5\uc785\ub2c8\ub2e4!",introduction:"\uacf5\ubd80\ud55c \ub0b4\uc6a9\uc744 \uae30\ub85d\ud558\uace0 \ud3ec\ud2b8\ud3f4\ub9ac\uc624\ub97c \uc815\ub9ac\ud558\ub294 \uac1c\uc778 \ube14\ub85c\uadf8\uc785\ub2c8\ub2e4.\n\ub04a\uc784\uc5c6\uc774 \ubc30\uc6b0\uace0 \uc131\uc7a5\ud558\ub294 \uac83\uc744 \uc990\uaca8 \ubc18\ub3c4\uccb4 \uc5d4\uc9c0\ub2c8\uc5b4\uc5d0\uc11c \uac1c\ubc1c\uc790\ub85c \uc804\uc9c1\ud588\uc2b5\ub2c8\ub2e4.\n\ud6a8\uc728\uc801\uc774\uace0 \uae54\ub054\ud55c \ucf54\ub4dc\uc5d0 \uad00\uc2ec\uc774 \ub9ce\uc2b5\ub2c8\ub2e4.\n\ud53c\uc544\ub178, \uc6b4\ub3d9, \uc5ec\ud589\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4."},O={introduction:"Web \uae30\uc220\uc5d0 \uad00\uc2ec\uc744 \uac00\uc9c0\uace0 \uc788\ub294 \uae08\uc735 IT \uac1c\ubc1c\uc790\uc785\ub2c8\ub2e4.\n\uc2e0\uc18c\uc7ac\uacf5\ud559\uc744 \uc804\uacf5\ud558\uace0 \ubc18\ub3c4\uccb4 \uae30\uc5c5\uc758 \uc5d4\uc9c0\ub2c8\uc5b4\ub85c \uadfc\ubb34\ud588\uc2b5\ub2c8\ub2e4.\n\ubc30\uc6b0\uace0 \uc131\uc7a5\ud558\ub294 \uac83\uc744 \uc990\uaca8 \ubc18\ub3c4\uccb4 \uc5d4\uc9c0\ub2c8\uc5b4\uc5d0\uc11c \uac1c\ubc1c\uc790\ub85c \uc804\uc9c1\ud588\uc2b5\ub2c8\ub2e4.",tech_stack:{frontend:["/tech_stack/javascript.png","/tech_stack/react.png","/tech_stack/vue.png"],backend:["/tech_stack/python.png","/tech_stack/django.png","/tech_stack/java.png"],version_control:["/tech_stack/git.png"],studying:["/tech_stack/spring.png","/tech_stack/mysql.png","/tech_stack/cpp.png"]},career:[{name:"\ub2e4\uc6b0\uae30\uc220 - \ud0a4\uc6c0\uc99d\uad8c",content:"\uae08\uc735\uac1c\ubc1c\uc9c1\ubb34 (2021-\ud604\uc7ac)"},{name:"\uc0bc\uc131 \uccad\ub144 SW \uc544\uce74\ub370\ubbf8",content:"Web \uac1c\ubc1c \uad50\uc721 (2021)"},{name:"SK Hynix",content:"NAND Flash CMP \uacf5\uc815\uae30\uc220\ud300 \uadfc\ubb34 (2019)"},{name:"KATUSA",content:"\uc8fc\ud55c\ubbf8\uad70\uc0ac\ub839\ubd80 \uc791\uc804\ucc38\ubaa8\ubd80 \ubcf5\ubb34 (2015-2017)"},{name:"\uc5f0\uc138\ub300\ud559\uad50",content:"\uc2e0\uc18c\uc7ac\uacf5\ud559 \uc804\uacf5 (2013-2019)"}]},v=c(33),_={categoryId:-1,categoryList:[{id:0,category:"Develop",itemList:c(34).default},{id:1,category:"CS",itemList:v.default},{id:2,category:"Algorithm",itemList:[]},{id:3,category:"Web",itemList:[]},{id:4,category:"Etc",itemList:[]}]},p=[{id:0,title:"Github Blog",details:[{id:0,date:"2021-08-24",images:["/archives/blog/0.png","/archives/blog/1.png"],content:"\ube14\ub85c\uadf8 \uac1c\ubc1c \uc2dc\uc791\n\uc0ac\uc6a9 \uae30\uc220: React js"},{id:1,date:"2021-08-25",images:["/archives/blog/2.png","/archives/blog/3.png","/archives/blog/4.png"],content:"Home, Archives \uc815\ub9ac \ubc0f Footer \uc704\uce58 \uc870\uc815"},{id:2,date:"2021-08-25",images:["/archives/blog/5.png","/archives/blog/6.png","/archives/blog/7.png","/archives/blog/8.png"],content:"Articles \uad6c\ud604\nLocal\uc758 Markdown File\uc744 \ubd88\ub7ec\uc640\uc11c \ucd9c\ub825\ud558\ub294 \ubc29\uc2dd \uc0ac\uc6a9"},{id:3,date:"2021-08-30",images:[],content:"GitHub \ubc30\ud3ec \uc2dc url \uc811\uadfc\uc774 \uc548 \ub418\ub294 \ubb38\uc81c \ud574\uacb0\n\ucc38\uc870: https://iamsjy17.github.io/react/2018/11/04/githubpage-SPA.html\nhttps://github.com/rafgraph/spa-github-pages"},{id:4,date:"2021-09-20",images:["/archives/blog/5-1.png","/archives/blog/5-2.png","/archives/blog/5-3.png","/archives/blog/5-4.png"],content:"\ub514\uc790\uc778 \uc815\ub9ac \ubc0f \ubc18\uc751\ud615 \uc6f9 \uad6c\ud604"}]},{id:1,title:"BITZ",details:[{id:0,date:"2021-07.05 ~ 2021-08-16",images:["/archives/bitz/0.jpg","/archives/bitz/1.jpg"],content:"\ub18d\uad6c \ud53d\uc5c5 \uac8c\uc784 \ud50c\ub7ab\ud3fc BITZ \uc81c\uc791"}]},{id:2,title:"Internship",details:[{id:0,date:"2021-08.17 ~ 2021-09-10",images:[],content:"\ub2e4\uc6b0\uae30\uc220 \uae08\uc735\uac1c\ubc1c \uc9c1\ubb34 (\ud0a4\uc6c0\uc99d\uad8c) \uc778\ud134"}]}],x={home:{},profile:{},articles:{},archives:[]},f=Object(a.createContext)(x),y=f.Provider,N=function(e){var t=e.children,c=Object(a.useReducer)((function(e,t){switch(t.type){case"GET_HOME":var c=g;return Object(m.a)(Object(m.a)({},e),{},{home:c});case"GET_PROFILE":var a=O;return Object(m.a)(Object(m.a)({},e),{},{profile:a});case"GET_ARTICLES":var i=_;return null!=e.articles.categoryId&&-1!==e.articles.categoryId&&(i.categoryId=e.articles.categoryId),Object(m.a)(Object(m.a)({},e),{},{articles:i});case"GET_ARCHIVES":var n=p;return Object(m.a)(Object(m.a)({},e),{},{archives:n});case"SELECT_CATEGORY":var r=t.value;return Object(m.a)(Object(m.a)({},e),{},{articles:Object(m.a)(Object(m.a)({},e.articles),{},{categoryId:r})});default:throw new Error}}),x),i=Object(u.a)(c,2),n=i[0],r=i[1];return Object(o.jsx)(y,{value:{value:n,dispatch:r},children:t})};var A=function(){var e=Object(a.useContext)(f),t=e.value,c=e.dispatch,i=t.archives,n=Object(a.useState)(!0),r=Object(u.a)(n,2),s=r[0],l=r[1];return Object(a.useEffect)((function(){c({type:"GET_ARCHIVES"}),l(!1)}),[c]),Object(o.jsx)("div",{children:s?Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(o.jsxs)("div",{className:"Archives",children:[Object(o.jsx)("h1",{children:"Archives"}),Object(o.jsx)("div",{className:"Archives__List",children:i.map((function(e,t){return Object(o.jsx)("div",{children:Object(o.jsx)(b,{archive:e})},t)}))})]})})};c(102),c(103);var C=function(){var e=Object(l.useHistory)(),t=Object(a.useContext)(f),c=t.value,i=t.dispatch,n=c.articles,r=function(t){"/articles"!==e.location.pathname&&e.push("/articles"),i({type:"SELECT_CATEGORY",value:parseInt(t.target.getAttribute("value"))})};return Object(o.jsxs)("div",{className:"Articles__Category",children:[Object(o.jsx)("h1",{children:"Articles"}),Object(o.jsx)("div",{className:"Category__Button",onClick:r,value:"-1",children:"\uc804\uccb4\ubcf4\uae30"}),n.categoryList.map((function(e,t){return Object(o.jsx)("div",{className:"Category__Button",onClick:r,value:e.id,children:e.category},t)}))]})},k=c(7);c(104);var S=function(){var e=Object(l.useHistory)(),t=Object(a.useContext)(f).value.articles,c=Object(a.useState)("\uc804\uccb4\ubcf4\uae30"),i=Object(u.a)(c,2),n=i[0],r=i[1],s=Object(a.useState)([]),d=Object(u.a)(s,2),j=d[0],h=d[1];Object(a.useEffect)((function(){if(-1===t.categoryId)r("\uc804\uccb4\ubcf4\uae30"),h(t.categoryList.reduce((function(e,t){return e.push.apply(e,Object(k.a)(t.itemList)),e}),[]).sort((function(e,t){return e.date>t.date?1:-1})));else{var e=t.categoryList.filter((function(e){return e.id===t.categoryId}));r(e[0].category),h(e[0].itemList)}}),[t.categoryId,t.categoryList]);var b=function(t){var c=t.target.getAttribute("value");e.push("/articles/".concat(c))};return Object(o.jsxs)("div",{className:"Articles__List",children:[Object(o.jsx)("div",{className:"Articles__List--Selected",children:n}),j[0]?Object(o.jsx)("div",{children:j.slice(0).reverse().map((function(e,t){return Object(o.jsxs)("div",{className:"Articles__List--Article",onClick:b,value:"".concat(e.category,"/").concat(e.id),children:[Object(o.jsx)("div",{className:"Article__Title",value:"".concat(e.category,"/").concat(e.id),children:Object(o.jsx)("h2",{value:"".concat(e.category,"/").concat(e.id),children:e.title})}),Object(o.jsxs)("div",{className:"Article__Category-Date",value:"".concat(e.category,"/").concat(e.id),children:[Object(o.jsx)("div",{className:"Article__Category",value:"".concat(e.category,"/").concat(e.id),children:e.category}),Object(o.jsx)("div",{className:"Article__Date",value:"".concat(e.category,"/").concat(e.id),children:"\n                ".concat(e.date.getFullYear(),"\ub144\n                ").concat(e.date.getMonth()+1,"\uc6d4\n                ").concat(e.date.getDate(),"\uc77c\n              ")})]})]},t)}))}):Object(o.jsx)("div",{children:"\uac8c\uc2dc\uae00\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})]})};var w=function(){var e=Object(a.useContext)(f).dispatch,t=Object(a.useState)(!0),c=Object(u.a)(t,2),i=c[0],n=c[1];return Object(a.useEffect)((function(){e({type:"GET_ARTICLES"}),n(!1)}),[e]),Object(o.jsx)("div",{children:i?Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(o.jsxs)("div",{className:"Articles",children:[Object(o.jsx)("div",{className:"Articles__left",children:Object(o.jsx)(C,{})}),Object(o.jsx)("div",{className:"Articles__right",children:Object(o.jsx)(S,{})})]})})},L=(c(105),c(54)),E=c(79),H=c(80),I=c(398),D=c(397),T=(c(106),["node","inline","className","children"]),G=["node","children"];var P=function(e){var t=e.category,i=e.articleId,n=Object(a.useContext)(f),r=n.value,s=n.dispatch,l=r.articles,d=Object(a.useState)(!0),j=Object(u.a)(d,2),h=j[0],b=j[1],g=Object(a.useState)(""),O=Object(u.a)(g,2),v=O[0],_=O[1],p=Object(a.useState)(""),x=Object(u.a)(p,2),y=x[0],N=x[1],A=Object(a.useState)(""),C=Object(u.a)(A,2),k=C[0],S=C[1];return Object(a.useEffect)((function(){s({type:"GET_ARTICLES"})}),[s]),Object(a.useEffect)((function(){l.categoryList.forEach((function(e){e.category===t&&e.itemList.forEach((function(e){e.id===parseInt(i)&&(S(e.content),N(e.title))}))}))}),[l.categoryList,i,t]),Object(a.useEffect)((function(){if(k){var e=c(107)("./".concat(k.split("/")[2],"/").concat(k.split("/")[3]));fetch(e.default).then((function(e){return e.text()})).then((function(e){_(e)})),b(!1)}}),[v,k]),console.log(v.replace(/\n\s\n\s/gi,"\n\n&nbsp;&nbsp;")),Object(o.jsx)("div",{children:h?Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(o.jsxs)("div",{className:"MarkdownRenderer",children:[Object(o.jsx)("h1",{className:"MarkdownRenderer__Title",children:y}),Object(o.jsx)(E.a,{remarkPlugins:[H.a],children:v.replace(/\n\s\n\s/gi,"\n\n&nbsp;&nbsp;").replace(/\*\*/gi,"@$_%!^").replace(/\**\*/gi,"/").replace(/@\$_%!\^/gi,"**").replace(/<\/?u>/gi,"*"),components:{code:function(e){e.node;var t=e.inline,c=e.className,a=e.children,i=Object(L.a)(e,T),n=/language-(\w+)/.exec(c||"");return t?Object(o.jsx)("code",Object(m.a)(Object(m.a)({style:{background:"var(--highlight-color)",padding:"2px"}},i),{},{children:a})):n?Object(o.jsx)(I.a,Object(m.a)({children:String(a).replace(/\n$/,""),style:D.a,language:n[1],PreTag:"div"},i)):Object(o.jsx)(I.a,Object(m.a)({children:String(a).replace(/\n$/,""),style:D.a,language:"textile",PreTag:"div"},i))},blockquote:function(e){e.node;var t=e.children,c=Object(L.a)(e,G);return Object(o.jsx)("div",Object(m.a)(Object(m.a)({style:{background:"#f0f0f0",padding:"1px 15px",borderRadius:"10px"}},c),{},{children:t}))}}})]})})};var F=function(e){var t=e.match,c=Object(a.useContext)(f).dispatch,i=Object(a.useState)(!0),n=Object(u.a)(i,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){c({type:"GET_ARTICLES"}),s(!1)}),[c]),Object(o.jsx)("div",{children:r?Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(o.jsxs)("div",{className:"ArticleDetail",children:[Object(o.jsx)("div",{className:"ArticleDetail__left",children:Object(o.jsx)(C,{})}),Object(o.jsx)("div",{className:"ArticleDetail__right",children:Object(o.jsx)(P,{category:t.url.split("/")[2],articleId:t.url.split("/")[3]})})]})})},R=c(78);c(384);var B=function(){var e=Object(a.useContext)(f),t=e.value,c=e.dispatch,i=t.home,n=Object(a.useState)(!0),r=Object(u.a)(n,2),s=r[0],l=r[1];return Object(a.useEffect)((function(){c({type:"GET_HOME"}),l(!1)}),[c]),Object(o.jsx)("div",{children:s?Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(o.jsxs)("div",{className:"Home",children:[Object(o.jsx)("div",{className:"Home__left",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"Home__profile-img",children:Object(o.jsx)("img",{src:i.profile_img,alt:"profile"})}),Object(o.jsxs)("div",{className:"Home__profile-content",children:[Object(o.jsx)("h3",{children:"\ubc15\uc815\uc6c5"}),Object(o.jsx)("div",{children:i.summary.split("\n").map((function(e,t){return"\t"===e[0]?Object(o.jsx)("div",{className:"Home__profile-content-detail",children:e},t):Object(o.jsx)("div",{className:"Home__profile-content-list",children:e},t)}))})]})]})}),Object(o.jsx)("div",{className:"Home__right",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:Object(o.jsx)("strong",{children:i.welcome_word})}),Object(o.jsx)("hr",{className:"Horizontal_Line"}),Object(o.jsx)("p",{children:Object(o.jsx)("strong",{children:"\uc18c\uac1c\uae00"})}),Object(o.jsx)("div",{children:i.introduction.split("\n").map((function(e,t){return Object(o.jsx)("p",{children:e},t)}))}),Object(o.jsx)("hr",{className:"Horizontal_Line"}),Object(o.jsx)("div",{children:Object(o.jsx)(R.Link,{to:"/profile",className:"link_tag",children:"\uc790\uc138\ud788 \ubcf4\ub7ec\uac00\uae30"})})]})})]})})};c(385);var M=function(){var e=Object(a.useContext)(f),t=e.value,c=e.dispatch,i=t.profile,n=Object(a.useState)(!0),r=Object(u.a)(n,2),s=r[0],l=r[1];return Object(a.useEffect)((function(){c({type:"GET_PROFILE"}),l(!1)}),[c]),Object(o.jsx)("div",{children:s?Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(o.jsxs)("div",{className:"Profile",children:[Object(o.jsx)("h1",{children:"Profile"}),Object(o.jsx)("h2",{children:"\uc18c\uac1c"}),Object(o.jsx)("div",{className:"Profile__introduction",children:i.introduction.split("\n").map((function(e,t){return Object(o.jsx)("p",{children:e},t)}))}),Object(o.jsx)("h2",{children:"\uae30\uc220\uc2a4\ud0dd"}),Object(o.jsxs)("div",{className:"Profile__tech_stack",children:[Object(o.jsx)("h3",{children:"Front-end"}),Object(o.jsx)("div",{children:i.tech_stack.frontend.map((function(e,t){return Object(o.jsx)("img",{src:e,className:"Profile__tech_stack-logo",alt:"tech_stack"},t)}))}),Object(o.jsx)("h3",{children:"Back-end"}),Object(o.jsx)("div",{children:i.tech_stack.backend.map((function(e,t){return Object(o.jsx)("img",{src:e,className:"Profile__tech_stack-logo",alt:"tech_stack"},t)}))}),Object(o.jsx)("h3",{children:"Version Control"}),Object(o.jsx)("div",{children:i.tech_stack.version_control.map((function(e,t){return Object(o.jsx)("img",{src:e,className:"Profile__tech_stack-logo",alt:"tech_stack"},t)}))}),Object(o.jsx)("h3",{children:"Studying"}),Object(o.jsx)("div",{children:i.tech_stack.studying.map((function(e,t){return Object(o.jsx)("img",{src:e,className:"Profile__tech_stack-logo",alt:"tech_stack"},t)}))})]}),Object(o.jsx)("h2",{children:"\uacbd\ub825"}),Object(o.jsx)("div",{className:"Profile__career",children:i.career.map((function(e,t){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"Profile__career-name",children:e.name}),Object(o.jsx)("div",{className:"Profile__career-content",children:e.content})]},t)}))})]})})};c(386);var q=function(){return Object(o.jsx)("div",{className:"NotFound",children:"Page Not Found"})};var U=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{className:"App__Content",children:Object(o.jsxs)(s.a,{basename:"/",children:[Object(o.jsx)(j,{}),Object(o.jsxs)(l.Switch,{children:[Object(o.jsx)(l.Route,{path:"/",exact:!0,component:B}),Object(o.jsx)(l.Route,{path:"/profile",exact:!0,component:M}),Object(o.jsx)(l.Route,{path:"/articles",exact:!0,component:w}),Object(o.jsx)(l.Route,{path:"/articles/:category/:articleId",exact:!0,component:F}),Object(o.jsx)(l.Route,{path:"/archives",exact:!0,component:A}),Object(o.jsx)(l.Route,{path:"*",component:q})]})]})}),Object(o.jsx)(d,{})]})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,399)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),i(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(N,{children:Object(o.jsx)(U,{})})}),document.getElementById("root")),K()},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},91:function(e,t,c){},99:function(e,t,c){}},[[387,1,2]]]);
//# sourceMappingURL=main.56bbc426.chunk.js.map