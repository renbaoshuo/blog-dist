(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[318],{3427:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories/[name]",function(){return s(7837)}])},7404:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var n=s(5893),r=s(7667),c=s(6411);let a=e=>"arina.loli.net"===new URL(e).hostname?e.replace("//arina.loli.net","//s1.baoshuo.ren"):e,i=e=>{let{src:t,className:s,alt:r,sizes:i,...l}=e;return(0,n.jsxs)("picture",{children:[(0,c.Z)(t)&&(null==i?void 0:i.map(e=>{let[s,r]=e;return(0,n.jsx)("source",{srcSet:a(t)+"/"+r,media:"(max-width: ".concat(s,"px)")},s)})),(0,n.jsx)("img",{className:s,src:a(t),alt:r,loading:"lazy",...l})]})};var l=(0,r.memo)(i)},6270:function(e,t,s){"use strict";var n=s(5893),r=s(7667);s(9247);var c=s(1664),a=s.n(c);let i=e=>{let{total:t,current:s}=e,r=e.base||"/",c=Math.min(1,s-1),i=Math.max(t-1+1,s+1),l=Math.max(c+1,s-2),u=Math.min(i-1,s+2),o=[],d=e=>1==e?r:"".concat(r,"page/").concat(e),f=(e,t,s,r)=>(0,n.jsx)(a(),{prefetch:!1,href:e,className:"dd n o ed Bc Ab "+(r?"gd ":"Lb ")+(r?"hd ":"Vb ")+"M b N q Wb Xb Yb Zb cc fd ",children:t},s||e);s>1&&o.push(f(d(s-1),"<",-1));for(let h=1;h<=c;h++)o.push(f(d(h),h));l-c>1&&o.push((0,n.jsx)("span",{className:"dd n o ed Bc Ab M Nb N Ob ",children:"..."},"space1"));for(let b=l;b<s;b++)o.push(f(d(b),b));o.push(f(d(s),s,s,!0));for(let m=s+1;m<=u;m++)o.push(f(d(m),m));i-u>1&&o.push((0,n.jsx)("span",{className:"dd n o ed Bc Ab M Nb N Ob ",children:"..."},"space2"));for(let x=i;x<=t;x++)o.push(f(d(x),x));return s!==t&&o.push(f(d(s+1),">",t+1)),(0,n.jsx)("div",{className:"m n cd Cc s Sb Fb Tb ",children:o})};t.Z=(0,r.memo)(i)},8252:function(e,t,s){"use strict";var n=s(5893),r=s(7667);s(9247);var c=s(1664),a=s.n(c),i=s(776);let l=e=>{let{category:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{}),(0,n.jsx)(a(),{href:t.url,prefetch:!1,className:"Lb Ab Mb ",children:t.name})]})};t.Z=(0,r.memo)(l)},9787:function(e,t,s){"use strict";s.d(t,{Z:function(){return m}});var n=s(5893),r=s(9247),c=s(7667),a=s(1664),i=s.n(a),l=s(8252),u=s(587),o=s(7404);let d={post:{95:"m",ffJrBE:{"9t":"vf"}}},f=e=>{let{post:t}=e;return(0,n.jsxs)("article",{className:(0,r.Z)(u.I,d.post),children:[t.thumb&&(0,n.jsx)(i(),{href:t.url,prefetch:!1,className:"Ic if wf xf yf zf Af Bf Cf Df ",children:(0,n.jsx)(o.Z,{className:"Ic if wf xf Bf Cf Df Ef sc Hb Ff Gf Hf If Jf ",src:t.thumb,alt:t.title,sizes:[[480,"480/400"]]})}),(0,n.jsxs)("div",{className:"m F G H I kb Bb ",children:[(0,n.jsx)("h3",{className:"s t Fb v c ",children:(0,n.jsx)(i(),{prefetch:!1,href:t.url,className:"Lb Mc ",children:t.title})}),t.excerpt&&(0,n.jsx)("div",{className:"Fb Jc Cb ",children:t.excerpt}),(0,n.jsxs)("div",{className:"Kb ",children:[(0,n.jsx)("time",{dateTime:t.isoDate,children:t.date}),null!=t.categories&&t.categories.map(e=>(0,n.jsx)(l.Z,{category:e},e.name))]})]})]})};var h=(0,c.memo)(f);let b=e=>{let{posts:t,className:s}=e;return(0,n.jsx)("div",{className:"m kb bd "+(s?" "+s:""),children:t.map(e=>(0,n.jsx)(h,{post:e},e.title))})};var m=b},6411:function(e,t){"use strict";let s=e=>{let{host:t}=new URL(e);return!!(t.endsWith("loli.io")||t.endsWith("loli.net"))||"s1.baoshuo.ren"===t};t.Z=s},7837:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return r},default:function(){return n.default}});var n=s(7514),r=!0},7514:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return b}});var n=s(5893),r=s(9247),c=s(9008),a=s.n(c),i=s(6270),l=s(9787),u=s(587),o=s(7694),d=s(4811);let f={header:{4:"Eb",95:"m",ef:"Bb"}},h=e=>{let{title:t,name:s,posts:c,postsTotal:h,current:b,total:m,url:x}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:t}),(0,n.jsx)("meta",{property:"og:title",content:t},"og:title")]}),(0,n.jsxs)("div",{className:(0,r.Z)(d.n),children:[(0,n.jsxs)("header",{className:(0,r.Z)(u.I,o.F.header,f.header),children:[(0,n.jsxs)("h1",{className:(0,r.Z)(o.F.title),children:[(0,n.jsx)("span",{className:"r ",children:"分类："}),s]}),(0,n.jsxs)("div",{children:["共 ",h," 篇文章"]})]}),(0,n.jsx)(l.Z,{className:"Fb ",posts:c}),(0,n.jsx)(i.Z,{current:b,total:m,base:"/categories/".concat(s,"/")})]})]})};var b=!0;t.default=h},587:function(e,t,s){"use strict";s.d(t,{I:function(){return n},b:function(){return r}}),s(9247);let{card:n,pCard:r}={card:{"1x":"Vb","5v":"Wb","5x":"Xb","3q":"Yb","3o":"Zb",k4:"ac",k5:"bc","6l":"cc"},pCard:{"1x":"Vb","5v":"Wb","5x":"Xb","3q":"Yb","3o":"Zb",k4:"ac",k5:"bc","6l":"cc",kr:"F",ko:"x",kh:"H",kn:"z"}}},4811:function(e,t,s){"use strict";s.d(t,{n:function(){return n}}),s(9247);let{container:n}={container:{ue:"Qb",i6:"Rb",g7:"J",g4:"Sb",fu:"Fb",g3:"Tb"}}},7694:function(e,t,s){"use strict";s.d(t,{F:function(){return n}}),s(9247);let{...n}={header:{fu:"Fb",kr:"F",ko:"G",kh:"H",kn:"I"},title:{ba:"Ub",g7:"s",g4:"t",fu:"u",g3:"v"}}}},function(e){e.O(0,[313,774,888,179],function(){return e(e.s=3427)}),_N_E=e.O()}]);