(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[694],{7633:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories/[name]/page/[page]",function(){return s(7514)}])},6176:function(e,t,s){"use strict";var c=s(5893),r=s(7667),n=s(6411);let a=e=>{let{src:t,className:s,alt:r,sizes:a}=e;return(0,c.jsxs)("picture",{children:[(0,n.Z)(t)&&(null==a?void 0:a.map(e=>{let[s,r]=e;return(0,c.jsx)("source",{srcSet:t+"/"+r,media:"(max-width: ".concat(s,"px)")},s)})),(0,c.jsx)("img",{className:s,src:t,alt:r,loading:"lazy"})]})};t.Z=(0,r.memo)(a)},6270:function(e,t,s){"use strict";var c=s(5893),r=s(7667);s(9247);var n=s(1664),a=s.n(n);let l=e=>{let{total:t,current:s}=e,r=e.base||"/",n=Math.min(1,s-1),l=Math.max(t-1+1,s+1),i=Math.max(n+1,s-2),o=Math.min(l-1,s+2),u=[],d=e=>1==e?r:"".concat(r,"page/").concat(e),h=(e,t,s,r)=>(0,c.jsx)(a(),{prefetch:!1,href:e,className:"dd n o ed oc Ab "+(r?"gd ":"Lb ")+(r?"hd ":"Qb ")+"M b N q Rb Sb Tb Ub Xb fd ",children:t},s||e);s>1&&u.push(h(d(s-1),"<",-1));for(let b=1;b<=n;b++)u.push(h(d(b),b));i-n>1&&u.push((0,c.jsx)("span",{className:"dd n o ed oc Ab M Nb N Ob ",children:"..."},"space1"));for(let f=i;f<s;f++)u.push(h(d(f),f));u.push(h(d(s),s,s,!0));for(let m=s+1;m<=o;m++)u.push(h(d(m),m));l-o>1&&u.push((0,c.jsx)("span",{className:"dd n o ed oc Ab M Nb N Ob ",children:"..."},"space2"));for(let x=l;x<=t;x++)u.push(h(d(x),x));return s!==t&&u.push(h(d(s+1),">",t+1)),(0,c.jsx)("div",{className:"m n cd pc s ac Fb bc ",children:u})};t.Z=(0,r.memo)(l)},8252:function(e,t,s){"use strict";var c=s(5893),r=s(7667);s(9247);var n=s(1664),a=s.n(n),l=s(776);let i=e=>{let{category:t}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{}),(0,c.jsx)(a(),{href:t.url,prefetch:!1,className:"Lb Ab Mb ",children:t.name})]})};t.Z=(0,r.memo)(i)},9787:function(e,t,s){"use strict";s.d(t,{Z:function(){return m}});var c=s(5893),r=s(9247),n=s(7667),a=s(1664),l=s.n(a),i=s(8252),o=s(587),u=s(6176);let d={post:{95:"m",ffJrBE:{"9t":"vf"}}},h=e=>{let{post:t}=e;return(0,c.jsxs)("article",{className:(0,r.Z)(o.I,d.post),children:[t.thumb&&(0,c.jsx)(l(),{href:t.url,prefetch:!1,className:"vc if wf xf yf zf Af Bf Cf Df ",children:(0,c.jsx)(u.Z,{className:"vc if wf xf Bf Cf Df Ef Hc Hb Ff Gf Hf If Jf ",src:t.thumb,alt:t.title,sizes:[[480,"480/400"]]})}),(0,c.jsxs)("div",{className:"m F G H I kb Bb ",children:[(0,c.jsx)("h3",{className:"s t Fb v c ",children:(0,c.jsx)(l(),{prefetch:!1,href:t.url,className:"Lb zc ",children:t.title})}),t.excerpt&&(0,c.jsx)("div",{className:"Fb wc Cb ",children:t.excerpt}),(0,c.jsxs)("div",{className:"Kb ",children:[(0,c.jsx)("time",{dateTime:t.isoDate,children:t.date}),null!=t.categories&&t.categories.map(e=>(0,c.jsx)(i.Z,{category:e},e.name))]})]})]})};var b=(0,n.memo)(h);let f=e=>{let{posts:t,className:s}=e;return(0,c.jsx)("div",{className:"m kb bd "+(s?" "+s:""),children:t.map(e=>(0,c.jsx)(b,{post:e},e.title))})};var m=f},6411:function(e,t){"use strict";let s=e=>{let{host:t}=new URL(e);return!!(t.endsWith("loli.io")||t.endsWith("loli.net"))||"s1.baoshuo.ren"===t};t.Z=s},7514:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return x}});var c=s(5893),r=s(9247),n=s(9008),a=s.n(n),l=s(6270),i=s(4740),o=s.n(i),u=s(9787),d=s(587),h=s(7694),b=s(4811);let f={header:{4:"Eb",95:"m",ef:"Bb"}},m=e=>{let{title:t,name:s,posts:n,postsTotal:i,current:m,total:x,url:p}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(a(),{children:[(0,c.jsx)("title",{children:t}),(0,c.jsx)("meta",{property:"og:title",content:t},"og:title"),(0,c.jsx)("meta",{property:"og:url",content:new URL(1===m?"/categories/".concat(s,"/"):"/categories/".concat(s,"/page/").concat(m,"/"),o().baseUrl).toString()},"og:url")]}),(0,c.jsxs)("div",{className:(0,r.Z)(b.n),children:[(0,c.jsxs)("header",{className:(0,r.Z)(d.I,h.F.header,f.header),children:[(0,c.jsxs)("h1",{className:(0,r.Z)(h.F.title),children:[(0,c.jsx)("span",{className:"r ",children:"分类："}),s]}),(0,c.jsxs)("div",{children:["共 ",i," 篇文章"]})]}),(0,c.jsx)(u.Z,{className:"Fb ",posts:n}),(0,c.jsx)(l.Z,{current:m,total:x,base:"/categories/".concat(s,"/")})]})]})};var x=!0;t.default=m},587:function(e,t,s){"use strict";s.d(t,{I:function(){return c},b:function(){return r}}),s(9247);let{card:c,pCard:r}={card:{"1x":"Qb","5v":"Rb","5x":"Sb","3q":"Tb","3o":"Ub",k4:"Vb",k5:"Wb","6l":"Xb"},pCard:{"1x":"Qb","5v":"Rb","5x":"Sb","3q":"Tb","3o":"Ub",k4:"Vb",k5:"Wb","6l":"Xb",kr:"F",ko:"x",kh:"H",kn:"z"}}},4811:function(e,t,s){"use strict";s.d(t,{n:function(){return c}}),s(9247);let{container:c}={container:{ue:"Yb",i6:"Zb",g7:"J",g4:"ac",fu:"Fb",g3:"bc"}}},7694:function(e,t,s){"use strict";s.d(t,{F:function(){return c}}),s(9247);let{...c}={header:{fu:"Fb",kr:"F",ko:"G",kh:"H",kn:"I"},title:{ba:"cc",g7:"s",g4:"t",fu:"u",g3:"v"}}}},function(e){e.O(0,[313,774,888,179],function(){return e(e.s=7633)}),_N_E=e.O()}]);