(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44],{4934:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[slug]",function(){return s(594)}])},6176:function(e,t,s){"use strict";var r=s(5893),n=s(7667),c=s(6411);let a=e=>{let{src:t,className:s,alt:n,sizes:a}=e;return(0,r.jsxs)("picture",{children:[(0,c.Z)(t)&&(null==a?void 0:a.map(e=>{let[s,n]=e;return(0,r.jsx)("source",{srcSet:t+"/"+n,media:"(max-width: ".concat(s,"px)")},s)})),(0,r.jsx)("img",{className:s,src:t,alt:n,loading:"lazy"})]})};t.Z=(0,n.memo)(a)},6270:function(e,t,s){"use strict";var r=s(5893),n=s(7667);s(9247);var c=s(1664),a=s.n(c);let l=e=>{let{total:t,current:s}=e,n=e.base||"/",c=Math.min(1,s-1),l=Math.max(t-1+1,s+1),i=Math.max(c+1,s-2),u=Math.min(l-1,s+2),o=[],d=e=>1==e?n:"".concat(n,"page/").concat(e),f=(e,t,s,n)=>(0,r.jsx)(a(),{prefetch:!1,href:e,className:"Nd n o Od Bc Ab "+(n?"Qd ":"Lb ")+(n?"Rd ":"Qb ")+"M b N q Rb Sb Tb Ub Xb Pd ",children:t},s||e);s>1&&o.push(f(d(s-1),"<",-1));for(let b=1;b<=c;b++)o.push(f(d(b),b));i-c>1&&o.push((0,r.jsx)("span",{className:"Nd n o Od Bc Ab M Nb N Ob ",children:"..."},"space1"));for(let h=i;h<s;h++)o.push(f(d(h),h));o.push(f(d(s),s,s,!0));for(let m=s+1;m<=u;m++)o.push(f(d(m),m));l-u>1&&o.push((0,r.jsx)("span",{className:"Nd n o Od Bc Ab M Nb N Ob ",children:"..."},"space2"));for(let x=l;x<=t;x++)o.push(f(d(x),x));return s!==t&&o.push(f(d(s+1),">",t+1)),(0,r.jsx)("div",{className:"m n Md Cc s ac Fb bc ",children:o})};t.Z=(0,n.memo)(l)},8252:function(e,t,s){"use strict";var r=s(5893),n=s(7667);s(9247);var c=s(1664),a=s.n(c),l=s(776);let i=e=>{let{category:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)(a(),{href:t.url,prefetch:!1,className:"Lb Ab Mb ",children:t.name})]})};t.Z=(0,n.memo)(i)},9787:function(e,t,s){"use strict";s.d(t,{Z:function(){return m}});var r=s(5893),n=s(9247),c=s(7667),a=s(1664),l=s.n(a),i=s(8252),u=s(587),o=s(6176);let d={post:{95:"m",ffJrBE:{"9t":"vf"}}},f=e=>{let{post:t}=e;return(0,r.jsxs)("article",{className:(0,n.Z)(u.I,d.post),children:[t.thumb&&(0,r.jsx)(l(),{href:t.url,prefetch:!1,className:"Ic Ye wf xf yf zf Af Bf Cf Df ",children:(0,r.jsx)(o.Z,{className:"Ic Ye wf xf Bf Cf Df Ef sc Hb Ff Gf Hf If Jf ",src:t.thumb,alt:t.title,sizes:[[480,"480/400"]]})}),(0,r.jsxs)("div",{className:"m F G H I kb Bb ",children:[(0,r.jsx)("h3",{className:"s t Fb v c ",children:(0,r.jsx)(l(),{prefetch:!1,href:t.url,className:"Lb Mc ",children:t.title})}),t.excerpt&&(0,r.jsx)("div",{className:"Fb Jc Cb ",children:t.excerpt}),(0,r.jsxs)("div",{className:"Kb ",children:[(0,r.jsx)("time",{dateTime:t.isoDate,children:t.date}),null!=t.categories&&t.categories.map(e=>(0,r.jsx)(i.Z,{category:e},e.name))]})]})]})};var b=(0,c.memo)(f);let h=e=>{let{posts:t,className:s}=e;return(0,r.jsx)("div",{className:"m kb Ld "+(s?" "+s:""),children:t.map(e=>(0,r.jsx)(b,{post:e},e.title))})};var m=h},6411:function(e,t){"use strict";let s=e=>{let{host:t}=new URL(e);return!!(t.endsWith("loli.io")||t.endsWith("loli.net"))||"s1.baoshuo.ren"===t};t.Z=s},594:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return n},default:function(){return r.default}});var r=s(68),n=!0},68:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return x}});var r=s(5893),n=s(9247),c=s(9008),a=s.n(c),l=s(6270),i=s(9787),u=s(4740),o=s.n(u),d=s(587),f=s(7694),b=s(4811);let h={header:{4:"Eb",95:"m",ef:"Bb"}},m=e=>{let{title:t,name:s,base:c,posts:u,current:m,totalPosts:x,totalPages:p,url:N}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{property:"og:title",content:t},"og:title"),(0,r.jsx)("meta",{property:"og:url",content:new URL(N,o().baseUrl).toString()},"og:url")]}),(0,r.jsxs)("div",{className:(0,n.Z)(b.n),children:[(0,r.jsxs)("header",{className:(0,n.Z)(d.I,f.F,h.header),children:[(0,r.jsxs)("h1",{className:(0,n.Z)(f.F.title),children:[(0,r.jsx)("span",{className:"r ",children:"标签："}),s]}),(0,r.jsxs)("div",{children:["共 ",x," 篇文章"]})]}),(0,r.jsx)(i.Z,{className:"Fb ",posts:u}),(0,r.jsx)(l.Z,{current:m,total:p,base:c})]})]})};var x=!0;t.default=m},587:function(e,t,s){"use strict";s.d(t,{I:function(){return r},b:function(){return n}}),s(9247);let{card:r,pCard:n}={card:{"1x":"Qb","5v":"Rb","5x":"Sb","3q":"Tb","3o":"Ub",k4:"Vb",k5:"Wb","6l":"Xb"},pCard:{"1x":"Qb","5v":"Rb","5x":"Sb","3q":"Tb","3o":"Ub",k4:"Vb",k5:"Wb","6l":"Xb",kr:"F",ko:"x",kh:"H",kn:"z"}}},4811:function(e,t,s){"use strict";s.d(t,{n:function(){return r}}),s(9247);let{container:r}={container:{ue:"Yb",i6:"Zb",g7:"J",g4:"ac",fu:"Fb",g3:"bc"}}},7694:function(e,t,s){"use strict";s.d(t,{F:function(){return r}}),s(9247);let{...r}={header:{fu:"Fb",kr:"F",ko:"G",kh:"H",kn:"I"},title:{ba:"cc",g7:"s",g4:"t",fu:"u",g3:"v"}}}},function(e){e.O(0,[313,774,888,179],function(){return e(e.s=4934)}),_N_E=e.O()}]);