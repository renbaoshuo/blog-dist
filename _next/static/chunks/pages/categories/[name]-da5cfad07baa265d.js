(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[318],{3427:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories/[name]",function(){return s(7837)}])},6176:function(e,t,s){"use strict";var r=s(5893),c=s(7667),n=s(6411);let a=e=>{let{src:t,className:s,alt:c,sizes:a}=e;return(0,r.jsxs)("picture",{children:[(0,n.Z)(t)&&(null==a?void 0:a.map(e=>{let[s,c]=e;return(0,r.jsx)("source",{srcSet:t+"/"+c,media:"(max-width: ".concat(s,"px)")},s)})),(0,r.jsx)("img",{className:s,src:t,alt:c,loading:"lazy"})]})};t.Z=(0,c.memo)(a)},6270:function(e,t,s){"use strict";var r=s(5893),c=s(7667);s(9247);var n=s(1664),a=s.n(n);let l=e=>{let{total:t,current:s}=e,c=e.base||"/",n=Math.min(1,s-1),l=Math.max(t-1+1,s+1),i=Math.max(n+1,s-2),u=Math.min(l-1,s+2),o=[],d=e=>1==e?c:"".concat(c,"page/").concat(e),f=(e,t,s,c)=>(0,r.jsx)(a(),{prefetch:!1,href:e,className:"dd n o ed Bc Ab "+(c?"gd ":"Jb ")+(c?"hd ":"Vb ")+"M b N q Wb Xb Yb Zb cc fd ",children:t},s||e);s>1&&o.push(f(d(s-1),"<",-1));for(let h=1;h<=n;h++)o.push(f(d(h),h));i-n>1&&o.push((0,r.jsx)("span",{className:"dd n o ed Bc Ab M Lb N Mb ",children:"..."},"space1"));for(let b=i;b<s;b++)o.push(f(d(b),b));o.push(f(d(s),s,s,!0));for(let m=s+1;m<=u;m++)o.push(f(d(m),m));l-u>1&&o.push((0,r.jsx)("span",{className:"dd n o ed Bc Ab M Lb N Mb ",children:"..."},"space2"));for(let x=l;x<=t;x++)o.push(f(d(x),x));return s!==t&&o.push(f(d(s+1),">",t+1)),(0,r.jsx)("div",{className:"m n cd Cc s Sb Pb Tb ",children:o})};t.Z=(0,c.memo)(l)},8252:function(e,t,s){"use strict";var r=s(5893),c=s(7667);s(9247);var n=s(1664),a=s.n(n),l=s(776);let i=e=>{let{category:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)(a(),{href:t.url,prefetch:!1,className:"Jb Ab Kb ",children:t.name})]})};t.Z=(0,c.memo)(i)},9787:function(e,t,s){"use strict";s.d(t,{Z:function(){return m}});var r=s(5893),c=s(9247),n=s(7667),a=s(1664),l=s.n(a),i=s(8252),u=s(587),o=s(6176);let d={post:{95:"m",ffJrBE:{"9t":"if"}}},f=e=>{let{post:t}=e;return(0,r.jsxs)("article",{className:(0,c.Z)(u.I,d.post),children:[t.thumb&&(0,r.jsx)(l(),{href:t.url,prefetch:!1,className:"Ic jf kf lf mf nf of pf qf rf ",children:(0,r.jsx)(o.Z,{className:"Ic jf kf lf pf qf rf sf sc Fb tf uf vf wf xf ",src:t.thumb,alt:t.title,sizes:[[480,"480/400"]]})}),(0,r.jsxs)("div",{className:"m F G H I kb Bb ",children:[(0,r.jsx)("h3",{className:"s t Pb v c ",children:(0,r.jsx)(l(),{prefetch:!1,href:t.url,className:"Jb Mc ",children:t.title})}),t.excerpt&&(0,r.jsx)("div",{className:"Pb Jc Cb ",children:t.excerpt}),(0,r.jsxs)("div",{className:"Ib ",children:[(0,r.jsx)("time",{dateTime:t.isoDate,children:t.date}),null!=t.categories&&t.categories.map(e=>(0,r.jsx)(i.Z,{category:e},e.name))]})]})]})};var h=(0,n.memo)(f);let b=e=>{let{posts:t,className:s}=e;return(0,r.jsx)("div",{className:"m kb bd "+(s?" "+s:""),children:t.map(e=>(0,r.jsx)(h,{post:e},e.title))})};var m=b},6411:function(e,t){"use strict";let s=e=>{let{host:t}=new URL(e);return!!(t.endsWith("loli.io")||t.endsWith("loli.net"))||"s1.baoshuo.ren"===t};t.Z=s},7837:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return c},default:function(){return r.default}});var r=s(7514),c=!0},7514:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return x}});var r=s(5893),c=s(9247),n=s(9008),a=s.n(n),l=s(6270),i=s(4740),u=s.n(i),o=s(9787),d=s(587),f=s(7694),h=s(4811);let b={header:{4:"Ob",95:"m",ef:"Bb"}},m=e=>{let{title:t,name:s,posts:n,postsTotal:i,current:m,total:x,url:p}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{property:"og:title",content:t},"og:title"),(0,r.jsx)("meta",{property:"og:url",content:new URL(1===m?"/categories/".concat(s,"/"):"/categories/".concat(s,"/page/").concat(m,"/"),u().baseUrl).toString()},"og:url")]}),(0,r.jsxs)("div",{className:(0,c.Z)(h.n),children:[(0,r.jsxs)("header",{className:(0,c.Z)(d.I,f.F.header,b.header),children:[(0,r.jsxs)("h1",{className:(0,c.Z)(f.F.title),children:[(0,r.jsx)("span",{className:"r ",children:"分类："}),s]}),(0,r.jsxs)("div",{children:["共 ",i," 篇文章"]})]}),(0,r.jsx)(o.Z,{className:"Pb ",posts:n}),(0,r.jsx)(l.Z,{current:m,total:x,base:"/categories/".concat(s,"/")})]})]})};var x=!0;t.default=m},587:function(e,t,s){"use strict";s.d(t,{I:function(){return r},b:function(){return c}}),s(9247);let{card:r,pCard:c}={card:{"1x":"Vb","5v":"Wb","5x":"Xb","3q":"Yb","3o":"Zb",k4:"ac",k5:"bc","6l":"cc"},pCard:{"1x":"Vb","5v":"Wb","5x":"Xb","3q":"Yb","3o":"Zb",k4:"ac",k5:"bc","6l":"cc",kr:"F",ko:"x",kh:"H",kn:"z"}}},4811:function(e,t,s){"use strict";s.d(t,{n:function(){return r}}),s(9247);let{container:r}={container:{ue:"Qb",i6:"Rb",g7:"J",g4:"Sb",fu:"Pb",g3:"Tb"}}},7694:function(e,t,s){"use strict";s.d(t,{F:function(){return r}}),s(9247);let{...r}={header:{fu:"Pb",kr:"F",ko:"G",kh:"H",kn:"I"},title:{ba:"Ub",g7:"s",g4:"t",fu:"u",g3:"v"}}}},function(e){e.O(0,[313,774,888,179],function(){return e(e.s=3427)}),_N_E=e.O()}]);