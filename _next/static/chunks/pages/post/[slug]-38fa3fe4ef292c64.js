(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{3897:function(e,r,t){"use strict";var n=t(5167),i=t(4871),s=t(7692),a=t(7667),o=t(4687),l=t.n(o),c=t(4708);r.Z=function(e){var r=e.content,t=(0,a.useRef)(null);return(0,a.useEffect)((function(){if(t.current&&r){var e=document.createRange().createContextualFragment(r);t.current.innerHTML=null,t.current.appendChild(e)}}),[t,r]),(0,c.jsxs)(n.Z,{children:[(0,c.jsx)(i.Z,{children:["._19pkidpf{margin-top:0}","._2hwxidpf{margin-right:0}","._otyridpf{margin-bottom:0}","._18u0idpf{margin-left:0}","._ca0qoqnp{padding-top:.75rem}","._u5f3viql{padding-right:2rem}","._n3td1k8s{padding-bottom:1.5rem}","._19bvviql{padding-left:2rem}","._njlp1edp{contain:content}"]}),(0,c.jsx)("section",{id:l().markdown,dangerouslySetInnerHTML:{__html:r},ref:t,className:(0,s.Z)(["_19pkidpf _2hwxidpf _otyridpf _18u0idpf _ca0qoqnp _u5f3viql _n3td1k8s _19bvviql _njlp1edp"])})]})}},1960:function(e,r,t){"use strict";var n=t(1994),i=t.n(n),s=t(5167),a=t(4871),o=t(7692),l=t(8933),c=(t(9350),t(1662)),d=t.n(c),_=t(544),u=t.n(_),m=(t(4320),t(6877),t(1620),t(4708)),p=d()((function(){return t.e(100).then(t.bind(t,100)).then((function(e){return e.DisqusJS}))}),{loadableGenerated:{webpack:function(){return[100]}}});r.Z=function(e){var r=e.title,t=e.url;return(0,m.jsxs)(l.df,{triggerOnce:!0,children:[(0,m.jsx)(i(),{id:"3182467444",children:["#dsqjs a{color:var(--c-a);}","#dsqjs .dsqjs-nav-tab{color:var(--c-s);}","#dsqjs .dsqjs-tab-active,#dsqjs .dsqjs-post-body{color:var(--c);}","#dsqjs .dsqjs-post-body pre,#dsqjs .dsqjs-post-body code{background:var(--g-p);}","#dsqjs .dsqjs-post-list .dsqjs-post-header .dsqjs-meta,#dsqjs .dsqjs-post-list .dsqjs-post-header .dsqjs-post-author{color:var(--c-m);}","#dsqjs .dsqjs-bullet{margin:0 4px;}","#dsqjs .dsqjs-order-label{background-color:var(--g-s);}","#dsqjs .dsqjs-disqus-logo{-webkit-filter:invert(1);filter:invert(1);}","#dsqjs .dsqjs-nav{border-bottom-color:var(--b);}","#dsqjs footer{color:var(--c-s);border-top-color:var(--b);}"]}),(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(a.Z,{children:["._11q71j7o{background:var(--g-m)}","._2rkomciu{border-radius:var(--r)}","._1reo1wug{overflow-x:auto}","._18m91wug{overflow-y:auto}","._16qs1908{box-shadow:var(--s)}","._1bsb1lk2{width:95%}","._p12fam62{max-width:var(--w)}","._19pk1j6v{margin-top:1rem}","._2hwx1wug{margin-right:auto}","._otyr1j6v{margin-bottom:1rem}","._18u01wug{margin-left:auto}","._ca0q1j6v{padding-top:1rem}","._u5f31k8s{padding-right:1.5rem}","._n3td1j6v{padding-bottom:1rem}","._19bv1k8s{padding-left:1.5rem}"]}),(0,m.jsx)(p,{title:r,shortname:u().disqus.shortname,siteName:u().title,identifier:t,url:new URL(t,u().baseUrl).toString(),api:u().disqus.api,apikey:u().disqus.apikey,admin:u().disqus.admin,adminLabel:u().disqus.adminLabel,className:(0,o.Z)(["_11q71j7o _2rkomciu _1reo1wug _18m91wug _16qs1908","_1bsb1lk2 _p12fam62 _19pk1j6v _2hwx1wug _otyr1j6v _18u01wug","_ca0q1j6v _u5f31k8s _n3td1j6v _19bv1k8s"])})]})]})}},927:function(e,r,t){"use strict";t.d(r,{$f:function(){return l},HU:function(){return c},My:function(){return d}});var n=t(544),i=t.n(n);function s(e){var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"};if("string"!==typeof e){if(null==e)return"";if(!e)return e+"";e=""+e}return/[&<>"'`=]/.test(e)?e.replace(/[&<>"'`=]/g,(function(e){return r[e]})):e}function a(){return{"@type":"Organization",name:s(i().title),url:i().baseUrl||null,logo:{"@type":"ImageObject",url:i().image}}}function o(e){var r={};return Object.keys(e).forEach((function(t){null!==e[t]&&"undefined"!==typeof e[t]&&(r[t]=e[t])})),r}function l(e){var r=e.excerpt?s(e.excerpt):null,t={"@context":"https://schema.org","@type":"Article",publisher:a(),author:{"@type":"Person",name:s(i().author.name),url:i().author.link,description:i().author.description?s(i().author.description):null},headline:s(e.title),url:e.url||new URL(e.path,i().baseUrl).toString()||null,datePublished:e.date||null,image:{"@type":"ImageObject",url:e.thumb||i().image},keywords:e.tags&&e.tags.length>0?e.tags.join(", "):null,description:r,mainEntityOfPage:{"@type":"WebPage","@id":i().baseUrl||null}};return t.author=o(t.author),JSON.stringify(o(t))}function c(e){var r={"@context":"https://schema.org","@type":"WebSite",publisher:a(),url:e.url||new URL(e.path,i().baseUrl).toString()||null,image:{"@type":"ImageObject",url:i().image},mainEntityOfPage:{"@type":"WebPage","@id":i().baseUrl||null},description:i().description?s(i().description):null};return JSON.stringify(o(r))}function d(e){var r={"@context":"https://schema.org","@type":"Series",publisher:a(),url:e.url||new URL(e.path,i().baseUrl).toString()||null,image:{"@type":"ImageObject",url:i().image},name:e.tag,mainEntityOfPage:{"@type":"WebPage","@id":i().baseUrl||null},description:i().description?s(i().description):null};return JSON.stringify(o(r))}},9235:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return xe},default:function(){return je}});var n=t(1756),i=t(4663),s=t(7667),a=t.n(s),o=t(5167),l=t(4871),c=t(7692),d=t(9350),_=t.n(d),u=t(7064),m=t.n(u),p=t(595),f=t(7417),g=t(1960),h=t(3897),b=(t(4320),t(6877),t(4708)),x=function(){return(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:["._11q71j7o{background:var(--g-m)}","._2rkomciu{border-radius:var(--r)}","._1reo1wug{overflow-x:auto}","._18m91wug{overflow-y:auto}","._16qs1908{box-shadow:var(--s)}","._1bsb1lk2{width:95%}","._p12fam62{max-width:var(--w)}","._19pk1j6v{margin-top:1rem}","._2hwx1wug{margin-right:auto}","._otyr1j6v{margin-bottom:1rem}","._18u01wug{margin-left:auto}","._ca0q1k8s{padding-top:1.5rem}","._u5f3viql{padding-right:2rem}","._n3td1k8s{padding-bottom:1.5rem}","._19bvviql{padding-left:2rem}","._y3gn1h6o{text-align:center}","._1wyb11yk{font-size:.9rem}"]}),(0,b.jsxs)("div",{className:(0,c.Z)(["_11q71j7o _2rkomciu _1reo1wug _18m91wug _16qs1908","_1bsb1lk2 _p12fam62 _19pk1j6v _2hwx1wug _otyr1j6v _18u01wug","_19pk1j6v _2hwx1wug _otyr1j6v _18u01wug _ca0q1k8s _u5f3viql _n3td1k8s _19bvviql _y3gn1h6o _1wyb11yk"]),children:[(0,b.jsx)("div",{children:"\u559c\u6b22\u8fd9\u7bc7\u6587\u7ae0\uff1f\u4e3a\u4ec0\u4e48\u4e0d\u8003\u8651\u6253\u8d4f\u4e00\u4e0b\u4f5c\u8005\u5462\uff1f"}),(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:["._syazu67f{color:#fff}","._bfhky4xi{background-color:#946ce6}","._2rko6mu8{border-radius:.25rem}","._4bfu1r31{-webkit-text-decoration-color:currentColor;text-decoration-color:currentColor}","._1hmsglyw{-webkit-text-decoration-line:none;text-decoration-line:none}","._ajmmnqa1{-webkit-text-decoration-style:solid;text-decoration-style:solid}","._ca0q6mu8{padding-top:.25rem}","._u5f31j6v{padding-right:1rem}","._n3td6mu8{padding-bottom:.25rem}","._19bv1j6v{padding-left:1rem}","._19pk1kwk{margin-top:.5rem}","._1e0c1o8l{display:inline-block}","._uiztglyw{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"]}),(0,b.jsx)("a",{href:"https://afdian.net/@baoshuo",target:"_blank",rel:"noopener noreferrer",className:(0,c.Z)(["_syazu67f _bfhky4xi _2rko6mu8 _4bfu1r31 _1hmsglyw _ajmmnqa1 _ca0q6mu8 _u5f31j6v _n3td6mu8 _19bv1j6v _19pk1kwk _1e0c1o8l _uiztglyw"]),children:"\u7231\u53d1\u7535"})]})]})]})},j=["as","style"],w=["as","style"];function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var y="._qnec1ssb:before{left:50%}",q="._1auk1ssb:before{top:50%}",Z="._kfgt12ei:before{height:.65em}",O="._1mp412ei:before{width:.65em}",z="._kzdanqa1:before{border-style:solid}",N="._7dwz56g3:before{transform:translate(-25%,-50%) rotate(-45deg)}",P="._1cs8stnw:before{position:absolute}",C='._1kt9b3bt:before{content:""}',E="._1bsb1x4e{width:1em}",S="._4t3i1x4e{height:1em}",D="._1e0c1o8l{display:inline-block}",U="._kqswh2mm{position:relative}",R="._s7n4nkob{vertical-align:middle}",L="._azhwxq2a{text-indent:-9999px}",H="._19bv1kwk{padding-left:.5rem}",M="._n3tdidpf{padding-bottom:0}",F="._u5f31kwk{padding-right:.5rem}",T="._ca0qidpf{padding-top:0}",I="._syazqrna{color:var(--c-m)}",A="._4cvr1h6o{align-items:center}",W="._i0dl1ssb{flex-basis:50%}",B="._1o9zkb7n{flex-shrink:1}",J="._16jlkb7n{flex-grow:1}",G="._1e0c1txw{display:flex}";var X=function(e){var r=e.prev,t=e.next;return(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:["._1bsb1lk2{width:95%}","._p12fam62{max-width:var(--w)}","._19pk1j6v{margin-top:1rem}","._2hwx1wug{margin-right:auto}","._otyr1j6v{margin-bottom:1rem}","._18u01wug{margin-left:auto}",G,"._1wybgm0b{font-size:.9em}","._k48pbfng{font-weight:500}"]}),(0,b.jsxs)("div",{className:(0,c.Z)(["_1bsb1lk2 _p12fam62 _19pk1j6v _2hwx1wug _otyr1j6v _18u01wug","_1e0c1txw _1wybgm0b _k48pbfng"]),children:[r&&(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:[G,J,B,W,"._1bah1y6m{justify-content:flex-start}","._y3gn1e5h{text-align:left}"]}),(0,b.jsx)("div",{className:(0,c.Z)(["_1e0c1txw _16jlkb7n _1o9zkb7n _i0dl1ssb _1bah1y6m _y3gn1e5h"]),children:(0,b.jsx)(m(),{prefetch:!1,href:r.url,passHref:!0,children:a().createElement((0,s.forwardRef)((function(e,r){var t=e.as,n=void 0===t?"a":t,s=e.style,a=(0,i.Z)(e,j);return(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:[G,A,I,T,F,M,H]}),(0,b.jsx)(n,k(k({},a),{},{style:s,ref:r,className:(0,c.Z)(["_1e0c1txw _4cvr1h6o _syazqrna _ca0qidpf _u5f31kwk _n3tdidpf _19bv1kwk",a.className])}))]})})),{},(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:["._2hwx1kwk{margin-right:.5rem}",L,R,U,D,S,E,C,P,N,"._3l8815w8:before{border-width:2px 0 0 2px}",z,O,Z,q,y]}),(0,b.jsx)("i",{className:(0,c.Z)(["_2hwx1kwk _azhwxq2a _s7n4nkob _kqswh2mm _1e0c1o8l _4t3i1x4e _1bsb1x4e _1kt9b3bt _1cs8stnw _7dwz56g3 _3l8815w8 _kzdanqa1 _1mp412ei _kfgt12ei _1auk1ssb _qnec1ssb"])})]}),r.title)})})]}),t&&(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:[G,J,B,W,"._1bahesu3{justify-content:flex-end}","._y3gnusic{text-align:right}"]}),(0,b.jsx)("div",{className:(0,c.Z)(["_1e0c1txw _16jlkb7n _1o9zkb7n _i0dl1ssb _1bahesu3 _y3gnusic"]),children:(0,b.jsx)(m(),{prefetch:!1,href:t.url,passHref:!0,children:a().createElement((0,s.forwardRef)((function(e,r){var t=e.as,n=void 0===t?"a":t,s=e.style,a=(0,i.Z)(e,w);return(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:[G,A,I,T,F,M,H]}),(0,b.jsx)(n,k(k({},a),{},{style:s,ref:r,className:(0,c.Z)(["_1e0c1txw _4cvr1h6o _syazqrna _ca0qidpf _u5f31kwk _n3tdidpf _19bv1kwk",a.className])}))]})})),{},t.title,(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:["._18u01kwk{margin-left:.5rem}",L,R,U,D,S,E,C,P,N,"._3l88vtp2:before{border-width:0 2px 2px 0}",z,O,Z,q,y]}),(0,b.jsx)("i",{className:(0,c.Z)(["_18u01kwk _azhwxq2a _s7n4nkob _kqswh2mm _1e0c1o8l _4t3i1x4e _1bsb1x4e _1kt9b3bt _1cs8stnw _7dwz56g3 _3l88vtp2 _kzdanqa1 _1mp412ei _kfgt12ei _1auk1ssb _qnec1ssb"])})]}))})})]})]})]})},Y=t(927),$=t(4687),K=t.n($),Q=["as","style"];function V(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ee(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?V(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var re=function(e){var r=e.tags;return(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:["._1wyb11yk{font-size:.9rem}","._ca0q1k8s{padding-top:1.5rem}","._u5f3viql{padding-right:2rem}","._n3td1k8s{padding-bottom:1.5rem}","._19bvviql{padding-left:2rem}"]}),(0,b.jsx)("div",{className:(0,c.Z)(["_1wyb11yk _ca0q1k8s _u5f3viql _n3td1k8s _19bvviql"]),children:r.map((function(e){var r=e.name,t=e.url;return(0,b.jsx)(m(),{prefetch:!1,href:t,passHref:!0,children:a().createElement((0,s.forwardRef)((function(e,r){var t=e.as,n=void 0===t?"a":t,s=e.style,a=(0,i.Z)(e,Q);return(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:["._syazvi9c{color:var(--c-s)}","._4bfu1r31{-webkit-text-decoration-color:currentColor;text-decoration-color:currentColor}","._1hmsglyw{-webkit-text-decoration-line:none;text-decoration-line:none}","._ajmmnqa1{-webkit-text-decoration-style:solid;text-decoration-style:solid}","._2hwx1kwk{margin-right:.5rem}","._30l32rdg:hover{color:var(--c-a)}"]}),(0,b.jsx)(n,ee(ee({},a),{},{style:s,ref:r,className:(0,c.Z)(["_syazvi9c _4bfu1r31 _1hmsglyw _ajmmnqa1 _2hwx1kwk _30l32rdg",a.className])}))]})})),{},"# ".concat(r))},r)}))})]})},te=t(544),ne=t.n(te),ie="._1wybtjj4{font-size:.8em}",se="._1o9zidpf{flex-shrink:0}",ae="._2lx21bp4{flex-direction:column}",oe="._1e0c1txw{display:flex}",le="._30l32rdg:hover{color:var(--c-a)}",ce="._ajmmnqa1{-webkit-text-decoration-style:solid;text-decoration-style:solid}",de="._1hmsglyw{-webkit-text-decoration-line:none;text-decoration-line:none}",_e="._4bfu1r31{-webkit-text-decoration-color:currentColor;text-decoration-color:currentColor}",ue=function(e){var r=e.title,t=e.url,n=e.author,i=e.date,s=e.isoDate,a=e.license;return(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:["._11q765tl{background:var(--g-l)}","._ca0q1k92{padding-top:1.25rem}","._u5f3viql{padding-right:2rem}","._n3td1k92{padding-bottom:1.25rem}","._19bvviql{padding-left:2rem}","._kqswh2mm{position:relative}","._1reo15vq{overflow-x:hidden}","._18m915vq{overflow-y:hidden}",'._aetrb3bt:after{content:""}',"._18postnw:after{position:absolute}","._1qdgjidk:after{height:175px}","._z0aijidk:after{width:175px}","._32rx1mi1:after{right:-25px}","._15l2bx3o:after{top:-35px}","._1peq1acx:after{opacity:.25}","._16r212fn:after{background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'%3E%3Cdefs/%3E%3Cpath fill='%234a4a4a' d='M245.8 214.9l-33.2 17.3c-9.4-19.6-25.2-20-27.4-20-22.2 0-33.3 14.6-33.3 43.9 0 23.5 9.2 43.8 33.3 43.8 14.4 0 24.6-7 30.5-21.3l30.6 15.5a73.2 73.2 0 01-65.1 39c-22.6 0-74-10.3-74-77 0-58.7 43-77 72.6-77 30.8-.1 52.7 11.9 66 35.8zm143 0l-32.7 17.3c-9.5-19.8-25.7-20-27.9-20-22.1 0-33.2 14.6-33.2 43.9 0 23.5 9.2 43.8 33.2 43.8 14.5 0 24.7-7 30.5-21.3l31 15.5c-2 3.8-21.3 39-65 39-22.7 0-74-9.9-74-77 0-58.7 43-77 72.6-77C354 179 376 191 389 214.8zM247.7 8C104.7 8 0 123 0 256c0 138.4 113.6 248 247.6 248C377.5 504 496 403 496 256 496 118 389.4 8 247.6 8zm.8 450.8c-112.5 0-203.7-93-203.7-202.8 0-105.5 85.5-203.3 203.8-203.3A201.7 201.7 0 01451.3 256c0 121.7-99.7 202.9-202.9 202.9z'/%3E%3C/svg%3E\")}","@media (prefers-color-scheme:dark){._17ht1oox:after{background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'%3E%3Cdefs/%3E%3Cpath fill='%23ffffff70' d='M245.8 214.9l-33.2 17.3c-9.4-19.6-25.2-20-27.4-20-22.2 0-33.3 14.6-33.3 43.9 0 23.5 9.2 43.8 33.3 43.8 14.4 0 24.6-7 30.5-21.3l30.6 15.5a73.2 73.2 0 01-65.1 39c-22.6 0-74-10.3-74-77 0-58.7 43-77 72.6-77 30.8-.1 52.7 11.9 66 35.8zm143 0l-32.7 17.3c-9.5-19.8-25.7-20-27.9-20-22.1 0-33.2 14.6-33.2 43.9 0 23.5 9.2 43.8 33.2 43.8 14.5 0 24.7-7 30.5-21.3l31 15.5c-2 3.8-21.3 39-65 39-22.7 0-74-9.9-74-77 0-58.7 43-77 72.6-77C354 179 376 191 389 214.8zM247.7 8C104.7 8 0 123 0 256c0 138.4 113.6 248 247.6 248C377.5 504 496 403 496 256 496 118 389.4 8 247.6 8zm.8 450.8c-112.5 0-203.7-93-203.7-202.8 0-105.5 85.5-203.3 203.8-203.3A201.7 201.7 0 01451.3 256c0 121.7-99.7 202.9-202.9 202.9z'/%3E%3C/svg%3E\")}}"]}),(0,b.jsxs)("div",{className:(0,c.Z)(["_11q765tl _ca0q1k92 _u5f3viql _n3td1k92 _19bvviql _kqswh2mm _1reo15vq _18m915vq _aetrb3bt _18postnw _1qdgjidk _z0aijidk _32rx1mi1 _15l2bx3o _1peq1acx _16r212fn _17ht1oox"]),children:[(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:["._k48p8n31{font-weight:bold}"]}),(0,b.jsx)("div",{className:(0,c.Z)(["_k48p8n31"]),children:r})]}),(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:["._1wybgm0b{font-size:.9em}"]}),(0,b.jsx)("div",{className:(0,c.Z)(["_1wybgm0b"]),children:(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:["._syazvi9c{color:var(--c-s)}",_e,de,ce,le]}),(0,b.jsx)("a",{href:t,className:(0,c.Z)(["_syazvi9c _4bfu1r31 _1hmsglyw _ajmmnqa1 _30l32rdg"]),children:new URL(t,ne().baseUrl).toString()})]})})]}),(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:[oe,"._1n261g80{flex-wrap:wrap}","._zulp8cnd{gap:.5rem 2rem}","._19pk1j6v{margin-top:1rem}"]}),(0,b.jsxs)("div",{className:(0,c.Z)(["_1e0c1txw _1n261g80 _zulp8cnd _19pk1j6v"]),children:[(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:[oe,ae,se]}),(0,b.jsxs)("div",{className:(0,c.Z)(["_1e0c1txw _2lx21bp4 _1o9zidpf"]),children:[(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:[ie]}),(0,b.jsx)("div",{className:(0,c.Z)(["_1wybtjj4"]),children:"\u672c\u6587\u4f5c\u8005"})]}),(0,b.jsx)("div",{children:n||ne().author.name})]})]}),(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:[oe,ae,se]}),(0,b.jsxs)("div",{className:(0,c.Z)(["_1e0c1txw _2lx21bp4 _1o9zidpf"]),children:[(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:[ie]}),(0,b.jsx)("div",{className:(0,c.Z)(["_1wybtjj4"]),children:"\u53d1\u5e03\u4e8e"})]}),(0,b.jsx)("time",{dateTime:s,children:i})]})]}),(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:[oe,ae,se]}),(0,b.jsxs)("div",{className:(0,c.Z)(["_1e0c1txw _2lx21bp4 _1o9zidpf"]),children:[(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:[ie]}),(0,b.jsx)("div",{className:(0,c.Z)(["_1wybtjj4"]),children:"\u7248\u6743\u534f\u8bae"})]}),(0,b.jsx)("div",{children:a||(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:["._syaz1kw7{color:inherit}",_e,de,ce,le]}),(0,b.jsx)("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.zh-Hans",target:"_blank",rel:"license noopener noreferrer",className:(0,c.Z)(["_syaz1kw7 _4bfu1r31 _1hmsglyw _ajmmnqa1 _30l32rdg"]),children:"CC BY-NC-SA 4.0"})]})})]})]})]})]})]})]})},me=["as","style"];function pe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function fe(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?pe(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):pe(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ge="._ca0q1kwk{padding-top:.5rem}",he="._18u0idpf{margin-left:0}",be="._2hwxidpf{margin-right:0}";var xe=!0,je=function(e){var r=e.title,t=e.post,n=t.date,d=(t.updated,t.isoDate);t.isoUpdated;return(0,s.useEffect)((function(){(0,p.Z)(document.querySelectorAll("#".concat(K().markdownBody," img")),{background:"var(--g-m)"})})),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(_(),{children:[(0,b.jsx)("title",{children:r}),t.excerpt&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("meta",{name:"description",content:t.excerpt.trim()},"description"),(0,b.jsx)("meta",{property:"og:description",content:t.excerpt.trim()},"og:description")]}),(0,b.jsx)("meta",{name:"keywords",content:t.tags.join(",")},"keywords"),(0,b.jsx)("meta",{property:"og:type",content:"article"},"og:type"),(0,b.jsx)("meta",{property:"og:title",content:r},"og:title"),(0,b.jsx)("meta",{property:"og:url",content:t.url},"og:url"),t.thumb&&(0,b.jsx)("meta",{property:"og:image",content:t.thumb},"og:image"),(0,b.jsx)("link",{rel:"canonical",href:t.url},"canonical"),t.thumb&&(0,b.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twitter:card")]}),(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:["._11q71j7o{background:var(--g-m)}","._2rkomciu{border-radius:var(--r)}","._1reo1wug{overflow-x:auto}","._18m91wug{overflow-y:auto}","._16qs1908{box-shadow:var(--s)}","._1bsb1lk2{width:95%}","._p12fam62{max-width:var(--w)}","._19pk1j6v{margin-top:1rem}","._2hwx1wug{margin-right:auto}","._otyr1j6v{margin-bottom:1rem}","._18u01wug{margin-left:auto}"]}),(0,b.jsxs)("article",{className:(0,c.Z)(["_11q71j7o _2rkomciu _1reo1wug _18m91wug _16qs1908","_1bsb1lk2 _p12fam62 _19pk1j6v _2hwx1wug _otyr1j6v _18u01wug"]),children:[t.thumb&&(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:["._1bsb1osq{width:100%}","._c71l1kdj{max-height:25pc}","._5ral1dfr{-o-object-fit:cover;object-fit:cover}"]}),(0,b.jsx)("img",{src:t.thumb,alt:t.title,className:(0,c.Z)(["_1bsb1osq _c71l1kdj _5ral1dfr"])})]}),(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:["._19pkidpf{margin-top:0}",be,"._otyridpf{margin-bottom:0}",he,"._ca0q1k92{padding-top:1.25rem}","._u5f3viql{padding-right:2rem}","._n3tdidpf{padding-bottom:0}","._19bvviql{padding-left:2rem}",ge]}),(0,b.jsxs)("header",{className:(0,c.Z)(["_19pkidpf _2hwxidpf _otyridpf _18u0idpf _ca0q1k92 _u5f3viql _n3tdidpf _19bvviql",t.thumb&&"_ca0q1kwk"]),children:[(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:["._1wyb1m1q{font-size:1.75rem}","._1dyzb3zs{letter-spacing:.75px}","._19pkoqnp{margin-top:.75rem}",be,"._otyroqnp{margin-bottom:.75rem}",he]}),(0,b.jsx)("h1",{className:(0,c.Z)(["_1wyb1m1q _1dyzb3zs _19pkoqnp _2hwxidpf _otyroqnp _18u0idpf"]),children:t.title})]}),(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:[ge,"._u5f3idpf{padding-right:0}","._n3td1kwk{padding-bottom:.5rem}","._19bvidpf{padding-left:0}","._syazqrna{color:var(--c-m)}"]}),(0,b.jsxs)("div",{className:(0,c.Z)(["_ca0q1kwk _u5f3idpf _n3td1kwk _19bvidpf _syazqrna"]),children:[(0,b.jsx)("time",{dateTime:d,children:n}),t.categories.map((function(e){var r=e.name,t=e.url;return(0,b.jsxs)(s.Fragment,{children:[(0,b.jsx)("span",{className:"dot"}),(0,b.jsx)(m(),{prefetch:!1,href:t,passHref:!0,children:a().createElement((0,s.forwardRef)((function(e,r){var t=e.as,n=void 0===t?"a":t,s=e.style,a=(0,i.Z)(e,me);return(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(l.Z,{children:["._syaz1kw7{color:inherit}","._4bfu1r31{-webkit-text-decoration-color:currentColor;text-decoration-color:currentColor}","._1hmsglyw{-webkit-text-decoration-line:none;text-decoration-line:none}","._ajmmnqa1{-webkit-text-decoration-style:solid;text-decoration-style:solid}","._30l32rdg:hover{color:var(--c-a)}"]}),(0,b.jsx)(n,fe(fe({},a),{},{style:s,ref:r,className:(0,c.Z)(["_syaz1kw7 _4bfu1r31 _1hmsglyw _ajmmnqa1 _30l32rdg",a.className])}))]})})),{},r)})]},r)})),(0,b.jsx)("span",{className:"dot"}),(0,b.jsx)("span",{children:t.wordCount})]})]})]})]}),(0,b.jsx)(h.Z,{content:(0,f.sY)(t.content)}),(0,b.jsx)(ue,{title:t.title,url:t.url,author:t.author,date:n,isoDate:d,license:t.license}),t.tags.length&&(0,b.jsx)(re,{tags:t.tags})||(0,b.jsx)(b.Fragment,{})]})]}),(0,b.jsx)(x,{}),(t.prev||t.next)&&(0,b.jsx)(X,{prev:t.prev,next:t.next})||(0,b.jsx)(b.Fragment,{}),t.comments&&(0,b.jsx)(g.Z,{title:t.title,url:t.url})||(0,b.jsx)(b.Fragment,{}),(0,b.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:(0,Y.$f)(t)}})]})}},4320:function(e,r,t){"use strict";t.d(r,{W:function(){return n}});t(7667);var n={background:"var(--g-m)",borderRadius:"var(--r)",overflow:"auto",boxShadow:"var(--s)"}},6877:function(e,r,t){"use strict";t(7667)},5538:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[slug]",function(){return t(9235)}])},4687:function(e){e.exports={markdown:"__bs___0afd559297e75abe"}}},function(e){e.O(0,[924,983,774,888,179],(function(){return r=5538,e(e.s=r);var r}));var r=e.O();_N_E=r}]);