(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{5538:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[slug]",function(){return s(9098)}])},9768:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var r=s(5893),n=s(7667),a=s(9247);let c={root:null,rootMargin:"0px 0px 0px 0px",threshold:0},l=e=>{let[t,s]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(e.current){let t=new IntersectionObserver((t,r)=>{t.forEach(t=>{t.isIntersecting&&(s(!0),r.unobserve(e.current))})},c);t.observe(e.current)}},[e]),t};var i=s(4740),d=s.n(i),h=s(587),o=s(4811);let m=(0,n.lazy)(()=>Promise.all([s.e(988),s.e(244)]).then(s.bind(s,7244))),b=e=>{let{title:t,url:s}=e,c=(0,n.useRef)(null),i=l(c),[b,u]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{window.location.hash.includes("atk-comment")&&u(!0),window.location.search.includes("atk_comment")&&u(!0)},[]),(0,r.jsx)("div",{ref:c,className:(0,a.Z)(h.b,o.n),children:(i||b)&&(0,r.jsx)(n.Suspense,{fallback:(0,r.jsx)(r.Fragment,{children:"Loading..."}),children:(0,r.jsx)(m,{title:t,url:new URL(s,d().baseUrl).toString()},t)})})};var u=b},2043:function(e,t,s){"use strict";s.d(t,{Z:function(){return j}});var r=s(5893);s(9247);var n=s(7667),a=s(9973),c=s(9691),l=s(5726);let i=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"]),d=0,h=e=>!!(null==e||""===e||Number.isNaN(e)),o=e=>Array.isArray(e)&&"$"===e[0],m=e=>(0,c.mz)((0,a.Qc)(e)),b=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=e.length;if(0===a)return[];d+=1;let c=[];for(let u=0;u<a;u++){var x;let f=e[u];if(h(f))continue;if(Array.isArray(f)&&!o(f)){0!==f.length&&c.push(...b(f,t,s+1));continue}if("number"==typeof f||"string"==typeof f){c.push(f);continue}if(Array.isArray(f[3])||(h(f[3])?f[3]=[]:f[3]=[f[3]]),!f[1]){c.push(...b(f[3],t,s+1));continue}let g="string"==typeof f[1]?f[1]:"div",j=null!==(x=f[2])&&void 0!==x?x:{},p=Object.keys(j).reduce((e,t)=>{var s;return e[null!==(s=l.Qc[t])&&void 0!==s?s:t]=j[t],e},{});p.style&&(p.style=m(p.style));let v=t&&t[g]?t[g]:g,N="".concat(d,"-").concat(u,"-").concat(s);i.has(g)?(c.push((0,n.createElement)(v,{...p,key:N})),c.push(...b(f[3],t,s+1))):c.push((0,r.jsx)(v,{...p,children:b(f[3],t,s+1)},N))}return c},u=e=>{let{children:t}=e,s=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=document.createRange().createContextualFragment("<script>"+t+"</script>");s.current.appendChild(e)},[]),(0,r.jsx)("div",{ref:s,style:{display:"none"},"data-script":!0})},x=e=>{let t=Array.isArray(e.tree)?e.tree:[e.tree];return b(t,{script:u})};var f=s(6505);let g=e=>{let{tree:t}=e;return(0,r.jsx)("section",{className:"Y Z ab bb Sd db v fb Dc ",id:f.markdown,children:(0,r.jsx)(x,{tree:t})})};var j=g},8252:function(e,t,s){"use strict";var r=s(5893),n=s(7667);s(9247);var a=s(1664),c=s.n(a),l=s(776);let i=e=>{let{category:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)(c(),{href:t.url,prefetch:!1,className:"yb nb zb ",children:t.name})]})};t.Z=(0,n.memo)(i)},9098:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return Q},default:function(){return V}});var r=s(5893),n=s(9247),a=s(9008),c=s.n(a),l=s(776),i=s(8252),d=s(2043),h=s(7667),o=s(587),m=s(4811);let b={card:{g7:"x",g4:"Sb",fu:"sb",g3:"Tb",pr:"Bc",ba:"Jc"}},u=()=>(0,r.jsxs)("div",{className:(0,n.Z)(o.b,m.n,b.card),children:[(0,r.jsx)("div",{children:"喜欢这篇文章？为什么不考虑打赏一下作者呢？"}),(0,r.jsx)("a",{className:"Vc Td Ud Vd Wd Xd Yd nb Zd zc ae Eb a Cc ",href:"https://afdian.net/@baoshuo",target:"_blank",rel:"noopener noreferrer",children:"爱发电"})]});var x=(0,h.memo)(u),f=s(1664),g=s.n(f);let j=()=>(0,r.jsx)("i",{className:"ke Mf Nf s a Lf Kf Pf Sf Tg Xf Yf Zf ag Tf Uf Vf Wf dg bg Rf Qf "});var p=(0,h.memo)(j);let v=()=>(0,r.jsx)("i",{className:"Ug Mf Nf s a Lf Kf Pf Sf Tg Vg Wg Xg Yg Tf Uf Vf Wf dg bg Rf Qf "});var N=(0,h.memo)(v);let y={container:{95:"m",ba:"be",bu:"ce"}},k=e=>{let{prev:t,next:s}=e;return(0,r.jsxs)("div",{className:(0,n.Z)(m.n,y.container),children:[t&&(0,r.jsx)("div",{className:"m de ee fe ge he ",children:(0,r.jsxs)(g(),{prefetch:!1,href:t.url,className:"m o xb Id Ab eb Bb ",children:[(0,r.jsx)(p,{}),t.title]})}),s&&(0,r.jsx)("div",{className:"m de ee fe ie je ",children:(0,r.jsxs)(g(),{prefetch:!1,href:s.url,className:"m o xb Id Ab eb Bb ",children:[s.title,(0,r.jsx)(N,{})]})})]})};var w=(0,h.memo)(k),_=s(5482),Z=s(24);let S=()=>(0,r.jsx)("i",{className:"hg s Ic ig jg kg lg mg Fb F f G H ng og pg qg rg sg tg ug Pf vg Sf wg xg yg zg Ag Bg Cg Dg Eg Fg Gg Hg Ig Jg Kg Lg Mg Ng Og Pg Qg Rg Sg "});var E=(0,h.memo)(S),A=s(856);let C=e=>{let{toc:t,isChild:s=!1}=e,n=Object.keys(t).filter(e=>!["id","text"].includes(e)).map(e=>parseInt(e,10)).sort((e,t)=>e-t);return(0,r.jsxs)(r.Fragment,{children:[t.id&&t.text&&(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"Od Pd Qd Md m yb Nd nb Rd ",href:"#"+t.id,children:t.text})}),n.length>0&&(0,r.jsx)("ul",{className:(s?"E ":"")+((s?"H ":"")+((s?"Gb ":"")+((s?"Vc ":"Y ")+((s?"Jd ":"Z ")+((s?"Kd ":"ab ")+(s?"Ld ":"bb "))))))+"Id vb eb "+(s?"Md ":"wb ")+"Jc Hd ",children:n.map(e=>(0,r.jsx)(C,{toc:t[e],isChild:!0},e))})]})},F=e=>{let{toc:t}=e,[s,n]=(0,Z.KO)(_.w),a=(0,h.useRef)(null);return((0,A.s)("click",e=>{var t;(null===(t=a.current)||void 0===t?void 0:t.contains(e.target))&&n(!1)}),s)?(0,r.jsxs)("div",{className:"mc j l Qc cc C e D E F f G H ld md nd od Wb Xb Yb Zb x pd sb qd t u v w rd sd td ud vd bc wd xd yd zd Bd Cd Dd ",ref:a,children:[(0,r.jsxs)("div",{className:"Ed m ob pb ",children:[(0,r.jsx)("div",{className:"Fd Gd ",children:"文章目录"}),(0,r.jsx)("div",{className:"Xc zb ",children:(0,r.jsx)(E,{})})]}),(0,r.jsx)(C,{toc:t})]}):null};var z=(0,h.memo)(F);let T=e=>{let{tags:t}=e;return(0,r.jsx)("div",{className:"Jc t db v fb ",children:t.map(e=>{let{name:t,url:s}=e;return(0,r.jsxs)(g(),{prefetch:!1,href:s,className:"pb nb ke zb ",children:["# ",t]},t)})})};var I=s(4740),R=s.n(I);let q=()=>(0,r.jsx)("i",{className:"a h Nf Zg ah bh ch dh eh fh gh hh ih F f G H jh kh lh mh Pf Sf nh oh ph qh Tf Uf Vf Wf rh sh th uh vh wh xh yh zh Gg Ig Ah Bh Ch Dh Eh Fh Gh Hh Ih Jh Kh Lh Mh Nh Oh Ph Qh "});var P=(0,h.memo)(q);let U=e=>{let{title:t,url:s,author:n,date:a,isoDate:c,updated:l,isoUpdated:i,license:d}=e;return(0,r.jsxs)("div",{className:"s le cb db me fb ne oe ",children:[(0,r.jsx)("div",{className:"d ",children:t}),(0,r.jsx)("div",{children:(0,r.jsx)("a",{className:"pb pe qe zb ",href:s,children:new URL(s,R().baseUrl).toString()})}),(0,r.jsxs)("div",{className:"m re x ",children:[(0,r.jsxs)("div",{className:"m kb qb pd sb ",children:[(0,r.jsx)("div",{className:"se ",children:"本文作者"}),(0,r.jsx)("div",{children:n||(0,r.jsx)("a",{className:"yb nb zb ",href:R().author.link,target:"_blank",children:R().author.name})})]}),(0,r.jsxs)("div",{className:"m kb qb pd sb ",children:[(0,r.jsx)("div",{className:"se ",children:"发布于"}),(0,r.jsx)("time",{dateTime:c,children:a})]}),a!==l&&(0,r.jsxs)("div",{className:"m kb qb pd sb ",children:[(0,r.jsx)("div",{className:"se ",children:"更新于"}),(0,r.jsx)("time",{dateTime:i,children:l})]}),(0,r.jsxs)("div",{className:"m kb qb pd sb ",children:[(0,r.jsx)("div",{className:"se ",children:"版权协议"}),(0,r.jsx)("div",{children:d||(0,r.jsx)("a",{className:"yb nb zb ",href:"https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.zh-Hans",target:"_blank",rel:"license noopener noreferrer",children:"CC BY-NC-SA 4.0"})})]})]}),(0,r.jsx)("div",{className:"se ",children:"转载或引用本文时请遵守许可协议，注明出处、不得用于商业用途！"}),(0,r.jsx)(P,{})]})};var Y=(0,h.memo)(U),G=s(9768);let O=e=>{var t;let{title:s,post:a}=e,{date:h,updated:b,isoDate:u,isoUpdated:f}=a,g=a.thumb;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:s}),a.excerpt&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"description",content:a.excerpt.trim()},"description"),(0,r.jsx)("meta",{property:"og:description",content:a.excerpt.trim()},"og:description")]}),(0,r.jsx)("meta",{name:"keywords",content:a.tags.join(",")},"keywords"),(0,r.jsx)("meta",{property:"og:type",content:"article"},"og:type"),(0,r.jsx)("meta",{property:"og:title",content:s},"og:title"),(0,r.jsx)("meta",{property:"og:url",content:a.url},"og:url"),a.thumb&&(0,r.jsx)("meta",{property:"og:image",content:a.thumb},"og:image"),a.thumb&&(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twitter:card")]}),(0,r.jsxs)("article",{className:(0,n.Z)(o.I,m.n),children:[a.thumb&&(0,r.jsx)("img",{className:"y tb ub ",src:a.thumb,alt:a.title}),(0,r.jsxs)("header",{className:"Y Z ab bb "+(g?"A ":"cb ")+"db eb fb ",children:[(0,r.jsx)("h1",{className:"ib Z jb bb gb hb ",children:a.title}),(0,r.jsxs)("div",{className:"A vb B wb xb ",children:[(0,r.jsx)("time",{dateTime:u,children:h}),null===(t=a.categories)||void 0===t?void 0:t.map(e=>(0,r.jsx)(i.Z,{category:e},e.name)),(0,r.jsx)(l.Z,{}),(0,r.jsx)("span",{children:a.wordCount})]})]}),(0,r.jsx)(d.Z,{tree:a.content},a.url),(0,r.jsx)(Y,{title:a.title,url:a.url,author:a.author,date:h,isoDate:u,updated:b,isoUpdated:f,license:a.license}),a.tags.length&&(0,r.jsx)(T,{tags:a.tags})||(0,r.jsx)(r.Fragment,{})]}),(0,r.jsx)(x,{}),!!(a.prev||a.next)&&(0,r.jsx)(w,{prev:a.prev,next:a.next}),a.comments&&(0,r.jsx)(G.Z,{title:a.title,url:a.url},s),(0,r.jsx)(z,{toc:a.toc})]})};var Q=!0,V=O},587:function(e,t,s){"use strict";s.d(t,{I:function(){return r},b:function(){return n}}),s(9247);let{card:r,pCard:n}={card:{"1x":"Vb","5v":"Wb","5x":"Xb","3q":"Yb","3o":"Zb",k4:"ac",k5:"bc","6l":"cc"},pCard:{"1x":"Vb","5v":"Wb","5x":"Xb","3q":"Yb","3o":"Zb",k4:"ac",k5:"bc","6l":"cc",kr:"t",ko:"db",kh:"v",kn:"fb"}}},4811:function(e,t,s){"use strict";s.d(t,{n:function(){return r}}),s(9247);let{container:r}={container:{ue:"Qb",i6:"Rb",g7:"x",g4:"Sb",fu:"sb",g3:"Tb"}}},6505:function(e){e.exports={markdown:"post_markdown__nRdJ1"}},2868:function(){},4777:function(){},9830:function(){},209:function(){}},function(e){e.O(0,[313,6,774,888,179],function(){return e(e.s=5538)}),_N_E=e.O()}]);