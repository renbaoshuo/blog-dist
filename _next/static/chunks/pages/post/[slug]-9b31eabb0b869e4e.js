(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{3897:function(e,t,r){"use strict";var n=r(5167),s=r(4871),i=r(7692),a=r(922),o=r(4687),l=r.n(o),c=r(4708);t.Z=function(e){var t=e.content,r=(0,a.useRef)(null);return(0,a.useEffect)((function(){if(r.current&&t){var e=document.createRange().createContextualFragment(t);r.current.innerHTML=null,r.current.appendChild(e)}}),[r,t]),(0,c.jsxs)(n.Z,{children:[(0,c.jsx)(s.Z,{children:["._19pkidpf{margin-top:0}","._2hwxidpf{margin-right:0}","._otyridpf{margin-bottom:0}","._18u0idpf{margin-left:0}","._ca0qoqnp{padding-top:.75rem}","._u5f3viql{padding-right:2rem}","._n3td1k8s{padding-bottom:1.5rem}","._19bvviql{padding-left:2rem}","._njlp1edp{contain:content}"]}),(0,c.jsx)("section",{id:l().markdown,dangerouslySetInnerHTML:{__html:t},ref:r,className:(0,i.Z)(["_19pkidpf _2hwxidpf _otyridpf _18u0idpf _ca0qoqnp _u5f3viql _n3td1k8s _19bvviql _njlp1edp"])})]})}},1960:function(e,t,r){"use strict";var n=r(6357),s=r.n(n),i=r(5167),a=r(4871),o=r(7692),l=r(8933),c=r(9350),d=r(544),_=r.n(d),u=(r(4320),r(6877),r(4708));t.Z=function(e){var t=e.title;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.default,{children:(0,u.jsx)("link",{rel:"preload",href:"https://cdn.jsdelivr.net/npm/disqusjs@1.3.0/dist/disqusjs.css",as:"style",onLoad:"this.onload=null, this.rel='stylesheet'"})}),(0,u.jsxs)(l.df,{triggerOnce:!0,onChange:function(e){e?r.e(561).then(r.t.bind(r,3561,23)).then((function(e){return e.default})).then((function(e){return new e({shortname:_().disqus.shortname,siteName:_().title,identifier:window.location.pathname,title:t,api:_().disqus.api,apikey:_().disqus.apikey,admin:"renbaoshuo"})})):document.getElementById("disqus_thread").innerHTML=""},children:[(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(a.Z,{children:["._11q71j7o{background:var(--g-m)}","._2rkomciu{border-radius:var(--r)}","._1reo1wug{overflow-x:auto}","._18m91wug{overflow-y:auto}","._16qs1908{box-shadow:var(--s)}","._1bsb1lk2{width:95%}","._p12fam62{max-width:var(--w)}","._19pk1j6v{margin-top:1rem}","._2hwx1wug{margin-right:auto}","._otyr1j6v{margin-bottom:1rem}","._18u01wug{margin-left:auto}","._ca0q1j6v{padding-top:1rem}","._u5f31k8s{padding-right:1.5rem}","._n3td1j6v{padding-bottom:1rem}","._19bv1k8s{padding-left:1.5rem}"]}),(0,u.jsx)("div",{id:"disqus_thread",className:"jsx-649605965 "+((0,o.Z)(["_11q71j7o _2rkomciu _1reo1wug _18m91wug _16qs1908","_1bsb1lk2 _p12fam62 _19pk1j6v _2hwx1wug _otyr1j6v _18u01wug","_ca0q1j6v _u5f31k8s _n3td1j6v _19bv1k8s"])||"")},+new Date)]},+new Date),(0,u.jsx)(s(),{id:"649605965",children:["#dsqjs a{color:var(--c-a);}","#dsqjs .dsqjs-nav-tab{color:var(--c-s);}","#dsqjs .dsqjs-tab-active,#dsqjs .dsqjs-post-body{color:var(--c);}","#dsqjs .dsqjs-post-body pre,#dsqjs .dsqjs-post-body code{background:var(--g-p);}","#dsqjs .dsqjs-post-list .dsqjs-post-header .dsqjs-meta,#dsqjs .dsqjs-post-list .dsqjs-post-header .dsqjs-post-author{color:var(--c-m);}","#dsqjs .dsqjs-bullet{margin:0 4px;}","#dsqjs .dsqjs-order-label{background-color:var(--g-s);}","#dsqjs .dsqjs-disqus-logo{-webkit-filter:invert(1);filter:invert(1);}","#dsqjs .dsqjs-nav{border-bottom-color:var(--b);}","#dsqjs footer{color:var(--c-s);border-top-color:var(--b);}"]})]})]})}},927:function(e,t,r){"use strict";r.d(t,{$f:function(){return l},HU:function(){return c},My:function(){return d}});var n=r(544),s=r.n(n);function i(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"};if("string"!==typeof e){if(null==e)return"";if(!e)return e+"";e=""+e}return/[&<>"'`=]/.test(e)?e.replace(/[&<>"'`=]/g,(function(e){return t[e]})):e}function a(){return{"@type":"Organization",name:i(s().title),url:s().baseUrl||null,logo:{"@type":"ImageObject",url:s().image}}}function o(e){var t={};return Object.keys(e).forEach((function(r){null!==e[r]&&"undefined"!==typeof e[r]&&(t[r]=e[r])})),t}function l(e){var t=e.excerpt?i(e.excerpt):null,r={"@context":"https://schema.org","@type":"Article",publisher:a(),author:{"@type":"Person",name:i(s().author.name),url:s().author.link,description:s().author.description?i(s().author.description):null},headline:i(e.title),url:e.url||new URL(e.path,s().baseUrl).toString()||null,datePublished:e.date||null,image:{"@type":"ImageObject",url:e.thumb||s().image},keywords:e.tags&&e.tags.length>0?e.tags.join(", "):null,description:t,mainEntityOfPage:{"@type":"WebPage","@id":s().baseUrl||null}};return r.author=o(r.author),JSON.stringify(o(r))}function c(e){var t={"@context":"https://schema.org","@type":"WebSite",publisher:a(),url:e.url||new URL(e.path,s().baseUrl).toString()||null,image:{"@type":"ImageObject",url:s().image},mainEntityOfPage:{"@type":"WebPage","@id":s().baseUrl||null},description:s().description?i(s().description):null};return JSON.stringify(o(t))}function d(e){var t={"@context":"https://schema.org","@type":"Series",publisher:a(),url:e.url||new URL(e.path,s().baseUrl).toString()||null,image:{"@type":"ImageObject",url:s().image},name:e.tag,mainEntityOfPage:{"@type":"WebPage","@id":s().baseUrl||null},description:s().description?i(s().description):null};return JSON.stringify(o(t))}},9235:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return ge},default:function(){return he}});var n=r(1756),s=r(4663),i=r(922),a=r(5167),o=r(4871),l=r(7692),c=r(9350),d=r(7064),_=r(595),u=r(7417),m=r(1960),p=r(3897),f=(r(4320),r(6877),r(4708)),g=function(){return(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:["._11q71j7o{background:var(--g-m)}","._2rkomciu{border-radius:var(--r)}","._1reo1wug{overflow-x:auto}","._18m91wug{overflow-y:auto}","._16qs1908{box-shadow:var(--s)}","._1bsb1lk2{width:95%}","._p12fam62{max-width:var(--w)}","._19pk1j6v{margin-top:1rem}","._2hwx1wug{margin-right:auto}","._otyr1j6v{margin-bottom:1rem}","._18u01wug{margin-left:auto}","._ca0q1k8s{padding-top:1.5rem}","._u5f3viql{padding-right:2rem}","._n3td1k8s{padding-bottom:1.5rem}","._19bvviql{padding-left:2rem}","._y3gn1h6o{text-align:center}","._1wyb11yk{font-size:.9rem}"]}),(0,f.jsxs)("div",{className:(0,l.Z)(["_11q71j7o _2rkomciu _1reo1wug _18m91wug _16qs1908","_1bsb1lk2 _p12fam62 _19pk1j6v _2hwx1wug _otyr1j6v _18u01wug","_19pk1j6v _2hwx1wug _otyr1j6v _18u01wug _ca0q1k8s _u5f3viql _n3td1k8s _19bvviql _y3gn1h6o _1wyb11yk"]),children:[(0,f.jsx)("div",{children:"\u559c\u6b22\u8fd9\u7bc7\u6587\u7ae0\uff1f\u4e3a\u4ec0\u4e48\u4e0d\u8003\u8651\u6253\u8d4f\u4e00\u4e0b\u4f5c\u8005\u5462\uff1f"}),(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:["._syazu67f{color:#fff}","._bfhky4xi{background-color:#946ce6}","._2rko6mu8{border-radius:.25rem}","._4bfu1r31{-webkit-text-decoration-color:currentColor;text-decoration-color:currentColor}","._1hmsglyw{-webkit-text-decoration-line:none;text-decoration-line:none}","._ajmmnqa1{-webkit-text-decoration-style:solid;text-decoration-style:solid}","._ca0q6mu8{padding-top:.25rem}","._u5f31j6v{padding-right:1rem}","._n3td6mu8{padding-bottom:.25rem}","._19bv1j6v{padding-left:1rem}","._19pk1kwk{margin-top:.5rem}","._1e0c1o8l{display:inline-block}","._uiztglyw{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"]}),(0,f.jsx)("a",{href:"https://afdian.net/@baoshuo",target:"_blank",rel:"noopener noreferrer",className:(0,l.Z)(["_syazu67f _bfhky4xi _2rko6mu8 _4bfu1r31 _1hmsglyw _ajmmnqa1 _ca0q6mu8 _u5f31j6v _n3td6mu8 _19bv1j6v _19pk1kwk _1e0c1o8l _uiztglyw"]),children:"\u7231\u53d1\u7535"})]})]})]})},h=["as","style"],b=["as","style"];function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w="._qnec1ssb:before{left:50%}",v="._1auk1ssb:before{top:50%}",k="._kfgt12ei:before{height:.65em}",y="._1mp412ei:before{width:.65em}",q="._kzdanqa1:before{border-style:solid}",Z="._7dwz56g3:before{transform:translate(-25%,-50%) rotate(-45deg)}",O="._1cs8stnw:before{position:absolute}",z='._1kt9b3bt:before{content:""}',N="._1bsb1x4e{width:1em}",P="._4t3i1x4e{height:1em}",C="._1e0c1o8l{display:inline-block}",E="._kqswh2mm{position:relative}",S="._s7n4nkob{vertical-align:middle}",D="._azhwxq2a{text-indent:-9999px}",U="._19bv1kwk{padding-left:.5rem}",R="._n3tdidpf{padding-bottom:0}",H="._u5f31kwk{padding-right:.5rem}",L="._ca0qidpf{padding-top:0}",M="._syazqrna{color:var(--c-m)}",F="._4cvr1h6o{align-items:center}",T="._i0dl1ssb{flex-basis:50%}",I="._1o9zkb7n{flex-shrink:1}",A="._16jlkb7n{flex-grow:1}",B="._1e0c1txw{display:flex}";var W=function(e){var t=e.prev,r=e.next;return(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:["._1bsb1lk2{width:95%}","._p12fam62{max-width:var(--w)}","._19pk1j6v{margin-top:1rem}","._2hwx1wug{margin-right:auto}","._otyr1j6v{margin-bottom:1rem}","._18u01wug{margin-left:auto}",B,"._1wybgm0b{font-size:.9em}","._k48pbfng{font-weight:500}"]}),(0,f.jsxs)("div",{className:(0,l.Z)(["_1bsb1lk2 _p12fam62 _19pk1j6v _2hwx1wug _otyr1j6v _18u01wug","_1e0c1txw _1wybgm0b _k48pbfng"]),children:[t&&(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:[B,A,I,T,"._1bah1y6m{justify-content:flex-start}","._y3gn1e5h{text-align:left}"]}),(0,f.jsx)("div",{className:(0,l.Z)(["_1e0c1txw _16jlkb7n _1o9zkb7n _i0dl1ssb _1bah1y6m _y3gn1e5h"]),children:(0,f.jsx)(d.default,{href:t.url,passHref:!0,children:i.createElement((0,i.forwardRef)((function(e,t){var r=e.as,n=void 0===r?"a":r,i=e.style,c=(0,s.Z)(e,h);return(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:[B,F,M,L,H,R,U]}),(0,f.jsx)(n,x(x({},c),{},{style:i,ref:t,className:(0,l.Z)(["_1e0c1txw _4cvr1h6o _syazqrna _ca0qidpf _u5f31kwk _n3tdidpf _19bv1kwk",c.className])}))]})})),{},(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:["._2hwx1kwk{margin-right:.5rem}",D,S,E,C,P,N,z,O,Z,"._3l8815w8:before{border-width:2px 0 0 2px}",q,y,k,v,w]}),(0,f.jsx)("i",{className:(0,l.Z)(["_2hwx1kwk _azhwxq2a _s7n4nkob _kqswh2mm _1e0c1o8l _4t3i1x4e _1bsb1x4e _1kt9b3bt _1cs8stnw _7dwz56g3 _3l8815w8 _kzdanqa1 _1mp412ei _kfgt12ei _1auk1ssb _qnec1ssb"])})]}),t.title)})})]}),r&&(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:[B,A,I,T,"._1bahesu3{justify-content:flex-end}","._y3gnusic{text-align:right}"]}),(0,f.jsx)("div",{className:(0,l.Z)(["_1e0c1txw _16jlkb7n _1o9zkb7n _i0dl1ssb _1bahesu3 _y3gnusic"]),children:(0,f.jsx)(d.default,{href:r.url,passHref:!0,children:i.createElement((0,i.forwardRef)((function(e,t){var r=e.as,n=void 0===r?"a":r,i=e.style,c=(0,s.Z)(e,b);return(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:[B,F,M,L,H,R,U]}),(0,f.jsx)(n,x(x({},c),{},{style:i,ref:t,className:(0,l.Z)(["_1e0c1txw _4cvr1h6o _syazqrna _ca0qidpf _u5f31kwk _n3tdidpf _19bv1kwk",c.className])}))]})})),{},r.title,(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:["._18u01kwk{margin-left:.5rem}",D,S,E,C,P,N,z,O,Z,"._3l88vtp2:before{border-width:0 2px 2px 0}",q,y,k,v,w]}),(0,f.jsx)("i",{className:(0,l.Z)(["_18u01kwk _azhwxq2a _s7n4nkob _kqswh2mm _1e0c1o8l _4t3i1x4e _1bsb1x4e _1kt9b3bt _1cs8stnw _7dwz56g3 _3l88vtp2 _kzdanqa1 _1mp412ei _kfgt12ei _1auk1ssb _qnec1ssb"])})]}))})})]})]})]})},J=r(927),X=r(4687),Y=r.n(X),$=["as","style"];function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Q=function(e){var t=e.tags;return(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:["._1wyb11yk{font-size:.9rem}","._ca0q1k8s{padding-top:1.5rem}","._u5f3viql{padding-right:2rem}","._n3td1k8s{padding-bottom:1.5rem}","._19bvviql{padding-left:2rem}"]}),(0,f.jsx)("div",{className:(0,l.Z)(["_1wyb11yk _ca0q1k8s _u5f3viql _n3td1k8s _19bvviql"]),children:t.map((function(e){var t=e.name,r=e.url;return(0,f.jsx)(d.default,{href:r,passHref:!0,children:i.createElement((0,i.forwardRef)((function(e,t){var r=e.as,n=void 0===r?"a":r,i=e.style,c=(0,s.Z)(e,$);return(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:["._syazvi9c{color:var(--c-s)}","._4bfu1r31{-webkit-text-decoration-color:currentColor;text-decoration-color:currentColor}","._1hmsglyw{-webkit-text-decoration-line:none;text-decoration-line:none}","._ajmmnqa1{-webkit-text-decoration-style:solid;text-decoration-style:solid}","._2hwx1kwk{margin-right:.5rem}","._30l32rdg:hover{color:var(--c-a)}"]}),(0,f.jsx)(n,K(K({},c),{},{style:i,ref:t,className:(0,l.Z)(["_syazvi9c _4bfu1r31 _1hmsglyw _ajmmnqa1 _2hwx1kwk _30l32rdg",c.className])}))]})})),{},"# ".concat(t))},t)}))})]})},V=r(544),ee=r.n(V),te="._1wybtjj4{font-size:.8em}",re="._1o9zidpf{flex-shrink:0}",ne="._2lx21bp4{flex-direction:column}",se="._1e0c1txw{display:flex}",ie="._30l32rdg:hover{color:var(--c-a)}",ae="._ajmmnqa1{-webkit-text-decoration-style:solid;text-decoration-style:solid}",oe="._1hmsglyw{-webkit-text-decoration-line:none;text-decoration-line:none}",le="._4bfu1r31{-webkit-text-decoration-color:currentColor;text-decoration-color:currentColor}",ce=function(e){var t=e.title,r=e.url,n=e.author,s=e.date,i=e.isoDate,c=e.license;return(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:["._11q765tl{background:var(--g-l)}","._ca0q1k92{padding-top:1.25rem}","._u5f3viql{padding-right:2rem}","._n3td1k92{padding-bottom:1.25rem}","._19bvviql{padding-left:2rem}","._kqswh2mm{position:relative}","._1reo15vq{overflow-x:hidden}","._18m915vq{overflow-y:hidden}",'._aetrb3bt:after{content:""}',"._18postnw:after{position:absolute}","._1qdgjidk:after{height:175px}","._z0aijidk:after{width:175px}","._32rx1mi1:after{right:-25px}","._15l2bx3o:after{top:-35px}","._1peq1acx:after{opacity:.25}","._16r212fn:after{background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'%3E%3Cdefs/%3E%3Cpath fill='%234a4a4a' d='M245.8 214.9l-33.2 17.3c-9.4-19.6-25.2-20-27.4-20-22.2 0-33.3 14.6-33.3 43.9 0 23.5 9.2 43.8 33.3 43.8 14.4 0 24.6-7 30.5-21.3l30.6 15.5a73.2 73.2 0 01-65.1 39c-22.6 0-74-10.3-74-77 0-58.7 43-77 72.6-77 30.8-.1 52.7 11.9 66 35.8zm143 0l-32.7 17.3c-9.5-19.8-25.7-20-27.9-20-22.1 0-33.2 14.6-33.2 43.9 0 23.5 9.2 43.8 33.2 43.8 14.5 0 24.7-7 30.5-21.3l31 15.5c-2 3.8-21.3 39-65 39-22.7 0-74-9.9-74-77 0-58.7 43-77 72.6-77C354 179 376 191 389 214.8zM247.7 8C104.7 8 0 123 0 256c0 138.4 113.6 248 247.6 248C377.5 504 496 403 496 256 496 118 389.4 8 247.6 8zm.8 450.8c-112.5 0-203.7-93-203.7-202.8 0-105.5 85.5-203.3 203.8-203.3A201.7 201.7 0 01451.3 256c0 121.7-99.7 202.9-202.9 202.9z'/%3E%3C/svg%3E\")}","@media (prefers-color-scheme:dark){._17ht1oox:after{background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'%3E%3Cdefs/%3E%3Cpath fill='%23ffffff70' d='M245.8 214.9l-33.2 17.3c-9.4-19.6-25.2-20-27.4-20-22.2 0-33.3 14.6-33.3 43.9 0 23.5 9.2 43.8 33.3 43.8 14.4 0 24.6-7 30.5-21.3l30.6 15.5a73.2 73.2 0 01-65.1 39c-22.6 0-74-10.3-74-77 0-58.7 43-77 72.6-77 30.8-.1 52.7 11.9 66 35.8zm143 0l-32.7 17.3c-9.5-19.8-25.7-20-27.9-20-22.1 0-33.2 14.6-33.2 43.9 0 23.5 9.2 43.8 33.2 43.8 14.5 0 24.7-7 30.5-21.3l31 15.5c-2 3.8-21.3 39-65 39-22.7 0-74-9.9-74-77 0-58.7 43-77 72.6-77C354 179 376 191 389 214.8zM247.7 8C104.7 8 0 123 0 256c0 138.4 113.6 248 247.6 248C377.5 504 496 403 496 256 496 118 389.4 8 247.6 8zm.8 450.8c-112.5 0-203.7-93-203.7-202.8 0-105.5 85.5-203.3 203.8-203.3A201.7 201.7 0 01451.3 256c0 121.7-99.7 202.9-202.9 202.9z'/%3E%3C/svg%3E\")}}"]}),(0,f.jsxs)("div",{className:(0,l.Z)(["_11q765tl _ca0q1k92 _u5f3viql _n3td1k92 _19bvviql _kqswh2mm _1reo15vq _18m915vq _aetrb3bt _18postnw _1qdgjidk _z0aijidk _32rx1mi1 _15l2bx3o _1peq1acx _16r212fn _17ht1oox"]),children:[(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:["._k48p8n31{font-weight:bold}"]}),(0,f.jsx)("div",{className:(0,l.Z)(["_k48p8n31"]),children:t})]}),(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:["._1wybgm0b{font-size:.9em}"]}),(0,f.jsx)("div",{className:(0,l.Z)(["_1wybgm0b"]),children:(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:["._syazvi9c{color:var(--c-s)}",le,oe,ae,ie]}),(0,f.jsx)("a",{href:r,className:(0,l.Z)(["_syazvi9c _4bfu1r31 _1hmsglyw _ajmmnqa1 _30l32rdg"]),children:new URL(r,ee().baseUrl).toString()})]})})]}),(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:[se,"._1n261g80{flex-wrap:wrap}","._zulp8cnd{gap:.5rem 2rem}","._19pk1j6v{margin-top:1rem}"]}),(0,f.jsxs)("div",{className:(0,l.Z)(["_1e0c1txw _1n261g80 _zulp8cnd _19pk1j6v"]),children:[(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:[se,ne,re]}),(0,f.jsxs)("div",{className:(0,l.Z)(["_1e0c1txw _2lx21bp4 _1o9zidpf"]),children:[(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:[te]}),(0,f.jsx)("div",{className:(0,l.Z)(["_1wybtjj4"]),children:"\u672c\u6587\u4f5c\u8005"})]}),(0,f.jsx)("div",{children:n||ee().author.name})]})]}),(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:[se,ne,re]}),(0,f.jsxs)("div",{className:(0,l.Z)(["_1e0c1txw _2lx21bp4 _1o9zidpf"]),children:[(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:[te]}),(0,f.jsx)("div",{className:(0,l.Z)(["_1wybtjj4"]),children:"\u53d1\u5e03\u4e8e"})]}),(0,f.jsx)("time",{dateTime:i,children:s})]})]}),(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:[se,ne,re]}),(0,f.jsxs)("div",{className:(0,l.Z)(["_1e0c1txw _2lx21bp4 _1o9zidpf"]),children:[(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:[te]}),(0,f.jsx)("div",{className:(0,l.Z)(["_1wybtjj4"]),children:"\u7248\u6743\u534f\u8bae"})]}),(0,f.jsx)("div",{children:c||(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:["._syaz1kw7{color:inherit}",le,oe,ae,ie]}),(0,f.jsx)("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.zh-Hans",target:"_blank",rel:"license noopener noreferrer",className:(0,l.Z)(["_syaz1kw7 _4bfu1r31 _1hmsglyw _ajmmnqa1 _30l32rdg"]),children:"CC BY-NC-SA 4.0"})]})})]})]})]})]})]})]})},de=["as","style"];function _e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_e(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_e(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var me="._ca0q1kwk{padding-top:.5rem}",pe="._18u0idpf{margin-left:0}",fe="._2hwxidpf{margin-right:0}";var ge=!0,he=function(e){var t=e.title,r=e.post,n=r.date,h=(r.updated,r.isoDate);r.isoUpdated;return(0,i.useEffect)((function(){(0,_.Z)(document.querySelectorAll("#".concat(Y().markdownBody," img")),{background:"var(--g-m)"})})),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(c.default,{children:[(0,f.jsx)("title",{children:t}),r.excerpt&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("meta",{name:"description",content:r.excerpt.trim()},"description"),(0,f.jsx)("meta",{property:"og:description",content:r.excerpt.trim()},"og:description")]}),(0,f.jsx)("meta",{name:"keywords",content:r.tags.join(",")},"keywords"),(0,f.jsx)("meta",{property:"og:type",content:"article"},"og:type"),(0,f.jsx)("meta",{property:"og:title",content:t},"og:title"),(0,f.jsx)("meta",{property:"og:url",content:r.url},"og:url"),r.thumb&&(0,f.jsx)("meta",{property:"og:image",content:r.thumb},"og:image"),(0,f.jsx)("link",{rel:"canonical",href:r.url},"canonical"),r.thumb&&(0,f.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twitter:card")]}),(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:["._11q71j7o{background:var(--g-m)}","._2rkomciu{border-radius:var(--r)}","._1reo1wug{overflow-x:auto}","._18m91wug{overflow-y:auto}","._16qs1908{box-shadow:var(--s)}","._1bsb1lk2{width:95%}","._p12fam62{max-width:var(--w)}","._19pk1j6v{margin-top:1rem}","._2hwx1wug{margin-right:auto}","._otyr1j6v{margin-bottom:1rem}","._18u01wug{margin-left:auto}"]}),(0,f.jsxs)("article",{className:(0,l.Z)(["_11q71j7o _2rkomciu _1reo1wug _18m91wug _16qs1908","_1bsb1lk2 _p12fam62 _19pk1j6v _2hwx1wug _otyr1j6v _18u01wug"]),children:[r.thumb&&(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:["._1bsb1osq{width:100%}","._c71l1kdj{max-height:25pc}","._5ral1dfr{-o-object-fit:cover;object-fit:cover}"]}),(0,f.jsx)("img",{src:r.thumb,alt:r.title,className:(0,l.Z)(["_1bsb1osq _c71l1kdj _5ral1dfr"])})]}),(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:["._19pkidpf{margin-top:0}",fe,"._otyridpf{margin-bottom:0}",pe,"._ca0q1k92{padding-top:1.25rem}","._u5f3viql{padding-right:2rem}","._n3tdidpf{padding-bottom:0}","._19bvviql{padding-left:2rem}",me]}),(0,f.jsxs)("header",{className:(0,l.Z)(["_19pkidpf _2hwxidpf _otyridpf _18u0idpf _ca0q1k92 _u5f3viql _n3tdidpf _19bvviql",r.thumb&&"_ca0q1kwk"]),children:[(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:["._1wyb1m1q{font-size:1.75rem}","._1dyzb3zs{letter-spacing:.75px}","._19pkoqnp{margin-top:.75rem}",fe,"._otyroqnp{margin-bottom:.75rem}",pe]}),(0,f.jsx)("h1",{className:(0,l.Z)(["_1wyb1m1q _1dyzb3zs _19pkoqnp _2hwxidpf _otyroqnp _18u0idpf"]),children:r.title})]}),(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:[me,"._u5f3idpf{padding-right:0}","._n3td1kwk{padding-bottom:.5rem}","._19bvidpf{padding-left:0}","._syazqrna{color:var(--c-m)}"]}),(0,f.jsxs)("div",{className:(0,l.Z)(["_ca0q1kwk _u5f3idpf _n3td1kwk _19bvidpf _syazqrna"]),children:[(0,f.jsx)("time",{dateTime:h,children:n}),r.categories.map((function(e){var t=e.name,r=e.url;return(0,f.jsxs)(i.Fragment,{children:[(0,f.jsx)("span",{className:"dot"}),(0,f.jsx)(d.default,{href:r,passHref:!0,children:i.createElement((0,i.forwardRef)((function(e,t){var r=e.as,n=void 0===r?"a":r,i=e.style,c=(0,s.Z)(e,de);return(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(o.Z,{children:["._syaz1kw7{color:inherit}","._4bfu1r31{-webkit-text-decoration-color:currentColor;text-decoration-color:currentColor}","._1hmsglyw{-webkit-text-decoration-line:none;text-decoration-line:none}","._ajmmnqa1{-webkit-text-decoration-style:solid;text-decoration-style:solid}","._30l32rdg:hover{color:var(--c-a)}"]}),(0,f.jsx)(n,ue(ue({},c),{},{style:i,ref:t,className:(0,l.Z)(["_syaz1kw7 _4bfu1r31 _1hmsglyw _ajmmnqa1 _30l32rdg",c.className])}))]})})),{},t)})]},t)})),(0,f.jsx)("span",{className:"dot"}),(0,f.jsx)("span",{children:r.wordCount})]})]})]})]}),(0,f.jsx)(p.Z,{content:(0,u.sY)(r.content)}),(0,f.jsx)(ce,{title:r.title,url:r.url,author:r.author,date:n,isoDate:h,license:r.license}),r.tags.length&&(0,f.jsx)(Q,{tags:r.tags})||(0,f.jsx)(f.Fragment,{})]})]}),(0,f.jsx)(g,{}),(r.prev||r.next)&&(0,f.jsx)(W,{prev:r.prev,next:r.next})||(0,f.jsx)(f.Fragment,{}),r.comments&&(0,f.jsx)(m.Z,{title:r.title})||(0,f.jsx)(f.Fragment,{}),(0,f.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:(0,J.$f)(r)}})]})}},4320:function(e,t,r){"use strict";r.d(t,{W:function(){return n}});r(922);var n={background:"var(--g-m)",borderRadius:"var(--r)",overflow:"auto",boxShadow:"var(--s)"}},6877:function(e,t,r){"use strict";r(922)},8401:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[slug]",function(){return r(9235)}])},4687:function(e){e.exports={markdown:"__bs___0afd559297e75abe"}}},function(e){e.O(0,[870,9,774,888,179],(function(){return t=8401,e(e.s=t);var t}));var t=e.O();_N_E=t}]);